import TrackItem from "../TrackItem/TrackItem"
import styles from "./Tracks.module.css"

export default function Tracks({image}) {

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
          <TrackItem 
            image="https://cdn.pink.gr/repository/_2017/baddie2.jpg"
            title="Song Title"
            album="Hello"
          />
          <TrackItem 
            image="https://cdn.pink.gr/repository/_2017/baddie2.jpg"
            title="Song Title"
            album="Hello"
          />
          <TrackItem 
            image="https://cdn.pink.gr/repository/_2017/baddie2.jpg"
            title="Song Title"
            album="Hello"
          />
          <TrackItem 
            image="https://cdn.pink.gr/repository/_2017/baddie2.jpg"
            title="Song Title"
            album="Hello"
          />
          <TrackItem 
            image="https://cdn.pink.gr/repository/_2017/baddie2.jpg"
            title="Song Title"
            album="Hello"
          />
          <TrackItem 
            image="https://cdn.pink.gr/repository/_2017/baddie2.jpg"
            title="Song Title"
            album="Hello"
          />
        </div>
      </div>
    </section>
  )
}