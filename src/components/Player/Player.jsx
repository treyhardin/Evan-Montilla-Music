import { createEffect, createSignal } from "solid-js"
import styles from "./Player.module.css"

export const [ isPlaying, setIsPlaying ] = createSignal(false)
export const [ currentTrack, setCurrentTrack ] = createSignal()

export default function Player() {

  let player

  createEffect(() => {
    if (currentTrack() && player) {
      player.load()
      player.play()
    }
  })

  return (
    <div class={`${isPlaying() ? styles.active : ''} ${styles.player}`}>

      <Show when={ currentTrack() && isPlaying() }>
        <div class={styles.playerText}>
          <h6>{ currentTrack().title }</h6>
          <p>{ currentTrack().albumTitle }</p>
        </div>
        <audio controls ref={player}>
          <source src={ currentTrack().file } type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </Show>

    </div>
  )
}