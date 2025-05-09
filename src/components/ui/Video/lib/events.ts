import { MouseMoveEventProps } from "../types";
import { setElementPosition } from "./functions";

export function handleMouseMove(params: MouseMoveEventProps) {
  setElementPosition(params);
}