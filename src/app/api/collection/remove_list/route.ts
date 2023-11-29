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
            id: true,
            name: true,
          },
        },
      },
    });

    let collectionId;
    user?.CollectionList.forEach((l) => {
      if (l.name === name) {
        collectionId = l.id;
      }
    });
    if (collectionId) {
      await prisma.collectionList.delete({
        where: {
          id: collectionId,
        },
      });
    }

    return NextResponse.json({ status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 400 });
  }
}
