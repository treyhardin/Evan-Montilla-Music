import { For, onMount } from "solid-js"
import styles from "./Ticker.module.css"


export default function Ticker({ text }) {

  const loopCount = 3;

  let tickerRef

  onMount(async () => {

    let newChildren = []

    for (let i = 0; i < loopCount; i++) {
      for (let i = 0; i < tickerRef.children.length; i++) {
        const textNode = tickerRef.children[i].cloneNode(true)
        newChildren.push(textNode)
      }
    }

    newChildren.forEach((child) => {
      tickerRef.appendChild(child)
    })

  });

  return (
    <div class={styles.ticker}>
    <For each={ loopCount }><p>Hi</p></For>
      <div class={styles.tickerTrack} ref={tickerRef}>
        
        <For each={ text }>{(textItem, i) =>
          <>
            <h3 class={styles.tickerItem}>{textItem}</h3>
            <h3 class={styles.tickerItem}>&#183;</h3>
          </>
        }</For>

      </div>
    </div>
  )
}