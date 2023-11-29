"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function EditableInfoLoading() {
  return (
    <>
      <div className="w-full flex flex-col gap-10">
        <div className="grid w-full items-center gap-3">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>

        <div className="grid w-full items-center gap-3">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>

        <div className="grid w-full items-center gap-3">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>

        <div className="grid w-full items-center gap-3">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>

        <div className="grid w-full items-center gap-3">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>

        <div className="grid w-full items-center gap-3">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>

        <div className="grid w-full items-center gap-3">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    </>
  );
}
