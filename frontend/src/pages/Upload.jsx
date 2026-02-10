import { useState } from "react";
import { addNews } from "../services/api";

const Upload = () => {
  const [news, setNews] = useState({
    title: "",
    description: "",
    category: "Technology"
  });

  const submit = async (e) => {
    e.preventDefault(); // prevent page reload
    await addNews(news);
    alert("News uploaded");

    // optional: reset form
    setNews({
      title: "",
      description: "",
      category: "Technology"
    });
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Upload News</h2>

      <form onSubmit={submit}>
        {/* TITLE */}
        <label htmlFor="title" className="block mb-1 font-medium">
          Title
        </label>
        <input
          id="title"
          name="title"
          className="w-full p-2 border rounded mb-3"
          placeholder="Title"
          value={news.title}
          onChange={(e) =>
            setNews({ ...news, title: e.target.value })
          }
          required
        />

        {/* DESCRIPTION */}
        <label htmlFor="description" className="block mb-1 font-medium">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="w-full p-2 border rounded mb-3"
          placeholder="Description"
          value={news.description}
          onChange={(e) =>
            setNews({ ...news, description: e.target.value })
          }
          required
        />

        {/* CATEGORY */}
        <label htmlFor="category" className="block mb-1 font-medium">
          Category
        </label>
        <select
          id="category"
          name="category"
          className="w-full p-2 border rounded mb-4"
          value={news.category}
          onChange={(e) =>
            setNews({ ...news, category: e.target.value })
          }
        >
          <option value="Technology">Technology</option>
          <option value="Sports">Sports</option>
          <option value="Business">Business</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default Upload;
