import { Suspense, onMount } from "solid-js"
import styles from './App.module.css';
import Hero from './components/Hero/Hero';
import Tracks from './components/Tracks/Tracks';
import Shows from './components/Show/Shows';
import Albums from './components/Albums/Albums';
import Socials from './components/Socials/Socials';
import Footer from './components/Footer/Footer';
import Player from './components/Player/Player';
import Lenis from '@studio-freight/lenis'
import Preloader from "./components/Preloader/Preloader";

function App() {

  let lenisWrapper
  let lenisContent

  const lenisSetup = async () => {

    const lenis = new Lenis()

    // lenis.on('scroll', (e) => {
    //   console.log(e)
    // })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }

  onMount(async () => {
    lenisSetup()
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
