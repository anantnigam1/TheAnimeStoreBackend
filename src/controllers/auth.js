import jwt from 'jsonwebtoken'
import User from '../models/User.js'
const tokenFor=(u)=>jwt.sign({id:u._id}, process.env.JWT_SECRET||'devsecret', { expiresIn:'7d' })
export const signup=async(req,res)=>{ const {name,email,password}=req.body; const ex=await User.findOne({email}); if(ex) return res.status(400).json({message:'Email already used'}); const u=await User.create({name,email,password}); res.status(201).json({ token:tokenFor(u), user:{id:u._id,name:u.name,email:u.email} }) }
export const login=async(req,res)=>{ const {email,password}=req.body; const u=await User.findOne({email}).select('+password'); if(!u||!(await u.comparePassword(password))) return res.status(400).json({message:'Invalid credentials'}); res.json({ token:tokenFor(u), user:{id:u._id,name:u.name,email:u.email,isAdmin:u.isAdmin} }) }
export const me=async(req,res)=> res.json({ user:{ id:req.user._id, name:req.user.name, email:req.user.email, isAdmin:req.user.isAdmin } })
