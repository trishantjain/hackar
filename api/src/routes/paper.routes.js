import express from "express";
const router = express.Router();



// import controllers/Md
import { isStudent, verifyJWT } from "../middlewares/auth.middleware.js"
import { pdfUploader } from "../controllers/paper.controlllers.js";
import { upload } from "../middlewares/multer.middlewares.js";



// API route

router.route("/upload").post(
    verifyJWT, isStudent,
    upload.fields([
        {name: "pdf", maxCount: 1},
    ]), 
    pdfUploader
);


export default router;