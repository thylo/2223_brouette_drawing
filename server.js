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
  io.emit('server reply', 'user connected');
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    socket.broadcast('server reply', msg.toUpperCase());
  });
});

app.use(express.static("public"));

server.listen(3000, () => {
  console.log('listening on *:3000');
});