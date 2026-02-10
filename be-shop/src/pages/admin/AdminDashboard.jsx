import { Link } from 'react-router-dom';
import { FaImage, FaUsers, FaShoppingCart, FaChartLine } from 'react-icons/fa';
import { useGetHeroBannersQuery } from '../../services';

function AdminDashboard() {
  const { data: banners = [] } = useGetHeroBannersQuery();
  const bannersCount = banners.length;

  const stats = [
    {
      title: 'Hero Banners',
      count: bannersCount.toString(),
      icon: <FaImage className="w-8 h-8" />,
      link: '/admin/hero-banners',
      color: 'bg-blue-500'
    },
    {
      title: 'Total Users',
      count: '245',
      icon: <FaUsers className="w-8 h-8" />,
      link: '#',
      color: 'bg-green-500'
    },
    {
      title: 'Orders',
      count: '89',
      icon: <FaShoppingCart className="w-8 h-8" />,
      link: '#',
      color: 'bg-purple-500'
    },
    {
      title: 'Revenue',
      count: '$12,345',
      icon: <FaChartLine className="w-8 h-8" />,
      link: '#',
      color: 'bg-yellow-500'
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to BeShop Admin Panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Link
            key={index}
            to={stat.link}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-800">{stat.count}</p>
              </div>
              <div className={`${stat.color} text-white p-4 rounded-lg`}>
                {stat.icon}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bannersCount === 0 && (
            <Link
              to="/admin/hero-banners/create"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors text-center"
            >
              Add Hero Banner
            </Link>
          )}
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
            Add Product
          </button>
          <button className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors">
            View Orders
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <p className="font-medium text-gray-800">New hero banner added</p>
              <p className="text-sm text-gray-500">2 hours ago</p>
            </div>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              Success
            </span>
          </div>
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <p className="font-medium text-gray-800">Product updated</p>
              <p className="text-sm text-gray-500">5 hours ago</p>
            </div>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              Update
            </span>
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium text-gray-800">New order received</p>
              <p className="text-sm text-gray-500">1 day ago</p>
            </div>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              Order
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
