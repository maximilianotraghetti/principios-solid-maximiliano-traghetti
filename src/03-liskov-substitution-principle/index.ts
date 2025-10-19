import { Penguin } from "./class/Penguin";
import { Sparrow } from "./class/Sparrow";
import { IBird } from "./interfaces/IBird";
import { IFlying } from "./interfaces/IFlaying";

function takeOff(bird: IFlying): void {
  bird.fly();
}

const sparrow = new Sparrow();
const penguin = new Penguin();

takeOff(sparrow);
