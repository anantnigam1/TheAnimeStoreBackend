import Product from '../models/Product.js'
export const listProducts=async(req,res)=>{ const {q,category}=req.query; const f={}; if(category) f.category=category; if(q) f.title={$regex:q,$options:'i'}; res.json(await Product.find(f).sort({createdAt:-1})) }
export const getProduct=async(req,res)=>{ const it=await Product.findById(req.params.id); if(!it) return res.status(404).json({message:'Not found'}); res.json(it) }
export const createProduct=async(req,res)=> res.status(201).json(await Product.create(req.body))
export const updateProduct=async(req,res)=> res.json(await Product.findByIdAndUpdate(req.params.id, req.body, { new:true }))
export const deleteProduct=async(req,res)=>{ await Product.findByIdAndDelete(req.params.id); res.json({ok:true}) }
export const categories=async(req,res)=> res.json(await Product.distinct('category'))
