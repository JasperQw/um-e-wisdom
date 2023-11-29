"use client";

import { Separator } from "@/components/ui/separator";
import ShowBook from "./(components)/ShowBook";

import RenewSidebar from "./(components)/RenewSidebar";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { getRenewables } from "./(functions)/renewFunctions";
import { RenewBookType } from "@/dto/renewDTO";

export default function Return() {
  const [books, setBooks] = useState<RenewBookType[]>([]);
  const [pendingRenew, setPendingRenew] = useState<RenewBookType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const books: RenewBookType[] = await getRenewables();
        setBooks(books);
      } catch (error) {
        console.log(error);
      } finally {
      }
    })();
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
            <h1 className="text-lg font-[500]">Renew</h1>
            <p className="text-sm font-[300] tracking-wide">
              Select and renew the books.
            </p>
          </div>
          <Separator className="my-8" />
          <div className={`${books.length > 0 ? "" : "flex-1"}`}>
            {books.length > 0 ? (
              books.map((book) => {
                return (
                  <ShowBook
                    key={nanoid()}
                    book={book}
                    setBooks={setBooks}
                    setPendingRenew={setPendingRenew}
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
      <RenewSidebar
        pendingRenewList={pendingRenew}
        setBooks={setBooks}
        setPendingRenewList={setPendingRenew}
      />
    </>
  );
}
