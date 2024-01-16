import User from "../Models/user.js";
import bcrypt from "bcrypt";

const registerDirection = async (req, res) => {
    const { name, email, mobile, password } = req.body
    bcrypt.hash(password, 10)
        .then(hash => {
            User.create({ name, email, mobile, password: hash })
                .then(users => res.json(users))
                .catch(err => res.json(err))
        })
}

export default registerDirection;