import Gallery from '@/components/ui/Gallery';
import { galleryImages } from './data';

export default function Artwork() {
  return <Gallery images={galleryImages} />;
}
