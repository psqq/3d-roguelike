import Widget from "./Widget";

export default class EmptyWidget implements Widget {
  getSize() {
    return {
      width: 0, height: 0
    };
  }
  draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    return;
  }
}