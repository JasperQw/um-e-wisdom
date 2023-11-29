export const dynamic = "force-dynamic";

import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const category = request.nextUrl.searchParams.get("category") ?? "";
    const searchText = request.nextUrl.searchParams.get("searchText") ?? "";
    let data:
      | { name: string }[]
      | { author: { name: string }[] }[]
      | { publication: { name: string } }[];
    const newData: string[] = [];
    switch (category) {
      case "name":
        data = await prisma.book.findMany({
          where: {
            name: {
              contains: searchText,
            },
          },
          select: {
            name: true,
          },
        });

        data.forEach((d) => {
          newData.push(d.name);
        });
        break;
      case "isbn":
        data = await prisma.book.findMany({
          where: {
            isbn: {
              contains: searchText,
            },
          },
          select: {
            name: true,
          },
        });
        data.forEach((d) => {
          newData.push(d.name);
        });
        break;
      case "author":
        data = await prisma.book.findMany({
          where: {
            author: {
              some: {
                name: {
                  contains: searchText,
                },
              },
            },
          },
          select: {
            author: {
              select: {
                name: true,
              },
            },
          },
        });
        data.forEach((d) => {
          d.author.forEach((a) => {
            if (!newData.includes(a.name)) {
              newData.push(a.name);
            }
          });
        });
        break;
      case "publication":
        data = await prisma.book.findMany({
          where: {
            publication: {
              name: {
                contains: searchText,
              },
            },
          },
          select: {
            publication: {
              select: {
                name: true,
              },
            },
          },
        });
        data.forEach((d) => {
          if (!newData.includes(d.publication.name)) {
            newData.push(d.publication.name);
          }
        });
        break;
      default:
        data = [];
        break;
    }

    return NextResponse.json({
      status: 200,
      data: newData,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      status: 400,
      data: [],
    });
  }
}
