"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function AppliedFilterBadge({
  value,
  paramsKey,
}: {
  value: string;
  paramsKey: string;
}) {
  const searchParams = useSearchParams();

  function removeFilter() {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    let currentParamsValue: string[] = JSON.parse(
      params.get(paramsKey) as string
    );
    currentParamsValue = currentParamsValue.filter((val: string) => {
      return val !== value;
    });

    params.set(
      paramsKey,
      currentParamsValue.length === 0 ? "" : JSON.stringify(currentParamsValue)
    );

    window.location.replace(`/book?${params.toString()}`);
  }
  return (
    <>
      <div className="space-y-3">
        <div className="flex gap-5 justify-between items-center">
          <p className="truncate font-[500] text-xs w-full">{value}</p>
          <Button
            onClick={() => {
              removeFilter();
            }}
            variant={"ghost"}
            size={"icon"}
            className="h-fit"
          >
            <X size={14} />
          </Button>
        </div>
      </div>
    </>
  );
}
