import express  from "express";
import {createEvent,getAllEvents} from "../controllers/eventController.js";

const router=express.Router();

router.route('/').post(createEvent).get(getAllEvents);


export default router;