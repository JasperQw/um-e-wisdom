export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/db";
import { getUserDataFromCookie } from "@/helper/login_helper";

export async function GET(request: NextRequest) {
  try {
    const user_data = await getUserDataFromCookie();
    const { id } = user_data as { id: number; studentId: string };

    const collectionLists = await prisma.collectionList.findMany({
      where: {
        userId: id,
      },
      select: {
        name: true,
      },
    });

    const flattened_list: string[] = [];

    collectionLists.forEach((list) => {
      flattened_list.push(list.name);
    });

    const indexOfTemporaryList = flattened_list.indexOf("Temporary List");

    if (indexOfTemporaryList !== -1) {
      const temp = flattened_list[indexOfTemporaryList];
      flattened_list[indexOfTemporaryList] = flattened_list[0];
      flattened_list[0] = temp;
    } else {
      await prisma.collectionList.create({
        data: {
          user: {
            connect: {
              id,
            },
          },
          name: "Temporary List",
        },
      });
      flattened_list.push("Temporary List");
      const temp = flattened_list[flattened_list.length - 1];
      flattened_list[flattened_list.length - 1] = flattened_list[0];
      flattened_list[0] = temp;
    }

    return NextResponse.json({ collectionList: flattened_list, status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ collectionList: [], status: 400 });
  }
}
