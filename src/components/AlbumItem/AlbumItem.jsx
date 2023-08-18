import styles from "./AlbumItem.module.css"

export default function AlbumItem({ title, image, date }) {

  return (
    <div class={styles.albumItem}>
      <img class={styles.albumImage} src={image} />
      <div class={styles.albumText}>
        <h6 class={styles.albumTitle}>{title}</h6>
        <h6 class={styles.albumTitle}>&#183;</h6>
        <h6 class={styles.albumDate}>{date}</h6>
      </div>
    </div>
  )
}