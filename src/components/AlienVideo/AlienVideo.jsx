import webm from '../../assets/alienVideo.webm'
import hevc from '../../assets/alienVideo.mov'
import styles from './AlienVideo.module.css'
import { createSignal, onMount } from 'solid-js'

export default function AlienVideo() {

  let videoPlayer
  const [ videoSource, setVideoSource ] = createSignal(webm)

  // onMount(async () => {
  //   // console.log('hi')
  //   const webmSupport = videoPlayer.canPlayType('video/webm; codecs="vp9"');
  //   console.log(webmSupport)
  // })

  // video.canPlayType('video/webm; codecs="vp8, vorbis"');

  return (
    <>
      {/* <video width="1920" height="1920" autoplay loop muted playsinline class={styles.video}>
        <source src={webm} type="video/webm" />
        <source src={hevc} type='video/mp4; codecs="hvc1"' />
        Your browser doesn't support this alien technology.
      </video> */}
      <video ref={videoPlayer} width="1920" height="1920" autoplay loop muted playsinline class={styles.video} src={webm} />
    </>
  )
}