"use client";

import { Github, Linkedin, Instagram, Mail, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useContactModal } from "@/components/HomeClient";

export default function Footer() {
  const { t } = useLanguage();
  const { openModal } = useContactModal();
  const footerServices = t.footer.services;
  const industries = t.footer.industries;
  const company = t.footer.company;
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#090a0c]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/">
              <img src="/codecraftt-logo.png" alt="CodeCraftt" className="h-8 w-auto brightness-0 invert" />
            </a>
            <p className="mt-3 text-sm text-[#5c5f66] leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {[
                { href: "https://github.com/codecraftt", Icon: Github },
                { href: "https://linkedin.com/company/codecraftt", Icon: Linkedin },
                { href: "https://instagram.com/codecraftt", Icon: Instagram },
              ].map(({ href, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-sm bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-[#5c5f66] hover:text-[#efece7] hover:border-white/20 transition-all">
                  <Icon size={14} />
                </a>
              ))}
            </div>
            <button onClick={openModal} className="mt-5 inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-[#8b5cf6] text-white text-xs font-semibold hover:shadow-lg hover:shadow-violet-500/30 transition-all">
              {t.footer.cta} <ArrowRight size={11} />
            </button>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5c5f66] mb-4">{t.footer.servicesTitle}</h3>
            <ul className="space-y-2.5">
              {footerServices.map((label) => (
                <li key={label}>
                  <a href="#services" className="text-xs text-[#5c5f66] hover:text-[#efece7] transition-colors leading-snug block">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5c5f66] mb-4">{t.footer.industriesTitle}</h3>
            <ul className="space-y-2.5">
              {industries.map((ind) => (
                <li key={ind} className="text-xs text-[#5c5f66] leading-snug">{ind}</li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5c5f66] mb-4">{t.footer.companyTitle}</h3>
            <ul className="space-y-2.5 mb-7">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-xs text-[#5c5f66] hover:text-[#efece7] transition-colors block">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5c5f66] mb-4">{t.footer.contactTitle}</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:hello@codecraftt.com" className="flex items-center gap-2 text-xs text-[#5c5f66] hover:text-[#efece7] transition-colors">
                  <Mail size={11} className="shrink-0" /> hello@codecraftt.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/50683442522" target="_blank" rel="noopener noreferrer" className="text-xs text-[#5c5f66] hover:text-[#efece7] transition-colors">
                  +506 8344 2522
                </a>
              </li>
              <li className="text-xs text-[#5c5f66] leading-relaxed pt-1">
                San José, Curridabat<br />Costa Rica
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#5c5f66]">
            &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> CodeCraftt. {t.footer.rights}
          </p>
          <p className="text-xs text-[#3e4149]">
            {t.footer.bottomTagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
