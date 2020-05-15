const express =  require('express');
const router  =  express.Router();
const Ninja   =  require('../models/Ninja.js');


// http://localhost:4000/api/ninjas
//get a list of ninjas from our database

// http://localhost:4000/api/ninjas?lng=-80&lat=25
// console.log(req.query);
router.get('/ninjas', (req, res, next) => {
    console.log( `/ninjas/Get`);
    
    Ninja.aggregate([{
        $geoNear: {
          near: {
            'type': 'Point',
            'coordinates': [parseFloat(req.query.lng), parseFloat(req.query.lat)]
          },
          distanceField: "dist.calculated",
          maxDistance: 100000,
          spherical: true
        }

        // near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
        // maxDistance: 100000,
        // spherical: true,
        // distanceField: "dist.calculated"
          
      }]).then((ninjas) => {
        console.log( '------------------------------------------');
        console.log(req.query );
        console.log( `Length: ${ninjas.length}`);
        console.log( ninjas );
        res.send( ninjas );
        console.log( '------------------------------------------');
      });

    //------deprecated------
    // Ninja.geoNear(
    //     {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
    //     {maxDistance:100000, spherical: true } /** in meteres */
    // ).then((ninjas) => {
    //     res.send( ninjas);
    // });


});

//5e35d9935f4013a36206e2ce
// http://localhost:4000/api/ninjas/5e35d9935f4013a36206e2ce

//5e36c55200792ca6e04f7d2f
// http://localhost:4000/api/ninjas/5e36c55200792ca6e04f7d2f
router.get('/ninjas/:id', (req, res, next) => {
    console.log( `/ninjas/Get/id: ${req.params.id}`);

    Ninja.findOne({_id: req.params.id}).then( (ninja) => {
        console.log( `Updated [Ninja name:${ninja.name} rank: ${ninja.rank}]` );
        console.log( ninja );
        res.send( {type: 'GET', ninja_id: req.params.id, ninja: ninja});
        
        // console.log ( Object.keys(ninja) );
    } );
    // res.send( {type: 'GET'});
});

//add a new ninja to the DB
router.post('/ninjas', (req, res, next) => {
    
    // var ninja = new Ninja(req.body);
    // ninja.save();//save it to the database
    /** short way to save, instead of using the above 2 lines*/

    //returns a promise
    Ninja.create(req.body).then( (ninja) => {
        res.send(ninja);
    }).catch(next);//catch
});

// 5e35d9935f4013a36206e2ce
//update a ninja in the DB
router.put('/ninjas/:id', (req, res, next) => {
    // tmpNinja = Ninja.findById( {_id: req.params.id}, req.body);
    Ninja.findByIdAndUpdate( {_id: req.params.id}, req.body)
    .then((ninja) => {
        console.log( `Old [Ninja name:${ninja.name} rank: ${ninja.rank}]` );

        //re-find the ninja
        Ninja.findOne({_id: req.params.id}).then( (ninja2) => {
            console.log( `Updated [Ninja name:${ninja2.name} rank: ${ninja2.rank}]` );
            console.log( ninja2 );
            res.send( ninja2 );
        } );

    });
});


//delete a ninja from the DB
router.delete('/ninjas/:id', (req, res, next) => {
    //5e35d9325f4013a36206e2cd
    // console.log( Ninja.findById( req.params.id ).name );
    console.log(`Delete: ${req.params.id}`);
    Ninja.findByIdAndRemove( {_id: req.params.id} )
    .then((ninja) => {
        res.send( ninja);
        // res.send( {type: 'DELETE'});
    });
});


/*Routes 1/3 - export the routes from the routes file -- which is api.js */
module.exports = router;