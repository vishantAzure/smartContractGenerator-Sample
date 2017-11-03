$(document).ready(function() {
  var currentToken;
  // if(localStorage.getItem('ABI') && localStorage.getItem('ADDRESS')) {
  //   var ABI = currentToken = JSON.parse(localStorage.getItem('ABI'));
  //   var Adress = JSON.parse(localStorage.getItem('ADDRESS'));
  //   currentToken = web3.eth.contract(ABI).at(Adress);
  // }

  $("#deploy button.set").click(function() {
    MileStoneTracker.deploy().then(function(deployedToken) {
      currentToken = deployedToken;
      // localStorage.setItem('ABI', JSON.stringify(deployedToken.abi));
      // localStorage.setItem('ADDRESS', JSON.stringify(deployedToken.address));
      // currentToken = web3.eth.contract(deployedToken.abi).at(deployedToken.address);
    });
  });
  $("#registr button.set").click(function() {
    var value = $("#setemplate").val();
    currentToken.setTemplates(value).then(function(err, res){
      if(err) console.log(err);
      console.log(res);
    });
  });
  $("#Account button.set").click(function() {
    currentToken.getTemplate().then(function(err,res) {
      if(err) console.log(err);
      console.log(res);
    });
  });
  $("#token button.set").click(function() {
    var value = $("#setmile1").val();
    var value2 =$("#setmile2").val();
    var value3 = $("#setmile3").val();
    currentToken.setMilestones(value ,value2 , value3).then(function(err,res) {
      if(err) console.log(err);
      console.log(res);
    });
  });
  $("#tempid button.set").click(function() {
    var value = $("#tempidvalue").val();
    currentToken.getMilestonesByTemp_id(value).then(function(err,res) {
      if(err) console.log(err);
      console.log(res);
    });
  });
  $("#mileid button.set").click(function() {
    var value = $("#mileidvalue").val();
    currentToken.getMilestonesByMile_id(value).then(function(err,res) {
      if(err) console.log(err);
      console.log(res);
    });
  });
  $("#customer button.set").click(function() {
    var value1 = $("#customervalue1").val();
    var value2 = $("#customervalue2").val();
    console.log(value1);
    console.log(value2);
    currentToken.set_customer(value1,value2).then(function(err,res) {
      if(err) console.log(err);
      console.log(res);
    });
  });
  $("#serviceprovider button.set").click(function() {
    var value1 = $("#serviceprovidervalue1").val();
    var value2 = $("#serviceprovidervalue2").val();
    console.log(value1);
    console.log(value2);
    currentToken.set_ServiceProvider(value1,value2).then(function(err,res) {
      if(err) console.log(err);
      console.log(res);
    });
  });
  $("#admin button.set").click(function() {
    var value1 = $("#adminvalue1").val();
    var value2 = $("#adminvalue2").val();
    console.log(value1);
    console.log(value2);
    currentToken.set_Admin(value1,value2).then(function(err,res) {
      if(err) console.log(err);
      console.log(res);
    });
  });
  $("#checkPayment button.set").click(function() {
    var value1 = $("#checkPaymentvalue1").val();
    // var value2 = parseInt($("#checkPaymentvalue2").val());
    // var eth = 1000000000000000000;
    var value2 = 1000000000000000000;
    // value2 = eth*value2;
    console.log(value1);
    console.log(value2);
    currentToken.check_Payment(value1,value2,{value:value2}).then(function(err,res) {
      if(err) console.log(err);
      console.log(res);
    });
  });
  $("#checkStatus button.set").click(function() {
    var value1 = $("#checkStatusvalue1").val();
    currentToken.check_status(value1).then(function(err,res) {
      if(err) console.log(err);
      console.log(res);
    });
  });
  $("#markmilestone button.set").click(function() {
    var value1 = $("#markmilestonevalue1").val();
    currentToken.markMilestoneComplete(value1).then(function(err,res) {
      if(err) console.log(err);
      console.log(res);
    });
  });
  $("#ApproveCustomer button.set").click(function() {
    var value1 = $("#ApproveCustomervalue1").val();
    currentToken.approveByCustomer(value1).then(function(err,res) {
      if(err) console.log(err);
      console.log(res);
    });
  });
});
