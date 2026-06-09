import type { Metadata } from 'next';
import './globals.css';
import { LoaderProvider } from '@/context/loader-context';
import Container from '@/components/ui/Container';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/features/Hero';
import Banner from '@/components/ui/Banner';

export const metadata: Metadata = {
  title: 'FIRST LIGHT COLLECTIVE',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <LoaderProvider>
          <Banner />
          <Hero />
          {children}
          <Container>
            <Footer />
          </Container>
        </LoaderProvider>
      </body>
    </html>
  );
}
