import User from "../Models/user.js";
const jwtSecret = 'fasefraw4r5r3wq45wdfgw34twdfg';
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";

const loginDirection = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        jwt.sign({
                            email: user.email,
                            id: user._id
                        }, jwtSecret, {}, (err, token) => {
                            if (err) throw err;
                            res.cookie('token', token).json(user);
                        });
                    }
                    if (err) {
                        res.json("Check Credentials")
                    }
                });
            }
        })

}

export default loginDirection;