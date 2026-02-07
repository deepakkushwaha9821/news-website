import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import NewsCard from "../components/NewsCard";
import { fetchNews } from "../services/api";

const Home = () => {
  const [category, setCategory] = useState("Technology");
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    fetchNews("", category).then(setNews);
    setSelectedNews(null); // reset when tab changes
  }, [category]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <SearchBar onResultClick={setSelectedNews} />
      <Tabs setCategory={setCategory} />

      {selectedNews ? (
        <NewsCard news={selectedNews} />
      ) : (
        news.map((n) => <NewsCard key={n._id} news={n} />)
      )}
    </div>
  );
};
export default Home;