import { RenewBookType } from "@/dto/renewDTO";

export async function getRenewables(): Promise<RenewBookType[]> {
  try {
    const req = await fetch(`/api/renew/get_all_renewable`);
    const res: {
      status: number;
      books: RenewBookType[];
    } = await req.json();

    if (res.status === 200) {
      return res.books;
    } else {
      throw new Error("Fail to fetch books!");
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function bookRenew(
  pendingRenewList: RenewBookType[]
): Promise<number> {
  try {
    const renewList: number[] = [];
    pendingRenewList.forEach((pending) => {
      renewList.push(pending.id);
    });
    const req = await fetch("/api/renew/renew_book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ books: renewList }),
    });
    const res: { status: number } = await req.json();
    if (res.status === 200) {
      return res.status;
    } else {
      throw new Error("Renew fails!");
    }
  } catch (error) {
    console.log(error);
    return 400;
  }
}
