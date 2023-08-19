import { createSignal, onMount } from "solid-js"
import { getTracks, urlFor } from "../Fetch/Fetch"
import TrackItem from "../TrackItem/TrackItem"
import styles from "./Tracks.module.css"

export default function Tracks() {

  const [ tracks, setTracks ] = createSignal(null)
  onMount(async () => {
    setTracks(await getTracks())
    console.log(tracks())
  })

  return (
    <section class={styles.tracks}>
      <div class={styles.tracks_image}>
        <img src="https://cdn.pink.gr/repository/_2017/baddie2.jpg" />
      </div>
      <div class={styles.tracks_content}>
        <div class={styles.sectionTitle}>
          <h2>Latest Tracks</h2>
        </div>
        <div class={styles.tracks_wrapper}>
          <For each={ tracks() }>{(track, i) =>
            <TrackItem 
              title={track.title}
              album={track.album}
              albumCover={track.albumCover}
              albumName={track.albumName}
              file={track.fileURL}
              image={track.image}
              url={track.url}
            />
          }</For>
        </div>
      </div>
    </section>
  )
}