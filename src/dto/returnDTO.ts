export type BookAttributes = {
  name: string;
  code: string;
  bookImage: string;
  author: string[];
  publication: string;
  publicationDate: string;
  isbn: string;
  location: string;
};

export type BorrowedBookType = {
  id: number;
  book: BookAttributes;
  start: Date;
  end: Date;
};

export type PendingApproveReturn = {
  name: string;
  bookImage: string;
  start: Date;
  end: Date;
  returnAt: Date;
  library: string;
};
