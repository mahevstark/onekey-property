"use client";

import Image from "next/image";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionHeading from "@/components/ui/SectionHeading";

const accreditations = [
  { src: "/logos/propertymark.png", alt: "Propertymark - Certified and Accredited", width: 160, height: 63 },
  { src: "/logos/tpo.svg", alt: "The Property Ombudsman", width: 147, height: 43 },
  { src: "/logos/safeagent.svg", alt: "SafeAgent - Client Money Protection", width: 200, height: 48 },
  { src: "/logos/dps.svg", alt: "Deposit Protection Service", width: 160, height: 44 },
];

const councils = [
  { src: "/logos/hounslow.png", alt: "London Borough of Hounslow", width: 180, height: 38, invert: true },
  { src: "/logos/richmond.png", alt: "London Borough of Richmond upon Thames", width: 180, height: 37, invert: true },
  { src: "/logos/hillingdon.png", alt: "London Borough of Hillingdon", width: 160, height: 96, invert: true },
  { src: "/logos/ealing.svg", alt: "London Borough of Ealing", width: 180, height: 50, invert: false },
  { src: "/logos/spelthorne.png", alt: "Spelthorne Borough Council", width: 160, height: 106, invert: false },
  { src: "/logos/runnymede.png", alt: "Runnymede Borough Council", width: 180, height: 41, invert: true },
];

function LogoCard({ logo }: { logo: typeof councils[number] }) {
  return (
    <div className="flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-5 hover:bg-white/15 hover:border-accent-light/30 hover:scale-105 transition-all duration-500 flex items-center justify-center h-[85px] min-w-[200px]">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className={`object-contain max-h-[50px] max-w-full opacity-70 hover:opacity-100 transition-opacity duration-500 ${logo.invert ? "brightness-0 invert" : ""}`}
      />
    </div>
  );
}

export default function TrustLogos() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-primary-dark via-primary to-primary-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent-light/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Accreditations */}
        <AnimateIn>
          <SectionHeading
            title="Accredited & Fully Insured"
            subtitle="We are proud members of the UK's leading property industry bodies"
            light
          />
        </AnimateIn>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-20">
          {accreditations.map((logo, i) => (
            <AnimateIn key={logo.alt} delay={i * 0.1}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-5 hover:bg-white/15 hover:border-accent-light/20 transition-all duration-300 flex items-center justify-center h-[80px]">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain max-h-[50px] w-auto"
                />
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Councils heading */}
        <AnimateIn>
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">
              Councils We Work With in Greater London
            </h3>
            <p className="text-white/60 text-base max-w-xl mx-auto">
              Trusted by landlords and tenants across these local authority areas
            </p>
            <div className="mt-4 h-1 w-12 bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto" />
          </div>
        </AnimateIn>
      </div>

      {/* Marquee */}
      <div className="relative mt-2">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-primary-dark via-primary-dark/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-primary-dark via-primary-dark/80 to-transparent z-10 pointer-events-none" />

        {/* Row 1 - left to right */}
        <div className="group mb-5 overflow-hidden">
          <div className="flex gap-5 animate-marquee group-hover:[animation-play-state:paused]">
            {[...councils, ...councils, ...councils].map((logo, i) => (
              <LogoCard key={`r1-${i}`} logo={logo} />
            ))}
          </div>
        </div>

        {/* Row 2 - right to left */}
        <div className="group overflow-hidden">
          <div className="flex gap-5 animate-marquee-reverse group-hover:[animation-play-state:paused]">
            {[...councils.slice(3), ...councils.slice(0, 3), ...councils, ...councils].map((logo, i) => (
              <LogoCard key={`r2-${i}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
