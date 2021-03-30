const path = require('path');
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
// linked express server to socket.
const io = require('socket.io')(server);
const port = 3000;

app.use(express.static(path.join(__dirname,"public")))
io.on("connection",(socket) => {
    socket.on("clientMsg",(data) => {
        io.emit("server-msg",data);
    })
})

server.listen(port,() => {
    console.log("Server is running on port",port);
})