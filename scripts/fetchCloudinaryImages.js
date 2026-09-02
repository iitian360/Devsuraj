// scripts/fetchCloudinaryImages.js
/**
 * Fetch all images from Cloudinary and list their exact public IDs
 * This helps identify images with suffixes like logo_fjahem
 */

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;
const crypto = require('crypto');

async function fetchImages() {
  try {
    console.log('🔍 Fetching images from Cloudinary portfolio folder...\n');

    const timestamp = Math.floor(Date.now() / 1000);

    // Create signature
    const toSign = `expression=folder:"portfolio"&timestamp=${timestamp}${API_SECRET}`;
    const signature = crypto.createHash('sha256').update(toSign).digest('hex');

    const params = new URLSearchParams({
      expression: 'folder:"portfolio"',
      timestamp,
      api_key: API_KEY,
      signature,
      max_results: 500,
    });

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search?${params.toString()}`,
      { method: 'GET' }
    );

    const data = await response.json();

    if (!data.resources || data.resources.length === 0) {
      console.error('❌ No images found or authentication failed');
      console.error('Response:', data);
      return;
    }

    console.log(`✅ Found ${data.resources.length} images\n`);

    // Group by type
    const byType = { root: [], projects: [], skills: [] };

    data.resources.forEach((resource) => {
      const pubId = resource.public_id;
      console.log(`📄 ${pubId}`);

      if (pubId.includes('projects/')) {
        byType.projects.push(pubId);
      } else if (pubId.includes('skills/')) {
        byType.skills.push(pubId);
      } else {
        byType.root.push(pubId);
      }
    });

    // Generate code snippet
    console.log('\n\n📋 Generated cloudinaryImages.js:\n');
    console.log(`// Auto-generated from Cloudinary`);
    console.log(`const CLOUD_NAME = '${CLOUD_NAME}';\n`);
    console.log(`export const IMAGES = {`);

    // Root images
    console.log(`  banner: 'https://res.cloudinary.com/\${CLOUD_NAME}/image/upload/c_scale,w_1200/${byType.root.find(id => id.includes('banner')) || 'portfolio/banner'}',`);
    console.log(`  logo: 'https://res.cloudinary.com/\${CLOUD_NAME}/image/upload/c_scale,w_200/${byType.root.find(id => id.includes('logo')) || 'portfolio/logo'}',`);

    // Project images
    console.log(`  projects: {`);
    const projectIds = {
      contact: byType.projects.find(id => id.includes('contact')) || 'portfolio/projects/contact',
      event: byType.projects.find(id => id.includes('event')) || 'portfolio/projects/event',
      jobify: byType.projects.find(id => id.includes('jobify')) || 'portfolio/projects/jobify',
      pizza: byType.projects.find(id => id.includes('pizza')) || 'portfolio/projects/pizza',
      portfolio: byType.projects.find(id => id.includes('portfolio')) || 'portfolio/projects/portfolio',
      shoeStore: byType.projects.find(id => id.includes('shoe')) || 'portfolio/projects/shoe-store',
      weather: byType.projects.find(id => id.includes('weather')) || 'portfolio/projects/weather',
      youtube: byType.projects.find(id => id.includes('youtube')) || 'portfolio/projects/youtube',
    };

    for (const [key, id] of Object.entries(projectIds)) {
      console.log(`    ${key}: 'https://res.cloudinary.com/\${CLOUD_NAME}/image/upload/c_scale,w_600/${id}',`);
    }

    console.log(`  },`);

    // Skill images
    console.log(`  skills: {`);
    const skillSearch = {
      anaconda: 'anaconda',
      cpp: 'c++',
      c: '/c.',
      css3: 'css3',
      express: 'express',
      file: 'file',
      firebase: 'firebase',
      git: 'git',
      github: 'github',
      javascript: 'javascript',
      matplotlib: 'matplotlib',
      mongodb: 'mongodb',
      mysql: 'mysql',
      nextjs: 'next.js',
      nodejs: 'node.js',
      npm: 'npm',
      numpy: 'numpy',
      pandas: 'pandas',
      python: 'python',
      react: 'react',
      redux: 'redux',
      scikitlearn: 'scikit',
      selenium: 'selenium',
      tailwindcss: 'tailwind',
      tensorflow: 'tensor',
    };

    for (const [key, searchTerm] of Object.entries(skillSearch)) {
      const found = byType.skills.find(id => id.toLowerCase().includes(searchTerm.toLowerCase()));
      const id = found || `portfolio/${key}`;
      console.log(`    ${key}: 'https://res.cloudinary.com/\${CLOUD_NAME}/image/upload/c_scale,w_100/${id}',`);
    }

    console.log(`  },`);
    console.log(`};`);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

fetchImages();
