"use client";

import { Checkbox } from "@/components/ui/checkbox";

export default function CheckboxFilter({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} />
      <label
        htmlFor={id}
        className="text-xs truncate font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {name}
      </label>
    </div>
  );
}
