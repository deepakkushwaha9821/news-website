import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import NewsCard from "../components/NewsCard";
import { fetchNews } from "../services/api";

const SearchResults = () => {
  const [params] = useSearchParams();
  const query = params.get("q");
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews(query, "").then(setNews);
  }, [query]);

  return (
    <>
      <SearchBar />
      <h3>Search results for: "{query}"</h3>

      {news.length === 0 && <p>No results found</p>}

      {news.map((n) => (
        <NewsCard key={n._id} news={n} />
      ))}
    </>
  );
};

export default SearchResults;