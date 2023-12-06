"iuse client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdditionalCopies() {
  return (
    <>
      <div className="w-full space-y-6">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex w-full gap-3 items-center h-fit">
            <Label
              htmlFor="item_barcode"
              className="w-[15rem] whitespace-nowrap"
            >
              Item Barcode
            </Label>
            <Input
              name="item_barcode"
              value={""}
              id="item_barcode"
              type="text"
            />
          </div>
          <div className="flex w-full gap-3 items-center h-fit">
            <Label
              htmlFor="number_of_copies"
              className="w-[15rem] whitespace-nowrap"
            >
              Number of Copies
            </Label>
            <Input
              name="number_of_copies"
              value={""}
              id="number_of_copies"
              type="text"
            />
          </div>
          <div className="flex w-full gap-3 items-center h-fit">
            <Label htmlFor="note" className="w-[15rem] whitespace-nowrap">
              Note
            </Label>
            <Input name="note" value={""} id="note" type="text" />
          </div>
        </div>
        <div className="flex justify-end">
          <Button className="w-[10rem]">Send</Button>
        </div>
      </div>
    </>
  );
}
