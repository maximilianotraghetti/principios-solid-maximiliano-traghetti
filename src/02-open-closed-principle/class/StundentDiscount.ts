import { IDiscount } from "../interfaces/IDiscount";

export class StudentDiscount implements IDiscount {
  getDiscount(): number {
    return 15;
  }
}
