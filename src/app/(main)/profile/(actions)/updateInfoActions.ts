"use server";

import { updateInfoDto } from "@/dto/profileDTO";
import { getUserDataFromCookie } from "@/helper/login_helper";
import prisma from "@/lib/db";
import { revalidateTag } from "next/cache";

export async function updateInfoActions(
  prevState: updateInfoDto,
  formData: FormData
): Promise<updateInfoDto> {
  try {
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const faculty = formData.get("faculty") as string;
    const user_data = await getUserDataFromCookie();

    await prisma.user.update({
      where: {
        id: user_data?.id as number,
      },
      data: {
        name,
        phone,
        faculty,
      },
    });

    revalidateTag("editableFields");
    return {
      error: "",
      success: false,
    };
  } catch (error) {
    return {
      error: "",
      success: false,
    };
  }
}
