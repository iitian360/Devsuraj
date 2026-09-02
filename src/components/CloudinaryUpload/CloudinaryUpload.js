// src/components/CloudinaryUpload/CloudinaryUpload.js
/**
 * Cloudinary Upload Helper Component
 * Allows users to upload images directly to Cloudinary
 * Usage: <CloudinaryUpload folder="portfolio/projects" onSuccess={handleSuccess} />
 */

import React, { useState } from 'react';

const CloudinaryUpload = ({ folder = 'portfolio', onSuccess, onError }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const uploadToCloudinary = async (file) => {
    try {
      setLoading(true);
      setError(null);

      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'portfolio');
      formData.append('folder', folder);

      const response = await fetch(
        'https://api.cloudinary.com/v1_1/dl6jdutji/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || 'Upload failed');
      }

      const uploadData = {
        publicId: data.public_id,
        url: data.secure_url,
        width: data.width,
        height: data.height,
      };

      if (onSuccess) {
        onSuccess(uploadData);
      }

      return uploadData;
    } catch (err) {
      const errorMsg = err.message;
      setError(errorMsg);
      if (onError) {
        onError(errorMsg);
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      await uploadToCloudinary(file);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          disabled={loading}
          className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100
            disabled:opacity-50"
        />
      </label>

      {loading && <p className="text-sm text-blue-600">Uploading...</p>}
      {error && <p className="text-sm text-red-600">Error: {error}</p>}
    </div>
  );
};

export default CloudinaryUpload;
