import styles from "./Footer.module.css"

export default function Footer() {

  return (
    <footer class={styles.footer}>
      <h6 class={styles.footerTitle}>Evan Montilla Music</h6>
      <h6 class={styles.footerSecondary}>All Rights Reserved &#169;2023</h6>
    </footer>
  )
}