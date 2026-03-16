import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateTopCategoryMutation } from '../../../services';

function TopCategoryCreate() {
  const navigate = useNavigate();
  const [createTopCategory, { isLoading: loading }] = useCreateTopCategoryMutation();
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!imageFile) {
        alert('Please select an image!');
        return;
      }

      const submitFormData = new FormData();
      submitFormData.append('Title', formData.title);
      submitFormData.append('ImageUrl', imageFile);

      console.log('Creating top category with FormData...');

      await createTopCategory(submitFormData).unwrap();

      alert('Top category created successfully!');
      navigate('/admin/top-categories');
    } catch (error) {
      console.error('Error details:', error);

      let errorMessage = 'Failed to create top category. ';
      if (error.status) {
        errorMessage += `Status: ${error.status}. `;
      }
      if (error.data) {
        errorMessage += `Message: ${JSON.stringify(error.data)}`;
      }

      alert(errorMessage);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Create Top Category</h1>
        <p className="text-gray-600 mt-2">Add a new top category to your website</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter category title"
            />
          </div>

          <div>
            <label htmlFor="imageFile" className="block text-sm font-medium text-gray-700 mb-2">
              Image *
            </label>
            <input
              type="file"
              id="imageFile"
              accept="image/*"
              onChange={handleFileChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            {imagePreview && (
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-2">Preview:</p>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="h-56 w-full max-w-sm object-cover rounded-lg shadow-md"
                />
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating...' : 'Create Category'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin/top-categories')}
              className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TopCategoryCreate;
