export const navItems = ["Home", "Solutions", "Our Story", "Resources"];

export const footerNavItems = [...navItems, "Contact Us"];

export const carouselItems = [
  {
    icon: () => (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.66602 13.333H33.3327V31.333C33.3327 32.4376 32.4373 33.333 31.3327 33.333H8.66601C7.56144 33.333 6.66602 32.4376 6.66602 31.333V13.333Z"
          stroke="#18191C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.3327 6.66699H26.666L33.3327 13.3337H6.66602L13.3327 6.66699Z"
          stroke="#18191C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.334 20H20.0007"
          stroke="#18191C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Data Aggregation & Evaluation",
    subtitle:
      "Our intelligent systems collect and analyze information to deliver deep insights.",
  },
  {
    icon: () => (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.5 23.3334C31.0314 19.6196 29.5573 16.1043 27.2369 13.1671C24.9165 10.2298 21.8378 7.98213 18.3333 6.66669V24.6667"
          stroke="#18191C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.99998 25.7333L18.3333 10M22.7833 33.3333H7.59998C7.217 33.3436 6.84218 33.2216 6.53862 32.9878C6.23506 32.7541 6.0213 32.4229 5.93332 32.05L4.99999 28.3333C4.92696 28.0956 4.90804 27.8446 4.94461 27.5987C4.98119 27.3527 5.07233 27.1181 5.21136 26.9119C5.3504 26.7058 5.53379 26.5334 5.74811 26.4073C5.96244 26.2812 6.20225 26.2047 6.44998 26.1833L33.1167 23.3C33.43 23.2537 33.7501 23.2976 34.0393 23.4266C34.3286 23.5556 34.5752 23.7644 34.7501 24.0285C34.9249 24.2926 35.021 24.601 35.0269 24.9177C35.0327 25.2344 34.9483 25.5463 34.7833 25.8167C33.6707 28.0543 31.9611 29.9406 29.8433 31.2672C27.7255 32.5937 25.2821 33.3088 22.7833 33.3333V33.3333Z"
          stroke="#18191C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Implementation & Oversight",
    subtitle:
      "Our platform integrates effortlessly with your infrastructure while continuously optimizing performance.",
  },
  {
    icon: () => (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.3333 35H6.66667C6.22464 35 5.80072 34.8244 5.48816 34.5118C5.17559 34.1993 5 33.7754 5 33.3333V16.6667C5 16.2246 5.17559 15.8007 5.48816 15.4882C5.80072 15.1756 6.22464 15 6.66667 15H15L18.3333 18.3333H33.3333C33.7754 18.3333 34.1993 18.5089 34.5118 18.8215C34.8244 19.134 35 19.558 35 20V21.6667"
          stroke="#18191C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25 31.6667L28.3333 35L35 28.3333"
          stroke="#18191C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.3333 5H10C9.55798 5 9.13406 5.17559 8.8215 5.48816C8.50894 5.80072 8.33334 6.22464 8.33334 6.66667V15H15L18.3333 18.3333H31.6667V8.33333L28.3333 5ZM28.3333 5V8.33333H31.6667L28.3333 5Z"
          stroke="#18191C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Analytics & Reporting",
    subtitle:
      "Access detailed reports and analytics to monitor performance and enhance transparency across processes.",
  },
];

export const pricing = [
  {
    key: "free",
    name: "Free",
    cost: "0",
    features: ["50 Items", "Unlimited Users", "Email Support"],
    cta: "Begin for Free",
  },
  {
    key: "premium",
    name: "Premium",
    cost: "20",
    features: [
      "50 Items",
      "Unlimited Users",
      "Email Support",
      "Live Chat",
      "API & Integrations",
    ],
    cta: "Begin 14-Day Trial",
  },
];
