"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { MobileMenu } from "./MobileMenu";
import { navigationItems } from "./navigation";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const isActive = (href: string) => {
    if (href.includes("#")) {
      return false;
    }

    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8 xl:px-10">
          {/* Logo */}
          <Link
            href="/"
            className="group flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-4"
            aria-label="Shelter Africa Estate home"
          >
            <span className="text-lg font-extrabold tracking-tighter text-text-primary sm:text-xl">
              SHELTER
            </span>

            <span className="text-lg font-extrabold tracking-tighter text-brand-primary sm:text-xl">
              AFRICA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:block"
            aria-label="Main navigation"
          >
            <ul className="flex items-center gap-8">
              {navigationItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <li key={item.href}>
                    <Link
                        href={item.href}
                        className={`group relative py-2 text-sm font-semibold transition-colors ${
                        active
                          ? "text-brand-primary"
                          : "text-text-secondary hover:text-text-primary"
                      }`}
                    >
                      {item.label}

                      <span
                        className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-brand-primary transition-all duration-200 ${
                          active
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
            >
              Reserve a Plot
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex size-11 items-center justify-center rounded-full text-text-primary transition-colors hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <Menu
              size={24}
              strokeWidth={2}
              aria-hidden="true"
            />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}