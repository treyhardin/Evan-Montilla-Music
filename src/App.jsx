import styles from './App.module.css';
import Hero from './components/Hero/Hero';
import Tracks from './components/Tracks/Tracks';
import Shows from './components/Show/Shows';

function App() {
  return (
    <div class={styles.App}>
      <Hero />
      <Tracks />
      <Shows />
    </div>
  );
}

export default App;
