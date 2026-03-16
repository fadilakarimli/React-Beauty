import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ShopPagination = ({ totalPages = 2 }) => {
  const [current, setCurrent] = useState(1);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      {/* Prev */}
      <button
        onClick={() => setCurrent((p) => Math.max(1, p - 1))}
        disabled={current === 1}
        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:border-pink-400 disabled:opacity-40 transition-colors"
      >
        <MdChevronLeft className="text-gray-600 text-base" />
      </button>

      {/* Pages */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrent(page)}
          className={`w-8 h-8 flex items-center justify-center rounded border text-sm font-medium transition-colors ${
            current === page
              ? "bg-pink-500 text-white border-pink-500"
              : "border-gray-300 text-gray-600 hover:border-pink-400 hover:text-pink-500"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => setCurrent((p) => Math.min(totalPages, p + 1))}
        disabled={current === totalPages}
        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:border-pink-400 disabled:opacity-40 transition-colors"
      >
        <MdChevronRight className="text-gray-600 text-base" />
      </button>
    </div>
  );
};

export default ShopPagination;
