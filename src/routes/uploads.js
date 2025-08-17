import { Router } from 'express'
import { upload, handleUpload } from '../controllers/uploads.js'
import { auth, admin } from '../middleware/auth.js'
const r=Router()
r.post('/images', auth, admin, upload.array('files', 6), handleUpload)
export default r
