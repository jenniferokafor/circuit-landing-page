import { useEffect, useRef, useState } from "react";
import { carouselItems } from "@/data";
import s from "./page.module.scss";

export default function useHome() {
  const [carouselStep, setCarouselStep] = useState(0);
  const stepCount = carouselItems.length;
  const stepHeight = 628 / stepCount;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCarouselStep((prev) => (prev + 1) % stepCount);
    }, 3000);
    return () => clearTimeout(timer);
  }, [carouselStep, stepCount]);

  const infoRef = useRef(null);
  const plansRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(s.hidden);
            entry.target.classList.add(s.animate);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    [infoRef, plansRef, ctaRef].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      [infoRef, plansRef, ctaRef].forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return {
    carouselStep,
    stepCount,
    stepHeight,
    infoRef,
    plansRef,
    ctaRef,
  };
}
