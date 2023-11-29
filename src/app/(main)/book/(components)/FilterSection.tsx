"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { nanoid } from "nanoid";
import { useSearchParams } from "next/navigation";
import { useContext, useState } from "react";
import { AppliedFilterContext } from "./Sidebar";
import { Plus, PlusSquare } from "lucide-react";

export default function FilterSection({
  paramsKey,
  category,
  title,
}: {
  paramsKey: string;
  category: string[];
  title: string;
}) {
  const { setAppliedFilter } = useContext(AppliedFilterContext);
  const searchParams = useSearchParams();
  const [apply, setApply] = useState(() => {
    if (
      searchParams.has(paramsKey) &&
      searchParams.get(paramsKey) !== "" &&
      (searchParams.get(paramsKey) as string).includes("[") &&
      (searchParams.get(paramsKey) as string).includes("]")
    ) {
      const paramsValue: string[] = JSON.parse(
        searchParams.get(paramsKey) as string
      );

      return Object.fromEntries(
        category
          .filter((cat) => {
            if (paramsValue.includes(cat)) {
              setAppliedFilter((prev) => {
                return {
                  ...prev,

                  [`${paramsKey + "Cat"}`]: [
                    //@ts-ignore
                    ...prev[`${paramsKey + "Cat"}`],
                    cat,
                  ],
                };
              });
            }
            return !paramsValue.includes(cat);
          })
          .map((cat) => [cat, false])
      );
    } else {
      return Object.fromEntries(category.map((cat) => [cat, false]));
    }
  });

  function includeCat() {
    let cat: string[] = [];
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    const keys = Object.keys(apply);
    keys.forEach((key) => {
      if (apply[key]) {
        cat.push(key);
      }
    });
    if (searchParams.has(paramsKey)) {
      params.set(paramsKey, cat.length === 0 ? "" : JSON.stringify(cat));
      params.set("page", "1");
      window.location.replace(`/book?${params.toString()}`);
    } else {
      params.append(paramsKey, cat.length === 0 ? "" : JSON.stringify(cat));
      window.location.replace(`/book?${params.toString()}`);
    }
  }

  return (
    <>
      {Object.keys(apply).length > 0 ? (
        <div className="space-y-5">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-sm font-[600] w-full">{title}</h1>
            <Button
              onClick={() => {
                includeCat();
              }}
              className="h-5 text-xs"
              size={"icon"}
              variant={"ghost"}
            >
              <Plus size={14} />
            </Button>
          </div>

          <div className="space-y-3">
            {Object.keys(apply).map((cat) => {
              return (
                <div key={nanoid()} className="flex items-center space-x-2">
                  <Checkbox
                    onClick={() => {
                      setApply((prev) => ({
                        ...prev,
                        [cat]: !prev[cat],
                      }));
                    }}
                    checked={apply[cat]}
                    id={cat}
                  />
                  <label
                    htmlFor={cat}
                    className="text-xs truncate font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {cat}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
