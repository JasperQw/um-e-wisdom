export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/db";
import { getUserDataFromCookie } from "@/helper/login_helper";
import { BookType, LocationType } from "@/dto/bookDTO";

export async function POST(request: NextRequest) {
  try {
    const { name } = await request.json();
    const user_data = await getUserDataFromCookie();
    const { id } = user_data as { id: number; studentId: string };
    const books = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        CollectionList: {
          where: {
            name,
          },
          select: {
            book: {
              select: {
                holdable: true,
                borrowable: true,
                name: true,
                bookImage: true,
                code: true,
                publication: {
                  select: {
                    name: true,
                  },
                },
                author: {
                  select: {
                    name: true,
                  },
                },
                publicationDate: true,
                isbn: true,
                edition: true,
                location: {
                  select: {
                    id: true,
                    library: {
                      select: {
                        name: true,
                      },
                    },
                    shelfLocation: {
                      select: {
                        name: true,
                      },
                    },
                    shelfNumber: {
                      select: {
                        name: true,
                      },
                    },
                    material: {
                      select: {
                        name: true,
                      },
                    },
                  },
                },
                language: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (books && books.CollectionList && books.CollectionList[0]) {
      const isbnList: string[] = [];
      const isbnIndex: number[] = [];
      const formatted_books_data: BookType[] = [];
      books.CollectionList[0].book.forEach((book, index: number) => {
        if (isbnList.includes(book.isbn)) {
          const indexIsbn: number = isbnList.findIndex((isbn) => {
            return isbn === book.isbn;
          });
          let location: LocationType = {
            id: book.location?.id,
            library: book.location?.library.name,
            shelfLocation: book.location?.shelfLocation?.name,
            shelfNumber: book.location?.shelfNumber?.name,
            material: book.location?.material.name,
            borrowable: book.borrowable,
            holdable: book.holdable,
            name: book.name,
            code: book.code,
          };

          formatted_books_data[isbnIndex[indexIsbn]].location?.push(location);
        } else {
          let authors: string[] = [];
          isbnList.push(book.isbn);
          isbnIndex.push(index);
          book.author.forEach((author) => {
            authors.push(author.name);
          });

          let location: LocationType[] = [
            {
              id: book.location?.id,
              library: book.location?.library.name,
              shelfLocation: book.location?.shelfLocation?.name,
              shelfNumber: book.location?.shelfNumber?.name,
              material: book.location?.material.name,
              borrowable: book.borrowable,
              holdable: book.holdable,
              name: book.name,
              code: book.code,
            },
          ];

          formatted_books_data.push({
            ...book,
            location,
            author: authors,
            publication: book.publication.name,
            language: book.language.name,
          });
        }
      });

      return NextResponse.json({ books: formatted_books_data, status: 200 });
    }

    return NextResponse.json({ books: [], status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ books: [], status: 400 });
  }
}
