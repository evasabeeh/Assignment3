import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lottie from "lottie-web";
import './App.css';
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import LandingPageMain from './pages/LandingPageMain';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: document.getElementById('lottie-animation-container'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: 'gradient_animation.json',
    });

    animation.addEventListener('complete', () => {
      setAnimationComplete(true);
    });

    gsap.to(".landing-page-container", {
      opacity: 0, 
      scrollTrigger: {
        trigger: ".landing-page-container",
        start: "top top",
        end: "bottom top",
        scrub: true, 
        onUpdate: (self) => {
          animation.goToAndStop(self.progress * animation.totalFrames, true);
        },
      },
    });

    if (animationComplete) {
      gsap.to(".main-page-container", {
        opacity: 1,
        y: 0,
        duration: 1
      });
    }

    gsap.to(".main-page-container", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".main-page-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true,          // Smooth scroll
      },
    });
  }, [animationComplete]);

  return (
    <div>
      <div className="landing-page-container">
        <LandingPage />
      </div>

      <div id="lottie-animation-container" style={{ height: '100vh' }}></div>

      <div className="main-page-container">
        <LandingPageMain />
      </div>

      <MainPage />

    </div>
  );
}

export default App;
