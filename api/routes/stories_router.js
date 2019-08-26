const express = require("express");
const router = express.Router();

const {
  addStory,
  getStories,
  getStoryByID,
  getUserStories,
  updateStory,
  deleteStory
} = require("../controllers/stories_controller");

const { validateToken } = require("../middleware/auth_middleware");

router
  .route("/")
  .post(validateToken, addStory)
  .get(validateToken, getStories)
  .put(validateToken, updateStory);

router
  .route("/:id")
  .get(validateToken, getStoryByID)
  .delete(validateToken, deleteStory);

router.route("/user/:id").get(validateToken, getUserStories);

module.exports = router;
