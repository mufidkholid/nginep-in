"use client";
import clsx from "clsx";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const NavLink = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <div className="flex items-center gap-4">
      {/* Desktop Navigation */}
      <div
        className={clsx("absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md md:shadow-none md:static md:w-auto md:bg-transparent md:border-0 md:block transition-all duration-300 ease-in-out", {
          "opacity-100 translate-y-0 visible": open,
          "opacity-0 -translate-y-3 invisible md:visible md:translate-y-0 md:opacity-100": !open,
        })}
      >
        <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 text-sm font-medium uppercase p-5 md:p-0 text-gray-800">
          {["Home", "About", "Room", "Contact"].map((item) => (
            <li key={item}>
              <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="block py-2 md:py-0 hover:text-indigo-600 transition-colors" onClick={() => setOpen(false)}>
                {item}
              </Link>
            </li>
          ))}

          {session && (
            <>
              <li>
                <Link href="/my-reservation" className="block py-2 hover:text-indigo-600 transition-colors" onClick={() => setOpen(false)}>
                  My Reservation
                </Link>
              </li>
              {session.user.role === "admin" && (
                <>
                  <li>
                    <Link href="/admin/dashboard" className="block py-2 hover:text-indigo-600 transition-colors" onClick={() => setOpen(false)}>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/room" className="block py-2 hover:text-indigo-600 transition-colors" onClick={() => setOpen(false)}>
                      Manage Room
                    </Link>
                  </li>
                </>
              )}
            </>
          )}

          {!session ? (
            <li className="mt-2 md:mt-0">
              <Link href="/signin" className="inline-block py-2.5 px-6 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:shadow-lg transition-all duration-300" onClick={() => setOpen(false)}>
                Sign In
              </Link>
            </li>
          ) : (
            <li className="md:hidden mt-2">
              <button
                onClick={() => {
                  signOut();
                  setOpen(false);
                }}
                className="w-full py-2.5 px-4 bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-md transition-all"
              >
                Sign Out
              </button>
            </li>
          )}
        </ul>
      </div>

      {/* Avatar + Sign Out (Right Side) */}
      {session?.user && (
        <div className="hidden md:flex items-center gap-3 ml-6">
          <Image src={session.user.image || "/avatar.svg"} alt="profile" width={36} height={36} className="rounded-full border border-gray-300" />
          <button onClick={() => signOut()} className="py-2 px-6 bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-md hover:shadow-lg hover:opacity-90 transition-all duration-300">
            Sign Out
          </button>
        </div>
      )}

      {/* Mobile Toggle */}
      <button onClick={() => setOpen(!open)} className="inline-flex items-center justify-center text-gray-700 md:hidden hover:text-indigo-600 transition-all">
        {!open ? <IoMenu className="w-7 h-7" /> : <IoClose className="w-7 h-7" />}
      </button>
    </div>
  );
};

export default NavLink;
