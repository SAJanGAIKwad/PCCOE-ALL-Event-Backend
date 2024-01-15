import express  from "express";
import loginDirection from "../controllers/loginController.js";

const router=express.Router();


router.route('/').post(loginDirection);
export default router;