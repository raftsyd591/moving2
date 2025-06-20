import React, { useState, useEffect } from 'react';
import Seo from '../components/Seo'; // Import Seo component

const TestImagesPage = () => {
  const [loadingStatus, setLoadingStatus] = useState({});
  
  // Test cases for image loading
  const testImages = [
    {
      id: 'hyphen-path',
      path: '/images/blog/best-movers-riyadh-guide-criteria-pricing.jpg',
      description: 'Image with hyphens .jpg'
    },
    {
      id: 'underscore-path',
      path: '/images/blog/best_movers_riyadh_guide_criteria_pricing.jpg',
      description: 'Image with underscores .jpg'
    },
    {
      id: 'hyphen-jpeg',
      path: '/images/blog/best-movers-riyadh-guide-criteria-pricing.jpeg',
      description: 'Image with hyphens .jpeg'
    },
    {
      id: 'underscore-jpeg',
      path: '/images/blog/best_movers_riyadh_guide_criteria_pricing.jpeg',
      description: 'Image with underscores .jpeg'
    },
    {
      id: 'default-image',
      path: '/images/blog/default-blog-post.jpg',
      description: 'Default image'
    }
  ];

  // Test images with Fetch API for accurate network status
  useEffect(() => {
    const testImageFetch = async () => {
      const results = {};
      
      for (const img of testImages) {
        try {
          const response = await fetch(img.path, { method: 'HEAD' });
          results[img.id] = {
            status: response.ok ? 'success' : 'error',
            statusCode: response.status,
            ok: response.ok
          };
        } catch (error) {
          results[img.id] = {
            status: 'error',
            error: error.message
          };
        }
      }
      
      setLoadingStatus(results);
    };
    
    testImageFetch();
  }, []);

  const handleImageLoad = (id) => {
    setLoadingStatus(prev => ({
      ...prev,
      [id]: { ...prev[id], loaded: true }
    }));
  };

  const handleImageError = (id) => {
    setLoadingStatus(prev => ({
      ...prev,
      [id]: { ...prev[id], loaded: false, error: true }
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <Seo
        title="صفحة اختبار الصور | النخبة للنقل"
        description="صفحة داخلية لاختبار تحميل الصور."
        path="/test-images"
        noIndex={true} // Add noindex directive
      />
      <h1 className="text-2xl font-bold mb-4">Image Loading Test Page</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Network Status (Fetch API)</h2>
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Image</th>
              <th className="border p-2">Path</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Status Code</th>
            </tr>
          </thead>
          <tbody>
            {testImages.map(img => (
              <tr key={img.id}>
                <td className="border p-2">{img.description}</td>
                <td className="border p-2 font-mono text-sm">{img.path}</td>
                <td className={`border p-2 ${loadingStatus[img.id]?.status === 'success' ? 'bg-green-100' : 'bg-red-100'}`}>
                  {loadingStatus[img.id]?.status || 'loading...'}
                </td>
                <td className="border p-2">
                  {loadingStatus[img.id]?.statusCode || '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Visual Test (Image Element)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testImages.map(img => (
            <div key={img.id} className="border p-4 rounded">
              <h3 className="font-medium mb-2">{img.description}</h3>
              <p className="text-sm mb-2 text-gray-500 font-mono">{img.path}</p>
              <div className="bg-gray-100 h-40 flex items-center justify-center relative">
                <img
                  src={img.path}
                  alt={img.description}
                  className="max-h-full max-w-full object-contain"
                  onLoad={() => handleImageLoad(img.id)}
                  onError={() => handleImageError(img.id)} 
                />
                {loadingStatus[img.id]?.error && (
                  <div className="absolute inset-0 bg-red-100 bg-opacity-80 flex items-center justify-center">
                    <span className="text-red-600">Failed to load</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Fallback Test</h2>
        <p className="mb-2">This image will try different paths if it fails to load:</p>
        <div className="border p-4">
          <img
            src="/images/blog/nonexistent-image-test.jpg"
            alt="Test with fallback"
            className="h-40 object-contain bg-gray-100"
            onError={(e) => {
              if (e.target.src.includes('.jpg')) {
                e.target.src = e.target.src.replace('.jpg', '.jpeg');
              } else if (e.target.src.includes('-')) {
                e.target.src = e.target.src.replace(/-/g, '_');
              } else {
                e.target.src = '/images/blog/default-blog-post.jpg';
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TestImagesPage; 