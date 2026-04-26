import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://spotiflac.app'),
  title: {
    default: 'SpotiFLAC Mobile APK — Free Lossless Music Downloader for Android & iOS',
    template: '%s | SpotiFLAC Mobile',
  },
  description: 'Download SpotiFLAC Mobile APK — the free lossless music downloader that saves tracks in FLAC, MP3, and AAC. Works on Android 7.0+ and iOS 14+. No account required.',
  keywords: ['SpotiFLAC Mobile APK', 'lossless music downloader', 'FLAC downloader app', 'SpotiFLAC download', 'music downloader Android', 'free music downloader'],
  authors: [{ name: 'SpotiFLAC', url: 'https://spotiflac.app' }],
  creator: 'SpotiFLAC',
  publisher: 'SpotiFLAC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://spotiflac.app',
    siteName: 'SpotiFLAC Mobile',
    title: 'SpotiFLAC Mobile APK — Free Lossless Music Downloader',
    description: 'Free lossless music downloader. Save music in FLAC quality on Android & iOS. No account needed.',
    images: [{ url: 'https://spotiflac.app/og-image.png', width: 1200, height: 630, alt: 'SpotiFLAC Mobile APK' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpotiFLAC Mobile APK — Free Lossless Music Downloader',
    description: 'Free lossless music downloader for Android & iOS. FLAC, MP3, AAC. No account needed.',
    images: ['https://spotiflac.app/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  verification: {
    // google: 'your-google-verification-code', // Add when verified
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="gradient-mesh min-h-screen">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
