"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavbarDropdown from "./NavbarDropdown";
import NavSearchBar from "./NavSearchBar";
import NavbarLogo from "./NavbarLogo";

export default function NavBar() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [studentId, setStudentId] = useState<string>("");

  async function getStudentId() {
    try {
      setIsLoading(true);
      const req = await fetch("/api/get_cookie_data");
      const res = await req.json();
      if (res.status === 200) {
        setStudentId(res.studentId);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getStudentId();
  }, []);

  return (
    <div className="h-[4rem] left-0 right-0 fixed flex justify-between items-center px-[4rem] tracking-tight bg-clip-padding backdrop-filter backdrop-blur-sm border border-b-[1px] ">
      <div className="flex gap-3 ">
        {/* <a href={"/book"}>UM e-Wisdom</a> */}
        <NavbarLogo />
      </div>
      {studentId === "" ? (
        <NavSearchBar EBSCOEnable={false} />
      ) : (
        <NavSearchBar EBSCOEnable={true} />
      )}

      <div>
        {studentId === "" && isLoading === false ? (
          <Link href={"/login"}>Login</Link>
        ) : isLoading ? (
          <NavbarDropdown studentId={"Loading..."} />
        ) : (
          <NavbarDropdown studentId={studentId} />
        )}
      </div>
    </div>
  );
}
