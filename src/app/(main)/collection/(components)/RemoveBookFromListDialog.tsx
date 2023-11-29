"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Dispatch, SetStateAction, useState } from "react";
import { removeBookFromList } from "../(functions)/collectionFunctions";
import { useToast } from "@/components/ui/use-toast";
import { BookType } from "@/dto/bookDTO";

export default function RemoveBookFromListDialog({
  listName,
  isbn,
  setBooks,
}: {
  listName: string;
  isbn: string;
  setBooks: Dispatch<SetStateAction<BookType[]>>;
}) {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { toast } = useToast();
  async function removeBook(name: string, isbn: string) {
    try {
      const status = await removeBookFromList(name, isbn);
      if (status === 200) {
        setBooks((prev) => {
          return prev.filter((p) => {
            return p.isbn !== isbn;
          });
        });
        toast({
          description: "Successfully removed the book!",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  }
  return (
    <>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
          <Button variant={"outline"} className="flex-1 max-w-[10rem]">
            Remove
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Remove Book</DialogTitle>
          </DialogHeader>
          Are you sure to remove this book?
          <DialogFooter>
            <Button
              onClick={() => {
                removeBook(listName, isbn);
              }}
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
