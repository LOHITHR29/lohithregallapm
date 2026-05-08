"use client";

import { useEffect, useState } from "react";

const hellos = [
  "Hello",
  "Hola",
  "Bonjour",
  "नमस्ते",
  "你好",
  "こんにちは",
  "안녕",
  "Ciao",
  "Hej",
  "Olá",
  "నమస్తే",
  "Salam",
  "Hallo",
  "Привет",
];

const DURATION = 3200; // ms — total loader run
const HELLO_INTERVAL = 140; // ms — greeting cycle

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [helloIdx, setHelloIdx] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduce ? 700 : DURATION;
    const start = performance.now();

    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased =
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      setProgress(Math.floor(eased * 100));
      setHelloIdx(Math.floor(elapsed / HELLO_INTERVAL) % hellos.length);
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setHidden(true), 250);
        setTimeout(() => setRemoved(true), 1050);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      aria-hidden={hidden}
      role="status"
      className={`fixed inset-0 z-[200] grid place-items-center bg-[color:var(--cream)] transition-opacity duration-700 ease-out ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-10">
        <p
          key={helloIdx}
          className="font-display italic text-[40px] sm:text-[56px] lg:text-[80px] leading-none text-[color:var(--olive)] loader-fade-up"
        >
          {hellos[helloIdx]}
        </p>

        <div className="flex flex-col items-center gap-3">
          <p className="font-display text-[64px] sm:text-[88px] lg:text-[120px] leading-none font-bold text-[color:var(--olive)] tabular-nums">
            {progress}%
          </p>
          <div className="w-[200px] h-[2px] bg-[color:var(--olive-mute)] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#a83c1f] transition-[width] duration-200 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
