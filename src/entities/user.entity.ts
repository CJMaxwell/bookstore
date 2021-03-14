import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({nullable: false})
  username: string

  @Column({unique: true, nullable: false})
  email: string

  @Column({nullable: false})
  password: string

  @Column({nullable: false})
  createdAt: Date

  @Column({default: new Date(), nullable: false})
  updatedAt: Date
}