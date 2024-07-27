import Image from "next/image";
import Link from "next/link";
import React from "react";
import DialogDemo from "@/components/Dropdown";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Homepage</h1>

      <p>If you can see this then you have logged in!</p>
    </main>
  );
}
