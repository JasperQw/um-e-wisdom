"use client";
import { PlusCircleIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { addNewList } from "../(functions)/collectionFunctions";

export default function AddListDialog({
  setCollectionLists,
}: {
  setCollectionLists: Dispatch<SetStateAction<string[]>>;
}) {
  const { toast } = useToast();
  const listNameRef = useRef<HTMLInputElement>(null);
  const [openDialog, setOpenDialog] = useState(false);
  async function addList() {
    try {
      if (listNameRef.current && listNameRef.current.value !== "") {
        const name = listNameRef.current.value;
        const status = await addNewList(name);
        if (status === 200) {
          toast({
            description: "Successfully added a new list!",
          });
          setOpenDialog(false);
          setCollectionLists((prev) => {
            return [...prev, name];
          });
        } else {
          toast({
            description: "List already existed!",
          });
        }
      } else {
        toast({
          description: "Must have a name!",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  }
  return (
    <>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <PlusCircleIcon height={18} width={18} />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add List</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input ref={listNameRef} id="name" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={async () => {
                await addList();
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
