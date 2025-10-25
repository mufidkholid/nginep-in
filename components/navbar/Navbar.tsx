import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <span className="text-2xl font-extrabold text-gray-800 tracking-tight">
            Nginep<span className="text-indigo-600">.in</span>
          </span>
        </Link>

        {/* Links + Right Actions */}
        <NavLink />
      </nav>
    </header>
  );
};

export default Navbar;
