import Button from "../Button/Button"
import styles from "./Socials.module.css"

export default function Socials() {

  return (
    <div class={styles.socials}>

      <div class={styles.socialInfo}>
        <h2>Unlike anyone else this side of the Mississippi</h2>
        <div class={styles.buttonWrapper}>
          <Button icon="soundcloud" text="Soundcloud" />
          <Button icon="instagram" text="Instagram" />
        </div>
      </div>
    </div>
  )
}