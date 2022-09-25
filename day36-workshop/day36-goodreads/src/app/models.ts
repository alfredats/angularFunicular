export interface BookSummary {
  bookId: string;
  title: string;
}

export interface BookDetails {
  book_id     : string;
  title       : string;
  authors     : string;
  description : string;
  edition     : string;
  format      : string;
  pages       : string;
  rating      : string;
  rating_count: string;
  review_count: string;
  genres      : string;
  image_url   : string;
}
