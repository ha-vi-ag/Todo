const serverError = (err, req, res, next) => {

  console.log(err);
  return res.sendStatus(500);
};

module.exports = {
  serverError,
};
