import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Outfit } from "next/font/google"
<link rel="icon" href="/favicon.ico" sizes="any" />
const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Oguzhan",
  description: "Generated by create next app",
  icons: {
    icon: [
      "/favicon.ico?v=4",
    ],
    apple: [
      "/apple-touch-icon.png?v=4",
    ],
    shortcut: [
      "/apple-touch-icon.png",
    ],
  },
  manifest:"/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
        <link rel="icon" href="/favicon.ico" sizes="any" />
           <Header />
      {children}
      <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}