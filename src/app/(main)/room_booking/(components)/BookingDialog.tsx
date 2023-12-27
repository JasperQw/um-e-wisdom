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
  const [before, setBefore] = useState<String>("");
  const { toast } = useToast();

  function onConfirm() {
    if (before != "") {
      const date = new Date(before.toString());
      const dateString = moment(date).format("MMMM d, YYYY h:mm A");
      toast({
        variant: "default",
        description: `Successfully booked, kindly arrive before ${dateString}!`,
      });
      setOpen(false);
      setBefore("");
    } else {
      toast({
        variant: "destructive",
        description: `Kindly fill in the arrive before field!`,
      });
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen((prev) => !prev);
      }}
    >
      <DialogTrigger asChild>
        <Button className="w-[15rem]">Book</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col overflow-scroll">
        <DialogHeader className="flex-grow-0">
          <DialogTitle className="h-fit">Booking</DialogTitle>
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
                  onChange={(e) => {
                    setBefore(e.target.value);
                  }}
                  type="datetime-local"
                />
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
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
