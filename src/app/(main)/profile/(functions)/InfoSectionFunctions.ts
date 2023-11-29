import { editableFieldsDto, ineditableFieldsDto } from "@/dto/profileDTO";

export async function getEditableFields(): Promise<editableFieldsDto> {
  try {
    const req = await fetch("/api/get_editable_fields", {
      next: { tags: ["editableFields"] },
    });
    const res = await req.json();

    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error("Fail to fetch editable fields!");
    }
  } catch (error) {
    return {
      name: "",
      phone: "",
      faculty: "",
    };
  }
}

export async function getIneditableFields(): Promise<ineditableFieldsDto> {
  try {
    const req = await fetch("/api/get_ineditable_fields");
    const res = await req.json();

    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error("Fail to fetch ineditable fields!");
    }
  } catch (error) {
    return {
      email: "",
      studentId: "",
      date_expire: "",
      status: "",
    };
  }
}
