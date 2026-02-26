"use client";

import { useEffect, useState } from 'react';
import StaggeredMenu from './StaggeredMenu';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home', link: '#' },
  { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
  { label: 'Services', ariaLabel: 'View our services', link: '#services' },
  { label: 'Authority', ariaLabel: 'See our track record', link: '#authority' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#cta' },
];

export default function NavMenuWrapper() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 left-0 right-0 h-24 bg-black/80 backdrop-blur-xl border-b border-white/5 z-30 transition-opacity duration-300"
        style={{ opacity: scrolled ? 1 : 0 }}
      />
      <StaggeredMenu
        position="right"
        items={menuItems}
        displaySocials={false}
        displayItemNumbering={false}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={['transparent', 'transparent']}
        logoUrl="/codecraftt-logo.png"
        accentColor="#5227FF"
        isFixed={true}
      />
    </>
  );
}
