// scripts/uploadToCloudinary.js
/**
 * Run this script with: node scripts/uploadToCloudinary.js
 */

const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const crypto = require('crypto');

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;

const imagesFolders = {
  'src/assets/images': 'portfolio',
  'src/assets/images/projects': 'portfolio/projects',
  'src/assets/images/skill': 'portfolio/skills',
};

function generateSignature(params) {
  const paramsStr = Object.keys(params)
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join('&');
  return crypto
    .createHash('sha1')
    .update(paramsStr + API_SECRET)
    .digest('hex');
}

async function uploadFile(filePath, folderName) {
  const fileName = path.basename(filePath);
  const fileStream = fs.createReadStream(filePath);

  const timestamp = Math.floor(Date.now() / 1000);
  const params = {
    timestamp,
    folder: folderName,
  };

  const signature = generateSignature(params);

  const formData = new FormData();
  formData.append('file', fileStream);
  formData.append('api_key', API_KEY);
  formData.append('folder', folderName);
  formData.append('timestamp', timestamp);
  formData.append('signature', signature);
  formData.append('resource_type', 'auto');

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await response.json();

    if (response.ok) {
      console.log(`✅ Uploaded: ${fileName} → ${data.public_id}`);
      return data.public_id;
    } else {
      console.error(`❌ Failed to upload ${fileName}:`, data.error?.message);
      return null;
    }
  } catch (error) {
    console.error(`❌ Error uploading ${fileName}:`, error.message);
    return null;
  }
}

async function uploadAllImages() {
  console.log('🚀 Starting Cloudinary upload...\n');

  const uploadedFiles = {};

  for (const [folderPath, cloudinaryFolder] of Object.entries(imagesFolders)) {
    if (!fs.existsSync(folderPath)) {
      console.log(`⏭️  Folder not found: ${folderPath}\n`);
      continue;
    }

    console.log(`📁 Uploading from: ${folderPath}`);

    const files = fs.readdirSync(folderPath).filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
    });

    uploadedFiles[folderPath] = [];

    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const publicId = await uploadFile(filePath, cloudinaryFolder);
      if (publicId) {
        uploadedFiles[folderPath].push({
          file,
          publicId,
        });
      }
      // Add delay to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    console.log('');
  }

  console.log('\n📋 Upload Summary:');
  console.log(JSON.stringify(uploadedFiles, null, 2));
}

uploadAllImages().catch(console.error);
