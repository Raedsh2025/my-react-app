import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, ShoppingCartIcon, X } from "lucide-react";
import logo from "../../assets/Logo.svg";
import arrow from "../../assets/arrow-ios-downward-outline.svg";
import { useCart } from "@/Store/use-cart";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cart = useCart((state) => state.cart);
  const closeMenu = () => setIsMenuOpen(false);
  const navigationItems = [
    { label: "Shop Now", href: "/shop" },
    { label: "Home Furniture", href: "/shop/home-furniture" },
    { label: "Living Room", href: "/shop/living-room" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-[#EEF2FB]/95 backdrop-blur">
      <div className="relative mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          className="shrink-0 rounded-lg transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C900C1]"
          to="/"
          aria-label="العودة إلى الصفحة الرئيسية"
          onClick={closeMenu}
        >
          <img className="h-9 w-auto sm:h-10" src={logo} alt="Furniture store home" />
        </Link>

        <nav
          id="site-navigation"
          className={`${isMenuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col border-b border-black/5 bg-[#EEF2FB] px-4 py-4 shadow-lg md:absolute md:left-1/2 md:right-auto md:top-1/2 md:flex md:-translate-x-1/2 md:-translate-y-1/2 md:flex-row md:border-0 md:bg-transparent md:px-0 md:py-0 md:shadow-none`}
          aria-label="التنقل الرئيسي"
        >
          <ul className="flex flex-col gap-1 md:flex-row md:items-center md:justify-center md:gap-5">
            {navigationItems.map((item) => (
              <li key={`${item.label}-${item.href}`} className="shrink-0">
                <NavLink
                  to={item.href}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `group relative inline-flex w-full items-center justify-between gap-1 rounded-lg px-3 py-2 transition-colors hover:bg-white/70 hover:text-[#C900C1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C900C1] md:w-auto md:px-1 md:py-2 md:hover:bg-transparent after:absolute after:bottom-0 after:left-1 after:h-0.5 after:bg-[#C900C1] after:transition-all after:duration-300 ${
                      isActive ? "after:w-full" : "after:w-0"
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <img
                    src={arrow}
                    alt=""
                    className="h-3 w-3 transition-transform group-hover:translate-y-0.5"
                  />
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-black/10 pt-3 sm:hidden">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="rounded-full border-2 border-[#C900C1] bg-[#C900C1] px-3 py-2 text-center text-sm text-white transition-colors hover:border-black hover:bg-black"
            >
              Log in
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="rounded-full border-2 border-[#C900C1] bg-white px-3 py-2 text-center text-sm text-[#C900C1] transition-colors hover:bg-[#C900C1] hover:text-white"
            >
              Get started
            </Link>
          </div>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            to="/cart"
            className="group relative rounded-lg p-2 transition-colors hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C900C1]"
            aria-label={`Shopping cart with ${cart.length} items`}
            onClick={closeMenu}
          >
            <ShoppingCartIcon className="transition-colors group-hover:text-[#C900C1]" size={21} />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#C900C1] text-xs text-white">
              {cart.length}
            </span>
          </Link>
          <Link
            to="/contact"
            className="hidden rounded-full border-2 border-[#C900C1] bg-[#C900C1] px-3 py-2 text-sm text-white transition-colors hover:border-black hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C900C1] sm:inline-flex sm:px-4"
            onClick={closeMenu}
          >
            Log in
          </Link>
          <Link
            to="/contact"
            className="hidden rounded-full border-2 border-[#C900C1] bg-white px-3 py-2 text-sm text-[#C900C1] transition-colors hover:bg-[#C900C1] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C900C1] sm:inline-flex sm:px-4"
            onClick={closeMenu}
          >
            Get started
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 transition-colors hover:bg-white/70 hover:text-[#C900C1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C900C1] md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation"
            aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
