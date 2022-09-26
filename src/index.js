import app from "./app.js";
import { sequelize } from "./database/database.js"



async function main() {
  app.listen(4000);
  app.get('/', (req, res) => {
    res.send('app running');
  });

}

main();
