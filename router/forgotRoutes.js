import express  from "express";
import forgotDirection from "../controllers/forgotController.js";

const router=express.Router();


router.route('/').post(forgotDirection);
export default router;