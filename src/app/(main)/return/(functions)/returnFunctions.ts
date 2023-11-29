import { BorrowedBookType } from "@/dto/returnDTO";

export async function getBorrowedBooks(): Promise<BorrowedBookType[]> {
  try {
    const req = await fetch(`/api/return/get_all_borrow`);
    const res: {
      status: number;
      books: BorrowedBookType[];
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

export async function bookReturn(
  pendingReturnList: BorrowedBookType[]
): Promise<number> {
  try {
    const returnList: number[] = [];
    pendingReturnList.forEach((pending) => {
      returnList.push(pending.id);
    });
    const req = await fetch("/api/return/return_book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ books: returnList }),
    });
    const res: { status: number } = await req.json();
    if (res.status === 200) {
      return res.status;
    } else {
      throw new Error("Return fails!");
    }
  } catch (error) {
    console.log(error);
    return 400;
  }
}
