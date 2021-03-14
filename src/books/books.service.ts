import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { IBook } from 'src/books/Books.model';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from '../entities/book.entity';


@Injectable()
export class BooksService {
  constructor(@InjectRepository(Book) private booksRepo: Repository<Book>){}

  async createBook(book:  CreateBookDto): Promise<IBook> {
    const newBook: IBook = {
      id: uuidv4(),
      ...book
    };
    
    const savedBook = await this.booksRepo.save(newBook);
    return savedBook
  }

  async getBooks() {
    const books: IBook[] = await this.booksRepo.find();
    if(!books) {
      throw new NotFoundException(404, 'No books found');
    };
    return books;
  }

  // getBookById(id: string) {
  //   const book = this.books.filter(book => book.id === id);
  //   if(!book) {
  //     return 'Book does not exist';
  //   }
  //   return book;
  // }

  // deleteBook(id: string) {
  //   this.books = this.books.filter(book => book.id !== id);
  // }

  // updateBook(id: string, book: CreateBookDto) {
  //   const existingbook = this.getBookById(id);
  //   if(!existingbook) return 'Book does not exist';

  //   const newBook = {
  //     id,
  //     ...book
  //   };

  //   this.books.push(newBook)
  // }
}
