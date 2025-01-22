import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import { PointsProvider } from '@/components/points-provider';
import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Word Master',
  description: 'Learning platform for kids',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className}>
        <ThemeProvider>
          <PointsProvider>{children}</PointsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
