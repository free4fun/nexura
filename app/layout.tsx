import './globals.css';
import type { Metadata } from 'next';
import { Cinzel, Manrope, JetBrains_Mono } from 'next/font/google';
import { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AuthProvider } from '@/context/AuthContext';

const cinzel = Cinzel({ 
  subsets: ['latin'], 
  variable: '--font-cinzel',
  display: 'swap',
});

const manrope = Manrope({ 
  subsets: ['latin'], 
  variable: '--font-manrope',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'NEXURA | Private Office',
  description: 'Soluciones de estructuración para activos complejos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${cinzel.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-nexura-black text-nexura-white font-sans selection:bg-nexura-gold selection:text-nexura-black">
        <AuthProvider>
          <Suspense fallback={null}>
            <Header />
          </Suspense>
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}