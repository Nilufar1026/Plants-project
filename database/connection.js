const {Sequelize}= require('sequelize')

const db= new Sequelize({
    dialect:'sqlite',
    storage:'products.db'
})

module.exports = db