import { setElementCoordinates } from '@/lib/element-helpers';
import { MouseMoveEventProps } from '../types';

function applyResistance(value: number, max: number, threshold: number) {
  if (value <= max - threshold) return value;
  const excess = value - (max - threshold);
  return max - threshold + excess * 0.2;
}

export function setElementPosition({
  event,
  parentRef,
  childRef,
}: MouseMoveEventProps) {
  const parentEl = parentRef.current;
  const childEl = childRef.current;
  if (!parentEl || !childEl) return;

  const parentRect = parentEl.getBoundingClientRect();
  const childRect = childEl.getBoundingClientRect();

  const childwidth = childRect.width;
  const childHeight = childRect.height;

  const coords = {
    x: event.clientX - parentRect.left,
    y: event.clientY - parentRect.top,
  };

  coords.x = applyResistance(coords.x, parentRect.width - childwidth / 2, 50);
  coords.y = applyResistance(coords.y, parentRect.height - childHeight / 2, 50);

  setElementCoordinates({ el: parentEl, coords });
}
