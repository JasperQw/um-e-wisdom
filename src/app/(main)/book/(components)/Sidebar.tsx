"use client";

import { FilterCategoryType } from "@/dto/bookDTO";
import FilterSection from "./FilterSection";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import AppliedFilterSection from "./AppliedFilterSection";

//@ts-ignore
export const AppliedFilterContext = createContext<{
  appliedFilter: FilterCategoryType;
  setAppliedFilter: Dispatch<SetStateAction<FilterCategoryType>>;
}>();
export default function Sidebar({
  categories,
}: {
  categories: FilterCategoryType;
}) {
  let empty = true;
  Object.keys(categories).forEach((catKey: string) => {
    //@ts-ignore
    if (categories[catKey].length !== 0) {
      empty = false;
    }
  });
  const [appliedFilter, setAppliedFilter] = useState<FilterCategoryType>({
    editionCat: [],
    publicationCat: [],
    publicationDateCat: [],
    languageCat: [],
    authorCat: [],
    libraryCat: [],
  });

  return (
    <AppliedFilterContext.Provider value={{ appliedFilter, setAppliedFilter }}>
      <div className="border-r-[1px] border-r-gray-200 min-w-[20rem] max-w-[20rem] fixed top-[4rem] bottom-0 p-10 space-y-10 overflow-y-scroll overflow-x-hidden">
        {empty ? (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="font-bold text-4xl">404</h1>
            <p className="text-lg">No Filter</p>
          </div>
        ) : (
          ""
        )}

        <AppliedFilterSection applied={appliedFilter} />

        <FilterSection
          paramsKey="author"
          title="Author"
          category={categories.authorCat}
        />
        <FilterSection
          paramsKey="publication"
          title="Publication"
          category={categories.publicationCat}
        />
        <FilterSection
          paramsKey="publicationDate"
          title="Publication Date"
          category={categories.publicationDateCat}
        />
        <FilterSection
          paramsKey="edition"
          title="Edition"
          category={categories.editionCat}
        />
        <FilterSection
          paramsKey="language"
          title="Language"
          category={categories.languageCat}
        />
        <FilterSection
          paramsKey="library"
          title="Library"
          category={categories.libraryCat}
        />
      </div>
    </AppliedFilterContext.Provider>
  );
}
