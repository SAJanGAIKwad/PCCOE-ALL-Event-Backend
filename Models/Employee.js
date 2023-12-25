const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    password:String
})
const EmployeeModel = mongoose.model('Admin-User-Data',EmployeeSchema)

module.exports = EmployeeModel 