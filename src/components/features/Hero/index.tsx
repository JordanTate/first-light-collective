import Marquee from '@/components/ui/Marquee';
import styles from './hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Marquee speed={30}>
          <p>First Light Collective</p>
        </Marquee>
        <Marquee speed={28} direction='right'>
          <p>First Light Collective</p>
        </Marquee>
        <Marquee speed={26}>
          <p>First Light Collective</p>
        </Marquee>
        <Marquee speed={24} direction='right'>
          <p>First Light Collective</p>
        </Marquee>
        <Marquee speed={22}>
          <p>First Light Collective</p>
        </Marquee>
        <Marquee speed={20} direction='right'>
          <p>First Light Collective</p>
        </Marquee>
        <Marquee speed={18}>
          <p>First Light Collective</p>
        </Marquee>
        <Marquee speed={16} direction='right'>
          <p>First Light Collective</p>
        </Marquee>
      </div>
    </section>
  );
}
