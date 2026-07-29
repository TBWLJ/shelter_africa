import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerNavigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Properties",
    href: "/properties",
  },
  {
    label: "Why Invest",
    href: "/#why-invest",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-10">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:gap-16">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-4 focus-visible:ring-offset-black"
              aria-label="Shelter Africa Estate home"
            >
              <span className="text-xl font-extrabold tracking-tighter">
                SHELTER
              </span>

              <span className="text-xl font-extrabold tracking-tighter text-brand-primary">
                AFRICA
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-6 text-white/50">
              Explore land ownership opportunities and take the
              next step toward building your future with Shelter
              Africa Estate.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-brand-primary"
            >
              Get in touch

              <ArrowUpRight
                size={17}
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
              Navigation
            </h2>

            <nav
              className="mt-5"
              aria-label="Footer navigation"
            >
              <ul className="space-y-3">
                {footerNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Property */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
              Property
            </h2>

            <div className="mt-5 space-y-3 text-sm text-white/65">
              <p className="font-semibold text-white">
                Shelter Africa 2
              </p>

              <p>
                Abogunde Road
                <br />
                Ogbomoso, Oyo State
                <br />
                Nigeria
              </p>

              <Link
                href="/properties/shelter-africa-2"
                className="inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-brand-primary"
              >
                View property

                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Shelter Africa Estate.
            All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}