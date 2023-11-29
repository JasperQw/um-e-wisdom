"use client";

import { FilterCategoryType } from "@/dto/bookDTO";
import AppliedFilterBadge from "./AppliedFilterBadge";
import { nanoid } from "nanoid";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { Trash2Icon } from "lucide-react";

export default function AppliedFilterSection({
  applied,
}: {
  applied: FilterCategoryType;
}) {
  const searchParams = useSearchParams();
  const length =
    applied.authorCat.length +
    applied.editionCat.length +
    applied.languageCat.length +
    applied.libraryCat.length +
    applied.publicationCat.length +
    applied.publicationDateCat.length;

  function removeFilter() {
    if (searchParams.has("offset")) {
      window.location.replace(
        `/book?page=1&offset=${Number(searchParams.get("offset"))}`
      );
    } else {
      window.location.replace(`/book?page=1&offset=10`);
    }
  }
  return (
    <>
      {length > 0 ? (
        <div className="space-y-5">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-sm font-[600] w-full">Applied Filter</h1>
            <Button
              onClick={() => {
                removeFilter();
              }}
              className="text-xs h-fit"
              size={"icon"}
              variant={"ghost"}
            >
              <Trash2Icon size={14} />
            </Button>
          </div>

          {applied.authorCat.map((author) => {
            return (
              <AppliedFilterBadge
                paramsKey="author"
                key={nanoid()}
                value={author}
              />
            );
          })}

          {applied.publicationCat.map((publication) => {
            return (
              <AppliedFilterBadge
                paramsKey="publication"
                key={nanoid()}
                value={publication}
              />
            );
          })}

          {applied.publicationDateCat.map((publicationDate) => {
            return (
              <AppliedFilterBadge
                paramsKey="publicationDate"
                key={nanoid()}
                value={publicationDate}
              />
            );
          })}

          {applied.editionCat.map((edition) => {
            return (
              <AppliedFilterBadge
                paramsKey="edition"
                key={nanoid()}
                value={edition}
              />
            );
          })}

          {applied.languageCat.map((language) => {
            return (
              <AppliedFilterBadge
                paramsKey="language"
                key={nanoid()}
                value={language}
              />
            );
          })}

          {applied.libraryCat.map((library) => {
            return (
              <AppliedFilterBadge
                paramsKey="library"
                key={nanoid()}
                value={library}
              />
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
