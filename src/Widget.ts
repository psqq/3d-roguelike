import Size from "./Size";

export default interface Widget {
  getSize(): Size;
  draw(ctx: CanvasRenderingContext2D, x: number, y: number): void;
}