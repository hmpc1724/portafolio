import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import LiquidBackground from '@/components/LiquidBackground';
import Footer from '@/components/Footer';
import WhatsAppFloatingWidget from '@/components/WhatsAppFloatingWidget';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Hector Palomares — Diseñador & Desarrollador Full Stack | Liquid Glass UI',
  description:
    'Portafolio de Hector Miguel Palomares Cota, desarrollador full stack senior especializado en interfaces Liquid Glass con Next.js, React y TypeScript. 10 proyectos demo de alta calidad.',
  keywords: [
    'portafolio web',
    'diseñador web',
    'desarrollador full stack',
    'Next.js',
    'React',
    'TypeScript',
    'glassmorphism',
    'liquid glass UI',
    'freelance',
  ],
  openGraph: {
    title: 'Hector Palomares — Liquid Glass Portfolio',
    description: 'Experiencias web de cristal líquido, alto rendimiento y código limpio.',
    type: 'website',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ThemeProvider>
          <LiquidBackground />
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <WhatsAppFloatingWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
