import styles from './App.module.css';
import Hero from './components/Hero/Hero';
import Tracks from './components/Tracks/Tracks';
import Shows from './components/Show/Shows';
import Albums from './components/Albums/Albums';
import Socials from './components/Socials/Socials';

function App() {
  return (
    <div class={styles.App}>
      <Hero />
      <Tracks />
      <Shows />
      <Albums />
      <Socials />
    </div>
  );
}

export default App;
