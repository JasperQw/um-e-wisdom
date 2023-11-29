export const dynamic = "force-dynamic";

import { BookType, LocationType } from "@/dto/bookDTO";
import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const page = Number(request.nextUrl.searchParams.get("page"));
    const offset = Number(request.nextUrl.searchParams.get("offset"));
    const name = request.nextUrl.searchParams.get("name") ?? "";
    const author = request.nextUrl.searchParams.get("author") ?? "";
    const isbn = request.nextUrl.searchParams.get("isbn") ?? "";
    const publication = request.nextUrl.searchParams.get("publication") ?? "";
    const publicationDate =
      request.nextUrl.searchParams.get("publicationDate") ?? "";
    const edition = request.nextUrl.searchParams.get("edition") ?? "";
    const library = request.nextUrl.searchParams.get("library") ?? "";
    const language = request.nextUrl.searchParams.get("language") ?? "";

    const whereLanguage =
      language === ""
        ? {}
        : {
            in: JSON.parse(language),
          };

    const whereLibrary =
      library === ""
        ? {}
        : {
            in: JSON.parse(library),
          };

    const whereEdition =
      edition === ""
        ? {}
        : {
            in: JSON.parse(edition),
          };

    const wherePublicationDate =
      publicationDate === ""
        ? {}
        : {
            in: JSON.parse(publicationDate),
          };

    const where = {
      name: {
        contains: name,
      },
      isbn: {
        contains: isbn,
      },
      author: {
        some: {
          name: {},
        },
      },
      publication: {
        name: {},
      },
      publicationDate: wherePublicationDate,
      edition: whereEdition,
      location: {
        library: {
          name: whereLibrary,
        },
      },
      language: {
        name: whereLanguage,
      },
    };

    if (author.charAt(0) === "[" && author.charAt(author.length - 1) === "]") {
      where.author.some.name = { in: JSON.parse(author) };
    } else {
      where.author.some.name = { contains: author };
    }

    if (
      publication.charAt(0) === "[" &&
      publication.charAt(publication.length - 1) === "]"
    ) {
      where.publication.name = { in: JSON.parse(publication) };
    } else {
      where.publication.name = { contains: publication };
    }

    const distinctAuthor = await prisma.book.findMany({
      where,
      select: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    const distinctLibrary = await prisma.book.findMany({
      where,
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
      },
    });

    const distinctCategory = await prisma.book.findMany({
      where,
      distinct: ["publicationId", "edition", "languageId", "publicationDate"],
      select: {
        edition: true,
        publicationDate: true,
        publication: {
          select: {
            name: true,
          },
        },
        language: {
          select: {
            name: true,
          },
        },
      },
    });

    let editionCat: string[] = [];
    let publicationDateCat: string[] = [];
    let publicationCat: string[] = [];
    let languageCat: string[] = [];
    let authorCat: string[] = [];
    let libraryCat: string[] = [];

    distinctCategory.forEach((cat) => {
      !editionCat.includes(cat.edition) ? editionCat.push(cat.edition) : "";
      !publicationDateCat.includes(cat.publicationDate)
        ? publicationDateCat.push(cat.publicationDate)
        : "";
      !publicationCat.includes(cat.publication.name)
        ? publicationCat.push(cat.publication.name)
        : "";
      !languageCat.includes(cat.language.name)
        ? languageCat.push(cat.language.name)
        : "";
    });

    distinctAuthor.forEach((authors) => {
      authors.author.forEach((author) => {
        !authorCat.includes(author.name) ? authorCat.push(author.name) : "";
      });
    });

    distinctLibrary.forEach((libraries) => {
      !libraryCat.includes(libraries.location?.library.name as string)
        ? libraryCat.push(libraries.location?.library.name as string)
        : "";
    });

    let category = {
      editionCat,
      publicationCat,
      publicationDateCat,
      languageCat,
      authorCat,
      libraryCat,
    };

    const total = await prisma.book.count({ where });

    const books = await prisma.book.findMany({
      where,
      select: {
        borrowable: true,
        holdable: true,
        code: true,
        name: true,
        bookImage: true,
        publicationDate: true,
        publication: {
          select: {
            name: true,
          },
        },
        isbn: true,
        edition: true,
        author: {
          select: {
            name: true,
          },
        },
        location: {
          select: {
            id: true,
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
            library: {
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
      skip: (page - 1) * offset,
      take: offset,
    });

    const isbnList: string[] = [];
    const isbnIndex: number[] = [];
    const formatted_books_data: BookType[] = [];
    books.forEach((book, index: number) => {
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

    return NextResponse.json({
      status: 200,
      books: formatted_books_data,
      total,
      category,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 400 });
  }
}
