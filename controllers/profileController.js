import User from "../Models/user.js";
const jwtSecret = 'fasefraw4r5r3wq45wdfgw34twdfg';
import jwt from 'jsonwebtoken';

const profileDirection = (req, res) => {
    const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { name, email, _id } = await User.findById(userData.id);
      res.json({ name, email, _id });
    });
  } else {
    res.json('user Info');
  }
}

export default profileDirection;