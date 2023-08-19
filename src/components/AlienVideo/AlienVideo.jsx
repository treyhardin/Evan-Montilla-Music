import webm from '../../assets/alienVideo.webm'
import hevc from '../../assets/alienVideo.mp4'
import styles from './AlienVideo.module.css'

export default function AlienVideo() {

  return (
    <>
      <video width="1920" height="1920" autoplay loop muted playsinline class={styles.video}>
        <source src={webm} type="video/webm" />
        <source
          src={hevc}
          type='video/mp4' />
      </video>
    </>
  )
}