export type LocationType = {
  id: number | undefined;
  library: string | undefined | null;
  shelfLocation: string | undefined | null;
  shelfNumber: string | undefined | null;
  material: string | undefined | null;
  borrowable: boolean;
  holdable: boolean;
  name: string;
  code: string;
};

export type BookType = {
  code: string;
  name: string;
  borrowable: boolean;
  holdable: boolean;
  bookImage: string;
  author: string[];
  isbn: string;
  publication: string;
  publicationDate: string;
  edition: string;
  location: LocationType[] | null;
  language: string;
};

export type AuthorType = {
  name: string;
};

export type URLParamsFilterType = {
  name: string;
  author: string;
  isbn: string;
  publication: string;
  publicationDate: string;
  edition: string;
  language: string;
  library: string;
};

export type FilterCategoryType = {
  editionCat: string[];
  publicationDateCat: string[];
  publicationCat: string[];
  languageCat: string[];
  authorCat: string[];
  libraryCat: string[];
};

export type BooksDataReturnType = {
  books: BookType[];
  total: number;
  category: FilterCategoryType;
};

export type SearchCriteriaType = {
  category: string;
  searchText: string;
};
