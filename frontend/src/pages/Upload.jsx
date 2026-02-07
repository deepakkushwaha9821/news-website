import { useState } from "react";
import { addNews } from "../services/api";

const Upload = () => {
  const [news, setNews] = useState({
    title: "",
    description: "",
    category: "Technology"
  });

  const submit = async () => {
    await addNews(news);
    alert("News uploaded");
  };

 return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Upload News</h2>

      <input className="w-full p-2 border rounded mb-3" placeholder="Title" />
      <textarea className="w-full p-2 border rounded mb-3" placeholder="Description" />
      <select className="w-full p-2 border rounded mb-3">
        <option>Technology</option>
        <option>Sports</option>
        <option>Business</option>
      </select>

      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Upload
      </button>
    </div>
  );
};
export default Upload;