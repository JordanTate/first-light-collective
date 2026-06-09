'use client';

import { useEffect, useState } from 'react';
import { useLoader } from '@/context/loader-context';
import Video from '@/components/ui/Video';
import styles from './showreel.module.css';

const urls = [
  'https://www.youtube.com/watch?v=Rw1CRo1DWPg',
  'https://www.youtube.com/watch?v=Ymr5NH9Lodk',
  'https://www.youtube.com/watch?v=CamWcTwmnVU',
  'https://youtu.be/os5cbYuGYrQ?si=2RhIUivH1dFeXskI',
  'https://www.youtube.com/watch?v=uI-UlEdjiy0',
];

export default function Showreel() {
  const TOTAL = 4;
  const { showLoader, hideLoader } = useLoader();
  const [amountReady, setAmountReady] = useState(0);

  useEffect(() => {
    showLoader();
  }, []);

  function onReadyHandler() {
    setAmountReady((prev) => {
      const next = prev + 1;
      if (next === TOTAL || amountReady === TOTAL) {
        setTimeout(() => hideLoader(), 400);
      }
      return next;
    });
  }

  return (
    <div className={styles.showreel}>
      <Video
        title={'The Fabric Speaks'}
        embedUrl={urls[0]}
        onReadyHandler={onReadyHandler}
      >
        <p>
          Art Direction by Petr Vybiral
          <br />
          Storyboard by Petr Vybiral
          <br />
          Directed by Alex Chan, Petr Vybiral, George Barnes, Theodore Swaddling
          <br />
          Edited by Alex Chan
          <br />
          VFX by George Barnes & Theodore Swaddling
          <br />
          DOP Alister Malcolm
          <br />
          Coloured by Theodore Swaddling
        </p>
      </Video>
      <Video
        title={'Omen Of The Night'}
        embedUrl={urls[1]}
        onReadyHandler={onReadyHandler}
      >
        <p>
          Art Direction by Petr Vybiral
          <br />
          Storyboard by Petr Vybiral
          <br />
          Directed by Alex Chan, Petr Vybiral, George Barnes, Theodore Swaddling
          <br />
          DOP by Sam Kay & Alex Chan
          <br />
          Additional Photography by Feisal El-Khazragi
          <br />
          Edit by Alex Chan & George Barnes
          <br />
          Colour by Theodore Swaddling
          <br />
          VFX by George Barnes
        </p>
      </Video>
      <Video
        title={'A Worthy Host'}
        embedUrl={urls[2]}
        onReadyHandler={onReadyHandler}
      >
        <p>
          Art Direction by Petr Vybiral
          <br />
          Storyboard by Petr Vybiral
          <br />
          Directed by Alex Chan, Petr Vybiral, George Barnes, Theodore Swaddling
          <br />
          Edited by Alex Chan
          <br />
          VFX by George Barnes
          <br />
          DOP Liam Rees
          <br />
          Coloured by Theodore Swaddling
        </p>
      </Video>
      <Video
        title={'High On You'}
        embedUrl={urls[3]}
        onReadyHandler={onReadyHandler}
      >
        <p>
          Art Direction by Petr Vybiral
          <br />
          Storyboard by Petr Vybiral
          <br />
          Directed by Alex Chan, Petr Vybiral, George Barnes, Theodore Swaddling
          <br />
          DOP by Sam Kay
          <br />
          Additional Photography by Shona Leen & Alex Chan
          <br />
          Edit, Colour & VFX by Cult of Heaven
        </p>
      </Video>
      <Video
        title={'Anxiously Walking On Water'}
        embedUrl={urls[4]}
        onReadyHandler={onReadyHandler}
      >
        <p>
          Art Direction by Petr Vybiral
          <br />
          Storyboard by Petr Vybiral Directed by Petr Vybiral, Alex Chan and
          George Barnes
          <br />
          DOP by Alex Chan
          <br />
          Edit, Colour & VFX by George Barnes
        </p>
      </Video>
    </div>
  );
}
