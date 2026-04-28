interface IPhoneFrameProps {
  src: string;
  alt: string;
}

export default function IPhoneFrame({ src, alt }: IPhoneFrameProps) {
  return (
    <div className="relative inline-block">
      {/* Outer frame */}
      <div className="relative w-[280px] md:w-[320px] mx-auto">
        {/* Phone bezel */}
        <div
          className="relative rounded-[40px] overflow-hidden bg-black"
          style={{
            boxShadow: "0 0 0 12px #000, 0 0 40px 0 rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.1)",
          }}
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10" />

          {/* Screen content */}
          <div className="relative w-full aspect-[9/19.5] overflow-hidden bg-slate-950">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Phone shadow */}
        <div
          className="absolute -inset-2 rounded-[40px] opacity-20 -z-10"
          style={{
            background: "radial-gradient(circle at 30% 30%, rgba(249,115,22,0.4), transparent 70%)",
            filter: "blur(20px)",
          }}
        />
      </div>
    </div>
  );
}
