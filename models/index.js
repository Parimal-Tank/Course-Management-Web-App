const dbConfig = require('../models/dbConfig');

const {Sequelize , DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        port: dbConfig.PORT,
        operatorAliases : false,

        // Used for database security // for Resouces access permission or the number of connection.
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire : dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

// const sequelize = new Sequelize({ 
//     host: dbConfig.HOST,
//     port: dbConfig.PORT,
//     username: dbConfig.USER,
//     password: dbConfig.PASSWORD,
//     database: dbConfig.DB,
//     dialect: dbConfig.dialect,
//  })

// const sequelize = new Sequelize('mysql://parimalta:002fAR367LnXiXRNGYyX6y0X@15.206.7.200:3310/parimalta')


sequelize.authenticate().then(() =>{
    console.log("Database Connected");
})
.catch(err => {
    console.log('Error' + err);
})

// db object
const db = {};

db.Sequelize = Sequelize
db.sequelize = sequelize

db.courses = require('./coursesModel')(sequelize , DataTypes)

// Used for not create a database again and again if already created
db.sequelize.sync({ force : false}).then(() =>{
    console.log('yes re-sync done!');
})


module.exports = db;