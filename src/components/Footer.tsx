"use client";

import { Github, Linkedin, Instagram, Mail, ArrowRight } from "lucide-react";

const footerServices = [
  { label: "SaaS Platform Development",  href: "#services" },
  { label: "AI Systems & Integrations",   href: "#services" },
  { label: "Mobile App Development",      href: "#services" },
  { label: "Landing Pages & Websites",    href: "#services" },
  { label: "Custom Web Applications",     href: "#services" },
  { label: "Backend & API Development",   href: "#services" },
  { label: "UX/UI Design",               href: "#services" },
  { label: "Startup MVP Development",     href: "#services" },
];

const industries = [
  "SaaS & Software", "AI Startups", "E-commerce", "FinTech",
  "Healthcare Tech", "Real Estate", "EdTech", "Logistics",
];

const company = [
  { label: "About Us",       href: "#about" },
  { label: "Our Process",    href: "#process" },
  { label: "Services",       href: "#services" },
  { label: "Industries",     href: "#industries" },
  { label: "FAQ",            href: "#faq" },
  { label: "Contact",        href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#020204]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="text-xl font-bold tracking-tight text-white">
              Code<span className="text-[#8B5CF6]">craftt</span>
            </a>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed max-w-xs">
              AI-native software studio in Costa Rica. We build SaaS platforms, AI systems, and high-converting digital products for startups and businesses across the USA and Latin America.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {[
                { href: "https://github.com/codecraftt", Icon: Github },
                { href: "https://linkedin.com/company/codecraftt", Icon: Linkedin },
                { href: "https://instagram.com/codecraftt", Icon: Instagram },
              ].map(({ href, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/20 transition-all">
                  <Icon size={14} />
                </a>
              ))}
            </div>
            <a href="#contact" className="mt-5 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white text-xs font-semibold hover:shadow-lg hover:shadow-violet-500/20 transition-all">
              Book a Discovery Call <ArrowRight size={11} />
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400 mb-4">Services</h3>
            <ul className="space-y-2.5">
              {footerServices.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-xs text-zinc-400 hover:text-white transition-colors leading-snug block">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400 mb-4">Industries</h3>
            <ul className="space-y-2.5">
              {industries.map((ind) => (
                <li key={ind} className="text-xs text-zinc-400 leading-snug">{ind}</li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400 mb-4">Company</h3>
            <ul className="space-y-2.5 mb-7">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-xs text-zinc-400 hover:text-white transition-colors block">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400 mb-4">Contact</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:hello@codecraftt.com" className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors">
                  <Mail size={11} className="shrink-0" /> hello@codecraftt.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/50683442522" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-400 hover:text-white transition-colors">
                  +506 8344 2522
                </a>
              </li>
              <li className="text-xs text-zinc-400 leading-relaxed pt-1">
                San José, Curridabat<br />Costa Rica
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} CodeCraftt. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            SaaS Development · AI Systems · Mobile Apps · Nearshore Costa Rica
          </p>
        </div>
      </div>
    </footer>
  );
}
