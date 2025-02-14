import Link from "next/link";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-f1ebe1 sticky top-0">
        {" "}
        {/* Soft cream background */}
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-gray-800">
              {" "}
              {/* Dark gray text */}
              <li>
                <Link href="/">
                  <p className="hover:text-gray-600">Home</p>{" "}
                  {/* Slightly lighter gray on hover */}
                </Link>
              </li>
              <li>
                <Link href="/posts">
                  <p className="hover:text-gray-600">Posts</p>{" "}
                  {/* Hover effect */}
                </Link>
              </li>
              <li>
                <ClerkProvider>
                  <SignedOut>
                    <SignInButton />
                    <SignUpButton />
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </ClerkProvider>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
