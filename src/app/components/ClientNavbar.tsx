// src/components/ClientNavbar.tsx

"use client";

import React from 'react';
import Link from 'next/link';
import ThemeToggle from '@/app/components/ThemeToggle';
import Image from 'next/image';
import DarkPic from '@/assets/images/Logo_Yellow.png';
import LightPic from '@/assets/images/Logo_Blue.png';

export default function ClientNavbar() {
  return (
    <nav className="fixed w-full bg-white shadow dark:bg-darkBg z-50">
      <div className="container mx-auto flex justify-between items-center p-2">
        {/* Left Side: Logo and Title */}
        <Link href="/">
          <div className="flex items-center">
            {/* Logo Images */}
            <div className="w-16 h-16">
              <Image
                className="block dark:hidden"
                src={LightPic}
                alt="Logo"
                width={64}
                height={64}
              />
              <Image
                className="hidden dark:block"
                src={DarkPic}
                alt="Logo"
                width={64}
                height={64}
              />
            </div>
            {/* Title */}
            <span className="ml-2 text-2xl font-bold text-gray-700 dark:text-darkText">
              Ryan Vargas
            </span>
          </div>
        </Link>

        {/* Right Side: Navigation Links and Theme Toggle */}
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="text-gray-700 hover:text-gray-900 dark:text-darkText"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-gray-900 dark:text-darkText"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-gray-700 hover:text-gray-900 dark:text-darkText"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-gray-900 dark:text-darkText"
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
