import mongoose from 'mongoose'
const orderItemSchema = new mongoose.Schema({ product:{ type:mongoose.Schema.Types.ObjectId, ref:'Product', required:true }, title:String, price:Number, qty:Number, thumbnail:String }, { _id:false })
const orderSchema = new mongoose.Schema({
  user:{ type:mongoose.Schema.Types.ObjectId, ref:'User', required:true },
  items:[orderItemSchema],
  shipping:{ name:String, phone:String, address1:String, city:String, pincode:String },
  payment:{ method:{ type:String, enum:['stripe','razorpay','cod','card'], default:'card' }, status:{ type:String, enum:['pending','paid','failed','refunded'], default:'pending' }, txnId:String, raw:Object },
  total:Number, status:{ type:String, enum:['processing','shipped','delivered','cancelled'], default:'processing' }
}, { timestamps:true })
export default mongoose.model('Order', orderSchema)
