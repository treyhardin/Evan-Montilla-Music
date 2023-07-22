import AlienVideo from "../AlienVideo/AlienVideo";
import styles from "./Hero.module.css"


export default function Hero() {
  return (
    <section class={styles.hero}>
      <h1 class={styles.hero_title}>Evan Montilla</h1>
      <AlienVideo />
    </section>
  )
}