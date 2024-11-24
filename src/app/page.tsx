import { Template } from '@/components/common/Template';
import { Introduction } from '@/components/Introduction';
import { INTRODUCTION } from '@/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | 레오의 기술 블로그',
  description: INTRODUCTION.description,
};

export default function Index() {
  return (
    <Template.Root>
      <Template.Main>
        <Introduction />
      </Template.Main>
    </Template.Root>
  );
}
