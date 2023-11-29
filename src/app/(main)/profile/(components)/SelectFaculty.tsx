"use client";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectFaculty({
  defaultValue,
}: {
  defaultValue: string;
}) {
  return (
    <>
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="faculty">Faculty</Label>
        <Select name="faculty" defaultValue={defaultValue}>
          <SelectTrigger id="faculty" className="w-full text-black">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Faculty</SelectLabel>
              <SelectItem value="Faculty of Computer Science and Information Technology">
                Faculty of Computer Science and Information Technology
              </SelectItem>
              <SelectItem value="Faculty of Science">
                Faculty of Science
              </SelectItem>
              <SelectItem value="Faculty of Engineering">
                Faculty of Engineering
              </SelectItem>
              <SelectItem value="Faculty of Medicine">
                Faculty of Medicine
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <p className="text-xs font-[300] tracking-wide">
          This will be your faculty.
        </p>
      </div>
    </>
  );
}
