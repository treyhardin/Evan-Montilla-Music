import { Show } from "solid-js"
import { urlFor } from "../Fetch/Fetch"
import { IconPlayCircle } from "../Icon/Icon"
import styles from "./TrackItem.module.css"

export default function TrackItem({title, albumCover, albumName, image, album, file}) {

  return (
    <section class={styles.track_item}>
      <Show when={albumCover || image }>
        <div class={styles.track_image}>
          <img src={image ? urlFor(image.asset).url() : urlFor(albumCover.asset).url()} />
        </div>
      </Show>
      <div class={styles.textWrapper}>
        <h4>{title}</h4>
        <Show when={albumName }>
          <h6>{albumName}</h6>
        </Show>
      </div>
      <div class={styles.iconWrapper}>
        <IconPlayCircle />
      </div>
      <audio controls autoplay>
        <source src={file} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  )
}