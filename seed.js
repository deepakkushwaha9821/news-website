require("dotenv").config();
const mongoose = require("mongoose");
const News = require("./models/News");

const data = [
  {
    title: "AI Revolution in Software Development",
    description:
      "Artificial Intelligence is transforming how developers write, test, and deploy code across industries.",
    category: "Technology"
  },
  {
    title: "React 19 Features Announced",
    description:
      "React 19 introduces better performance, improved hooks, and enhanced server components.",
    category: "Technology"
  },
  {
    title: "India Wins T20 Series",
    description:
      "India secured a thrilling victory in the final match to win the T20 series.",
    category: "Sports"
  },
  {
    title: "Olympics 2028 Preparations Begin",
    description:
      "Countries have started preparations and training camps for the upcoming Olympic Games.",
    category: "Sports"
  },
  {
    title: "Startup Funding Hits Record High",
    description:
      "Global startup funding has reached an all-time high driven by AI and fintech sectors.",
    category: "Business"
  },
  {
    title: "Stock Market Sees Major Rally",
    description:
      "Markets surged today as major tech and banking stocks posted strong gains.",
    category: "Business"
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await News.deleteMany();
    await News.insertMany(data);
    console.log("News data seeded successfully");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
