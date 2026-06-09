import styles from './footer.module.css';
import { GithubLogo } from '@phosphor-icons/react/dist/ssr';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <p className={styles.tagline}>
          First Light Collective is Petr Vybiral + Collaborators where credited.
        </p>
      </div>
      <div className={styles.right}>
        {/* <div className={styles.socials}>
          <a href='/' rel='nofollow' target='_blank' title='Instagram'>
            <InstagramLogo size={32} />
          </a>
          <a href='/' rel='nofollow' target='_blank' title='Spotify'>
            <SpotifyLogo size={32} />
          </a>
          <a href='/' rel='nofollow' target='_blank' title='YouTube'>
            <YoutubeLogo size={32} />
          </a>
        </div> */}
        <div className={styles.legal}>
          <p>
            <small>
              First Light Collective &copy; {new Date().getFullYear()}
            </small>
          </p>
          <a
            href='https://www.github.com/jordantate'
            rel='nofollow'
            target='_blank'
            className={styles.github}
          >
            <GithubLogo size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
