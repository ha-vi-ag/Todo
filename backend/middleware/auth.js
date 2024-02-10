const jwt = require("jsonwebtoken");
const authController = require("../controllers/auth");

const SECRET = process.env.SECRET;

const isAuth = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader)
    return res
      .status(401)
      .json({ error: "Unauthorized to access! Do login first" });

  const token = authHeader.split(" ")[1];

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return next(err);
    else {
      req.user = user;
      next();
    }
  });
};

module.exports = {
  isAuth,
};
