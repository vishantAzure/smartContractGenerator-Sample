$(document).ready(function() {
  var currentToken;
  var value;
  $("#deploy button.set").click(function() {
    console.log('hii');
    SimpleStorage.deploy().then(function(deployedToken) {
      currentToken = deployedToken;
      console.log(deployedToken.address);
      console.log(SimpleStorage.abi);
    });
  });
  $("#registr button.set").click(function() {
    value = parseInt($("#4").val());
    console.log(value);
    currentToken.RegisterUser(value).then(function(reg) {
      console.log(reg);
    });
  });
  $("#Account button.set").click(function() {
    value = parseInt($("#5").val());
    console.log(value);
    currentToken.GetUserAccount(value).then(function(reg) {
      console.log(reg);
    });
  });
  $("#token button.set").click(function() {
    value = parseInt($("#1").val());
    var value2 = parseInt($("#2").val());
    var value3 = parseInt($("#3").val());
    console.log(value);
    console.log(value2);
    console.log(value3);
    currentToken.Send(value ,value2 , value3).then(function(reg) {
      console.log(reg);
    });
  });
});
