"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BookingDialog from "./BookingDialog";

export default function BookingItem({
  imageUrl,
  roomName,
  library,
  capacity,
  roomNumber,
}: {
  imageUrl: string;
  roomName: string;
  library: string;
  capacity: number;
  roomNumber: string;
}) {
  return (
    <>
      <div className="flex gap-10 items-center">
        <div className="min-w-[10rem] h-[12rem] relative">
          <Image src={imageUrl} alt="book_image" sizes="100%" fill />
        </div>
        <div className="flex flex-col h-full justify-between">
          <h1 className="text-lg font-bold line-clamp-2">{roomName}</h1>
          <div className="flex flex-col flex-1 mt-4">
            <div className="flex gap-5 text-sm ">
              <p className="font-semibold">Library: </p>
              <p>{library}</p>
            </div>

            <div className="flex gap-5 text-sm ">
              <p className="font-semibold">Capacity: </p>
              <p>{capacity}</p>
            </div>

            <div className="flex gap-5 text-sm ">
              <p className="font-semibold">Room Number: </p>
              <p>{roomNumber}</p>
            </div>
          </div>
          <div className="flex w-full">
            <BookingDialog
              library={library}
              capacity={capacity}
              roomName={roomName}
              roomNumber={roomNumber}
            />
          </div>
        </div>
      </div>
    </>
  );
}
