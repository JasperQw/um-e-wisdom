"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchCriteriaType } from "@/dto/bookDTO";
import { Search } from "lucide-react";
import { nanoid } from "nanoid";
import { useEffect, useRef, useState } from "react";
export default function NavSearchBar() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchDropdownRef = useRef<HTMLDivElement>(null);
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteriaType>({
    category: "name",
    searchText: "",
  });
  const [showPossibleSearch, setShowPossibleSearch] = useState<boolean>(false);
  const [possibleSeach, setPossibleSearch] = useState<string[]>([]);

  function onCategoryChange(value: string) {
    setSearchCriteria((prev) => ({
      ...prev,
      category: value,
    }));
  }

  async function onSearchTextChange(event: any) {
    setSearchCriteria((prev) => ({
      ...prev,
      searchText: event.target.value,
    }));
  }

  useEffect(() => {
    if (searchCriteria.searchText !== "") {
      getSearch();
    } else {
      setPossibleSearch([]);
    }
  }, [searchCriteria]);

  function handleOutsideClick(e: any) {
    if (searchInputRef.current && searchInputRef.current.contains(e.target)) {
      setShowPossibleSearch(true);
    } else if (
      searchInputRef.current &&
      searchDropdownRef.current &&
      !searchInputRef.current.contains(e.target) &&
      !searchDropdownRef.current.contains(e.target)
    ) {
      setShowPossibleSearch(false);
    }
  }

  async function getSearch() {
    try {
      const req = await fetch(
        `/api/book/search_book?category=${searchCriteria.category}&searchText=${searchCriteria.searchText}`
      );
      const res = await req.json();

      if (res.status === 200) {
        setPossibleSearch(res.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [searchCriteria]);
  return (
    <div className="flex items-center">
      <div>
        <Select onValueChange={onCategoryChange} defaultValue={"name"}>
          <SelectTrigger className="translate-x-[1px] rounded-r-none border-r-0 focus-visible:ring-transparent focus:ring-transparent">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="author">Author</SelectItem>
              <SelectItem value="isbn">ISBN</SelectItem>
              <SelectItem value="publication">Publication</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="relative">
        <Input
          ref={searchInputRef}
          onChange={onSearchTextChange}
          className="rounded-l-none w-[16rem] rounded-r-none focus-visible:ring-transparent focus:ring-transparent"
          type="text"
          placeholder="Search..."
        />

        {possibleSeach.length > 0 && showPossibleSearch ? (
          <div
            ref={searchDropdownRef}
            className="absolute bg-white w-full h-fit top-[90%] border border-t-0 border-[#e5e7eb] max-h-[20rem] overflow-y-scroll z-[200] "
          >
            {possibleSeach.map((search: string) => {
              return (
                <button
                  key={nanoid()}
                  onClick={() => {
                    window.location.replace(
                      `/book?${searchCriteria.category}=${search}`
                    );
                  }}
                  className="text-xs text-start w-full px-8 py-4 border border-[#e5e7eb] border-t-0 border-x-0"
                >
                  {search}
                </button>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
      <button
        onClick={() => {
          window.location.replace(
            `/book?${searchCriteria.category}=${searchCriteria.searchText}`
          );
        }}
        className="border border-[#e5e7eb] h-10 rounded-r-md border-l-0 px-5 translate-x-[-1px]"
      >
        <Search height={18} width={18} />
      </button>
    </div>
  );
}
