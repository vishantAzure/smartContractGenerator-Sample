import { Component, OnInit ,NgZone} from '@angular/core';
import { Router , ActivatedRoute}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Contract } from '../../modal';
import * as config from '../../../../../config/config';
import {NgForm} from '@angular/forms';

declare var $;
declare var window;
@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
})
export class CreateTemplateComponent implements OnInit {
  contract;
  addTemplate;
  User_data;
  dashboard;
  Category;
  message;
  Etherium;
  contractcategoryname;
  templatestatus;
  constructor(public router: Router,public http: Http,public route: ActivatedRoute) { 
    this.contract = {};
    var ABI = [{ "constant": true, "inputs": [], "name": "getcustomer_info", "outputs": [{ "name": "", "type": "bytes32[]" }, { "name": "", "type": "bytes32[]" }, { "name": "", "type": "bytes32[]" }, { "name": "", "type": "bytes32[]" }, { "name": "", "type": "uint256[]" }, { "name": "", "type": "address[]" }, { "name": "", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_name", "type": "bytes32" }, { "name": "_description", "type": "bytes32" }, { "name": "_status", "type": "bool" }, { "name": "_category_id", "type": "uint256" }], "name": "set_Template", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "m_id", "type": "uint256" }], "name": "check_status", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_cate_type", "type": "bytes32" }, { "name": "maincate_id", "type": "uint256" }, { "name": "_status", "type": "bool" }], "name": "setcategory", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_idMilestone", "type": "uint256" }], "name": "ApproveByCustomer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "cont_id", "type": "uint256" }], "name": "getcontractBycont_id", "outputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getServiveProvider", "outputs": [{ "name": "", "type": "bytes32[]" }, { "name": "", "type": "bytes32[]" }, { "name": "", "type": "bytes32[]" }, { "name": "", "type": "bytes32[]" }, { "name": "", "type": "uint256[]" }, { "name": "", "type": "address[]" }, { "name": "", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_fname", "type": "bytes32" }, { "name": "_lname", "type": "bytes32" }, { "name": "_email", "type": "bytes32" }, { "name": "_password", "type": "bytes32" }, { "name": "_phone_no", "type": "uint256" }, { "name": "cate_id2", "type": "uint256" }], "name": "setServiceProvider", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_idMilestone", "type": "uint256" }, { "name": "graseTime", "type": "uint256" }], "name": "checkFailure", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_mId", "type": "uint256" }], "name": "getMilestonesBymile_id", "outputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "m_id", "type": "uint256" }], "name": "paymentToContract", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [{ "name": "cateId", "type": "uint256" }], "name": "getcategoryBycateId", "outputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "bytes32" }, { "name": "", "type": "bool" }, { "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "cate_id", "type": "uint256" }], "name": "gettemplateByCate_id", "outputs": [{ "name": "", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "temp", "type": "uint256" }], "name": "gettemplateBytemp_id", "outputs": [{ "name": "", "type": "bytes32" }, { "name": "", "type": "bytes32" }, { "name": "", "type": "bool" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getcategory", "outputs": [{ "name": "", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_fname", "type": "bytes32" }, { "name": "_lname", "type": "bytes32" }, { "name": "_email", "type": "bytes32" }, { "name": "_password", "type": "bytes32" }, { "name": "_phone_no", "type": "uint256" }], "name": "setcustomer_info", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_start_time", "type": "uint256" }, { "name": "end_time", "type": "uint256" }, { "name": "_price", "type": "uint256" }, { "name": "temp", "type": "uint256" }, { "name": "cust", "type": "address" }, { "name": "serv", "type": "uint256" }, { "name": "mile_time", "type": "uint256[]" }, { "name": "mile_pricee", "type": "uint256[]" }, { "name": "mile_namee", "type": "bytes32[]" }], "name": "set_contract", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "temp", "type": "uint256" }], "name": "getcontractBytemp_id", "outputs": [{ "name": "", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_conId", "type": "uint256" }], "name": "getMilestonesByCon_id", "outputs": [{ "name": "", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "custId", "type": "uint256" }], "name": "getcustomer", "outputs": [{ "name": "", "type": "bytes32" }, { "name": "", "type": "bytes32" }, { "name": "", "type": "bytes32" }, { "name": "", "type": "bytes32" }, { "name": "", "type": "uint256" }, { "name": "", "type": "address" }, { "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_idMilestone", "type": "uint256" }], "name": "markMilestoneComplete", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }];
    console.log(window.web3.isConnected());
    window.web3.eth.getAccounts((err, acc) => {
      this.Etherium = window.web3.eth.contract(ABI).at('0xda40c3958dde06816f1909b2e7f0cecd957384f8');
    });
  }

  ngOnInit() {
    this.User_data = JSON.parse(localStorage.getItem('User'));
    if(this.User_data) {
      this.contract.status = 1;
      let self = this;
      let obj = {
        id:this.User_data.idUsers
      }
      this.http.post('//'+config.global_ip+'/ApI/retrieveCategory',obj).subscribe((res:any)=>{
        let abc = JSON.parse(res._body).res;
        self.Category = [];
        for(var i=0;i<abc.length;i++) {
          if(abc[i].Status==1) {
            self.Category.push(abc[i]);
          }
        }
       },(err)=>{
        this.message='Data Not Found';
        setTimeout(function(){ 
          $('#message').modal('toggle');
        }, 1000);
       });
  }else{
      console.log('ll');
  }
  }

  CreateTemplate() {
    if(!this.contract.Description) {
      this.message = 'description is required';
      $('#message').modal('toggle');
    }else{
      let self = this;
      self.Etherium.set_Template(self.contract.Name,self.contract.Description,self.contract.status,self.contract.categoryName.blockchain_id, function (err, res) {
        if(err) window.alert('error');

        self.Etherium.gettemplateByCate_id(self.contract.categoryName.blockchain_id, function (err2, res2) {
          if(err2) window.alert('error');
          console.log(res2);
        });
        // this.contract.User_id = this.User_data.idUsers;
        // this.http.post('//'+config.global_ip+'/pdf/CreateTemplate',this.contract).subscribe((res:any)=>{
        // this.contract={};  
        // var result = JSON.parse(res._body);
        
        // if(result.status==200) {
        //     self.router.navigate(['/admin/manageTemplate']);
        // }
        // },(err)=>{
        //   this.message = 'Server Error';
        // $('#message').modal('toggle');
        // });
      });
    }
  }

}
