"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightCircleIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { LibraryInformationType } from "../(data)/LibraryInfo";

export default function LibrarySection({
  info,
}: {
  info: LibraryInformationType;
}) {
  function openGoogleMap() {
    window.open(info.map, "_blank");
  }
  return (
    <>
      <div className="flex gap-10">
        <div className="relative min-w-[20rem] w-[20rem] h-[15rem]">
          <Image fill src={info.imageUrl} alt="um-library" />
        </div>
        <div className="flex flex-col justify-between flex-1">
          <div>
            <h1 className="text-xl font-bold">{info.name}</h1>
            <p className="mb-4">{info.address}</p>

            <p>Tel. No: {info.tel}</p>
            {info.fax === "" ? "" : <p>Fax: {info.fax}</p>}
          </div>
          <Button
            onClick={() => {
              openGoogleMap();
            }}
            variant={"default"}
            className="flex items-center gap-2 w-fit"
          >
            <p>Google Map </p>
            <ArrowRightIcon size={18} />
          </Button>
        </div>
        <div className="bg-[rgba(0,0,0,0.7)] flex-1 max-w-[20rem] rounded-lg px-7 py-5">
          <div className="flex gap-3">
            <div className="w-[0.3rem] bg-amber-500"></div>
            <h1 className="flex-1 text-gray-200 text-xl font-bold">
              Opening Hours
            </h1>
          </div>
          <div className="mt-5">
            {info.opening.map((open) => {
              return (
                <div className="text-gray-300 flex justify-between">
                  <p>{open.day}</p>
                  <p>{open.time}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
