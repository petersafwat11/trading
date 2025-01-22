// import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/ui/layout/footer/Footer";
import "./globals.css";
// import { manrope, DMSans }
import Header from "@/ui/layout/header/Header";
export const metadata = {
  title: "Trading",
  description: "Trading courses website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`layout`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
