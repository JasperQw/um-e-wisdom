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
import { MinusCircleIcon } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { removeList } from "../(functions)/collectionFunctions";
import { useToast } from "@/components/ui/use-toast";

export default function RemoveListDialog({
  name,
  setCollectionLists,
}: {
  name: string;
  setCollectionLists: Dispatch<SetStateAction<string[]>>;
}) {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { toast } = useToast();

  async function remove_list(name: string) {
    try {
      const status = await removeList(name);
      if (status === 200) {
        setCollectionLists((prev) => {
          return prev.filter((p) => {
            return p !== name;
          });
        });
        toast({ description: "Successfully removed " + name + "!" });
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
            <MinusCircleIcon height={18} width={18} />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Remove List</DialogTitle>
          </DialogHeader>
          Are you sure to remove this list?
          <DialogFooter>
            <Button
              onClick={async () => {
                await remove_list(name);
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
