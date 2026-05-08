"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Orb = {
  label: string;
  colors: string[];
  angle: number; // 0 = top, 120 = bottom-right, 240 = bottom-left
};

const orbs: Orb[] = [
  {
    // Top — soft blue/purple
    label: "Onboarding & adoption",
    colors: ["#C9B1FF", "#B8C5FF", "#A8D8EA"],
    angle: 0,
  },
  {
    // Bottom-right — green/cyan
    label: "Growth & metrics",
    colors: ["#90E0A8", "#A8E6CF", "#B8E0D2"],
    angle: 120,
  },
  {
    // Bottom-left — coral/orange
    label: "Product strategy",
    colors: ["#E87A4F", "#F4A261", "#FFB5A7"],
    angle: 240,
  },
];

const RING_R_RATIO = 0.4; // matches the SVG circle r=40 in viewBox 0 0 100 100
const ORBIT_DURATION = 90; // seconds for one full revolution

export default function SkillsOrbit() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        ".orbit-ring",
        { strokeDashoffset: 1000 },
        { strokeDashoffset: 0, duration: 1.2, ease: "power2.out" },
      );

      tl.fromTo(
        ".orbit-center",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" },
        "-=0.5",
      );

      tl.fromTo(
        ".orbit-orb-shape",
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.4)",
          stagger: 0.2,
        },
        "-=0.3",
      );

      tl.fromTo(
        ".orb-label-text",
        { opacity: 0 },
        { opacity: 1, duration: 0.4, stagger: 0.15 },
        "-=0.5",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-20 lg:py-28">
        <div
          className="relative mx-auto"
          style={{
            width: "min(680px, 92vw)",
            height: "min(680px, 92vw)",
          }}
        >
          {/* Faint thin-stroke ring */}
          <svg
            aria-hidden
            className="absolute inset-0 m-auto pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            style={{ width: "100%", height: "100%" }}
          >
            <circle
              className="orbit-ring"
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="rgba(74, 93, 35, 0.18)"
              strokeWidth="0.3"
              pathLength={1000}
              strokeDasharray={1000}
            />
          </svg>

          {/* Center label + small dot */}
          <div className="orbit-center absolute inset-0 grid place-items-center z-10 pointer-events-none">
            <div className="flex flex-col items-center gap-3">
              <p className="font-display italic text-[22px] lg:text-[30px] leading-[1.1] text-[color:var(--olive)] text-center">
                My product
                <br />
                practice
              </p>
              <span className="w-[6px] h-[6px] rounded-full bg-[color:var(--olive-dark)] mt-1" />
            </div>
          </div>

          {/* Continuously revolving orbit container */}
          <div
            className="absolute inset-0"
            style={{
              animation: `orbit-spin ${ORBIT_DURATION}s linear infinite`,
              willChange: "transform",
            }}
          >
            {orbs.map((o) => (
              <div
                key={o.label}
                className="absolute top-1/2 left-1/2"
                style={{
                  width: "min(200px, 30vw)",
                  height: "min(200px, 30vw)",
                  transform: `translate(-50%, -50%) rotate(${o.angle}deg) translateY(calc(-1 * ${RING_R_RATIO} * min(680px, 92vw)))`,
                  willChange: "transform",
                }}
              >
                {/* Counter-spin so labels stay upright through the orbit */}
                <div
                  className="relative w-full h-full"
                  style={{
                    animation: `orbit-spin ${ORBIT_DURATION}s linear infinite reverse`,
                    willChange: "transform",
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ transform: `rotate(${-o.angle}deg)` }}
                  >
                    {/* GSAP scale target — wraps the visible orb */}
                    <div className="orbit-orb-shape absolute inset-0">
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: `radial-gradient(circle at 35% 35%, ${o.colors[0]} 0%, ${o.colors[1]} 45%, ${o.colors[2]} 100%)`,
                          filter: "blur(24px)",
                          opacity: 0.85,
                        }}
                      />
                      <div className="absolute inset-0 grid place-items-center">
                        <span className="orb-label-text font-display italic text-[14px] lg:text-[18px] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] text-center px-4 leading-[1.15] max-w-[80%]">
                          {o.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
