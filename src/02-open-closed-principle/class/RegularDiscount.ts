import { IDiscount } from "../interfaces/IDiscount";

export class RegularDiscount implements IDiscount {
  getDiscount(): number {
    return 10;
  }
}
