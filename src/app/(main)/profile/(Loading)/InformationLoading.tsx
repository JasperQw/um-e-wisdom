"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import EditableInfoLoading from "./InformationInputLoading";
import SpinningLoading from "../../(components)/Spinning";

export default function InformationLoading() {
  return (
    <>
      <aside className="w-[50rem]">
        <h1 className="text-lg font-[500]">Information</h1>
        <p className="text-sm font-[300] tracking-wide">
          Browse and edit your information here.
        </p>
        <Separator className="my-8" />
        <div className="w-full flex flex-col gap-10">
          <EditableInfoLoading />
          {/* Edit Button */}
          <div className="flex justify-end">
            <Button disabled>
              <SpinningLoading />
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
