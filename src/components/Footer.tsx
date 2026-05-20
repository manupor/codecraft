export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-black/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img src="/codecraftt-logo.png" alt="CodeCraftt — Software Development Studio" className="h-9 w-auto mb-4" />
            <p className="text-sm text-zinc-500 leading-relaxed mb-4">
              Custom software development studio in Costa Rica. Building SaaS platforms, AI solutions, and high-performance web applications for startups and businesses worldwide.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: "https://github.com/codecraftt", label: "GitHub" },
                { href: "https://linkedin.com/company/codecraftt", label: "LinkedIn" },
                { href: "https://instagram.com/codecraftt", label: "Instagram" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-500 hover:text-white transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Services</p>
            <ul className="space-y-2.5">
              {[
                "Landing Page Development",
                "Website Development",
                "SaaS Development",
                "AI Integrations",
                "Mobile App Development",
                "UX/UI Design",
                "Cloud Infrastructure",
                "API Integrations",
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-xs text-zinc-500 hover:text-[#8B5CF6] transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Company</p>
            <ul className="space-y-2.5">
              {[
                { label: "About Us",        href: "#about" },
                { label: "Our Process",     href: "#process" },
                { label: "Industries",      href: "#" },
                { label: "FAQ",             href: "#faq" },
                { label: "Contact",         href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-xs text-zinc-500 hover:text-[#8B5CF6] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@codecraftt.com" className="text-xs text-zinc-500 hover:text-white transition-colors break-all">
                  hello@codecraftt.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/50683442522" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-500 hover:text-white transition-colors">
                  +506 8344 2522
                </a>
              </li>
              <li className="text-xs text-zinc-600 leading-relaxed">
                San José, Curridabat<br />Costa Rica
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white text-xs font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all"
              >
                Start a Project →
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-600">
            &copy; {year} CodeCraftt. All rights reserved. Custom Software Development &amp; AI Solutions — Costa Rica.
          </p>
          <p className="text-xs text-zinc-700">
            Built by{" "}
            <span className="text-zinc-500">Manuel Portuguez</span>
            {" · "}Sr. Full Stack Developer &amp; Visual Designer
          </p>
        </div>

      </div>
    </footer>
  );
}
