import Image from 'next/image';
import { GalleryProps } from './types';
import styles from './index.module.scss';

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <div key={index} className={styles.imageContainer}>
          <Image src={image.src} alt={image.alt} width={300} height={300} />
        </div>
      ))}
    </div>
  );
}
