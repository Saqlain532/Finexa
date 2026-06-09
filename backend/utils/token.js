import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { RefreshToken } from '../model/refreshTokenModel.js';


const ACCESS_TTL =  60 * 60 * 24 * 7; // Access token lasts 7 days 
const REFRESH_TTL_SEC = 60 * 60 * 24 * 14; // Refresh token lasts 14 days

function hashToken(token) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

function createJti() {
  return crypto.randomBytes(16).toString('hex');
}

function signAccessToken(user) {
  const payload = { id: user._id.toString(), email: user.email };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: ACCESS_TTL });
}

function signRefreshToken(user, jti) {
  const payload = { id: user._id.toString(), jti };
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_TTL_SEC });
}

async function persistRefreshToken({ user, refreshToken, jti, ip, userAgent }) {
  const tokenHash = hashToken(refreshToken);
  const expiresAt = new Date(Date.now() + REFRESH_TTL_SEC * 1000);
  
  await RefreshToken.create({ 
    user: user._id, 
    tokenHash, 
    jti, 
    expiresAt, 
    ip, 
    userAgent 
  });
}

async function rotateRefreshToken(oldDoc, user, req) {
  // 1. Revoke old token
  oldDoc.revokedAt = new Date();
  const newJti = createJti();
  oldDoc.replacedBy = newJti;
  await oldDoc.save();

  // 2. Issue new pair
  const newAccess = signAccessToken(user);
  const newRefresh = signRefreshToken(user, newJti);

  // 3. Persist new token metadata
  await persistRefreshToken({
    user,
    refreshToken: newRefresh,
    jti: newJti,
    ip: req.ip,
    userAgent: req.headers['user-agent'] || ''
  });

  return { 
    accessToken: newAccess, 
    refreshToken: newRefresh 
  };
}

export {
  hashToken,
  createJti,
  signAccessToken,
  signRefreshToken,
  persistRefreshToken,
  rotateRefreshToken
};