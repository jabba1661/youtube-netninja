const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require( 'mongoose');


//setup express app 
const app   = express(); /* loads http methods -- get, post, put and delete*/
const dbURL =    "mongodb+srv://jabbaDB:jabbaMONGO123!@cluster0-y6dl9.mongodb.net/netninja?retryWrites=true&w=majority";


mongoose.connect(
    dbURL,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
).then(
    (response) =>{
        // console.log( 'response from mongoose', response );
        console.log( 'db is connected' );
        
    }
).catch(
    (e) =>{
        console.log( 'no responnse from mongodb - server', e );
    }
);
/* required in legacy code */
// mongoose.Promise = global.Promise;//fixme

//static file
app.use( express.static('public')); 

app.use( bodyParser.json());



/*Routes 2/3 - import the routes, which are exported from the api.js file */
const routes = require('./routes/api.js')

//Routes 3/3 - Tell the app to use the routes
// First argument-- '/api', so that [http://localhost:4000/api/ninjas]
//Initialize routes 
/*
we could directly use .. ignore [const routes]
app.use( '/api', require('./routes/api.js') );
*/
app.use( '/api', routes );
 

//error handling middleware -- next()
app.use((err, req, res, next) => {
    // Object.keys(err).forEach( (key) => {
    //     console.log( '-------------------------------------------------');
    //     console.log( `key:${key}: val: ${err[key]}` );
    //     console.log( '-------------------------------------------------');
    // })

    console.log( `Error [message] key: ${err["message"]}` );
    // res.send({error: err.message});
    res.status(422).send({error: err.message});
});


//Listen for requests
PORT = process.env.port || 4000;
app.listen(PORT, () => {
    console.log( `Listening on Port: ${PORT}`)    
})
