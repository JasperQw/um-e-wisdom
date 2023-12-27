import { Separator } from "@/components/ui/separator";
import React from "react";
import BookingItem from "./(components)/BookingItem";

export default function RoomBooking() {
  return (
    <div className="w-[60rem] flex flex-col gap-24">
      <div>
        <h1 className="text-lg font-[500]">Room Booking</h1>
        <p className="text-sm font-[300] tracking-wide">
          All your Room Booking.
        </p>
        <Separator className="my-8" />
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(25rem,1fr))] gap-10">
          <BookingItem
            imageUrl="/next.svg"
            roomName="Carrel Room"
            library="Central Library"
            capacity={1}
            roomNumber="R3612"
          />
        </div>
      </div>
    </div>
  );
}
