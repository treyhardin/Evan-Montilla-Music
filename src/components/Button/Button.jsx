import styles from './Button.module.css'
import { IconInstagram, IconPin, IconSoundcloud } from "../Icon/Icon";

export default function Button({ icon, text, url} ) {
  return (
    <a class={styles.button} href={url} target="_blank">
      {icon == "soundcloud"? <IconSoundcloud /> : ''}
      {icon == "instagram"? <IconInstagram /> : ''}
      <p class="utility">{text}</p>
    </a>
  )
}