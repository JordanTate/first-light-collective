import Container from '@/components/ui/Container';
import Showreel from '@/components/features/Showreel';
import Artwork from './components/Artwork';
import Link from 'next/link';
import Photography from './components/Photography';

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
        <div className='grid grid-cols-2'>
          <blockquote
            className='tiktok-embed rounded-2xl overflow-hidden'
            cite='https://www.tiktok.com/@angelnvmber/video/7629799113407630614'
            data-video-id='7629799113407630614'
            style={{ maxWidth: '605px', minWidth: '325px' }}
          >
            {' '}
            <section>
              {' '}
              <a
                target='_blank'
                title='@angelnvmber'
                href='https://www.tiktok.com/@angelnvmber?refer=embed'
              >
                @angelnvmber
              </a>{' '}
              Still calcified Guarding my heart Maybe a bit too hard And when
              the light caught me off guard, How could I be the same? &#34;Open
              up or wilt away&#34; ─── ⋅ ༒︎ ⋅ ───{' '}
              <a
                title='alttiktok'
                target='_blank'
                href='https://www.tiktok.com/tag/alttiktok?refer=embed'
              >
                #alttiktok
              </a>{' '}
              <a
                title='darkwave'
                target='_blank'
                href='https://www.tiktok.com/tag/darkwave?refer=embed'
              >
                #darkwave
              </a>{' '}
              <a
                title='ukmusic'
                target='_blank'
                href='https://www.tiktok.com/tag/ukmusic?refer=embed'
              >
                #ukmusic
              </a>{' '}
              <a
                title='alternative'
                target='_blank'
                href='https://www.tiktok.com/tag/alternative?refer=embed'
              >
                #alternative
              </a>{' '}
              <a
                target='_blank'
                title='♬ Fateful - Angel Number'
                href='https://www.tiktok.com/music/Fateful-7425924427333240848?refer=embed'
              >
                ♬ Fateful - Angel Number
              </a>{' '}
            </section>{' '}
          </blockquote>{' '}
          <blockquote
            className='tiktok-embed rounded-2xl overflow-hidden'
            cite='https://www.tiktok.com/@angelnvmber/video/7510166998425275670'
            data-video-id='7510166998425275670'
            style={{ maxWidth: '605px', minWidth: '325px' }}
          >
            {' '}
            <section>
              {' '}
              <a
                target='_blank'
                title='@angelnvmber'
                href='https://www.tiktok.com/@angelnvmber?refer=embed'
              >
                @angelnvmber
              </a>{' '}
              Did you sleep well? ✞{' '}
              <a
                title='ethereal'
                target='_blank'
                href='https://www.tiktok.com/tag/ethereal?refer=embed'
              >
                #ethereal
              </a>{' '}
              <a
                title='ambient'
                target='_blank'
                href='https://www.tiktok.com/tag/ambient?refer=embed'
              >
                #ambient
              </a>{' '}
              <a
                title='angelnvmber'
                target='_blank'
                href='https://www.tiktok.com/tag/angelnvmber?refer=embed'
              >
                #angelnvmber
              </a>{' '}
              <a
                title='darkacademiaaesthetic'
                target='_blank'
                href='https://www.tiktok.com/tag/darkacademiaaesthetic?refer=embed'
              >
                #darkacademiaaesthetic
              </a>{' '}
              <a
                title='medievaltiktok'
                target='_blank'
                href='https://www.tiktok.com/tag/medievaltiktok?refer=embed'
              >
                #medievaltiktok
              </a>{' '}
              <a
                target='_blank'
                title='♬ The King of Light - Angel Number'
                href='https://www.tiktok.com/music/The-King-of-Light-7501568556371904528?refer=embed'
              >
                ♬ The King of Light - Angel Number
              </a>{' '}
            </section>{' '}
          </blockquote>{' '}
        </div>
        <script async src='https://www.tiktok.com/embed.js'></script>
      </Container>
    </main>
  );
}
