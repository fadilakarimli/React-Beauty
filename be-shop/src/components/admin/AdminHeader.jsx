import { Link } from 'react-router-dom';
import { FaBell, FaSearch, FaSignOutAlt } from 'react-icons/fa';

function AdminHeader() {
  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-600 hover:text-gray-800">
          <FaBell className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <Link
          to="/"
          target="_blank"
          className="px-4 py-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          View Site
        </Link>

        <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-gray-900">
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
}

export default AdminHeader;
