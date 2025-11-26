import { IDatabase } from "../interfaces/IDatabase";

export class PostgresSQLDatabase implements IDatabase {
    connect(): void {
        console.log("Conectando a la base de datos PostgreSQL...");
    }
}