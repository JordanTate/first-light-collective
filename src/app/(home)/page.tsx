import Container from '@/components/ui/Container';
import Showreel from '@/components/features/Showreel';
import Artwork from './components/Artwork';
import Photography from './components/Photography';
import Social from './components/Social';

export default function Home() {
  return (
    <main>
      <Artwork />
      <Photography />
      <Container>
        <Showreel />
        <Social />
      </Container>
    </main>
  );
}
