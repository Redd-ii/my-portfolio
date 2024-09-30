// src/components/ClientNavbar.tsx

"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/app/components/ThemeToggle';
import Image from 'next/image';
import DarkPic from '@/assets/images/Logo_Yellow.png';
import LightPic from '@/assets/images/Logo_Blue.png';
import { Menu, Close } from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function ClientNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define animation variants
  const menuVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  };

  return (
    <nav className="fixed w-full bg-white shadow dark:bg-darkBg z-50">
      <div className="flex justify-between items-center px-4 py-2">
        {/* Left Side: Logo and Title */}
        <Link href="/" className="flex items-center">
          {/* Logo Images */}
          <div className="w-12 h-12">
            <Image
              className="block dark:hidden"
              src={LightPic}
              alt="Logo"
              width={48}
              height={48}
            />
            <Image
              className="hidden dark:block"
              src={DarkPic}
              alt="Logo"
              width={48}
              height={48}
            />
          </div>
          {/* Title */}
          <span className="ml-2 text-xl font-bold text-gray-700 dark:text-darkText">
            Ryan Vargas
          </span>
        </Link>

        {/* Right Side: Navigation Links and Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/"
            className="flex items-center text-gray-700 hover:text-gray-900 dark:text-darkText"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="flex items-center text-gray-700 hover:text-gray-900 dark:text-darkText"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="flex items-center text-gray-700 hover:text-gray-900 dark:text-darkText"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="flex items-center text-gray-700 hover:text-gray-900 dark:text-darkText"
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 dark:text-darkText focus:outline-none"
          >
            {isMobileMenuOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial={false}
        animate={isMobileMenuOpen ? 'open' : 'closed'}
        variants={menuVariants}
      >
        <div className="bg-white dark:bg-darkBg px-4 pt-2 pb-4 space-y-2">
          <Link
            href="/"
            className="block text-gray-700 hover:text-gray-900 dark:text-darkText"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-gray-700 hover:text-gray-900 dark:text-darkText"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/projects"
            className="block text-gray-700 hover:text-gray-900 dark:text-darkText"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="block text-gray-700 hover:text-gray-900 dark:text-darkText"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </motion.div>
    </nav>
  );
}
