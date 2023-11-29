export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getUserDataFromCookie } from "@/helper/login_helper";

export async function POST(request: NextRequest) {
  try {
    const { holdId } = await request.json();
    const user_data = await getUserDataFromCookie();
    const { id } = user_data as { id: number; studentId: string };

    if (id) {
      const bookCode = await prisma.holdList.findUnique({
        where: {
          id: holdId,
        },
        select: {
          book: {
            select: {
              code: true,
            },
          },
        },
      });

      await prisma.book.update({
        where: {
          code: bookCode?.book.code as string,
        },
        data: {
          holdable: true,
        },
      });

      await prisma.holdList.delete({
        where: {
          id: holdId,
        },
      });
    }

    return NextResponse.json({ status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 400 });
  }
}
