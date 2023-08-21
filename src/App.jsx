import { Show, Suspense, onMount, useTransition, startTransition, lazy } from "solid-js"
import styles from './App.module.css';
import Preloader from "./components/Preloader/Preloader";
import Lenis from '@studio-freight/lenis'


// import Hero from './components/Hero/Hero';
// import Tracks from './components/Tracks/Tracks';
// import Shows from './components/Show/Shows';
// import Albums from './components/Albums/Albums';
// import Socials from './components/Socials/Socials';
// import Footer from './components/Footer/Footer';
// import Player from './components/Player/Player';

const Hero = lazy(() => import("./components/Hero/Hero"));
const Tracks = lazy(() => import("./components/Tracks/Tracks"));
const Shows = lazy(() => import("./components/Show/Shows"));
const Albums = lazy(() => import("./components/Albums/Albums"));
const Socials = lazy(() => import("./components/Socials/Socials"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Player = lazy(() => import("./components/Player/Player"));


function App() {

  let lenisWrapper
  let lenisContent

  const lenisSetup = () => {

    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }

  window.addEventListener("DOMContentLoaded", () => {
    // lenisSetup()
    // console.log('content loaded')
  })

  onMount(async () => {
    // lenisSetup()
  })

  const [pending, start] = useTransition();

  start(() => {
    console.log('start')
  })

  return (
    <main class={styles.App} ref={lenisWrapper}>
      <div ref={lenisContent}>
        <Suspense fallback={<Preloader />}>
          
          <Hero />
          <Tracks />
          <Shows />
          <Albums />
          <Socials />
          <Footer />
          <Player />
        </Suspense>
      </div>
    </main>
  );
}

export default App;
