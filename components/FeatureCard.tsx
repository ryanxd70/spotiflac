interface Props {
  icon: string
  title: string
  description: string
  delay?: number
}

export default function FeatureCard({ icon, title, description, delay = 0 }: Props) {
  return (
    <div
      className="animate-fade-up p-6 rounded-2xl border border-green-500/10 bg-green-500/5 hover:bg-green-500/10 hover:border-green-500/25 transition-all duration-300 group"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200">{icon}</div>
      <h3 style={{fontFamily:'var(--font-display)'}} className="text-lg font-bold text-green-300 mb-2">{title}</h3>
      <p className="text-sm text-[var(--muted)] leading-relaxed">{description}</p>
    </div>
  )
}
