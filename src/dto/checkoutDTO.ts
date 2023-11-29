export type CheckoutType = {
  book: {
    name: string;
    bookImage: string;
    code: string;
  };
  status: string;
  start: Date;
  end: Date;
  returnAt: Date | null;
  library: string;
};
