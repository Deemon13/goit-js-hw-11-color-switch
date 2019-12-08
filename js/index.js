const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const refs = {
  startButton: document.querySelector('button[data-action="start"]'),
  stopButton: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};

const colorSwitch = {
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.switcherId = setInterval(() => {
      refs.body.style.backgroundColor =        colors[randomIntegerFromInterval(0, colors.length)];
    }, 1000);
  },
  stop() {
    clearInterval(this.switcherId);
    this.isActive = false;
  },
};

refs.startButton.addEventListener('click', colorSwitch.start.bind(colorSwitch));
refs.stopButton.addEventListener('click', colorSwitch.stop.bind(colorSwitch));
