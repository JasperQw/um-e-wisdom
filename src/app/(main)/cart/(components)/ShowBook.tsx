"use client";

import { Button } from "@/components/ui/button";
import BookDialog from "./BookDialog";
import { BookType } from "@/dto/bookDTO";
import { nanoid } from "nanoid";
import { Dispatch, SetStateAction, useState } from "react";
import { PendingCheckoutType } from "@/dto/cartDTO";
import moment from "moment";
import { removeCart } from "../(functions)/cartFunctions";
import { useToast } from "@/components/ui/use-toast";

export default function ShowBook({
  book,
  setPendingCheckout,
  setBooks,
}: {
  book: BookType;
  setPendingCheckout: Dispatch<SetStateAction<PendingCheckoutType[]>>;
  setBooks: Dispatch<SetStateAction<BookType[]>>;
}) {
  const { toast } = useToast();

  function addCheckoutList(book: BookType) {
    const currentDate = moment();
    const from = currentDate.format("YYYY-MM-DD");
    const to = currentDate.add(30, "days").format("YYYY-MM-DD");
    setPendingCheckout((prev) => {
      return [...prev, { book, from, to }];
    });

    setBooks((prev) => {
      return prev.filter((b) => {
        return b.code !== book.code;
      });
    });
  }

  async function removeFromCart(code: string) {
    try {
      const status = await removeCart(code);
      if (status === 200) {
        setBooks((prev) => {
          return prev.filter((b) => {
            return b.code !== code;
          });
        });
        toast({
          description: "Successfully removed book from cart!",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  return (
    <>
      <div key={nanoid()} className="mb-8">
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
              <div className="flex gap-5 text-sm items-center">
                <p className="font-semibold">Location: </p>
                <p>
                  {book.location &&
                    book.location[0].library +
                      " / " +
                      book.location[0].shelfLocation +
                      " / " +
                      book.location[0].shelfNumber +
                      " / " +
                      book.location[0].material}
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
            <Button
              onClick={() => {
                removeFromCart(book.code);
              }}
              variant={"outline"}
              className="flex-1"
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
