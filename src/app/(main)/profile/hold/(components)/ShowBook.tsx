"use client";

import { Button } from "@/components/ui/button";
import { HoldRequestType } from "@/dto/holdDTO";
import { MinusCircleIcon } from "lucide-react";
import moment from "moment";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { removeHold } from "../(functions)/holdFunctions";
import { useToast } from "@/components/ui/use-toast";
import { Dispatch, SetStateAction } from "react";

export default function ShowBook({
  book,
  setBooks,
}: {
  book: HoldRequestType;
  setBooks: Dispatch<SetStateAction<HoldRequestType[]>>;
}) {
  const { toast } = useToast();

  async function removeFromHold() {
    try {
      const status: number = await removeHold(book.id);
      if (status === 200) {
        setBooks((prev) => {
          return prev.filter((p) => {
            return p.id !== book.id;
          });
        });
        toast({
          description: "Successfully remove book from holding!",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Fail to remove book from holding!",
      });
    }
  }
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="relative min-w-[12rem] max-w-[12rem] h-[14rem] mb-4 rounded-lg z-[-10]">
          <Image src={book.bookImage} alt="image" fill sizes={"100%"} />
        </div>
        <div className="flex items-center">
          <div>
            <h1 className="w-[12rem] line-clamp-1 text-sm">{book.name}</h1>
            <div>
              <p className="text-xs text-gray-700">{book.library}</p>
              {book.from && book.to ? (
                <p className="text-xs text-gray-700">
                  {moment(book.from).format("YYYY-MM-DD")} to{" "}
                  {moment(book.to).format("YYYY-MM-DD")}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <Dialog>
            <DialogTrigger>
              <MinusCircleIcon className="cursor-pointer" size={18} />
            </DialogTrigger>
            <DialogContent className="flex flex-col items-center">
              <DialogHeader className="mb-5 flex flex-col items-center">
                <DialogTitle>Are you sure to remove from holding?</DialogTitle>
                <DialogDescription>
                  This action cannot be reversed.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant={"ghost"}>Cancel</Button>
                <Button
                  onClick={() => {
                    removeFromHold();
                  }}
                  variant={"destructive"}
                >
                  Confirm
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
