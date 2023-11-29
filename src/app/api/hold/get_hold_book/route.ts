export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/db";
import { getUserDataFromCookie } from "@/helper/login_helper";
import { HoldRequestType } from "@/dto/holdDTO";

export async function GET(request: NextRequest) {
  try {
    const user_data = await getUserDataFromCookie();
    const { id } = user_data as { id: number; studentId: string };
    const pending_return_id = await prisma.holdStatus.findUnique({
      where: {
        status: "pending_return",
      },
      select: {
        id: true,
      },
    });

    const pending_pick_up_id = await prisma.holdStatus.findUnique({
      where: {
        status: "pending_pick_up",
      },
      select: {
        id: true,
      },
    });

    const PendingReturnList: HoldRequestType[] = [];
    if (pending_return_id?.id) {
      const books = await prisma.holdList.findMany({
        where: {
          userId: id,
          holdStatusId: pending_return_id?.id,
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
          from: true,
          to: true,
        },
      });

      books?.forEach((b) => {
        const checkoutObject: HoldRequestType = {
          name: b.book.name,
          id: b.id,
          bookImage: b.book.bookImage,
          from: b.from,
          to: b.to,
          library: b.book.location?.library.name as string,
        };

        PendingReturnList.push(checkoutObject);
      });
    }

    const PendingPickUpList: HoldRequestType[] = [];
    if (pending_pick_up_id?.id) {
      const books = await prisma.holdList.findMany({
        where: {
          userId: id,
          holdStatusId: pending_pick_up_id?.id,
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
          from: true,
          to: true,
        },
      });

      books?.forEach((b) => {
        const checkoutObject: HoldRequestType = {
          name: b.book.name,
          id: b.id,
          bookImage: b.book.bookImage,
          from: b.from,
          to: b.to,
          library: b.book.location?.library.name as string,
        };

        PendingPickUpList.push(checkoutObject);
      });
    }

    return NextResponse.json({
      pending_return: PendingReturnList,
      pending_pick_up: PendingPickUpList,
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      pending_return: [],
      pending_pick_up: [],
      status: 400,
    });
  }
}
