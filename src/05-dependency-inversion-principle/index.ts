import { App } from "./clases/App";
import { MySqlDatabase } from "./clases/MySqlDatabase";

const database = new MySqlDatabase();
const app = new App(database);

app.start();