import { IconPlayCircle } from "../Icon/Icon"
import styles from "./TrackItem.module.css"

export default function TrackItem({image, title, album}) {

  return (
    <section class={styles.track_item}>
      <div class={styles.track_image}>
        <img src={image} />
      </div>
      <div class={styles.textWrapper}>
        <h4>{title}</h4>
        <h6>{album}</h6>
      </div>
      <div class={styles.iconWrapper}>
        <IconPlayCircle />
      </div>
    </section>
  )
}