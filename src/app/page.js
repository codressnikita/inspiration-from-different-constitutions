import Hero from './components/Hero';
import WelcomeBanner from './components/WelcomeBanner';
import VideoCardPanel from './components/VideoCardPanel';
import Screensaver from './components/Screensaver';

export default function Home() {
  return (
    <>
      <Hero />
      <WelcomeBanner />
      <VideoCardPanel />
      <Screensaver />
    </>
  );
}
