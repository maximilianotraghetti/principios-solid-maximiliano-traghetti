import { IReport } from "../interfaces/IReport";

export class Report implements IReport {
  constructor(public tittle: string, public content: string) {}
}
