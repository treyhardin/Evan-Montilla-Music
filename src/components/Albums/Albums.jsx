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
            image={urlFor(album.image.asset).width(740).height(740).url()}
            date={album.releaseDate}
            url={album.url}
          />
        }</For>
      </div>
    </div>
  )
}