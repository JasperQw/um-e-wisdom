"use client";

import { Separator } from "@/components/ui/separator";
import ShowBook from "./(components)/ShowBook";
import { HoldRequestType } from "@/dto/holdDTO";
import { useEffect, useState } from "react";
import { getAllHold } from "./(functions)/holdFunctions";
import { nanoid } from "nanoid";

export default function Hold() {
  const [pendingReturn, setPendingReturn] = useState<HoldRequestType[]>([]);

  const [pendingPickUp, setPendingPickUp] = useState<HoldRequestType[]>([]);

  async function getPending() {
    try {
      const list: {
        pending_return: HoldRequestType[];
        pending_pick_up: HoldRequestType[];
      } = await getAllHold();
      setPendingReturn(list.pending_return);
      setPendingPickUp(list.pending_pick_up);
    } catch (error) {
      console.log(error);
    } finally {
    }
  }
  useEffect(() => {
    getPending();
  }, []);
  return (
    <>
      <div className="w-[60rem] flex flex-col gap-24">
        <div>
          <h1 className="text-lg font-[500]">Hold (Pending Return)</h1>
          <p className="text-sm font-[300] tracking-wide">
            All your holding books which are pending return by the holder.
          </p>
          <Separator className="my-8" />
          {pendingReturn.length > 0 ? (
            <div className="flex w-[60rem] gap-10 overflow-x-scroll">
              {pendingReturn.map((c) => {
                return (
                  <ShowBook
                    key={nanoid()}
                    book={c}
                    setBooks={setPendingReturn}
                  />
                );
              })}
            </div>
          ) : (
            <div className="w-full flex justify-center items-center h-[19.18rem]">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <h1 className="font-bold text-4xl">404</h1>
                <p className="text-lg">No Books Are Pending Return!</p>
              </div>
            </div>
          )}
          <div className="w-full flex justify-end text-sm mt-4">
            <p>Total Pending: {pendingReturn.length}</p>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-[500]">Hold (Pending Pick Up)</h1>
          <p className="text-sm font-[300] tracking-wide">
            All your holding books which are waiting you to pick it up.
          </p>
          <Separator className="my-8" />
          {pendingPickUp.length > 0 ? (
            <div className="flex w-[60rem] gap-10 overflow-x-scroll">
              {pendingPickUp.map((c) => {
                return (
                  <ShowBook
                    key={nanoid()}
                    book={c}
                    setBooks={setPendingPickUp}
                  />
                );
              })}
            </div>
          ) : (
            <div className="w-full flex justify-center items-center h-[19.18rem]">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <h1 className="font-bold text-4xl">404</h1>
                <p className="text-lg">No Books Are Pending Pick Up!</p>
              </div>
            </div>
          )}
          <div className="w-full flex justify-end text-sm mt-4">
            <p>Total Pending: {pendingPickUp.length}</p>
          </div>
        </div>
      </div>
    </>
  );
}
