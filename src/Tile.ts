import Widget from "./Widget";

export default class Tile implements Widget {
  private image: HTMLImageElement;
  private tileSize: number;
  private x: number;
  private y: number;
  constructor(image: HTMLImageElement, tileSize: number, x: number, y: number) {
    this.image = image;
    this.tileSize = tileSize;
    this.x = x;
    this.y = y;
  }
  getSize() {
    return {
      width: this.tileSize,
      height: this.tileSize,
    };
  }
  draw(ctx: CanvasRenderingContext2D, x: number, y: number) {
    ctx.drawImage(
      this.image,
      this.x * this.tileSize,
      this.y * this.tileSize,
      this.tileSize,
      this.tileSize,
      x,
      y,
      this.tileSize,
      this.tileSize
    );
  }
}