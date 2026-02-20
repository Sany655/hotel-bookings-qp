"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "glass py-4 shadow-sm" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/" className="text-2xl font-serif font-bold tracking-tighter text-primary">
          IEB
        </Link>

        <div className="hidden space-x-8 md:flex">
          <Link href="/rooms" className="text-sm font-medium uppercase tracking-widest hover:text-white text-primary transition-colors">
            Rooms
          </Link>
          <Link href="/amenities" className="text-sm font-medium uppercase tracking-widest hover:text-white text-primary transition-colors">
            Amenities
          </Link>
          <Link href="/about" className="text-sm font-medium uppercase tracking-widest hover:text-white text-primary transition-colors">
            Our Story
          </Link>
          <Link href="/contact" className="text-sm font-medium uppercase tracking-widest hover:text-white text-primary transition-colors">
            Contact
          </Link>
        </div>

        <Link href="/rooms" className="gold-gradient px-8 py-2.5 rounded-full text-white text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
          Book Now
        </Link>
      </div>
    </nav>
  );
}
