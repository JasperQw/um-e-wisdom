"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SelectFaculty from "./SelectFaculty";
import { useFormState } from "react-dom";
import { updateInfoActions } from "../(actions)/updateInfoActions";
import { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { getEditableFields } from "../(functions)/InfoSectionFunctions";
import { editableFieldsDto } from "@/dto/profileDTO";
import InformationLoading from "../(Loading)/InformationLoading";

export const EditableInfo = forwardRef(
  (
    { editableFields }: { editableFields: editableFieldsDto },
    ref: ForwardedRef<HTMLFormElement>
  ) => {
    const [updateState, updateAction] = useFormState(updateInfoActions, {
      error: "",
      success: false,
    });

    return (
      <>
        <form
          ref={ref}
          action={updateAction}
          className="w-full flex flex-col gap-10"
        >
          {/* Name */}
          <div className="grid w-full items-center gap-3">
            <Label htmlFor="name">Name</Label>
            <Input
              name="name"
              defaultValue={editableFields.name}
              id="name"
              type="text"
            />
            <p className="text-xs font-[300] tracking-wide">
              This is your name in MAYA system. This should be same as your name
              as in IC.
            </p>
          </div>

          {/* Phone */}
          <div className="grid w-full items-center gap-3">
            <Label htmlFor="phone">Phone</Label>
            <Input
              name="phone"
              defaultValue={editableFields.phone}
              id="phone"
              type="text"
            />
            <p className="text-xs font-[300] tracking-wide">
              Put your contact number here.
            </p>
          </div>

          {/* Faculty */}
          <SelectFaculty defaultValue={editableFields.faculty} />
        </form>
      </>
    );
  }
);
