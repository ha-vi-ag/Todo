const serverError = (err, req, res, next) => {

  console.log(err);
  return res.status(500).json({ error: "some error occured" });
};

module.exports = {
  serverError,
};
