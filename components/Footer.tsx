"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        ".footer-heading",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
      )
        .fromTo(
          ".footer-desc",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.5",
        )
        .fromTo(
          ".footer-meta > *",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.1 },
          "-=0.4",
        )
        .fromTo(
          ".footer-pill",
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.4)",
            stagger: 0.08,
          },
          "-=0.4",
        );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={ref}
      id="contact"
      role="contentinfo"
      aria-label="Site footer"
      className="relative w-full bg-[color:var(--olive-dark)] text-white mt-16 lg:mt-24 overflow-hidden"
    >
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 pt-24 lg:pt-32 pb-10">
        {/* Heading */}
        <h2 className="footer-heading font-display text-[44px] sm:text-[64px] lg:text-[88px] xl:text-[104px] leading-[1.02] tracking-[-0.02em] max-w-[14ch]">
          Want to build something{" "}
          <em className="italic font-display">together?</em>
        </h2>

        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <p className="footer-desc text-[16px] lg:text-[18px] leading-[1.6] text-white/85 max-w-[52ch]">
              I&apos;m always up for a chat about product, AI features, and
              early-stage builds. If you&apos;ve got something brewing — or
              just want to swap notes — drop a line.
            </p>

            <div className="footer-meta mt-10 flex flex-col gap-2">
              <p className="text-[14px] tracking-[0.18em] uppercase text-white/55">
                Get in touch
              </p>
              <a
                href="mailto:lohithregalla123@gmail.com"
                className="link-underline before:bg-white text-[20px] lg:text-[24px] self-start font-display"
              >
                lohithregalla123@gmail.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-3 flex flex-wrap gap-3 self-start">
            {[
              { label: "LinkedIn", href: "https://linkedin.com/in/lohithregalla" },
              { label: "GitHub", href: "https://github.com/" },
              { label: "Instagram", href: "https://instagram.com/" },
              { label: "Twitter", href: "https://twitter.com/" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-pill inline-flex items-center gap-2 rounded-full border border-white/35 px-5 py-2.5 text-[14px] hover:bg-white hover:text-[color:var(--olive-dark)] transition-colors"
              >
                {s.label}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 lg:mt-28 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-[12px] tracking-[0.16em] uppercase text-white/55">
          <span>© {new Date().getFullYear()} Lohith Regalla</span>
        </div>
      </div>

      {/* Giant name */}
      <div
        aria-hidden
        className="relative mt-12 lg:mt-20 overflow-hidden pointer-events-none select-none"
      >
        <p
          className="text-center font-display font-bold whitespace-nowrap leading-[0.85] tracking-[-0.045em]"
          style={{
            fontSize: "clamp(40px, 12.5vw, 180px)",
            backgroundImage:
              "linear-gradient(to bottom, rgba(255,255,255,0.55) 25%, rgba(255,255,255,0.06) 95%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "-0.18em",
          }}
        >
          lohith regalla
        </p>
      </div>
    </footer>
  );
}
