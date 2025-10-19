import { IBird } from "../interfaces/IBird";
import { IFlying } from "../interfaces/IFlaying";

export class Sparrow implements IBird, IFlying {
  fly(): void {
    console.log("El gorrión esta volando");
  }
}
