import Event from "../Models/event.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

const createEvent = asyncHandler(async (req,res)=>{

    // const organizer = req.user.id;
     
   const {title,description,category,date,location} = req.body;

   if(!title || !description || !date || !location ){
       console.log("Please fill all the details!!");
       throw new Error("Please fill all the details!!");
   }
//    console.log("file from req: ",req.files.image);

   const imageLocalPath=req.files?.image[0]?.path;
   if(!imageLocalPath){
         console.log("Please provide  image local path");
         throw new Error("Please provide image local path");
   }

   const image=await uploadOnCloudinary(imageLocalPath);   //cloudinary sends whole response object. We need to extract url from it. ->image.url
   if(!image){
    console.log("provide image!!");
    throw new Error("image missing!");
}
   const newEvent= new Event({
       title,
       description,
       category,
       date,
       location,
    //    organizer,
       image:image.url || ""
   });

   try{
       await newEvent.save();

       res.status(201).json(
           {
               _id: newEvent._id,
               title: newEvent.title,
               description: newEvent.description,
               category: newEvent.category,
               date: newEvent.date,
               location: newEvent.location,
               organizer: newEvent.organizer,
               image: newEvent.image,
               status:newEvent.status
           });

   } catch(error){
       res.status(400)
       console.log("invalid data")
       throw new Error("Invalid Data!")
   }
});

const getLiveEvents = async (req, res) => {
 try {
    const liveEvents = await Event.find({ status: 'live' });
    res.json(liveEvents);
 } catch (error) {
    res.status(500).json({ message: 'Error fetching live events' });
 }
};

const getPastEvents = async (req, res) => {
 try {
    const pastEvents = await Event.find({ status: 'past' });
    res.json(pastEvents);
 } catch (error) {
    res.status(500).json({ message: 'Error fetching past events' });
 }
};

const getUpcomingEvents = async (req, res) => {
 try {
    const upcomingEvents = await Event.find({ status: 'upcoming' });
    res.json(upcomingEvents);
 } catch (error) {
    res.status(500).json({ message: 'Error fetching upcoming events' });
 }
};

const getAllEvents = async (req, res) => {
 try {
    const allEvents = await Event.find({});
    res.json(allEvents);
 } catch (error) {
    res.status(500).json({ message: 'Error fetching all events' });
 }
};

export {getLiveEvents,getPastEvents,getUpcomingEvents,getAllEvents,createEvent};
