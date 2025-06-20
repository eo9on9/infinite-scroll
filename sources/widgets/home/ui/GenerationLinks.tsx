import { GENERATION, GENERATION_TEXT } from '@/sources/shared/constants'
import Link from 'next/link'
import styles from './GenerationLinks.module.css'

export const GenerationLinks = () => {
  return (
    <ul className={styles.wrap}>
      {GENERATION.map(gen => (
        <li key={gen}>
          <Link href={`/list/${gen}`} className={`${styles.link} glass`}>
            {GENERATION_TEXT[gen]}
          </Link>
        </li>
      ))}
    </ul>
  )
}
