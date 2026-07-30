import './globals.css';
import { Barlow_Condensed, Inter, JetBrains_Mono } from 'next/font/google';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import CustomCursor from '../components/CustomCursor.jsx';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.ryetek.com.au'),
  title: {
    default: 'Ryetek Engineering | Heavy Industrial & Plant Engineering Australia',
    template: '%s | Ryetek Engineering',
  },
  description: 'Turnkey aggregate batching plants, custom bitumen storage systems, thermal dryers, and CFD-analyzed WearGuard™ drum retrofits engineered for Australian industry.',
  keywords: [
    'Aggregate Batching Plants Australia',
    'Asphalt Mixing Plants',
    'WearGuard Drum Retrofit',
    'CFD Drum Flighting',
    'Bitumen Storage Tanks',
    'AS 4100 Structural Fabrication',
    'AS 1210 Pressure Vessels',
    'Industrial Plant Automation Australia',
  ],
  authors: [{ name: 'Ryetek Engineering Pty Ltd' }],
  openGraph: {
    title: 'Ryetek Engineering | Industrial & Plant Systems Australia',
    description: 'Turnkey aggregate batching plants, bitumen storage systems, and CFD drum flighting engineered to Australian standards.',
    url: 'https://www.ryetek.com.au',
    siteName: 'Ryetek Engineering',
    locale: 'en_AU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-white text-ryetek-text font-body selection:bg-ryetek-cyan selection:text-white min-h-screen flex flex-col relative antialiased">
        <div className="grain-overlay" />
        <CustomCursor />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
