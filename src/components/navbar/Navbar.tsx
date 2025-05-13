import { Menu } from "lucide-react";
import Logo from "./Logo";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full backdrop-blur-3xl">
      <nav className="sec-container flex items-center justify-between gap-16 py-2">
        <Logo />
        <div className="flex flex-1 items-center justify-end gap-2 px-8 py-2 lg:justify-between">
          <ul className="*:hover:text-light-ptx dark:*:hover:text-dark-ptx text-tx-medium hidden items-center justify-start text-lg font-semibold *:text-nowrap **:cursor-pointer md:flex md:gap-3 lg:gap-10">
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
          <button className="secondary-btn">Get Started</button>
          <Menu className="cursor-pointer hover:opacity-90 md:hidden" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
