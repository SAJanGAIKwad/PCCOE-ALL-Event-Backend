import User from "../Models/user.js";


const registerDirection = async (req, res) => {
    User.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
}

export default registerDirection;