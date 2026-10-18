import { recentSearch, locationSuggestions } from "../../../data/mockData";

export default function LocationDropdown({ category, setShowLocation, setLocationName }) {
  const suggestions = locationSuggestions[category] || [];
  function handleChooseItem(item) {
    setLocationName(item.name);
    setShowLocation(false);
  }
  return (
    <div className="absolute top-full left-0 -right-19 mt-3 bg-white rounded-2xl shadow-[0_5px_25px_rgba(0,0,0,0.15)] p-3 z-50 w-400px">
      {/* ================= Recent Search ================= */}

      <h3 className="font-semibold mb-3">Recent Search</h3>

      <div className="space-y-2">
        {recentSearch.map((item, index) => (
          <div key={index} className="grid grid-cols-4 gap-3 items-center">
            <div className="col-span-1">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
            </div>

            <div className="col-span-3">
              <p className="text-sm text-gray-500">{item.info}</p>
              <p className="font-medium">{item.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= Suggestions ================= */}

      <h3 className="font-semibold mt-6 mb-3">Suggest for you</h3>

      <div className="space-y-3">
        {suggestions.map((item) => (
          <div
            onClick={()=>handleChooseItem(item)}
            key={item.id}
            className="grid grid-cols-4 gap-3 items-center cursor-pointer hover:bg-gray-100 rounded-lg "
          >
            <div className="col-span-1">
              <img
                src={item.image}
                alt=""
                className="w-16 h-16 bg-gray-200 rounded-lg"
              />
              {/* <div className="w-16 h-16 bg-gray-200 rounded-lg" /> */}
            </div>

            <div className="col-span-3">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
