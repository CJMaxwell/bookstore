export interface IBook {
  id: string;
  author: string;
  country: string;
  imageLink?: string;
  language: string;
  link?: string;
  pages: number;
  title: string;
  year: number,
  createdAt: Date
  updatedAt: Date
}