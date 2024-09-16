'use client';
import React, { useState } from 'react';

export default function SubmitImages({
  targetImage,
  sourceImage,
  onResult,
  setLoading,
}) {
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!targetImage || !sourceImage) {
      setError('Please provide both images.');
      return;
    }

    const formData = new FormData();
    formData.append('targetImage', targetImage);
    formData.append('sourceImage', sourceImage);

    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/find-occurrences', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        onResult(data);
      } else {
        const errorText = await response.text();
        setError(`Error: ${errorText}`);
      }
    } catch (error) {
      console.error('Error submitting images:', error);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4">
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Find Occurrences
      </button>
    </div>
  );
}
