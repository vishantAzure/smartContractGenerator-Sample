import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import * as config from '../../../../../config/config';
import { NgForm } from '@angular/forms';

declare var window;
declare var $;
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  contract;
  Etherium;
  Category;
  User_data;
  message;
  Contract;
  cnfrmDeleteID;
  dashboard;
  ParentCategory;
  constructor(public router: Router, public http: Http, private zone: NgZone) {
    this.contract = {};
    this.ParentCategory = [];
    var ABI = [{ "constant": true, "inputs": [], "name": "getcustomer_info", "outputs": [{ "name": "", "type": "bytes32[]" }, { "name": "", "type": "bytes32[]" }, { "name": "", "type": "bytes32[]" }, { "name": "", "type": "bytes32[]" }, { "name": "", "type": "uint256[]" }, { "name": "", "type": "address[]" }, { "name": "", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_name", "type": "bytes32" }, { "name": "_description", "type": "bytes32" }, { "name": "_status", "type": "bool" }, { "name": "_category_id", "type": "uint256" }], "name": "set_Template", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "m_id", "type": "uint256" }], "name": "check_status", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_cate_type", "type": "bytes32" }, { "name": "maincate_id", "type": "uint256" }, { "name": "_status", "type": "bool" }], "name": "setcategory", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_idMilestone", "type": "uint256" }], "name": "ApproveByCustomer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "cont_id", "type": "uint256" }], "name": "getcontractBycont_id", "outputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getServiveProvider", "outputs": [{ "name": "", "type": "bytes32[]" }, { "name": "", "type": "bytes32[]" }, { "name": "", "type": "bytes32[]" }, { "name": "", "type": "bytes32[]" }, { "name": "", "type": "uint256[]" }, { "name": "", "type": "address[]" }, { "name": "", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_fname", "type": "bytes32" }, { "name": "_lname", "type": "bytes32" }, { "name": "_email", "type": "bytes32" }, { "name": "_password", "type": "bytes32" }, { "name": "_phone_no", "type": "uint256" }, { "name": "cate_id2", "type": "uint256" }], "name": "setServiceProvider", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_idMilestone", "type": "uint256" }, { "name": "graseTime", "type": "uint256" }], "name": "checkFailure", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_mId", "type": "uint256" }], "name": "getMilestonesBymile_id", "outputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "m_id", "type": "uint256" }], "name": "paymentToContract", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [{ "name": "cateId", "type": "uint256" }], "name": "getcategoryBycateId", "outputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "bytes32" }, { "name": "", "type": "bool" }, { "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "cate_id", "type": "uint256" }], "name": "gettemplateByCate_id", "outputs": [{ "name": "", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "temp", "type": "uint256" }], "name": "gettemplateBytemp_id", "outputs": [{ "name": "", "type": "bytes32" }, { "name": "", "type": "bytes32" }, { "name": "", "type": "bool" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getcategory", "outputs": [{ "name": "", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_fname", "type": "bytes32" }, { "name": "_lname", "type": "bytes32" }, { "name": "_email", "type": "bytes32" }, { "name": "_password", "type": "bytes32" }, { "name": "_phone_no", "type": "uint256" }], "name": "setcustomer_info", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_start_time", "type": "uint256" }, { "name": "end_time", "type": "uint256" }, { "name": "_price", "type": "uint256" }, { "name": "temp", "type": "uint256" }, { "name": "cust", "type": "address" }, { "name": "serv", "type": "uint256" }, { "name": "mile_time", "type": "uint256[]" }, { "name": "mile_pricee", "type": "uint256[]" }, { "name": "mile_namee", "type": "bytes32[]" }], "name": "set_contract", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "temp", "type": "uint256" }], "name": "getcontractBytemp_id", "outputs": [{ "name": "", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_conId", "type": "uint256" }], "name": "getMilestonesByCon_id", "outputs": [{ "name": "", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "custId", "type": "uint256" }], "name": "getcustomer", "outputs": [{ "name": "", "type": "bytes32" }, { "name": "", "type": "bytes32" }, { "name": "", "type": "bytes32" }, { "name": "", "type": "bytes32" }, { "name": "", "type": "uint256" }, { "name": "", "type": "address" }, { "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_idMilestone", "type": "uint256" }], "name": "markMilestoneComplete", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }];
    console.log(window.web3.isConnected());
    window.web3.eth.getAccounts((err, acc) => {
      this.Etherium = window.web3.eth.contract(ABI).at('0xda40c3958dde06816f1909b2e7f0cecd957384f8');
    });
  }

  ngOnInit() {
    let self = this;
    this.User_data = JSON.parse(localStorage.getItem('User'));
    if (this.User_data) {
      let obj = {
        id: this.User_data.idUsers
      }
      this.http.post('//' + config.global_ip + '/ApI/retrieveCategory', obj).subscribe((res: any) => {

        let result = JSON.parse(res._body);
        if (result.status == 200) {
          self.Category = result.res;
          self.ParentCategory = [];
          for (var i = 0; i < result.res.length; i++) {
            if (result.res[i].Status == 1) {
              self.ParentCategory.push(result.res[i]);
            }
          }
        }
      }, (err) => {
        console.log(err);
      });
    } else {
      console.log('ll');
    }
  }

  CreateCategory(form: NgForm) {
    let self = this;
    if (!this.contract.parentcategory) this.contract.parentcategory = 0;
    // this.Etherium.setcategory(this.contract.name, this.contract.parentcategory, this.contract.status, function (err, res) {
    //   if (err) console.log(err);
    
      self.Etherium.getcategory(function (err1, res1) {
        if (err1) console.log(err1);
        console.log(res1);

        $('#myModal1').modal('toggle');
        // self.contract.BlockChainID = res1[res1.length - 1].c.toString().replace(/,/g, "");
        // self.http.post('//' + config.global_ip + '/ApI/addCategory', self.contract).subscribe((res2: any) => {
        //   var result = JSON.parse(res2._body);

        //   if (result.status == 200) {
        //     self.zone.run(() => {
        //       self.ngOnInit();
        //     });
        //     form.resetForm();
        //   }
        // }, (err2) => {
        //   form.resetForm();
        //   self.message = 'Table Not Found';
        //   setTimeout(function () {
        //     $('#message').modal('toggle');
        //   }, 1000);
        // });
      });
    // });
  }

  formreset(form: NgForm) {
    console.log('reset');
    form.resetForm();
  }

  SelectRadio() {
    // this.contract.parentcategory = 1;
    this.contract.status = 1;
  }

  EditCategory() {

    console.log(this.contract);
    $('#myModal3').modal('toggle');
    this.http.post('//' + config.global_ip + '/ApI/editCategory', this.contract).subscribe((res: any) => {
      this.contract = {};
      var result = JSON.parse(res._body);

      if (result.status == 200) {
        this.ngOnInit();
      }
    }, (err) => {
      this.contract = {};
      this.message = 'Table Not Found';
      setTimeout(function () {
        $('#message').modal('toggle');
      }, 1000);
    });
  }

  ConfirmDelete(id, status) {
    if (status != 0) {
      this.message = 'This Category Cannot be Deleted';
      $('#message').modal('toggle');
    } else {
      $('#cnfrmDelete').modal('toggle');
      this.cnfrmDeleteID = id;
    }
  }

  DeleteCategory() {
    $('#cnfrmDelete').modal('toggle');
    let obj = { id: this.cnfrmDeleteID }

    this.http.post('//' + config.global_ip + '/ApI/DeleteCategory', obj).subscribe((res: any) => {
      var result = JSON.parse(res._body);

      if (result.status == 200) {
        this.ngOnInit();
      }
    }, (err) => {
      this.message = 'Table Not Found';
      setTimeout(function () {
        $('#message').modal('toggle');
      }, 1000);
    });
  }


  changeModal(e) {
    this.contract.parentcategory = e.parent_category;
    this.contract.name = e.name;
    this.contract.ID = e.id;
    this.contract.status = e.Status;
  }

}