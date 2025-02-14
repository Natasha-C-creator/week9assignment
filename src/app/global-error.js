"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <>
      <p>{error.message}</p>
      <button
        onClick={() => {
          reset();
        }}
      >
        Try again
      </button>
      <Link href={"/"} className="text-emerald-500">
        Oops! You have found a page that does not exist. Try going back Home.
      </Link>
    </>
  );
}
