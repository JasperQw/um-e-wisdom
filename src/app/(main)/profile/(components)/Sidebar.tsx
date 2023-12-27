"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
  const path = usePathname();
  console.log(path);
  return (
    <>
      <nav className="space-y-2">
        <Link
          role="button"
          href="/profile"
          className={`text-sm font-[500] w-[15rem] rounded-lg ${
            path === "/profile" ? "bg-muted" : ""
          } px-4 py-[0.5rem] block`}
        >
          Information
        </Link>
        <Link
          role="button"
          href="/profile/checkout"
          className={`text-sm font-[500] w-[15rem] rounded-lg ${
            path === "/profile/checkout" ? "bg-muted" : ""
          } px-4 py-[0.5rem] block`}
        >
          Checkouts
        </Link>
        <Link
          role="button"
          href="/profile/return"
          className={`text-sm font-[500] w-[15rem] rounded-lg ${
            path === "/profile/return" ? "bg-muted" : ""
          } px-4 py-[0.5rem] block`}
        >
          Returns
        </Link>

        <Link
          role="button"
          href="/profile/hold"
          className={`text-sm font-[500] w-[15rem] rounded-lg ${
            path === "/profile/hold" ? "bg-muted" : ""
          } px-4 py-[0.5rem] block`}
        >
          Holds
        </Link>
        <Link
          role="button"
          href="/profile/room_booking"
          className={`text-sm font-[500] w-[15rem] rounded-lg ${
            path === "/profile/room_booking" ? "bg-muted" : ""
          } px-4 py-[0.5rem] block`}
        >
          Room Booking
        </Link>
      </nav>
    </>
  );
}
