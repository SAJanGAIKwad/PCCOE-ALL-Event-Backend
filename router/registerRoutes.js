import express  from "express";
import registerDirection from "../controllers/registerController.js";

const router=express.Router();


router.route('/').post(registerDirection);
export default router;