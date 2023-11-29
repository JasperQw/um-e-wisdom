"use client";

import { Separator } from "@/components/ui/separator";
import ShowBook from "./(components)/ShowBook";
import { useEffect, useState } from "react";
import { BookType } from "@/dto/bookDTO";
import { getCartBook } from "./(functions)/cartFunctions";
import CartSidebar from "./(components)/CartSidebar";
import { PendingCheckoutType } from "@/dto/cartDTO";
import { nanoid } from "nanoid";

export default function Cart() {
  const [books, setBooks] = useState<BookType[]>([]);
  const [pendingCheckout, setPendingCheckout] = useState<PendingCheckoutType[]>(
    []
  );
  useEffect(() => {
    try {
      (async () => {
        const books: BookType[] = await getCartBook();
        setBooks(books);
      })();
    } catch (error) {
      console.log(error);
    } finally {
    }
  }, []);
  return (
    <>
      <div className={`pr-[25rem] w-full ${books.length > 0 ? "" : "h-full"}`}>
        <div
          className={`w-full p-10 ${
            books.length > 0 ? "" : "h-full flex flex-col"
          }`}
        >
          <div>
            <h1 className="text-lg font-[500]">Cart</h1>
            <p className="text-sm font-[300] tracking-wide">
              All pending borrow books.
            </p>
          </div>
          <Separator className="my-8" />
          <div className={`${books.length > 0 ? "" : "flex-1"}`}>
            {books.length > 0 ? (
              books.map((book) => {
                return (
                  <ShowBook
                    book={book}
                    key={nanoid()}
                    setBooks={setBooks}
                    setPendingCheckout={setPendingCheckout}
                  />
                );
              })
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <h1 className="font-bold text-4xl">404</h1>
                <p className="text-lg">Books not found!</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <CartSidebar
        pendingCheckoutList={pendingCheckout}
        setBooks={setBooks}
        setPendingCheckoutList={setPendingCheckout}
      />
    </>
  );
}
