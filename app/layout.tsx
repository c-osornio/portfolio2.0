import "magnific-popup/dist/magnific-popup.css";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import "@/assets/scss/main.scss";
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import AppProviders from "@/components/wrappers/AppProviders";

import favicon from "@/assets/img/logo/fav-logo1.png";

export const metadata: Metadata = {
  title: "Carlos Osornio Enriquez - Portfolio",
  icons: favicon.src,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProviders> {children}</AppProviders>
        <Analytics />
      </body>
    </html>
  );
}
