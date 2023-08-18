import logo from './logo.svg';
import styles from './App.module.css';
import Hero from './components/Hero/Hero';
import Tracks from './components/Tracks/Tracks';

function App() {
  return (
    <div class={styles.App}>
      <Hero />
      <Tracks />
    </div>
  );
}

export default App;
