'use client';

import { useEffect, useState } from 'react';
import { useLoader } from '@/context/loader-context';
import Video from '@/components/ui/Video';
import styles from './showreel.module.css';

const urls = [
  'https://vimeo.com/1011268027',
  'https://www.youtube.com/watch?v=Rw1CRo1DWPg',
  'https://www.youtube.com/watch?v=Ymr5NH9Lodk',
  'https://vimeo.com/1063159334',
  'https://vimeo.com/1075301087',
  'https://www.youtube.com/watch?v=CamWcTwmnVU',
];

export default function Showreel() {
  const TOTAL = 6;
  const { showLoader, hideLoader } = useLoader();
  const [amountReady, setAmountReady] = useState(0);

  useEffect(() => {
    showLoader();
  }, []);

  function onReadyHandler() {
    setAmountReady((prev) => {
      const next = prev + 1;
      if (next === TOTAL) {
        setTimeout(() => hideLoader(), 400);
      }
      return next;
    });
  }

  return (
    <div className={styles.showreel}>
      <Video
        title={'Nike Ad'}
        embedUrl={urls[0]}
        onReadyHandler={onReadyHandler}
      >
        <p>Coloured by Theodore Swaddling</p>
      </Video>
      <Video
        title={'The Fabric Speaks'}
        embedUrl={urls[1]}
        onReadyHandler={onReadyHandler}
      >
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
      <Video
        title={'Omen Of The Night'}
        embedUrl={urls[2]}
        onReadyHandler={onReadyHandler}
      >
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
      <Video
        title={"Amber's"}
        embedUrl={urls[3]}
        onReadyHandler={onReadyHandler}
      >
        <p>Shot, edited and coloured by Alex Chan</p>
      </Video>
      <Video
        title={'Porsche'}
        embedUrl={urls[4]}
        onReadyHandler={onReadyHandler}
      >
        <p>Coloured by Theodore Swaddling</p>
      </Video>
      <Video
        title={'A Worthy Host'}
        embedUrl={urls[5]}
        onReadyHandler={onReadyHandler}
      >
        <p>
          Directed by Alex Chan, Petr Vybiral, George Barnes, THeodore Swaddling
        </p>
      </Video>
    </div>
  );
}
