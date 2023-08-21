import { For, createSignal, onMount } from "solid-js"
import styles from "./Ticker.module.css"


export default function Ticker({ text }) {

  let ticker

  const loopCount = 5
  let iterations = []
  iterations.length = loopCount

  onMount(async () => {

    let offset = 0
    let scrollDistance
    let scrollSpeed = 0.5

    const animate = () => {

      if (offset >= -scrollDistance) {
        offset -= scrollSpeed
        ticker.style.translate = `${offset}px 0`
      } else {
        offset = 0
        ticker.style.translate = `px 0`
      }
      requestAnimationFrame(animate)
    }

    if (ticker) {
      scrollDistance = ticker.offsetWidth
      animate()
    }

    window.addEventListener("resize", () => {
      scrollDistance = ticker.offsetWidth
    })

  })

  return (
    <div class={styles.ticker}>
    <For each={ loopCount }><p>Hi</p></For>
      <div class={styles.tickerTrack} ref={ticker}>
        
        <For each={iterations}>{(iteration, i) =>

          <For each={ text }>{(textItem, i) =>
            <>
              <h3 class={styles.tickerItem}>{textItem}</h3>
              <h3 class={styles.tickerItem}>&#183;</h3>
            </>
          }</For>

        }</For>

      </div>
    </div>
  )
}