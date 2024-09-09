import { asyncHandler } from "../utils/asyncHandler.js"
import jwt from 'jsonwebtoken';
import { ApiError } from "../utils/ApiError.js"



const verifyJWT = asyncHandler(async(req, _, next)=> {
    try{
        const accessToken = await req.cookies?.accessToken ||  req.header("Authorization")?.replace("Bearer ", "") || req.body?.accessToken;

        if(!accessToken){
            throw next(new ApiError(404, "Unauthorized request or token not found"));
        }

        // verify the token
        const decode = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        console.log("decode : ", decode);

        req.user = decode;
        next();
    }
    catch(err){
        throw new ApiError(401, err?.message ||  "Invalid Token")
    }
})



const isStudent =  asyncHandler(async(req,_,next)=>{
    try{
        console.log(req.user.accountType, " , ", process.env.STUDENT);
        if(req.user.accountType == process.env.STUDENT)
            next();
        else
            throw new ApiError(401, "Please try again")
    }   
    catch(err){
        throw new ApiError(401, "User role cannot be verified, Please try again")
    }
})




const isChecker =  asyncHandler(async(req,_,next)=>{
    try{
        if(req.user.accountType === process.env.CHECKER)
            next();
        else
            throw new ApiError(401, "Please try again")
    }   
    catch(err){
        throw new ApiError(401, "User role cannot be verified, Please try again")
    }
})






export { verifyJWT, isStudent, isChecker };