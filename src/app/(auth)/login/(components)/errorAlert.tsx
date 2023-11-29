import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ErrorAlert({
  errorMessage,
  success,
}: {
  errorMessage: string;
  success: boolean;
}) {
  return (
    <>
      {errorMessage !== "" && success !== true ? (
        <Alert variant="destructive" className="bg-red-100">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      ) : (
        ""
      )}
    </>
  );
}
