"use client";

import { PendingCheckoutType } from "@/dto/cartDTO";
import AddedList from "./AddedList";
import { nanoid } from "nanoid";
import { Dispatch, SetStateAction } from "react";
import { BookType } from "@/dto/bookDTO";
import { Button } from "@/components/ui/button";
import { cartCheckout } from "../(functions)/cartFunctions";
import { useToast } from "@/components/ui/use-toast";

export default function CartSidebar({
  pendingCheckoutList,
  setBooks,
  setPendingCheckoutList,
}: {
  pendingCheckoutList: PendingCheckoutType[];
  setBooks: Dispatch<SetStateAction<BookType[]>>;
  setPendingCheckoutList: Dispatch<SetStateAction<PendingCheckoutType[]>>;
}) {
  const { toast } = useToast();
  async function checkoutFromCart() {
    try {
      const status = await cartCheckout(pendingCheckoutList);
      if (status === 200) {
        setPendingCheckoutList([]);
        toast({
          description: "Successfully checkout the books!",
        });
      } else {
        throw new Error("Checkout fails!");
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        description: "Fail to checkout the books!",
      });
    }
  }
  return (
    <div className="border-l-[1px] border-l-gray-200 min-w-[25rem] max-w-[25rem] fixed right-0 top-[4rem] bottom-0 p-10 space-y-10 overflow-y-scroll overflow-x-hidden">
      {pendingCheckoutList.length > 0 ? (
        <>
          {pendingCheckoutList.map((item: PendingCheckoutType) => {
            return (
              <AddedList
                key={nanoid()}
                pendingCheckoutItem={item}
                setBooks={setBooks}
                setPendingCheckoutList={setPendingCheckoutList}
              />
            );
          })}
          <div className="w-full flex justify-between items-center">
            <p>Total: {pendingCheckoutList.length}</p>
            <Button
              onClick={() => {
                checkoutFromCart();
              }}
            >
              Checkout
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
  );
}
