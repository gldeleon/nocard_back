import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "44.196.203.112",
  port: 3306,
  username: "gdeleon",
  password: "jedimaster",
  database: "transpais_stage",
  entities: [User],
  logging: true,
  //   synchronize: true,
});
