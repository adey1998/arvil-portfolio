// app/layout.tsx
import "../styles/globals.css";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Arvil Dey | Software Engineer | Tech Sales | Cancer Detection R&D",
  description:
    "Arvil is a software engineer with tech sales experience, passionate about cancer detection R&D and building impactful AI tools in healthcare.",
  keywords: [
    "arvil dey",
    "cancer detection r&d",
    "software engineer",
    "tech sales",
    "ai in healthcare",
    "arvildey.com",
  ],
  authors: [{ name: "Arvil Dey" }],
  openGraph: {
    title: "Arvil Dey | Software Engineer | Tech Sales | Cancer Detection R&D",
    description:
      "Arvil Dey is a full-stack engineer focused on cancer detection R&D, tech sales, and building AI-powered healthcare solutions.",
    url: "https://arvildey.com",
    siteName: "Arvil Dey",
    type: "website",
    images: [
      {
        url: "https://arvildey.com/portfolio-pic.jpg",
        width: 1200,
        height: 630,
        alt: "Arvil Dey – Software Engineer | Tech Sales | Cancer Detection R&D",
      },
    ],
  }
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
