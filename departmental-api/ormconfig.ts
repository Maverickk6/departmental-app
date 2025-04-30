import { DataSource } from 'typeorm';
import { Department } from './src/department/entities/department.entity';
import { SubDepartment } from './src/department/entities/sub-department.entity';
import { User } from './src/auth/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'api-db',
  entities: [Department, SubDepartment, User],
  synchronize: true,
});