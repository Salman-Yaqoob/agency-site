import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="flex cursor-pointer items-center gap-1 transition-all duration-200 active:opacity-95"
    >
      <img src="/logo.png" alt="Logo" className="h-16 w-16 object-fill" />
      <p className="text-2xl font-bold md:text-3xl">Agency</p>
    </Link>
  );
}

export default Logo;
