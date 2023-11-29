export const dynamic = "force-dynamic";

import { getUserDataFromCookie } from "@/helper/login_helper";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const user_data = await getUserDataFromCookie();
    const { id } = user_data as { id: number; studentId: string };
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      throw new Error("User does not exist!");
    }

    const { name, phone, faculty } = user;

    return NextResponse.json({ status: 200, data: { name, phone, faculty } });
  } catch (err) {
    return NextResponse.json({ status: 400 });
  }
}
