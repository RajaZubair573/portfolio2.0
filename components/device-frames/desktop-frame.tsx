interface DesktopFrameProps {
  src: string;
  alt: string;
}

export default function DesktopFrame({ src, alt }: DesktopFrameProps) {
  return (
    <div className="relative inline-block w-full">
      {/* Outer frame */}
      <div className="relative w-full">
        {/* Browser chrome */}
        <div
          className="relative overflow-hidden bg-slate-900 rounded-lg border border-slate-700/50"
          style={{
            boxShadow: "0 20px 60px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.05)",
          }}
        >
          {/* Browser address bar */}
          <div className="relative px-4 py-3 bg-slate-800/50 border-b border-slate-700/30 flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 ml-3 px-3 py-1.5 bg-slate-700/30 rounded text-xs text-slate-400 font-['Space_Mono'] truncate">
              portfolio.rajazubair.com
            </div>
          </div>

          {/* Screen content */}
          <div className="relative w-full aspect-video overflow-hidden bg-slate-950">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Frame shadow */}
        <div
          className="absolute -inset-4 rounded-lg opacity-30 -z-10"
          style={{
            background: "radial-gradient(circle at 50% 0%, rgba(249,115,22,0.3), transparent 70%)",
            filter: "blur(30px)",
          }}
        />
      </div>
    </div>
  );
}
