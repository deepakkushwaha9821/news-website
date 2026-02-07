const FloatingResults = ({ results, onSelect }) => {
  if (!results.length) return null;

  return (
    <div className="absolute top-14 w-full bg-white shadow-lg rounded-lg border z-50">
      {results.map((n) => (
        <div
          key={n._id}
          onClick={() => onSelect(n)}
          className="px-4 py-3 cursor-pointer hover:bg-gray-100"
        >
          <p className="font-semibold">{n.title}</p>
          <p className="text-xs text-gray-500">{n.category}</p>
        </div>
      ))}
    </div>
  );
};

export default FloatingResults;