import Container from '@/components/ui/Container';
import Showreel from '@/components/features/Showreel';
import Artwork from './components/Artwork';
import Photography from './components/Photography';
import { TikTokVideo } from '@/components/ui/Embed/TikTok';

export default function Home() {
  return (
    <main>
      <hgroup className='flex justify-center items-center px-8 pt-16 text-center'>
        <div className='px-4 py-2 bg-black text-white'>
          <h1 className='text-4xl uppercase font-bold'>Release Artwork</h1>
        </div>
      </hgroup>
      <Artwork />
      <hgroup className='flex justify-center items-center px-8 pt-16 text-center'>
        <div className='px-4 py-2 bg-black text-white'>
          <h2 className='text-4xl uppercase font-bold'>Photography</h2>
        </div>
      </hgroup>
      <Photography />
      <div>
        <hgroup className='flex justify-center items-center px-8 pt-16 text-center'>
          <div className='px-4 py-2 bg-black text-white'>
            <h2 className='text-4xl uppercase font-bold'>Music Video</h2>
          </div>
        </hgroup>
      </div>
      <Container>
        <Showreel />
        <hgroup className='flex justify-center items-center px-8 pt-16 text-center'>
          <div className='px-4 py-2 bg-black text-white'>
            <h2 className='text-4xl uppercase font-bold'>Social</h2>
          </div>
        </hgroup>
        <div className='grid grid-cols-2 grid-flow-row gap-4'>
          <TikTokVideo url='https://www.tiktok.com/@angelnvmber/video/7629799113407630614' />
          <TikTokVideo url='https://www.tiktok.com/@angelnvmber/video/7510166998425275670' />
        </div>
        <script async src='https://www.tiktok.com/embed.js'></script>
      </Container>
    </main>
  );
}
