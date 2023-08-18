import ShowItem from "../ShowItem/ShowItem"
import styles from "./Shows.module.css"

export default function Shows() {

  return (
    <div class={styles.shows}>
      <div class={styles.sectionTitle}>
        <h3>Upcoming Shows</h3>
      </div>
      <ShowItem 
        image="https://cdn.pink.gr/repository/_2017/baddie2.jpg"
        title="Show Title"
        location="Location"
        time="time"
        link="www.google.com"
      />
      <ShowItem 
        image="https://cdn.pink.gr/repository/_2017/baddie2.jpg"
        title="Show Title 2"
        location="Location"
        time="time"
        link="www.google.com"
      />
      <ShowItem 
        image="https://cdn.pink.gr/repository/_2017/baddie2.jpg"
        title="Show Title 3"
        location="Location"
        time="time"
        link="www.google.com"
      />
    </div>
  )
}