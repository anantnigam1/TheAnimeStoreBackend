import { Router } from 'express'
import { listProducts, getProduct, createProduct, updateProduct, deleteProduct, categories } from '../controllers/products.js'
import { auth, admin } from '../middleware/auth.js'
const r=Router()
r.get('/', listProducts); r.get('/categories', categories); r.get('/:id', getProduct)
r.post('/', auth, admin, createProduct); r.put('/:id', auth, admin, updateProduct); r.delete('/:id', auth, admin, deleteProduct)
export default r
