import mongoose from "mongoose";
// import User from './Login.js';

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
    currentRegisterations:{
        type:Number,
        required:true,
        default:0
    },
    organizer:{
        // type:mongoose.Schema.Types.ObjectId,
        // ref:{User},
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["active","inactive"],
        required:true,
        default:"active"
    },
    image:{
        type:String,
        required:[true,"image is required"]
    }

},{timestamps:true});

const Event=mongoose.model("Event",EventSchema)

export default Event;