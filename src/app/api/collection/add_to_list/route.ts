export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getUserDataFromCookie } from "@/helper/login_helper";

export async function POST(request: NextRequest) {
  try {
    const { isbn, name } = await request.json();
    const user_data = await getUserDataFromCookie();
    const { id } = user_data as { id: number; studentId: string };

    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        CollectionList: true,
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

    const flatList: string[] = [];
    user?.CollectionList.forEach((l) => {
      flatList.push(l.name);
    });

    if (user?.CollectionList) {
      const targetListIndex = flatList.indexOf(name);
      if (targetListIndex !== -1) {
        await prisma.collectionList.update({
          where: {
            id: user?.CollectionList[targetListIndex].id,
          },
          data: {
            book: { connect: codeList },
          },
        });
      }
    } else {
      await prisma.collectionList.create({
        data: {
          name,
          book: { connect: codeList },
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
