const bcrypt = require("bcryptjs");
const Auth = require("../../data/helpers/auth_helper");
const Users = require("../../data/helpers/users_helper");

module.exports = {
  loginUser,
  registerUser,
  authenticateUser
};

function loginUser(req, res) {
  const { email, password } = req.body;
  Users.findUserByEmail(email)
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = Auth.generateToken(user);
        res.status(200).json({
          message: `Welcome ${
            user.first_name !== "" ? user.first_name : `user ${user.id}`
          }!`,
          token,
          userID: user.id
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
}

function registerUser(req, res) {
  const user = {
    ...req.body,
    first_name: "",
    last_name: ""
  };
  Users.addUser(user)
    .then(newUser => {
      const token = Auth.generateToken(newUser);
      res.status(201).json({
        message: `Welcome user ${newUser.id}!`,
        token,
        userID: newUser.id
      });
    })
    .catch(error => {
      res.status(500).json(error);
    });
}
