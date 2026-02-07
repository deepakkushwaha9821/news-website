const NewsCard = ({ news }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 mt-4">
      <h2 className="text-xl font-bold">{news.title}</h2>
      <p className="text-gray-700 mt-2">{news.description}</p>
      <span className="text-sm text-blue-600">{news.category}</span>
    </div>
  );
};

export default NewsCard;