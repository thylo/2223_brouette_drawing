const port = 3000;
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on('user_draw', (pos) => {
    socket.broadcast.emit('client_draw', pos);
  });
});

app.use(express.static("public"));

server.listen(port, () => {
  console.log('listening on *:3000');
});