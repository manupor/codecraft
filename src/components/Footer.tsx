export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-2">
            <img src="/codecraftt-logo.png" alt="CodeCraftt" className="h-10 w-auto" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
            <a href="/" className="hover:text-[#10B981] transition-colors">
              Home
            </a>
            <a href="/services" className="hover:text-[#10B981] transition-colors">
              Services
            </a>
            <a href="/pricing" className="hover:text-[#10B981] transition-colors">
              Pricing
            </a>
            <a href="/about" className="hover:text-[#10B981] transition-colors">
              About
            </a>
            <a href="/landing-builder" className="hover:text-[#10B981] transition-colors">
              Landing Builder
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-zinc-500 mb-2">
              Contact: <a href="mailto:hola@codecraftt.com" className="text-[#10B981] hover:underline">hola@codecraftt.com</a>
            </p>
            <p className="text-sm text-zinc-500 mb-2">
              Alajuela, Costa Rica 🇨🇷
            </p>
            <p className="text-sm text-zinc-600">
              &copy; {new Date().getFullYear()} CodeCraftt. Built with AI. Designed for performance.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
