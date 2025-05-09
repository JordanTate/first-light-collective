import Video from '@/components/ui/Video';
import styles from './showreel.module.css';

const urls = [
  'https://vimeo.com/1011268027',
  'https://www.youtube.com/watch?v=Rw1CRo1DWPg',
  'https://www.youtube.com/watch?v=Ymr5NH9Lodk',
  'https://vimeo.com/1063159334',
  'https://vimeo.com/1075301087',
  'https://www.youtube.com/watch?v=CamWcTwmnVU'
];

export default function Showreel() {
  return (
    <div className={styles.showreel}>
      <Video title={'Nike Ad'} embedUrl={urls[0]}>
        <p>Coloured by Theodore Swaddling</p>
      </Video>
      <Video title={'The Fabric Speaks'} embedUrl={urls[1]}>
        <p>
          Directed by Alex Chan, Petr Vybiral, George Barnes, THeodore Swaddling
          <br />
          Edited by Alex Chan
          <br />
          VFX by George Barnes
          <br />
          Coloured by Theodore Swaddling
        </p>
      </Video>
      <Video title={"Omen Of The Night"} embedUrl={urls[2]}>
        <p>
          Directed by Alex Chan, Petr Vybiral, George Barnes, THeodore Swaddling
          <br />
          Edited by Alex Chan
          <br />
          VFX by George Barnes
          <br />
          Coloured by Theodore Swaddling
        </p>
      </Video>
      <Video title={"Amber's"} embedUrl={urls[3]}>
        <p>Shot, edited and coloured by Alex Chan</p>
      </Video>
      <Video title={'Porsche'} embedUrl={urls[4]}>
        <p>Coloured by Theodore Swaddling</p>
      </Video>
      <Video title={'A Worthy Host'} embedUrl={urls[5]}>
        <p>Directed by Alex Chan, Petr Vybiral, George Barnes, THeodore Swaddling</p>
      </Video>
    </div>
  );
}
