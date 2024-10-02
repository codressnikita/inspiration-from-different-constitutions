// components/VideoCardPanel.js

import VideoCard from './VideoCard';

const videos = [
  {
    name: 'Explainer 1',
    thumbnail: '/thumbnails/thumbnail1.webp',
    src: '/videos/video1.mp4',
    description: 'lajhdkjahsd akjhsdkasjhd akhdajksdhkjasd kasjhdkajhd',
  },
  {
    name: 'Explainer 2',
    thumbnail: '/thumbnails/thumbnail2.webp',
    src: '/videos/video2.mp4',
    description: 'lajhdkjahsd akjhsdkasjhd akhdajksdhkjasd kasjhdkajhd',
  },
  {
    name: 'Explainer 1',
    thumbnail: '/thumbnails/thumbnail1.webp',
    src: '/videos/video1.mp4',
    description: 'lajhdkjahsd akjhsdkasjhd akhdajksdhkjasd kasjhdkajhd',
  },
  {
    name: 'Explainer 2',
    thumbnail: '/thumbnails/thumbnail2.webp',
    src: '/videos/video2.mp4',
    description: 'lajhdkjahsd akjhsdkasjhd akhdajksdhkjasd kasjhdkajhd',
  },
  {
    name: 'Explainer 1',
    thumbnail: '/thumbnails/thumbnail1.webp',
    src: '/videos/video1.mp4',
    description: 'lajhdkjahsd akjhsdkasjhd akhdajksdhkjasd kasjhdkajhd',
  },
  {
    name: 'Explainer 2',
    thumbnail: '/thumbnails/thumbnail2.webp',
    src: '/videos/video2.mp4',
    description: 'lajhdkjahsd akjhsdkasjhd akhdajksdhkjasd kasjhdkajhd',
  },
  // Add more video objects here
];

export default function VideoCardPanel() {
  return (
    <div className='video-gallery mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {videos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
}
