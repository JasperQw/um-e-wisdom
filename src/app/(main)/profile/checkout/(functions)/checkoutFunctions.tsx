import { CheckoutType } from "@/dto/checkoutDTO";

export async function getAllCheckouts(): Promise<CheckoutType[]> {
  try {
    const req = await fetch("/api/checkout/get_all_checkout");
    const res: { books: CheckoutType[]; status: number } = await req.json();
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
