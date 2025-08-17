import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import { connectDB } from './src/config/db.js'
import authRoutes from './src/routes/auth.js'
import productRoutes from './src/routes/products.js'
import orderRoutes from './src/routes/orders.js'
import uploadRoutes from './src/routes/uploads.js'
import paymentRoutes from './src/routes/payments.js'
import reviewRoutes from './src/routes/reviews.js'
import wishlistRoutes from './src/routes/wishlist.js'

const app = express()
app.use(helmet())
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') || '*', credentials: true }))
app.use(express.json({ limit: '2mb' }))
app.use(morgan('dev'))
app.set('trust proxy', 1)
app.use(rateLimit({ windowMs: 60 * 1000, limit: 240 }))

app.get('/api/health', (_, res) => res.json({ status: 'ok', ts: new Date().toISOString() }))

app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/uploads', uploadRoutes)
app.use('/api/payments', paymentRoutes)
app.use('/api/reviews', reviewRoutes)
app.use('/api/wishlist', wishlistRoutes)

// global error
app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500).json({ message: err.message || 'Server error' })
})

const PORT = process.env.PORT || 8080
const start = async () => {
  await connectDB()
  app.listen(PORT, () => console.log(`API on :${PORT}`))
}
start()
