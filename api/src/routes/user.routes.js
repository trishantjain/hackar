import express from "express";
const router = express.Router();



// import controllers/Md
import { singup, login } from "../controllers/user.controller.js" 
import { verifyJWT } from "../middlewares/auth.middleware.js"



// API route  
router.route("/signup").post(singup);
router.route("/login").post(login);




export default router;