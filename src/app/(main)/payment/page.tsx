"use client";

import { Button } from "@/components/ui/button";
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
import { Separator } from "@/components/ui/separator";
import { Banknote } from "lucide-react";
import Image from "next/image";

export default function Payment() {
  return (
    <div className="p-10">
      <h1 className="text-lg font-[500]">Payment</h1>
      <p className="text-sm font-[300] tracking-wide">
        Pay for your current fines.
      </p>
      <Separator className="my-8" />
      <div className="flex flex-col">
        <div className="flex flex-col gap-2 mb-10">
          <p className="text-sm font-bold">Amount:</p>
          <Input className="w-[30rem]" placeholder="0.00" />
          <p className="text-xs text-red-400">Current Fines: RM 3</p>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <p className="text-lg font-bold">Payment Details</p>
          <div className="flex justify-between w-full">
            <div className="flex flex-col gap-2 flex-1">
              <p className="text-sm font-bold">Online Banking</p>
              <Select>
                <SelectTrigger className="w-[30rem]">
                  <SelectValue placeholder="Select a Bank" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Banks</SelectLabel>
                    <SelectItem value="bank_islam">
                      <div className="flex gap-3 items-center">
                        <Image
                          alt="public_bank"
                          width={40}
                          height={40}
                          src={"/bank_islam.svg"}
                        />{" "}
                        Bank Islam
                      </div>
                    </SelectItem>
                    <SelectItem value="bank_simpanan_nasional">
                      <div className="flex gap-3 items-center">
                        <Image
                          alt="public_bank"
                          width={40}
                          height={40}
                          src={"/bsn.svg"}
                        />{" "}
                        Bank Simpanan Nasional
                      </div>
                    </SelectItem>
                    <SelectItem value="public_bank">
                      <div className="flex gap-3 items-center">
                        <Image
                          alt="public_bank"
                          width={40}
                          height={40}
                          src={"/pb.svg"}
                        />{" "}
                        Public Bank
                      </div>
                    </SelectItem>
                    <SelectItem value="maybank">
                      <div className="flex gap-3 items-center">
                        <Image
                          alt="public_bank"
                          width={40}
                          height={40}
                          src={"/maybank.svg"}
                        />{" "}
                        Maybank
                      </div>
                    </SelectItem>
                    <SelectItem value="tng">
                      <div className="flex gap-3 items-center">
                        <Image
                          alt="public_bank"
                          width={40}
                          height={40}
                          src={"/tng.svg"}
                        />{" "}
                        Touch'n Go
                      </div>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-center items-center flex-1">
              <p className="text-xl font-bold">OR</p>
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-sm font-bold mb-2">Cardholder Name</p>
              <Input className="w-[30rem]" placeholder="Cardholder Name" />

              <div className="flex mt-4">
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-bold">Card Number</p>
                  <Input
                    className="w-[30rem]"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                  />
                </div>
              </div>

              <div className="flex mt-4 gap-3">
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-bold">Exp</p>
                  <Input className="flex-1" placeholder="12/24" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-bold">CCV/CVC</p>
                  <Input className="flex-1" placeholder="XXX" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-bold">Postal Code</p>
                  <Input className="flex-1" placeholder="XXXXX" />
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="w-full flex justify-end mb-5">
            <div className="flex justify-between w-[10rem]">
              <p className="font-bold">Total:</p>
              <p className="">RM 0.00</p>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <Button className="w-[10rem]">Pay</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
