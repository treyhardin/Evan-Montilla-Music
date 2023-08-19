import { createSignal, onMount } from "solid-js"
import { getTracks, getTracksSectionSettings, urlFor } from "../Fetch/Fetch"
import TrackItem from "../TrackItem/TrackItem"
import styles from "./Tracks.module.css"

export default function Tracks() {

  const [ sectionSettings, setSectionSettings ] = createSignal(null)

  onMount(async () => {
    const settings = await getTracksSectionSettings()
    setSectionSettings(settings[0])
  })

  return (
    <section class={styles.tracks}>
      <Show when={sectionSettings()}>
        <div class={styles.tracks_image}>
          <img src={urlFor(sectionSettings().image.asset).width(1440).url()} />
        </div>
        <div class={styles.tracks_content}>
          <div class={styles.sectionTitle}>
            <h2>{sectionSettings().sectionTitle}</h2>
          </div>
          <div class={styles.tracks_wrapper}>
            <For each={ sectionSettings().featuredTracks }>{(track, i) =>
              <TrackItem 
                test={i}
                title={sectionSettings().titles[i()]}
                albumCover={sectionSettings().covers[i()]}
                albumTitle={sectionSettings().albumTitles[i()]}
                file={sectionSettings().files[i()]}
                image={sectionSettings().images[i()]}
              />
            }</For>
          </div>
        </div>
      </Show>
    </section>
  )
}