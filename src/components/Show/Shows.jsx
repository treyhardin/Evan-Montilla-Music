import { createSignal, onMount } from "solid-js"
import ShowItem from "../ShowItem/ShowItem"
import styles from "./Shows.module.css"
import { getShows, urlFor } from "../Fetch/Fetch"

export default function Shows() {

  const [ shows, setShows ] = createSignal(null)

  onMount(async () => {
    setShows(await getShows())
  })

  return (
    <div class={styles.shows}>
      <div class={styles.sectionTitle}>
        <h3>Upcoming Shows</h3>
      </div>

      <For each={ shows() }>{(show, i) =>
        <ShowItem 
          image={urlFor(show.image.asset).width(400).url()}
          title={show.title}
          location={show.location}
          time={show.time}
          url={show.url}
        />
        }</For>
    </div>
  )
}