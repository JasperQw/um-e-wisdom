export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/db";
import { getUserDataFromCookie } from "@/helper/login_helper";
import { PendingApproveReturn } from "@/dto/returnDTO";

export async function GET(request: NextRequest) {
  try {
    const user_data = await getUserDataFromCookie();
    const { id } = user_data as { id: number; studentId: string };
    const status_id = await prisma.borrowStatus.findUnique({
      where: {
        status: "pending",
      },
      select: {
        id: true,
      },
    });

    if (status_id?.id) {
      const books = await prisma.borrow.findMany({
        where: {
          userId: id,
          borrowStatusId: status_id?.id,
        },
        select: {
          id: true,
          book: {
            select: {
              name: true,
              code: true,
              bookImage: true,
              location: {
                select: {
                  library: {
                    select: {
                      name: true,
                    },
                  },
                },
              },
            },
          },
          start: true,
          end: true,
          returnAt: true,
        },
      });
      const formattedList: PendingApproveReturn[] = [];

      books?.forEach((b) => {
        const checkoutObject: PendingApproveReturn = {
          name: b.book.name,

          bookImage: b.book.bookImage,
          start: b.start,
          end: b.end,
          returnAt: b.returnAt as Date,
          library: b.book.location?.library.name as string,
        };

        formattedList.push(checkoutObject);
      });
      return NextResponse.json({ books: formattedList, status: 200 });
    }

    return NextResponse.json({ books: [], status: 400 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ books: [], status: 400 });
  }
}
