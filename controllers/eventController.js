import Event from "../Models/event.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const createEvent = asyncHandler(async (req,res)=>{
    res.send("hello");
});

export default createEvent;