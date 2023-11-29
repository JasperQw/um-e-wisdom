export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getUserDataFromCookie } from "@/helper/login_helper";
import moment from "moment";

export async function POST(request: NextRequest) {
  try {
    const currentDate = moment();
    const from = currentDate.format("YYYY-MM-DD");
    const to = currentDate.add(30, "days").format("YYYY-MM-DD");

    const { checkouts } = await request.json();
    const user_data = await getUserDataFromCookie();
    const { id } = user_data as { id: number; studentId: string };

    const studentCart = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        Cart: {
          select: {
            id: true,
          },
        },
      },
    });

    for (let c of checkouts) {
      await prisma.cart.update({
        where: {
          id: studentCart?.Cart?.id,
        },
        data: {
          book: {
            disconnect: { code: c.code },
          },
        },
      });

      const locationId = await prisma.book.findUnique({
        where: {
          code: c.code,
        },
        select: {
          location: {
            select: {
              id: true,
            },
          },
        },
      });

      await prisma.location.update({
        where: {
          id: locationId?.location?.id as number,
        },
        data: {
          shelfLocation: {
            disconnect: true,
          },
          shelfNumber: {
            disconnect: true,
          },
        },
      });

      await prisma.book.update({
        where: { code: c.code },
        data: {
          bookStatus: {
            connectOrCreate: {
              where: {
                name: "borrowed",
              },
              create: {
                name: "borrowed",
              },
            },
          },
          borrowable: false,
          holdable: true,
        },
      });

      await prisma.user.update({
        where: {
          id,
        },
        data: {
          Borrow: {
            create: {
              book: { connect: { code: c.code } },
              status: {
                connectOrCreate: {
                  where: { status: "borrowed" },
                  create: {
                    status: "borrowed",
                  },
                },
              },
              start: new Date(from).toISOString(),
              end: new Date(to).toISOString(),
            },
          },
        },
      });
    }

    return NextResponse.json({ status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 400 });
  }
}
