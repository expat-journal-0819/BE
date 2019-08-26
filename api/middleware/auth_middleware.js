const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../services/secrets");

module.exports = {
  checkRequiredFields,
  hashPassword,
  validateToken
};

function checkRequiredFields(req, res, next) {
  const { email, password } = req.body;
  if (email && password) {
    next();
  } else {
    res.status(403).json({ message: "required fields were not provided" });
  }
}

function hashPassword(req, res, next) {
  const user = req.body;
  user.password = bcrypt.hashSync(user.password, 5);
  next();
}

function validateToken(req, res, next) {
  if (req.body.token) {
    const token = req.body.token;
    jwt.verify(token, jwtSecret, (error, decodedToken) => {
      if (error) {
        res.status(401).json({ message: "Invalid Credentials" });
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(403).json({ message: "no token provided" });
  }
}
