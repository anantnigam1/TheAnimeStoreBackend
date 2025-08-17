import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, select: false },
  isAdmin: { type: Boolean, default: false },
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
}, { timestamps: true })
userSchema.pre('save', async function(next){ if(!this.isModified('password')) return next(); const s=await bcrypt.genSalt(10); this.password=await bcrypt.hash(this.password,s); next() })
userSchema.methods.comparePassword=function(c){ return bcrypt.compare(c,this.password) }
export default mongoose.model('User', userSchema)
