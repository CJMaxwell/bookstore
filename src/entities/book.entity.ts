import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  author: string;

  @Column()
  country: string;

  @Column()
  imageLink?: string;

  @Column()
  language: string;

  @Column()
  link?: string;

  @Column()
  pages: number;

  @Column()
  title: string;

  @Column()
  year: number
}