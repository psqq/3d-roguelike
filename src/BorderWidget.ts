import Widget from "./Widget";

export default class BorderWidget implements Widget {
  private widget: Widget;
  constructor(widget: Widget) {
    this.widget = widget;
  }
  getSize() {
    return this.widget.getSize();
  }
  draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    this.widget.draw(ctx, x, y);
    const size = this.widget.getSize();
    ctx.rect(x, y, size.width, size.height);
    ctx.stroke();
  }
}