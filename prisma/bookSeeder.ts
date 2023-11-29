import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function bookSeeder() {
  const book1 = await prisma.book.upsert({
    where: { id: 1 },
    update: {},
    create: {
      borrowable: true,
      holdable: true,
      name: "Employment of Foreign Workers (Levy) (Amendment No. 1) Order 1991.",
      bookImage: "/next.svg",
      publication: {
        connectOrCreate: {
          where: {
            name: "Boston, Mass : McGraw-Hill, 2009.",
          },
          create: {
            name: "Boston, Mass : McGraw-Hill, 2009.",
          },
        },
      },
      publicationDate: "2009",
      isbn: "9780077284091",
      edition: "10th ed.",
      location: {
        create: {
          library: {
            connectOrCreate: {
              where: { name: "Main Library" },
              create: { name: "Main Library" },
            },
          },
          shelfLocation: {
            connectOrCreate: {
              where: { name: "Open Shelf" },
              create: { name: "Open Shelf" },
            },
          },
          shelfNumber: {
            connectOrCreate: {
              where: { name: "TH12141241" },
              create: { name: "TH12141241" },
            },
          },
          material: {
            connectOrCreate: {
              where: { name: "book" },
              create: { name: "book" },
            },
          },
        },
      },
      bookStatus: {
        connectOrCreate: {
          where: {
            name: "available",
          },
          create: {
            name: "available",
          },
        },
      },
      author: {
        connectOrCreate: [
          {
            where: {
              name: "Sivananthan K. S.",
            },
            create: {
              name: "Sivananthan K. S.",
            },
          },
          {
            where: {
              name: "Stevenson, William J.",
            },
            create: {
              name: "Stevenson, William J.",
            },
          },
        ],
      },
      language: {
        connectOrCreate: {
          where: {
            name: "English",
          },
          create: {
            name: "English",
          },
        },
      },
    },
  });

  const book2 = await prisma.book.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: "Employment of Foreign Workers (Levy) (Amendment No. 2) Order 1991.",
      borrowable: true,
      holdable: true,
      bookImage: "/next.svg",
      publication: {
        connectOrCreate: {
          where: {
            name: "Boston, Mass : McGraw-Hill, 2009.",
          },
          create: {
            name: "Boston, Mass : McGraw-Hill, 2009.",
          },
        },
      },
      publicationDate: "2009",
      isbn: "9780077284091",
      edition: "10th ed.",
      location: {
        create: {
          library: {
            connectOrCreate: {
              where: { name: "Main Library" },
              create: { name: "Main Library" },
            },
          },
          shelfLocation: {
            connectOrCreate: {
              where: { name: "Open Shelf" },
              create: { name: "Open Shelf" },
            },
          },
          shelfNumber: {
            connectOrCreate: {
              where: { name: "TH12141241" },
              create: { name: "TH12141241" },
            },
          },
          material: {
            connectOrCreate: {
              where: { name: "book" },
              create: { name: "book" },
            },
          },
        },
      },
      bookStatus: {
        connectOrCreate: {
          where: {
            name: "available",
          },
          create: {
            name: "available",
          },
        },
      },
      author: {
        connectOrCreate: [
          {
            where: {
              name: "Sivananthan K. S.",
            },
            create: {
              name: "Sivananthan K. S.",
            },
          },
          {
            where: {
              name: "Stevenson, William J.",
            },
            create: {
              name: "Stevenson, William J.",
            },
          },
        ],
      },
      language: {
        connectOrCreate: {
          where: {
            name: "English",
          },
          create: {
            name: "English",
          },
        },
      },
    },
  });

  const book3 = await prisma.book.upsert({
    where: { id: 3 },
    update: {},
    create: {
      borrowable: false,
      holdable: false,
      name: "Employment of Foreign Workers (Levy) (Amendment No. 3) Order 1991.",
      bookImage: "/next.svg",
      publication: {
        connectOrCreate: {
          where: {
            name: "Boston, Mass : McGraw-Hill, 2009.",
          },
          create: {
            name: "Boston, Mass : McGraw-Hill, 2009.",
          },
        },
      },
      publicationDate: "2009",
      isbn: "9780077284091",
      edition: "10th ed.",
      location: {
        create: {
          library: {
            connectOrCreate: {
              where: { name: "Main Library" },
              create: { name: "Main Library" },
            },
          },
          shelfLocation: {
            connectOrCreate: {
              where: { name: "Open Shelf" },
              create: { name: "Open Shelf" },
            },
          },
          shelfNumber: {
            connectOrCreate: {
              where: { name: "TH12141241" },
              create: { name: "TH12141241" },
            },
          },
          material: {
            connectOrCreate: {
              where: { name: "book" },
              create: { name: "book" },
            },
          },
        },
      },
      bookStatus: {
        connectOrCreate: {
          where: {
            name: "available",
          },
          create: {
            name: "available",
          },
        },
      },
      author: {
        connectOrCreate: [
          {
            where: {
              name: "Sivananthan K. S.",
            },
            create: {
              name: "Sivananthan K. S.",
            },
          },
          {
            where: {
              name: "Stevenson, William J.",
            },
            create: {
              name: "Stevenson, William J.",
            },
          },
        ],
      },
      language: {
        connectOrCreate: {
          where: {
            name: "English",
          },
          create: {
            name: "English",
          },
        },
      },
    },
  });

  const book4 = await prisma.book.upsert({
    where: { id: 4 },
    update: {},
    create: {
      borrowable: true,
      holdable: true,
      name: "Employment of Foreign Workers (Levy) (Amendment No. 4) Order 1991.",
      bookImage: "/next.svg",
      publication: {
        connectOrCreate: {
          where: {
            name: "Boston, Mass : McGraw-Hill, 2009.",
          },
          create: {
            name: "Boston, Mass : McGraw-Hill, 2009.",
          },
        },
      },
      publicationDate: "2009",
      isbn: "9780077284091",
      edition: "10th ed.",
      location: {
        create: {
          library: {
            connectOrCreate: {
              where: { name: "Main Library" },
              create: { name: "Main Library" },
            },
          },
          shelfLocation: {
            connectOrCreate: {
              where: { name: "Open Shelf" },
              create: { name: "Open Shelf" },
            },
          },
          shelfNumber: {
            connectOrCreate: {
              where: { name: "TH12141241" },
              create: { name: "TH12141241" },
            },
          },
          material: {
            connectOrCreate: {
              where: { name: "book" },
              create: { name: "book" },
            },
          },
        },
      },
      bookStatus: {
        connectOrCreate: {
          where: {
            name: "available",
          },
          create: {
            name: "available",
          },
        },
      },
      author: {
        connectOrCreate: [
          {
            where: {
              name: "Sivananthan K. S.",
            },
            create: {
              name: "Sivananthan K. S.",
            },
          },
          {
            where: {
              name: "Stevenson, William J.",
            },
            create: {
              name: "Stevenson, William J.",
            },
          },
        ],
      },
      language: {
        connectOrCreate: {
          where: {
            name: "English",
          },
          create: {
            name: "English",
          },
        },
      },
    },
  });
}
