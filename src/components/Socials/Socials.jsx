import { Show, createSignal, onMount } from "solid-js"
import Button from "../Button/Button"
import styles from "./Socials.module.css"
import { getSocialSectionSettings } from "../Fetch/Fetch"

export default function Socials() {

  const [ sectionSettings, setSectionSettings ] = createSignal(null)

  onMount(async () => {
    const settings = await getSocialSectionSettings()
    setSectionSettings(settings[0])
  })

  return (
    <div class={styles.socials}>
      <Show when={sectionSettings()}>
        <div class={styles.socialInfo}>
          <h2>{sectionSettings().sectionTitle}</h2>
          <div class={styles.buttonWrapper}>
            <Button icon="soundcloud" text="Soundcloud" url="https://soundcloud.com/evanmontilla" newTab />
            <Button icon="instagram" text="Instagram" url="https://www.instagram.com/evan_montilla_music/" newTab />
          </div>
        </div>
      </Show>
    </div>
  )
}