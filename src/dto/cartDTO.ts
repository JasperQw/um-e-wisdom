import { BookType } from "./bookDTO";

export type PendingCheckoutType = {
  book: BookType;
  from: string;
  to: string;
};
