import styles from "./Footer.module.css"

export default function Footer() {

  return (
    <footer class={styles.footer}>
      <h6 class={styles.footerTitle}>Design, code, &amp; 3D by <a href="https://www.treyhardin.com/" target="_blank">Trey Hardin</a></h6>
      <h6 class={styles.footerSecondary}>All Rights Reserved &#169;2023</h6>
    </footer>
  )
}