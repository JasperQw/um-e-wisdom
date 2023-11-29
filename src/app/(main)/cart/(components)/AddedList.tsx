"use client";

import { Button } from "@/components/ui/button";
import { BookType } from "@/dto/bookDTO";
import { PendingCheckoutType } from "@/dto/cartDTO";
import { Dispatch, SetStateAction } from "react";

export default function AddedList({
  pendingCheckoutItem,
  setBooks,
  setPendingCheckoutList,
}: {
  pendingCheckoutItem: PendingCheckoutType;
  setBooks: Dispatch<SetStateAction<BookType[]>>;
  setPendingCheckoutList: Dispatch<SetStateAction<PendingCheckoutType[]>>;
}) {
  function removePendingCheckout() {
    setPendingCheckoutList((prev) => {
      return prev.filter((p: PendingCheckoutType) => {
        return p.book.code !== pendingCheckoutItem.book.code;
      });
    });
    setBooks((prev) => {
      return [...prev, pendingCheckoutItem.book];
    });
  }
  return (
    <>
      <div className="w-full">
        <h1 className="font-semibold mb-3">{pendingCheckoutItem.book.name}</h1>
        <div className="flex font-normal text-sm">
          <p>From</p>
          <p className="flex-1 text-end">{pendingCheckoutItem.from}</p>
        </div>
        <div className="flex font-normal text-sm">
          <p>To</p>
          <p className="flex-1 text-end">{pendingCheckoutItem.to}</p>
        </div>

        <Button
          onClick={() => {
            removePendingCheckout();
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
