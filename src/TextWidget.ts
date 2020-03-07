import Widget from "./Widget";

export default class TextWidget implements Widget {
  private static ctx: CanvasRenderingContext2D = document.createElement('canvas').getContext('2d');
  private text: string = '';
  private font: string = '30px Arial';
  constructor() {
    TextWidget.ctx.font = this.font;
  }
  setFont(font: string) {
    this.font = font;
    TextWidget.ctx.font = this.font;
    return this;
  }
  setText(text: string) {
    this.text = text;
    return this;
  }
  getSize() {
    const textMetrics = TextWidget.ctx.measureText(this.text);
    const width = textMetrics.actualBoundingBoxRight + textMetrics.actualBoundingBoxLeft;
    const height = textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent;
    return {
      width, height
    };
  }
  draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    const textMetrics = TextWidget.ctx.measureText(this.text);
    let tx = x + textMetrics.actualBoundingBoxLeft;
    let ty = y + textMetrics.actualBoundingBoxAscent;
    ctx.save();
    ctx.font = this.font;
    ctx.fillText(this.text, tx, ty);
    ctx.restore();
  }
}