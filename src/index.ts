import './index.css';
import Spritesheet from './spritesheet';
import GridWidget from './GridWidget';
import TextWidget from './TextWidget';
import BorderWidget from './BorderWidget';
import BoxWidget from './BoxWidget';
import Loader from './Loader';
import EmptyWidget from './EmptyWidget';

const can = document.querySelector('canvas');
const ctx = can.getContext('2d');

let rootWidget = new EmptyWidget();

function draw() {
  ctx.clearRect(0, 0, can.width, can.height);
  rootWidget.draw(ctx, 0, 0);
}

async function main() {
  const loadingMsg = new TextWidget().setText("Loading... 0 %");
  rootWidget = new BoxWidget(can.width, can.height).setWidget(loadingMsg);
  draw();
  const spritesheet = new Spritesheet("../assets/images/hero-idle.png", 32);
  const loader = new Loader();
  loader.add(spritesheet);
  const loaderObserver = {
    update(data) {
      const percent = (data.loaded / data.total * 100).toFixed(2);
      loadingMsg.setText(`Loading... ${percent} %`);
      draw();
    }
  };
  loader.registerObserver(loaderObserver);
  await loader.load();
  loader.removeObserver(loaderObserver);
  const grid = new GridWidget(3, 3);
  grid.addWidget(spritesheet.getTile(0, 0), 0, 0);
  grid.addWidget(spritesheet.getTile(1, 1), 1, 1);
  grid.addWidget(spritesheet.getTile(2, 2), 2, 2);
  const text = new TextWidget().setText("Hello, World!");
  const border = new BorderWidget(new BoxWidget(400, 200).setWidget(text));
  console.log(text.getSize());
  grid.addWidget(border, 0, 1);
  rootWidget = new BoxWidget(can.width, can.height).setWidget(grid);
  draw();
}

main();
