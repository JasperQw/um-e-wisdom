export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/db";
import { getUserDataFromCookie } from "@/helper/login_helper";

export async function POST(request: NextRequest) {
  try {
    const { name } = await request.json();
    const user_data = await getUserDataFromCookie();
    const { id } = user_data as { id: number; studentId: string };
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        CollectionList: {
          select: {
            name: true,
          },
        },
      },
    });

    const list: string[] = [];
    user?.CollectionList.forEach((l) => {
      list.push(l.name);
    });

    if (!list.includes("Temporary List")) {
      await prisma.collectionList.create({
        data: {
          name: "Temporary List",
          user: {
            connect: {
              id,
            },
          },
        },
      });
    }

    if (!list.includes(name)) {
      await prisma.collectionList.create({
        data: {
          name,
          user: {
            connect: {
              id,
            },
          },
        },
      });
    } else {
      throw new Error("List already existed!");
    }

    return NextResponse.json({ status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 400 });
  }
}
