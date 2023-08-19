import { Show, createSignal } from "solid-js"
import { urlFor } from "../Fetch/Fetch"
import { IconPlay, IconPlayCircle } from "../Icon/Icon"
import styles from "./TrackItem.module.css"
import { setCurrentTrack, setIsPlaying, isPlaying, currentTrack } from "../Player/Player"

export default function TrackItem({title, albumCover, albumName, image, album, file}) {



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
      albumName,
      file
    })
    // console.log(isPlaying())
    // console.log(currentTrack())
  }

  const handleStop = () => {
    setIsPlaying(false)
    setCurrentTrack(null)

    // console.log(isPlaying())
    // console.log(currentTrack())
  }

  return (
    <button class={styles.trackItem} onClick={togglePlay}>
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

      {/* <Show when={currentTrack().title == title}>
        <div class={styles.iconWrapper} onClick={handleStop}>
          <IconPlayCircle />
        </div>
      </Show> */}

      {/* <Show when={!currentTrack().title == title}>
        <div class={styles.iconWrapper} onClick={handlePlay}>
          <IconPlay />
        </div>
      </Show> */}

      {/* <audio controls autoplay>
        <source src={file} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio> */}
    </button>
  )
}