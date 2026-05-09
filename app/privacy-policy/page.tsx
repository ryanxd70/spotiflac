import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — SpotiFLAC Mobile (spotiflac.app)',
  description: 'Privacy Policy for spotiflac.app. Covers Google Analytics usage, advertising, cookies, contact form data, your rights, and how we handle visitor information.',
  alternates: { canonical: 'https://spotiflac.app/privacy-policy' },
  openGraph: {
    url: 'https://spotiflac.app/privacy-policy',
    title: 'Privacy Policy — SpotiFLAC Mobile',
  },
}

const sections = [
  {
    id: 'overview',
    title: '1. Overview',
    content: `This Privacy Policy describes how spotiflac.app (the "Website") collects, uses, and handles information when you visit our pages. We operate this website to provide information about SpotiFLAC Mobile, an open-source lossless music downloader, and to allow visitors to download the application.

Like most websites, spotiflac.app uses analytics tools and displays advertisements to understand visitor behavior and sustain the project financially. This policy explains exactly what data is collected, by whom, and how it is used — so you can make an informed choice about using this website.

This policy applies to the spotiflac.app website only. The SpotiFLAC Mobile application itself does not collect any personal data or send any telemetry — it operates entirely on your device.`,
  },
  {
    id: 'data-collected',
    title: '2. What Data We Collect and Why',
    content: `We collect data through two main channels: Google Analytics and advertising networks. Here is what each collects and why:

Google Analytics: When you visit spotiflac.app, Google Analytics records your approximate geographic location (country/region level), the browser and device type you are using, which pages you visited and in what order, how long you spent on each page, how you arrived at the site (search engine, direct, referral), and whether you are a new or returning visitor. This data helps us understand which content is useful, which pages need improvement, and how visitors generally navigate the site. Google Analytics uses cookies and similar tracking technologies to collect this data. The data is processed by Google LLC and subject to Google's Privacy Policy at policies.google.com/privacy.

Advertising: spotiflac.app displays advertisements to generate revenue that supports the project's ongoing development and hosting costs. Our advertising partners may use cookies, device identifiers, and similar tracking technologies to serve ads that are relevant to your interests based on your browsing behavior across websites. The specific data collected by advertising networks may include your IP address, browser fingerprint, pages visited, and interaction with ads. We do not control what data advertising partners collect — this is governed by their own privacy policies.

Contact Form: If you voluntarily submit our contact form, we collect your name, email address, and the content of your message. This information is used solely to respond to your enquiry and is not added to any marketing list.`,
  },
  {
    id: 'cookies',
    title: '3. Cookies and Tracking Technologies',
    content: `spotiflac.app uses cookies and similar technologies. Here is a breakdown by category:

Strictly Necessary Cookies: These are essential for the website to function and cannot be switched off. They are set in response to actions you take, such as filling in forms. They do not store any personally identifiable information.

Analytics Cookies (Google Analytics): These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. All information collected by these cookies is aggregated and therefore anonymous. If you do not allow these cookies, we will not know when you have visited our site. Google Analytics sets cookies including _ga (expires after 2 years) and _gid (expires after 24 hours) among others.

Advertising Cookies: These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. They do not directly store personal information but are based on uniquely identifying your browser and internet device.

How to Control Cookies: You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this site may become inaccessible or not function properly. You can also opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on available at tools.google.com/dlpage/gaoptout. For advertising cookies, you can manage your preferences through the Digital Advertising Alliance at optout.aboutads.info or the Network Advertising Initiative at optout.networkadvertising.org.`,
  },
  {
    id: 'google-analytics',
    title: '4. Google Analytics in Detail',
    content: `spotiflac.app uses Google Analytics 4 (GA4), a web analytics service provided by Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.

Google Analytics uses cookies to help analyze how users interact with the website. The information generated by the cookie about your use of the website (including your IP address) will be transmitted to and stored by Google on servers in the United States. We have enabled IP anonymization, which means Google will truncate your IP address before storing it within EU member states or other parties to the Agreement on the European Economic Area.

Google will use this information for the purpose of evaluating your use of the website, compiling reports on website activity for us, and providing other services relating to website activity and internet usage. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google's behalf.

You can prevent Google's collection and use of data by downloading and installing the browser plugin available at tools.google.com/dlpage/gaoptout. For more information about how Google uses data when you use our site, visit google.com/policies/privacy/partners.

The legal basis for processing under GDPR is our legitimate interest in understanding how our website is used and improving it accordingly (Article 6(1)(f) GDPR). Where required by law, we obtain your consent before activating analytics cookies.`,
  },
  {
    id: 'advertising',
    title: '5. Advertising and Third-Party Ad Networks',
    content: `spotiflac.app displays advertisements as a means of generating revenue to support the free distribution of the SpotiFLAC Mobile application. Ads are served by third-party advertising networks. These networks use cookies and similar technologies to serve ads based on your prior visits to this website and other websites.

We do not have direct access to the personal data collected by our advertising partners. Each advertising partner has their own Privacy Policy governing their use of data. We encourage you to review the privacy policies of any advertising provider whose ads appear on our site.

You have the following options to control interest-based advertising:
— Visit optout.aboutads.info to opt out of interest-based advertising from participating companies.
— Visit optout.networkadvertising.org for similar opt-out options.
— Use your browser's private/incognito mode to limit cookie-based tracking.
— Install a browser extension to block ads and trackers.

Please note that opting out of interest-based advertising does not mean you will stop seeing ads — it means the ads you see may be less relevant to your interests.`,
  },
  {
    id: 'contact-form',
    title: '6. Contact Form Submissions',
    content: `If you use the Contact form on this website, we collect your name, email address, and the message you write. This information is:

Used solely to respond to your specific enquiry. We do not use contact form submissions for marketing, add them to mailing lists, or share them with third parties for commercial purposes.

Retained only for as long as necessary to handle your message and any follow-up, after which it is deleted.

Never sold or rented to any party.

Submitting the contact form is entirely voluntary. You are not required to use it.`,
  },
  {
    id: 'downloads',
    title: '7. File Downloads',
    content: `Application files (APK and IPA) linked from spotiflac.app are hosted on GitHub's servers (GitHub, Inc., a subsidiary of Microsoft Corporation). When you click a download link, your browser connects directly to GitHub's infrastructure to retrieve the file.

We do not host these files on our own servers and do not log individual download events or the IP addresses of users who download files via our download links. GitHub may log your IP address and request details in accordance with GitHub's own Privacy Policy, which you can review at docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement.`,
  },
  {
    id: 'data-sharing',
    title: '8. Data Sharing and Third Parties',
    content: `We share data with the following categories of third parties:

Analytics Providers: Google LLC processes analytics data on our behalf as described in Section 4. Google is a data processor acting on our instructions for analytics purposes.

Advertising Partners: Third-party advertising networks may collect data independently through cookies placed on our site. These parties act as independent data controllers for the data they collect.

Legal Requirements: We may disclose information if required to do so by law, court order, or governmental authority, or if we believe in good faith that such disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or comply with a legal obligation.

We do not sell your personal data. We do not share your data with third parties for their own marketing purposes beyond the advertising network relationships described above.`,
  },
  {
    id: 'your-rights',
    title: '9. Your Rights',
    content: `Depending on your location, you may have the following rights regarding your personal data:

Right of Access: You may request a copy of the personal data we hold about you.

Right to Rectification: You may request that we correct inaccurate personal data.

Right to Erasure: You may request that we delete personal data we hold about you, subject to certain legal obligations.

Right to Object: You may object to the processing of your personal data based on legitimate interests.

Right to Restrict Processing: You may request that we restrict processing of your personal data in certain circumstances.

Right to Data Portability: You may request a copy of your data in a structured, machine-readable format.

Opt-Out of Sale (CCPA): California residents may opt out of the sale of their personal information. We do not sell personal information, but advertising partnerships may constitute "sharing" under California law. You can opt out via the controls described in Section 5.

To exercise any of these rights, please contact us via the Contact page. We will respond within 30 days. Note that analytics and advertising data is largely processed by Google and our ad partners — exercising rights regarding that data should be directed to those parties.

If you are in the EEA and believe your rights have been violated, you have the right to lodge a complaint with your national data protection supervisory authority.`,
  },
  {
    id: 'data-retention',
    title: '10. Data Retention',
    content: `Contact form submissions are retained only as long as necessary to respond to and resolve your enquiry, typically no longer than 12 months.

Analytics data collected by Google Analytics is retained for 14 months by default, after which it is automatically deleted from Google's servers. You can adjust your analytics data retention preferences via the Google Analytics opt-out tools described above.

Advertising cookies set by third-party networks have their own retention periods governed by those networks' policies.`,
  },
  {
    id: 'security',
    title: '11. Security',
    content: `spotiflac.app is served exclusively over HTTPS. All connections between your browser and our web server are encrypted in transit using TLS.

We implement reasonable technical and organizational measures to protect the limited data we hold. However, no internet transmission or storage system is 100% secure. If you submit information via our Contact form, you do so at your own risk.

We cannot guarantee the security of data transmitted to or processed by third-party services such as Google Analytics or advertising networks — those are governed by their respective security practices.`,
  },
  {
    id: 'children',
    title: '12. Children\'s Privacy',
    content: `spotiflac.app is not directed at children under the age of 13 (or the applicable age of digital consent in your jurisdiction). We do not knowingly collect personal information from minors. If you believe a child has submitted information through our Contact form, please notify us via the Contact page and we will promptly delete it.

The presence of advertising on this site means that advertising networks may also collect data from visitors. If you are a parent or guardian concerned about advertising tracking of your child, we recommend using parental controls or browser extensions to block ad trackers.`,
  },
  {
    id: 'changes',
    title: '13. Changes to This Policy',
    content: `We may update this Privacy Policy to reflect changes in our practices, the services we use, or legal requirements. When we update it, we will revise the "Last updated" date at the top of this page. Material changes — particularly any new categories of data collection or new third-party sharing arrangements — will be described clearly.

Continued use of spotiflac.app after a policy update constitutes your acceptance of the revised policy. If you disagree with any changes, your recourse is to stop using the website.`,
  },
  {
    id: 'contact',
    title: '14. Contact',
    content: `If you have questions about this Privacy Policy, want to exercise your data rights, or have concerns about how spotiflac.app handles your information, please reach out via our Contact page. We will do our best to respond promptly and resolve any concerns.`,
  },
]

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <p className="section-label">Legal</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4" style={{textShadow:'0 0 40px rgba(34,197,94,0.15)'}}>
          Privacy Policy
        </h1>
        <div className="flex flex-wrap gap-4 items-center mb-8">
          <span className="text-sm text-[var(--muted)]">Last updated: <strong className="text-[var(--text)]">May 2026</strong></span>
          <span className="text-sm text-[var(--muted)]">Applies to: <strong className="text-[var(--text)]">spotiflac.app</strong></span>
        </div>

        {/* Honest summary callout */}
        <div className="p-5 rounded-2xl border border-green-500/20 bg-green-500/5 mb-4">
          <p className="text-sm text-green-400/90 leading-relaxed">
            <strong className="text-green-400">Summary:</strong> spotiflac.app uses <strong className="text-green-400">Google Analytics</strong> to understand how visitors use the site, and displays <strong className="text-green-400">advertisements</strong> to help fund free distribution of the app. Both involve third-party cookies. The SpotiFLAC Mobile <em>app itself</em> collects no data whatsoever. Full details are below.
          </p>
        </div>

        <div className="p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 mb-12">
          <p className="text-sm text-yellow-400/80 leading-relaxed">
            By continuing to use spotiflac.app, you acknowledge that Google Analytics and advertising cookies may be set on your device. You can opt out using the controls described in Sections 3 and 5.
          </p>
        </div>

        {/* Table of contents */}
        <nav className="glass rounded-2xl p-6 mb-12" aria-label="Table of contents">
          <h2 className="text-sm font-semibold text-[var(--muted)] uppercase tracking-wider mb-4">Contents</h2>
          <ol className="space-y-2">
            {sections.map(s => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-sm text-[var(--muted)] hover:text-green-400 transition-colors">
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map(s => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="text-xl font-bold text-[var(--text)] mb-4" style={{fontFamily:'var(--font-display)'}}>{s.title}</h2>
              <div className="space-y-3">
                {s.content.split('\n\n').map((para, i) => (
                  <p key={i} className="text-[var(--muted)] leading-relaxed text-sm">{para}</p>
                ))}
              </div>
              <div className="mt-6 border-b border-green-500/8" />
            </section>
          ))}
        </div>

        {/* Footer nav */}
        <div className="mt-14 flex flex-wrap gap-4">
          <Link href="/disclaimer" className="inline-flex items-center gap-1.5 text-sm text-green-400 hover:text-green-300 transition-colors">
            Read our Disclaimer →
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-green-400 transition-colors">
            Contact Us →
          </Link>
        </div>
      </div>
    </div>
  )
}
