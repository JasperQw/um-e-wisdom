"use client";

import { PendingApproveReturn } from "@/dto/returnDTO";
import { AlertCircleIcon, AlertTriangleIcon } from "lucide-react";
import moment from "moment";
import Image from "next/image";

export default function ShowBook({ book }: { book: PendingApproveReturn }) {
  const current = moment();

  return (
    <>
      <div className="flex flex-col relative z-[-10]">
        <div className="relative min-w-[12rem] max-w-[12rem] h-[14rem] mb-4 rounded-lg">
          <Image src={book.bookImage} alt="image" fill sizes={"100%"} />
          {current.isAfter(moment(book.end)) ? (
            <div className="absolute bottom-0 right-0 bg-white p-3">
              <AlertCircleIcon color="red" size={18} />
            </div>
          ) : current.diff(moment(book.end), "days") >= -3 ? (
            <div className="absolute bottom-0 right-0 bg-white p-3">
              <AlertTriangleIcon color="orange" size={18} />
            </div>
          ) : (
            ""
          )}
        </div>
        <h1 className="w-[12rem] line-clamp-1 text-sm">{book.name}</h1>
        <div>
          <p className="text-xs text-gray-700">{book.library}</p>
          <p className="text-xs text-gray-700">
            {moment(book.start).format("YYYY-MM-DD")} to{" "}
            {moment(book.end).format("YYYY-MM-DD")}
          </p>
          {book.returnAt !== null ? (
            <p className="text-xs text-gray-700 w-full">
              Return at {moment(book.returnAt).format("YYYY-MM-DD")}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
