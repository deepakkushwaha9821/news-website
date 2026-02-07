const API_URL = "http://localhost:5000/api/news";

export const fetchNews = async (search, category) => {
  let url = API_URL + "?";

  if (search) url += `search=${search}&`;
  if (category) url += `category=${category}`;

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