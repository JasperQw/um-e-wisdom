import { PendingApproveReturn } from "@/dto/returnDTO";

export async function getAllPending(): Promise<PendingApproveReturn[]> {
  try {
    const req = await fetch("/api/return/get_all_pending");
    const res: { books: PendingApproveReturn[]; status: number } =
      await req.json();
    if (res.status === 200) {
      return res.books;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}
