import { v2 as cloudinary } from "cloudinary";


// cloudinary config
const cloudinaryConnect = async()=>{
    try{
        await cloudinary.config({ 
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
            api_key: process.env.CLOUDINARY_API_KEY, 
            api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View Credentials' below to copy your API secret
        });
        console.log("✅ Cloudinary connected successfully");
    }
    catch(err){
        console.log("⚠️ Cloudinary connection failed");
    }
}

export { cloudinaryConnect };