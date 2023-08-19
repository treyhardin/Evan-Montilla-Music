import { For, createSignal, onMount } from "solid-js"
import styles from "./Ticker.module.css"


export default function Ticker({ text }) {

  const loopCount = 5
  let iterations = []
  iterations.length = loopCount

  return (
    <div class={styles.ticker}>
    <For each={ loopCount }><p>Hi</p></For>
      <div class={styles.tickerTrack}>
        
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