"use client";
import { navItems } from "@/data";
import useHeaderBgScroll from "@/hooks/useHeaderBgScroll";

import Button from "../Button";
import s from "./header.module.scss";

export default function Header() {
  const isScrolled = useHeaderBgScroll();
  return (
    <header className={`${s.header} ${isScrolled ? s.scrolled : ""}`}>
      <div className={s.logo}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="15"
            cy="15"
            r="13"
            stroke="url(#paint0_linear_2_97)"
            strokeWidth="4"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2_97"
              x1="5.85"
              y1="2.85"
              x2="24.45"
              y2="27.75"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF7557" />
              <stop offset="0.31087" stopColor="#DE35FF" />
              <stop offset="0.704599" stopColor="#173EFF" />
              <stop offset="1" stopColor="#16F1FF" />
            </linearGradient>
          </defs>
        </svg>
        <span>circuit.</span>
      </div>
      <nav>
        <ul className={s.navList}>
          {navItems?.map((item, i) => (
            <li key={i}>
              <a href="/" className={i === 0 ? s.firstNavItem : ""}>
                {item}
              </a>
              {i !== navItems?.length - 1 && <span></span>}
            </li>
          ))}
        </ul>
      </nav>
      <Button mode="dark" iconPosition="left" icon="phone">
        Contact Us
      </Button>
    </header>
  );
}
