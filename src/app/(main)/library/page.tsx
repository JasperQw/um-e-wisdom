"client";

import { nanoid } from "nanoid";
import LibrarySection from "./(components)/LibrarySection";
import { LibraryInformation } from "./(data)/LibraryInfo";
import { Separator } from "@/components/ui/separator";

export default function Library() {
  return (
    <div className="flex flex-col justify-center px-[5rem] py-[3rem] gap-[3rem]">
      <div>
        <div>
          <h1 className="text-lg font-[500]">Libraries</h1>
          <p className="text-sm font-[300] tracking-wide">
            Browse all the information about all the libraries in Universiti
            Malaya here.
          </p>
        </div>
        <Separator className="my-8" />
      </div>

      {LibraryInformation.map((l) => {
        return <LibrarySection key={nanoid()} info={l} />;
      })}
    </div>
  );
}
