import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Upload from "./pages/Upload";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  );
}

export default App;