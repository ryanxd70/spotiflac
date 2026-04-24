import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — SpotiFLAC Mobile',
  description: 'SpotiFLAC Mobile privacy policy. We collect no personal data. No tracking, no analytics, no third-party data sharing.',
}

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="section-label">Legal</p>
        <h1 className="text-4xl font-bold text-[var(--text)] mb-4 glow-text">Privacy Policy</h1>
        <p className="text-[var(--muted)] text-sm mb-10">Last updated: December 2024</p>
        <div className="space-y-8 text-[var(--muted)] leading-relaxed">
          {[
            { h: 'No Data Collection', p: 'SpotiFLAC Mobile does not collect, store, or transmit any personal data. The app operates entirely on your device. No account registration is required, and no usage data is recorded.' },
            { h: 'No Analytics or Tracking', p: 'We do not use any analytics services, crash reporting tools, or third-party SDKs that collect data. There is no telemetry of any kind embedded in the application.' },
            { h: 'Local Storage Only', p: 'All downloaded files are saved directly to your device storage. SpotiFLAC does not upload, sync, or access any files beyond what is necessary for the download function to operate.' },
            { h: 'Internet Access', p: 'The app uses internet access solely to fetch audio files from URLs you provide. No data about your usage, queries, or downloads is sent to our servers.' },
            { h: 'Children\'s Privacy', p: 'SpotiFLAC Mobile is not directed at children under 13. We do not knowingly collect any information from minors.' },
            { h: 'Changes to This Policy', p: 'If this policy changes, we will update the date at the top of this page. Continued use of the app after any changes constitutes acceptance of the updated policy.' },
            { h: 'Contact', p: 'If you have questions about this policy, reach out via our Contact page.' },
          ].map(s => (
            <div key={s.h}>
              <h2 className="text-lg font-bold text-[var(--text)] mb-3" style={{fontFamily:'var(--font-display)'}}>{s.h}</h2>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
