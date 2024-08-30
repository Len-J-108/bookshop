import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/header-component";
import CartDrawerComponent from "@/components/cart-drawer-component";
import CartProvider from "@/context/cart-context/cart-context-provider";
import Genres from "@/components/genres-component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "e commerce project",
  description: "fullstack ecommerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <CartProvider>
          <div id="wrapperAll" className="h-full">
            <HeaderComponent />
            <Genres />
            <CartDrawerComponent />
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
