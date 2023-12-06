"use client";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

export default function Sidebar({
  current,
  setCurrent,
}: {
  current: string;
  setCurrent: Dispatch<
    SetStateAction<
      | "comments"
      | "illbookrequest"
      | "publicationSupply"
      | "additionalCopies"
      | "suggestionBox"
    >
  >;
}) {
  const path = usePathname();

  function changeTab(
    tabTitle:
      | "comments"
      | "illbookrequest"
      | "publicationSupply"
      | "additionalCopies"
      | "suggestionBox"
  ) {
    setCurrent(tabTitle);
  }
  return (
    <>
      <nav className="space-y-2">
        <Button
          onClick={() => {
            changeTab("comments");
          }}
          variant={"ghost"}
          className={`text-sm font-[500] w-[15rem] rounded-lg ${
            current === "comments" ? "bg-muted" : ""
          } px-4 py-[0.5rem] block text-start`}
        >
          Comments
        </Button>

        <Button
          onClick={() => {
            changeTab("illbookrequest");
          }}
          variant={"ghost"}
          className={`text-sm font-[500] w-[15rem] rounded-lg ${
            current === "illbookrequest" ? "bg-muted" : ""
          } px-4 py-[0.5rem] block text-start`}
        >
          ILL Book Request
        </Button>

        <Button
          onClick={() => {
            changeTab("publicationSupply");
          }}
          variant={"ghost"}
          className={`text-sm font-[500] w-[15rem] rounded-l ${
            current === "publicationSupply" ? "bg-muted" : ""
          } px-4 py-[0.5rem] block text-start`}
        >
          Publication Supply
        </Button>

        <Button
          onClick={() => {
            changeTab("additionalCopies");
          }}
          variant={"ghost"}
          className={`text-sm font-[500] w-[15rem] rounded-lg ${
            current === "additionalCopies" ? "bg-muted" : ""
          } px-4 py-[0.5rem] block text-start`}
        >
          Requisition Additional Copies
        </Button>

        <Button
          onClick={() => {
            changeTab("suggestionBox");
          }}
          variant={"ghost"}
          className={`text-sm font-[500] w-[15rem] rounded-lg ${
            current === "suggestionBox" ? "bg-muted" : ""
          } px-4 py-[0.5rem] block text-start`}
        >
          Suggestion Box
        </Button>
      </nav>
    </>
  );
}
