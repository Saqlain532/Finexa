import jwt from 'jsonwebtoken'
import  bcrypt from 'bcryptjs'
import { User } from '../model/UserModel.js'
import { RefreshToken } from '../model/refreshTokenModel.js';
import {
  hashToken,
  createJti,
  signAccessToken,
  signRefreshToken,
  persistRefreshToken,
  rotateRefreshToken
} from '../utils/token.js'


//Register user

export const register = async (req, res)=>{
      try {
        console.log(req.body);
        const {firstName, lastName, email, password} = req.body;
        if(!firstName || !lastName || !email || !password ){
            return res.status(400).json({success: false , message : 'Missing Details'})
        }
        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(400).json({message:"User exist"});

        const hashedPassword =await bcrypt.hash(password, 10);
        const newUser = new User({  email, password: hashedPassword , firstName, lastName});
        await newUser.save();

        return res.status(201).json({ message: 'User created successfully' });

      } catch (error) {
        return res.status(500).json({ message: 'Server error'  , error : error.message});
      }
};

// Login User 


export const login = async(req, res)=>{
    try {
        const {email, password} = req.body;
        if(!email || !password)
        return res.status(400).json({success: false, message: 'Email and password are required '});
       
        const user = await User.findOne({email});
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
        const accessToken = signAccessToken(user);
        const jti = createJti();
        const refreshToken = signRefreshToken(user, jti);

        await persistRefreshToken({
        user,
        refreshToken,
        jti,
        ip: req.ip,
        userAgent: req.headers['user-agent'] || ''
        });
        return res.json({ accessToken, refreshToken });

    } catch (error) {
       return  res.status(500).json({ message: 'Server error', error:error.message });
    }
}


// 2. REFRESH ENDPOINT
 export const refreshPoint = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.status(401).json({ message: 'No refresh token provided' });

    let decoded;
    try {
      decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    } catch (err) {
      return res.status(401).json({ message: 'Invalid or expired refresh token' });
    }

    const tokenHash = hashToken(refreshToken);
    const doc = await RefreshToken.findOne({ tokenHash, jti: decoded.jti }).populate('user');

    if (!doc) return res.status(401).json({ message: 'Refresh token not recognized' });
    if (doc.revokedAt) return res.status(401).json({ message: 'Refresh token has been revoked' });
    if (doc.expiresAt < new Date()) return res.status(401).json({ message: 'Refresh token expired' });

    // Rotate tokens (revokes the current one, creates a fresh pair)
    const result = await rotateRefreshToken(doc, doc.user, req);
    
    // Return the brand new pair to the frontend
    return res.json({ 
      accessToken: result.accessToken, 
      refreshToken: result.refreshToken 
    });
  } catch (err) {
    console.log("Exact error message: ", err.message, err.stack)
    return res.status(500).json({ message: 'Server error', error:err.message, stack:err.stack });
  }
};

// Logiout controller
export const logout = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (refreshToken) {
      const tokenHash = hashToken(refreshToken);
      const doc = await RefreshToken.findOne({ tokenHash });
      
      if (doc && !doc.revokedAt) {
        doc.revokedAt = new Date();
        await doc.save();
      }
    }

    return res.json({ message: 'Logged out successfully' });
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};