import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetHeroBannersQuery, useCreateHeroBannerMutation } from '../../../services';

function HeroBannerCreate() {
  const navigate = useNavigate();
  const { data: existingBanners = [] } = useGetHeroBannersQuery();
  const [createHeroBanner, { isLoading: loading }] = useCreateHeroBannerMutation();
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    imageUrl: ''
  });

  useEffect(() => {
    if (existingBanners.length > 0) {
      alert('You already have a hero banner. Please delete it first to create a new one.');
      navigate('/admin/hero-banners');
    }
  }, [existingBanners, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
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
      // Check if image is selected
      if (!imageFile) {
        alert('Please select an image!');
        return;
      }

      // Create FormData with all fields including image
      const submitFormData = new FormData();
      submitFormData.append('Title', formData.title);
      submitFormData.append('Subtitle', formData.subtitle || '');
      submitFormData.append('Description', formData.description || '');
      submitFormData.append('ImageUrl', imageFile); // ImageUrl is IFormFile in backend
      
      console.log('Creating banner with FormData...');
      
      await createHeroBanner(submitFormData).unwrap();
      
      alert('Hero banner created successfully!');
      navigate('/admin/hero-banners');
    } catch (error) {
      console.error('Error details:', error);
      
      let errorMessage = 'Failed to create hero banner. ';
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
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Create Hero Banner</h1>
        <p className="text-gray-600 mt-2">Add a new hero banner to your website</p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
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

          {/* Subtitle */}
          <div>
            <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-2">
              Subtitle
            </label>
            <input
              type="text"
              id="subtitle"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter banner subtitle"
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

            {/* Image Preview */}
            {imagePreview && (
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-2">Preview:</p>
                <img 
                  src={imagePreview} 
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
              disabled={loading}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating...' : 'Create Banner'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin/hero-banners')}
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

export default HeroBannerCreate;
