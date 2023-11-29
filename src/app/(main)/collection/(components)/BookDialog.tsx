"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { BookType, LocationType } from "@/dto/bookDTO";
import { nanoid } from "nanoid";
import { columns } from "../../book/(components)/LocationColumns";
import { LocationDataTable } from "../../book/(components)/LocationDataTable";
import BookDialogAction from "../../book/(components)/BookDialogAction";

export default function BookDialog({ book }: { book: BookType }) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="min-w-[8rem] h-[10rem] relative z-[-10]">
          <Image src="/next.svg" alt="book_image" sizes="100%" fill />
        </div>
      </DialogTrigger>
      <DialogContent className="h-[40rem] max-w-[60rem] flex flex-col overflow-scroll">
        <DialogHeader className="flex-grow-0">
          <DialogTitle className="h-fit">Details</DialogTitle>
        </DialogHeader>
        <div className="w-full flex flex-col gap-10 flex-1">
          <div className="w-full flex gap-10">
            <div className="min-w-[10rem] h-[12rem] relative">
              <Image src={book.bookImage} alt="book_image" sizes="100%" fill />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold line-clamp-2 mb-4">
                {book.name}
              </h1>
              <div className="flex gap-5 text-sm ">
                <p className="font-semibold">Author(s): </p>
                {book.author.map((a: string, index: number) => {
                  return (
                    <p key={nanoid()}>
                      {a + (index === book.author.length - 1 ? "" : ", ")}
                    </p>
                  );
                })}
              </div>
              <div className="flex gap-5 text-sm ">
                <p className="font-semibold">Publication: </p>
                <p>{book.publication}</p>
              </div>
              <div className="flex gap-5 text-sm ">
                <p className="font-semibold">Publication Date: </p>
                <p>{book.publicationDate}</p>
              </div>
              <div className="flex gap-5 text-sm ">
                <p className="font-semibold">ISBN: </p>
                <p>{book.isbn}</p>
              </div>
              <div className="flex gap-5 text-sm ">
                <p className="font-semibold">Edition: </p>
                <p>{book.edition}</p>
              </div>
            </div>
          </div>

          <LocationDataTable columns={columns} data={book.location ?? []} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
