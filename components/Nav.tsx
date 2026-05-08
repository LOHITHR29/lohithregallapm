"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "#contact") return false;
    return pathname.startsWith(href);
  };

  const onContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = "/#contact";
    }
  };

  // Logo fades out on scroll; the right nav stays visible.
  const fadeClass = scrolled
    ? "opacity-0 -translate-y-1 pointer-events-none"
    : "opacity-100 translate-y-0";

  return (
    <header className="fixed top-0 inset-x-0 z-[100] bg-transparent">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-5 lg:py-6 grid grid-cols-2 lg:grid-cols-12 items-start gap-4">
        {/* Logo — vanishes on scroll */}
        <Link
          href="/"
          aria-label="Home"
          className={`col-span-1 lg:col-span-2 font-display text-[18px] lg:text-[20px] font-bold leading-[1.05] text-[color:var(--olive)] transition-all duration-300 ease-out ${fadeClass}`}
        >
          <span className="block">lohith.</span>
          <span className="block">regalla</span>
        </Link>

        {/* Right nav — always visible, always pinned to the right */}
        <nav
          aria-label="Primary"
          className="col-span-1 lg:col-start-10 lg:col-span-3 flex flex-col items-end gap-1 text-[14px] text-[color:var(--olive)]"
        >
          {[
            { label: "Home", href: "/" },
            { label: "Work", href: "/work" },
            { label: "About", href: "/about" },
          ].map((l) => {
            const active = isActive(l.href);
            return (
              <Link key={l.href} href={l.href} className="link-underline">
                {active && <span aria-hidden>• </span>}
                {l.label}
              </Link>
            );
          })}
          <a
            href="#contact"
            onClick={onContactClick}
            className="link-underline"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
