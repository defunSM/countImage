'use client';
import React from 'react';

export default function InputTargetImage({ onImageSelect }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onImageSelect(file);
    }
  };

  return (
    <div>
      <label htmlFor="targetImage" className="block text-white-700 font-bold mb-2">
        Target Image:
      </label>
      <input
        id="targetImage"
        name="targetImage"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full py-2 px-3 border rounded"
      />
    </div>
  );
}
