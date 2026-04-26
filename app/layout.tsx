import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://spotiflac.app'),
  title: {
    // Shown on pages that don't set their own title
    default: 'SpotiFLAC Mobile — Lossless Music Downloader (24-bit FLAC)',
    // Inner pages get: "Features | SpotiFLAC Mobile" etc.
    template: '%s | SpotiFLAC Mobile',
  },
  description: 'Download SpotiFLAC Mobile APK v4.3.1 for high-fidelity 24-bit FLAC audio. The ultimate lossless music downloader and player for Android and iOS. Free, no account needed.',
  keywords: [
    'SpotiFLAC Mobile APK',
    'lossless music downloader',
    'FLAC downloader app',
    '24-bit audio downloader',
    'SpotiFLAC download',
    'music downloader Android',
    'free music downloader',
    'lossless audio app',
    'FLAC music player',
  ],
  authors: [{ name: 'SpotiFLAC', url: 'https://spotiflac.app' }],
  creator: 'SpotiFLAC',
  publisher: 'SpotiFLAC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://spotiflac.app',
    siteName: 'SpotiFLAC Mobile',
    title: 'SpotiFLAC Mobile — Lossless Music Downloader (24-bit FLAC)',
    description: 'Free 24-bit lossless music downloader for Android & iOS. FLAC, MP3, AAC. No account needed.',
    images: [{ url: 'https://spotiflac.app/og-image.png', width: 1200, height: 630, alt: 'SpotiFLAC Mobile APK — 24-bit Lossless Music Downloader' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpotiFLAC Mobile — Lossless Music Downloader (24-bit FLAC)',
    description: 'Free 24-bit lossless music downloader for Android & iOS. FLAC, MP3, AAC. No account needed.',
    images: ['https://spotiflac.app/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  // Uncomment and add your code once Google Search Console is verified:
  // verification: { google: 'YOUR_VERIFICATION_CODE' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts to reduce render-blocking latency */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preconnect to Google Analytics (add your GA4 script here when ready) */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className="gradient-mesh min-h-screen">
        {/* Skip to main content — accessibility + Core Web Vitals */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-green-500 focus:text-black focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
