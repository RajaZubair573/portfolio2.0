import { LuGithub, LuInstagram, LuLinkedin } from "react-icons/lu";
import Link from "next/link";

const navLinks = ["Home", "Projects", "About", "Contact"];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0f172a 0%, #0d1424 40%, #0b1120 80%, #0a0f1e 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(to right, transparent 10%, rgba(255,255,255,0.05) 30%, rgba(249,115,22,0.15) 50%, rgba(255,255,255,0.05) 70%, transparent 90%)" }} />

      <div className="relative z-10 w-[90%] max-w-[1200px] mx-auto">
        <div className="py-16 md:py-20 flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h2 className="font-['Rajdhani'] text-2xl md:text-3xl font-bold text-slate-100">
              Raja{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Zubair
              </span>
            </h2>
            <p className="font-['Space_Mono'] text-[11px] tracking-[0.15em] uppercase text-slate-500 max-w-xs leading-relaxed">
              UI/UX Designer & Webflow Developer crafting premium digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <span className="font-['Space_Mono'] text-[10px] tracking-[0.25em] uppercase text-orange-500/40 mb-2">
              Navigation
            </span>
            {navLinks.map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="font-['Space_Mono'] text-[11px] tracking-[0.12em] uppercase text-slate-500 no-underline transition-colors duration-300 hover:text-orange-400"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <span className="font-['Space_Mono'] text-[10px] tracking-[0.25em] uppercase text-orange-500/40 mb-2">
              Connect
            </span>
            <div className="flex items-center gap-5">
              {[
                { href: "https://www.linkedin.com/in/raja-zubair-664066294/", Icon: LuLinkedin, label: "LinkedIn" },
                { href: "https://www.instagram.com/raja_zubair_786", Icon: LuInstagram, label: "Instagram" },
                { href: "https://github.com/RajaZubair573", Icon: LuGithub, label: "GitHub" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group relative"
                >
                  <div className="absolute -inset-2 rounded-full bg-orange-500/0 group-hover:bg-orange-500/10 transition-all duration-300" />
                  <Icon className="relative text-lg text-slate-500 transition-all duration-300 group-hover:text-orange-400 group-hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="font-['Space_Mono'] text-[11px] tracking-[0.15em] text-slate-500 uppercase">
            <span className="text-orange-500 text-xl align-middle">&copy;</span> {currentYear} — Raja Zubair
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="font-['Space_Mono'] text-[11px] tracking-[0.15em] text-slate-500 uppercase">
              Available for work
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
