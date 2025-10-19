import { IBird } from "../interfaces/IBird";

export class Penguin implements IBird {
  swim(): void {
    console.log("El pinguino esta nadando.");
  }
}
