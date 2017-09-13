$(document).ready(function() {
  var currentToken;
  $("#blockchain button.set").click(function() {
    var value = parseInt($("#blockchain input.text").val());
    SimpleStorage.deploy().then(function(deployedToken) {
      currentToken = deployedToken;
      console.log(deployedToken.address);
      console.log(SimpleStorage.abi);
      currentToken.multiply(value).then(function(res) {
        console.log(res);
      });
      currentToken.balanceOf(value).then(function(balance) {
        console.log(balance);
      });
      currentToken.nameOf().then(function(balance) {
        console.log(balance);
      });
    });
  });
});