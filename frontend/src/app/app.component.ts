import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';
import { Customer} from './modal';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Modal } from './modal';
import Web3 from 'web3';
import Web3Eth from 'web3-eth';
import * as config from '../../../config/config';
declare var window;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
    User_data;
    dashboard;
    contract;
    User = ['Select User','Customer','Service Provider','Company'];
        constructor(public http: Http,public router: Router) { 
        }

    ngOnInit() { 
        var ABI = [{"constant":false,"inputs":[{"name":"AccNo","type":"address"}],"name":"RegisterUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"receiver","type":"address"},{"name":"Amount","type":"uint256"}],"name":"Send","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"AccNo","type":"address"}],"name":"GetUserAccount","outputs":[{"name":"blc","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
        console.log(window.web3.isConnected());
        window.web3.eth.getAccounts((err, acc) => {
            this.contract = window.web3.eth.contract(ABI).at('0x4bddbec5014384923f128063086e446f2a874c9a');
        });
        
    this.User_data = JSON.parse(localStorage.getItem('User'));
    if(this.User_data) {
        switch(this.User_data.User_Type){
        case "Customer":
            this.dashboard='customer';
            break;
        case "Service Provider":
            this.dashboard='serviceprovider';
            break;
        case "Company":
            this.dashboard='company';
            break;
        case "Admin":
            this.dashboard='admin';
            break;
        }
    }else{
        console.log('ll');
    }
    }

    Registeruser() {
        this.contract.RegisterUser(200,function(err,res){
            if(err) return console.log(err);
            console.log(res);
        });
    }

    getBalance() {
    this.contract.GetUserAccount(300,function(err,res) {
        if(err) return console.log(err);
        console.log(res);
        });
    }

}
