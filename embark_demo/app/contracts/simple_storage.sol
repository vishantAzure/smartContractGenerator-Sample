pragma solidity ^0.4.0;
contract SimpleStorage {
    
    struct AccountHolder {
        uint balance;
    }
    
    mapping(address => AccountHolder) AccountHolders;
    function Send(address sender, address receiver, uint Amount) {
        if (AccountHolders[sender].balance >= Amount) {
            AccountHolders[sender].balance = AccountHolders[sender].balance - Amount;
            AccountHolders[receiver].balance = AccountHolders[receiver].balance + Amount;
        }
    }
    
    function RegisterUser(address AccNo) {
        AccountHolders[AccNo].balance = 2000;
    }
    
    function GetUserAccount(address AccNo) constant returns (uint blc) {
        blc = AccountHolders[AccNo].balance;
    }
}