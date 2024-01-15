import User from "../Models/user.js";
import jwt from 'jsonwebtoken';

const resetDirection = (req, res) => {
    const { id, token } = req.params;
      const { password } = req.body
      jwt.verify(token, "jwt_secret_key", (err, decoded) => {
        User.findByIdAndUpdate({ _id: id }, { password: password })
          .then(u => res.send({ Status: "Success" }))
          .catch(err => res.send({ Status: err }))
      })
}

// app.post('/reset-password/:id/:token', (req, res) => {
//   const { id, token } = req.params;
//   const { password } = req.body

//   jwt.verify(token, "jwt_secret_key", (err, decoded) => {
//     if (err) {
//       return res.json({ Status: "Error with token" })
//     } else {
  //       bcrypt.hash(password, 10)
  //         .then(hash => {
    //           User.findByIdAndUpdate({ _id: id }, { password: password })
//             .then(u => res.send({ Status: "Success" }))
//             .catch(err => res.send({ Status: err }))
//         })
//         .catch(err => res.send({ Status: err }))
//     }
//   })
// })

export default resetDirection;