"use client";
import { nanoid } from "nanoid";
import { useSearchParams } from "next/navigation";

export default function Pagination({
  currentPage,
  offset,
  pages,
}: {
  currentPage: number;
  offset: number;
  pages: number[];
}) {
  const searchParams = useSearchParams();

  return (
    <>
      <nav>
        <ul className=" flex justify-center -space-x-px text-sm">
          <li>
            <a
              href={
                currentPage !== 1
                  ? `/book?${searchParams
                      .toString()
                      .replace(/page=\d+/g, `page=${currentPage - 1}`)
                      .replace(/offset=\d+/g, `offset=${offset}`)}`
                  : "#"
              }
              role="button"
              className={`flex items-center justify-center px-3 h-8 ml-0 leading-tight bg-white border border-gray-300 rounded-l-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 ${
                currentPage === 1
                  ? "text-gray-300 cursor-not-allowed "
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white "
              }`}
            >
              Previous
            </a>
          </li>

          {pages.map((p: number, index: number) => {
            return index !== 0 && pages[index - 1] !== pages[index] - 1 ? (
              <>
                <li key={nanoid()}>
                  <div
                    aria-current="page"
                    className={`bg-blue-50 dark:bg-gray-700 flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300  hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700  dark:text-white`}
                  >
                    ...
                  </div>
                </li>
                <li>
                  <a
                    href={`/book?${searchParams
                      .toString()
                      .replace(/page=\d+/g, `page=${p}`)
                      .replace(/offset=\d+/g, `offset=${offset}`)}`}
                    role="button"
                    aria-current="page"
                    className={`${
                      currentPage === p
                        ? "bg-blue-100 dark:bg-gray-800"
                        : "bg-blue-50 dark:bg-gray-700"
                    } flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300  hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700  dark:text-white`}
                  >
                    {p}
                  </a>
                </li>
              </>
            ) : (
              <li key={nanoid()}>
                <a
                  href={`/book?${searchParams
                    .toString()
                    .replace(/page=\d+/g, `page=${p}`)
                    .replace(/offset=\d+/g, `offset=${offset}`)}`}
                  role="button"
                  aria-current="page"
                  className={`${
                    currentPage === p
                      ? "bg-blue-100 dark:bg-gray-800"
                      : "bg-blue-50 dark:bg-gray-700"
                  } flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300  hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700  dark:text-white`}
                >
                  {p}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href={
                currentPage !== pages[pages.length - 1]
                  ? `/book?${searchParams
                      .toString()
                      .replace(/page=\d+/g, `page=${currentPage + 1}`)
                      .replace(/offset=\d+/g, `offset=${offset}`)}`
                  : "#"
              }
              role="button"
              className={`flex items-center justify-center px-3 h-8 ml-0 leading-tight bg-white border border-gray-300 rounded-r-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 ${
                currentPage === pages[pages.length - 1]
                  ? "text-gray-300 cursor-not-allowed "
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white "
              }`}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
