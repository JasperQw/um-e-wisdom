export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getUserDataFromCookie } from "@/helper/login_helper";

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();
    const user_data = await getUserDataFromCookie();
    const { id } = user_data as { id: number; studentId: string };

    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        Cart: true,
      },
    });

    if (user?.Cart) {
      await prisma.cart.update({
        where: {
          id: user?.Cart?.id,
        },
        data: {
          book: { connect: { code } },
        },
      });
    } else {
      await prisma.cart.create({
        data: {
          book: { connect: { code } },
          user: { connect: { id } },
        },
      });
    }

    return NextResponse.json({ status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 400 });
  }
}
