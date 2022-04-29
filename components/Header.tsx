import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
