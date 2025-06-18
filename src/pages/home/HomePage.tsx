import Link from 'next/link'
import styles from './HomePage.module.css'

export const HomePage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <h1>Pokédex</h1>
      </div>
      <div className={styles.content}>
        <p>Select generation</p>
        <ul>
          <li>
            <Link href="/list/1">1st</Link>
          </li>
          <li>
            <Link href="/list/2">2nd</Link>
          </li>
          <li>
            <Link href="/list/3">3rd</Link>
          </li>
          <li>
            <Link href="/list/4">4th</Link>
          </li>
          <li>
            <Link href="/list/5">5th</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
