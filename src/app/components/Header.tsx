import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "./../../../public/logo.png";
import arrow from "./../../../public/arrow.png";

function Header() {
  return (
    <nav className="flex bg-white flex-row justify-between items-center px-6 lg:px-12">
      {/* Left Section */}
      <div className="flex flex-row items-center gap-8">
        {/* Logo */}
        <div>
          <Image
            alt="logo"
            width={100}
            height={100}
            className="object-contain"
            src={logo}
          />
        </div>

        {/* Menu Links */}
        <ul className="hidden lg:flex flex-row gap-4 text-[#0A0B5C]">
          <li className="px-2 py-2 border-b-2 hover:border-[#0A0B5C] border-[#0A0B5C] transition-all">
            <Link href="/">Home</Link>
          </li>
          <li className="px-2 py-2 border-b-2 hover:border-[#0A0B5C] border-transparent transition-all">
            <Link href="/">FAQs</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button className="focus:outline-none">
          <svg
            className="w-6 h-6 text-[#0A0B5C]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Right Button */}
      <button className="hidden lg:flex px-4 py-2 text-[#0A0B5C] hover:text-blue-800 transition-all flex-row items-center justify-center gap-2">
        Book A Call
        <Image
          alt="arrow"
          width={24}
          height={24}
          className="object-contain"
          src={arrow}
        />
      </button>
    </nav>
  );
}

export default Header;
