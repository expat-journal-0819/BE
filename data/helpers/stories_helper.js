const db = require("../db_config");

module.exports = {
  addStory,
  getStories,
  findStoryByID,
  getUserStories,
  updateStory,
  deleteStory
};

function addStory(newStory) {
  return db("stories")
    .insert(newStory)
    .returning("id")
    .then(([id]) => {
      return findStoryByID(id);
    })
    .catch(error => {
      console.log(`ERROR: ${error}`);
      return error;
    });
}

function getStories() {
  return db("stories");
}

function findStoryByID(id) {
  return db("stories")
    .where({ id: id })
    .first();
}

function getUserStories(userID) {
  return db("stories").where({ poster_id: userID });
}

function updateStory(updatedStory) {
  const { id } = updatedStory;
  return db("stories")
    .where({ id: id })
    .update(updatedStory)
    .then(() => {
      return findStoryByID(id);
    })
    .catch(error => {
      console.log(`ERROR: ${error}`);
      return error;
    });
}

function deleteStory(id) {
  return db("stories")
    .where({ id: id })
    .del();
}
