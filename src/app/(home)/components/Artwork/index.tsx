import Gallery from '@/components/ui/Gallery';
import { galleryImages } from './data';

export default function Artwork() {
  return (
    <>
      <hgroup className='flex justify-center items-center px-8 pt-16 text-center'>
        <div className='px-4 py-2 bg-black text-white'>
          <h1 className='text-4xl uppercase font-bold'>Release Artwork</h1>
        </div>
      </hgroup>
      <Gallery images={galleryImages} />
    </>
  );
}
