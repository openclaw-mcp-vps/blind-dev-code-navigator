export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          Accessibility Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Audio-first code navigation for{" "}
          <span className="text-[#58a6ff]">visually impaired developers</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          A VS Code extension with spatial audio feedback that turns code structure into a 3D soundscape — indentation levels, function boundaries, and code blocks you can hear.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:ring-offset-2 focus:ring-offset-[#0d1117]"
          aria-label="Get started with Blind Dev Code Navigator"
        >
          Get Started — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Works with VS Code 1.75+.</p>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20" aria-labelledby="pricing-heading">
        <h2 id="pricing-heading" className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm" aria-label="Plan features">
            {[
              "VS Code extension + web dashboard",
              "Spatial 3D audio code navigation",
              "AST-based audio cues for all major languages",
              "Screen reader fully compatible",
              "Priority support & updates"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5" aria-hidden="true">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold hover:bg-[#79b8ff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:ring-offset-2 focus:ring-offset-[#161b22]"
            aria-label="Subscribe to Pro plan"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <dl className="space-y-6">
          <div className="border border-[#30363d] rounded-lg p-6">
            <dt className="font-semibold text-white mb-2">How does the spatial audio work?</dt>
            <dd className="text-[#8b949e] text-sm">The extension processes your code's AST via a local Node.js service and uses the Web Audio API to generate 3D audio cues. Deeper indentation shifts sound to the right; function boundaries trigger distinct tones — giving you a spatial map of your code.</dd>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6">
            <dt className="font-semibold text-white mb-2">Is it compatible with existing screen readers?</dt>
            <dd className="text-[#8b949e] text-sm">Yes. Blind Dev Code Navigator is designed to complement NVDA, JAWS, and VoiceOver — not replace them. Audio cues are layered on top of your existing screen reader workflow without interference.</dd>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6">
            <dt className="font-semibold text-white mb-2">Which programming languages are supported?</dt>
            <dd className="text-[#8b949e] text-sm">JavaScript, TypeScript, Python, Rust, Go, and Java are supported at launch. Additional languages are added based on community requests — submit yours via the dashboard.</dd>
          </div>
        </dl>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#8b949e]">
        <p>© {new Date().getFullYear()} Blind Dev Code Navigator. Built for accessibility.</p>
      </footer>
    </main>
  );
}
