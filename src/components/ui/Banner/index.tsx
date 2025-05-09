import Image from 'next/image';
import logo from '../../../../public/logomark-black.png';
import styles from './banner.module.css';

export default function Banner() {
  return (
    <nav className={styles.nav}>
      <Image src={logo} width={50} height={50} alt='Logo' />
    </nav>
  );
}
