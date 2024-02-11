const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

const isAuth = (req, res, next) => {
  const token = req.cookies?.jwtToken;

  if (!token)
    return res
      .status(401)
      .json({ error: "Unauthorized to access! Do login first" });

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
