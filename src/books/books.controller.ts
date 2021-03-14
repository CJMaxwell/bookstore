import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('/books')
export class BooksController {
  constructor(private booksService: BooksService){}

//   @Get()
//   getBooks(): IBook[]{
//     return this.booksService.getBooks();
//   }

//   @Get(':id') 
//   getBookById(@Param('id') id: string){
//     return this.booksService.getBookById(id);
//   }

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
