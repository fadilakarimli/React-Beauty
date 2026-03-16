import { Link } from 'react-router-dom';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { useGetTopCategoriesQuery, useDeleteTopCategoryMutation } from '../../../services';

function TopCategoriesList() {
  const { data: categories = [], isLoading: loading, error } = useGetTopCategoriesQuery();
  const [deleteTopCategory] = useDeleteTopCategoryMutation();

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this top category?')) {
      try {
        await deleteTopCategory(id).unwrap();
        alert('Top category deleted successfully!');
      } catch (err) {
        console.error('Error deleting top category:', err);
        alert('Failed to delete top category');
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
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Top Categories</h1>
          <p className="text-gray-600 mt-2">Manage your top categories</p>
        </div>
        <Link
          to="/admin/top-categories/create"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
        >
          <FaPlus /> Add New Category
        </Link>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          Failed to load top categories
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {categories.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">No top categories found</p>
            <Link
              to="/admin/top-categories/create"
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              Create your first top category
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {categories.map((category) => (
                  <tr key={category.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {category.imageUrl ? (
                        <img
                          src={category.imageUrl}
                          alt={category.title || category.name || 'category'}
                          className="h-14 w-14 rounded object-cover"
                        />
                      ) : (
                        'N/A'
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {category.title || category.name || 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-3">
                        <Link
                          to={`/admin/top-categories/edit/${category.id}`}
                          className="text-blue-600 hover:text-blue-900"
                          title="Edit"
                        >
                          <FaEdit className="w-5 h-5" />
                        </Link>
                        <button
                          onClick={() => handleDelete(category.id)}
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

export default TopCategoriesList;
