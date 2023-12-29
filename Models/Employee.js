import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema({
    name:String,
    email:{type:String, unique:true},
    mobile:Number,
    password:String
})
const EmployeeModel = mongoose.model('Admin-User-Data',EmployeeSchema)

export default EmployeeModel;