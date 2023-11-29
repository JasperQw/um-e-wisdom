import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function userSeeder() {
  const user1 = await prisma.user.upsert({
    where: { email: "user@email.com" },
    update: {},
    create: {
      email: "user@email.com",
      name: "Ng Ching Wei",
      password: "$2b$10$j42XJXqVm.TYI9DCcMJnxuf4Vazx1ECcisXIe3gWUy5pNmGE5s6YG",
      faculty: "Faculty of Computer Science and Information Technology",
      phone: "01170216015",
      studentId: "22004844",
      date_expire: new Date("2026-10-01"),
      status: {
        connectOrCreate: {
          where: {
            status: "OK",
          },
          create: {
            status: "OK",
          },
        },
      },
    },
  });
}
