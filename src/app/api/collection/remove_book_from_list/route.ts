export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/db";
import { getUserDataFromCookie } from "@/helper/login_helper";

export async function POST(request: NextRequest) {
  try {
    const { name, isbn } = await request.json();
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

    const booksCode = await prisma.book.findMany({
      where: {
        isbn,
      },
      select: {
        code: true,
      },
    });

    const codeList: { code: string }[] = booksCode.map((c) => {
      return { code: c.code };
    });

    let collectionId;
    user?.CollectionList.forEach((l) => {
      if (l.name === name) {
        collectionId = l.id;
      }
    });
    if (collectionId) {
      await prisma.collectionList.update({
        where: {
          id: collectionId,
        },
        data: {
          book: {
            disconnect: codeList,
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
