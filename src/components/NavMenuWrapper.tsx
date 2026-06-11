"use client";

import { useEffect, useState } from 'react';
import StaggeredMenu from './StaggeredMenu';
import LanguageToggle from './LanguageToggle';
import { useLang } from '../context/LanguageContext';

export default function NavMenuWrapper() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLang();

  const menuItems = [
    { label: t.nav.home, ariaLabel: t.nav.home, link: '#home' },
    { label: t.nav.about, ariaLabel: t.nav.about, link: '#about' },
    { label: t.nav.services, ariaLabel: t.nav.services, link: '#services' },
    { label: t.nav.process, ariaLabel: t.nav.process, link: '#process' },
    { label: t.nav.contact, ariaLabel: t.nav.contact, link: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <LanguageToggle />
      <div 
        className="fixed top-0 left-0 right-0 h-24 bg-[#090a0c]/80 backdrop-blur-xl border-b border-white/5 z-30 transition-opacity duration-300"
        style={{ opacity: scrolled ? 1 : 0 }}
      />
      <StaggeredMenu
        position="right"
        items={menuItems}
        displaySocials={false}
        displayItemNumbering={false}
        menuButtonColor="#efece7"
        openMenuButtonColor="#efece7"
        changeMenuColorOnOpen={true}
        colors={['transparent', 'transparent']}
        logoUrl="/codecraftt-logo.png"
        accentColor="#e89230"
        isFixed={true}
      />
    </>
  );
}
