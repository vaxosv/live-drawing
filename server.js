const express = require ('express'); 
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server)
server.listen(3001)
console.log("it runes");

app.use(express.static('public'))

io.sockets.on('connection', function (socket) {
    console.log(`new connection: ${socket.id}`);

    socket.on("mouse", (data)=>{
        socket.broadcast.emit('mouse', data)
    })

});
