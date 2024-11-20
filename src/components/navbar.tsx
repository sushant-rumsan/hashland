"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="shadow-lg absolute top-0 left-0 z-10 w-full bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-pink-600 text-2xl font-bold flex items-center gap-4"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem_of_Nepal.svg/1200px-Emblem_of_Nepal.svg.png"
              alt=""
              className="w-8"
            />
            HashLand
          </Link>

          {/* Primary Links - Desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className="text-pink-600 hover:text-pink-600 transition duration-150"
            >
              Register Land
            </Link>
            <Link
              href="/records"
              className="text-pink-600 hover:text-pink-600 transition duration-150"
            >
              View Records
            </Link>
            <Link
              href="/transfer"
              className="text-pink-600 hover:text-pink-600 transition duration-150"
            >
              Transfer Ownership
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/account"
            className="hidden md:inline-block bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-150"
          >
            Create your account
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={handleToggleMenu}
            className="md:hidden text-pink-600 text-2xl focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden">
            <Link
              href="/"
              className="block px-4 py-2 text-pink-600 hover:bg-blue-600"
            >
              Register Land
            </Link>
            <Link
              href="/records"
              className="block px-4 py-2 text-pink-600 hover:bg-blue-600"
            >
              View Records
            </Link>
            <Link
              href="/transfer"
              className="block px-4 py-2 text-pink-600 hover:bg-blue-600"
            >
              Transfer Ownership
            </Link>
            <Link
              href="/account"
              className="block px-4 py-2 text-pink-600 hover:bg-blue-600 bg-blue-800 mt-2 rounded-lg"
            >
              Create your account
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
