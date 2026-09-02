// src/utils/cloudinary.js
/**
 * Cloudinary utilities for image optimization and delivery
 */

const CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || 'dl6jdutji';

/**
 * Generate optimized Cloudinary URL
 * @param {string} publicId - Image public ID
 * @param {object} options - Transformation options
 */
export const getCloudinaryUrl = (publicId, options = {}) => {
  const {
    width,
    height,
    crop = 'auto',
    quality = 'auto',
    format = 'auto',
  } = options;

  let url = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/`;
  let transforms = [];

  if (width || height) {
    transforms.push(`c_${crop}`);
    if (width) transforms.push(`w_${width}`);
    if (height) transforms.push(`h_${height}`);
  }

  transforms.push(`q_${quality}`);
  transforms.push(`f_${format}`);

  if (transforms.length > 0) {
    url += transforms.join(',') + '/';
  }

  url += publicId;
  return url;
};

/**
 * Get responsive image srcset for different screen sizes
 */
export const getResponsiveSrcset = (publicId) => {
  return {
    small: getCloudinaryUrl(publicId, { width: 400, crop: 'scale' }),
    medium: getCloudinaryUrl(publicId, { width: 800, crop: 'scale' }),
    large: getCloudinaryUrl(publicId, { width: 1200, crop: 'scale' }),
  };
};
