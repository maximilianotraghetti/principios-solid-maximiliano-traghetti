import { Report } from "./class/Report";
import { ReportPrinter } from "./class/ReportPrinter";
import { ReportSaver } from "./class/ReportSaver";

const myReport = new Report("informe Anual", "Detalles sobre las ventas");

const printer = new ReportPrinter();
printer.printReport(myReport);

const saver = new ReportSaver();
saver.saveToFile(myReport);
