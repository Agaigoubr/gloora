'use client';

import { useState } from 'react';

export default function ProductDescription({ description }) {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="flex flex-col w-full lg:w-1/2">
      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('description')}
          className={`px-4 py-2 rounded-full ${
            activeTab === 'description' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab('additional')}
          className={`px-4 py-2 rounded-full ${
            activeTab === 'additional' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Additional Infos
        </button>
      </div>

      {/* Content */}
      <div className="bg-gray-100 p-6 rounded-2xl text-gray-700">
        {activeTab === 'description' ? (
          <p>{description}</p>
        ) : (
          <ul className="list-disc pl-6">
            <li>Free shipping available</li>
            <li>30-day money-back guarantee</li>
            <li>Available in multiple colors</li>
          </ul>
        )}
      </div>
    </div>
  );
}
