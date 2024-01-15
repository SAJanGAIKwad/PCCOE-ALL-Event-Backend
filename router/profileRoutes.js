import express  from "express";
import profileDirection from "../controllers/profileController.js";

const router=express.Router();


router.route('/').get(profileDirection);
export default router;