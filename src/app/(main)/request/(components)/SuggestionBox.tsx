"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function SuggestionBox() {
  return (
    <div className="w-full space-y-6">
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="suggestion">Suggestion</Label>
        <Textarea
          value={""}
          placeholder="Your suggestion..."
          id="suggestion"
          rows={10}
        />
        <p className="text-xs font-[300] tracking-wide">
          Leave your suggestion here! We are glad to hear from you!
        </p>
      </div>
      <div className="flex justify-end">
        <Button className="w-[10rem]">Send</Button>
      </div>
    </div>
  );
}
