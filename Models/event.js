import mongoose from "mongoose";

const EventSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
        default:"technical"
    },
    date:{
       eventStart:{
        type:Date,
        // required:true
       },
       eventEnd:{
        type:Date,
        // required:true
       }
    },
    location:{
        type:String,
        required:true
    },
    currentRegisterations:{
        type:Number,
        required:true,
        default:0
    },
    organizer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        // required:true
     },
     
    image:{
        type:String,    //cloudinary url
       
    }

},{timestamps:true});

const Event=mongoose.model("Event",EventSchema)

export default Event;