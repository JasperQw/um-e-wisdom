"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import ShowBook from "./(components)/ShowBook";
import { useEffect, useState } from "react";
import { CheckoutType } from "@/dto/checkoutDTO";
import { getAllCheckouts } from "./(functions)/checkoutFunctions";
import { nanoid } from "nanoid";

export default function Checkout() {
  const [currentCheckouts, setCurrentCheckouts] = useState<CheckoutType[]>([]);
  const [historyCheckouts, setHistoryCheckouts] = useState<CheckoutType[]>([]);

  async function getCheckout() {
    try {
      const checkouts: CheckoutType[] = await getAllCheckouts();
      const current: CheckoutType[] = [];
      const history: CheckoutType[] = [];

      checkouts.forEach((c) => {
        if (c.returnAt === null) {
          current.push(c);
        } else {
          history.push(c);
        }
      });

      setCurrentCheckouts(current);
      setHistoryCheckouts(history);
    } catch (error) {
      console.log(error);
    } finally {
    }
  }
  useEffect(() => {
    getCheckout();
  }, []);

  return (
    <>
      <div className="w-[60rem] flex flex-col gap-24">
        <div>
          <h1 className="text-lg font-[500]">Checkouts</h1>
          <p className="text-sm font-[300] tracking-wide">
            All your borrowed books.
          </p>
          <Separator className="my-8" />
          {currentCheckouts.length > 0 ? (
            <div className="flex w-[60rem] gap-10 overflow-x-scroll">
              {currentCheckouts.map((c) => {
                return <ShowBook key={nanoid()} book={c} />;
              })}
            </div>
          ) : (
            <div className="w-full flex justify-center items-center h-[19.18rem]">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <h1 className="font-bold text-4xl">404</h1>
                <p className="text-lg">Checkouts not found!</p>
              </div>
            </div>
          )}
          <div className="w-full flex justify-end text-sm mt-4">
            <p>Total Checkouts: {currentCheckouts.length}</p>
          </div>
        </div>

        <div>
          <h1 className="text-lg font-[500]">History Checkouts</h1>
          <p className="text-sm font-[300] tracking-wide">
            All your previously borrowed books.
          </p>
          <Separator className="my-8" />
          {historyCheckouts.length > 0 ? (
            <div className="flex w-[60rem] gap-10 overflow-x-scroll">
              {historyCheckouts.map((c) => {
                return <ShowBook key={nanoid()} book={c} />;
              })}
            </div>
          ) : (
            <div className="w-full flex justify-center items-center h-[19.18rem]">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <h1 className="font-bold text-4xl">404</h1>
                <p className="text-lg">Checkouts not found!</p>
              </div>
            </div>
          )}
          <div className="w-full flex justify-end text-sm mt-4">
            <p>Total Checkouts: {historyCheckouts.length}</p>
          </div>
        </div>
      </div>
    </>
  );
}
