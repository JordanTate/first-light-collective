import type { Metadata } from 'next';
import './globals.css';
import { LoaderProvider } from '@/context/loader-context';

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
        <LoaderProvider>{children}</LoaderProvider>
      </body>
    </html>
  );
}
