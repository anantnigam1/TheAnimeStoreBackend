import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import cloudinary from 'cloudinary'
cloudinary.v2.config({ cloud_name:process.env.CLOUDINARY_CLOUD_NAME, api_key:process.env.CLOUDINARY_API_KEY, api_secret:process.env.CLOUDINARY_API_SECRET })
const storage=new CloudinaryStorage({ cloudinary:cloudinary.v2, params:{ folder:'anime-arcadia' } })
export const upload=multer({ storage })
export const handleUpload=(req,res)=>{ const files=(req.files||[]).map(f=>f.path); res.status(201).json({ files }) }
