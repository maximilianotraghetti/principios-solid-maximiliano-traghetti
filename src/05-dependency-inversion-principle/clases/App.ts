import { IDatabase } from "../interfaces/IDatabase";

export class App {
    private db: IDatabase
    constructor(database: IDatabase) {
        this.db = database;
    }

    start() {
        this.db.connect();  
    }
}