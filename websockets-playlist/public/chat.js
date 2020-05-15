//Make connection

//this is the socket for the client -- not the server
const clientSocket = io.connect('http://localhost:4000');
console.log( `Client socket connected ${clientSocket.id}`);

//Query DOM
const message = document.getElementById('message');
const handle = document.getElementById('handle');
const btn = document.getElementById('send');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');


//Emit events
btn.addEventListener( 'click', () => {
    
    /*Takes 2 parameters: (1) name of the message: 'chat', (2) data that we are sending to the server -- is an object with 2 parameters*/
    clientSocket.emit( `chat`, {
        message: message.value,
        handle: handle.value
    });
    console.log( `clicked: message: ${message.value} handle: ${handle.value}`);
});

message.addEventListener('keypress', ()=>{
    clientSocket.emit( 'typing',  handle.value );
});


//Listen for events
clientSocket.on('chat', (data) =>{
    feedback.innerHTML = "";

    //<p> makes it fall in a different line
    output.innerHTML += `<p><strong>${data.handle}: </strong> ${data.message} </p>`;
    console.log( `received message on the client side: ${data.handle} ${data.message}` );
});


clientSocket.on( 'typing', (data) => {
    feedback.innerHTML = `<p><em>${data} is typing..</em></p>`;
})