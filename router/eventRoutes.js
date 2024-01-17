import express  from "express";
import {createEvent,getAllEvents} from "../controllers/eventController.js";
import {upload} from "../middlewares/multer.middleware.js";

const router=express.Router();

router.route('/').post(upload.fields([
    {
        name: 'image',
        maxCount: 1
    }
]),createEvent).get(getAllEvents);


export default router;