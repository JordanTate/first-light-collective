import Hero from "@/components/features/Hero";
import Container from "@/components/ui/Container";
import Showreel from "@/components/features/Showreel";
import Footer from "@/components/ui/Footer";
import Banner from "@/components/ui/Banner";

export default function Home() {
  return (
    <main>
      <Banner />
      <Hero />
      <Container>
        <Showreel />
        <Footer />
      </Container>
    </main>
  );
}
