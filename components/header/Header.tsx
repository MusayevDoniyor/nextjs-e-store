import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-8 px-16 bg-slate-800 text-white">
      <div className="flex justify-between items-center">
        <Link href="/" className="font-semibold text-2xl">
          E-STORE
        </Link>

        <nav>
          <ul className="flex gap-7 items-center text-base">
            <li>
              <Link href="/" className="hover:text-cyan-300 transition-colors">
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="hover:text-cyan-300 transition-colors"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                className="hover:text-cyan-300 transition-colors"
              >
                Products
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
