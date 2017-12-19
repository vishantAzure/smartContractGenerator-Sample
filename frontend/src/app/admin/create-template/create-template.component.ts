import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Contract } from '../../modal';
import * as Web3Utils from 'web3-utils';
import sha3 from 'solidity-sha3'
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
  CategoryTree;
  message;
  Etherium;
  contractcategoryname;
  templatestatus;
  constructor(public router: Router, public http: Http, public route: ActivatedRoute, private zone: NgZone) {
    this.contract = {};
    var ABI = [{"constant":true,"inputs":[],"name":"getcustomer_info","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"cate_id","type":"uint256"}],"name":"gettemplate","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_description","type":"bytes32"},{"name":"_status","type":"bool"},{"name":"_category_id","type":"uint256"}],"name":"set_Template","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"m_id","type":"uint256"}],"name":"check_status","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_cate_type","type":"bytes32"},{"name":"maincate_id","type":"uint256"},{"name":"_status","type":"bool"}],"name":"setcategory","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_idMilestone","type":"uint256"}],"name":"ApproveByCustomer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"m_id","type":"uint256"},{"name":"_start_date","type":"uint256"},{"name":"_end_date","type":"uint256"},{"name":"price","type":"uint256"}],"name":"update_milestone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"cont_id","type":"uint256"}],"name":"getcontractBycont_id","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_idMilestone","type":"uint256"},{"name":"graseTime","type":"uint256"}],"name":"checkFailure","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_mId","type":"uint256"}],"name":"getMilestonesBymile_id","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"m_id","type":"uint256"}],"name":"paymentToContract","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"cateId","type":"uint256"}],"name":"getcategoryBycateId","outputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"},{"name":"","type":"bool"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_fname","type":"bytes32"},{"name":"_lname","type":"bytes32"},{"name":"_email","type":"bytes32"},{"name":"_password","type":"bytes32"},{"name":"_phone_no","type":"uint256"},{"name":"wallet","type":"address"}],"name":"setcustomer_info","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"temp","type":"uint256"}],"name":"gettemplateBytemp_id","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bool"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getcategory","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32[]"},{"name":"cont_id","type":"uint256"},{"name":"_fees","type":"uint256[]"},{"name":"_penalty","type":"uint256[]"},{"name":"_start_date","type":"uint256[]"},{"name":"_end_date","type":"uint256[]"},{"name":"_price","type":"uint256[]"}],"name":"setMilestones","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"servID","type":"uint256"}],"name":"getServiveProvider","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"temp","type":"uint256"}],"name":"getcontractBytemp_id","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"cont_id","type":"uint256"}],"name":"getMilestonesByCon_id","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_idMilestone","type":"uint256"}],"name":"DissAproveByCustomer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"custId","type":"uint256"}],"name":"getcustomer","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_fname","type":"bytes32"},{"name":"_lname","type":"bytes32"},{"name":"_email","type":"bytes32"},{"name":"_password","type":"bytes32"},{"name":"_phone_no","type":"uint256"},{"name":"wallet","type":"address"}],"name":"setServiceProvider","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_idMilestone","type":"uint256"}],"name":"markMilestoneComplete","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"m_id","type":"uint256"}],"name":"disApproveByCustomer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getserviceprovider","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_start_time","type":"uint256"},{"name":"end_time","type":"uint256"},{"name":"_price","type":"uint256"},{"name":"temp","type":"uint256"},{"name":"cust","type":"uint256"},{"name":"serv","type":"uint256"},{"name":"typee","type":"bytes32[]"},{"name":"valuee","type":"bytes32[]"}],"name":"set_contract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"uint256"}],"name":"c","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"address"}],"name":"d","type":"event"}];    
    console.log(window.web3.isConnected());
    window.web3.eth.getAccounts((err, acc) => {
      this.Etherium = window.web3.eth.contract(ABI).at('0xe11c1a5613353111a96ab5ad17cd8c4a291cd7ed');
    });
  }

  ngOnInit() {

    function hasChildren(element, arr) {
        var ret = false;
        Object.keys(arr).forEach(function(key) {
            if(arr[key].parent_category == element.id) {
                ret =  true;
            }
        });
        
        return ret;
    }

    function getChild(final_categories, arr, element, count) {
        var children = [];
        
        Object.keys(arr).forEach(function(key) {
            if(arr[key].parent_category == element.id) {
                for(var i=0; i < count; i++) {
                    arr[key].name = " - "+arr[key].name;
                }
                final_categories.push(arr[key]);
                
                if(hasChildren(arr[key], arr)) {
                    count ++;                    
                    var children = getChild(final_categories, arr, arr[key], count);
                    final_categories = children;
                }else{
                    count--;
                }
            }
        });
        
        return final_categories;
    };

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
        var final_categories = [];
        self.Category.forEach(function(element) {            
            if(element.parent_category == 0) {
                final_categories.push(element);
                var children_arr = getChild(final_categories, self.Category, element, 1);  
                if(children_arr.length > 0) {
                    final_categories = children_arr;
                }
            }
        });
        
        this.CategoryTree = final_categories;

      }, (err) => {
        $.notify("Data Not Found", 'error'); 
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
      $.notify("Please Add Description", 'error'); 
    } else {
     
      let self = this;
      var str = sha3(self.contract.Description);
      
      self.Etherium.set_Template(self.contract.Name,str, self.contract.status, self.BlockchainCategoryId, function (err, res) {
        if (err) {
          return $.notify(err, 'error'); 
        }else{
          $.blockUI({ message: '<h1> Waiting for transaction to be mined...</h1>' });
          var Interval = setInterval(function () {
            console.log('interval');
  
            window.web3.eth.getTransactionReceipt(res, function (err1, res1) {
              if (err1) {
                clearInterval(Interval);
                $.unblockUI({ fadeOut: 200 });
                return $.notify(err1, 'error'); 
              }
              if (res1 != null || res1 != undefined) {
                clearInterval(Interval);
  
                self.Etherium.gettemplate(self.BlockchainCategoryId,function (err2, res2) {
                  if (err2) {
                    $.unblockUI({ fadeOut: 200 });
                    return $.notify(err2, 'error');
                  } 
                  var str = JSON.stringify(res2);
                  var obj = JSON.parse(str);
                  console.log(str);
                  console.log(obj);
                  try{
                    if(obj[obj.length-1]==undefined)  throw Error('undefined');
                  }catch(e){
                    $.unblockUI({ fadeOut: 200 });
                    return $.notify('Please Try Again', 'error'); 
                  }
                  self.contract.blockchain_id = obj[obj.length-1].replace(/\./g,'').split('e')[0];
                  self.contract.User_id = self.User_data.idUsers; 
                  self.http.post('//' + config.global_ip + '/pdf/CreateTemplate', self.contract).subscribe((result: any) => {
                    var result = JSON.parse(result._body);
  
                    if (result.status == 200) {
                      $.unblockUI({ fadeOut: 200 });
                      self.zone.run(() => {
                        self.router.navigate(['/admin/manageTemplate']);
                      });
                    }
                  }, (err) => {
                    $.unblockUI({ fadeOut: 200 });
                     $.notify(err, 'error');
                  });
                });
              }
            });
          }, 6000);
        }
      });
    }
  }

}
