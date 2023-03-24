const socket = io();

let sketch = function (p) {
  p.setup = function () {
    p.createCanvas(500, 500);
  };

  p.draw = () => {
    if (p.mouseIsPressed) {
      p.push();
      p.noStroke();
      p.fill("#fff000");
      p.rect(p.mouseX, p.mouseY, 10, 10);
      p.pop();
      socket.emit("user_draw", { x: p.mouseX, y: p.mouseY });
    }
  };
  socket.on("client_draw", (pos) => {
    if (pos.x && pos.y) {
      p.push();
      p.fill("#ff0000");
      p.circle(pos.x, pos.y, 10);
      p.pop();
    }
  });
};

let myp5 = new p5(sketch);
