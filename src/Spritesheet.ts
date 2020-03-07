import Tile from "./Tile";

export default class Spritesheet {
  private filename: string;
  private tileSize: number;
  private image: HTMLImageElement;
  constructor(filename: string, tileSize: number = 32) {
    this.filename = filename;
    this.tileSize = tileSize;
  }
  load() {
    return new Promise((res, rej) => {
      const img = new Image();
      img.src = this.filename;
      img.onload = () => {
        this.image = img;
        res(this);
      };
      img.onerror = err => rej(err);
    });
  }
  getTile(x: number, y: number) {
    return new Tile(this.image, this.tileSize, x, y);
  }
}