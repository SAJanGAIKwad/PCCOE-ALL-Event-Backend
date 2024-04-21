import express  from "express";
import {createEvent,getAllEvents,getLiveEvents,getPastEvents,getUpcomingEvents} from "../controllers/eventController.js";
import {upload} from "../middlewares/multer.middleware.js";

const router=express.Router();

router.route('/').post(upload.fields([
    {
        name: 'image',
        maxCount: 1
    }
]),createEvent).get(getAllEvents);

router.route('/all-events').get(getAllEvents);
router.route('/live-events').get(getLiveEvents);
router.route('/past-events').get(getPastEvents);
router.route('/upcoming-events').get(getUpcomingEvents);

export default router;
