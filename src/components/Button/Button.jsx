import styles from './Button.module.css'
import { IconInstagram, IconPin, IconSoundcloud } from "../Icon/Icon";

export default function Button({ icon, text} ) {
  return (
    <button class={styles.button}>
      {icon == "soundcloud"? <IconSoundcloud /> : ''}
      {icon == "instagram"? <IconInstagram /> : ''}
      <p class="utility">{text}</p>
    </button>
  )
}