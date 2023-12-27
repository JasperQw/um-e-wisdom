"use client";

import { Separator } from "@/components/ui/separator";
import CheckboxFilter from "./(components)/CheckboxFilter";
import BookingItem from "./(components)/BookingItem";
import { Plus } from "lucide-react";

export default function RoomBooking() {
  return (
    <div className="flex h-full">
      <div className="border-r-[1px] border-r-gray-200 min-w-[20rem] max-w-[20rem] p-10 space-y-10 overflow-y-scroll overflow-x-hidden">
        <div className="space-y-5">
          <div className="flex justify-between items-center">
            <h1 className="text-sm font-[600] w-full">Library</h1>
            <Plus size={14} />
          </div>

          <CheckboxFilter id="central_library" name="Central Library" />
          <CheckboxFilter
            id="tj_danaraj_medical_library"
            name="T. J. Danaraj Medical Library"
          />
          <CheckboxFilter
            id="ahmad_ibrahim_law_library"
            name="Tan Sri Prof.Ahmad Ibrahim Law Library"
          />
          <CheckboxFilter
            id="zaba_memorial_library"
            name="Za'Ba Memorial Library"
          />
        </div>
        <div className="space-y-5">
          <div className="flex justify-between items-center">
            <h1 className="text-sm font-[600] w-full">Type</h1>
            <Plus size={14} />
          </div>
          <CheckboxFilter id="discussion_room" name="Discussion Room" />
          <CheckboxFilter id="auditorium_karyawan" name="Auditorium Karyawan" />
          <CheckboxFilter id="carrel_room" name="Carrel Room" />
          <CheckboxFilter id="theater_room" name="Theater Room" />
        </div>
      </div>
      <div className={` w-full`}>
        <div className={`h-full w-full p-10 `}>
          <div>
            <h1 className="text-lg font-[500]">Room Booking</h1>
            <p className="text-sm font-[300] tracking-wide">
              Browse all the available room here.
            </p>
          </div>
          <Separator className="my-8" />
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(30rem,1fr))] gap-10">
            <BookingItem
              imageUrl="/next.svg"
              roomName="Carrel Room"
              library="Central Library"
              capacity={1}
              roomNumber="R3612"
            />
            <BookingItem
              imageUrl="/next.svg"
              roomName="Carrel Room"
              library="Central Library"
              capacity={1}
              roomNumber="R3612"
            />
            <BookingItem
              imageUrl="/next.svg"
              roomName="Carrel Room"
              library="Central Library"
              capacity={1}
              roomNumber="R3612"
            />
            <BookingItem
              imageUrl="/next.svg"
              roomName="Carrel Room"
              library="Central Library"
              capacity={1}
              roomNumber="R3612"
            />
          </div>
          <div className="w-full h-10"></div>
        </div>
      </div>
    </div>
  );
}
