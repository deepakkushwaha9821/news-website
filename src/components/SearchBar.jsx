// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// const SearchBar = () => {
//   const [text, setText] = useState("");
//   const navigate = useNavigate();

//   const search = (e) => {
//     if (e.key === "Enter") {
//       navigate(`/search?q=${text}`);
//     }
//   };

//   return (
//     <input
//       placeholder="Search news..."
//       value={text}
//       onChange={(e) => setText(e.target.value)}
//       onKeyDown={search}
//     />
//   );
// };

// export default SearchBar;


import { useState, useEffect } from "react";
import { fetchNews } from "../services/api";
import FloatingResults from "./FloatingResults";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onResultClick }) => {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!text.trim()) {
      setResults([]);
      return;
    }
    fetchNews(text, "").then(setResults);
  }, [text]);

  return (
    <div className="relative flex gap-3 items-center">
      <input
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search news..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={() => navigate("/upload")}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Upload
      </button>

      <FloatingResults results={results} onSelect={(n) => {
        setText("");
        setResults([]);
        onResultClick(n);
      }} />
    </div>
  );
};

export default SearchBar;