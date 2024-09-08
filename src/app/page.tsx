import Container from '@/components/common/Container/Container';
import { Introduction } from '@/components/Introduction';
import { INTRODUCTION } from '@/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | 레오의 기술 블로그',
  description: INTRODUCTION.description,
};

export default function Index() {
  return (
    <main>
      <Container>
        <Introduction />
      </Container>
    </main>
  );
}
