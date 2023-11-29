"use client";

import { Separator } from "@/components/ui/separator";
import ShowBook from "./(components)/ShowBook";
import { useEffect, useState } from "react";
import { BookType } from "@/dto/bookDTO";
import { getCollectionBooks } from "./(functions)/collectionFunctions";

import CollectionSidebar from "./(components)/CollectionSidebar";

export default function Collection() {
  const [books, setBooks] = useState<BookType[]>([]);

  const [selectedList, setSelectedList] = useState<string>("Temporary List");
  useEffect(() => {
    (async () => {
      try {
        const collectedBooks: BookType[] = await getCollectionBooks(
          selectedList
        );
        setBooks(collectedBooks);
      } catch (error) {
        console.log(error);
      } finally {
      }
    })();
  }, [selectedList]);
  return (
    <>
      <CollectionSidebar
        selectedList={selectedList}
        setSelectedList={setSelectedList}
      />
      <div className={`pl-[20rem] w-full ${books.length > 0 ? "" : "h-full"}`}>
        <div
          className={`p-10 w-full ${
            books.length > 0 ? "" : "h-full flex flex-col"
          }`}
        >
          <div>
            <h1 className="text-lg font-[500]">Collection</h1>
            <p className="text-sm font-[300] tracking-wide">
              Your personal books collection.
            </p>
          </div>
          <Separator className="my-8" />
          <div className={`${books.length > 0 ? "" : "flex-1"}`}>
            {books.length > 0 ? (
              <ShowBook
                books={books}
                setBooks={setBooks}
                listName={selectedList}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <h1 className="font-bold text-4xl">404</h1>
                <p className="text-lg">Books not found!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
