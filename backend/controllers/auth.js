const jwt = require("jsonwebtoken");

const Users = require("../models/users");

const SECRET = process.env.SECRET;

const doLogin = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ email, password });
  if (!user) return res.status(401).json({ error: "Wrong credentials" });

  const payload = { email: user.email, name: user.name, userId: user._id };
  const token = jwt.sign(payload, SECRET);

  res.cookie("jwtToken", token, { httpOnly: true, secure: true });

  return res.sendStatus(200);
};

const doSignup = async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await Users.findOne({ email });
  if (user) return res.status(422).json({ error: "Email already exists" });
  await Users.create({ name, email, password });
  return res.sendStatus(201);
};

module.exports = {
  doLogin,
  doSignup,
};
