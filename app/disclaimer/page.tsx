import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Disclaimer — SpotiFLAC Mobile (spotiflac.app)',
  description: 'Legal disclaimer for spotiflac.app. Covers non-affiliation with Spotify, personal use terms, copyright responsibility, no-warranty notice, and jurisdictional scope.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://spotiflac.app/disclaimer' },
}

const sections = [
  {
    id: 'non-affiliation',
    title: '1. Non-Affiliation and No Endorsement',
    content: `SpotiFLAC Mobile and spotiflac.app are independent, community-developed projects. We are not affiliated with, authorized by, sponsored by, endorsed by, or connected in any official capacity to any of the following companies or their products:

— Spotify AB or the Spotify music streaming service
— Apple Inc. or Apple Music
— Amazon.com, Inc. or Amazon Music
— YouTube LLC or YouTube Music
— Deezer SA or Tidal Music AS
— Any record label, music distributor, or rights management organization

The name "SpotiFLAC" is an informal reference to FLAC (Free Lossless Audio Codec) audio format and is not intended to imply any relationship with Spotify AB or any other brand. All third-party trademarks, service marks, and company names mentioned on this website are the property of their respective owners, and their use here is for descriptive and informational purposes only.

Any resemblance between the functionality of SpotiFLAC Mobile and features offered by commercial streaming platforms is coincidental and reflects the general nature of audio software rather than any licensed relationship.`,
  },
  {
    id: 'personal-use',
    title: '2. Personal Use Only',
    content: `SpotiFLAC Mobile is developed and distributed for personal, non-commercial, private use only. The application is intended for individuals who wish to create local backup copies of audio content they are lawfully entitled to access.

Using SpotiFLAC Mobile to:
— Download content for redistribution, resale, or public performance is strictly outside the intended use case of this software.
— Download music on behalf of third parties as part of any commercial arrangement is outside the intended use case.
— Circumvent active digital rights management (DRM) systems is not supported by this software and is not an intended use.
— Systematically archive large volumes of copyrighted content beyond personal use may violate applicable laws.

The developers of SpotiFLAC Mobile do not condone, encourage, or facilitate any use of this software that infringes on the intellectual property rights of copyright holders.`,
  },
  {
    id: 'copyright',
    title: '3. Copyright Responsibility and User Obligation',
    content: `Copyright law varies significantly across jurisdictions. What constitutes lawful personal copying, format-shifting, or backup copying differs between countries. In some jurisdictions, creating a personal copy of content you have licensed access to is explicitly permitted; in others, it may be restricted or prohibited regardless of personal intent.

By downloading and using SpotiFLAC Mobile, you assume full and sole responsibility for ensuring that your specific use of the software complies with all applicable laws in your jurisdiction, including but not limited to:

— The copyright laws of your country of residence
— The terms of service of any streaming platform whose content you download
— Any applicable digital rights management (DRM) regulations
— Export control laws where relevant

The developers, contributors, and distributors of SpotiFLAC Mobile make no representations about the legality of any particular use of this software in any specific jurisdiction. If you are uncertain about the legality of a specific use, you should seek independent legal advice before proceeding.

Ignorance of applicable law does not constitute a defense, and we cannot provide legal advice. This disclaimer is not a substitute for qualified legal counsel.`,
  },
  {
    id: 'no-warranty',
    title: '4. No Warranty',
    content: `SpotiFLAC Mobile is provided "as is," without warranty of any kind, express or implied, including but not limited to:

— Warranties of merchantability or fitness for a particular purpose
— Warranties that the software will operate without interruption or error
— Warranties regarding the accuracy, completeness, or reliability of any output produced by the software
— Warranties that the software is free from bugs, vulnerabilities, or security defects

The software is distributed under the MIT License. The full text of the MIT License, including its warranty disclaimer and limitation of liability provisions, is available in the LICENSE file in the source code repository on GitHub.

We make reasonable efforts to maintain and improve the software, but we cannot guarantee that it will work correctly on all devices, with all operating system versions, or in all network environments. Download quality and availability depend entirely on third-party sources outside our control.`,
  },
  {
    id: 'limitation-liability',
    title: '5. Limitation of Liability',
    content: `To the maximum extent permitted by applicable law, the developers, contributors, maintainers, and distributors of SpotiFLAC Mobile and spotiflac.app shall not be liable for:

— Any direct, indirect, incidental, special, consequential, or punitive damages arising from your use or inability to use the software or website
— Any loss of data, files, or content that occurs in connection with use of the software
— Any legal consequences, fines, or penalties arising from your use of the software in violation of applicable law
— Any damage to your device, operating system, or other software arising from installing or running SpotiFLAC Mobile
— Any claim by a third party arising from your use of the software

This limitation applies regardless of the legal theory under which a claim is brought — whether in contract, tort (including negligence), strict liability, or otherwise — and even if we have been advised of the possibility of such damages.

Some jurisdictions do not permit the exclusion or limitation of incidental or consequential damages. In such jurisdictions, our liability is limited to the greatest extent permitted by law.`,
  },
  {
    id: 'website-content',
    title: '6. Accuracy of Website Content',
    content: `spotiflac.app provides information about SpotiFLAC Mobile in good faith. We make reasonable efforts to keep information about the application's features, system requirements, version numbers, and compatibility accurate and up to date.

However, software changes over time, and there may be delays between a software update and corresponding updates to this website. We do not warrant that all information on this website is current, complete, or error-free at any given time.

Any technical specifications, compatibility claims, or feature descriptions on this website are provided for informational purposes and should not be relied upon as a guarantee of software behavior in any specific environment.

We reserve the right to correct, update, or remove content from this website at any time without notice.`,
  },
  {
    id: 'external-links',
    title: '7. Third-Party Links and Resources',
    content: `spotiflac.app contains links to third-party websites, including the GitHub repository where SpotiFLAC Mobile source code and release files are hosted. These links are provided for convenience and informational purposes.

We have no control over the content, availability, privacy practices, or terms of service of third-party websites. The inclusion of a link to an external site does not constitute our endorsement of that site, its content, or its operators.

We are not responsible for and assume no liability for:
— The accuracy or legality of content on third-party websites
— Any harm or damage resulting from your use of a third-party website you accessed via a link on spotiflac.app
— Changes to third-party websites after links were published on our site
— Downtime, removal, or modification of third-party resources we reference

All external links on spotiflac.app carry rel="nofollow noopener noreferrer" attributes as a technical and editorial measure.`,
  },
  {
    id: 'dmca',
    title: '8. DMCA and Copyright Notices',
    content: `spotiflac.app does not host, cache, stream, or distribute any copyrighted music, audio recordings, or related content. The website contains only text, images, and links to software application files. We do not facilitate the unauthorized reproduction of any copyrighted work through this website itself.

SpotiFLAC Mobile, as a piece of software, does not host content. It is a tool that processes URLs provided by the user. The software itself contains no copyrighted audio content.

If you believe that any content on spotiflac.app or the GitHub repository infringes your copyright, please contact us via the Contact page with a description of the alleged infringement, identification of the work claimed to be infringed, and your contact information. We will review legitimate notices and respond in good faith.

This notice does not constitute an admission that any content on this website infringes any copyright.`,
  },
  {
    id: 'jurisdiction',
    title: '9. Jurisdiction and Governing Law',
    content: `This disclaimer and any disputes arising from the use of spotiflac.app or SpotiFLAC Mobile shall be interpreted in accordance with generally applicable principles of international law where no specific jurisdiction applies.

We make no representation that spotiflac.app or SpotiFLAC Mobile is appropriate or available for use in all locations. Users who access this website or use the software from locations where its content or use may be restricted or illegal do so at their own risk and are responsible for compliance with local laws.

If any provision of this disclaimer is found to be unenforceable under applicable law, the remaining provisions shall continue in full force and effect.`,
  },
  {
    id: 'changes',
    title: '10. Updates to This Disclaimer',
    content: `We may revise this disclaimer periodically to reflect changes in the software, applicable law, or our operational practices. When we update it, we will revise the "Last updated" date at the top of this page. Significant changes will be noted clearly.

Your continued use of spotiflac.app or SpotiFLAC Mobile after any update to this disclaimer constitutes your acceptance of the revised terms. If you disagree with any part of this disclaimer, your recourse is to discontinue use of the website and software.`,
  },
]

