import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPromoBannerByIdQuery, useUpdatePromoBannerMutation } from '../../../services';

function PromoBannerEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: banner, isLoading: loading, error } = useGetPromoBannerByIdQuery(id);
  const [updatePromoBanner, { isLoading: saving }] = useUpdatePromoBannerMutation();
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [formData, setFormData] = useState({
    discountText: '',
    title: '',
    highlightedText: '',
    description: '',
    imageUrl: ''
  });

  useEffect(() => {
    if (banner) {
      setFormData(banner);
    }
  }, [banner]);

  useEffect(() => {
    if (error) {
      alert('Failed to load promo banner');
      navigate('/admin/promo-banners');
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
      // Create preview URL
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
      // If new file is selected, use FormData
      if (imageFile) {
        const submitFormData = new FormData();
        submitFormData.append('DiscountText', formData.discountText);
        submitFormData.append('Title', formData.title);
        submitFormData.append('HighlightedText', formData.highlightedText || '');
        submitFormData.append('Description', formData.description || '');
        submitFormData.append('ImageUrl', imageFile); // ImageUrl is IFormFile in backend
        
        console.log('Updating promo banner with new image...');
        await updatePromoBanner({ id, data: submitFormData }).unwrap();
      } else {
        // No new image, just update data
        console.log('Updating promo banner without image change...');
        await updatePromoBanner({ id, data: formData }).unwrap();
      }
      
      alert('Promo banner updated successfully!');
      navigate('/admin/promo-banners');
    } catch (error) {
      console.error('Error details:', error);
      
      let errorMessage = 'Failed to update promo banner. ';
      if (error.status) {
        errorMessage += `Status: ${error.status}. `;
      }
      if (error.data) {
        errorMessage += `Message: ${JSON.stringify(error.data)}`;
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
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Edit Promo Banner</h1>
        <p className="text-gray-600 mt-2">Update promo banner information</p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Discount Text */}
          <div>
            <label htmlFor="discountText" className="block text-sm font-medium text-gray-700 mb-2">
              Discount Text *
            </label>
            <input
              type="text"
              id="discountText"
              name="discountText"
              value={formData.discountText}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., 50% OFF"
            />
          </div>

          {/* Title */}
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
              placeholder="Enter banner title"
            />
          </div>

          {/* Highlighted Text */}
          <div>
            <label htmlFor="highlightedText" className="block text-sm font-medium text-gray-700 mb-2">
              Highlighted Text
            </label>
            <input
              type="text"
              id="highlightedText"
              name="highlightedText"
              value={formData.highlightedText}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter highlighted text"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter banner description"
            />
          </div>

          {/* Image Upload */}
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

            {/* Image Preview */}
            {(imagePreview || formData.imageUrl) && (
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-2">Preview:</p>
                <img 
                  src={imagePreview || formData.imageUrl} 
                  alt="Preview" 
                  className="max-w-sm rounded-lg shadow-md"
                />
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 pt-4">
            <button
              type="submit"
              disabled={saving}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {saving ? 'Updating...' : 'Update Banner'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin/promo-banners')}
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

export default PromoBannerEdit;
