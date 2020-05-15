const express = require('express');
const socket = require('socket.io');


//App setup
const app = express();

PORT = 4000;
const server = app.listen(PORT, () => {
    console.log( `listening to request on port ${PORT}`)
})


//Static files
app.use( express.static('public'));


//socket setup
var io = socket(server);

//after 'connection' fires te call back function
io.on('connection', (socket) => {
    console.log( `Made a socket connection connection: ${socket.id}`);

    //listen to the message coming from the client
    //messge - 'chat'
    socket.on( 'chat', (data) => {
        io.sockets.emit( 'chat', data);
        console.log(`Received message:[${data.message}] from handle:[${data.handle}]`);
    });

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data);
    });
});
