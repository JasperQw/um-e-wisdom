import { BookType } from "@/dto/bookDTO";
export async function getCollectionBooks(name: string): Promise<BookType[]> {
  try {
    const req = await fetch(`/api/collection/get_my_collection`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
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

export async function getCollectionLists(): Promise<string[]> {
  try {
    const req = await fetch(`/api/collection/get_all_list`);
    const res: {
      status: number;
      collectionList: string[];
    } = await req.json();

    if (res.status === 200) {
      return res.collectionList;
    } else {
      throw new Error("Fail to fetch books!");
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function addNewList(name: string): Promise<number> {
  try {
    const req = await fetch(`/api/collection/add_list`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    const res: {
      status: number;
    } = await req.json();

    if (res.status === 200) {
      return res.status;
    } else {
      throw new Error("Fail to add new list!");
    }
  } catch (error) {
    console.log(error);
    return 400;
  }
}

export async function removeList(name: string): Promise<number> {
  try {
    const req = await fetch(`/api/collection/remove_list`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    const res: {
      status: number;
    } = await req.json();

    if (res.status === 200) {
      return res.status;
    } else {
      throw new Error("Fail to remove list!");
    }
  } catch (error) {
    console.log(error);
    return 400;
  }
}

export async function removeBookFromList(
  name: string,
  isbn: string
): Promise<number> {
  try {
    const req = await fetch(`/api/collection/remove_book_from_list`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, isbn }),
    });
    const res: {
      status: number;
    } = await req.json();

    if (res.status === 200) {
      return res.status;
    } else {
      throw new Error("Fail to remove list!");
    }
  } catch (error) {
    console.log(error);
    return 400;
  }
}
