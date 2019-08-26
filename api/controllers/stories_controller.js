const Stories = require("../../data/helpers/stories_helper");

module.exports = {
  addStory,
  getStories,
  getStoryByID,
  getUserStories,
  updateStory,
  deleteStory
};

function addStory(req, res) {
  const story = req.body;
  Stories.addStory(story)
    .then(newStory => {
      res.status(201).json(newStory);
    })
    .catch(error => {
      console.log(`ERROR: ${error}`);
      return error;
    });
}

function getStories(req, res) {
  Stories.getStories()
    .then(stories => {
      res.status(200).json(stories);
    })
    .catch(error => {
      console.log(`ERROR: ${error}`);
      return error;
    });
}

function getStoryByID(req, res) {
  const { id } = req.params;
  Stories.findStoryByID(id)
    .then(story => {
      res.status(200).json(story);
    })
    .catch(error => {
      console.log(`ERROR: ${error}`);
      return error;
    });
}

function getUserStories(req, res) {
  const { id } = req.params;
  Stories.getUserStories(id)
    .then(stories => {
      res.status(200).json(stories);
    })
    .catch(error => {
      console.log(`ERROR: ${error}`);
      return error;
    });
}

function updateStory(req, res) {
  const updates = req.body;
  Stories.updateStory(updates)
    .then(updatedStory => {
      res.status(202).json(updatedStory);
    })
    .catch(error => {
      console.log(`ERROR: ${error}`);
      return error;
    });
}

function deleteStory(req, res) {
  const { id } = req.params;
  Stories.deleteStory(id)
    .then(() => {
      res.status(203).json({ message: `Story ${id} was successfully deleted` });
    })
    .catch(error => {
      console.log(`ERROR: ${error}`);
      return error;
    });
}
