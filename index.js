import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import EmployeeModel from "./Models/Employee.js";
import dotenv from "dotenv";

dotenv.config()
const port=process.env.PORT || 3001

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Admin-User-Data")

app.get('/',(req,res)=>{
    res.send("this is the resposne at home route");
})
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                } else {
                    res.json("Check Credentials")
                }
            } else {
                res.json("No Record Found")
            }
        })
})

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(admin_user_datas => res.json(admin_user_datas))
        .catch(err => res.json(err))
})

app.listen(port, () => {
    console.log("Server is Running on port ",port);
})