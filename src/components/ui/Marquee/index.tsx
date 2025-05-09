import { MarqueeProps } from './types';
import MarqueeComponent from 'react-fast-marquee';

export default function Marquee(props: MarqueeProps) {
  const { children, direction = 'left', speed = 30 } = props;

  return (
    <MarqueeComponent direction={direction} speed={speed} autoFill={true}>
      {children}
    </MarqueeComponent>
  );
}
