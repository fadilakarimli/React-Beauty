import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetShowcaseLogoByIdQuery, useUpdateShowcaseLogoMutation } from '../../../services';

function ShowcaseLogosEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: logo, isLoading: loading, error } = useGetShowcaseLogoByIdQuery(id);
  const [updateShowcaseLogo, { isLoading: saving }] = useUpdateShowcaseLogoMutation();
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [currentImageUrl, setCurrentImageUrl] = useState('');

  useEffect(() => {
    if (logo) {
      setCurrentImageUrl(logo.imageUrl);
    }
  }, [logo]);

  useEffect(() => {
    if (error) {
      alert('Failed to load showcase logo');
      navigate('/admin/showcase-logos');
    }
  }, [error, navigate]);

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

      const submitFormData = new FormData();
      submitFormData.append('ImageUrl', imageFile); // ImageUrl is IFormFile in backend
      
      console.log('Updating logo with new image...');
      await updateShowcaseLogo({ id, data: submitFormData }).unwrap();
      
      alert('Showcase logo updated successfully!');
      navigate('/admin/showcase-logos');
    } catch (error) {
      console.error('Error details:', error);
      
      let errorMessage = 'Failed to update showcase logo. ';
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
        <h1 className="text-3xl font-bold text-gray-800">Edit Showcase Logo</h1>
        <p className="text-gray-600 mt-2">Update showcase logo information</p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
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
            {(imagePreview || currentImageUrl) && (
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-2">{imagePreview ? 'New Image Preview:' : 'Current Image:'}</p>
                <img 
                  src={imagePreview || currentImageUrl} 
                  alt="Preview" 
                  className="h-28 w-28 object-contain rounded-lg shadow-md border border-gray-200 p-2"
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
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin/showcase-logos')}
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

export default ShowcaseLogosEdit;
