import './index.css';
import Spritesheet from './spritesheet';
import GridWidget from './GridWidget';

const can = document.querySelector('canvas');
const ctx = can.getContext('2d');

ctx.fillRect(50, 50, 100, 100);

async function main() {
  const spritesheet = new Spritesheet("../assets/images/hero-idle.png", 32);
  await spritesheet.load();
  const grid = new GridWidget(3, 3);
  grid.addWidget(spritesheet.getTile(0, 0), 0, 0);
  grid.addWidget(spritesheet.getTile(1, 1), 1, 1);
  grid.addWidget(spritesheet.getTile(2, 2), 2, 2);
  grid.draw(ctx, 100, 100);
}

main();
