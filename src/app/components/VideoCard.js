// components/VideoCard.js
'use client'; // This makes the component a Client Component

export default function VideoCard({ video, handleClick }) {
  return (
    <div
      className='video-card bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105' 
      onClick={handleClick}
      onTouchStart={handleClick}
    >
      {/* Thumbnail (70%) */}
      <div className='thumbnail w-full h-40'> 
        <img
          src={video.thumbnail}
          alt={video.name}  // Updated to use name
          className='w-full h-full object-cover'
        />
      </div>
      
      {/* Title (30%) */}
      <div className='title p-3'>
        <h3 className='text-left text-base font-medium text-gray-900 truncate'>
          {video.name}
        </h3>
      </div>
    </div>
  );
}
