import { IDiscount } from "../interfaces/IDiscount";

export class VipDiscount implements IDiscount {
  getDiscount(): number {
    return 20;
  }
}
