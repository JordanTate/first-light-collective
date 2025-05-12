import { RefObject } from "react";

export type VideoProps = {
  children: React.ReactNode;
  embedUrl: string;
  title: string;
  link?: string;
  onReadyHandler: () => void;
}

export type MouseMoveEventProps = {
  event: React.MouseEvent;
  parentRef: RefObject<HTMLDivElement | null>;
  childRef: RefObject<HTMLDivElement | null>;
}