import Link from "next/link";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Accessibility from "./Accessibility";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-f1ebe1 sticky top-0">
        {" "}
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-gray-800">
              {" "}
              <li>
                <Link href="/">
                  <p className="hover:text-gray-600">Home</p>{" "}
                </Link>
              </li>
              <li>
                <Link href="/posts">
                  <p className="hover:text-gray-600">Posts</p>{" "}
                </Link>
              </li>
              <li>
                <Link href="/user-profile">
                  <p className="hover:text-gray-600">Profile</p>{" "}
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
                <Accessibility />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
