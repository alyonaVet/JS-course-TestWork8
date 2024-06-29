export interface QuoteType {
  category: string;
  author: string;
  quote: string;
}

export interface CategoryType {
  title: string;
  id: string;
}

export interface ApiQuoteType {
  [id: string]: {
    category: string;
    author: string;
    quote: string;
  };
}