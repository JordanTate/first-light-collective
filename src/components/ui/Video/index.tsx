'use client';

import { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import { VideoProps } from './types';
import { handleMouseMove } from './lib/events';
import styles from './video.module.css';

export default function Video(props: VideoProps) {
  const {
    children,
    embedUrl,
    title,
    width = 640,
    height = 360,
    onReadyHandler,
  } = props;
  const [hasWindow, setHasWindow] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const figureRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') setHasWindow(true);
  }, []);

  return (
    <figure
      ref={figureRef as React.RefObject<HTMLDivElement>}
      className={styles.figure}
      style={
        {
          '--video-width': typeof width === 'number' ? `${width}px` : width,
          '--video-height': typeof height === 'number' ? `${height}px` : height,
        } as React.CSSProperties
      }
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
      onMouseMove={(event) =>
        handleMouseMove({ event, parentRef: figureRef, childRef: captionRef })
      }
      onClick={() => window.open(embedUrl, '_blank')}
    >
      <div className={styles.playerWrapper}>
        {hasWindow && (
          <ReactPlayer
            width={'100%'}
            height={'100%'}
            className={styles.player}
            url={embedUrl}
            playing={isPlaying}
            loop={true}
            controls={false}
            muted={true}
            onReady={onReadyHandler}
          />
        )}
      </div>
      {children != null && (
        <figcaption className={styles.caption}>
          <div
            ref={captionRef as React.RefObject<HTMLDivElement>}
            className={styles.captionContainer}
          >
            <div className={styles.captionContent}>
              <h2 className={styles.captionTitle}>{title}</h2>
              <div className={styles.captionBody}>{children}</div>
            </div>
          </div>
        </figcaption>
      )}
    </figure>
  );
}
