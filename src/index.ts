import app from "./app";
import { AppDataSource } from "./db";

async function main() {
  AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch(err => {
      console.error("Error during Data Source initialization", err);
    });

  app.listen(app.get("port"));
  console.info(`Server on port ${app.get("port")}`);
}

main();
