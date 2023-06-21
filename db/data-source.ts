import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  database: "devCars",
  username: "postgres",
  password: "postgres",
  port: 5432,
  entities: ["dist/**/*.entity.js"],
  migrations: ["dist/db/migrations/*.js"],
};

export default new DataSource(dataSourceOptions);
