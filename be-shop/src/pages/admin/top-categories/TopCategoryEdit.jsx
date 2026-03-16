import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetTopCategoryByIdQuery, useUpdateTopCategoryMutation } from '../../../services';

function TopCategoryEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: category, isLoading: loading, error } = useGetTopCategoryByIdQuery(id);
  const [updateTopCategory, { isLoading: saving }] = useUpdateTopCategoryMutation();
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    imageUrl: ''
  });

  useEffect(() => {
    if (category) {
      setFormData({
        title: category.title || category.name || '',
        imageUrl: category.imageUrl || ''
      });
    }
  }, [category]);

  useEffect(() => {
    if (error) {
      alert('Failed to load top category');
      navigate('/admin/top-categories');
    }
  }, [error, navigate]);

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
      if (imageFile) {
        const submitFormData = new FormData();
        submitFormData.append('Title', formData.title);
        submitFormData.append('ImageUrl', imageFile);

        console.log('Updating top category with new image...');
        await updateTopCategory({ id, data: submitFormData }).unwrap();
      } else {
        console.log('Updating top category without image change...');
        await updateTopCategory({
          id,
          data: {
            ...category,
            title: formData.title
          }
        }).unwrap();
      }

      alert('Top category updated successfully!');
      navigate('/admin/top-categories');
    } catch (updateError) {
      console.error('Error details:', updateError);

      let errorMessage = 'Failed to update top category. ';
      if (updateError.status) {
        errorMessage += `Status: ${updateError.status}. `;
      }
      if (updateError.data) {
        errorMessage += `Message: ${JSON.stringify(updateError.data)}`;
      }

      alert(errorMessage);
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
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Edit Top Category</h1>
        <p className="text-gray-600 mt-2">Update top category information</p>
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
              Image
            </label>
            <input
              type="file"
              id="imageFile"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Leave empty to keep current image</p>

            {(imagePreview || formData.imageUrl) && (
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-2">Preview:</p>
                <img
                  src={imagePreview || formData.imageUrl}
                  alt="Preview"
                  className="h-56 w-full max-w-sm object-cover rounded-lg shadow-md"
                />
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 pt-4">
            <button
              type="submit"
              disabled={saving}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {saving ? 'Saving...' : 'Save Changes'}
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

export default TopCategoryEdit;
