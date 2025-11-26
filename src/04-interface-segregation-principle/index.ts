import { SimplePrinter } from "./clases/SimplePrinter";
import { MultiFunctionPrinter } from "./clases/MultiFunctionPrinter";

const printer = new SimplePrinter();
printer.print();

const multi = new MultiFunctionPrinter();
multi.print();
multi.scan();
multi.fax();
