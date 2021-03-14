import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({nullable: false})
  author: string;

  @Column()
  country: string;

  @Column({nullable: true})
  imageLink?: string;

  @Column({nullable: false})
  language: string;

  @Column({nullable: true})
  link?: string;

  @Column({nullable: false})
  pages: number;

  @Column({nullable: false})
  title: string;

  @Column({nullable: false})
  year: number

  @Column({nullable: false})
  createdAt: Date

  @Column({default: new Date(), nullable: false})
  updatedAt: Date
}