export function setElementCoordinates(props: {
  el: HTMLDivElement;
  coords: { x: number; y: number };
}) {
  const { el, coords } = props;

  el.style.setProperty('--x', `${coords.x}px`);
  el.style.setProperty('--y', `${coords.y}px`);
}
