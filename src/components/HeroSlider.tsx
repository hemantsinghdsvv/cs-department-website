"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface HeroSliderProps {
  children: React.ReactNode;
}

const slides = [
  {
    id: 1,
    image: "https://www.dsvv.ac.in/wp-content/uploads/2025/01/WhatsApp-Image-2024-04-08-at-21.05.34-e1737793070885.jpeg",
    alt: "Department Group Photo",
  },
  {
    id: 2,
    image: "https://www.dsvv.ac.in/wp-content/uploads/2022/01/dsvv1-1-1.jpg?q=80&w=1920&auto=format&fit=crop", // Placeholder university image
    alt: "University Campus",
  },
  {
      id: 3,
      image: "https://www.dsvv.ac.in/wp-content/uploads/2022/01/homebanner2.jpg?q=80&w=1920&auto=format&fit=crop", // Another placeholder
      alt: "Mahakal",
  }
];

export function HeroSlider({ children }: HeroSliderProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-slate-900 text-white">
      {/* Slider */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide) => (
            <div key={slide.id} className="relative h-full w-full flex-[0_0_100%] min-w-0">
              <img
                src={slide.image}
                alt={slide.alt}
                className="h-full w-full object-cover"
              />
              {/* Dark Overlay per slide */}
              <div className="absolute inset-0 bg-black/60" />
            </div>
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-center justify-center">
        {children}
      </div>
    </div>
  );
}
