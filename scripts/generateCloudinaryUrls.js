// scripts/generateCloudinaryUrls.js
/**
 * Simpler approach: Use Cloudinary's JSON metadata endpoint
 * Run with: node scripts/generateCloudinaryUrls.js
 */

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;

async function fetchFromCloudinary() {
  // Method 1: Try using the context=values parameter in search
  try {
    console.log('🔍 Fetching images from Cloudinary...\n');

    const querystring = require('querystring');
    const crypto = require('crypto');

    const timestamp = Math.floor(Date.now() / 1000);

    // Build signature for authentication
    const paramsToSign = {
      expression: 'folder:portfolio',
      timestamp,
    };

    const paramsStr = Object.keys(paramsToSign)
      .sort()
      .map((key) => `${key}=${paramsToSign[key]}`)
      .join('&');

    const signature = crypto
      .createHash('sha256')
      .update(paramsStr + API_SECRET)
      .digest('hex');

    const params = new URLSearchParams({
      expression: 'folder:portfolio',
      timestamp,
      api_key: API_KEY,
      signature,
      max_results: 500,
    });

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search?${params}`,
      { method: 'GET' }
    );

    const data = await response.json();

    if (data.resources) {
      console.log(`✅ Found ${data.resources.length} images\n`);

      const images = data.resources.reduce(
        (acc, resource) => {
          const id = resource.public_id;
          console.log(`📁 ${id}`);

          if (id.includes('projects')) acc.projects.push(id);
          else if (id.includes('skills') || !id.includes('banner') && !id.includes('logo')) {
            if (id.split('/').length > 1) acc.skills.push(id);
            else acc.root.push(id);
          } else acc.root.push(id);

          return acc;
        },
        { root: [], projects: [], skills: [] }
      );

      console.log('\n📋 Organized Images:');
      console.log('Root:', images.root);
      console.log('Projects:', images.projects);
      console.log('Skills:', images.skills);

      return images;
    } else {
      throw new Error(data.error?.message || 'No resources returned');
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}
