import Stripe from 'stripe'
import Razorpay from 'razorpay'
export const stripe = process.env.STRIPE_SECRET ? new Stripe(process.env.STRIPE_SECRET, { apiVersion: '2024-06-20' }) : null
export const razorpay = (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) ? new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET }) : null
