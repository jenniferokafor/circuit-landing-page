import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Circuit | AI-Driven Innovation",
  description:
    "Unlock the potential of AI-powered analytics and automation for next-level business growth.",
  openGraph: {
    title: "Circuit | AI-Driven Innovation",
    description:
      "Unlock the potential of AI-powered analytics and automation for next-level business growth.",
    url: "https://circuit-jen-portfolio-project.netlify.app",
    siteName: "Circuit",
    images: [
      {
        url: "https://ik.imagekit.io/dbvwrhg1jc/circuit-og-image.png",
        width: 1200,
        height: 630,
        alt: "Circuit Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Circuit | AI-Driven Innovation",
    description:
      "Unlock the potential of AI-powered analytics and automation for next-level business growth.",
    images: ["https://ik.imagekit.io/dbvwrhg1jc/circuit-og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
