"use client";

import { Button } from "@/components/ui/button";
import { BorrowedBookType } from "@/dto/returnDTO";
import moment from "moment";
import { nanoid } from "nanoid";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export default function ShowBook({
  book,
  setBooks,
  setPendingReturn,
}: {
  book: BorrowedBookType;
  setBooks: Dispatch<SetStateAction<BorrowedBookType[]>>;
  setPendingReturn: Dispatch<SetStateAction<BorrowedBookType[]>>;
}) {
  function addCheckoutList(book: BorrowedBookType) {
    setPendingReturn((prev) => {
      return [...prev, book];
    });

    setBooks((prev) => {
      return prev.filter((b) => {
        return b.book.code !== book.book.code;
      });
    });
  }
  return (
    <>
      <div key={nanoid()} className="mb-8">
        <div className="flex gap-10 items-center">
          <div className="min-w-[8rem] h-[10rem] relative z-[-10]">
            <Image
              src={book.book.bookImage}
              alt="book_image"
              sizes="100%"
              fill
            />
          </div>
          <div className="space-y-5">
            <h1 className="text-lg font-bold line-clamp-2">{book.book.name}</h1>
            <div className="flex flex-col">
              <div className="flex gap-5 text-sm ">
                <p className="font-semibold">Author(s): </p>
                <div className="flex flex-wrap">
                  {book.book.author.map((a: string, index: number) => {
                    return (
                      <>
                        <div className="flex" key={nanoid()}>
                          <a href={`/book?author=${a}`}>{a}</a>
                          <p>
                            {index === book.book.author.length - 1 ? "" : ", "}
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
                <a href={`/book?author=${book.book.publication}`}>
                  {book.book.publication}
                </a>
              </div>
              <div className="flex gap-5 text-sm ">
                <p className="font-semibold">Publication Date: </p>
                <p>{book.book.publicationDate}</p>
              </div>
              <div className="flex gap-5 text-sm ">
                <p className="font-semibold">ISBN: </p>
                <p>{book.book.isbn}</p>
              </div>
              <div className="flex gap-5 text-sm ">
                <p className="font-semibold">Library: </p>
                <p>{book.book.location}</p>
              </div>
              <div className="flex gap-5 text-sm ">
                <p className="font-semibold">Period: </p>
                <p>
                  {moment(book.start).format("YYYY-MM-DD")} -{" "}
                  {moment(book.end).format("YYYY-MM-DD")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="flex w-[15rem] gap-5">
            <Button
              onClick={() => {
                addCheckoutList(book);
              }}
              variant={"outline"}
              className="flex-1"
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
