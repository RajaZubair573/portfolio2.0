import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import DisableScrollRestoration from "@/components/disable-scroll-restoration";

export const metadata: Metadata = {
  title: "Raja Zubair | Portfolio",
  description:
    "UI/UX Designer & Webflow Developer crafting premium digital experiences.",
  openGraph: {
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Raja Zubair Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Raja Zubair | Portfolio",
    description: "UI/UX Designer & Webflow Developer crafting premium digital experiences.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/svgs/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Rajdhani:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#06060a] text-slate-200 min-h-screen font-mono">
        <Header />
        {children}
        <Footer />
        <Toaster
          position="top-right"
          reverseOrder={true}
          gutter={12}
          toastOptions={{
            className: "bg-[#0f0f18] text-slate-200 border border-white/10",
            style: {
              padding: "12px 20px",
              borderRadius: "12px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              fontSize: "14px",
              fontWeight: "600",
            },
            success: {
              iconTheme: { primary: "#22C55E", secondary: "#DCFCE7" },
              duration: 3000,
            },
            error: {
              iconTheme: { primary: "#EF4444", secondary: "#FEE2E2" },
              duration: 4000,
            },
          }}
        />
      </body>
    </html>
  );
}
