'use client';

import Container from '@/components/ui/Container';
import { galleryImages } from './data';
import { BalancedMasonryGrid as MasonryGrid, Frame } from '@masonry-grid/react';

export default function Photography() {
  return (
    <Container>
      <MasonryGrid frameWidth={360} gap={16} className='py-16 px-4'>
        {galleryImages.map((image) => (
          <Frame key={image.src} width={image.width} height={image.height}>
            <img src={image.src} alt={image.alt} />
          </Frame>
        ))}
      </MasonryGrid>
    </Container>
  );
}
