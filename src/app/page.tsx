import Introducao from '@/Components/Introducao/Introducao'
import styles from '../styles/page.module.css'
import Jornadas from '@/Components/Jornadas/Jornadas'

export default function Home() {
  return (
    <main className={styles.main}>
      <Introducao />
      <Jornadas />
    </main>
  )
}
