pragma solidity ^0.4.7;
contract SimpleStorage {

  function multiply(uint a) constant returns (uint d) {
        return a * 7;
    }

  function balanceOf(uint a) constant returns (uint value) {
    return a*79;
  }

  function nameOf() constant returns (string value) {
    return "vishant singh";
  }

}