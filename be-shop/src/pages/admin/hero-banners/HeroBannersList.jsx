import { Link } from 'react-router-dom';
import { FaEdit, FaTrash, FaPlus, FaEye } from 'react-icons/fa';
import { useGetHeroBannersQuery, useDeleteHeroBannerMutation } from '../../../services';

function HeroBannersList() {
  const { data: banners = [], isLoading: loading, error } = useGetHeroBannersQuery();
  const [deleteHeroBanner] = useDeleteHeroBannerMutation();

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this hero banner?')) {
      try {
        await deleteHeroBanner(id).unwrap();
        alert('Hero banner deleted successfully!');
      } catch (err) {
        console.error('Error deleting banner:', err);
        alert('Failed to delete hero banner');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Hero Banners</h1>
          <p className="text-gray-600 mt-2">Manage your hero banners</p>
        </div>
        {banners.length === 0 && (
          <Link
            to="/admin/hero-banners/create"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
          >
            <FaPlus /> Add New Banner
          </Link>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          Failed to load hero banners
        </div>
      )}

      {/* Banners List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {banners.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">No hero banners found</p>
            <Link
              to="/admin/hero-banners/create"
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              Create your first hero banner
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subtitle
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {banners.map((banner) => (
                  <tr key={banner.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {banner.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {banner.subtitle || 'N/A'}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {banner.description ? banner.description.substring(0, 60) + '...' : 'N/A'}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {banner.imageUrl ? (
                        <a 
                          href={banner.imageUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
                        >
                          <FaEye /> View
                        </a>
                      ) : 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-3">
                        <Link
                          to={`/admin/hero-banners/edit/${banner.id}`}
                          className="text-blue-600 hover:text-blue-900"
                          title="Edit"
                        >
                          <FaEdit className="w-5 h-5" />
                        </Link>
                        <button
                          onClick={() => handleDelete(banner.id)}
                          className="text-red-600 hover:text-red-900"
                          title="Delete"
                        >
                          <FaTrash className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroBannersList;
