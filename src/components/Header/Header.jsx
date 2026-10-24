import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, ShoppingCartIcon, X } from "lucide-react";
import logo from "../../assets/Logo.svg";
import arrow from "../../assets/arrow-ios-downward-outline.svg";
import { useCart } from "@/Store/use-cart";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cart = useCart((state) => state.cart);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navigationItems = [
    { label: "Shop Now", href: "/shop" },
    { label: "Home Furniture", href: "/shop/home-furniture" },
    { label: "Living Room", href: "/shop/living-room" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-[#EEF2FB]/95 backdrop-blur">
      <div className="relative mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:min-h-18 sm:px-6 lg:gap-6">
        <Link
          className="shrink-0 rounded-lg transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C900C1]"
          to="/"
          aria-label="العودة إلى الصفحة الرئيسية"
          onClick={closeMenu}
        >
          <img className="h-8 w-auto sm:h-10" src={logo} alt="Furniture store home" />
        </Link>

        <nav
          id="site-navigation"
          className={`${isMenuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col border-b border-black/5 bg-[#EEF2FB] px-4 py-4 shadow-lg lg:static lg:flex lg:w-auto lg:flex-row lg:items-center lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
          aria-label="التنقل الرئيسي"
        >
          <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:justify-center lg:gap-4 xl:gap-5">
            {navigationItems.map((item) => (
              <li key={`${item.label}-${item.href}`} className="shrink-0">
                <NavLink
                  to={item.href}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `group relative inline-flex w-full items-center justify-between gap-1 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/70 hover:text-[#C900C1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C900C1] lg:w-auto lg:px-1 lg:py-2 lg:hover:bg-transparent after:absolute after:bottom-0 after:left-1 after:h-0.5 after:bg-[#C900C1] after:transition-all after:duration-300 ${
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
          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-black/10 pt-3 lg:hidden">
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

        <div className="flex shrink-0 items-center gap-1 sm:gap-3">
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
            className="hidden rounded-full border-2 border-[#C900C1] bg-[#C900C1] px-3 py-2 text-sm text-white transition-colors hover:border-black hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C900C1] lg:inline-flex lg:px-4"
            onClick={closeMenu}
          >
            Log in
          </Link>
          <Link
            to="/contact"
            className="hidden rounded-full border-2 border-[#C900C1] bg-white px-3 py-2 text-sm text-[#C900C1] transition-colors hover:bg-[#C900C1] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C900C1] lg:inline-flex lg:px-4"
            onClick={closeMenu}
          >
            Get started
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 transition-colors hover:bg-white/70 hover:text-[#C900C1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C900C1] lg:hidden"
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
