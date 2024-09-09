import { Paper } from "../models/paper.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js"; 
import { uploadOnCloudinary } from "../utils/coudinary.js";




const pdfUploader = asyncHandler(async(req,res)=>{
    const { subject } = req.body;
    const userId = req.user._id;

    // Upload paper to Cloudinary
    try{
        const fileUrl = await uploadOnCloudinary(req.files?.pdf[0]?.path);
        console.log("file Url : ", fileUrl);
    // Create paper record
    const newPaper = new Paper({
        userId,
        fileUrl,
        subject,
        status: 'submitted',
      });
  
      await newPaper.save();
      return res.status(200).json(
          new ApiResponse(
              200,
              "Paper uploaded successfully",
              newPaper
          )
      )
    }
    catch(err){
        console.log(err);
        return res.status(500).json(
            new ApiError(500, "Internal server error")
        )
    }
})







export { 
    pdfUploader,

};