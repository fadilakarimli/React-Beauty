import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreatePromoBannerMutation } from '../../../services';

function PromoBannerCreate() {
  const navigate = useNavigate();
  const [createPromoBanner, { isLoading: loading }] = useCreatePromoBannerMutation();
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [formData, setFormData] = useState({
    discountText: '',
    title: '',
    highlightedText: '',
    description: '',
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
      submitFormData.append('DiscountText', formData.discountText);
      submitFormData.append('Title', formData.title);
      submitFormData.append('HighlightedText', formData.highlightedText || '');
      submitFormData.append('Description', formData.description || '');
      submitFormData.append('ImageUrl', imageFile); 
      
      console.log('Creating promo banner with FormData...');
      
      await createPromoBanner(submitFormData).unwrap();
      
      alert('Promo banner created successfully!');
      navigate('/admin/promo-banners');
    } catch (error) {
      console.error('Error details:', error);
      
      let errorMessage = 'Failed to create promo banner. ';
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
        <h1 className="text-3xl font-bold text-gray-800">Create Promo Banner</h1>
        <p className="text-gray-600 mt-2">Add a new promotional banner to your website</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="max-w-sm rounded-lg shadow-md"
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
              {loading ? 'Creating...' : 'Create Banner'}
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

export default PromoBannerCreate;
