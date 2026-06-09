'use client';

import { TikTokEmbed } from 'react-social-media-embed';
import styles from './styles.module.css';

function TikTokVideo({ url }: { url: string }) {
  return <TikTokEmbed url={url} className={styles.embed} />;
}

export { TikTokVideo };
