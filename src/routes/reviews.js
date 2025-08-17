import { Router } from 'express'
import { addReview } from '../controllers/reviews.js'
import { auth } from '../middleware/auth.js'
const r=Router()
r.post('/:productId', auth, addReview)
export default r
