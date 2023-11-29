import {
  BookType,
  BooksDataReturnType,
  FilterCategoryType,
  URLParamsFilterType,
} from "@/dto/bookDTO";
export async function getBookData(
  page: number,
  offset: number,
  filterObject: URLParamsFilterType
): Promise<BooksDataReturnType> {
  try {
    const {
      name,
      author,
      isbn,
      publication,
      publicationDate,
      edition,
      language,
      library,
    } = filterObject;

    const req = await fetch(
      `/api/book/get_all_book?page=${page}&offset=${offset}&name=${name}&author=${author}&isbn=${isbn}&publication=${publication}&publicationDate=${publicationDate}&edition=${edition}&library=${library}&language=${language}`
    );
    const res: {
      status: number;
      books: BookType[];
      total: number;
      category: FilterCategoryType;
    } = await req.json();

    if (res.status === 200) {
      return { books: res.books, total: res.total, category: res.category };
    } else {
      throw new Error("Fail to fetch books!");
    }
  } catch (error) {
    console.log(error);
    return {
      books: [],
      total: 0,
      category: {
        editionCat: [],
        publicationCat: [],
        publicationDateCat: [],
        languageCat: [],
        authorCat: [],
        libraryCat: [],
      },
    };
  }
}

export async function addCart(code: string): Promise<number> {
  try {
    const req = await fetch("/api/cart/add_cart", {
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

export async function addCollection(
  isbn: string,
  name: string
): Promise<number> {
  try {
    const req = await fetch("/api/collection/add_to_list", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isbn, name }),
    });

    const res: { status: number } = await req.json();

    return res.status;
  } catch (err) {
    console.log(err);
    return 400;
  }
}

export async function holdBook(
  code: string
): Promise<{ status: number; error: string | undefined }> {
  try {
    const req = await fetch("/api/hold/hold_book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });

    const res: { status: number; error: string | undefined } = await req.json();

    if (res.status === 400) {
      throw new Error(res.error);
    }

    return res;
  } catch (err: any) {
    return { status: 400, error: err.message };
  }
}
