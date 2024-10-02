// components/VideoCard.js

export default function VideoCard({ video }) {
  return (
    <div className="video-card">
      <img src={video.thumbnail} alt={video.title} className="w-full h-auto rounded-lg" />
      <h3 className="mt-2 text-center text-lg font-semibold">{video.title}</h3>
      <a href={video.src} target="_blank" rel="noopener noreferrer" className="block mt-2 text-center text-blue-500 hover:underline">
        Watch Video
      </a>
    </div>
  );
}
