"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { addCart, addCollection, holdBook } from "../(functions)/bookFunction";
import { BookType, LocationType } from "@/dto/bookDTO";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { HandIcon, MoreHorizontal, ShoppingCart, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { getCollectionLists } from "../../collection/(functions)/collectionFunctions";
import { nanoid } from "nanoid";
export default function BookDialogAction({ book }: { book: LocationType }) {
  const [collectionLists, setCollectionLists] = useState<string[]>([]);
  const { toast } = useToast();
  async function addToCart() {
    try {
      const status = await addCart(book.code);
      if (status === 200) {
        toast({
          description: "Book successfully added to your cart!",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  async function placeHold() {
    try {
      const res = await holdBook(book.code);
      if (res.status === 200) {
        toast({
          description: "Book successfully hold!",
        });
      } else {
        throw new Error(res.error);
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: error.message,
      });
    } finally {
    }
  }

  async function addToCollection(name: string) {
    try {
      const status = await addCollection(book.code, name);
      if (status === 200) {
        toast({
          description: `Book successfully added to ${name}!`,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  useEffect(() => {
    (async () => {
      const lists: string[] = await getCollectionLists();
      setCollectionLists(lists);
    })();
  }, []);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <MoreHorizontal size={18} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Action</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {book.borrowable ? (
              <DropdownMenuItem asChild className="cursor-pointer">
                <div
                  onClick={() => {
                    addToCart();
                  }}
                  className=" flex gap-4 items-center w-full"
                >
                  <ShoppingCart width={18} height={18} />
                  <p className="text-sm">Add To Cart</p>
                </div>
              </DropdownMenuItem>
            ) : (
              ""
            )}

            {book.holdable ? (
              <DropdownMenuItem asChild className="cursor-pointer">
                <div
                  onClick={() => {
                    placeHold();
                  }}
                  className=" flex gap-4 items-center w-full"
                >
                  <HandIcon width={18} height={18} />
                  <p className="text-sm">Place Hold</p>
                </div>
              </DropdownMenuItem>
            ) : (
              ""
            )}

            {!book.holdable && !book.borrowable ? (
              <DropdownMenuItem className="flex justify-center">
                Empty!
              </DropdownMenuItem>
            ) : (
              ""
            )}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
