"use client";

import StaggeredMenu from './StaggeredMenu';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home', link: '#' },
  { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
  { label: 'Services', ariaLabel: 'View our services', link: '#services' },
  { label: 'Authority', ariaLabel: 'See our track record', link: '#authority' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#cta' },
];


export default function NavMenu() {
  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      displaySocials={false}
      displayItemNumbering={false}
      menuButtonColor="#ffffff"
      openMenuButtonColor="#fff"
      changeMenuColorOnOpen={true}
      colors={['transparent', 'transparent']}
      logoUrl="/CODECRAFT_LOGO.png"
      accentColor="#5227FF"
      isFixed={true}
    />
  );
}
