import { Link } from "react-router-dom";
import {
  ArrowRight,
  AtSign,
  BriefcaseBusiness,
  Camera,
  MessageCircle,
} from "lucide-react";
import logo from "../../assets/logo.svg";

const aboutLinks = [
  { label: "FAQ", to: "/contact" },
  { label: "Affiliates", to: "/contact" },
  { label: "Contact", to: "/contact" },
  { label: "Blog", to: "/about" },
];

const supportLinks = [
  { label: "Apple Pay Payments", to: "/contact" },
  { label: "Returns", to: "/contact" },
  { label: "Shipping", to: "/contact" },
  { label: "Returns Policy", to: "/contact" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com", icon: AtSign },
  { label: "Instagram", href: "https://www.instagram.com", icon: Camera },
  { label: "Twitter", href: "https://twitter.com", icon: MessageCircle },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: BriefcaseBusiness,
  },
];

function FooterLink({ children, to }) {
  return (
    <Link
      to={to}
      className="text-sm text-gray-500 transition-colors hover:text-[#C900C1] focus-visible:outline-2 focus-visible:outline-[#C900C1]"
    >
      {children}
    </Link>
  );
}

function Footer() {
  return (
    <footer className=" mt-20 ">
      <div className=" max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="container mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(260px,1.5fr)_repeat(3,minmax(130px,1fr))]">
          <div className="max-w-md">
            <Link to="/" aria-label="Furniture store home">
              <img src={logo} alt="Furniture store" className="h-9 w-auto" />
            </Link>
            <p className="mt-6 text-sm leading-6 text-gray-500">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <form
              className="mt-5 flex flex-col gap-3 sm:flex-row"
              onSubmit={(event) => event.preventDefault()}
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Enter your email
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="h-12 min-w-0 flex-1 rounded-full border border-gray-300 bg-white px-5 text-sm outline-none transition focus:border-[#C900C1] focus:ring-2 focus:ring-[#C900C1]/20"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="flex h-12 items-center justify-center gap-2 rounded-full bg-black px-6 text-sm font-medium text-white transition-colors hover:bg-[#C900C1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C900C1]"
              >
                Subscribe
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </form>
            <p className="mt-4 text-xs leading-5 text-gray-500">
              By subscribing you agree to with our{" "}
              <Link to="/contact" className="underline hover:text-[#C900C1]">
                Privacy Policy
              </Link>{" "}
              and provide consent to receive updates from our company.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold text-gray-900">About Us</h2>
            {aboutLinks.map((link) => (
              <FooterLink key={link.label} to={link.to}>
                {link.label}
              </FooterLink>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold text-gray-900">
              Customer Support
            </h2>
            {supportLinks.map((link) => (
              <FooterLink key={link.label} to={link.to}>
                {link.label}
              </FooterLink>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold text-gray-900">Follow Us</h2>
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex items-center gap-3 text-sm text-gray-500 transition-colors hover:text-[#C900C1] focus-visible:outline-2 focus-visible:outline-[#C900C1]"
              >
                <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="container mx-auto mt-12 flex flex-col gap-4 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2023 GFirnuture. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/contact" className="hover:text-[#C900C1]">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-[#C900C1]">
              Terms of Service
            </Link>
            <button
              type="button"
              onClick={() => undefined}
              className="hover:text-[#C900C1]"
            >
              Cookies Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
