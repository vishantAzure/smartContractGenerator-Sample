import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import * as config from '../../../../../config/config';
import { NgForm } from '@angular/forms';

declare var window;
declare var BigNumber;
declare var $;
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  contract;
  Etherium;
  AllCategory;
  CategoryTree;
  CategoryList;
  User_data;
  message;
  Contract;
  cnfrmDeleteID;
  dashboard;
  Timeout;
  ParentCategory;
  blockchainParentCategory;
  constructor(public router: Router, public http: Http, private zone: NgZone) {
    this.contract = {};
    this.ParentCategory = [];
    this.CategoryList = [];
          
    var ABI = [{"constant":true,"inputs":[],"name":"getcustomer_info","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"cate_id","type":"uint256"}],"name":"gettemplate","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_description","type":"bytes32"},{"name":"_status","type":"bool"},{"name":"_category_id","type":"uint256"}],"name":"set_Template","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"m_id","type":"uint256"}],"name":"check_status","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_cate_type","type":"bytes32"},{"name":"maincate_id","type":"uint256"},{"name":"_status","type":"bool"}],"name":"setcategory","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_idMilestone","type":"uint256"}],"name":"ApproveByCustomer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"m_id","type":"uint256"},{"name":"_start_date","type":"uint256"},{"name":"_end_date","type":"uint256"},{"name":"price","type":"uint256"}],"name":"update_milestone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"cont_id","type":"uint256"}],"name":"getcontractBycont_id","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_idMilestone","type":"uint256"},{"name":"graseTime","type":"uint256"}],"name":"checkFailure","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_mId","type":"uint256"}],"name":"getMilestonesBymile_id","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"m_id","type":"uint256"}],"name":"paymentToContract","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"cateId","type":"uint256"}],"name":"getcategoryBycateId","outputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"},{"name":"","type":"bool"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_fname","type":"bytes32"},{"name":"_lname","type":"bytes32"},{"name":"_email","type":"bytes32"},{"name":"_password","type":"bytes32"},{"name":"_phone_no","type":"uint256"},{"name":"wallet","type":"address"}],"name":"setcustomer_info","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"temp","type":"uint256"}],"name":"gettemplateBytemp_id","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bool"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getcategory","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32[]"},{"name":"cont_id","type":"uint256"},{"name":"_fees","type":"uint256[]"},{"name":"_penalty","type":"uint256[]"},{"name":"_start_date","type":"uint256[]"},{"name":"_end_date","type":"uint256[]"},{"name":"_price","type":"uint256[]"}],"name":"setMilestones","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"servID","type":"uint256"}],"name":"getServiveProvider","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"temp","type":"uint256"}],"name":"getcontractBytemp_id","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"cont_id","type":"uint256"}],"name":"getMilestonesByCon_id","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_idMilestone","type":"uint256"}],"name":"DissAproveByCustomer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"custId","type":"uint256"}],"name":"getcustomer","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_fname","type":"bytes32"},{"name":"_lname","type":"bytes32"},{"name":"_email","type":"bytes32"},{"name":"_password","type":"bytes32"},{"name":"_phone_no","type":"uint256"},{"name":"wallet","type":"address"}],"name":"setServiceProvider","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_idMilestone","type":"uint256"}],"name":"markMilestoneComplete","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"m_id","type":"uint256"}],"name":"disApproveByCustomer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getserviceprovider","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_start_time","type":"uint256"},{"name":"end_time","type":"uint256"},{"name":"_price","type":"uint256"},{"name":"temp","type":"uint256"},{"name":"cust","type":"uint256"},{"name":"serv","type":"uint256"},{"name":"typee","type":"bytes32[]"},{"name":"valuee","type":"bytes32[]"}],"name":"set_contract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"uint256"}],"name":"c","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"address"}],"name":"d","type":"event"}];    
    console.log(window.web3.isConnected());
    window.web3.eth.getAccounts((err, acc) => {
      this.Etherium = window.web3.eth.contract(ABI).at('0xe11c1a5613353111a96ab5ad17cd8c4a291cd7ed');
    });
  }

  ngOnInit() {
    let self = this;
    
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
      let obj = {
        id: this.User_data.idUsers
      }
      this.http.post('//' + config.global_ip + '/ApI/retrieveCategory', obj).subscribe((res: any) => {
        let result = JSON.parse(res._body);
        if (result.status == 200) {
          this.AllCategory = result.res;
          for (var i = 0; i < result.res.length; i++) {
            if (result.res[i].Status == 1) {
              this.ParentCategory.push(result.res[i]);
              var newObject = JSON.stringify(result.res[i]);              
              var evenNewerObj = JSON.parse(newObject);
              this.CategoryList.push(evenNewerObj);
            }
          }
          
           var final_categories = [];
            self.CategoryList.forEach(function(element) {            
            if(element.parent_category == 0) {
                final_categories.push(element);
                var children_arr = getChild(final_categories, self.CategoryList, element, 1);  
                if(children_arr.length > 0) {
                    final_categories = children_arr;
                }
            }
        });
        
        this.CategoryTree = final_categories;

        }
      }, (err) => {
        $.notify("Data Not Found", 'error'); 
      });
    } else {
      console.log('ll');
    }
  }

  CreateCategory(form: NgForm) {
    let self = this;
    $('#myModal1').modal('hide');
     this.Etherium.setcategory(this.contract.name, this.blockchainParentCategory , this.contract.status, function (err, res) {
      if (err) { $.notify("Something Went Wrong", 'error'); 
      }else{
      $.blockUI({ message: '<h1> Waiting for transaction to be mined...</h1>' });
      var Interval = setInterval(function () {
        
        window.web3.eth.getTransactionReceipt(res, function (err1, res1) {
          if (err1) if (err1) {clearInterval(Interval); $.notify("Something Went Wrong", 'error'); $.unblockUI({ fadeOut: 200 });}
           
          if (res1 != null || res1 != undefined) {
            clearInterval(Interval);
            self.Etherium.getcategory(function (err1, res1) {
              if (err1) { 
                $.notify("Something Went Wrong", 'error'); 
                $.unblockUI({ fadeOut: 200 });
              }
              var str = JSON.stringify(res1);
              var obj = JSON.parse(str);
              console.log(str);
              console.log(obj);
              try{
                if(obj[obj.length-1]==undefined)  throw Error('undefined');
              }catch(e){
                $.unblockUI({ fadeOut: 200 });
                return $.notify('Please Try Again', 'error'); 
              }
              self.contract.BlockChainID = obj[obj.length-1].replace(/\./g,'').split('e')[0];
              $.unblockUI({ fadeOut: 200 });
              self.http.post('//' + config.global_ip + '/ApI/addCategory', self.contract).subscribe((res2: any) => {
                var result = JSON.parse(res2._body);

                if (result.status == 200) {
                  $.notify("Category Created Successfully", 'success');  
                  self.zone.run(() => {
                    self.ngOnInit();
                  });
                  form.resetForm();
                }
              }, (err2) => {
                form.resetForm();
                $.notify("Something Went Wrong", 'error');
              });
            });
          }
        });
      }, 12000);
    }
    });
  }

  InitializeCategory(form: NgForm) {
    if (!this.contract.parentcategory || this.contract.parentcategory == 0) {
      this.contract.parentcategory = 0;
      this.blockchainParentCategory = 0;
      this.CreateCategory(form);
    } else {
      this.http.post('//' + config.global_ip + '/ApI/retrieveCategoryById', { id: this.contract.parentcategory }).subscribe((res: any) => {
        this.blockchainParentCategory = JSON.parse(res._body).res[0].blockchain_id;
        this.CreateCategory(form);
      });
    }
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