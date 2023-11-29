"use client";

import { BorrowedBookType } from "@/dto/returnDTO";
import AddedList from "./AddedList";
import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";
import { useToast } from "@/components/ui/use-toast";
import { bookReturn } from "../(functions)/returnFunctions";

export default function ReturnSidebar({
  pendingReturnList,
  setBooks,
  setPendingReturnList,
}: {
  pendingReturnList: BorrowedBookType[];
  setBooks: Dispatch<SetStateAction<BorrowedBookType[]>>;
  setPendingReturnList: Dispatch<SetStateAction<BorrowedBookType[]>>;
}) {
  const { toast } = useToast();
  async function returnBooks() {
    try {
      const status = await bookReturn(pendingReturnList);
      if (status === 200) {
        setPendingReturnList([]);
        toast({
          description: "Successfully return the books!",
        });
      } else {
        throw new Error("Return fails!");
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        description: "Fail to return the books!",
      });
    }
  }

  return (
    <>
      <div className="border-l-[1px] border-l-gray-200 min-w-[25rem] max-w-[25rem] fixed right-0 top-[4rem] bottom-0 p-10 space-y-10 overflow-y-scroll overflow-x-hidden">
        {pendingReturnList.length > 0 ? (
          <>
            {pendingReturnList.map((item: BorrowedBookType) => {
              return (
                <AddedList
                  key={nanoid()}
                  pendingReturnItem={item}
                  setBooks={setBooks}
                  setPendingReturnList={setPendingReturnList}
                />
              );
            })}
            <div className="w-full flex justify-between items-center">
              <p>Total: {setPendingReturnList.length}</p>
              <Button
                onClick={() => {
                  returnBooks();
                }}
              >
                Return
              </Button>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-full h-full flex gap-4 items-center justify-center">
              <h1
                style={{ textOrientation: "upright" }}
                className="font-bold text-4xl [writing-mode:vertical-lr]"
              >
                404
              </h1>
              <div>
                <p className="text-3xl font-extralight">Not</p>
                <p className="text-3xl font-extralight underline underline-offset-8 ">
                  Found
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
