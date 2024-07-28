"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="py-4 px-6 bg-slate-800 text-white">
      <div className="flex justify-between items-center">
        <Link href="/" className="font-semibold text-2xl">
          E-STORE
        </Link>

        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          {isMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>

        <nav
          className={`lg:flex lg:items-center lg:space-x-7 ${
            isMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <ul className="flex flex-col lg:flex-row gap-7 items-center text-base lg:text-base">
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
