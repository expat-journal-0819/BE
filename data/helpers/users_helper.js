const db = require("../db_config");

module.exports = {
  addUser,
  findUserByID,
  updateUser,
  deleteUser
};

function addUser(newUser) {
  return db("users")
    .insert(newUser)
    .returning("id")
    .then(([id]) => {
      return findUserByID(id);
    })
    .catch(error => {
      console.log(`ERROR: ${error}`);
      return error;
    });
}

function findUserByID(id) {
  return db("users")
    .where({ id: id })
    .first();
}

function updateUser(updatedUser) {
  const { id } = updatedUser;
  return db("users")
    .where({ id: id })
    .update(updatedUser)
    .then(() => {
      return findUserByID(id);
    })
    .catch(error => {
      console.log(`ERROR: ${error}`);
      return error;
    });
}

function deleteUser(id) {
  return db("users")
    .where({ id: id })
    .del();
}
