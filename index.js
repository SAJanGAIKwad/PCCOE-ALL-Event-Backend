import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import cookieParser from "cookie-parser";

import loginRoutes from "./router/loginRoutes.js";
import registerRoutes from "./router/registerRoutes.js";
import forgotRoutes from "./router/forgotRoutes.js";
import resetRoutes from "./router/resetRoutes.js";
import profileRoutes from "./router/profileRoutes.js";
import eventRoutes from "./router/eventRoutes.js";


dotenv.config()
const port = process.env.PORT || 3002
const DATABASE_URL = process.env.MONGODB_URI;

const app = express()
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173',
}));

connectDB(DATABASE_URL);


app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/forgot-password', forgotRoutes);
app.use('/reset-password', resetRoutes);
app.use('/profile', profileRoutes);

app.use('/api/events', eventRoutes);

app.post('/logout', (req, res) => {
  res.cookie('token', '').json(true);
});


app.get('/', (req, res) => {
  res.send("this is the resposne at home route");
})


app.listen(port, () => {
  console.log("Server is Running on port ", port);
})