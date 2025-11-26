import { IDatabase } from "../interfaces/IDatabase";

export class MySqlDatabase implements IDatabase {
    connect(): void {
        console.log("Conectando a la base de datos MySQL...");
    }
}
