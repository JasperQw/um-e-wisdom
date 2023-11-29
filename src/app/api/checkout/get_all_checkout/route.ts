export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/db";
import { getUserDataFromCookie } from "@/helper/login_helper";
import { CheckoutType } from "@/dto/checkoutDTO";

export async function GET(request: NextRequest) {
  try {
    const user_data = await getUserDataFromCookie();
    const { id } = user_data as { id: number; studentId: string };

    const books = await prisma.user.findUnique({
      where: { id },
      select: {
        Borrow: {
          select: {
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
            status: {
              select: {
                status: true,
              },
            },
            start: true,
            end: true,
            returnAt: true,
          },
        },
      },
    });

    const formattedList: CheckoutType[] = [];

    books?.Borrow.forEach((b) => {
      const checkoutObject: CheckoutType = {
        book: b.book,
        status: b.status.status,
        start: b.start,
        end: b.end,
        returnAt: b.returnAt,
        library: b.book.location?.library.name as string,
      };

      formattedList.push(checkoutObject);
    });

    return NextResponse.json({ books: formattedList, status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ books: [], status: 400 });
  }
}
