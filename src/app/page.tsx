import Introducao from '@/Components/Introducao/Introducao'
import styles from '../styles/page.module.css'
import Jornadas from '@/Components/Jornadas/Jornadas'

// import WaveBottom from '../assets/BottomWave.svg'
// import Image from 'next/image'

export default function Home() {
  return (
    <main className={styles.main}>
      <Introducao />
      {/* <Image src={WaveBottom} alt="imagem de uma onda" /> */}
      <Jornadas />
    </main>
  )
}
