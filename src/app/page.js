"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { carouselItems, footerNavItems, pricing } from "@/data";
import Header from "@/components/Header";
import Button from "@/components/Button";
import heroEllipse from "@/assets/hero-ellipse.png";
import infoImg from "@/assets/carousel-img.png";
import ctaEllipse from "@/assets/cta-ellipse.png";
import footerEllipse from "@/assets/footer-ellipse.png";

import s from "./page.module.scss";

export default function Home() {
  const [carouselStep, setCarouselStep] = useState(0);
  const stepCount = carouselItems.length;
  const stepHeight = 628 / stepCount;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCarouselStep((prev) => (prev + 1) % stepCount);
    }, 3000);
    return () => clearTimeout(timer);
  }, [carouselStep, stepCount]);

  return (
    <div className={s.home}>
      <Header />
      <div className={s.hero}>
        <div className={s.hero__Inner}>
          <h1>
            Data-driven
            <br />
            insights
          </h1>
          <div className={s.heroBottom}>
            <p className={s.heroBottom__Left}>
              Transforming tomorrow with AI-Powered intelligence to drive
              innovation
            </p>
            <div className={s.heroBottom__Right}>
              <p>
                Empowering businesses through data-driven insights and
                automation to achieve unparalleled growth. We built to
                revolutionize industries and improve productivity.
              </p>
              <div>
                <Button
                  mode="dark"
                  size="medium"
                  icon="arrow"
                  iconPosition="right"
                >
                  Explore Our Solutions
                </Button>
                <Button size="medium" icon="logo" iconPosition="right">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={heroEllipse}
        role="presentation"
        alt="ellipse"
        className={s.ellipse}
      />
      <h2 className={s.subtitle}>Rapidly changing tech landscape</h2>
      <div className={s.info}>
        <div className={s.carousel}>
          <div className={s.carousel__Numbers}>
            {Array.from({ length: stepCount }).map((_, i) => (
              <span
                key={i}
                style={{
                  color: carouselStep === i ? "#18191C" : "#E6E6E6",
                  cursor: "pointer",
                }}
                onClick={() => setCarouselStep(i)}
              >
                0{i + 1}
              </span>
            ))}
          </div>
          <div className={s.carousel__Divider}>
            <div
              style={{
                top: `${carouselStep * stepHeight}px`,
                transition: "top 0.5s ease",
              }}
            ></div>
            <span></span>
          </div>
          <div className={s.carousel__Content}>
            {carouselItems?.map((each, i) => (
              <div
                key={i}
                onClick={() => setCarouselStep(i)}
                style={{ cursor: "pointer" }}
              >
                {each?.icon()}
                <h4
                  className={
                    carouselStep === i
                      ? s.carousel__Content__Gradient
                      : s.carousel__Content__Title
                  }
                >
                  {each?.title}
                </h4>
                <p>{each?.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
        <Image src={infoImg} alt="case study" className={s.info__Img} />
      </div>
      <div className={s.plans}>
        <div className={s.plans__Inner}>
          <h2>Plans & Pricing</h2>
          <p>
            Simple, transparent pricing. No setup fees or contracts.
            <br />
            Try without a credit card, cancel anytime.
          </p>
          <div className={s.plans__Inner__Options}>
            {pricing?.map((each, i) => (
              <div key={i} className={s.plans__Inner__Option}>
                <div
                  className={
                    each?.key === "free"
                      ? s.plans__Inner__Options__TitleSection
                      : s.plans__Inner__Options__PremiumTitleSection
                  }
                >
                  <h4>{each?.name}</h4>
                  <p>
                    <span>&#36; {each?.cost}</span>/month
                  </p>
                </div>
                <ul>
                  {each?.features?.map((feature, i) => (
                    <li key={i}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="24" height="24" rx="12" fill="#D1FADF" />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.0964 7.39004L9.93641 14.3L8.03641 12.27C7.68641 11.94 7.13641 11.92 6.73641 12.2C6.34641 12.49 6.23641 13 6.47641 13.41L8.72641 17.07C8.94641 17.41 9.32641 17.62 9.75641 17.62C10.1664 17.62 10.5564 17.41 10.7764 17.07C11.1364 16.6 18.0064 8.41004 18.0064 8.41004C18.9064 7.49004 17.8164 6.68004 17.0964 7.38004V7.39004Z"
                          fill="#12B76A"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className={s.plans__Inner__Option__Footer}>
                  <Button mode="dark" size="small">
                    {each?.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={s.cta}>
        <Image
          src={ctaEllipse}
          role="presentation"
          alt="ellipse"
          className={s.cta__Ellipse}
        />
        <h2>Ready to start your AI journey with us?</h2>
        <p>
          Simple, transparent pricing. No setup fees or contracts. Try without a
          credit card, cancel anytime.
        </p>
        <div>
          <Button mode="dark" size="medium" icon="arrow" iconPosition="right">
            Explore Our Solutions
          </Button>
          <Button mode="light" size="medium" icon="logo" iconPosition="right">
            Book a Demo
          </Button>
        </div>
      </div>
      <footer className={s.footer}>
        <Image
          src={footerEllipse}
          role="presentation"
          alt="ellipse"
          className={s.footer__Ellipse}
        />
        <div className={s.footer__Inner}>
          <nav>
            <ul className={s.footer__NavList}>
              {footerNavItems?.map((item, i) => (
                <li key={i}>
                  <a href="/">{item}</a>
                  {i !== footerNavItems?.length - 1 && <span></span>}
                </li>
              ))}
            </ul>
          </nav>
          <div className={s.footer__Inner__Logo}>
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
          <p className={s.footer__Inner__Text}>
            Our AI models learn and improve over time, delivering increasingly
            accurate results and adapting to changing trends.
          </p>
        </div>
        <div className={s.footer__Inner__Email}>
          <input placeholder="Email Address" />
          <svg
            width="89"
            height="89"
            viewBox="0 0 89 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="44.5" cy="44.5" r="44" stroke="#434A54" />
            <path
              d="M35.666 53.3327L52.3327 36.666"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M35.666 36.666H52.3327V53.3327"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </footer>
    </div>
  );
}
