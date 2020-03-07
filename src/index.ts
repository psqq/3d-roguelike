import './index.css';
import Spritesheet from './spritesheet';

const can = document.querySelector('canvas');
const ctx = can.getContext('2d');

ctx.fillRect(50, 50, 100, 100);

async function main() {
  const spritesheet = new Spritesheet("../assets/images/hero-idle.png", 32);
  await spritesheet.load();
  spritesheet.getTile(0, 0).draw(ctx, 0, 0);
}

main();
