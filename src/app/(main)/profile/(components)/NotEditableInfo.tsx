"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ineditableFieldsDto } from "@/dto/profileDTO";
export default function NotEditableInfo({
  ineditableFields,
}: {
  ineditableFields: ineditableFieldsDto;
}) {
  return (
    <>
      {/* Email */}
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="email">Email</Label>
        <Input
          readOnly
          value={ineditableFields.email}
          id="email"
          type="email"
        />
        <p className="text-xs font-[300] tracking-wide">
          This is your siswa email. This field cannot be edited.
        </p>
      </div>

      {/* Student ID */}
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="student_id">Student ID</Label>
        <Input
          readOnly
          value={ineditableFields.studentId}
          id="student_id"
          type="text"
        />
        <p className="text-xs font-[300] tracking-wide">
          This is your metric number.
        </p>
      </div>

      {/* Date Expire */}
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="date_expire">Account Valid Until</Label>
        <Input
          readOnly
          value={ineditableFields.date_expire.substring(0, 10)}
          id="date_expire"
          type="date"
        />
        <p className="text-xs font-[300] tracking-wide">
          Your account will be deactivated after the date.
        </p>
      </div>

      {/* Account Status */}
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="status">Status</Label>
        <Input
          readOnly
          value={ineditableFields.status}
          id="status"
          type="text"
        />
        <p className="text-xs font-[300] tracking-wide">
          This is your account status.
        </p>
      </div>
    </>
  );
}
