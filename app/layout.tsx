import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://spotiflac.app'),
  title: {
    default: 'SpotiFLAC Mobile APK — Lossless Music Downloader for Android & iOS',
    template: '%s | SpotiFLAC Mobile',
  },
  description: 'Download SpotiFLAC Mobile APK — the free lossless music downloader that saves tracks in FLAC, MP3, and AAC. Works on Android 7.0+ and iOS 14+.',
  keywords: ['SpotiFLAC Mobile APK', 'lossless music downloader', 'FLAC downloader app'],
  openGraph: {
    type: 'website',
    siteName: 'SpotiFLAC Mobile',
    title: 'SpotiFLAC Mobile APK — Lossless Music Downloader',
    description: 'Free lossless music downloader. Save music in FLAC quality on Android & iOS.',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="gradient-mesh min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
