const API_URL = `${import.meta.env.VITE_API_URL}/api/news`;

export const fetchNews = async (search, category) => {
  let url = API_URL + "?";

  if (search) url += `search=${encodeURIComponent(search)}&`;
  if (category) url += `category=${encodeURIComponent(category)}`;

  const res = await fetch(url);
  return res.json();
};

export const addNews = async (news) => {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(news)
  });
};
