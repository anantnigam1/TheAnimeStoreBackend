import { Router } from 'express'
import { createOrder, myOrders, getOrder, updateOrderStatus } from '../controllers/orders.js'
import { auth, admin } from '../middleware/auth.js'
const r=Router()
r.post('/', auth, createOrder)
r.get('/mine', auth, myOrders)
r.get('/:id', auth, getOrder)
r.put('/:id', auth, admin, updateOrderStatus)
export default r
