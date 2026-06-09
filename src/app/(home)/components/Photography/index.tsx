'use client';

import Container from '@/components/ui/Container';
import { galleryImages } from './data';
import { BalancedMasonryGrid as MasonryGrid, Frame } from '@masonry-grid/react';
import Image from 'next/image';

export default function Photography() {
  return (
    <Container>
      <hgroup className='flex justify-center items-center px-8 pt-16 text-center'>
        <div className='px-4 py-2 bg-black text-white'>
          <h2 className='text-4xl uppercase font-bold'>Photography</h2>
        </div>
      </hgroup>
      <MasonryGrid frameWidth={360} gap={16} className='py-16 px-4'>
        {galleryImages.map((image) => (
          <Frame key={image.src} width={image.width} height={image.height}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </Frame>
        ))}
      </MasonryGrid>
    </Container>
  );
}
