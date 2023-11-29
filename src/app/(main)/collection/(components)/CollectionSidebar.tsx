"use client";
import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";
import AddListDialog from "./AddListDialog";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  getCollectionLists,
  removeList,
} from "../(functions)/collectionFunctions";
import { MinusCircleIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import RemoveListDialog from "./RemoveListDialog";

export default function CollectionSidebar({
  selectedList,
  setSelectedList,
}: {
  selectedList: string;
  setSelectedList: Dispatch<SetStateAction<string>>;
}) {
  const [collectionLists, setCollectionLists] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const lists: string[] = await getCollectionLists();
      setCollectionLists(lists);
    })();
  }, []);
  return (
    <>
      <div className="border-r-[1px] border-r-gray-200 min-w-[20rem] max-w-[20rem] fixed top-[4rem] bottom-0 p-10 space-y-10 overflow-y-scroll overflow-x-hidden">
        <div className="flex justify-between items-center">
          <p className="font-semibold">My List</p>
          <AddListDialog setCollectionLists={setCollectionLists} />
        </div>
        <nav className="space-y-2">
          {collectionLists.includes("Temporary List") ? (
            collectionLists.map((list) => {
              return (
                <div key={nanoid()} className="flex">
                  <Button
                    onClick={() => {
                      setSelectedList(list);
                    }}
                    variant={"ghost"}
                    className={`text-sm text-start font-[500] w-[15rem] rounded-lg ${
                      selectedList === list ? "bg-muted" : ""
                    } px-4 py-[0.5rem] block`}
                  >
                    {list}
                  </Button>
                  {list !== "Temporary List" ? (
                    <RemoveListDialog
                      name={list}
                      setCollectionLists={setCollectionLists}
                    />
                  ) : (
                    ""
                  )}
                </div>
              );
            })
          ) : (
            <Button
              variant={"ghost"}
              onClick={() => {
                setSelectedList("Temporary List");
              }}
              className={`text-sm text-start font-[500] w-[15rem] rounded-lg ${
                selectedList === "Temporary List" ? "bg-muted" : ""
              } px-4 py-[0.5rem] block`}
            >
              Temporary List
            </Button>
          )}
        </nav>
      </div>
    </>
  );
}
