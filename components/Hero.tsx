import Link from "next/link";
import Blob from "./Blob";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Floating blobs */}
      <Blob
        className="-top-24 -left-24"
        size={460}
        blur={75}
        colors={["#E87A4F", "#F4A261", "#FFB5A7"]}
        drift="a"
        opacity={0.55}
      />
      <Blob
        className="top-10 -right-20"
        size={380}
        blur={70}
        colors={["#C9B1FF", "#B8C5FF", "#A8D8EA"]}
        drift="b"
        opacity={0.55}
      />
      <Blob
        className="top-32 left-1/2 -translate-x-1/2"
        size={180}
        blur={50}
        colors={["#90E0A8", "#A8E6CF", "#B8E0D2"]}
        drift="c"
        opacity={0.55}
      />
      <Blob
        className="-right-32 top-1/2"
        size={500}
        blur={90}
        colors={["#A8E6CF", "#B8E0D2", "#C9B1FF"]}
        drift="a"
        opacity={0.4}
      />

      {/* Sparkles */}
      <Sparkle className="top-[18%] right-[28%] w-6 h-6 spin-slow" />
      <Sparkle className="bottom-[25%] left-[20%] w-5 h-5 spin-slow opacity-70" />
      <Sparkle className="top-[35%] left-[12%] w-4 h-4 spin-slow opacity-60" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-10 text-center">
        {/* Pill badge */}
        <div className="inline-flex mb-10 rounded-full border border-[color:var(--olive)] px-5 py-2 text-[13px] tracking-[0.06em] text-[color:var(--olive)] backdrop-blur-sm">
          Product manager · Hyderabad, IN
        </div>

        {/* Heading */}
        <h1 className="font-display text-[44px] sm:text-[64px] lg:text-[84px] xl:text-[96px] leading-[1.05] tracking-[-0.02em] text-[color:var(--olive)] max-w-[16ch] mx-auto">
          <span className="word-in" style={{ animationDelay: "0ms" }}>
            Building
          </span>{" "}
          <span className="word-in" style={{ animationDelay: "80ms" }}>
            products
          </span>{" "}
          <Link
            href="/work"
            aria-label="Work"
            className="inline-block align-middle word-in hover:scale-105 transition-transform"
            style={{ animationDelay: "160ms" }}
          >
            <InlineLaptop />
          </Link>{" "}
          <span className="word-in" style={{ animationDelay: "240ms" }}>
            people
          </span>{" "}
          <span className="word-in" style={{ animationDelay: "320ms" }}>
            come
          </span>{" "}
          <span
            className="word-in italic"
            style={{ animationDelay: "400ms" }}
          >
            back
          </span>{" "}
          <span className="word-in" style={{ animationDelay: "480ms" }}>
            to.
          </span>
        </h1>
      </div>
    </section>
  );
}

function InlineLaptop() {
  return (
    <span className="relative inline-flex w-[80px] h-[52px] sm:w-[100px] sm:h-[66px] lg:w-[124px] lg:h-[82px] align-middle">
      <svg viewBox="0 0 124 82" className="w-full h-full" aria-hidden>
        <defs>
          <linearGradient id="screen-grad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#C9B1FF" />
            <stop offset="0.5" stopColor="#A8D8EA" />
            <stop offset="1" stopColor="#90E0A8" />
          </linearGradient>
        </defs>
        <rect x="6" y="4" width="112" height="62" rx="6" fill="#3A4A1E" />
        <rect
          x="10"
          y="8"
          width="104"
          height="54"
          rx="3"
          fill="url(#screen-grad)"
        />
        <rect x="0" y="68" width="124" height="6" rx="3" fill="#3A4A1E" />
        <rect x="48" y="68" width="28" height="3" fill="#4A5D23" />
      </svg>
    </span>
  );
}

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={`absolute pointer-events-none ${className}`}
    >
      <path
        d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
        fill="#4A5D23"
        opacity="0.35"
      />
    </svg>
  );
}
