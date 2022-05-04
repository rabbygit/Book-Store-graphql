/**
 * @description Model defiantion and model relations
 */

// Dependencies
const Sequelize = require("sequelize");

const sequelize = new Sequelize("graphql_test", "root", "", {
    host: "localhost",
    dialect: "mysql",

    query: {
        raw: true,
        logging: false,
    },

    logging: true,

    pool: {
        max: 100,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;


// models
db.users = require("../models/users.model")(sequelize, Sequelize);
db.books = require("../models/books.model")(sequelize, Sequelize);

// Relationship
db.users.hasMany(db.books,{
    foreignKey: 'author_id'
})
db.books.belongsTo(db.users,{
    foreignKey: 'author_id'
})

// export the db
module.exports = db;