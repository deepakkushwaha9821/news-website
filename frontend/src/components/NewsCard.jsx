import { useState } from "react";
import { updateNews, deleteNews } from "../services/api";

const NewsCard = ({ news, refresh }) => {
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({
    title: news.title,
    description: news.description,
    category: news.category
  });

  const save = async () => {
    await updateNews(news._id, form);
    setEdit(false);
    refresh(); // reload list
  };

  const remove = async () => {
    await deleteNews(news._id);
    refresh(); // reload list
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 mt-4">
      {edit ? (
        <>
          {/* EDIT MODE */}
          <input
            className="w-full border p-2 rounded mb-2"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />

          <textarea
            className="w-full border p-2 rounded mb-2"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          <select
            className="w-full border p-2 rounded mb-3"
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
          >
            <option>Technology</option>
            <option>Sports</option>
            <option>Business</option>
          </select>

          <div className="flex gap-2">
            <button
              onClick={save}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Save
            </button>

            <button
              onClick={() => setEdit(false)}
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          {/* VIEW MODE */}
          <h2 className="text-xl font-bold">{news.title}</h2>
          <p className="text-gray-700 mt-2">{news.description}</p>
          <span className="text-sm text-blue-600">{news.category}</span>

          <div className="flex gap-3 mt-3">
            <button
              onClick={() => setEdit(true)}
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Edit
            </button>

            <button
              onClick={remove}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsCard;
