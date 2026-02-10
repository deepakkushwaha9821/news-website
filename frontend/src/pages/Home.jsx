import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import NewsCard from "../components/NewsCard";
import { fetchNews } from "../services/api";

const Home = () => {
  const [category, setCategory] = useState("Technology");
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);

  // 🔄 Load news (used for refresh after edit/delete)
  const loadNews = () => {
    fetchNews("", category).then(setNews);
  };

  // Load news when category changes
  useEffect(() => {
    loadNews();
    setSelectedNews(null); // reset when tab changes
  }, [category]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <SearchBar onResultClick={setSelectedNews} />
      <Tabs setCategory={setCategory} />

      {/* 🔍 If clicked from floating search */}
      {selectedNews ? (
        <NewsCard news={selectedNews} refresh={loadNews} />
      ) : (
        news.map((n) => (
          <NewsCard
            key={n._id}
            news={n}
            refresh={loadNews}
          />
        ))
      )}
    </div>
  );
};

export default Home;
