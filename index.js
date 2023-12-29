import express from "express";
// import mongoose from "mongoose";
import cors from "cors";
import UserModel from "./Models/Login.js";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";

dotenv.config()
const port=process.env.PORT || 3002
const DATABASE_URL=process.env.MONGODB_URI;

const app = express()
app.use(express.json())
app.use(cors())

connectDB(DATABASE_URL);

app.get('/',(req,res)=>{
    res.send("this is the resposne at home route");
})
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
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
    UserModel.create(req.body)
        .then(admin_user_datas => res.json(admin_user_datas))
        .catch(err => res.json(err))
})

app.listen(port, () => {
    console.log("Server is Running on port ",port);
})