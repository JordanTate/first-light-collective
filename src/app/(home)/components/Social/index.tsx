'use client';

import { TikTokVideo } from '@/components/ui/Embed/TikTok';
import { galleryImages } from './data';
import { BalancedMasonryGrid as MasonryGrid, Frame } from '@masonry-grid/react';
import Image from 'next/image';
import Video from '@/components/ui/Video';

const urls = ['https://vimeo.com/manage/videos/1200273576'];

export default function Social() {
  return (
    <div className='grid gap-4'>
      <hgroup className='flex justify-center items-center px-8 pt-16 text-center'>
        <div className='px-4 py-2 bg-black text-white'>
          <h2 className='text-4xl uppercase font-bold'>Social</h2>
        </div>
      </hgroup>
      <div className='grid lg:grid-cols-2 grid-flow-row gap-4 py-16 px-4'>
        <TikTokVideo url='https://www.tiktok.com/@angelnvmber/video/7629799113407630614' />
        <TikTokVideo url='https://www.tiktok.com/@angelnvmber/video/7510166998425275670' />
      </div>
      <div className='flex justify-center items-center'>
        <Video
          title={'Animation Reel'}
          embedUrl={urls[0]}
          width={1600}
          height={900}
        />
      </div>
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
    </div>
  );
}
