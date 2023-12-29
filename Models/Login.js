import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name:String,
    email:{type:String, unique:true},
    mobile:Number,
    password:String
})
const UserModel = mongoose.model('Admin-User-Data',UserSchema)

export default UserModel;