export const metadata = {
  title: "Donate | Othniel's Foundation",
  description:
    "Support Othniel's Foundation by making a donation. Your contribution helps empower communities through education, healthcare, and social programs.",
  alternates: { canonical: "/donate" },
  openGraph: {
    title: "Donate | Othniel's Foundation",
    description:
      "Your donation empowers communities through education, healthcare, and social programs.",
    url: "/donate",
    images: [
      {
        url: "/images/Hero1.webp",
        width: 1200,
        height: 630,
        alt: "Donate to Othniel's Foundation",
      },
    ],
  },
};

export default function DonateLayout({ children }) {
  return <>{children}</>;
}
