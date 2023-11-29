import { BookAttributes } from "./returnDTO";

export type RenewBookType = {
  id: number;
  book: BookAttributes;
  start: Date;
  end: Date;
};
