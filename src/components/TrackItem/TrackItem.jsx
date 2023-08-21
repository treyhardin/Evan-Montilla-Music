import { Show, createSignal } from "solid-js"
import { urlFor } from "../Fetch/Fetch"
import { IconPause, IconPlay } from "../Icon/Icon"
import styles from "./TrackItem.module.css"
import { setCurrentTrack, setIsPlaying, isPlaying, currentTrack } from "../Player/Player"

export default function TrackItem({title, albumCover, albumTitle, image, file}) {

  const togglePlay = () => {
    if (isPlaying() && currentTrack() && currentTrack().title == title) {
      return handleStop()
    }
    return handlePlay()
  }

  const handlePlay = () => {
    setIsPlaying(true)
    setCurrentTrack({
      title,
      albumTitle,
      file
    })
  }

  const handleStop = () => {
    setIsPlaying(false)
    setCurrentTrack(null)
  }

  return (
    <button class={styles.trackItem} onClick={togglePlay}>
      <Show when={albumCover || image }>
        <div class={styles.track_image}>
          <img src={image ? urlFor(image.asset).width(400).url() : urlFor(albumCover.asset).width(400).url()} />
        </div>
      </Show>
      <div class={styles.textWrapper}>
        <h4>{title}</h4>
        <Show when={albumTitle }>
          <h6>{albumTitle}</h6>
        </Show>
      </div>

      
        <Show when={ currentTrack() && currentTrack().title == title}>
          <div class={`${styles.iconWrapper} ${styles.iconActive}`}>
            <IconPause />
          </div>
        </Show>
        <Show when={ !currentTrack() || currentTrack().title !== title}>
          <div class={styles.iconWrapper}>
            <IconPlay />
          </div>
        </Show>
    </button>
  )
}