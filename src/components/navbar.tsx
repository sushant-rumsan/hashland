"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { ConnectKitButton } from "connectkit";

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
            className="text-orange-600 text-2xl font-bold flex items-center gap-4"
          >
            <img
              src="/logo.png"
              alt=""
              className="w-36"
            />
          </Link>

          {/* Primary Links - Desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className="text-orange-600 hover:text-orange-600 transition duration-150"
            >
              Register Land
            </Link>
            <Link
              href="/records"
              className="text-orange-600 hover:text-orange-600 transition duration-150"
            >
              View Records
            </Link>
            <Link
              href="/transfer"
              className="text-orange-600 hover:text-orange-600 transition duration-150"
            >
              Transfer Ownership
            </Link>

            <Link
            href="/account"
            className="text-orange-600 hover:text-orange-600 transition duration-150"
          >
            Create Username
          </Link>
          </div>
          

          <ConnectKitButton />

          {/* Mobile Menu Button */}
          <button
            onClick={handleToggleMenu}
            className="md:hidden text-orange-600 text-2xl focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden">
            <Link
              href="/"
              className="block px-4 py-2 text-orange-600 hover:bg-blue-600"
            >
              Register Land
            </Link>
            <Link
              href="/records"
              className="block px-4 py-2 text-orange-600 hover:bg-blue-600"
            >
              View Records
            </Link>
            <Link
              href="/transfer"
              className="block px-4 py-2 text-orange-600 hover:bg-blue-600"
            >
              Transfer Ownership
            </Link>
            <Link
              href="/account"
              className="block px-4 py-2 text-orange-600 hover:bg-blue-600 bg-blue-800 mt-2 rounded-lg"
            >
              Create Username
            </Link>
            <ConnectKitButton />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
