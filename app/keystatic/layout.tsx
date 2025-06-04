import type { ReactNode } from 'react';
import KeystaticApp from "./keystatic";

export default function KeystaticLayout({ children }: { children: ReactNode }) {
  // Layout pulito senza Header/Footer per Keystatic
  return <KeystaticApp />;
}