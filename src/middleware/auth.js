import jwt from 'jsonwebtoken'
import User from '../models/User.js'
export const auth = async (req,res,next)=>{
  try{ const token=(req.headers.authorization||'').split(' ')[1]; if(!token) return res.status(401).json({message:'No token'})
    const d=jwt.verify(token, process.env.JWT_SECRET||'devsecret'); const u=await User.findById(d.id); if(!u) return res.status(401).json({message:'User not found'}); req.user=u; next()
  }catch(e){ res.status(401).json({message:'Invalid token'}) }
}
export const admin=(req,res,next)=> req.user?.isAdmin? next(): res.status(403).json({message:'Admin only'})
