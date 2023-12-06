"iuse client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ILLBookRequest() {
  return (
    <>
      <div className="w-full space-y-6">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex w-full gap-3 items-center h-fit">
            <Label
              htmlFor="type_of_item"
              className="w-[15rem] whitespace-nowrap"
            >
              Type of Item
            </Label>
            <Input
              name="type_of_item"
              value={""}
              id="type_of_item"
              type="text"
            />
          </div>
          <div className="flex w-full gap-3 items-center h-fit">
            <Label htmlFor="isbn_issn" className="w-[15rem] whitespace-nowrap">
              ISBN/ISSN
            </Label>
            <Input name="isbn_issn" value={""} id="isbn_issn" type="text" />
          </div>
          <div className="flex w-full gap-3 items-center h-fit">
            <Label htmlFor="title" className="w-[15rem] whitespace-nowrap">
              Title
            </Label>
            <Input name="title" value={""} id="title" type="text" />
          </div>
          <div className="flex w-full gap-3 items-center h-fit">
            <Label htmlFor="author" className="w-[15rem] whitespace-nowrap">
              Author
            </Label>
            <Input name="author" value={""} id="author" type="text" />
          </div>
          <div className="flex w-full gap-3 items-center h-fit">
            <Label htmlFor="citation" className="w-[15rem] whitespace-nowrap">
              Citation
            </Label>
            <Input name="citation" value={""} id="citation" type="text" />
          </div>
          <div className="flex w-full gap-3 items-center h-fit">
            <Label
              htmlFor="publication_place"
              className="w-[15rem] whitespace-nowrap"
            >
              Publication Place
            </Label>
            <Input
              name="publication_place"
              value={""}
              id="publication_place"
              type="text"
            />
          </div>
          <div className="flex w-full gap-3 items-center h-fit">
            <Label htmlFor="publisher" className="w-[15rem] whitespace-nowrap">
              Publisher
            </Label>
            <Input name="publisher" value={""} id="publisher" type="text" />
          </div>
          <div className="flex w-full gap-3 items-center h-fit">
            <Label
              htmlFor="publication_date"
              className="w-[15rem] whitespace-nowrap"
            >
              Publication Date
            </Label>
            <Input
              name="publication_date"
              value={""}
              id="publication_date"
              type="text"
            />
          </div>
          <div className="flex w-full gap-3 items-center h-fit">
            <Label htmlFor="edition" className="w-[15rem] whitespace-nowrap">
              Edition
            </Label>
            <Input name="edition" value={""} id="edition" type="text" />
          </div>
          <div className="flex w-full gap-3 items-center h-fit">
            <Label
              htmlFor="series_title"
              className="w-[15rem] whitespace-nowrap"
            >
              Series Title
            </Label>
            <Input
              name="series_title"
              value={""}
              id="series_title"
              type="text"
            />
          </div>
          <div className="flex w-full gap-3 items-center h-fit">
            <Label
              htmlFor="date_needed_by"
              className="w-[15rem] whitespace-nowrap"
            >
              Date Needed By
            </Label>
            <Input
              name="date_needed_by"
              value={""}
              id="date_needed_by"
              type="text"
            />
          </div>
          <div className="flex w-full gap-3 items-center h-fit">
            <Label
              htmlFor="delivery_method"
              className="w-[15rem] whitespace-nowrap"
            >
              Delivery Method
            </Label>
            <Input
              name="delivery_method"
              value={""}
              id="delivery_method"
              type="text"
            />
          </div>
          <div className="flex w-full gap-3 items-center h-fit">
            <Label
              htmlFor="maximum_fee_limit"
              className="w-[15rem] whitespace-nowrap"
            >
              Maximum Fee Limit
            </Label>
            <Input
              name="maximum_fee_limit"
              value={""}
              id="maximum_fee_limit"
              type="text"
            />
          </div>
          <div className="flex w-full gap-3 items-center h-fit">
            <Label htmlFor="rush" className="w-[15rem] whitespace-nowrap">
              Rush (Y/N)
            </Label>
            <Input name="rush" value={""} id="rush" type="text" />
          </div>
          <div className="flex w-full gap-3 items-center h-fit">
            <Label htmlFor="pickup_at" className="w-[15rem] whitespace-nowrap">
              Pickup At
            </Label>
            <Input name="pickup_at" value={""} id="pickup_at" type="text" />
          </div>
          <div className="flex w-full gap-3 items-center h-fit">
            <Label htmlFor="source" className="w-[15rem] whitespace-nowrap">
              Source
            </Label>
            <Input name="source" value={""} id="source" type="text" />
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
