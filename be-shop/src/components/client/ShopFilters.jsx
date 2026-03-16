import { useState } from "react";

const sortOptions = [
  "From expensive to cheap",
  "From cheap to expensive",
  "Newest first",
  "Most popular",
];

const ShopFilters = () => {
  const [saleChecked, setSaleChecked] = useState(false);
  const [newChecked, setNewChecked] = useState(false);
  const [sort, setSort] = useState(sortOptions[0]);

  return (
    <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
      {/* SALE & NEW checkboxes */}
      <div className="flex items-center gap-4">
        {/* SALE */}
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <span
            onClick={() => setSaleChecked(!saleChecked)}
            className={`w-5 h-5 flex items-center justify-center border transition-colors cursor-pointer ${
              saleChecked
                ? "bg-pink-500 border-pink-500"
                : "bg-pink-500 border-pink-500"
            }`}
          >
            {/* always filled pink like design */}
          </span>
          <span className="text-sm font-medium text-gray-700 tracking-wide">
            SALE
          </span>
        </label>

        {/* NEW */}
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <span
            onClick={() => setNewChecked(!newChecked)}
            className={`w-5 h-5 flex items-center justify-center border transition-colors cursor-pointer ${
              newChecked ? "bg-gray-400 border-gray-400" : "bg-white border-gray-300"
            }`}
          />
          <span className="text-sm font-medium text-gray-700 tracking-wide">
            NEW
          </span>
        </label>
      </div>

      {/* Sort Dropdown */}
      <div className="ml-auto">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border border-gray-200 text-sm text-gray-600 px-4 py-2 rounded outline-none bg-white cursor-pointer hover:border-pink-400 transition-colors"
        >
          {sortOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ShopFilters;
