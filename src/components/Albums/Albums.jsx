import AlbumItem from "../AlbumItem/AlbumItem"
import styles from "./Albums.module.css"

export default function Albums() {

  return (
    <div class={styles.albums}>
      <div class={styles.sectionTitle}>
        <h2>Albums</h2>
      </div>
      <div class={styles.albumsWrapper}>
        <AlbumItem
          title="Title"
          image="https://cdn.pink.gr/repository/_2017/baddie2.jpg"
          date="08.12.23"
        />
        <AlbumItem
          title="Title"
          image="https://cdn.pink.gr/repository/_2017/baddie2.jpg"
          date="08.12.23"
        />
        <AlbumItem
          title="Title"
          image="https://cdn.pink.gr/repository/_2017/baddie2.jpg"
          date="08.12.23"
        />
        <AlbumItem
          title="Title"
          image="https://cdn.pink.gr/repository/_2017/baddie2.jpg"
          date="08.12.23"
        />
        <AlbumItem
          title="Title"
          image="https://cdn.pink.gr/repository/_2017/baddie2.jpg"
          date="08.12.23"
        />
        

      </div>
    </div>
  )
}