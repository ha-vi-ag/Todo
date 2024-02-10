const jwt = require('jsonwebtoken');

const Users = require("../models/users");


const SECRET = process.env.SECRET;

const doLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ email, password });
    if (!user) return res.status(401).json({ error: "Wrong credentials" });

    const payload = { email: user.email , name: user.name, userId: user._id };
    const token = jwt.sign(payload, SECRET);

    return res.status(200).json({ message: "User logged in successfully", token: token });
    
  } catch (err) {
    next(err);
  }
};

const doSignup = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const user = await Users.findOne({ email });
    if (user) return res.status(401).json({ error: "email already exists" });
    await Users.create({ name, email, password });
    return res.status(201).json({ message: "account created" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  doLogin,
  doSignup,
};
