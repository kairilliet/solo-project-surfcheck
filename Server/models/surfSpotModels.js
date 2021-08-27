

const { Pool } = require('pg');

const PG_URI = 'postgres://pvmgkucb:jQEZa5oMKbxFDn7zjdlxcI7koQHWUvut@kashin.db.elephantsql.com/pvmgkucb';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

// Adding some notes about the database here will be helpful for future you or other developers.
// Schema for the database can be found below:
// https://github.com/CodesmithLLC/unit-10SB-databases/blob/master/docs/assets/images/schema.png

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};



// const mongoose = require('mongoose');

// const MONGO_URI = 'mongodb+srv://kairilliet:Codesmith123@cluster0.cduey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// //mongodb+srv://kairilliet:Codesmith123@cluster0.cduey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// mongoose.connect(MONGO_URI, {
//   // options for the connect method to parse the URI
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   // sets the name of the DB that our collections are part of
//   dbName: 'surfCheck'
// })
//   .then(() => console.log('Connected to Mongo DB.'))
//   .catch(err => console.log(err));

// const Schema = mongoose.Schema;

// // sets a schema for the 'species' collection
// const surfSpotSchema = new Schema({
//   beach: String,
//   beach_id: String,
//   island: String,
//   shore: String,
//   weather: String,
//   wind: String,
//   surf: String,
// });

// // creats a model for the 'surfSpot' collection that will be part of the export
// const SurfSpot = mongoose.model('surfspot', surfSpotSchema);


// // exports all the models in an object to be used in the controller
// module.exports = {
//  SurfSpot
// };


