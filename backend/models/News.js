const Upload = () => {
  const [news, setNews] = useState({
    title: "",
    description: "",
    category: "Technology"
  });

  return (
    <form className="max-w-xl mx-auto p-4">
      {/* TITLE */}
      <label htmlFor="title" className="block mb-1 font-medium">
        Title
      </label>
      <input
        id="title"
        name="title"
        placeholder="Enter title"
        className="w-full p-2 border rounded mb-3"
        value={news.title}
        onChange={(e) =>
          setNews({ ...news, title: e.target.value })
        }
      />

      {/* DESCRIPTION */}
      <label htmlFor="description" className="block mb-1 font-medium">
        Description
      </label>
      <textarea
        id="description"
        name="description"
        placeholder="Enter description"
        className="w-full p-2 border rounded mb-3"
        value={news.description}
        onChange={(e) =>
          setNews({ ...news, description: e.target.value })
        }
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
        Upload News
      </button>
    </form>
  );
};
