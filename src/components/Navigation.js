'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Employment', href: '/employment' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row: Logo centered, Est 1986 on right */}
        <div className="relative flex justify-center items-center pt-4 pb-2">
          {/* Logo - centered */}
          <Link href="/" className="flex flex-col items-center hover:opacity-80 transition-opacity duration-300">
            <Image
              src="/logo.svg"
              alt="Melanko Construction Logo"
              width={80}
              height={80}
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
            />
          </Link>

          {/* Est 1986 - positioned far right */}
          <span className="absolute right-0 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#000000] tracking-wide hidden sm:block">
            Est 1986
          </span>

          {/* Mobile menu button - positioned far right on mobile */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#000000] focus:outline-none focus:text-[#000000] transition-colors duration-300"
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                  }`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Desktop Navigation - centered below logo */}
        <div className="hidden md:flex justify-center items-center pb-3">
          <div className="flex items-baseline space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#000000] px-4 py-2 text-sm font-medium transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#000000] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-700 hover:text-[#000000] block px-3 py-2 text-base font-medium transition-all duration-300 transform ${
                  isMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-[-10px] opacity-0'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
