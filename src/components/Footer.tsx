export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src="/CODECRAFT_LOGO.png" alt="CodeCraft" className="h-10 w-auto" />
          </div>

          <div className="flex items-center gap-8 text-sm text-zinc-300">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#authority" className="hover:text-white transition-colors">
              Authority
            </a>
            <a href="#cta" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <p className="text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} CodeCraft. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
