import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {
web3;
  constructor() { }

  ngOnInit() {
    this.web3 = new window['Web3']('http://localhost:8545');
    console.warn('You are connected to MetaMask');
    window['web3'].version.getNetwork((err, netId) => {
      if (!err) {
          console.log(netId);
      }
  });
  }
}
