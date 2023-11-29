"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const status = useFormStatus();
  return (
    <Button disabled={status.pending} type="submit">
      Login
    </Button>
  );
}
