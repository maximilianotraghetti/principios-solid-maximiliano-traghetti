import { ContextDiscount } from "./class/ContextDiscount";
import { RegularDiscount } from "./class/RegularDiscount";
import { StudentDiscount } from "./class/StundentDiscount";
import { VipDiscount } from "./class/VipDiscount";

const contextDiscount = new ContextDiscount(new RegularDiscount());
console.log(`Descuento para cliente regular ${contextDiscount.getDiscount()}%`);

contextDiscount.setStrategy(new VipDiscount());
console.log(`Descuento para cliente vip ${contextDiscount.getDiscount()}%`);

contextDiscount.setStrategy(new StudentDiscount());
console.log(`Descuento para estudiante ${contextDiscount.getDiscount()}%`);
