export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type GalleryImageInfo = {
  artist: string;
  track: string;
  credit: string;
};

export type GalleryProps = {
  images: GalleryImage[];
};
