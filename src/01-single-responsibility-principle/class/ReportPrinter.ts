import { IReport } from "../interfaces/IReport";

export class ReportPrinter {
  printReport(report: IReport) {
    console.log(`imprimiendo reporte: ${report.tittle}`);
  }
}
