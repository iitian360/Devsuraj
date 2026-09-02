// scripts/upload.js
/**
 * Upload all images to Cloudinary with authentication
 * Run with: node scripts/upload.js
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
      console.error(`❌ ${fileName}: ${data.error?.message}`);
      return null;
    }
  } catch (error) {
    console.error(`❌ ${fileName}: ${error.message}`);
    return null;
  }
}

async function uploadAll() {
  console.log('🚀 Starting Cloudinary upload...\n');

  const uploadedFiles = {};

  for (const [folderPath, cloudFolder] of Object.entries(imagesFolders)) {
    if (!fs.existsSync(folderPath)) {
      console.log(`⏭️  Folder not found: ${folderPath}\n`);
      continue;
    }

    console.log(`📁 ${folderPath}`);
    uploadedFiles[folderPath] = [];

    const files = fs.readdirSync(folderPath).filter((f) => {
      const ext = path.extname(f).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
    });

    for (const file of files) {
      const publicId = await uploadFile(path.join(folderPath, file), cloudFolder);
      if (publicId) {
        uploadedFiles[folderPath].push(publicId);
      }
      await new Promise((r) => setTimeout(r, 300));
    }

    console.log('');
  }

  console.log('\n✅ Complete! Uploaded files:');
  console.log(JSON.stringify(uploadedFiles, null, 2));
  
  return uploadedFiles;
}

uploadAll().catch(console.error);
