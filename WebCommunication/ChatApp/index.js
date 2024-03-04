const http = require('http');
const express = require('express');
const path = require('path');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log(`A new user has connected: ${socket.id}`);

    socket.on('message', message => {
        io.emit('message', message);
    })

});

app.use(express.static(path.resolve('./public')));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '/public/index.html'));
});

const PORT = 5501;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});


