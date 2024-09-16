'use client';
import React from 'react';

export default function InputSourceImage({ onImageSelect }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onImageSelect(file);
    }
  };

  return (
    <div>
      <label htmlFor="sourceImage" className="block text-white-700 font-bold mb-2">
        Source Image:
      </label>
      <input
        id="sourceImage"
        name="sourceImage"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full py-2 px-3 border rounded"
      />
    </div>
  );
}
