import { Button } from "@/components/ui/button";
import { RefObject } from "react";
import { useFormStatus } from "react-dom";
import SpinningLoading from "../../(components)/Spinning";

export default function SubmitButton({
  formRef,
}: {
  formRef: RefObject<HTMLFormElement>;
}) {
  const status = useFormStatus();

  return (
    <>
      {status.pending ? (
        <Button>
          <SpinningLoading />
        </Button>
      ) : (
        <Button
          onClick={() => {
            formRef.current?.requestSubmit();
          }}
        >
          Update Information
        </Button>
      )}
    </>
  );
}
