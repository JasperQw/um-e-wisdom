"use client";

import { Button } from "@/components/ui/button";
import { LocationType } from "@/dto/bookDTO";
import { ColumnDef } from "@tanstack/react-table";
import BookDialogAction from "./BookDialogAction";

export const columns: ColumnDef<LocationType>[] = [
  {
    accessorKey: "library",
    header: "Library",
  },
  {
    accessorKey: "shelfLocation",
    header: "Shelf Location",
  },
  {
    accessorKey: "shelfNumber",
    header: "Shelf Number",
  },
  {
    accessorKey: "material",
    header: "Material Type",
  },
  {
    id: "status",
    header: "Status",
    cell: ({ row }) => {
      return <p>{row.original.borrowable ? "Borrowable" : "Not Borrowable"}</p>;
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return <BookDialogAction book={row.original} />;
    },
  },
];
