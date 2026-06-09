import Image from 'next/image';
import logo from '../../../../public/logomark-black.png';
import styles from './banner.module.css';
import Link from 'next/link';

export default function Banner() {
  return (
    <nav className={styles.nav}>
      <div></div>
      <Link href={'/'}>
        <Image src={logo} width={50} height={50} alt='Logo' />
      </Link>
      <div>
        <Link href={'/about'}>
          <span className='text-2xl uppercase font-bold text-black'>
            About Me
          </span>
        </Link>
      </div>
    </nav>
  );
}
