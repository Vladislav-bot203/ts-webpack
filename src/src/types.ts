import { ICircle, ISquare } from "./interfaces";

export type Fish = { swim: () => void };
export type Bird = { fly: () => void };
export type Human = {swim?: () => void; fly?: () => void};
export type Shape = ICircle | ISquare;
