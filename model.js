var DB = require('./db').DB;

var Subscriptions = DB.Model.extend({
   tableName: 'Subscriptions'   
});

var MilestoneStatus = DB.Model.extend({
   tableName: 'milestone_status'   
});

var Users = DB.Model.extend({
   tableName: 'Users',
   idAttribute: 'idUsers'
});

var Template = DB.Model.extend({
   tableName: 'Templates',
   idAttribute : 'idTemplate'
});

var TemplateResponses = DB.Model.extend({
   tableName: 'contract_input_response',
   idAttribute : 'idTemplate'
});


var Contracts = DB.Model.extend({
   tableName: 'ContractPDF',
   milestones: function() {
    return this.hasMany(Milestones, 'Contract_ID');
   },
   customer: function() {
    return this.hasOne(Users, 'idUsers', 'customer_id');
   },
   provider: function() {
    return this.hasOne(Users, 'idUsers', 'USER_ID');
   },
   templateresponses: function() {
    return this.hasMany(TemplateResponses, 'contract_id', 'id');
   },
   template: function() {
    return this.hasOne(Template, 'idTemplate', 'template_id');
   }
});


var Milestones = DB.Model.extend({
  tableName: 'Milestones',
  milestone_status: function() {
    return this.hasOne(MilestoneStatus, 'id', 'Status');
  }
});

var MilestonesHistory = DB.Model.extend({
  tableName: 'milestone_history',  
});


module.exports = {
   Subscriptions: Subscriptions,
   Template: Template,
   Contracts : Contracts,
   Milestones : Milestones,
   Users : Users,
   MilestonesHistory : MilestonesHistory,
   MilestoneStatus : MilestoneStatus
};