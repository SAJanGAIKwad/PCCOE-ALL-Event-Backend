import User from "../Models/user.js";
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

const forgotDirection = (req, res) => {
    const { email } = req.body;
    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.send({ Status: "User not Existed" })
            }
            const token = jwt.sign({ id: user._id }, "jwt_secret_key", { expiresIn: "1d" })
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'sajangaikwad2002@gmail.com',
                    pass: 'hyctdhaxvvjftjlz',
                }
            });

            var mailOptions = {
                from: 'sajangaikwad2002@gmail.com',
                to: 'sajan.gaikwad21@pccoepune.org',
                subject: 'Reset Your Password',
                text: `http://localhost:5173/reset-password/${user._id}/${token}`
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    return res.send({ Status: "Success" })
                }
            });
        });
}

export default forgotDirection;