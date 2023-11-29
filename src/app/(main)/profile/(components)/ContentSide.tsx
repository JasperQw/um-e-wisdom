"use client";

import { Separator } from "@/components/ui/separator";

import NotEditableInfo from "./NotEditableInfo";
import { useEffect, useRef, useState } from "react";
import { EditableInfo } from "./EditableInfo";
import {
  getEditableFields,
  getIneditableFields,
} from "../(functions)/InfoSectionFunctions";
import { editableFieldsDto, ineditableFieldsDto } from "@/dto/profileDTO";
import InformationLoading from "../(Loading)/InformationLoading";
import SubmitButton from "./SubmitButton";

export default function ContentSide() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [editableFields, setEditableFields] = useState<editableFieldsDto>({
    name: "",
    phone: "",
    faculty: "",
  });

  const [ineditableFields, setIneditableFields] = useState<ineditableFieldsDto>(
    {
      email: "",
      studentId: "",
      date_expire: "",
      status: "",
    }
  );

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const editableFields = await getEditableFields();
        const ineditableFields = await getIneditableFields();
        setEditableFields(editableFields);
        setIneditableFields(ineditableFields);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <>
      {isLoading ? (
        <InformationLoading />
      ) : (
        <aside className="w-[50rem]">
          <h1 className="text-lg font-[500]">Information</h1>
          <p className="text-sm font-[300] tracking-wide">
            Browse and edit your information here.
          </p>
          <Separator className="my-8" />
          <div className="w-full flex flex-col gap-10">
            <EditableInfo editableFields={editableFields} ref={formRef} />
            <NotEditableInfo ineditableFields={ineditableFields} />
            {/* Edit Button */}
            <div className="flex justify-end">
              <SubmitButton formRef={formRef} />
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
