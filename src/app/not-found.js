import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1> Oops! This page does not exist. </h1>
      <Link href={"/"} className="bg-blue-400">
        Click here to go back Home
      </Link>
    </>
  );
}
