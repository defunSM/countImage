'use client';
import React, { useState } from 'react';
import InputTargetImage from './components/InputTargetImage';
import InputSourceImage from './components/InputSourceImage';
import SubmitImages from './components/SubmitImages';

export default function HomePage() {
  const [targetImage, setTargetImage] = useState(null);
  const [sourceImage, setSourceImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Find Image Occurrences</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputTargetImage onImageSelect={setTargetImage} />
        <InputSourceImage onImageSelect={setSourceImage} />
      </div>
      <SubmitImages
        targetImage={targetImage}
        sourceImage={sourceImage}
        onResult={setResult}
        setLoading={setLoading}
      />
      {loading && (
        <div className="text-center mt-4">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 mx-auto"></div>
          <p className="mt-4 text-gray-700">Processing images...</p>
        </div>
      )}
      {result && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Results</h2>
          <img src={result.resultImage} alt="Result" className="w-full max-w-lg" />
          <p>Occurrences Found: {result.occurrences.length}</p>
          {/* Map over occurrences if needed */}
        </div>
      )}
    </div>
  );
}
