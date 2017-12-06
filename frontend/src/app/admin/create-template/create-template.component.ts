import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Contract } from '../../modal';
import * as config from '../../../../../config/config';
import { NgForm } from '@angular/forms';

declare var $;
declare var BigNumber;
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
  BlockchainCategoryId;
  Category;
  message;
  Etherium;
  contractcategoryname;
  templatestatus;
  constructor(public router: Router, public http: Http, public route: ActivatedRoute, private zone: NgZone) {
    this.contract = {};
    var ABI = [{ "constant": true, "inputs": [], "name": "getcustomer_info", "outputs": [{ "name": "", "type": "bytes32[]" }, { "name": "", "type": "bytes32[]" }, { "name": "", "type": "bytes32[]" }, { "name": "", "type": "bytes32[]" }, { "name": "", "type": "uint256[]" }, { "name": "", "type": "address[]" }, { "name": "", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_name", "type": "bytes32" }, { "name": "_description", "type": "bytes32" }, { "name": "_status", "type": "bool" }, { "name": "_category_id", "type": "uint256" }], "name": "set_Template", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "m_id", "type": "uint256" }], "name": "check_status", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_cate_type", "type": "bytes32" }, { "name": "maincate_id", "type": "uint256" }, { "name": "_status", "type": "bool" }], "name": "setcategory", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_idMilestone", "type": "uint256" }], "name": "ApproveByCustomer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "cont_id", "type": "uint256" }], "name": "getcontractBycont_id", "outputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getServiveProvider", "outputs": [{ "name": "", "type": "bytes32[]" }, { "name": "", "type": "bytes32[]" }, { "name": "", "type": "bytes32[]" }, { "name": "", "type": "bytes32[]" }, { "name": "", "type": "uint256[]" }, { "name": "", "type": "address[]" }, { "name": "", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_fname", "type": "bytes32" }, { "name": "_lname", "type": "bytes32" }, { "name": "_email", "type": "bytes32" }, { "name": "_password", "type": "bytes32" }, { "name": "_phone_no", "type": "uint256" }, { "name": "cate_id2", "type": "uint256" }], "name": "setServiceProvider", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_idMilestone", "type": "uint256" }, { "name": "graseTime", "type": "uint256" }], "name": "checkFailure", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_mId", "type": "uint256" }], "name": "getMilestonesBymile_id", "outputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "m_id", "type": "uint256" }], "name": "paymentToContract", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [{ "name": "array", "type": "uint256[]" }], "name": "Remove_array", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "cateId", "type": "uint256" }], "name": "getcategoryBycateId", "outputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "bytes32" }, { "name": "", "type": "bool" }, { "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "cate_id", "type": "uint256" }], "name": "gettemplateByCate_id", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "temp", "type": "uint256" }], "name": "gettemplateBytemp_id", "outputs": [{ "name": "", "type": "bytes32" }, { "name": "", "type": "bytes32" }, { "name": "", "type": "bool" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getcategory", "outputs": [{ "name": "", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_fname", "type": "bytes32" }, { "name": "_lname", "type": "bytes32" }, { "name": "_email", "type": "bytes32" }, { "name": "_password", "type": "bytes32" }, { "name": "_phone_no", "type": "uint256" }], "name": "setcustomer_info", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_start_time", "type": "uint256" }, { "name": "end_time", "type": "uint256" }, { "name": "_price", "type": "uint256" }, { "name": "temp", "type": "uint256" }, { "name": "cust", "type": "address" }, { "name": "serv", "type": "uint256" }, { "name": "mile_time", "type": "uint256[]" }, { "name": "mile_pricee", "type": "uint256[]" }, { "name": "mile_namee", "type": "bytes32[]" }], "name": "set_contract", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "temp", "type": "uint256" }], "name": "getcontractBytemp_id", "outputs": [{ "name": "", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_conId", "type": "uint256" }], "name": "getMilestonesByCon_id", "outputs": [{ "name": "", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "custId", "type": "uint256" }], "name": "getcustomer", "outputs": [{ "name": "", "type": "bytes32" }, { "name": "", "type": "bytes32" }, { "name": "", "type": "bytes32" }, { "name": "", "type": "bytes32" }, { "name": "", "type": "uint256" }, { "name": "", "type": "address" }, { "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_idMilestone", "type": "uint256" }], "name": "markMilestoneComplete", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }]
    console.log(window.web3.isConnected());
    window.web3.eth.getAccounts((err, acc) => {
      this.Etherium = window.web3.eth.contract(ABI).at('0x48482b7f97049f560d3e2da8d381ebf5e1d5670a');
    });
  }

  ngOnInit() {
    this.User_data = JSON.parse(localStorage.getItem('User'));
    if (this.User_data) {
      this.contract.status = 1;
      let self = this;
      let obj = {
        id: this.User_data.idUsers
      }
      this.http.post('//' + config.global_ip + '/ApI/retrieveCategory', obj).subscribe((res: any) => {
        let abc = JSON.parse(res._body).res;
        self.Category = [];
        for (var i = 0; i < abc.length; i++) {
          if (abc[i].Status == 1) {
            self.Category.push(abc[i]);
          }
        }
      }, (err) => {
        this.message = 'Data Not Found';
        setTimeout(function () {
          $('#message').modal('toggle');
        }, 1000);
      });
    } else {
      console.log('ll');
    }
  }

  InitializeTemplate() {
    this.http.post('//' + config.global_ip + '/ApI/retrieveCategoryById', { id: this.contract.categoryName }).subscribe((res: any) => {
      this.BlockchainCategoryId = JSON.parse(res._body).res[0].blockchain_id;
      this.CreateTemplate();
    });
  }

  CreateTemplate() {
    if (!this.contract.Description) {
      this.message = 'description is required';
      $('#message').modal('toggle');
    } else {
      let self = this;
      self.Etherium.set_Template(self.contract.Name, self.contract.Description, self.contract.status, self.BlockchainCategoryId, function (err, res) {
        if (err) window.alert('error');

        var Interval = setInterval(function () {
          console.log('interval');

          window.web3.eth.getTransactionReceipt(res, function (err1, res1) {
            if (err1) console.log(err1);

            if (res1 != null || res1 != undefined) {
              clearInterval(Interval);

              self.Etherium.gettemplateByCate_id(self.BlockchainCategoryId, function (err2, res2) {
                if (err2) window.alert('error');

                self.contract.User_id = self.User_data.idUsers;
                self.contract.blockchain_id = res2.c.toString().replace(/,/g, "");
                self.http.post('//' + config.global_ip + '/pdf/CreateTemplate', self.contract).subscribe((result: any) => {
                  var result = JSON.parse(result._body);

                  if (result.status == 200) {
                    self.zone.run(() => {
                      self.router.navigate(['/admin/manageTemplate']);
                    });
                  }
                }, (err) => {
                  self.message = 'Server Error';
                  $('#message').modal('toggle');
                });
              });
            }
          });
        }, 6000);
      });
    }
  }

}
