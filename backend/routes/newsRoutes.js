const express = require("express");
const router = express.Router();
const { createNews, getNews } = require("../controllers/newsController");
const {
  updateNews,
  deleteNews
} = require("../controllers/newsController");

router.post("/", createNews);
router.get("/", getNews);
router.put("/:id", updateNews);      
router.delete("/:id", deleteNews);


module.exports = router;
