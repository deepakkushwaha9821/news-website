const News = require("../models/News");

// Upload news
exports.createNews = async (req, res) => {
  const news = new News(req.body);
  await news.save();
  res.json(news);
};

// Get news with search + category
exports.getNews = async (req, res) => {
  const { search, category } = req.query;

  let filter = {};

  // 🔥 FIXED SEARCH (title + description)
  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } }
    ];
  }

  if (category) {
    filter.category = category;
  }

  const news = await News.find(filter).sort({ createdAt: -1 });
  res.json(news);

};
// UPDATE news
exports.updateNews = async (req, res) => {
  const updated = await News.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

// DELETE news
exports.deleteNews = async (req, res) => {
  await News.findByIdAndDelete(req.params.id);
  res.json({ message: "News deleted" });
};
