"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const status = useFormStatus();
  return (
    <Button className="w-full" disabled={status.pending} type="submit">
      Login
    </Button>
  );
}
