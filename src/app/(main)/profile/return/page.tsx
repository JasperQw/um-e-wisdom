"use client";
import { Separator } from "@/components/ui/separator";
import { PendingApproveReturn } from "@/dto/returnDTO";
import { useEffect, useState } from "react";
import ShowBook from "./(components)/ShowBook";
import { nanoid } from "nanoid";
import { getAllPending } from "./(functions)/returnFunctions";

export default function PendingReturn() {
  const [currentPending, setCurrentPending] = useState<PendingApproveReturn[]>(
    []
  );

  async function getPending() {
    try {
      const pendingApproveList: PendingApproveReturn[] = await getAllPending();
      setCurrentPending(pendingApproveList);
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
          <h1 className="text-lg font-[500]">Return</h1>
          <p className="text-sm font-[300] tracking-wide">
            All your books return requests.
          </p>
          <Separator className="my-8" />
          {currentPending.length > 0 ? (
            <div className="flex w-[60rem] gap-10 overflow-x-scroll">
              {currentPending.map((c) => {
                return <ShowBook key={nanoid()} book={c} />;
              })}
            </div>
          ) : (
            <div className="w-full flex justify-center items-center h-[19.18rem]">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <h1 className="font-bold text-4xl">404</h1>
                <p className="text-lg">No Books Return Request Are Pending!</p>
              </div>
            </div>
          )}
          <div className="w-full flex justify-end text-sm mt-4">
            <p>Total Pending: {currentPending.length}</p>
          </div>
        </div>
      </div>
    </>
  );
}
