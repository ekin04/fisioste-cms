// app/layout.tsx (layout ROOT - solo HTML base)
import type { ReactNode } from 'react';
import './globals.css';
import { Roboto } from 'next/font/google';
import { AOSInit } from '@components/shared/AOSInit';

const roboto = Roboto({
  subsets: ['latin'],
})


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <AOSInit />
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}