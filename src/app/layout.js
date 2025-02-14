import { Roboto_Mono } from "next/font/google";
// import Navbar from "./components/Navbar";
import { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const roboto = Roboto_Mono({ weight: "500", subsets: ["latin"] });

export const metadata = {
  title: "Food and Travel Social Network",
  description: "Social Network created with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={roboto.className}>{children}</body>
        <header className="flex justify-end items-center p-4 gap-4 h-16"></header>
      </html>
    </ClerkProvider>
  );
}
