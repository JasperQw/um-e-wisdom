export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/db";
import { getUserDataFromCookie } from "@/helper/login_helper";
import { BorrowedBookType } from "@/dto/returnDTO";

export async function GET(request: NextRequest) {
  try {
    const user_data = await getUserDataFromCookie();
    const { id } = user_data as { id: number; studentId: string };
    const status_id = await prisma.borrowStatus.findUnique({
      where: {
        status: "borrowed",
      },
      select: {
        id: true,
      },
    });
    const books = await prisma.borrow.findMany({
      where: {
        userId: id,
        borrowStatusId: status_id?.id,
      },
      select: {
        id: true,
        book: {
          select: {
            location: {
              select: {
                library: {
                  select: {
                    name: true,
                  },
                },
              },
            },
            name: true,
            code: true,
            bookImage: true,
            author: {
              select: {
                name: true,
              },
            },
            publication: {
              select: {
                name: true,
              },
            },
            publicationDate: true,
            isbn: true,
          },
        },
        start: true,
        end: true,
      },
    });
    const formattedList: BorrowedBookType[] = [];

    books?.forEach((b) => {
      const author: string[] = [];
      b.book.author.forEach((a) => {
        author.push(a.name);
      });
      const checkoutObject: BorrowedBookType = {
        id: b.id,
        book: {
          name: b.book.name,
          code: b.book.code,
          bookImage: b.book.bookImage,
          publication: b.book.publication.name,
          author: author,
          publicationDate: b.book.publicationDate,
          isbn: b.book.isbn,
          location: b.book.location?.library.name as string,
        },
        start: b.start,
        end: b.end,
      };

      formattedList.push(checkoutObject);
    });

    return NextResponse.json({ books: formattedList, status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ books: [], status: 400 });
  }
}
