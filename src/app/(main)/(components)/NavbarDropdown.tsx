"use client";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  ClipboardCheck,
  FileQuestion,
  LogOut,
  LucideCircleDollarSign,
  RecycleIcon,
  Send,
  ShoppingCart,
  Star,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function NavbarDropdown({ studentId }: { studentId: string }) {
  const router = useRouter();
  async function logout() {
    try {
      const req = await fetch("/api/logout");
      const res = await req.json();
      if (res.status === 200) {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="font-normal text-sm flex gap-5 items-center">
        {studentId} <ChevronDown width={12} height={12} />
      </DropdownMenuTrigger>
      <DropdownMenuContent onCloseAutoFocus={(e) => e.preventDefault()}>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={"/profile"}>
            <div className="flex gap-4 items-center">
              <User width={18} height={18} />
              <p>Profile</p>
            </div>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={"/cart"}>
            <div className="flex gap-4 items-center">
              <ShoppingCart width={18} height={18} />
              <p>Cart</p>
            </div>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={"/collection"}>
            <div className="flex gap-4 items-center">
              <Star width={18} height={18} />
              <p>Collection</p>
            </div>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <div className="flex gap-4 items-center w-full">
              <ClipboardCheck width={18} height={18} />
              <p>Actions</p>
            </div>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem
                asChild
                className="flex gap-4 items-center w-full cursor-pointer"
              >
                <Link href="/return">
                  {" "}
                  <Send width={18} height={18} /> Return
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="flex gap-4 items-center w-full cursor-pointer"
              >
                <Link href="/renew">
                  {" "}
                  <RecycleIcon width={18} height={18} /> Renew
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-4 items-center w-full cursor-pointer">
                <LucideCircleDollarSign width={18} height={18} />
                <p>Payment</p>
              </DropdownMenuItem>

              <DropdownMenuItem
                asChild
                className="flex gap-4 items-center w-full cursor-pointer"
              >
                <Link href="/request">
                  {" "}
                  <FileQuestion width={18} height={18} /> Request
                </Link>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <DropdownMenuItem
          className="cursor-pointer"
          onClick={async () => {
            await logout();
          }}
        >
          <div className="flex gap-4 items-center">
            <LogOut width={18} height={18} />
            <p>Logout</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
