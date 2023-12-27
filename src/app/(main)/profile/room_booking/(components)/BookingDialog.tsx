"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import moment from "moment";

export default function BookingDialog({
  roomName,
  roomNumber,
  capacity,
  library,
}: {
  roomName: string;
  roomNumber: string;
  capacity: number;
  library: string;
}) {
  const [open, setOpen] = useState<boolean>(false);

  const { toast } = useToast();

  function onConfirm() {
    toast({
      variant: "default",
      description: `Successfully cancel the booking!`,
    });
    setOpen(false);
  }

  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen((prev) => !prev);
      }}
    >
      <DialogTrigger asChild>
        <Button variant={"destructive"} className="w-[15rem]">
          Cancel Booking
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col overflow-scroll">
        <DialogHeader className="flex-grow-0">
          <DialogTitle className="h-fit">Cancel Booking</DialogTitle>
        </DialogHeader>
        <div className="w-full flex flex-col gap-10 flex-1">
          <div className="w-full flex gap-10">
            <div className="flex flex-col">
              <h1 className="text-xl font-bold line-clamp-2 mb-4">
                {roomName}
              </h1>

              <div className="flex gap-5 text-sm ">
                <p className="font-semibold">Library:</p>
                <p>{library}</p>
              </div>
              <div className="flex gap-5 text-sm ">
                <p className="font-semibold">Capacity:</p>
                <p>{capacity}</p>
              </div>
              <div className="flex gap-5 text-sm ">
                <p className="font-semibold">Room Number: </p>
                <p>{roomNumber}</p>
              </div>
              <div className="flex gap-5 text-sm whitespace-nowrap items-center mt-4">
                <p className="font-semibold">Arrive Before: </p>
                <Input
                  readOnly
                  value={"2023-12-24T13:00:00.00"}
                  type="datetime-local"
                />
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            variant={"destructive"}
            onClick={() => {
              onConfirm();
            }}
          >
            Confirm
          </Button>
          <Button
            variant={"outline"}
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
