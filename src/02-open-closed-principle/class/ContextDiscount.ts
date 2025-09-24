import { IDiscount } from "../interfaces/IDiscount";

export class ContextDiscount {
  private discountStrategy: IDiscount;

  constructor(discountStrategy: IDiscount) {
    this.discountStrategy = discountStrategy;
  }

  setStrategy(discountStrategy: IDiscount) {
    this.discountStrategy = discountStrategy;
  }

  getDiscount(): number {
    return this.discountStrategy.getDiscount();
  }
}
