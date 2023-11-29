"use client";

import { Button } from "@/components/ui/button";
import { BookAttributes, BorrowedBookType } from "@/dto/returnDTO";
import { Dispatch, SetStateAction } from "react";

export default function AddedList({
  pendingReturnItem,
  setBooks,
  setPendingReturnList,
}: {
  pendingReturnItem: BorrowedBookType;
  setBooks: Dispatch<SetStateAction<BorrowedBookType[]>>;
  setPendingReturnList: Dispatch<SetStateAction<BorrowedBookType[]>>;
}) {
  function removePendingReturn() {
    setPendingReturnList((prev) => {
      return prev.filter((p: BorrowedBookType) => {
        return p.book.code !== pendingReturnItem.book.code;
      });
    });
    setBooks((prev) => {
      return [...prev, pendingReturnItem];
    });
  }
  return (
    <>
      <div className="w-full">
        <h1 className="font-semibold mb-3">{pendingReturnItem.book.name}</h1>
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
