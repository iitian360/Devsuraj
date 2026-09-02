import React from 'react';
import { IMAGES } from '../constants/cloudinaryImages';

const CloudinaryDebug = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h2>🔍 Cloudinary Debug</h2>
      
      <h3>Root Images</h3>
      <div style={{ marginBottom: '20px' }}>
        <p><strong>Banner:</strong></p>
        <p style={{ fontSize: '12px', wordBreak: 'break-all' }}>{IMAGES.banner}</p>
        <img src={IMAGES.banner} alt="banner" style={{ maxWidth: '300px', border: '1px solid red' }} />
        <p style={{ color: IMAGES.banner.includes('home/portfolio') ? 'green' : 'red' }}>
          Path: {IMAGES.banner.includes('home/portfolio') ? '✅ Correct' : '❌ Wrong'}
        </p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p><strong>Logo:</strong></p>
        <p style={{ fontSize: '12px', wordBreak: 'break-all' }}>{IMAGES.logo}</p>
        <img src={IMAGES.logo} alt="logo" style={{ maxWidth: '150px', border: '1px solid red' }} />
      </div>

      <h3>Project Images (First 3)</h3>
      {Object.entries(IMAGES.projects).slice(0, 3).map(([key, url]) => (
        <div key={key} style={{ marginBottom: '20px' }}>
          <p><strong>{key}:</strong></p>
          <p style={{ fontSize: '11px', wordBreak: 'break-all' }}>{url}</p>
          <img src={url} alt={key} style={{ maxWidth: '300px', border: '1px solid blue' }} />
          <p>Status: {url.includes('home/portfolio/projects') ? '✅' : '❌'}</p>
        </div>
      ))}

      <h3>Skill Images (First 3)</h3>
      {Object.entries(IMAGES.skills).slice(0, 3).map(([key, url]) => (
        <div key={key} style={{ marginBottom: '20px' }}>
          <p><strong>{key}:</strong></p>
          <p style={{ fontSize: '11px', wordBreak: 'break-all' }}>{url}</p>
          <img src={url} alt={key} style={{ maxWidth: '100px', border: '1px solid green' }} />
          <p>Status: {url.includes('home/portfolio/skills') ? '✅' : '❌'}</p>
        </div>
      ))}
    </div>
  );
};

export default CloudinaryDebug;
