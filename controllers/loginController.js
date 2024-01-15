import User from "../Models/user.js";
const jwtSecret = 'fasefraw4r5r3wq45wdfgw34twdfg';
import jwt from 'jsonwebtoken';

const loginDirection =  (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    jwt.sign({
                        email: user.email,
                        id: user._id
                    }, jwtSecret, {}, (err, token) => {
                        if (err) throw err;
                        res.cookie('token', token).json(user);
                    });
                } else {
                    res.json("Check Credentials")
                }
            } else {
                res.json("No Record Found")
            }
        })
}

export default loginDirection;