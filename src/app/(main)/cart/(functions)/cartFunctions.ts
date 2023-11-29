import { BookType } from "@/dto/bookDTO";
import { PendingCheckoutType } from "@/dto/cartDTO";
export async function getCartBook(): Promise<BookType[]> {
  try {
    const req = await fetch(`/api/cart/get_my_cart`);
    const res: {
      status: number;
      books: BookType[];
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

export async function removeCart(code: string): Promise<number> {
  try {
    const req = await fetch("/api/cart/remove_cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });

    const res: { status: number } = await req.json();

    return res.status;
  } catch (err) {
    console.log(err);
    return 400;
  }
}

export async function cartCheckout(
  pendingCheckoutList: PendingCheckoutType[]
): Promise<number> {
  try {
    const checkoutList: { code: string }[] = [];
    pendingCheckoutList.forEach((pending) => {
      checkoutList.push({
        code: pending.book.code,
      });
    });
    const req = await fetch("/api/cart/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ checkouts: checkoutList }),
    });
    const res: { status: number } = await req.json();
    if (res.status === 200) {
      return res.status;
    } else {
      throw new Error("Checkout fails!");
    }
  } catch (error) {
    console.log(error);
    return 400;
  }
}
