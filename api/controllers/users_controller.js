const Users = require("../../data/helpers/users_helper");

module.exports = {
  updateUser,
  deleteUser
};

function updateUser(req, res) {
  const updates = req.body;
  Users.updateUser(updates)
    .then(updatedUser => {
      res.status(203).json(updatedUser);
    })
    .catch(error => {
      console.log(`ERROR: ${error}`);
      return res.status(500).json(error);
    });
}

function deleteUser(req, res) {
  const { id } = req.params;
  Users.deleteUser(id)
    .then(() => {
      res.status(200).json({ message: `user ${id} successfully deleted` });
    })

    .catch(error => {
      console.log(`ERROR: ${error}`);
      return res.status(500).json(error);
    });
}
