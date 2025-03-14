import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar/Header";
import BackToTop from "@/components/BackToTop/BackToTop";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata = {
  title: {
    default: "Berkcan Küçükoğlu",
    template: "%s - Berkcan Küçükoğlu"
  },
  description: "Berkcan Küçükoğlu combines engineering and software to deliver innovative and impactful solutions. Explore his portfolio for projects and insights.",
  creator: "Berkcan Küçükoğlu",
  category: "Portfolio",
  keywords: "Berkcan Küçükoğlu, Software Engineer, Full-Stack Developer, Engineering and Software, Web Development, Software Solutions, , Traffic Studies, Transportation Engineering, Portfolio Website",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://www.berkcankucukoglu.com/",
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable}`}
      >
        {/* background */}
        <div className="fixed inset-0 -z-10">
          <div className="relative h-full w-full bg-slate-950">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>
        </div>

        <Header />
        {children}
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
