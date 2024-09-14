'use client';

import { useState } from 'react';


const ImageUpload = ({type}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Generate a preview URL for the selected image
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    // Here you would send the image to your server or an API endpoint
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Image uploaded successfully!');
      } else {
        alert('Failed to upload image.');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image.');
    }
  };

  // const uploadButton = <button className="button-6" onClick={handleUpload}>Upload Source Image</button>

  return (
    <div>
      <input type="file" id="fileLabel" onChange={handleFileChange} accept="image/*" />
      <label for="fileInput" id="fileLabel">{type}</label>
      {preview && <img className="m-4" src={preview} alt="Image Preview" width="100" />}
    </div>
  );
};

export default ImageUpload;
