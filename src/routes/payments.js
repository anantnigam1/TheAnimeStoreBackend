import { Router } from 'express'
import { stripeCheckout, stripeWebhook, razorpayOrder, razorpayVerify, expressRaw } from '../controllers/payments.js'
const r=Router()
r.post('/stripe/checkout', stripeCheckout)
r.post('/stripe/webhook', expressRaw, stripeWebhook)
r.post('/razorpay/order', razorpayOrder)
r.post('/razorpay/verify', razorpayVerify)
export default r
