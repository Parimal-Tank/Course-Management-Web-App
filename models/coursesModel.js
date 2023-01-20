module.exports = function(sequelize , DataTypes){

const Course = sequelize.define('Course' , {

    courseName : {
        type: DataTypes.STRING,
        allowNull: false
    },

    courseDuration : {
        type: DataTypes.STRING,
        allowNull: false
    },
    courseFees : {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
return Course;
}

