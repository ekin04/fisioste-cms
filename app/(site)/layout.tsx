import type { ReactNode } from 'react';
import { Header } from '@components/layout/Header/Header';
import { Footer } from '@components/layout/footer/Footer'
export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}