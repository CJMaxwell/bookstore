import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IBook } from './Books.model';

import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('/books')
export class BooksController {
  constructor(private booksService: BooksService){}

  @Get()
  async getBooks(): Promise<IBook[]>{
    const books = await this.booksService.getBooks();
    return books
  }

  @Get(':id') 
  async getBookById(@Param('id') id: string): Promise<IBook>{
    const book = await this.booksService.getBookById(id);
    return book;
  }

  @Post()
  async createBook(@Body() newBook: CreateBookDto) {
    return await this.booksService.createBook(newBook)
  }

//   @Delete(':id')
//   deleteBook(@Param('id') id: string) {
//     this.booksService.deleteBook(id);
//   }

// @Put(':id')
//   updateBook(@Param('id') id: string, @Body() book: CreateBookDto){
//     this.booksService.updateBook(id, book);
//   }
  
}
