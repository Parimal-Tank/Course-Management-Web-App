const express = require('express');
const app = express();
// middleware
app.use(express.urlencoded({extended : false}))
app.use(express.json());

// const bodyparser = require('body-parser')
// const cors = require('cors')

// const corOption ={
//     origin: 'https://localhost:8081'
// }
// app.use(cors(corOption));

// Router 
const router = require('./routes/courseRoute');
app.use('/api/courses' , router);

// server
const server = process.env.PORT || 3000;
app.listen(3000 , () => {
    console.log('Server is started...' + server);
  });

// testing api

app.get('/', (req, res) =>{
    res.json({ message: "hello from api"});
});

// DB Cradiantial
// const con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password : "Parimal132"
// });

// Server Connection
// con.connect(function(err){
//     if(err) throw err;
//     console.log("Database Connected");
//     dbCreation(con);
//     coursesSchema(con);
// });

//server port


// module.exports = con;

// courseController(app);