import Marquee from "@/components/ui/Marquee"
import styles from './hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Marquee speed={20}>
          <p>First Light Collective</p>
        </Marquee>
        <Marquee speed={18} direction="right">
          <p>First Light Collective</p>
        </Marquee>
        <Marquee speed={16}>
          <p>First Light Collective</p>
        </Marquee>
        <Marquee speed={14} direction="right">
          <p>First Light Collective</p>
        </Marquee>
      </div>
    </section>
  )
}