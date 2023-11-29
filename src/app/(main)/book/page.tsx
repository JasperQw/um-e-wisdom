"use client";

export const dynamic = "force-dynamic";

import { useSearchParams } from "next/navigation";
import ShowBook from "./(components)/ShowBook";
import { useEffect, useState } from "react";
import {
  BookType,
  BooksDataReturnType,
  FilterCategoryType,
  URLParamsFilterType,
} from "@/dto/bookDTO";
import { getBookData } from "./(functions)/bookFunction";
import Pagination from "./(components)/Pagination";
import { Separator } from "@/components/ui/separator";
import Sidebar from "./(components)/Sidebar";
import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";

export default function Book() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [books, setBooks] = useState<BookType[]>([]);
  const [pages, setPages] = useState<number[]>([]);
  const [filterCategory, setFilterCategory] = useState<FilterCategoryType>({
    editionCat: [],
    publicationCat: [],
    publicationDateCat: [],
    languageCat: [],
    authorCat: [],
    libraryCat: [],
  });
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  const offset = searchParams.get("offset")
    ? Number(searchParams.get("offset"))
    : 10;

  const filterObject: URLParamsFilterType = {
    name: (searchParams.get("name") as string) ?? "",
    author: (searchParams.get("author") as string) ?? "",
    isbn: (searchParams.get("isbn") as string) ?? "",
    publication: (searchParams.get("publication") as string) ?? "",
    publicationDate: (searchParams.get("publicationDate") as string) ?? "",
    language: (searchParams.get("language") as string) ?? "",
    edition: (searchParams.get("edition") as string) ?? "",
    library: (searchParams.get("library") as string) ?? "",
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const books: BooksDataReturnType = await getBookData(
          page,
          offset,
          filterObject
        );

        setFilterCategory(books.category);
        setBooks(books.books);
        let pages = [];
        let totalPages = Math.ceil(books.total / offset);
        for (let i = 1; i <= totalPages; i++) {
          if (totalPages <= 10) {
            pages.push(i);
          } else {
            if (i === 1 && page !== 1) {
              pages.push(i);
              i = page - 1;
            } else if (i >= page && i <= page + 4) {
              pages.push(i);
            } else if (i > page + 4 && page + 4 !== totalPages) {
              pages.push(totalPages);
              break;
            }
          }
        }

        setPages(pages);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <>
      {isLoading ? "" : <Sidebar categories={filterCategory} />}

      <div className={`pl-[20rem] w-full ${books.length > 0 ? "" : "h-full"}`}>
        <div
          className={`h-full w-full p-10 ${
            books.length > 0 ? "" : "flex flex-col"
          }`}
        >
          <div>
            <h1 className="text-lg font-[500]">Books</h1>
            <p className="text-sm font-[300] tracking-wide">
              Browse all the books here.
            </p>
          </div>
          <Separator className="my-8" />
          <div
            className={`flex flex-col gap-5 ${
              books.length > 0 ? "" : "justify-center flex-1"
            }`}
          >
            {books.length > 0 ? (
              books.map((book) => {
                return <ShowBook key={nanoid()} book={book} />;
              })
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <h1 className="font-bold text-4xl">404</h1>
                <p className="text-lg">Books not found!</p>
                <Button
                  onClick={() => {
                    window.location.replace("/book");
                  }}
                  className="mt-4"
                  variant={"outline"}
                  size={"sm"}
                >
                  Back
                </Button>
              </div>
            )}
          </div>

          {pages.length > 1 ? (
            <Pagination currentPage={page} offset={offset} pages={pages} />
          ) : (
            ""
          )}
          <div className="w-full h-10"></div>
        </div>
      </div>
    </>
  );
}
