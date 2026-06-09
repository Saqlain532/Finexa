import jwt from 'jsonwebtoken';

export const auth = (req, res, next)=>{
      console.log('Middleware started');
      const authHeader = req.headers.authorization || '';
      const [scheme, token] = authHeader.split(' ');
       if(scheme!=='Bearer' || !token ){
        return res.status(401).json({message:"Missing or invalid Authorization header"});
       }
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = {id:decode.id, email:decode.email};
            console.log('Calling next');
            next();
        } catch (error) {
            if(error.name==='TokenExpiredError'){
                return res.status(401).json({message:"Access token expired"});
            }
            return res.status(401).json({message:'Invalid Token', error:error.message});
        
       }
}
