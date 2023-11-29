"use client";

import { BookType } from "@/dto/bookDTO";
import { nanoid } from "nanoid";
import BookDialog from "./BookDialog";
import { Dispatch, SetStateAction } from "react";
import RemoveBookFromListDialog from "./RemoveBookFromListDialog";

export default function ShowBook({
  listName,
  books,
  setBooks,
}: {
  listName: string;
  books: BookType[];
  setBooks: Dispatch<SetStateAction<BookType[]>>;
}) {
  return (
    <>
      {books.map((book) => {
        return (
          <div key={nanoid()}>
            <div className="flex gap-10 items-center">
              <BookDialog book={book} />
              <div className="space-y-5">
                <h1 className="text-lg font-bold line-clamp-2">{book.name}</h1>
                <div className="flex flex-col">
                  <div className="flex gap-5 text-sm ">
                    <p className="font-semibold">Author(s): </p>
                    <div className="flex flex-wrap">
                      {book.author.map((a: string, index: number) => {
                        return (
                          <>
                            <div className="flex" key={nanoid()}>
                              <a href={`/book?author=${a}`}>{a}</a>
                              <p>
                                {index === book.author.length - 1 ? "" : ", "}
                                &nbsp;
                              </p>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex gap-5 text-sm ">
                    <p className="font-semibold">Publication: </p>
                    <a href={`/book?author=${book.publication}`}>
                      {book.publication}
                    </a>
                  </div>
                  <div className="flex gap-5 text-sm ">
                    <p className="font-semibold">Publication Date: </p>
                    <p>{book.publicationDate}</p>
                  </div>
                  <div className="flex gap-5 text-sm ">
                    <p className="font-semibold">ISBN: </p>
                    <p>{book.isbn}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <RemoveBookFromListDialog
                listName={listName}
                setBooks={setBooks}
                isbn={book.isbn}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
