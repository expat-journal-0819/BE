const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../services/secrets");

module.exports = {
  generateToken
};

function generateToken(user) {
  const payload = {
    user_id: user.id
  };

  const secret = process.env.JWT_SECRET || jwtSecret;

  const options = {
    expiresIn: 60 * 60
  };

  return jwt.sign(payload, secret, options);
}
