import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/posts"}>Posts</Link>
        <Link href={"/users"}>Users</Link>
      </nav>
    </header>
  );
}
