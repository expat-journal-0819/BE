const db = require("../db_config");

module.exports = {
  addStory,
  getStories,
  findStoryByID,
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
