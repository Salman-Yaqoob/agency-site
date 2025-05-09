import { Menu } from "lucide-react";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-2 py-2">
      <Logo />
      <div className="flex flex-1 items-center justify-between px-4">
        <ul className="*:hover:text-light-ptx dark:*:hover:text-dark-ptx text-tx-medium hidden items-center justify-start gap-6 text-lg font-semibold *:text-nowrap md:flex">
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/features">Features</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/support">Support</a>
          </li>
        </ul>
        <button className="hidden rounded-2xl border px-4 text-nowrap sm:block">
          Get Started
        </button>
      </div>
      <Menu className="sm:hidden" />
    </nav>
  );
}

export default Navbar;
