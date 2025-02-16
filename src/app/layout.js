import { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Header from "@/components/header";
import Head from "next/head";

import { Roboto_Mono } from "next/font/google";
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
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body className={roboto.className}>
          <Navbar />
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
