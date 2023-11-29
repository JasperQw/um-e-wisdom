"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MinusCircleIcon, Star } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { useToast } from "@/components/ui/use-toast";
import { addCollection } from "../(functions)/bookFunction";
import { getCollectionLists } from "../../collection/(functions)/collectionFunctions";
import { nanoid } from "nanoid";

export default function SelectCollectionListDialog({ isbn }: { isbn: string }) {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { toast } = useToast();
  const [collectionLists, setCollectionLists] = useState<string[]>([]);
  const [selectedList, setSelectedList] = useState<string>("");

  async function addToCollection() {
    try {
      if (selectedList === "") {
        toast({
          variant: "destructive",
          description: `Please select a list to add!`,
        });
      } else {
        const status = await addCollection(isbn, selectedList);
        if (status === 200) {
          toast({
            description: `Book successfully added to ${selectedList}!`,
          });
          setOpenDialog(false);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  function selectList(value: string) {
    setSelectedList(value);
  }

  useEffect(() => {
    (async () => {
      const lists: string[] = await getCollectionLists();
      setCollectionLists(lists);
    })();
  }, []);

  return (
    <>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
          <Button className="flex gap-4" variant={"outline"}>
            {" "}
            <Star width={18} height={18} /> <p>Add to Collection</p>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add To Collection</DialogTitle>
          </DialogHeader>
          Select Your List To Add
          <Select onValueChange={selectList} value={selectedList}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a list" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>List</SelectLabel>
                {collectionLists.map((list) => {
                  return (
                    <SelectItem key={nanoid()} value={list}>
                      {list}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
          <DialogFooter>
            <Button
              onClick={() => {
                addToCollection();
              }}
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
