import { IconPin, IconTime } from "../Icon/Icon"
import styles from "./ShowItem.module.css"

export default function ShowItem({image, title, location, time, link}) {

  return (
    <div class={styles.showItem}>
      <div class={styles.showImage}>
        <img src={image} />
      </div>
      <div class={styles.showText}>
        <h2>{title}</h2>
        <div class={styles.showInfo}>
          <div class={styles.showInfoItem}>
            <IconPin />
            <h4>{location}</h4>
          </div>
          <div class={styles.showInfoItem}>
            <IconTime />
            <h4>{time}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}