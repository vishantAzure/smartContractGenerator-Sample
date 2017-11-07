var DB = require('./db').DB;

var Subscriptions = DB.Model.extend({
   tableName: 'Subscriptions'   
});

module.exports = {
   Subscriptions: Subscriptions   
};
