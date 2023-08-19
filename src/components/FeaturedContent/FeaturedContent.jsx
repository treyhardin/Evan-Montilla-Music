import { Show } from "solid-js"
import { urlFor } from "../Fetch/Fetch"
import { IconPlay } from "../Icon/Icon"
import styles from "./FeaturedContent.module.css"


export default function FeaturedContent({ type, image, title, cta, badgeText, url}) {

  // console.log(url)


  return (
    <>
    <a href={url()} class={styles.featuredContent} target="_blank">

      <Show when={ badgeText }>
        <div class={styles.badge}>
          <div class={styles.badge_inner}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 93 94">
              <path fill="currentColor" d="m46.5.769 5.643 10.617 8.647-8.354 2.085 11.842L73.681 9.6l-1.676 11.906L83.91 19.83l-5.273 10.805 11.841 2.086-8.354 8.647 10.618 5.642-10.618 5.643L90.48 61.3l-11.841 2.085 5.273 10.806-11.906-1.676 1.676 11.906-10.806-5.273L60.79 90.99l-8.647-8.354L46.5 93.253l-5.642-10.617-8.647 8.354-2.086-11.841-10.805 5.273 1.676-11.906L9.09 74.192l5.273-10.806L2.52 61.301l8.355-8.647L.258 47.01l10.617-5.642-8.354-8.647 11.842-2.086L9.09 19.831l11.906 1.676L19.32 9.6l10.805 5.273 2.086-11.842 8.647 8.354L46.5.77Z"/>
            </svg>
            <p class={`${styles.badge_text} utility`}>{badgeText}</p>
          </div>
        </div>
      </Show>

      <div class={styles.featuredContentCard}>

        <Show when={image() }>
          <img class={styles.featured_image} src={urlFor(image().asset).width(400).url()} />
        </Show>
        
        <div class={styles.featured_text}>
          <h3>{title()}</h3>
          <div class={styles.cta}>
            
            <Show when={ type() == 'track'}>
              <IconPlay />
              <p class="utility">{cta ? cta : 'Listen Now'}</p>
            </Show>

            <Show when={ type() == 'album'}>
              <IconPlay />
              <p class="utility">{cta ? cta : 'Play Album'}</p>
            </Show>

            <Show when={ type() == 'show'}>
              <IconPlay />
              <p class="utility">{cta ? cta : 'Get the Details'}</p>
            </Show>

          </div>
        </div>
      </div>
    </a>
    </>
  )
}