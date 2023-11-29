export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getUserDataFromCookie } from "@/helper/login_helper";
import moment from "moment";

export async function POST(request: NextRequest) {
  try {
    const { books } = await request.json();
    const user_data = await getUserDataFromCookie();
    const { id } = user_data as { id: number; studentId: string };
    if (id) {
      for (let b of books) {
        const borrow = await prisma.borrow.findUnique({
          where: {
            id: b,
          },
          select: {
            end: true,
          },
        });
        await prisma.borrow.update({
          where: {
            id: b,
          },
          data: {
            renewalTimes: {
              increment: 1,
            },
            end: moment(borrow?.end).add(30, "days").toISOString(),
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
