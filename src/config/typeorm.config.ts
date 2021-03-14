import { TypeOrmModule } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModule = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'bookadmin',
  password: 'pa55w0rd01',
  database: 'bookstore',
  entities: [`${__dirname}/entities/*.ts`],
  retryDelay: 3000,
  retryAttempts: 10,
  synchronize: true,
  logging: false
}