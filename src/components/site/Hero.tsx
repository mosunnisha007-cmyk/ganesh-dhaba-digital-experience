import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import gsap from "gsap";
import thaliBg from "@/assets/thali-bg.jpg.asset.json";
import { Logo } from "./Logo";

const SLIDES = [
  { src: thaliBg.url, alt: "Traditional Indian thali spread" },
  { src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1920&q=80", alt: "Paneer butter masala" },
  { src: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1920&q=80", alt: "Fragrant veg biryani" },
  { src: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1920&q=80", alt: "Crispy masala dosa" },
  { src: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1920&q=80", alt: "Pav bhaji with butter" },
  { src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1920&q=80", alt: "Golden dal tadka" },
];

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!titleRef.current) return;
    const letters = titleRef.current.querySelectorAll("[data-letter]");
    gsap.fromTo(
      letters,
      { y: 60, opacity: 0, rotateX: -40 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.045,
        delay: 0.2,
      }
    );
  }, []);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Logo at upper left */}
      <div className="absolute left-4 top-4 z-30 sm:left-6 sm:top-6">
        <Logo hideWordmark logoClassName="h-24 w-24 sm:h-32 sm:w-32" />
      </div>
      {/* Animated background slideshow */}
      <div className="absolute inset-0 -z-20">
        <AnimatePresence mode="sync">
          <motion.img
            key={index}
            src={SLIDES[index].src}
            alt={SLIDES[index].alt}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0, scale: 1.0 }}
            transition={{ opacity: { duration: 1.4, ease: "easeInOut" }, scale: { duration: 6, ease: "linear" } }}
            className="absolute inset-0 h-full w-full object-cover"
            width={1920}
            height={1280}
          />
        </AnimatePresence>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-[var(--color-gold)]" : "w-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_100%)]" />

      {/* Floating spice particles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {Array.from({ length: 22 }).map((_, i) => (
          <span
            key={i}
            className="absolute block h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]/70 blur-[1px] animate-float-up"
            style={{
              left: `${(i * 4.7) % 100}%`,
              bottom: `-${Math.random() * 40}px`,
              animationDelay: `${(i % 8) * 0.6}s`,
              animationDuration: `${6 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center text-white">

        <h1
          ref={titleRef}
          className="font-display text-5xl font-bold leading-[0.95] sm:text-7xl md:text-[104px]"
          aria-label="GANESH DHABA"
        >
          <span className="block overflow-hidden">
            {"GANESH".split("").map((c, i) => (
              <span key={i} data-letter className="inline-block">{c}</span>
            ))}
          </span>
          <span className="block overflow-hidden text-white">
            {"DHABA".split("").map((c, i) => (
              <span key={i} data-letter className="inline-block">{c}</span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mx-auto mt-6 max-w-2xl text-base text-white/85 sm:text-lg"
        >
          Authentic Family Dining • Fast Food • Refreshing Beverages
        </motion.p>

      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1.4 }, y: { repeat: Infinity, duration: 1.8 } }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80"
      >
        <span className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em]">
          Scroll
          <HiArrowDown size={18} />
        </span>
      </motion.a>
    </section>
  );
}
