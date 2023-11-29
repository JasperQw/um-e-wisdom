"use client";

import { Separator } from "@/components/ui/separator";
import ShowBook from "./(components)/ShowBook";

import ReturnSidebar from "./(components)/ReturnSidebar";
import { useEffect, useState } from "react";
import { BookAttributes, BorrowedBookType } from "@/dto/returnDTO";
import { getBorrowedBooks } from "./(functions)/returnFunctions";
import { nanoid } from "nanoid";

export default function Return() {
  const [books, setBooks] = useState<BorrowedBookType[]>([]);
  const [pendingReturn, setPendingReturn] = useState<BorrowedBookType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const books: BorrowedBookType[] = await getBorrowedBooks();
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
            <h1 className="text-lg font-[500]">Return</h1>
            <p className="text-sm font-[300] tracking-wide">
              Select and return the books.
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
                    setPendingReturn={setPendingReturn}
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
      <ReturnSidebar
        pendingReturnList={pendingReturn}
        setBooks={setBooks}
        setPendingReturnList={setPendingReturn}
      />
    </>
  );
}
