export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getUserDataFromCookie } from "@/helper/login_helper";

export async function POST(request: NextRequest) {
  try {
    const { books } = await request.json();
    const user_data = await getUserDataFromCookie();
    const { id } = user_data as { id: number; studentId: string };
    if (id) {
      for (let b of books) {
        await prisma.borrow.update({
          where: {
            id: b,
          },
          data: {
            status: {
              connectOrCreate: {
                where: {
                  status: "pending",
                },
                create: {
                  status: "pending",
                },
              },
            },
            returnAt: new Date().toISOString(),
          },
        });
      }

      return NextResponse.json({ status: 200 });
    }

    return NextResponse.json({ status: 400 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 400 });
  }
}
