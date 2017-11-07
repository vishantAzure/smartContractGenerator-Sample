 var knex = require('knex')({
    client: 'mysql',
    connection: {
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'db_smart_contract',
        charset: 'utf8'
    }
    });

    var Bookshelf = require('bookshelf')(knex);

    module.exports.DB = Bookshelf;
