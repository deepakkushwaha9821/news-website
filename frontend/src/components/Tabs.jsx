const Tabs = ({ setCategory }) => {
  const tabs = ["Technology", "Sports", "Business"];

  return (
    <div className="flex gap-4 mt-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setCategory(tab)}
          className="px-4 py-2 rounded-full bg-gray-200 hover:bg-blue-500 hover:text-white"
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;