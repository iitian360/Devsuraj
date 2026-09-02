# Cloudinary Setup Guide

Your portfolio images are configured to use Cloudinary CDN for optimized delivery. Follow these steps to complete the setup:

## Step 1: Prepare Your Cloudinary Account

1. Go to [Cloudinary Dashboard](https://cloudinary.com/console)
2. Create an **Unsigned Upload Preset** (important for browser uploads):
   - Settings → Upload → Add upload preset
   - Name: `portfolio`
   - Type: **Unsigned**
   - Folder: `portfolio`
   - Save

## Step 2: Create Folders in Media Library

In your Cloudinary Media Library, create these folders:
- `portfolio/`
- `portfolio/projects/`
- `portfolio/skills/`

## Step 3: Upload Images (Choose One Option)

### Option A: Manual Upload via Dashboard (Easiest)

1. Go to Media Library → Folders
2. Upload images to each folder matching your local structure:

**Root images** → `portfolio/`:
- banner.png
- logo.jpg

**Project images** → `portfolio/projects/`:
- contact.jpg
- event.jpg
- jobify.jpg
- pizza.jpg
- portfolio.jpg
- shoe-store.jpg
- weatherjpg.jpg
- youtube.png

**Skill images** → `portfolio/skills/`:
- All .png files from `src/assets/images/skill/`

### Option B: Browser Upload (via React Component)

Add this upload component to your portfolio:

```jsx
import { uploadToCloudinary } from './utils/cloudinary';

function ImageUploader() {
  const handleUpload = async (e, folder) => {
    const file = e.target.files[0];
    try {
      const result = await uploadToCloudinary(file, folder);
      console.log('Uploaded:', result);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => handleUpload(e, 'portfolio')}
        accept="image/*"
      />
    </div>
  );
}
```

## Step 4: Verify URLs are Working

The image constants in `src/constants/cloudinaryImages.js` already have URLs configured. Once images are uploaded, they will automatically appear in your portfolio with:

- ✅ Automatic image optimization
- ✅ Responsive sizing
- ✅ Format conversion (WebP for modern browsers)
- ✅ CDN delivery worldwide
- ✅ Lazy loading support

## Using Images in Components

```jsx
import { IMAGES } from '../constants/cloudinaryImages';

// Simple usage
<img src={IMAGES.banner} alt="banner" />

// With optimization
<img 
  src={IMAGES.projects.jobify} 
  alt="Jobify Project"
  loading="lazy"
/>

// Skill badges
<img src={IMAGES.skills.react} alt="React" width="100" />
```

## Troubleshooting

**Images not loading?**
- Verify folder structure matches exactly
- Check file names (case-sensitive on Cloudinary)
- Ensure upload preset is set to "Unsigned"

**File names with special characters?**
- Cloudinary auto-handles URL encoding
- File names like `C++ (CPlusPlus).png` work fine

## Security Note

⚠️ Your API credentials have been exposed. Please:
1. Regenerate your API Secret in Cloudinary Settings
2. Keep API Secret out of client-side code (it's in .env.local, not in .env)
3. Use unsigned upload presets for browser uploads only
