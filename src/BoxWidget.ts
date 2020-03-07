import Widget from "./Widget";
import EmptyWidget from "./EmptyWidget";

export default class BoxWidget implements Widget {
  private width: number;
  private height: number;
  private widget: Widget;
  constructor(width: number, height: number) {
    this.widget = new EmptyWidget();
    this.width = width;
    this.height = height;
  }
  setWidget(widget: Widget) {
    this.widget = widget;
    return this;
  }
  getSize() {
    return {
      width: this.width, height: this.height
    };
  }
  draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    const size = this.widget.getSize();
    const wx = (this.width - size.width) / 2;
    const wy = (this.height - size.height) / 2;
    this.widget.draw(ctx, x + wx, y + wy);
  }
}