export default function DisclaimerPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <p className="section-label">Legal</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4" style={{textShadow:'0 0 40px rgba(34,197,94,0.15)'}}>
          Disclaimer
        </h1>
        <div className="flex flex-wrap gap-4 items-center mb-8">
          <span className="text-sm text-[var(--muted)]">Last updated: <strong className="text-[var(--text)]">December 2024</strong></span>
          <span className="text-sm text-[var(--muted)]">Applies to: <strong className="text-[var(--text)]">spotiflac.app</strong></span>
        </div>

        {/* Warning callout */}
        <div className="p-5 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 mb-12">
          <p className="text-sm text-yellow-400/90 leading-relaxed">
            <strong className="text-yellow-400">Please read carefully.</strong> SpotiFLAC Mobile is independent software not affiliated with any streaming service. You are solely responsible for ensuring your use complies with copyright law in your jurisdiction. This page explains your obligations and our limitations in full.
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
                  <p key={i} className="text-[var(--muted)] leading-relaxed text-sm whitespace-pre-line">{para}</p>
                ))}
              </div>
              <div className="mt-6 border-b border-green-500/8" />
            </section>
          ))}
        </div>

        {/* Footer nav */}
        <div className="mt-14 flex flex-wrap gap-4">
          <Link href="/privacy-policy" className="inline-flex items-center gap-1.5 text-sm text-green-400 hover:text-green-300 transition-colors">
            Read our Privacy Policy →
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-green-400 transition-colors">
            Contact Us →
          </Link>
        </div>
      </div>
    </div>
  )
}
