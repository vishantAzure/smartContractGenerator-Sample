 var knex = require('knex')({
    client: 'mysql',
    connection: {
        host     : 'localhost',
        user     : 'root',
        password : 'vishant@123',
        database : 'smartcontract_gen_db',
        charset: 'utf8'
    }
    });

    var Bookshelf = require('bookshelf')(knex);

    module.exports.DB = Bookshelf;
