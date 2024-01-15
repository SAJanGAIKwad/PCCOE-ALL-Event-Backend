import express  from "express";
import resetDirection from "../controllers/resetController.js";

const router=express.Router();


router.route('/:id/:token').post(resetDirection);
export default router;