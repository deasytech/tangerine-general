import type { Metadata } from "next";
import "./globals.css";
import {
  gilroyBlack,
  gilroyBold,
  gilroyLight,
  gilroyMedium,
  gilroyRegular,
  gilroySemiBold,
} from "@/app/font/font";

export const metadata: Metadata = {
  title: "Tangerine General Insurance",
  description:
    "At Tangerine General, we're more than just an insurance company - we're your committed ally on the path to a brighter future. With a focus on deep consumer insights and cutting-edge technology, we've tailored our products to meet the diverse needs of our customers.",
  assets: "/images/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gilroyRegular.variable} ${gilroyBlack.variable} ${gilroyBold.variable} ${gilroyLight.variable} ${gilroyMedium.variable} ${gilroySemiBold.variable}`}
      >
        <main className="relative overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
