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
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        // required:true
     },
     
    image:{
        type:String,    //cloudinary url
       
    },
    status:{
        type: String,
        enum: ['live','past','upcoming'],
        default:'upcoming'
    }

},{timestamps:true});

// Pre-save hook to set the status based on the event dates
EventSchema.pre('save', function(next) {
    const now = new Date();
    if (this.date.eventStart <= now && this.date.eventEnd >= now) {
        this.status = 'live';
    } else if (this.date.eventEnd < now) {
        this.status = 'past';
    } else {
        this.status = 'upcoming';
    }
    next();
});

const Event=mongoose.model("Event",EventSchema)

export default Event;
