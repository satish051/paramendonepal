"use client";

import Link from "next/link";
import { Menu, X, Leaf } from "lucide-react";
import { useState } from "react";
import LanguageToggle from "@/components/LanguageToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[var(--color-forest)] text-[var(--color-offwhite)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-[var(--color-leaf)]" />
              <span className="font-bold text-xl tracking-tight text-white">Paramendo Nepal</span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="hover:text-[var(--color-leaf)] transition-colors text-white">Home</Link>
            <Link href="/about" className="hover:text-[var(--color-leaf)] transition-colors text-white">About</Link>
            <Link href="/products" className="hover:text-[var(--color-leaf)] transition-colors text-white">Products</Link>
            <Link href="/community" className="hover:text-[var(--color-leaf)] transition-colors text-white">Community</Link>
            <Link href="/sponsor-a-roof" className="text-[var(--color-earth)] font-bold hover:text-white transition-colors">Sponsor</Link>
            <Link href="/contact" className="hover:text-[var(--color-leaf)] transition-colors text-white">Contact</Link>
            <LanguageToggle />
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[var(--color-leaf)] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[var(--color-forest)] pb-4 px-4 space-y-2">
          <Link href="/" className="block py-2 text-white hover:text-[var(--color-leaf)]" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="block py-2 text-white hover:text-[var(--color-leaf)]" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/products" className="block py-2 text-white hover:text-[var(--color-leaf)]" onClick={() => setIsOpen(false)}>Products</Link>
          <Link href="/community" className="block py-2 text-white hover:text-[var(--color-leaf)]" onClick={() => setIsOpen(false)}>Community</Link>
          <Link href="/sponsor-a-roof" className="block py-2 text-[var(--color-earth)] font-bold" onClick={() => setIsOpen(false)}>Sponsor a Roof</Link>
          <Link href="/contact" className="block py-2 text-white hover:text-[var(--color-leaf)]" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
