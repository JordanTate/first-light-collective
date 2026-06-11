'use client';

import Container from '@/components/ui/Container';
import { useLoader } from '@/context/loader-context';
import { useEffect } from 'react';

export default function Page() {
  const { hideLoader } = useLoader();
  useEffect(() => {
    hideLoader();
  }, []);

  return (
    <main className='py-16'>
      <Container>
        <p className='text-center uppercase text-3xl px-6 py-2 bg-black mb-6'>
          My name is Petr Vybiral and I am a multimedia designer based in
          Manchester, England. <br /> First Light Collective is the home of my
          work.
        </p>
        <p className='text-center uppercase text-3xl px-6 py-2 bg-black mb-6'>
          With over a decade of experience across audiovisual production,
          graphic design, photography, typography, and creative direction, I
          craft stories, messages, and visual identities with precision and
          attention to nuance.
        </p>
        <p className='text-center uppercase text-3xl px-6 py-2 bg-black mb-6'>
          I prioritise understanding each project&apos;s needs and translating
          them into considered creative outcomes. The word
          &quot;Collective&quot; reflects my network of trusted collaborators,
          brought in on a project-by-project basis where required.
        </p>
        <p className='text-center uppercase text-3xl px-6 py-2 bg-black mb-6'>
          The work shown here is credited accordingly.
        </p>
      </Container>
    </main>
  );
}
