import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'
import { ApiError } from "../utils/ApiError.js";



const uploadOnCloudinary = async(localFilePath)=>{
    try{
        if(!localFilePath){
            return new ApiError(403,"No file found")
        }
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
            folder: process.env.CLOUDINARY_FOLDER
        });

        // file has been uloaded successfully
        console.log("File is uploaded on cloudinary succesfully: ", response.url);
        fs.unlinkSync(localFilePath);
        return response.url;
    }
    catch(err){
        console.log("Errow while uploading file on cloudinary ⚠️ ",err)
        fs.unlinkSync(localFilePath);
        return ApiError(401, "Errow while uploading file on cloudinary ⚠️ ")
    }
}




const deleteFromCloudinary = async(imageUrl)=>{
    try{
        if(!imageUrl){
            return new ApiError(403, "Image url is required");
        }

        // extract image public id from imageUrl => eg: http://res.cloudinary.com/gifwfetv/image/upload/v1543657/Ecommerce/ugfjbddcmxewnwajzox.jpg
        const parts = imageUrl.split('/');
        const publicIdWithExtension = parts.slice(-2).join('/');
        const publicId = publicIdWithExtension.split('.')[0];
        console.log("publicId: ", publicId);

        // delete image from cloudinary
        const response = await cloudinary.uploader.destroy(publicId,{
            resource_type: "image"
        })

        if (response.result === 'ok') {
            console.log("Image deleted successfully from Cloudinary: ", response);
            return true;
        } else {
            console.log("Failed to delete image from Cloudinary: ", response);
            return false;
        }
    }
    catch(err){
        console.log("Errow while deleting file from cloudinary ⚠️ ",err)
        return false;
    }
}






export { uploadOnCloudinary, deleteFromCloudinary }