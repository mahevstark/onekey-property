"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function AnimatedHero() {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(true), []);

  return (
    <section className="relative overflow-hidden min-h-[80vh] md:min-h-[90vh] flex items-center">
      <Image
        src="/hero-home.jpg"
        alt="Modern property"
        fill
        priority
        fetchPriority="high"
        className="object-cover"
        sizes="100vw"
        quality={60}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/75 to-primary-light/50" />

      {/* Animated gradient glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-accent/15 to-accent-light/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent-dark/10 to-transparent rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        <div className="max-w-2xl">
          <div
            className="flex items-center gap-3 mb-8"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.5s ease-out",
            }}
          >
            <div className="h-px w-10 bg-gradient-to-r from-accent to-accent-light" />
            <span className="text-accent-light text-sm font-semibold tracking-widest uppercase">
              Property Management
            </span>
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease-out 0.15s",
            }}
          >
            We manage.
            <br />
            <span
              className="bg-gradient-to-r from-accent-light via-accent to-white bg-clip-text text-transparent inline-block"
              style={{
                opacity: show ? 1 : 0,
                transform: show ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out 0.5s",
              }}
            >
              You earn.
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-white/70 mb-10 max-w-lg leading-relaxed"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease-out 0.4s",
            }}
          >
            Expert property management and landlord services in Surrey.
            Hassle-free letting with maximum returns.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease-out 0.6s",
            }}
          >
            <Button href="/contact" size="lg" variant="primary">
              Get Free Valuation
            </Button>
            <Button href="/landlord-services" size="lg" variant="outline">
              Our Services
            </Button>
          </div>

          {/* Trust strip */}
          <div
            className="mt-14 flex items-center gap-8 text-white/50 text-sm"
            style={{
              opacity: show ? 1 : 0,
              transition: "opacity 0.6s ease-out 0.9s",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-accent-light text-lg font-bold">200+</span>
              <span>Properties</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-accent-light text-lg font-bold">15+</span>
              <span>Years</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-accent-light text-lg font-bold">4.9</span>
              <span>Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
