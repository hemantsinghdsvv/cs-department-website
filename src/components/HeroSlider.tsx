"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

interface HeroSliderProps {
  children: React.ReactNode;
}

const slides = [
  {
    id: 1,
    image: "https://www.dsvv.ac.in/wp-content/uploads/2022/01/dsvv1-1-1.jpg?q=80&w=1920&auto=format&fit=crop",
    alt: "University Campus",
  },
  {
    id: 2,
    image: "https://www.dsvv.ac.in/wp-content/uploads/2022/01/homebanner2.jpg?q=80&w=1920&auto=format&fit=crop",
      alt: "Mahakal Temple",
  },
  {
      id: 3,
      image: "https://www.dsvv.ac.in/wp-content/uploads/2025/01/WhatsApp-Image-2024-04-08-at-21.05.34-e1737793070885.jpeg",
    alt: "Department Group Photo",
  }
];

export function HeroSlider({ children }: HeroSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [Autoplay({ delay: 6000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
        emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className="relative h-[650px] w-full overflow-hidden bg-slate-900 text-white group">
      {/* Slider */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={slide.id} className="relative h-full w-full flex-[0_0_100%] min-w-0 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.alt}
                className={cn(
                    "h-full w-full object-cover transition-transform duration-[10000ms] ease-out",
                    selectedIndex === index ? "scale-110" : "scale-100"
                )}
              />
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/30" />
              <div className="absolute inset-0 bg-black/20" /> {/* Extra dimming for text pop */}
            </div>
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-center justify-center">
        {children}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300 focus:outline-none",
              index === selectedIndex ? "w-8 bg-accent" : "w-2 bg-white/50 hover:bg-white"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
