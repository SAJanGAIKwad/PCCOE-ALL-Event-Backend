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
        required:true
    },
    date:{
       eventStart:{
        type:Date,
        required:true
       },
       eventEnd:{
        type:Date,
        required:true
       }
    },
    location:{
        type:String,
        required:true
    },
    currentRegisteration:{
        type:Number,
        required:true
    },
    organizer:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["active","inactive"],
        required:true
    },
    image:{
        type:String,
        required:true
    }

},{timestamps:true});

const Event=mongoose.model("Event",EventSchema)

export default Event;