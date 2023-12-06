"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Comments() {
  return (
    <>
      <div className="w-full space-y-6">
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="comments">Comments</Label>
          <Textarea
            value={""}
            placeholder="Your comments..."
            id="comments"
            rows={10}
          />
          <p className="text-xs font-[300] tracking-wide">
            Leave your comments here! We are glad to hear from you!
          </p>
        </div>
        <div className="flex justify-end">
          <Button className="w-[10rem]">Send</Button>
        </div>
      </div>
    </>
  );
}
