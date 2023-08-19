import { For, createSignal, onMount } from "solid-js"
import AlbumItem from "../AlbumItem/AlbumItem"
import styles from "./Albums.module.css"
import { getAlbums, urlFor } from "../Fetch/Fetch"

export default function Albums() {

  const [ albums, setAlbums ] = createSignal(null)

  onMount(async () => {
    setAlbums(await getAlbums())
  })

  return (
    <div class={styles.albums}>
      <div class={styles.sectionTitle}>
        <h2>Albums</h2>
      </div>
      <div class={styles.albumsWrapper}>
        <For each={ albums() }>{(album, i) =>
          <AlbumItem
            title={album.title}
            image={urlFor(album.coverImage.asset).width(600).height(600).url()}
            date={album.releaseDate}
          />
        }</For>
      </div>
    </div>
  )
}