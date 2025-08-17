import { Router } from 'express'
import { getWishlist, toggleWishlist } from '../controllers/wishlist.js'
import { auth } from '../middleware/auth.js'
const r=Router()
r.get('/', auth, getWishlist)
r.post('/:productId', auth, toggleWishlist)
export default r
