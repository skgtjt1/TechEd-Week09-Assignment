import Link from "next/link";
// import Burger from "./Burger";
import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

import { auth } from "@clerk/nextjs/server";

export default function Header() {
  const { userID } = auth();

  return (
    <header>
      <nav>
        <Link
          href={"/"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded whitespace-nowrap"
        >
          Home
        </Link>
        <Link
          href={"/posts"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded whitespace-nowrap"
        >
          Posts
        </Link>
        <Link
          href={"/users"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded whitespace-nowrap"
        >
          Users
        </Link>
        <SignedOut>
          <SignUpButton className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded whitespace-nowrap"></SignUpButton>
          <SignInButton className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded whitespace-nowrap"></SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        {/* <Burger></Burger> */}
      </nav>
    </header>
  );
}
