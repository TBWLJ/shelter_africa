"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { navigationItems } from "./navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      id="mobile-navigation"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
      />

      <div className="absolute right-0 top-0 flex h-full w-[min(90%,400px)] flex-col bg-white shadow-2xl">
        <div className="flex h-20 items-center justify-between border-b border-border px-5">
          <Link
            href="/"
            className="text-lg font-extrabold tracking-[-0.04em]"
            onClick={onClose}
          >
            SHELTER
            <span className="text-brand-primary">
              AFRICA
            </span>
          </Link>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="flex size-11 items-center justify-center rounded-full text-text-primary transition-colors hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            aria-label="Close navigation menu"
          >
            <X
              size={24}
              strokeWidth={2}
              aria-hidden="true"
            />
          </button>
        </div>

        <nav
          className="flex flex-1 flex-col px-5 py-8"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-xl px-4 py-4 text-lg font-semibold text-text-primary transition-colors hover:bg-surface-muted hover:text-brand-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto border-t border-border pt-6">
            <Link
              href="/contact"
              onClick={onClose}
              className="flex min-h-12 w-full items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
            >
              Reserve a Plot
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}