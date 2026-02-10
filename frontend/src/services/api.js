const API_URL = `${import.meta.env.VITE_API_URL}/api/news`;

// GET (search + category)
export const fetchNews = async (search, category) => {
  let url = API_URL + "?";

  if (search) url += `search=${encodeURIComponent(search)}&`;
  if (category) url += `category=${encodeURIComponent(category)}`;

  const res = await fetch(url);
  return res.json();
};

// CREATE
export const addNews = async (news) => {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(news)
  });
};

// UPDATE
export const updateNews = async (id, data) => {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
};

// DELETE
export const deleteNews = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
};
