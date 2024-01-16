import User from "../Models/user.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";

const resetDirection = (req, res) => {

    const { id, token } = req.params;
    const { password } = req.body

    jwt.verify(token, "jwt_secret_key", (err, decoded) => {
      if (err) {
        return res.json({ Status: "Error with token" })
      } else {
        bcrypt.hash(password, 10)
          .then(hash => {
            User.findByIdAndUpdate({ _id: id }, { password: hash })
              .then(users => res.send({ Status: "Success" }))
              .catch(err => res.send({ Status: err }))
          })
          .catch(err => res.send({ Status: err }))
      }
    })
}

export default resetDirection;