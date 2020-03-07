import Widget from "./Widget";
import EmptyWidget from "./EmptyWidget";

export default class GridWidget implements Widget {
  private rows: number;
  private cols: number;
  private widgets: Widget[][];
  constructor(rows: number, cols: number) {
    this.rows = rows;
    this.cols = cols;
    this.widgets = [];
    for (let y = 0; y < rows; y++) {
      this.widgets[y] = [];
      for (let x = 0; x < cols; x++) {
        this.widgets[y][x] = new EmptyWidget();
      }
    }
  }
  addWidget(widget: Widget, row: number, col: number) {
    this.widgets[row][col] = widget;
  }
  getSize() {
    let w = 0;
    for (let x = 0; x < this.cols; x++) {
      w += this.getColSize(x);
    }
    let h = 0;
    for (let y = 0; y < this.rows; y++) {
      h += this.getRowSize(y);
    }
    return {
      width: w, height: h
    };
  }
  draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    let curY = y;
    for (let y = 0; y < this.rows; y++) {
      let curX = x;
      for (let x = 0; x < this.rows; x++) {
        this.widgets[y][x].draw(ctx, curX, curY);
        curX += this.getColSize(x);
      }
      curY += this.getRowSize(y);
    }
  }
  private getRowSize(row: number) {
    let maxH = 0;
    for (let x = 0; x < this.cols; x++) {
      let h = this.widgets[row][x].getSize().height;
      maxH = Math.max(maxH, h);
    }
    return maxH;
  }
  private getColSize(col: number) {
    let maxW = 0;
    for (let y = 0; y < this.rows; y++) {
      let w = this.widgets[y][col].getSize().width;
      maxW = Math.max(maxW, w);
    }
    return maxW;
  }
}