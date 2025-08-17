export const getWishlist=async(req,res)=> res.json({ wishlist:req.user.wishlist })
export const toggleWishlist=async(req,res)=>{ const pid=req.params.productId; const i=req.user.wishlist.findIndex(x=>x.toString()===pid); if(i>=0) req.user.wishlist.splice(i,1); else req.user.wishlist.push(pid); await req.user.save(); res.json({ wishlist:req.user.wishlist }) }
