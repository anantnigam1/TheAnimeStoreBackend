import mongoose from 'mongoose'
export const connectDB = async () => {
  const uri = process.env.MONGO_URI
  if (!uri) throw new Error('MONGO_URI missing')
  mongoose.set('strictQuery', true)
  await mongoose.connect(uri, { dbName: process.env.MONGO_DB || 'anime_arcadia' })
  console.log('Mongo connected')
}
