const Sequelize = require('sequelize');

var MilestoneDB = global.sequelize.define('Milestones', {
    idMilestone: { type: Sequelize.INTEGER, allowNull: false},
    Start_Date: { type: Sequelize.DATE, allowNull: false},
    End_Date: { type: Sequelize.DATE, allowNull: false},
    Contract_ID :{ type: Sequelize.STRING, allowNull: false},
    Task_Status: { type: Sequelize.INTEGER, allowNull: false},
    Payment_Status :{ type: Sequelize.INTEGER, allowNull: false},
    Contract_Name :{ type: Sequelize.STRING, allowNull: false},
    Customer_Name :{ type: Sequelize.STRING, allowNull: false},
    Milestone_fee :{ type: Sequelize.INTEGER, allowNull: false},
    Milestone_schedule :{ type: Sequelize.TEXT, allowNull: false},
    Milestone_Work_execution: { type: Sequelize.TEXT, allowNull: false}
  });

module.exports = MilestoneDB;