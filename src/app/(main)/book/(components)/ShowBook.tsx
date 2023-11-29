"use client";
import { BookType } from "@/dto/bookDTO";
import BookDialog from "./BookDialog";
import { nanoid } from "nanoid";

export default function ShowBook({ book }: { book: BookType }) {
  return (
    <>
      <div className="flex gap-10 items-center">
        <BookDialog book={book} />
        <div className="space-y-5">
          <h1 className="text-lg font-bold line-clamp-2">{book.name}</h1>
          <div className="flex flex-col">
            <div className="flex gap-5 text-sm">
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
              <a href={`/book?publication=${book.publication}`}>
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
    </>
  );
}
