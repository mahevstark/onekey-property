"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type AnimatedPageHeroProps = {
  title: string;
  subtitle: string;
  image?: string;
};

const defaultImages: Record<string, string> = {
  "Landlord Services": "/hero-landlord.jpg",
  "Tenant Support": "/hero-tenant.jpg",
  "Contact Us": "/hero-contact.jpg",
};

export default function AnimatedPageHero({ title, subtitle, image }: AnimatedPageHeroProps) {
  const bgImage = image || defaultImages[title] || "/hero-home.jpg";
  const [show, setShow] = useState(false);
  useEffect(() => setShow(true), []);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <Image
        src={bgImage}
        alt={title}
        fill
        priority
        fetchPriority="high"
        className="object-cover"
        sizes="100vw"
        quality={60}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 via-primary/80 to-primary/70" />

      {/* Animated gradient glows */}
      <div className="absolute top-10 right-10 w-56 h-56 bg-gradient-to-br from-accent/10 to-accent-light/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-accent-dark/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className="flex items-center justify-center gap-3 mb-4"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(-10px)",
            transition: "all 0.4s ease-out",
          }}
        >
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent-light" />
          <span className="text-accent-light/80 text-xs font-semibold tracking-widest uppercase">One Key Property</span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent-light" />
        </div>
        <h1
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(25px)",
            transition: "all 0.6s ease-out 0.1s",
          }}
        >
          {title}
        </h1>
        <p
          className="text-lg text-white/80 max-w-2xl mx-auto"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(15px)",
            transition: "all 0.6s ease-out 0.25s",
          }}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
}
