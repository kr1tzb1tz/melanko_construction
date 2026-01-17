import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Melanko Construction - General Contracting Services",
  description: "Professional general contracting services including framing, drywall, concrete, plumbing, and more. Quality construction projects delivered on time and on budget.",
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        sizes: '32x32',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon.svg',
        sizes: '16x16',
        type: 'image/svg+xml',
      }
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
