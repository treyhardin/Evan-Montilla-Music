import webm from '../../assets/alienVideo.webm'
import styles from './AlienVideo.module.css'

export default function AlienVideo() {
  return (
    <>
      <video width="1280" height="1280" autoplay loop muted class={styles.video}>
        <source src={webm} type="video/mp4" />
      </video>
    </>
  )
}