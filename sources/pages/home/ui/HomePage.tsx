import { GenerationLinks } from '../../../widgets/home/ui/GenerationLinks'
import styles from './HomePage.module.css'

export const HomePage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <h1>Pokédex</h1>
      </div>
      <div className={styles.content}>
        <p>Select generation</p>
        <GenerationLinks />
      </div>
    </div>
  )
}
