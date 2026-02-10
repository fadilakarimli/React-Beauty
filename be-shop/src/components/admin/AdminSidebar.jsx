import { NavLink } from 'react-router-dom';
import { FaHome, FaImage, FaShoppingBag, FaUsers, FaCog, FaChartBar, FaTh, FaBullhorn } from 'react-icons/fa';

function AdminSidebar() {
  const menuItems = [
    {
      title: 'Dashboard',
      path: '/admin',
      icon: <FaHome className="w-5 h-5" />
    },
    {
      title: 'Hero Banners',
      path: '/admin/hero-banners',
      icon: <FaImage className="w-5 h-5" />
    },
    {
      title: 'Showcase Logos',
      path: '/admin/showcase-logos',
      icon: <FaTh className="w-5 h-5" />
    },
    {
      title: 'Promo Banners',
      path: '/admin/promo-banners',
      icon: <FaBullhorn className="w-5 h-5" />
    },
    {
      title: 'Products',
      path: '/admin/products',
      icon: <FaShoppingBag className="w-5 h-5" />
    },
    {
      title: 'Users',
      path: '/admin/users',
      icon: <FaUsers className="w-5 h-5" />
    },
    {
      title: 'Reports',
      path: '/admin/reports',
      icon: <FaChartBar className="w-5 h-5" />
    },
    {
      title: 'Settings',
      path: '/admin/settings',
      icon: <FaCog className="w-5 h-5" />
    }
  ];

  return (
    <div className="bg-gray-800 text-white w-64 flex-shrink-0">
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <h1 className="text-2xl font-bold">BeShop Admin</h1>
      </div>

      <nav className="mt-6">
        <div className="px-4 space-y-2">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              end={item.path === '/admin'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`
              }
            >
              {item.icon}
              <span className="font-medium">{item.title}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="absolute bottom-0 w-64 p-4 bg-gray-900">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <div>
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-gray-400">admin@beshop.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
