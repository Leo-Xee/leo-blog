import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'next-themes';
import { darkTheme, lightTheme } from '@/styles/themes.css';
import localFont from 'next/font/local';
import { AppBarContainer } from '@/components/common/AppBarContainer';
import { Footer } from '@/components/common/Footer';

import '@/styles/reset.css';
import '@/styles/global.css';
import { INTRODUCTION } from '@/constants';
import { WelcomeLogger } from '@/components/WelcomeLogger';
import { openGraph, twitter } from './shared-metadata';

const pretendard = localFont({
  src: '../../public/assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

const firaCode = localFont({
  src: [
    { path: '../../public/assets/fonts/FiraCode-VF.woff2' },
    { path: '../../public/assets/fonts/FiraCode-Retina.ttf' },
  ],
  variable: '--font-firacode',
  display: 'swap',
  weight: '45 920',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://leo-xee.dev'),
  title: {
    template: '%s | 레오의 기술 블로그',
    default: '레오의 기술 블로그',
  },
  authors: { name: '레오', url: 'https://leo-xee.dev' },
  keywords: [
    'frontend',
    'web',
    'development',
    'blog',
    'problem-solving',
    'books',
  ],
  description: INTRODUCTION.description,
  referrer: 'origin',
  robots: 'noindex, nofollow',
  openGraph: {
    ...openGraph,
    title: {
      template: '%s | 레오의 기술 블로그',
      default: '레오의 기술 블로그',
    },
    description: INTRODUCTION.description,
  },
  twitter: {
    ...twitter,
    title: {
      template: '%s | 레오의 기술 블로그',
      default: '레오의 기술 블로그',
    },
    description: INTRODUCTION.description,
  },
};

export default function IndexLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${pretendard.className} ${firaCode.className}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          enableSystem
          value={{ light: lightTheme, dark: darkTheme }}
        >
          <AppBarContainer />
          <WelcomeLogger />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
