"use client";

import { Button } from "@/components/ui/button";
import { RenewBookType } from "@/dto/renewDTO";
import { Dispatch, SetStateAction } from "react";

export default function AddedList({
  pendingRenewItem,
  setBooks,
  setPendingRenewList,
}: {
  pendingRenewItem: RenewBookType;
  setBooks: Dispatch<SetStateAction<RenewBookType[]>>;
  setPendingRenewList: Dispatch<SetStateAction<RenewBookType[]>>;
}) {
  function removePendingReturn() {
    setPendingRenewList((prev) => {
      return prev.filter((p: RenewBookType) => {
        return p.book.code !== pendingRenewItem.book.code;
      });
    });
    setBooks((prev) => {
      return [...prev, pendingRenewItem];
    });
  }
  return (
    <>
      <div className="w-full">
        <h1 className="font-semibold mb-3">{pendingRenewItem.book.name}</h1>
        <Button
          onClick={() => {
            removePendingReturn();
          }}
          className="mt-3"
          variant={"outline"}
        >
          Remove
        </Button>
      </div>
    </>
  );
}
