export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getUserDataFromCookie } from "@/helper/login_helper";

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();
    const user_data = await getUserDataFromCookie();
    const { id } = user_data as { id: number; studentId: string };

    const book = await prisma.book.findUnique({
      where: {
        code,
      },
      select: {
        HoldList: true,
        holdable: true,
      },
    });

    if (book && book.holdable) {
      await prisma.book.update({
        where: {
          code,
        },
        data: {
          holdable: false,
        },
      });

      await prisma.user.update({
        where: {
          id,
        },
        data: {
          HoldList: {
            create: {
              book: {
                connect: {
                  code,
                },
              },
              status: {
                connectOrCreate: {
                  where: {
                    status: "pending_return",
                  },
                  create: {
                    status: "pending_return",
                  },
                },
              },
              from: null,
              to: null,
            },
          },
        },
      });
      return NextResponse.json({ status: 200 });
    } else {
      throw new Error("Book cannot be hold!");
    }
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ status: 400, error: err.message });
  }
}
