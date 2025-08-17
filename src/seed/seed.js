import 'dotenv/config'
import mongoose from 'mongoose'
import Product from '../models/Product.js'
import User from '../models/User.js'
import { connectDB } from '../config/db.js'
const run=async()=>{
  await connectDB()
  await Product.deleteMany()
  await User.deleteMany({ email:'admin@arcadia.test' })
  await Product.insertMany([
    {"title":"Naruto Uzumaki — Rasengan Figure (20cm)","brand":"Banpresto","category":"Figures","price":2499,"rating":4.7,"stock":15,"images":["https://i.imgur.com/Qw7xg0k.jpeg"],"thumbnail":"https://i.imgur.com/Qw7xg0k.jpeg","tags":["Naruto","Figure","Limited"],"desc":"Dynamic Naruto figure with translucent Rasengan effect and removable base."},
    {"title":"Goku Super Saiyan Blue — Spirit Surge (22cm)","brand":"Banpresto","category":"Figures","price":2999,"rating":4.8,"stock":9,"images":["https://i.imgur.com/5qHnO7x.jpeg"],"thumbnail":"https://i.imgur.com/5qHnO7x.jpeg","tags":["Dragon Ball","Figure"],"desc":"Fierce Goku with energy aura base. Pairs with Vegeta for a diorama."}
  ])
  const admin = await User.create({ name:'Admin', email:'admin@arcadia.test', password:'admin123', isAdmin:true })
  console.log('Seeded. Admin:', admin.email)
  await mongoose.disconnect()
}
run().catch(e=>{ console.error(e); process.exit(1) })
