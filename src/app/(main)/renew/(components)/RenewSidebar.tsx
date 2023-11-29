"use client";

import AddedList from "./AddedList";
import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";
import { useToast } from "@/components/ui/use-toast";
import { RenewBookType } from "@/dto/renewDTO";
import { bookRenew } from "../(functions)/renewFunctions";

export default function RenewSidebar({
  pendingRenewList,
  setBooks,
  setPendingRenewList,
}: {
  pendingRenewList: RenewBookType[];
  setBooks: Dispatch<SetStateAction<RenewBookType[]>>;
  setPendingRenewList: Dispatch<SetStateAction<RenewBookType[]>>;
}) {
  const { toast } = useToast();
  async function returnBooks() {
    try {
      const status = await bookRenew(pendingRenewList);

      if (status === 200) {
        setPendingRenewList([]);
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
        {pendingRenewList.length > 0 ? (
          <>
            {pendingRenewList.map((item: RenewBookType) => {
              return (
                <AddedList
                  key={nanoid()}
                  pendingRenewItem={item}
                  setBooks={setBooks}
                  setPendingRenewList={setPendingRenewList}
                />
              );
            })}
            <div className="w-full flex justify-between items-center">
              <p>Total: {setPendingRenewList.length}</p>
              <Button
                onClick={() => {
                  returnBooks();
                }}
              >
                Renew
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
