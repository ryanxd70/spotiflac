import Link from 'next/link'

interface Props {
  platform?: 'android' | 'ios' | 'both'
  size?: 'sm' | 'lg'
}

export default function DownloadButton({ platform = 'android', size = 'lg' }: Props) {
  const base = size === 'lg' ? 'px-8 py-4 text-base' : 'px-5 py-2.5 text-sm'
  return (
    <div className="flex flex-wrap gap-3">
      {(platform === 'android' || platform === 'both') && (
        <Link href="/download" className={`inline-flex items-center gap-2 ${base} rounded-full font-semibold bg-green-500 text-black hover:bg-green-400 transition-all duration-200 shadow-lg hover:shadow-green-500/30 animate-pulse-glow`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.341A5.532 5.532 0 0 0 20 10.5C20 7.462 17.538 5 14.5 5a5.52 5.52 0 0 0-4.999 3.179L17.523 15.341zM6.477 8.659A5.532 5.532 0 0 0 4 13.5C4 16.538 6.462 19 9.5 19a5.52 5.52 0 0 0 4.999-3.179L6.477 8.659zM2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0z"/></svg>
          Download for Android
        </Link>
      )}
      {(platform === 'ios' || platform === 'both') && (
        <Link href="/download" className={`inline-flex items-center gap-2 ${base} rounded-full font-semibold border border-green-500/40 text-green-400 hover:border-green-500 hover:bg-green-500/10 transition-all duration-200`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
          Download for iOS
        </Link>
      )}
    </div>
  )
}
