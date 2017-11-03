webpackJsonp([1],{

/***/ "../../../../../../config/config.js":
/***/ (function(module, exports) {

var config = {
    mysql_host: 'localhost',
    mysql_pass: 'vishant@123',
    mysql_user: 'root',
    mysql_db: 'myapp', 
    serveport: 3211,           
    // global_ip: 'smarcontgen.demo.sofocle.com',
    global_ip:'localhost:3211',
    appmode: 'development',
    }; 
    
module.exports = config;

/***/ }),

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"admin-dashbord\" style=\"min-height: 698px;\">\n    <div class=\"container-fluid\">\n        <div class=\"container section-common\">\n        <h2 class=\"color-blue text-center\">About us</h2>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since \n        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets\n        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since \n        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets\n        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since \n        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets\n        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n            </div>\n    </div>\n        <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n</section>     \n<app-footer></app-footer>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal__ = __webpack_require__("../../../../../src/app/modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutComponent = (function () {
    function AboutComponent(http, router, toasterService) {
        this.http = http;
        this.router = router;
        this.User = ['Select User', 'Customer', 'Service_Provider', 'Company'];
        this.toasterService = toasterService;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__modal__["a" /* Modal */]();
    }
    AboutComponent.prototype.ngOnInit = function () { };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object])
], AboutComponent);

var _a, _b, _c;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"admin-dashbord\">\n\t<div class=\"container-fluid\">\n            <app-sidemenu></app-sidemenu>\n        <div class=\"col-sm-9 right-side\">\n        \t<div class=\"top-content\">\n            \t<h4>Dashboard</h4>\n                <p>Welcome to Smart Contract Generator Admin Panel</p>\n            </div>\n            <div class=\"row user-box\">\n            \t<div class=\"col-sm-3\">\n                \t<div class=\"box-user clearfix\">\n                    \t<span class=\"pull-left\"><img src=\"assets/images/user.png\" alt=\"image\"/></span>\n                        <div class=\"pull-right\">\n                        \t<span>31,570</span>\n                            <p>Registered User</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"row graph-wrapper\">\n               <div class=\"col-sm-6\">\n               \t<div class=\"graph-tab\">\n                 <ul class=\"nav nav-tabs\">\n                    <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\">Weekly Stats</a></li>\n                    <li><a data-toggle=\"tab\" href=\"#menu1\">Monthly Stats</a></li>\n                </ul>\n                 <div class=\"tab-content\">\n                <div id=\"home\" class=\"tab-pane fade in active\">\n                  <span><img src=\"assets/images/graph.jpg\" alt=\"image\"/></span>\n                </div>\n                <div id=\"menu1\" class=\"tab-pane fade\">\n                  <span><img src=\"assets/images/graph.jpg\" alt=\"image\"/></span>\n                </div>\n              </div>\n              \t</div>\n                </div>\n                <div class=\"col-sm-6\">\n                \t<div class=\"message-box\">\n                    \t<h4>Messages </h4>\n                        <div class=\"row details\">\n                        \t<div class=\"col-sm-2 image-are\">\n                            \t<span></span>\n                            </div>\n                            <div class=\"col-sm-10 contenta-area\">\n                            \t<h5>Jane Doe</h5>\n                            \t<p>Forem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod loma tempor incididunt ut labore et dolore magna aliqua...</p>\n                            </div>\n                        </div>\n                        <!-- looping here -->\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n        <a class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n</section>\n<!--======================Footer start here=========================-->\n<app-footer></app-footer>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = (function () {
    function AdminComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    AdminComponent.prototype.ngOnInit = function () { };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/admin/admin.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AdminComponent);

var _a, _b;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n  <section class=\"admin-dashbord\">\n    <div class=\"container-fluid\">\n        <app-sidemenu></app-sidemenu>\n          <div class=\"col-sm-9 right-side\">\n            <div class=\"graph-tab customer-das manage-dash-temp\">\n              <div class=\"row mnage-user-forms\">\n                  <div class=\"col-sm-9\">\n                    <h3>Manage Category</h3>\n                  </div>\n                  <div class=\"col-sm-3\">\n                      <button class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#myModal1\" style=\"width:150px;\" (click)=\"formreset(heroFormmmmmmmmmm)\">Create</button>\n                </div>\n              </div>\n              <div class=\"table-responsive\">\n                  <table class=\"table table-bordered\">\n                    <thead>\n                          <tr class=\"active\">\n                              <th>SNo</th>\n                              <th>Category Name</th>\n                              <th>Parent category</th>\n                              <th>Status</th>\n                              <th>Action</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                        <tr class=\"bg-wht\"  *ngFor=\"let u of Category\">\n                            <td>{{u.idTemplateCategory}}</td>\n                              <td>{{u.Category_Name}}</td>\n                              <td>{{u.Parent_Category}}</td>\n                              <td>{{u.Status}}</td>\n                              <td><i class=\"fa fa-pencil\" aria-hidden=\"true\" style=\"margin-right:10px;\" data-toggle=\"modal\" data-target=\"#myModal3\" (click)=\"changeModal(u)\"></i><i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"ConfirmDelete(u.idTemplateCategory)\"></i></td>\n                          </tr>\n                      </tbody>\n                  </table>\n                </div>\n            </div>\n          </div>\n      </div>\n          <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n  </section>\n<app-footer></app-footer>\n<!-- //////////////////////////////////////////////////////////////////////////////////////////////////////\n//////////////////////////////////   modals   //////////////////////////////////////////////////////////\n..////////////////////////////////////////////////////////////////////////////////////////////////////// -->\n<div class=\"modal fade\" id=\"myModal1\"  role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button class=\"close\" data-dismiss=\"modal\" (click)=\"formreset(heroFormmmmmmmmmm)\">X</button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Add Category</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (ngSubmit)=\"CreateCategory()\" #heroFormmmmmmmmmm=\"ngForm\">  \n            <div class=\"form-group\">\n            <label  for=\"Contractname\">Category Name<span style=\"color:red\">*</span></label>\n            <input type=\"text\" class=\"form-control\" id=\"Contractname\"\n            required\n            [(ngModel)]=\"contract.Name\" name=\"Contractname\"\n            #Contractname=\"ngModel\">\n            <div [hidden]=\"Contractname.valid || Contractname.pristine\"\n                class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                <div [hidden]=\"!Contractname.hasError('required')\">Category name is required</div>\n            </div>\n            </div>\n\n            <div class=\"form-group\">\n            <label>Parent Category</label>\n            <select  class=\"form-control\" id=\"parentcategory\" [(ngModel)]=\"addCategory\" name=\"parentcategory\"\n            #parentcategory=\"ngModel\">\n                <option [ngValue]=\"null\" disabled>--Select--</option>\n                <option *ngFor=\"let u of ParentCategory\">{{u.Category_Name}}</option>\n            </select>\n            </div>\n\n            <div class=\"form-group\">\n            <label style=\"margin-right:20px;\"> Status <span style=\"color:red\">*</span></label>\n            <input type=\"radio\"  name=\"categorystatus\" value=\"Active\"\n            id=\"categorystatusactive\" #categorystatus=\"ngModel\" required [(ngModel)]=\"CategoryStatus\">Active<i style=\"margin-right:20px;\"></i>\n            <input type=\"radio\"  name=\"categorystatus\" value=\"InActive\"\n            id=\"categorystatusinactive\" #categorystatus=\"ngModel\" required [(ngModel)]=\"CategoryStatus\">InActive\n            </div>\n        \n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!heroFormmmmmmmmmm.form.valid\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"myModal3\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n<div class=\"modal-dialog\" role=\"document\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n    <button class=\"close\" data-dismiss=\"modal\" (click)=\"formreset(heroForm2222)\">X</button>\n      <h4 class=\"modal-title\" id=\"myModalLabel\">Edit Category</h4>\n    </div>\n    <div class=\"modal-body\">\n        <form (ngSubmit)=\"EditCategory()\" #heroForm2222=\"ngForm\">  \n            <div class=\"form-group\">\n            <label  for=\"Contractname1\">Category Name<span style=\"color:red\">*</span></label>\n            <input type=\"text\" class=\"form-control\" id=\"Contractname1\"\n            required\n            [(ngModel)]=\"contract.Name\" name=\"Contractname1\"\n            #Contractname1=\"ngModel\">\n            <div [hidden]=\"Contractname1.valid || Contractname1.pristine\"\n                class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                <div [hidden]=\"!Contractname1.hasError('required')\">Category name is required</div>\n            </div>\n            </div>\n\n            <div class=\"form-group\">\n            <label>Parent Category</label>\n            <select  class=\"form-control\" id=\"parentcategory\" [(ngModel)]=\"addCategory\" name=\"parentcategory\"\n            #parentcategory=\"ngModel\">\n                <option [ngValue]=\"null\" disabled>--Select--</option>\n                <option *ngFor=\"let u of ParentCategory\" [selected]=\"u.Category_Name == addCategory\">{{u.Category_Name}}</option>\n            </select>\n            </div>\n\n            <div class=\"form-group\">\n            <label style=\"margin-right:20px;\">Status<span style=\"color:red\">*</span></label>\n            <input type=\"radio\"  name=\"categorystatus\" value=\"Active\"\n            id=\"categorystatusactive\" #categorystatus=\"ngModel\" required [(ngModel)]=\"CategoryStatus\">Active<i style=\"margin-right:20px;\"></i>\n            <input type=\"radio\"  name=\"categorystatus\" value=\"InActive\"\n            id=\"categorystatusinactive\" #categorystatus=\"ngModel\" required [(ngModel)]=\"CategoryStatus\">InActive\n            </div>\n        \n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!heroForm2222.form.valid\">Submit</button>\n        </form>\n    </div>\n  </div>\n</div>\n</div>\n\n<div class=\"modal fade\" id=\"message\" role=\"dialog\">\n<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Message</h4>\n    </div>\n    <div class=\"modal-body\">\n        {{message}}\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n    </div>\n    </div>\n</div>\n</div>\n<div class=\"modal fade\" id=\"cnfrmDelete\" role=\"dialog\">\n<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Message</h4>\n    </div>\n    <div class=\"modal-body\">\n        <h4>Do you Want To Delete</h4>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"DeleteCategory()\">Delete</button>\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n    </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal__ = __webpack_require__("../../../../../src/app/modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__("../../../../../../config/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__config_config__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoryComponent = (function () {
    function CategoryComponent(router, http, toasterService) {
        this.router = router;
        this.http = http;
        this.toasterService = toasterService;
        this.contract = new __WEBPACK_IMPORTED_MODULE_3__modal__["b" /* Contract */]();
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.User_data = JSON.parse(localStorage.getItem('User'));
        if (this.User_data) {
            var obj = {
                id: this.User_data.idUsers
            };
            this.http.post('//' + __WEBPACK_IMPORTED_MODULE_5__config_config__["global_ip"] + '/ApI/retrieveCategory', obj).subscribe(function (res) {
                var result = JSON.parse(res._body);
                if (result.status == 200) {
                    self.Category = result.res;
                }
            }, function (err) {
                _this.message = 'Data Not Found';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            });
            this.http.post('//' + __WEBPACK_IMPORTED_MODULE_5__config_config__["global_ip"] + '/ApI/retrieveParentCategory', obj).subscribe(function (res) {
                var result = JSON.parse(res._body);
                if (result.status == 200) {
                    self.ParentCategory = result.res;
                }
            }, function (err) {
                _this.message = 'Data Not Found';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            });
        }
        else {
            console.log('ll');
        }
    };
    CategoryComponent.prototype.CreateCategory = function () {
        var _this = this;
        var self = this;
        $('#myModal1').modal('toggle');
        if (!this.addCategory) {
            this.contract['status'] = this.CategoryStatus;
            this.contract['icon'] = 'jpg';
            this.http.post('//' + __WEBPACK_IMPORTED_MODULE_5__config_config__["global_ip"] + '/ApI/addParentCategory', this.contract).subscribe(function (res) {
                _this.contract = {};
                var result = JSON.parse(res._body);
                if (result.status == 200) {
                    _this.message = 'Category Inserted';
                    $('#message').modal('toggle');
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000);
                }
                else {
                    _this.message = 'Table Not Found';
                    $('#message').modal('toggle');
                    setTimeout(function () {
                        $('#message').modal('toggle');
                    }, 1000);
                }
            }, function (err) {
                _this.contract = {};
                _this.message = 'Table Not Found';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            });
        }
        else {
            this.contract['parentCategory'] = this.addCategory;
            this.contract['status'] = this.CategoryStatus;
            this.contract['icon'] = 'jpg';
            this.http.post('//' + __WEBPACK_IMPORTED_MODULE_5__config_config__["global_ip"] + '/ApI/addCategory', this.contract).subscribe(function (res) {
                _this.contract = {};
                var result = JSON.parse(res._body);
                if (result.status == 200) {
                    _this.message = 'Category Inserted';
                    $('#message').modal('toggle');
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000);
                }
                else {
                    _this.message = 'Table Not Found';
                    $('#message').modal('toggle');
                    setTimeout(function () {
                        $('#message').modal('toggle');
                    }, 1000);
                }
            }, function (err) {
                _this.contract = {};
                _this.message = 'Table Not Found';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            });
        }
    };
    CategoryComponent.prototype.formreset = function (f) {
        f.resetForm();
    };
    CategoryComponent.prototype.EditCategory = function () {
        var _this = this;
        $('#myModal2').modal('toggle');
        this.contract['parentCategory'] = this.addCategory;
        this.contract['status'] = this.CategoryStatus;
        this.contract['icon'] = 'jpg';
        this.http.post('//' + __WEBPACK_IMPORTED_MODULE_5__config_config__["global_ip"] + '/ApI/editCategory', this.contract).subscribe(function (res) {
            _this.contract = {};
            var result = JSON.parse(res._body);
            if (result.status == 200) {
                _this.message = 'Category Updated';
                $('#message').modal('toggle');
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
            }
            else {
                _this.message = 'Table Not Found';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            }
        }, function (err) {
            _this.contract = {};
            _this.message = 'Table Not Found';
            $('#message').modal('toggle');
            setTimeout(function () {
                $('#message').modal('toggle');
            }, 1000);
        });
    };
    CategoryComponent.prototype.ConfirmDelete = function (id) {
        $('#cnfrmDelete').modal('toggle');
        this.cnfrmDeleteID = id;
    };
    CategoryComponent.prototype.DeleteCategory = function () {
        var _this = this;
        $('#cnfrmDelete').modal('toggle');
        var obj = { id: this.cnfrmDeleteID };
        this.http.post('//' + __WEBPACK_IMPORTED_MODULE_5__config_config__["global_ip"] + '/ApI/DeleteCategory', obj).subscribe(function (res) {
            var result = JSON.parse(res._body);
            if (result.status == 200) {
                _this.message = 'Category Deleted';
                $('#message').modal('toggle');
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
            }
            else {
                _this.message = 'Table Not Found';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            }
        }, function (err) {
            _this.message = 'Table Not Found';
            $('#message').modal('toggle');
            setTimeout(function () {
                $('#message').modal('toggle');
            }, 1000);
        });
    };
    CategoryComponent.prototype.changeModal = function (e) {
        this.addCategory = e.Parent_Category;
        this.contract['icon'] = e.Icon;
        this.contract['status'] = e.Status;
        var $radios = $('input:radio[name=categorystatus]');
        if ($radios.is(':checked') === false) {
            $radios.filter('[value=' + e.Status + ']').prop('checked', true);
        }
        this.contract.Name = e.Category_Name;
        this.contract['id'] = e.idTemplateCategory;
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-category',
        template: __webpack_require__("../../../../../src/app/admin/category/category.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object])
], CategoryComponent);

var _a, _b, _c;
//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/create-template/create-template.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>  \n  <section>\n    <section class=\"admin-dashbord\">\n      <div class=\"container-fluid\">\n            <app-sidemenu></app-sidemenu>\n            \n            <div class=\"col-sm-9 right-side\">\n              <div class=\"graph-tab customer-das manage-dash-temp\">\n                <div class=\"row mnage-user-forms\">\n                    <div class=\"col-sm-9\">\n                      <h3>Create Template</h3>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"tab-content\" style=\"padding:30px;\">\n                    <form (ngSubmit)=\"CreateTemplate()\" #heroFormmmmmmmmmm=\"ngForm\">  \n                        <div class=\"form-group\">\n                        <label  for=\"Templatename\">Template Name<span style=\"color:red\">*</span></label>\n                        <input type=\"text\" class=\"form-control\" id=\"Templatename\"\n                        required\n                        [(ngModel)]=\"contract.Name\" name=\"Templatename\"\n                        #Templatename=\"ngModel\">\n                        <div [hidden]=\"Templatename.valid || Templatename.pristine\"\n                            class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                            <div [hidden]=\"!Templatename.hasError('required')\">Template name is required</div>\n                        </div>\n                        </div>\n            \n                        <div class=\"form-group\">\n                        <label>Select Category<span style=\"color:red\">*</span></label>\n                        <select  class=\"form-control\" id=\"contractcategory\" [(ngModel)]=\"contractcategoryname\" name=\"contractcategory\"\n                        #contractcategory=\"ngModel\">\n                            <option [ngValue]=\"null\" disabled>--Select--</option>\n                            <option *ngFor=\"let u of Category\">{{u.Category_Name}}</option>\n                        </select>\n                        </div>\n\n                        <div class=\"form-group\">\n                        <label  for=\"Description\">Description<span style=\"color:red\">*</span></label>\n                        <input type=\"textarea\" class=\"form-control\" id=\"Description\"\n                        required\n                        [(ngModel)]=\"contract.Description\" name=\"Description\"\n                        #Description=\"ngModel\">\n                        <div [hidden]=\"Description.valid || Description.pristine\"\n                            class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                            <div [hidden]=\"!Description.hasError('required')\">Description is required</div>\n                        </div>\n                        </div>\n            \n                        <div class=\"form-group\">\n                        <label style=\"margin-right:20px;\">Status<span style=\"color:red\">*</span></label>\n                        <input type=\"radio\"  name=\"statustemplate\" value=\"Active\"\n                        id=\"statustemplateactive\" #categorystatus=\"ngModel\" required [(ngModel)]=\"templatestatus\">Active<i style=\"margin-right:20px;\"></i>\n                        <input type=\"radio\"  name=\"statustemplate\" value=\"InActive\"\n                        id=\"statustemplateinactive\" #categorystatus=\"ngModel\" required [(ngModel)]=\"templatestatus\">InActive\n                        </div>\n\n                        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!heroFormmmmmmmmmm.form.valid\">Submit</button>\n                    </form>\n                    </div>\n              </div>\n              </div>\n            </div>\n        </div>\n            <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n    </section>\n  </section>\n  <app-footer></app-footer> \n    <div class=\"modal fade\" id=\"message\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 class=\"modal-title\">Message</h4>\n        </div>\n        <div class=\"modal-body\">\n            <h4>Message! {{message}}</h4>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n        </div>\n        </div>\n    </div>\n    </div>\n            "

/***/ }),

/***/ "../../../../../src/app/admin/create-template/create-template.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal__ = __webpack_require__("../../../../../src/app/modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__("../../../../../../config/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__config_config__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTemplateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateTemplateComponent = (function () {
    function CreateTemplateComponent(router, http, toasterService, route) {
        this.router = router;
        this.http = http;
        this.route = route;
        this.toasterService = toasterService;
        this.contract = new __WEBPACK_IMPORTED_MODULE_3__modal__["b" /* Contract */]();
    }
    CreateTemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.User_data = JSON.parse(localStorage.getItem('User'));
        if (this.User_data) {
            var obj = {
                id: this.User_data.idUsers
            };
            this.http.post('//' + __WEBPACK_IMPORTED_MODULE_5__config_config__["global_ip"] + '/ApI/retrieveCategory', obj).subscribe(function (res) {
                _this.Category = JSON.parse(res._body).res;
                console.log(_this.Category);
            }, function (err) {
                _this.message = 'Data Not Found';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            });
        }
        else {
            console.log('ll');
        }
    };
    CreateTemplateComponent.prototype.CreateTemplate = function () {
        var _this = this;
        var self = this;
        this.contract['categoryName'] = this.contractcategoryname;
        this.contract['status'] = this.templatestatus;
        this.contract['User_id'] = this.User_data.idUsers;
        this.http.post('//' + __WEBPACK_IMPORTED_MODULE_5__config_config__["global_ip"] + '/pdf/CreateTemplate', this.contract).subscribe(function (res) {
            _this.contract = {};
            var result = JSON.parse(res._body);
            if (result.status == 200) {
                _this.message = 'User Updated';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                    self.router.navigate(['/admin/manageTemplate']);
                }, 1000);
            }
            else {
                _this.message = 'Table Not Found';
                var heroFormmmmmmmmmm;
                heroFormmmmmmmmmm.resetForm();
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            }
        }, function (err) {
            _this.message = 'Table Not Found';
            var heroFormmmmmmmmmm;
            heroFormmmmmmmmmm.resetForm();
            $('#message').modal('toggle');
            setTimeout(function () {
                $('#message').modal('toggle');
            }, 1000);
        });
    };
    return CreateTemplateComponent;
}());
CreateTemplateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-create-template',
        template: __webpack_require__("../../../../../src/app/admin/create-template/create-template.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], CreateTemplateComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=create-template.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/create-template/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>  \n  <section>\n    <section class=\"admin-dashbord\">\n      <div class=\"container-fluid\">\n            <app-sidemenu></app-sidemenu>\n            \n            <div class=\"col-sm-9 right-side\">\n              <div class=\"graph-tab customer-das manage-dash-temp\">\n                <div class=\"row mnage-user-forms\">\n                    <div class=\"col-sm-9\">\n                      <h3>Edit Template</h3>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"tab-content\" style=\"padding:30px;\">\n                    <form (ngSubmit)=\"CreateTemplate()\" #heroFormmmmmmmmmm=\"ngForm\">  \n                        <div class=\"form-group\">\n                        <label  for=\"Templatename\">Template Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"Templatename\"\n                        required\n                        [(ngModel)]=\"contract.Name\" name=\"Templatename\"\n                        #Templatename=\"ngModel\">\n                        <div [hidden]=\"Templatename.valid || Templatename.pristine\"\n                            class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                            <div [hidden]=\"!Templatename.hasError('required')\">Template name is required</div>\n                        </div>\n                        </div>\n            \n                        <div class=\"form-group\">\n                        <label>Select Category<span style=\"color:red\">*</span></label>\n                        <select  class=\"form-control\" id=\"contractcategory\" [(ngModel)]=\"contractcategoryname\" name=\"contractcategory\"\n                        #contractcategory=\"ngModel\">\n                            <option [ngValue]=\"null\" disabled>--Select--</option>\n                            <option *ngFor=\"let u of Category\">{{u.Category_Name}}</option>\n                        </select>\n                        </div>\n\n                        <div class=\"form-group\">\n                        <label  for=\"Description\">Description</label>\n                        <input type=\"textarea\" class=\"form-control\" id=\"Description\"\n                        required\n                        [(ngModel)]=\"contract.Description\" name=\"Description\"\n                        #Description=\"ngModel\">\n                        <div [hidden]=\"Description.valid || Description.pristine\"\n                            class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                            <div [hidden]=\"!Description.hasError('required')\">Description is required</div>\n                        </div>\n                        </div>\n            \n                        <div class=\"form-group\">\n                        <label style=\"margin-right:20px;\">Status<span style=\"color:red\">*</span></label>\n                        <input type=\"radio\"  name=\"statustemplate\" value=\"Active\"\n                        id=\"statustemplateactive\" #categorystatus=\"ngModel\" required [(ngModel)]=\"templatestatus\">Active<i style=\"margin-right:20px;\"></i>\n                        <input type=\"radio\"  name=\"statustemplate\" value=\"InActive\"\n                        id=\"statustemplateinactive\" #categorystatus=\"ngModel\" required [(ngModel)]=\"templatestatus\">InActive\n                        </div>\n\n                        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!heroFormmmmmmmmmm.form.valid\">Submit</button>\n                    </form>\n                    </div>\n              </div>\n              </div>\n            </div>\n        </div>\n            <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n    </section>\n  </section>\n  <app-footer></app-footer>\n  <div class=\"modal fade\" id=\"message\" role=\"dialog\">\n<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Message</h4>\n    </div>\n    <div class=\"modal-body\">\n        <h4>Message! {{message}}</h4>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n    </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/create-template/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal__ = __webpack_require__("../../../../../src/app/modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__("../../../../../../config/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__config_config__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditComponent = (function () {
    function EditComponent(router, http, toasterService, route) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.route = route;
        this.toasterService = toasterService;
        this.contract = new __WEBPACK_IMPORTED_MODULE_3__modal__["b" /* Contract */]();
        this.route.queryParams.subscribe(function (params) {
            _this.contract['id'] = params["idTemplates"];
            _this.contract.Name = params["TemplateName"];
            _this.contract['categoryName'] = params["Category_Name"];
            _this.contract.Description = params["Description"];
            _this.contract['status'] = params["Status"];
        });
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var $radios = $('input:radio[name=rbnNumber]');
        $radios.filter('[value=' + this.contract['status'] + ']').prop('checked', true);
        this.User_data = JSON.parse(localStorage.getItem('User'));
        if (this.User_data) {
            var obj = {
                id: this.User_data.idUsers
            };
            this.http.post('//' + __WEBPACK_IMPORTED_MODULE_5__config_config__["global_ip"] + '/ApI/retrieveCategory', obj).subscribe(function (res) {
                _this.Category = JSON.parse(res._body).res;
                console.log(_this.Category);
            }, function (err) {
                _this.message = 'Data Not Found';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            });
        }
        else {
            console.log('ll');
        }
    };
    EditComponent.prototype.CreateTemplate = function () {
        var _this = this;
        var self = this;
        this.contract['categoryName'] = this.contractcategoryname;
        this.contract['status'] = this.templatestatus;
        this.http.post('//' + __WEBPACK_IMPORTED_MODULE_5__config_config__["global_ip"] + '/pdf/UpdateTemplate', this.contract).subscribe(function (res) {
            _this.contract = {};
            var result = JSON.parse(res._body);
            if (result.status == 200) {
                _this.message = 'Template Created';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                    self.router.navigate(['/admin/manageTemplate']);
                }, 1000);
            }
            else {
                var heroFormmmmmmmmmm;
                heroFormmmmmmmmmm.resetForm();
                _this.message = 'Table Not Found';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            }
        }, function (err) {
            var heroFormmmmmmmmmm;
            heroFormmmmmmmmmm.resetForm();
            _this.message = 'Table Not Found';
            $('#message').modal('toggle');
            setTimeout(function () {
                $('#message').modal('toggle');
            }, 1000);
        });
    };
    return EditComponent;
}());
EditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-edit',
        template: __webpack_require__("../../../../../src/app/admin/create-template/edit/edit.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], EditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/manage-subscription/manage-subscription.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"admin-dashbord\">\n<div class=\"container-fluid\">\n    <app-sidemenu></app-sidemenu>\n        <div class=\"col-sm-9 right-side\">\n        <div class=\"graph-tab customer-das manage-dash-temp\">\n            <div class=\"row mnage-user-forms\">\n                <div class=\"col-sm-9\">\n                        <h3>Manage Subscription</h3>\n                </div>\n                <div class=\"col-sm-3\">\n                        <button class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#myModal3\" style=\"width:150px;\" (click)=\"formreset(heroFormyyyyy)\">Create</button>\n                </div>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table table-bordered\">\n                    <thead>\n                        <tr class=\"active\">\n                            <th>SNo</th>\n                            <th>Package Name</th>\n                            <th>Package Price</th>\n                            <th>Number Of Contracts</th>\n                            <th>Renewal Frequency</th>\n                            <th>Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr class=\"bg-wht\"  *ngFor=\"let u of ViewSubscription\">\n                            <td>{{u.idSubscriptions}}</td>\n                            <td>{{u.packageName}}</td>\n                            <td>{{u.packagePrice}}</td>\n                            <td>{{u.numberOfContract}}</td>\n                            <td>{{u.renewalFrequency}}</td>\n                            <td><i class=\"fa fa-pencil\" aria-hidden=\"true\" style=\"margin-right:10px;\" data-toggle=\"modal\" data-target=\"#myModal4\" (click)=\"changeModal(u)\" type=\"clcikable;\"></i><i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"ConfrmDelete(u.idSubscriptions)\"></i></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        </div>\n    </div>\n        <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n</section>\n<app-footer></app-footer>\n<div class=\"modal fade\" id=\"message\" role=\"dialog\">\n<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Message</h4>\n    </div>\n    <div class=\"modal-body\">\n        <h4>Message! {{message}}</h4>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n    </div>\n    </div>\n</div>\n</div>\n<div class=\"modal fade\" id=\"cnfrmDelete\" role=\"dialog\">\n<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Message</h4>\n    </div>\n    <div class=\"modal-body\">\n        <h4>Do you Want To Delete</h4>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"DeleteSubscription()\">Delete</button>\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n    </div>\n    </div>\n</div>\n</div>\n<!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->\n\n<div class=\"modal fade\" id=\"myModal4\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"Close()\"><span aria-hidden=\"true\">&times;</span></button>\n              <h4 class=\"modal-title\">Edit Subscription Plan</h4>\n            </div>\n            <div class=\"modal-body\">\n            <form (ngSubmit)=\"EditSubscription()\" #heroFormxxxxx=\"ngForm\">  \n                <div class=\"form-group\">\n                <label  for=\"Packagename\">Package Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"Packagename\"\n                required\n                [(ngModel)]=subscriptionPlan.packageName name=\"Packagename\"\n                #Packagename=\"ngModel\">\n                <div [hidden]=\"Packagename.valid || Packagename.pristine\"\n                    class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                    <div [hidden]=\"!Packagename.hasError('required')\">Package name is required</div>\n                </div>\n                </div>\n\n\n                <div class=\"form-group\">\n                <label  for=\"PackagePrice\">Package Price</label>\n                <input type=\"text\" class=\"form-control\" id=\"PackagePrice\"\n                required\n                pattern=\"[0-9]*\"\n                maxlength=\"10\" \n                [(ngModel)]=subscriptionPlan.packagePrice name=\"PackagePrice\"\n                #PackagePrice=\"ngModel\">\n                <div [hidden]=\"PackagePrice.valid || PackagePrice.pristine\"\n                    class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                    <div class=\"ddddddd\" [hidden]=\"!PackagePrice.hasError('required')\">Package Price is required</div>\n                    <div class=\"ddddddd\" [hidden]=\"!PackagePrice.hasError('pattern')\">Only Numbers Are Allowed</div>\n                    <div [hidden]=\"!PackagePrice.hasError('maxlength')\">Only 10 Numbers</div>\n                </div>\n                </div>\n\n\n                <div class=\"form-group\">\n                <label  for=\"noOfcontract\">Number Of Contracts</label>\n                <input type=\"text\" class=\"form-control\" id=\"noOfcontract\"\n                required\n                pattern=\"[0-9]*\"\n                maxlength=\"10\" \n                [(ngModel)]=subscriptionPlan.numberOfContract name=\"noOfcontract\"\n                #noOfcontract=\"ngModel\">\n                <div [hidden]=\"noOfcontract.valid || noOfcontract.pristine\"\n                    class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                    <div class=\"ddddddd\" [hidden]=\"!noOfcontract.hasError('required')\">Number of Contract is required</div>\n                    <div class=\"ddddddd\" [hidden]=\"!noOfcontract.hasError('pattern')\">Only Numbers Are Allowed</div>\n                    <div [hidden]=\"!noOfcontract.hasError('maxlength')\">Only 10 Numbers</div>\n                </div>\n                </div>\n\n\n                <div class=\"form-group\">\n                <label  for=\"renewalfrequency\">Renewal Frequency</label>\n                <input type=\"text\" class=\"form-control\" id=\"renewalfrequency\"\n                required\n                pattern=\"[0-9]*\"\n                maxlength=\"10\" \n                [(ngModel)]=subscriptionPlan.renewalFrequency name=\"renewalfrequency\"\n                #renewalfrequency=\"ngModel\">\n                <div [hidden]=\"renewalfrequency.valid || renewalfrequency.pristine\"\n                    class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                    <div class=\"ddddddd\" [hidden]=\"!renewalfrequency.hasError('required')\">Renewal Frequency is required</div>\n                    <div class=\"ddddddd\" [hidden]=\"!renewalfrequency.hasError('pattern')\">Only Numbers Are Allowed</div>\n                    <div [hidden]=\"!renewalfrequency.hasError('maxlength')\">Only 10 Numbers</div>\n                </div>\n                </div>\n\n                <div class=\"form-group\">\n                <label style=\"margin-right:20px;\">Status<span style=\"color:red\">*</span></label>\n                <input type=\"radio\"  name=\"status\" value=\"Active\"\n                id=\"statusactive\" #status=\"ngModel\" required [(ngModel)]=\"subscriptionstatus\">Active<i style=\"margin-right:20px;\"></i>\n                <input type=\"radio\"  name=\"status\" value=\"InActive\"\n                id=\"statusinactive\" #status=\"ngModel\" required [(ngModel)]=\"subscriptionstatus\">InActive\n                </div>\n    \n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!heroFormxxxxx.form.valid\">Submit</button>\n            </form>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"modal fade\" id=\"myModal3\" >\n            <div class=\"modal-dialog\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"Close()\"><span aria-hidden=\"true\">&times;</span></button>\n                  <h4 class=\"modal-title\" >Add Subscription Plan</h4>\n                </div>\n                <div class=\"modal-body\">\n                      <form (ngSubmit)=\"AddSubscriptionPlan()\" #heroFormyyyyy=\"ngForm\">  \n                              <div class=\"form-group\">\n                              <label  for=\"Packagename1\">Package Name</label>\n                              <input type=\"text\" class=\"form-control\" id=\"Packagename1\"\n                              required\n                              [(ngModel)]=subscriptionPlan.packageName name=\"Packagename1\"\n                              #Packagename1=\"ngModel\">\n                              <div [hidden]=\"Packagename1.valid || Packagename1.pristine\"\n                                  class=\"alert alert-danger\">\n                                  <div [hidden]=\"!Packagename1.hasError('required')\">Packagename is required</div>\n                              </div>\n                              </div>\n      \n      \n                              <div class=\"form-group\">\n                              <label  for=\"PackagePrice1\">Package Price</label>\n                              <input type=\"text\" class=\"form-control\" id=\"PackagePrice1\"\n                              required\n                              pattern=\"[0-9]*\"\n                              maxlength=\"10\" \n                              [(ngModel)]=subscriptionPlan.packagePrice name=\"PackagePrice1\"\n                              #PackagePrice1=\"ngModel\">\n                              <div [hidden]=\"PackagePrice1.valid || PackagePrice1.pristine\"\n                                  class=\"alert alert-danger\">\n                                  <div [hidden]=\"!PackagePrice1.hasError('required')\">PackagePrice is required</div>\n                                  <div [hidden]=\"!PackagePrice1.hasError('pattern')\">Only Numbers Are Allowed</div>\n                                  <div [hidden]=\"!PackagePrice1.hasError('maxlength')\">Only 10 Numbers</div>\n                              </div>\n                              </div>\n      \n      \n                              <div class=\"form-group\">\n                              <label  for=\"noOfcontract1\">Number Of Contracts</label>\n                              <input type=\"text\" class=\"form-control\" id=\"noOfcontract1\"\n                              required\n                              pattern=\"[0-9]*\"\n                              maxlength=\"10\" \n                              [(ngModel)]=subscriptionPlan.numberOfContract name=\"noOfcontract1\"\n                              #noOfcontract1=\"ngModel\">\n                              <div [hidden]=\"noOfcontract1.valid || noOfcontract1.pristine\"\n                                  class=\"alert alert-danger\">\n                                  <div [hidden]=\"!noOfcontract1.hasError('required')\">Number of Contract is required</div>\n                                  <div [hidden]=\"!noOfcontract1.hasError('pattern')\">Only Numbers Are Allowed</div>\n                                  <div [hidden]=\"!noOfcontract1.hasError('maxlength')\">Only 10 Numbers</div>\n                              </div>\n                              </div>\n      \n      \n                              <div class=\"form-group\">\n                              <label  for=\"renewalfrequency1\">Renewal Frequency</label>\n                              <input type=\"text\" class=\"form-control\" id=\"renewalfrequency1\"\n                              required\n                              pattern=\"[0-9]*\"\n                              maxlength=\"10\" \n                              [(ngModel)]=subscriptionPlan.renewalFrequency name=\"renewalfrequency1\"\n                              #renewalfrequency1=\"ngModel\">\n                              <div [hidden]=\"renewalfrequency1.valid || renewalfrequency1.pristine\"\n                                  class=\"alert alert-danger\">\n                                  <div [hidden]=\"!renewalfrequency1.hasError('required')\">Renewal Frequency is required</div>\n                                  <div [hidden]=\"!renewalfrequency1.hasError('pattern')\">Only Numbers Are Allowed</div>\n                                  <div [hidden]=\"!renewalfrequency1.hasError('maxlength')\">Only 10 Numbers</div>\n                              </div>\n                              </div>\n\n                            <div class=\"form-group\">\n                            <label style=\"margin-right:20px;\">Status<span style=\"color:red\">*</span></label>\n                            <input type=\"radio\"  name=\"status\" value=\"Active\"\n                            id=\"statusactive\" #status=\"ngModel\" required [(ngModel)]=\"subscriptionstatus\">Active<i style=\"margin-right:20px;\"></i>\n                            <input type=\"radio\"  name=\"status\" value=\"InActive\"\n                            id=\"statusinactive\" #status=\"ngModel\" required [(ngModel)]=\"subscriptionstatus\">InActive\n                            </div>\n                  \n                              <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!heroFormyyyyy.form.valid\">Submit</button>\n                          </form>\n                </div>\n              </div>\n            </div>\n          </div>"

/***/ }),

/***/ "../../../../../src/app/admin/manage-subscription/manage-subscription.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal__ = __webpack_require__("../../../../../src/app/modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__("../../../../../../config/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__config_config__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageSubscriptionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageSubscriptionComponent = (function () {
    function ManageSubscriptionComponent(http, router) {
        this.http = http;
        this.router = router;
        this.subscriptionPlan = new __WEBPACK_IMPORTED_MODULE_1__modal__["f" /* subscriptionPlan */]();
    }
    ManageSubscriptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.User_data = JSON.parse(localStorage.getItem('User'));
        if (this.User_data) {
            var obj = {
                id: this.User_data.idUsers
            };
            this.http.post('//' + __WEBPACK_IMPORTED_MODULE_4__config_config__["global_ip"] + '/ApI/AdminviewSubscription', obj).subscribe(function (res) {
                _this.ViewSubscription = JSON.parse(res._body).res;
            }, function (err) {
                _this.message = 'Table Not Found';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            });
        }
        else {
            console.log('ll');
        }
    };
    ManageSubscriptionComponent.prototype.AddSubscriptionPlan = function () {
        var _this = this;
        $('#myModal3').modal('toggle');
        var obj = { packageName: this.subscriptionPlan.packageName, packagePrice: this.subscriptionPlan.packagePrice,
            numberOfContract: this.subscriptionPlan.numberOfContract, renewalFrequency: this.subscriptionPlan.renewalFrequency,
            primaryKey: this.User_data.idUsers, packagestatus: this.subscriptionstatus
        };
        this.http.post('//' + __WEBPACK_IMPORTED_MODULE_4__config_config__["global_ip"] + '/ApI/AdminManageSubscription', obj).subscribe(function (res) {
            _this.subscriptionPlan = {};
            var result = JSON.parse(res._body);
            if (result.status == 200) {
                _this.message = 'User Updated';
                $('#message').modal('toggle');
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
            }
            else {
                _this.message = 'Table Not Found';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            }
        }, function (err) {
            _this.message = 'Table Not Found';
            $('#message').modal('toggle');
            setTimeout(function () {
                $('#message').modal('toggle');
            }, 1000);
        });
    };
    ManageSubscriptionComponent.prototype.formreset = function (f) {
        f.resetForm();
    };
    ManageSubscriptionComponent.prototype.changeModal = function (e) {
        this.modalData = e.idSubscriptions;
        this.subscriptionPlan.packageName = e.packageName;
        this.subscriptionPlan.packagePrice = e.packagePrice;
        this.subscriptionPlan.numberOfContract = e.numberOfContract;
        this.subscriptionPlan.renewalFrequency = e.renewalFrequency;
        var $radios = $('input:radio[name=status]');
        if ($radios.is(':checked') === false) {
            $radios.filter('[value=' + e.Status + ']').prop('checked', true);
        }
    };
    ManageSubscriptionComponent.prototype.EditSubscription = function () {
        var _this = this;
        $('#myModal4').modal('toggle');
        var obj = { packageName: this.subscriptionPlan.packageName, packagePrice: this.subscriptionPlan.packagePrice,
            numberOfContract: this.subscriptionPlan.numberOfContract, renewalFrequency: this.subscriptionPlan.renewalFrequency,
            primaryKey: this.User_data.idUsers, packagestatus: this.subscriptionstatus
        };
        this.http.post('//' + __WEBPACK_IMPORTED_MODULE_4__config_config__["global_ip"] + '/ApI/AdminUpdateSubscription', obj).subscribe(function (res) {
            _this.subscriptionPlan = {};
            var result = JSON.parse(res._body);
            if (result.status == 200) {
                _this.message = 'User Updated';
                $('#message').modal('toggle');
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
            }
            else {
                _this.message = 'Table Not Found';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            }
        }, function (err) {
            _this.message = 'Table Not Found';
            $('#message').modal('toggle');
            setTimeout(function () {
                $('#message').modal('toggle');
            }, 1000);
        });
    };
    ManageSubscriptionComponent.prototype.ConfrmDelete = function (id) {
        $('#cnfrmDelete').modal('toggle');
        this.cnfrmDeleteID = id;
    };
    ManageSubscriptionComponent.prototype.DeleteSubscription = function () {
        var _this = this;
        $('#cnfrmDelete').modal('toggle');
        var obj = { id: this.cnfrmDeleteID };
        this.http.post('//' + __WEBPACK_IMPORTED_MODULE_4__config_config__["global_ip"] + '/ApI/AdminDeleteSubscription', obj).subscribe(function (res) {
            var result = JSON.parse(res._body);
            if (result.status == 200) {
                _this.message = 'User Updated';
                $('#message').modal('toggle');
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
            }
            else {
                _this.message = 'Table Not Found';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            }
        }, function (err) {
            _this.message = 'Table Not Found';
            $('#message').modal('toggle');
            setTimeout(function () {
                $('#message').modal('toggle');
            }, 1000);
        });
    };
    ManageSubscriptionComponent.prototype.Close = function () {
        this.subscriptionPlan = {};
    };
    return ManageSubscriptionComponent;
}());
ManageSubscriptionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-manage-subscription',
        template: __webpack_require__("../../../../../src/app/admin/manage-subscription/manage-subscription.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ManageSubscriptionComponent);

var _a, _b;
//# sourceMappingURL=manage-subscription.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/manage-templates/manage-templates.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"admin-dashbord\">\n<div class=\"container-fluid\">\n    <app-sidemenu></app-sidemenu>\n        <div class=\"col-sm-9 right-side\">\n        <div class=\"graph-tab customer-das manage-dash-temp\">\n            <div class=\"row mnage-user-forms\">\n                <div class=\"col-sm-9\">\n                    <h3>Manage Template</h3>\n                </div>\n                <div class=\"col-sm-3\">\n                        <button class=\"btn btn-default\" routerLink=\"/admin/createTemplate\" style=\"width:150px;\">Create</button>\n                </div>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table table-bordered\">\n                    <thead>\n                        <tr class=\"active\">\n                            <th>Template Name</th>\n                            <th>Template Category</th>\n                            <th>Status</th>\n                            <th>Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr class=\"bg-wht\" *ngFor=\"let u of ViewTemplate\">\n                            <td>{{u.Template_Name}}</td>\n                            <td>{{u.Category_Name}}</td>\n                            <td>{{u.Status}}</td>\n                            <td><i class=\"fa fa-pencil\" aria-hidden=\"true\" style=\"margin-right:10px;\" (click)=\"changePage(u)\"></i> <i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"ConfirmDelete(u.idTemplates)\"></i></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        </div>\n    </div>\n        <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n</section>\n<app-footer></app-footer>\n<div class=\"modal fade\" id=\"message\" role=\"dialog\">\n<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Message</h4>\n    </div>\n    <div class=\"modal-body\">\n        <h4>Message! {{message}}</h4>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n    </div>\n    </div>\n</div>\n</div>\n<div class=\"modal fade\" id=\"cnfrmDelete\" role=\"dialog\">\n<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Message</h4>\n    </div>\n    <div class=\"modal-body\">\n        <h4>Do you Want To Delete</h4>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"DeleteTemplate()\">Delete</button>\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n    </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/manage-templates/manage-templates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal__ = __webpack_require__("../../../../../src/app/modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__("../../../../../../config/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__config_config__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageTemplatesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageTemplatesComponent = (function () {
    function ManageTemplatesComponent(router, http) {
        this.router = router;
        this.http = http;
        this.TemplateData = new __WEBPACK_IMPORTED_MODULE_3__modal__["c" /* Templates */]();
    }
    ManageTemplatesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.User_data = JSON.parse(localStorage.getItem('User'));
        if (this.User_data) {
            this.http.get('//' + __WEBPACK_IMPORTED_MODULE_4__config_config__["global_ip"] + '/pdf/getTemplates').subscribe(function (res) {
                _this.ViewTemplate = JSON.parse(res._body).res;
            }, function (err) {
                _this.message = 'Data Not Found';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            });
        }
        else {
            console.log('ll');
        }
    };
    ManageTemplatesComponent.prototype.changeModal = function (e) {
        this.modalData = e;
    };
    ManageTemplatesComponent.prototype.ConfirmDelete = function (id) {
        $('#cnfrmDelete').modal('toggle');
        this.confirmDeleteID = id;
    };
    ManageTemplatesComponent.prototype.DeleteTemplate = function () {
        var _this = this;
        $('#cnfrmDelete').modal('toggle');
        var obj = { id: this.confirmDeleteID };
        this.http.post('//' + __WEBPACK_IMPORTED_MODULE_4__config_config__["global_ip"] + '/pdf/DeleteTemplate', obj).subscribe(function (res) {
            var result = JSON.parse(res._body);
            if (result.status == 200) {
                _this.message = 'User Updated';
                $('#message').modal('toggle');
                setTimeout(function () {
                    window.location.reload();
                }, 2000);
            }
            else {
                _this.message = 'Table Not Found';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            }
        }, function (err) {
            _this.message = 'Table Not Found';
            $('#message').modal('toggle');
            setTimeout(function () {
                $('#message').modal('toggle');
            }, 1000);
        });
    };
    ManageTemplatesComponent.prototype.changePage = function (data) {
        var navigationExtras = {
            queryParams: {
                "idTemplates": data.idTemplate,
                "TemplateName": data.Template_Name,
                "Category_Name": data.Category_Name,
                "Status": data.Status,
                "Description": data.Description
            }
        };
        this.router.navigate(["/admin/editTemplate"], navigationExtras);
    };
    return ManageTemplatesComponent;
}());
ManageTemplatesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-manage-templates',
        template: __webpack_require__("../../../../../src/app/admin/manage-templates/manage-templates.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], ManageTemplatesComponent);

var _a, _b;
//# sourceMappingURL=manage-templates.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/manage-users/manage-company/manage-company.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"admin-dashbord\">\n<div class=\"container-fluid\">\n    <app-sidemenu></app-sidemenu>\n        <div class=\"col-sm-9 right-side\">\n        <div class=\"graph-tab customer-das manage-dash-temp\">\n            <div class=\"row mnage-user-forms\">\n                <div class=\"col-sm-9\">\n                <h3>Manage Company</h3>\n                </div>\n                <div class=\"col-sm-3\">\n                    <button class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#myModal1\" style=\"width:150px;\" (click)=\"formreset(hervvvvvoForm)\">Create</button>\n            </div>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table table-bordered\">\n                <thead>\n                        <tr class=\"active\">\n                            <th>User Name</th>\n                            <th>Phone Number</th>\n                            <th>Email</th>\n                            <th>Service Category</th>\n                            <th>Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr class=\"bg-wht\"  *ngFor=\"let u of Company\">\n                            <td>{{u.first_name}}</td>\n                            <td>{{u.Phone}}</td>\n                            <td>{{u.Email}}</td>\n                            <td>{{u.User_Type}}</td>\n                            <td><i class=\"fa fa-pencil\" aria-hidden=\"true\" style=\"margin-right:10px;\" data-toggle=\"modal\" data-target=\"#myModal3\" (click)=\"changeModal(u)\"></i><i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"ConfirmDelete(u.idUsers)\"></i></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        </div>\n    </div>\n        <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n</section>\n<app-footer></app-footer>\n<!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////\n///////////////////////////////////////////////////////////////////////////////////////////////////////////\n////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->\n\n<div class=\"modal fade\" id=\"myModal3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n<div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Edit Company</h4>\n    </div>\n    <div class=\"modal-body\">\n            <form (ngSubmit)=\"EditComapny()\" #cdccheroForm=\"ngForm\">  \n                    <div class=\"form-group\">\n                    <label  for=\"Email\">Email</label>\n                    <input type=\"text\" class=\"form-control\" id=\"Email\"\n                    required\n                    [(ngModel)]=\"model.Email\" name=\"Email\"\n                    #Email=\"ngModel\">\n                    <div [hidden]=\"Email.valid || Email.pristine\"\n                        class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                        <div [hidden]=\"!Email.hasError('required')\">Email is required</div>\n                    </div>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                    <label  for=\"Phone\">Phone</label>\n                    <input type=\"text\" class=\"form-control\" id=\"Phone\"\n                    required\n                    [(ngModel)]=\"model.Phone\" name=\"Phone\"\n                    #Phone=\"ngModel\">\n                    <div [hidden]=\"Phone.valid || Phone.pristine\"\n                        class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                        <div [hidden]=\"!Phone.hasError('required')\">Phone is required</div>\n                    </div>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                    <label  for=\"first_name\">first_name</label>\n                    <input type=\"text\" class=\"form-control\" id=\"first_name\"\n                    required\n                    [(ngModel)]=\"model.first_name\" name=\"first_name\"\n                    #first_name=\"ngModel\">\n                    <div [hidden]=\"first_name.valid || first_name.pristine\"\n                        class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                        <div [hidden]=\"!first_name.hasError('required')\">first_name is required</div>\n                    </div>\n                    </div>\n\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!cdccheroForm.form.valid\">Submit</button>\n                </form>\n    </div>\n    </div>\n</div>\n</div>\n\n\n<div class=\"modal fade\" id=\"myModal1\" >\n<div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"Close()\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" >Add Company</h4>\n    </div>\n    <div class=\"modal-body\">\n            <form (ngSubmit)=\"AddCompany()\" #hervvvvvoForm=\"ngForm\">  \n\n                <div class=\"form-group\">\n                <label for=\"firstname\">Company Name<span style=\"color:red\">*</span></label>\n                <input type=\"text\" class=\"form-control\" id=\"firstname\"\n                required\n                maxlength=\"20\" \n                [(ngModel)]=\"model.firstname\" name=\"firstname\"\n                #firstname=\"ngModel\">\n                <div [hidden]=\"firstname.valid || firstname.pristine\"\n                    class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                    <div [hidden]=\"!firstname.hasError('required')\">Company name is required</div>\n                </div>\n                </div>\n\n\n                <div class=\"form-group\">\n                <label for=\"email\">Email<span style=\"color:red\">*</span></label>\n                <input type=\"text\" class=\"form-control\" id=\"email\"\n                required\n                maxlength=\"50\" \n                pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" \n                [(ngModel)]=\"model.email\" name=\"email\"\n                #email=\"ngModel\">\n                <div [hidden]=\"email.valid || email.pristine\"\n                    class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                    <div class=\"ddddddd\" [hidden]=\"!email.hasError('required')\">Email is required</div>\n                    <div [hidden]=\"!email.hasError('pattern')\">Enter a Valid Email Pattern</div>\n                </div>\n                </div>\n\n\n                <div class=\"form-group\">\n                <label for=\"password\">Password<span style=\"color:red\">*</span></label>\n                <input type=\"password\" class=\"form-control\" id=\"password\"\n                required\n                maxlength=\"50\" \n                [(ngModel)]=\"model.password\" name=\"password\"\n                #password=\"ngModel\">\n                <div [hidden]=\"password.valid || password.pristine\"\n                    class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                    <div [hidden]=\"!password.hasError('required')\">Password is required</div>\n                </div>\n                </div>\n\n\n                <div class=\"form-group\">\n                <label for=\"phone\">Phone<span style=\"color:red\">*</span></label>\n                <input type=\"text\" class=\"form-control\" id=\"phone\"\n                required\n                pattern=\"[0-9]*\"\n                minlength=\"10\"\n                maxlength=\"10\" \n                [(ngModel)]=\"model.phone\" name=\"phone\"\n                #phone=\"ngModel\">\n                <div [hidden]=\"phone.valid || phone.pristine\"\n                    class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                    <div class=\"ddddddd\" [hidden]=\"!phone.hasError('required')\">Phone is required</div>\n                    <div class=\"ddddddd\" [hidden]=\"!phone.hasError('pattern')\">Only Numbers Are Allowed</div>\n                    <div class=\"ddddddd\" [hidden]=\"!phone.hasError('minlength')\">Enter Atleast 10 Numbers</div>\n                </div>\n                </div>\n\n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!hervvvvvoForm.form.valid\">Submit</button>\n            </form>\n    </div>\n    </div>\n</div>\n</div>\n\n<div class=\"modal fade\" id=\"message\" role=\"dialog\">\n<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Message</h4>\n    </div>\n    <div class=\"modal-body\">\n        <h4>Message! {{message}}</h4>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n    </div>\n    </div>\n</div>\n</div>\n    <div class=\"modal fade\" id=\"cnfrmDelete\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <h4 class=\"modal-title\">Message</h4>\n            </div>\n            <div class=\"modal-body\">\n                <h4>Do you Want To Delete</h4>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"submit\" class=\"btn btn-success\" (click)=\"DeleteCompany()\">Delete</button>\n                <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n            </div>\n          </div>\n        </div>\n      </div>"

/***/ }),

/***/ "../../../../../src/app/admin/manage-users/manage-company/manage-company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__("../../../../../../config/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config_config__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageCompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageCompanyComponent = (function () {
    function ManageCompanyComponent(http, router) {
        this.http = http;
        this.router = router;
        this.model = {};
    }
    ManageCompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.User_data = JSON.parse(localStorage.getItem('User'));
        if (this.User_data) {
            var obj = {
                id: this.User_data.idUsers
            };
            this.http.post('//' + __WEBPACK_IMPORTED_MODULE_3__config_config__["global_ip"] + '/auth/company', obj).subscribe(function (res) {
                _this.Company = JSON.parse(res._body).res;
            }, function (err) {
                _this.message = 'Data Not Found';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            });
        }
        else {
            console.log('ll');
        }
    };
    ManageCompanyComponent.prototype.changeModal = function (e) {
        this.model = e;
    };
    ManageCompanyComponent.prototype.AddCompany = function () {
        var _this = this;
        var self = this;
        $('#myModal1').modal('toggle');
        this.model.type = 'Company';
        this.http.post('//' + __WEBPACK_IMPORTED_MODULE_3__config_config__["global_ip"] + '/auth/signup', this.model).subscribe(function (res) {
            _this.model = {};
            var result = JSON.parse(res._body);
            if (result.status == 200) {
                _this.message = 'Registration Sucessfull';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                    self.ngOnInit();
                }, 1000);
            }
            else {
                _this.message = 'Registration UnSucessfull';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            }
        }, function (err) {
            _this.message = 'Registration UnSucessfull';
            $('#message').modal('toggle');
            setTimeout(function () {
                $('#message').modal('toggle');
            }, 1000);
        });
    };
    ManageCompanyComponent.prototype.EditComapny = function () {
        var _this = this;
        $('#myModal3').modal('toggle');
        var self = this;
        this.http.post('//' + __WEBPACK_IMPORTED_MODULE_3__config_config__["global_ip"] + '/auth/update', this.model).subscribe(function (res) {
            _this.model = {};
            var result = JSON.parse(res._body);
            if (result.status == 200) {
                _this.message = 'User Updated';
                $('#message').modal('toggle');
                setTimeout(function () {
                    self.ngOnInit();
                }, 2000);
            }
            else {
                _this.message = 'Table Not Found';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            }
        }, function (err) {
            _this.message = 'Table Not Found';
            $('#message').modal('toggle');
            setTimeout(function () {
                $('#message').modal('toggle');
            }, 1000);
        });
    };
    ManageCompanyComponent.prototype.ConfirmDelete = function (id) {
        $('#cnfrmDelete').modal('toggle');
        this.cnfrmDeleteID = id;
    };
    ManageCompanyComponent.prototype.DeleteCompany = function () {
        var _this = this;
        var self = this;
        $('#cnfrmDelete').modal('toggle');
        var obj = {
            id: this.cnfrmDeleteID
        };
        this.http.post('//' + __WEBPACK_IMPORTED_MODULE_3__config_config__["global_ip"] + '/auth/delete', obj).subscribe(function (res) {
            var result = JSON.parse(res._body);
            if (result.status == 200) {
                _this.message = 'User Deleted';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                    self.ngOnInit();
                }, 2000);
            }
            else {
                _this.message = 'Table Not Found';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            }
        }, function (err) {
            _this.message = 'Table Not Found';
            $('#message').modal('toggle');
            setTimeout(function () {
                $('#message').modal('toggle');
            }, 1000);
        });
    };
    ManageCompanyComponent.prototype.formreset = function (f) {
        f.resetForm();
    };
    return ManageCompanyComponent;
}());
ManageCompanyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-manage-company',
        template: __webpack_require__("../../../../../src/app/admin/manage-users/manage-company/manage-company.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ManageCompanyComponent);

var _a, _b;
//# sourceMappingURL=manage-company.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/manage-users/manage-customer/manage-customer.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"admin-dashbord\">\n<div class=\"container-fluid\">\n    <app-sidemenu></app-sidemenu>\n        <div class=\"col-sm-9 right-side\">\n        <div class=\"graph-tab customer-das manage-dash-temp\">\n            <div class=\"row mnage-user-forms\">\n                <div class=\"col-sm-9\">\n                <h3>Manage Customer</h3>\n                </div>\n                <div class=\"col-sm-3\">\n                    <button class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#myModal1\" style=\"width:150px;\" (click)=\"formreset(hervvvvvoForm)\">Create</button>\n            </div>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table table-bordered\">\n                <thead>\n                        <tr class=\"active\">\n                            <th>User Name</th>\n                            <th>Phone Number</th>\n                            <th>Email</th>\n                            <th>Service Category</th>\n                            <th>Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                    <tr class=\"bg-wht\"  *ngFor=\"let u of Customer\">\n                        <td>{{u.first_name}}</td>\n                            <td>{{u.Phone}}</td>\n                            <td>{{u.Email}}</td>\n                            <td>{{u.User_Type}}</td>\n                            <td><i class=\"fa fa-pencil\" aria-hidden=\"true\" style=\"margin-right:10px;\" data-toggle=\"modal\" data-target=\"#myModal3\" (click)=\"changeModal(u)\"></i><i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"ConfirmDelete(u.idUsers)\"></i></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        </div>\n    </div>\n        <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n</section>\n<app-footer></app-footer>\n<!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////\n///////////////////////////////////////////////////////////////////////////////////////////////////////////\n////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->\n\n<div class=\"modal fade\" id=\"myModal3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                <h4 class=\"modal-title\" id=\"myModalLabel\">Edit Customer</h4>\n            </div>\n            <div class=\"modal-body\">\n                    <form (ngSubmit)=\"EditCustomer()\" #cdccheroForm=\"ngForm\">  \n                            <div class=\"form-group\">\n                            <label  for=\"Email\">Email</label>\n                            <input type=\"text\" class=\"form-control\" id=\"Email\"\n                            required\n                            [(ngModel)]=\"model.Email\" name=\"Email\"\n                            #Email=\"ngModel\">\n                            <div [hidden]=\"Email.valid || Email.pristine\"\n                                class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                                <div [hidden]=\"!Email.hasError('required')\">Email is required</div>\n                            </div>\n                            </div>\n        \n        \n                            <div class=\"form-group\">\n                            <label  for=\"Phone\">Phone</label>\n                            <input type=\"text\" class=\"form-control\" id=\"Phone\"\n                            required\n                            [(ngModel)]=\"model.Phone\" name=\"Phone\"\n                            #Phone=\"ngModel\">\n                            <div [hidden]=\"Phone.valid || Phone.pristine\"\n                                class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                                <div [hidden]=\"!Phone.hasError('required')\">Phone is required</div>\n                            </div>\n                            </div>\n        \n        \n                            <div class=\"form-group\">\n                            <label  for=\"first_name\">first_name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"first_name\"\n                            required\n                            [(ngModel)]=\"model.first_name\" name=\"first_name\"\n                            #first_name=\"ngModel\">\n                            <div [hidden]=\"first_name.valid || first_name.pristine\"\n                                class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                                <div [hidden]=\"!first_name.hasError('required')\">first_name is required</div>\n                            </div>\n                            </div>\n        \n                            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!cdccheroForm.form.valid\">Submit</button>\n                        </form>\n            </div>\n            </div>\n        </div>\n        </div>\n\n<div class=\"modal fade\" id=\"myModal1\" >\n<div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"Close()\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" >Add Customer</h4>\n    </div>\n    <div class=\"modal-body\">\n            <form (ngSubmit)=\"AddCustomer()\" #hervvvvvoForm=\"ngForm\">  \n\n                    <div class=\"form-group\">\n                    <label  for=\"firstname\">First Name<span style=\"color:red\">*</span></label>\n                    <input type=\"text\" class=\"form-control\" id=\"firstname\"\n                    required\n                    maxlength=\"20\" \n                    [(ngModel)]=\"model.firstname\" name=\"firstname\"\n                    #firstname=\"ngModel\">\n                    <div [hidden]=\"firstname.valid || firstname.pristine\"\n                        class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                        <div [hidden]=\"!firstname.hasError('required')\">FirstName is required</div>\n                    </div>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                    <label for=\"lastname\">Last Name<span style=\"color:red\">*</span></label>\n                    <input type=\"text\" class=\"form-control\" id=\"lastname\"\n                    required\n                    maxlength=\"20\" \n                    [(ngModel)]=\"model.lastname\" name=\"lastname\"\n                    #lastname=\"ngModel\">\n                    <div [hidden]=\"lastname.valid || lastname.pristine\"\n                        class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                        <div [hidden]=\"!lastname.hasError('required')\">LastName is required</div>\n                    </div>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                    <label for=\"email\">Email<span style=\"color:red\">*</span></label>\n                    <input type=\"text\" class=\"form-control\" id=\"email\"\n                    required\n                    maxlength=\"50\" \n                    pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" \n                    [(ngModel)]=\"model.email\" name=\"email\"\n                    #email=\"ngModel\">\n                    <div [hidden]=\"email.valid || email.pristine\"\n                        class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                        <div class=\"ddddddd\" [hidden]=\"!email.hasError('required')\">Email is required</div>\n                        <div [hidden]=\"!email.hasError('pattern')\">Enter a Valid Email Pattern</div>\n                    </div>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                    <label for=\"password\">Password<span style=\"color:red\">*</span></label>\n                    <input type=\"password\" class=\"form-control\" id=\"password\"\n                    required\n                    maxlength=\"50\" \n                    [(ngModel)]=\"model.password\" name=\"password\"\n                    #password=\"ngModel\">\n                    <div [hidden]=\"password.valid || password.pristine\"\n                        class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                        <div [hidden]=\"!password.hasError('required')\">Password is required</div>\n                    </div>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                    <label for=\"phone\">Phone<span style=\"color:red\">*</span></label>\n                    <input type=\"text\" class=\"form-control\" id=\"phone\"\n                    required\n                    pattern=\"[0-9]*\"\n                    minlength=\"10\"\n                    maxlength=\"10\" \n                    [(ngModel)]=\"model.phone\" name=\"phone\"\n                    #phone=\"ngModel\">\n                    <div [hidden]=\"phone.valid || phone.pristine\"\n                        class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                        <div class=\"ddddddd\" [hidden]=\"!phone.hasError('required')\">Phone is required</div>\n                        <div class=\"ddddddd\" [hidden]=\"!phone.hasError('pattern')\">Only Numbers Are Allowed</div>\n                        <div [hidden]=\"!phone.hasError('minlength')\">Enter Atleast 10 Numbers</div>\n                    </div>\n                    </div>\n\n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!hervvvvvoForm.form.valid\">Submit</button>\n            </form>\n    </div>\n    </div>\n</div>\n</div>\n\n<div class=\"modal fade\" id=\"message\" role=\"dialog\">\n<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Message</h4>\n    </div>\n    <div class=\"modal-body\">\n        <h4>Message! {{message}}</h4>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n    </div>\n    </div>\n</div>\n</div>\n<div class=\"modal fade\" id=\"cnfrmDelete\" role=\"dialog\">\n<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Message</h4>\n    </div>\n    <div class=\"modal-body\">\n        <h4>Do you Want To Delete</h4>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"DeleteCustomer()\">Delete</button>\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n    </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/manage-users/manage-customer/manage-customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__("../../../../../../config/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config_config__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageCustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageCustomerComponent = (function () {
    function ManageCustomerComponent(http, router) {
        this.http = http;
        this.router = router;
        this.model = {};
    }
    ManageCustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.User_data = JSON.parse(localStorage.getItem('User'));
        if (this.User_data) {
            var obj = {
                id: this.User_data.idUsers
            };
            this.http.post('//' + __WEBPACK_IMPORTED_MODULE_3__config_config__["global_ip"] + '/auth/customer', obj).subscribe(function (res) {
                _this.Customer = JSON.parse(res._body).res;
            }, function (err) {
                _this.message = 'Data Not Found';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            });
        }
        else {
            console.log('ll');
        }
    };
    ManageCustomerComponent.prototype.changeModal = function (e) {
        this.model = e;
    };
    ManageCustomerComponent.prototype.AddCustomer = function () {
        var _this = this;
        var self = this;
        $('#myModal1').modal('toggle');
        this.model.type = 'Customer';
        this.http.post('//' + __WEBPACK_IMPORTED_MODULE_3__config_config__["global_ip"] + '/auth/signup', this.model).subscribe(function (res) {
            _this.model = {};
            var result = JSON.parse(res._body);
            if (result.status == 200) {
                _this.message = 'Registration Sucessfull';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                    self.ngOnInit();
                }, 1000);
            }
            else {
                _this.message = 'Registration UnSucessfull';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            }
        }, function (err) {
            _this.message = 'Registration UnSucessfull';
            $('#message').modal('toggle');
            setTimeout(function () {
                $('#message').modal('toggle');
            }, 1000);
        });
    };
    ManageCustomerComponent.prototype.EditCustomer = function () {
        var _this = this;
        var self = this;
        $('#myModal3').modal('toggle');
        this.http.post('//' + __WEBPACK_IMPORTED_MODULE_3__config_config__["global_ip"] + '/auth/update', this.model).subscribe(function (res) {
            _this.model = {};
            var result = JSON.parse(res._body);
            if (result.status == 200) {
                _this.message = 'User Updated';
                $('#message').modal('toggle');
                setTimeout(function () {
                    self.ngOnInit();
                }, 1000);
            }
            else {
                _this.message = 'Table Not Found';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            }
        }, function (err) {
            _this.message = 'Table Not Found';
            $('#message').modal('toggle');
            setTimeout(function () {
                $('#message').modal('toggle');
            }, 1000);
        });
    };
    ManageCustomerComponent.prototype.ConfirmDelete = function (id) {
        $('#cnfrmDelete').modal('toggle');
        this.cnfrmDeleteID = id;
    };
    ManageCustomerComponent.prototype.DeleteCustomer = function () {
        var _this = this;
        var self = this;
        var obj = {
            id: this.cnfrmDeleteID
        };
        this.http.post('//' + __WEBPACK_IMPORTED_MODULE_3__config_config__["global_ip"] + '/auth/delete', obj).subscribe(function (res) {
            var result = JSON.parse(res._body);
            if (result.status == 200) {
                _this.message = 'User Updated';
                $('#message').modal('toggle');
                setTimeout(function () {
                    self.ngOnInit();
                }, 2000);
            }
            else {
                _this.message = 'Table Not Found';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            }
        }, function (err) {
            _this.message = 'Table Not Found';
            $('#message').modal('toggle');
            setTimeout(function () {
                $('#message').modal('toggle');
            }, 1000);
        });
    };
    ManageCustomerComponent.prototype.formreset = function (f) {
        f.resetForm();
    };
    return ManageCustomerComponent;
}());
ManageCustomerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-manage-customer',
        template: __webpack_require__("../../../../../src/app/admin/manage-users/manage-customer/manage-customer.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ManageCustomerComponent);

var _a, _b;
//# sourceMappingURL=manage-customer.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/manage-users/manage-serviceprovider/manage-serviceprovider.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"admin-dashbord\">\n<div class=\"container-fluid\">\n    <app-sidemenu></app-sidemenu>\n        <div class=\"col-sm-9 right-side\">\n        <div class=\"graph-tab customer-das manage-dash-temp\">\n            <div class=\"row mnage-user-forms\">\n                <div class=\"col-sm-9\">\n                <h3>Manage Service Provider</h3>\n                </div>\n                <div class=\"col-sm-3\">\n                    <button class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#myModal1\" style=\"width:150px;\" (click)=\"formreset(hervvvbbvvoForm)\">Create</button>\n            </div>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table table-bordered\">\n                <thead>\n                        <tr class=\"active\">\n                            <th>User Name</th>\n                            <th>Phone Number</th>\n                            <th>Email</th>\n                            <th>Service Category</th>\n                            <th>Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr class=\"bg-wht\"  *ngFor=\"let u of ServiceProvider\">\n                            <td>{{u.first_name}}</td>\n                            <td>{{u.Phone}}</td>\n                            <td>{{u.Email}}</td>\n                            <td>{{u.User_Type}}</td>\n                            <td><i class=\"fa fa-pencil\" aria-hidden=\"true\" style=\"margin-right:10px;\" data-toggle=\"modal\" data-target=\"#myModal3\" (click)=\"changeModal(u)\"></i><i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"ConfrmDelete(u.idUsers)\"></i></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        </div>\n    </div>\n        <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n</section>\n<app-footer></app-footer>\n<!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////\n///////////////////////////////////////////////////////////////////////////////////////////////////////////\n////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->\n\n<div class=\"modal fade\" id=\"myModal3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n<div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Edit Service Provider</h4>\n    </div>\n    <div class=\"modal-body\">\n            <form (ngSubmit)=\"EditServiceProvider()\" #heroForm=\"ngForm\">  \n                    <div class=\"form-group\">\n                    <label  for=\"Email\">Email</label>\n                    <input type=\"text\" class=\"form-control\" id=\"Email\"\n                    required\n                    [(ngModel)]=\"model.Email\" name=\"Email\"\n                    #Email=\"ngModel\">\n                    <div [hidden]=\"Email.valid || Email.pristine\"\n                        class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                        <div [hidden]=\"!Email.hasError('required')\">Email is required</div>\n                    </div>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                    <label  for=\"Phone\">Phone</label>\n                    <input type=\"text\" class=\"form-control\" id=\"Phone\"\n                    required\n                    [(ngModel)]=\"model.Phone\" name=\"Phone\"\n                    #Phone=\"ngModel\">\n                    <div [hidden]=\"Phone.valid || Phone.pristine\"\n                        class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                        <div [hidden]=\"!Phone.hasError('required')\">Phone is required</div>\n                    </div>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                    <label  for=\"first_name\">first_name</label>\n                    <input type=\"text\" class=\"form-control\" id=\"first_name\"\n                    required\n                    [(ngModel)]=\"model.first_name\" name=\"first_name\"\n                    #first_name=\"ngModel\">\n                    <div [hidden]=\"first_name.valid || first_name.pristine\"\n                        class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                        <div [hidden]=\"!first_name.hasError('required')\">first_name is required</div>\n                    </div>\n                    </div>\n\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!heroForm.form.valid\">Submit</button>\n                </form>\n    </div>\n    </div>\n</div>\n</div>\n\n<div class=\"modal fade\" id=\"myModal1\" >\n<div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"Close()\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" >Add Service Provider</h4>\n    </div>\n    <div class=\"modal-body\">\n            <form (ngSubmit)=\"AddServiceProvider()\" #hervvvbbvvoForm=\"ngForm\">  \n\n                    <div class=\"form-group\">\n                    <label  for=\"firstname\">First Name<span style=\"color:red\">*</span></label>\n                    <input type=\"text\" class=\"form-control\" id=\"firstname\"\n                    required\n                    maxlength=\"20\" \n                    [(ngModel)]=\"model.firstname\" name=\"firstname\"\n                    #firstname=\"ngModel\">\n                    <div [hidden]=\"firstname.valid || firstname.pristine\"\n                        class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                        <div [hidden]=\"!firstname.hasError('required')\">FirstName is required</div>\n                    </div>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                    <label for=\"lastname\">Last Name<span style=\"color:red\">*</span></label>\n                    <input type=\"text\" class=\"form-control\" id=\"lastname\"\n                    required\n                    maxlength=\"20\" \n                    [(ngModel)]=\"model.lastname\" name=\"lastname\"\n                    #lastname=\"ngModel\">\n                    <div [hidden]=\"lastname.valid || lastname.pristine\"\n                        class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                        <div [hidden]=\"!lastname.hasError('required')\">LastName is required</div>\n                    </div>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                    <label for=\"email\">Email<span style=\"color:red\">*</span></label>\n                    <input type=\"text\" class=\"form-control\" id=\"email\"\n                    required\n                    maxlength=\"50\" \n                    pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" \n                    [(ngModel)]=\"model.email\" name=\"email\"\n                    #email=\"ngModel\">\n                    <div [hidden]=\"email.valid || email.pristine\"\n                        class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                        <div class=\"ddddddd\" [hidden]=\"!email.hasError('required')\">Email is required</div>\n                        <div [hidden]=\"!email.hasError('pattern')\">Enter a Valid Email Pattern</div>\n                    </div>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                    <label for=\"password\">Password<span style=\"color:red\">*</span></label>\n                    <input type=\"password\" class=\"form-control\" id=\"password\"\n                    required\n                    maxlength=\"50\" \n                    [(ngModel)]=\"model.password\" name=\"password\"\n                    #password=\"ngModel\">\n                    <div [hidden]=\"password.valid || password.pristine\"\n                        class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                        <div [hidden]=\"!password.hasError('required')\">Password is required</div>\n                    </div>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                    <label for=\"phone\">Phone<span style=\"color:red\">*</span></label>\n                    <input type=\"text\" class=\"form-control\" id=\"phone\"\n                    required\n                    pattern=\"[0-9]*\"\n                    minlength=\"10\"\n                    maxlength=\"10\" \n                    [(ngModel)]=\"model.phone\" name=\"phone\"\n                    #phone=\"ngModel\">\n                    <div [hidden]=\"phone.valid || phone.pristine\"\n                        class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                        <div class=\"ddddddd\" [hidden]=\"!phone.hasError('required')\">Phone is required</div>\n                        <div class=\"ddddddd\" [hidden]=\"!phone.hasError('pattern')\">Only Numbers Are Allowed</div>\n                        <div [hidden]=\"!phone.hasError('minlength')\">Enter Atleast 10 Numbers</div>\n                    </div>\n                    </div>\n\n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!hervvvbbvvoForm.form.valid\">Submit</button>\n            </form>\n    </div>\n    </div>\n</div>\n</div>\n\n<div class=\"modal fade\" id=\"message\" role=\"dialog\">\n<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Message</h4>\n    </div>\n    <div class=\"modal-body\">\n        <h4>Message! {{message}}</h4>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n    </div>\n    </div>\n</div>\n</div>\n<div class=\"modal fade\" id=\"cnfrmDelete\" role=\"dialog\">\n<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Message</h4>\n    </div>\n    <div class=\"modal-body\">\n        <h4>Do you Want To Delete</h4>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"DeleteServiceProvider()\">Delete</button>\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n    </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/manage-users/manage-serviceprovider/manage-serviceprovider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__("../../../../../../config/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config_config__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageServiceproviderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageServiceproviderComponent = (function () {
    function ManageServiceproviderComponent(http, router) {
        this.http = http;
        this.router = router;
        this.model = {};
    }
    ManageServiceproviderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.User_data = JSON.parse(localStorage.getItem('User'));
        if (this.User_data) {
            var obj = {
                id: this.User_data.idUsers
            };
            this.http.post('//' + __WEBPACK_IMPORTED_MODULE_3__config_config__["global_ip"] + '/auth/serviceProvider', obj).subscribe(function (res) {
                _this.ServiceProvider = JSON.parse(res._body).res;
            }, function (err) {
                _this.message = 'Data Not Found';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            });
        }
        else {
            console.log('ll');
        }
    };
    ManageServiceproviderComponent.prototype.changeModal = function (e) {
        this.model = e;
    };
    ManageServiceproviderComponent.prototype.AddServiceProvider = function () {
        var _this = this;
        var self = this;
        $('#myModal1').modal('toggle');
        this.model.type = 'Service Provider';
        this.http.post('//' + __WEBPACK_IMPORTED_MODULE_3__config_config__["global_ip"] + '/auth/signup', this.model).subscribe(function (res) {
            _this.model = {};
            var result = JSON.parse(res._body);
            if (result.status == 200) {
                _this.message = 'Registration Sucessfull';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                    self.ngOnInit();
                }, 1000);
            }
            else {
                _this.message = 'Registration UnSucessfull';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            }
        }, function (err) {
            _this.message = 'Registration UnSucessfull';
            $('#message').modal('toggle');
            setTimeout(function () {
                $('#message').modal('toggle');
            }, 1000);
        });
    };
    ManageServiceproviderComponent.prototype.EditServiceProvider = function () {
        var _this = this;
        var self = this;
        $('#myModal3').modal('toggle');
        this.http.post('//' + __WEBPACK_IMPORTED_MODULE_3__config_config__["global_ip"] + '/auth/update', this.model).subscribe(function (res) {
            _this.model = {};
            var result = JSON.parse(res._body);
            if (result.status == 200) {
                _this.message = 'User Updated';
                $('#message').modal('toggle');
                setTimeout(function () {
                    self.ngOnInit();
                }, 1000);
            }
            else {
                _this.message = 'Table Not Found';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            }
        }, function (err) {
            _this.message = 'Table Not Found';
            $('#message').modal('toggle');
            setTimeout(function () {
                $('#message').modal('toggle');
            }, 1000);
        });
    };
    ManageServiceproviderComponent.prototype.ConfrmDelete = function (id) {
        $('#cnfrmDelete').modal('toggle');
        this.cnfrmDeleteID = id;
    };
    ManageServiceproviderComponent.prototype.DeleteServiceProvider = function (id) {
        var _this = this;
        var self = this;
        $('#cnfrmDelete').modal('toggle');
        var obj = {
            id: id
        };
        this.http.post('//' + __WEBPACK_IMPORTED_MODULE_3__config_config__["global_ip"] + '/auth/delete', obj).subscribe(function (res) {
            var result = JSON.parse(res._body);
            if (result.status == 200) {
                _this.message = 'User Updated';
                $('#message').modal('toggle');
                setTimeout(function () {
                    self.ngOnInit();
                }, 1000);
            }
            else {
                _this.message = 'Table Not Found';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            }
        }, function (err) {
            _this.message = 'Table Not Found';
            $('#message').modal('toggle');
            setTimeout(function () {
                $('#message').modal('toggle');
            }, 1000);
        });
    };
    ManageServiceproviderComponent.prototype.formreset = function (f) {
        f.resetForm();
    };
    return ManageServiceproviderComponent;
}());
ManageServiceproviderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-manage-serviceprovider',
        template: __webpack_require__("../../../../../src/app/admin/manage-users/manage-serviceprovider/manage-serviceprovider.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ManageServiceproviderComponent);

var _a, _b;
//# sourceMappingURL=manage-serviceprovider.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"admin-dashbord\">\n\t<div class=\"container-fluid\">\n            <app-sidemenu></app-sidemenu>\n        \n        <div class=\"col-sm-9 right-side\">\n        \t<h3> Manage Reports</h3>\n        </div>\n    </div>\n        <a href=\"#\" class=\"footer-logo\"><img src=\"images/footer-logo.png\" alt=\"logo-footer\"/></a>\n</section>\n\n<!--======================Footer start here=========================-->\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/admin/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportsComponent = (function () {
    function ReportsComponent(router) {
        this.router = router;
    }
    ReportsComponent.prototype.ngOnInit = function () {
        this.User_data = JSON.parse(localStorage.getItem('User'));
    };
    return ReportsComponent;
}());
ReportsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-reports',
        template: __webpack_require__("../../../../../src/app/admin/reports/reports.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], ReportsComponent);

var _a;
//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/view-contract/detail/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"admin-dashbord\">\n  <div class=\"container-fluid\">\n      <app-company-sidemenu></app-company-sidemenu>\n          <div class=\"col-sm-9 right-side\">\n          <div class=\"graph-tab customer-das manage-dash-temp\">\n              <div class=\"row mnage-user-forms\">\n                  <div class=\"col-sm-9\">\n                      <h3>Contract Detail</h3>\n                  </div>\n                  <div class=\"col-sm-3\">\n                      <!-- <button class=\"btn btn-default\" routerLink=\"/Template\" style=\"width:150px;\">Create</button> -->\n              </div>\n              </div>\n              <div class=\"table-responsive\">\n                  <table class=\"table table-bordered\">\n                      <thead>\n                          <tr class=\"active\">\n                              <th>Milestone</th>\n                              <th>Start Date</th>\n                              <th>End Date</th>\n                              <th>Milestone Fees</th>\n                              <th>Payment Status</th>\n                              <th>Task Status</th>\n                              <th>Action</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let u of ContractDetails\">\n                            <td>Milestone{{u.idMilestone}}</td>\n                            <td>{{u.Start_Date | dateFilter}}</td>\n                            <td>{{u.End_Date | dateFilter}}</td>\n                            <td>{{u.Milestone_fee}}</td>\n                            <td>{{u.Payment_Status}}</td>\n                            <td>{{u.Task_Status}}</td>\n                            <td>\n                              <li class=\"btn btn-success\" aria-hidden=\"true\" (click)=\"MarkMilestoneComplete(Contract_ID)\">Complete</li>\n                              <li class=\"btn btn-success\" aria-hidden=\"true\" (click)=\"CancelMilestone(Contract_ID)\">Cancel</li>\n                            </td>\n                        </tr>\n                      </tbody>\n                  </table>\n              </div>\n          </div>\n          </div>\n      </div>\n          <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n  </section>\n<app-footer></app-footer>\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/admin/view-contract/detail/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__("../../../../../../config/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__config_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailComponent = (function () {
    function DetailComponent(route, router, http) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.route.queryParams.subscribe(function (params) {
            _this.ContractID = params["contractID"];
        });
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.post('//' + __WEBPACK_IMPORTED_MODULE_2__config_config__["global_ip"] + '/pdf/Milestones', { id: this.ContractID }).subscribe(function (res) {
            _this.ContractDetails = JSON.parse(res._body).res;
            console.log(_this.ContractDetails);
        }, function (err) {
            console.log(err);
        });
    };
    DetailComponent.prototype.MarkMilestoneComplete = function (id) {
    };
    DetailComponent.prototype.CancelMilestone = function (ig) {
    };
    return DetailComponent;
}());
DetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-detail',
        template: __webpack_require__("../../../../../src/app/admin/view-contract/detail/detail.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object])
], DetailComponent);

var _a, _b, _c;
//# sourceMappingURL=detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/view-contract/view-contract.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"admin-dashbord\">\n  <div class=\"container-fluid\">\n      <app-company-sidemenu></app-company-sidemenu>\n          <div class=\"col-sm-9 right-side\">\n          <div class=\"graph-tab customer-das manage-dash-temp\">\n              <div class=\"row mnage-user-forms\">\n                  <div class=\"col-sm-9\">\n                      <h3>Manage Contract List</h3>\n                  </div>\n                  <div class=\"col-sm-3\">\n                      <button class=\"btn btn-default\" routerLink=\"/Template\" style=\"width:150px;\">Create</button>\n              </div>\n              </div>\n              <div class=\"table-responsive\">\n                  <table class=\"table table-bordered\">\n                      <thead>\n                          <tr class=\"active\">\n                              <th>Contract Name</th>\n                              <th>Customer Name</th>\n                              <th>Start Date</th>\n                              <th>Price (in Ether)</th>\n                              <th>Action</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let u of Contracts\">\n                            <td>{{u.Contract_Name}}</td>\n                            <td>{{u.Customer_Name}}</td>\n                            <td>{{u.Contract_StartDate | dateFilter}}</td>\n                            <td>{{u.Contract_Price}}</td>\n                            <td>\n                              <i class=\"fa fa-eye\" aria-hidden=\"true\" style=\"margin-right:10px;\" (click)=\"ContractDetail(u.ContractPDF_ID)\"></i>\n                              <i class=\"fa fa-download\" aria-hidden=\"true\" (click)=\"DownloadPDF(u.ContractPDF_ID)\"></i>\n                            </td>\n                        </tr>\n                      </tbody>\n                  </table>\n              </div>\n          </div>\n          </div>\n      </div>\n          <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n  </section>\n<app-footer></app-footer>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/admin/view-contract/view-contract.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__("../../../../../../config/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config_config__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewContractComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewContractComponent = (function () {
    function ViewContractComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    ViewContractComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.User_data = JSON.parse(localStorage.getItem('User'));
        if (this.User_data) {
            var obj = {
                id: this.User_data.idUsers
            };
            this.http.post('//' + __WEBPACK_IMPORTED_MODULE_3__config_config__["global_ip"] + '/pdf/pdfs', obj).subscribe(function (res) {
                _this.Contracts = JSON.parse(res._body).res;
            }, function (err) {
                console.log(err);
            });
        }
        else {
            console.log('ll');
        }
    };
    ViewContractComponent.prototype.ContractDetail = function (id) {
        var navigationExtras = {
            queryParams: {
                "contractID": id
            }
        };
        this.router.navigate(["/contractdetail"], navigationExtras);
    };
    ViewContractComponent.prototype.DownloadPDF = function (name) {
        window.open('//' + __WEBPACK_IMPORTED_MODULE_3__config_config__["global_ip"] + '/pdf/DownloadPDF?pname=' + name + '.pdf');
    };
    return ViewContractComponent;
}());
ViewContractComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-view-contract',
        template: __webpack_require__("../../../../../src/app/admin/view-contract/view-contract.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], ViewContractComponent);

var _a, _b;
//# sourceMappingURL=view-contract.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal__ = __webpack_require__("../../../../../src/app/modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(http, router, toasterService) {
        this.http = http;
        this.router = router;
        this.User = ['Select User', 'Customer', 'Service Provider', 'Company'];
        this.toasterService = toasterService;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__modal__["a" /* Modal */]();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.User_data = JSON.parse(localStorage.getItem('User'));
        if (this.User_data) {
            switch (this.User_data.User_Type) {
                case "Customer":
                    this.dashboard = 'customer';
                    break;
                case "Service Provider":
                    this.dashboard = 'serviceprovider';
                    break;
                case "Company":
                    this.dashboard = 'company';
                    break;
                case "Admin":
                    this.dashboard = 'admin';
                    break;
            }
        }
        else {
            console.log('ll');
        }
    };
    AppComponent.prototype.getEmbark = function () {
        window.open('http://localhost:3000/embark');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_route__ = __webpack_require__("../../../../../src/app/app.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__company_company_component__ = __webpack_require__("../../../../../src/app/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_provider_service_provider_component__ = __webpack_require__("../../../../../src/app/service-provider/service-provider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__customer_customer_component__ = __webpack_require__("../../../../../src/app/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__admin_manage_subscription_manage_subscription_component__ = __webpack_require__("../../../../../src/app/admin/manage-subscription/manage-subscription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__company_generate_contract_generate_contract_component__ = __webpack_require__("../../../../../src/app/company/generate-contract/generate-contract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__authentication_main_component__ = __webpack_require__("../../../../../src/app/authentication/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__blog_blog_component__ = __webpack_require__("../../../../../src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__faq_faq_component__ = __webpack_require__("../../../../../src/app/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__admin_reports_reports_component__ = __webpack_require__("../../../../../src/app/admin/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__admin_manage_templates_manage_templates_component__ = __webpack_require__("../../../../../src/app/admin/manage-templates/manage-templates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admin_view_contract_view_contract_component__ = __webpack_require__("../../../../../src/app/admin/view-contract/view-contract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__contact_us_contact_us_component__ = __webpack_require__("../../../../../src/app/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__privacy_policy_privacy_policy_component__ = __webpack_require__("../../../../../src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__termsand_condition_termsand_condition_component__ = __webpack_require__("../../../../../src/app/termsand-condition/termsand-condition.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__payment_plans_payment_plans_component__ = __webpack_require__("../../../../../src/app/payment-plans/payment-plans.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_services_component__ = __webpack_require__("../../../../../src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__admin_category_category_component__ = __webpack_require__("../../../../../src/app/admin/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__admin_create_template_create_template_component__ = __webpack_require__("../../../../../src/app/admin/create-template/create-template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__admin_create_template_edit_edit_component__ = __webpack_require__("../../../../../src/app/admin/create-template/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__authentication_forgot_forgot_component__ = __webpack_require__("../../../../../src/app/authentication/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__routeGuard__ = __webpack_require__("../../../../../src/app/routeGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__admin_manage_users_manage_customer_manage_customer_component__ = __webpack_require__("../../../../../src/app/admin/manage-users/manage-customer/manage-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__admin_manage_users_manage_serviceprovider_manage_serviceprovider_component__ = __webpack_require__("../../../../../src/app/admin/manage-users/manage-serviceprovider/manage-serviceprovider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__admin_manage_users_manage_company_manage_company_component__ = __webpack_require__("../../../../../src/app/admin/manage-users/manage-company/manage-company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__upgrade_upgrade_component__ = __webpack_require__("../../../../../src/app/upgrade/upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__authentication_changepass_changepass_component__ = __webpack_require__("../../../../../src/app/authentication/changepass/changepass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__company_generate_contract_template_template_component__ = __webpack_require__("../../../../../src/app/company/generate-contract/template/template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__company_generate_contract_preview_preview_component__ = __webpack_require__("../../../../../src/app/company/generate-contract/preview/preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__sidemenu_sidemenu_component__ = __webpack_require__("../../../../../src/app/sidemenu/sidemenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__sidemenu_company_company_component__ = __webpack_require__("../../../../../src/app/sidemenu/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__profile_admin_profile_admin_profile_component__ = __webpack_require__("../../../../../src/app/profile/admin-profile/admin-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__authentication_adminchangepass_adminchangepass_component__ = __webpack_require__("../../../../../src/app/authentication/adminchangepass/adminchangepass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__sidenavigation_service__ = __webpack_require__("../../../../../src/app/sidenavigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__date_filter_pipe__ = __webpack_require__("../../../../../src/app/date-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__admin_view_contract_detail_detail_component__ = __webpack_require__("../../../../../src/app/admin/view-contract/detail/detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_14__authentication_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_9__company_company_component__["a" /* CompanyComponent */],
            __WEBPACK_IMPORTED_MODULE_10__service_provider_service_provider_component__["a" /* ServiceProviderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__customer_customer_component__["a" /* CustomerComponent */],
            __WEBPACK_IMPORTED_MODULE_12__admin_manage_subscription_manage_subscription_component__["a" /* ManageSubscriptionComponent */],
            __WEBPACK_IMPORTED_MODULE_13__company_generate_contract_generate_contract_component__["a" /* GenerateContractComponent */],
            __WEBPACK_IMPORTED_MODULE_15__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_16__blog_blog_component__["a" /* BlogComponent */],
            __WEBPACK_IMPORTED_MODULE_17__faq_faq_component__["a" /* FAQComponent */],
            __WEBPACK_IMPORTED_MODULE_18__admin_reports_reports_component__["a" /* ReportsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__admin_manage_templates_manage_templates_component__["a" /* ManageTemplatesComponent */],
            __WEBPACK_IMPORTED_MODULE_20__admin_view_contract_view_contract_component__["a" /* ViewContractComponent */],
            __WEBPACK_IMPORTED_MODULE_21__contact_us_contact_us_component__["a" /* ContactUsComponent */],
            __WEBPACK_IMPORTED_MODULE_22__privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */],
            __WEBPACK_IMPORTED_MODULE_23__termsand_condition_termsand_condition_component__["a" /* TermsandConditionComponent */],
            __WEBPACK_IMPORTED_MODULE_24__payment_plans_payment_plans_component__["a" /* PaymentPlansComponent */],
            __WEBPACK_IMPORTED_MODULE_25__services_services_component__["a" /* ServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_26__admin_category_category_component__["a" /* CategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_27__admin_create_template_create_template_component__["a" /* CreateTemplateComponent */],
            __WEBPACK_IMPORTED_MODULE_28__admin_create_template_edit_edit_component__["a" /* EditComponent */],
            __WEBPACK_IMPORTED_MODULE_29__authentication_forgot_forgot_component__["a" /* ForgotComponent */],
            __WEBPACK_IMPORTED_MODULE_31__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_32__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_33__admin_manage_users_manage_customer_manage_customer_component__["a" /* ManageCustomerComponent */],
            __WEBPACK_IMPORTED_MODULE_34__admin_manage_users_manage_serviceprovider_manage_serviceprovider_component__["a" /* ManageServiceproviderComponent */],
            __WEBPACK_IMPORTED_MODULE_35__admin_manage_users_manage_company_manage_company_component__["a" /* ManageCompanyComponent */],
            __WEBPACK_IMPORTED_MODULE_36__upgrade_upgrade_component__["a" /* UpgradeComponent */],
            __WEBPACK_IMPORTED_MODULE_37__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_38__authentication_changepass_changepass_component__["a" /* ChangepassComponent */],
            __WEBPACK_IMPORTED_MODULE_39__company_generate_contract_template_template_component__["a" /* TemplateComponent */],
            __WEBPACK_IMPORTED_MODULE_40__company_generate_contract_preview_preview_component__["a" /* PreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_41__sidemenu_sidemenu_component__["a" /* SidemenuComponent */],
            __WEBPACK_IMPORTED_MODULE_42__sidemenu_company_company_component__["a" /* CompanyComponentSideMenu */],
            __WEBPACK_IMPORTED_MODULE_43__profile_admin_profile_admin_profile_component__["a" /* AdminProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_44__authentication_adminchangepass_adminchangepass_component__["a" /* AdminchangepassComponent */],
            __WEBPACK_IMPORTED_MODULE_47__admin_view_contract_detail_detail_component__["a" /* DetailComponent */],
            __WEBPACK_IMPORTED_MODULE_46__date_filter_pipe__["a" /* DateFilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_route__["a" /* appRouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["a" /* ToasterModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_30__routeGuard__["a" /* CustomerRouteGuard */], __WEBPACK_IMPORTED_MODULE_30__routeGuard__["b" /* CompanyRouteGuard */], __WEBPACK_IMPORTED_MODULE_30__routeGuard__["c" /* AdminRouteGuard */], __WEBPACK_IMPORTED_MODULE_30__routeGuard__["d" /* ServiceProviderRouteGuard */], __WEBPACK_IMPORTED_MODULE_45__sidenavigation_service__["a" /* SidenavigationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_manage_subscription_manage_subscription_component__ = __webpack_require__("../../../../../src/app/admin/manage-subscription/manage-subscription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company_company_component__ = __webpack_require__("../../../../../src/app/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_provider_service_provider_component__ = __webpack_require__("../../../../../src/app/service-provider/service-provider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customer_customer_component__ = __webpack_require__("../../../../../src/app/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authentication_main_component__ = __webpack_require__("../../../../../src/app/authentication/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__blog_blog_component__ = __webpack_require__("../../../../../src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__faq_faq_component__ = __webpack_require__("../../../../../src/app/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_reports_reports_component__ = __webpack_require__("../../../../../src/app/admin/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_manage_templates_manage_templates_component__ = __webpack_require__("../../../../../src/app/admin/manage-templates/manage-templates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__admin_view_contract_view_contract_component__ = __webpack_require__("../../../../../src/app/admin/view-contract/view-contract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contact_us_contact_us_component__ = __webpack_require__("../../../../../src/app/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__privacy_policy_privacy_policy_component__ = __webpack_require__("../../../../../src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__termsand_condition_termsand_condition_component__ = __webpack_require__("../../../../../src/app/termsand-condition/termsand-condition.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__payment_plans_payment_plans_component__ = __webpack_require__("../../../../../src/app/payment-plans/payment-plans.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_services_component__ = __webpack_require__("../../../../../src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__company_generate_contract_generate_contract_component__ = __webpack_require__("../../../../../src/app/company/generate-contract/generate-contract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__admin_category_category_component__ = __webpack_require__("../../../../../src/app/admin/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admin_create_template_create_template_component__ = __webpack_require__("../../../../../src/app/admin/create-template/create-template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__admin_create_template_edit_edit_component__ = __webpack_require__("../../../../../src/app/admin/create-template/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__authentication_forgot_forgot_component__ = __webpack_require__("../../../../../src/app/authentication/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__routeGuard__ = __webpack_require__("../../../../../src/app/routeGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__admin_manage_users_manage_customer_manage_customer_component__ = __webpack_require__("../../../../../src/app/admin/manage-users/manage-customer/manage-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__admin_manage_users_manage_serviceprovider_manage_serviceprovider_component__ = __webpack_require__("../../../../../src/app/admin/manage-users/manage-serviceprovider/manage-serviceprovider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__admin_manage_users_manage_company_manage_company_component__ = __webpack_require__("../../../../../src/app/admin/manage-users/manage-company/manage-company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__upgrade_upgrade_component__ = __webpack_require__("../../../../../src/app/upgrade/upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__authentication_changepass_changepass_component__ = __webpack_require__("../../../../../src/app/authentication/changepass/changepass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__company_generate_contract_template_template_component__ = __webpack_require__("../../../../../src/app/company/generate-contract/template/template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__company_generate_contract_preview_preview_component__ = __webpack_require__("../../../../../src/app/company/generate-contract/preview/preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__profile_admin_profile_admin_profile_component__ = __webpack_require__("../../../../../src/app/profile/admin-profile/admin-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__authentication_adminchangepass_adminchangepass_component__ = __webpack_require__("../../../../../src/app/authentication/adminchangepass/adminchangepass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__admin_view_contract_detail_detail_component__ = __webpack_require__("../../../../../src/app/admin/view-contract/detail/detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRouterModule; });






































var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__authentication_main_component__["a" /* MainComponent */]
    },
    {
        path: 'contractdetail',
        component: __WEBPACK_IMPORTED_MODULE_34__admin_view_contract_detail_detail_component__["a" /* DetailComponent */]
    },
    {
        path: 'Template',
        component: __WEBPACK_IMPORTED_MODULE_30__company_generate_contract_template_template_component__["a" /* TemplateComponent */]
    },
    {
        path: 'forgot',
        component: __WEBPACK_IMPORTED_MODULE_22__authentication_forgot_forgot_component__["a" /* ForgotComponent */]
    },
    { path: 'serviceprovider', children: [
            { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_4__service_provider_service_provider_component__["a" /* ServiceProviderComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["d" /* ServiceProviderRouteGuard */]] },
            { path: 'contract', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_12__admin_view_contract_view_contract_component__["a" /* ViewContractComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["d" /* ServiceProviderRouteGuard */]] },
            { path: 'profile', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_28__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["d" /* ServiceProviderRouteGuard */]] },
            { path: 'generateContract', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_18__company_generate_contract_generate_contract_component__["a" /* GenerateContractComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["d" /* ServiceProviderRouteGuard */]] },
            { path: 'changepassword', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_29__authentication_changepass_changepass_component__["a" /* ChangepassComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["d" /* ServiceProviderRouteGuard */]] },
            { path: 'ViewContract', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_12__admin_view_contract_view_contract_component__["a" /* ViewContractComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["d" /* ServiceProviderRouteGuard */]] },
            { path: 'PreviewContract', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_31__company_generate_contract_preview_preview_component__["a" /* PreviewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["d" /* ServiceProviderRouteGuard */]] },
            { path: 'upgrade', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_27__upgrade_upgrade_component__["a" /* UpgradeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["d" /* ServiceProviderRouteGuard */]] },
        ] },
    { path: 'customer', children: [
            { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_5__customer_customer_component__["a" /* CustomerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["a" /* CustomerRouteGuard */]] },
            { path: 'contract', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_12__admin_view_contract_view_contract_component__["a" /* ViewContractComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["a" /* CustomerRouteGuard */]] },
            { path: 'profile', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_28__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["a" /* CustomerRouteGuard */]] },
            { path: 'generateContract', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_18__company_generate_contract_generate_contract_component__["a" /* GenerateContractComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["a" /* CustomerRouteGuard */]] },
            { path: 'changepassword', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_29__authentication_changepass_changepass_component__["a" /* ChangepassComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["a" /* CustomerRouteGuard */]] },
            { path: 'ViewContract', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_12__admin_view_contract_view_contract_component__["a" /* ViewContractComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["a" /* CustomerRouteGuard */]] },
            { path: 'PreviewContract', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_31__company_generate_contract_preview_preview_component__["a" /* PreviewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["a" /* CustomerRouteGuard */]] },
            { path: 'upgrade', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_27__upgrade_upgrade_component__["a" /* UpgradeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["a" /* CustomerRouteGuard */]] },
        ] },
    { path: 'company', children: [
            { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_3__company_company_component__["a" /* CompanyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["b" /* CompanyRouteGuard */]] },
            { path: 'contract', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_12__admin_view_contract_view_contract_component__["a" /* ViewContractComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["b" /* CompanyRouteGuard */]] },
            { path: 'profile', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_28__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["b" /* CompanyRouteGuard */]] },
            { path: 'generateContract', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_18__company_generate_contract_generate_contract_component__["a" /* GenerateContractComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["b" /* CompanyRouteGuard */]] },
            { path: 'changepassword', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_29__authentication_changepass_changepass_component__["a" /* ChangepassComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["b" /* CompanyRouteGuard */]] },
            { path: 'ViewContract', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_12__admin_view_contract_view_contract_component__["a" /* ViewContractComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["b" /* CompanyRouteGuard */]] },
            { path: 'PreviewContract', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_31__company_generate_contract_preview_preview_component__["a" /* PreviewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["b" /* CompanyRouteGuard */]] },
            { path: 'upgrade', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_27__upgrade_upgrade_component__["a" /* UpgradeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["b" /* CompanyRouteGuard */]] },
        ] },
    { path: 'admin', children: [
            { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["c" /* AdminRouteGuard */]] },
            { path: 'managesubscription', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_1__admin_manage_subscription_manage_subscription_component__["a" /* ManageSubscriptionComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["c" /* AdminRouteGuard */]] },
            { path: 'profile', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_32__profile_admin_profile_admin_profile_component__["a" /* AdminProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["c" /* AdminRouteGuard */]] },
            { path: 'changepassword', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_33__authentication_adminchangepass_adminchangepass_component__["a" /* AdminchangepassComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["c" /* AdminRouteGuard */]] },
            { path: 'manageTemplate', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_11__admin_manage_templates_manage_templates_component__["a" /* ManageTemplatesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["c" /* AdminRouteGuard */]] },
            { path: 'reports', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_10__admin_reports_reports_component__["a" /* ReportsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["c" /* AdminRouteGuard */]] },
            { path: 'addCategory', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_19__admin_category_category_component__["a" /* CategoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["c" /* AdminRouteGuard */]] },
            { path: 'editTemplate', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_21__admin_create_template_edit_edit_component__["a" /* EditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["c" /* AdminRouteGuard */]] },
            { path: 'createTemplate', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_20__admin_create_template_create_template_component__["a" /* CreateTemplateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["c" /* AdminRouteGuard */]] },
            { path: 'managecustomer', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_24__admin_manage_users_manage_customer_manage_customer_component__["a" /* ManageCustomerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["c" /* AdminRouteGuard */]] },
            { path: 'manageservice', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_25__admin_manage_users_manage_serviceprovider_manage_serviceprovider_component__["a" /* ManageServiceproviderComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["c" /* AdminRouteGuard */]] },
            { path: 'managecompany', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_26__admin_manage_users_manage_company_manage_company_component__["a" /* ManageCompanyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__routeGuard__["c" /* AdminRouteGuard */]] },
        ] },
    {
        path: 'services',
        component: __WEBPACK_IMPORTED_MODULE_17__services_services_component__["a" /* ServicesComponent */]
    },
    {
        path: 'payment',
        component: __WEBPACK_IMPORTED_MODULE_16__payment_plans_payment_plans_component__["a" /* PaymentPlansComponent */]
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_13__contact_us_contact_us_component__["a" /* ContactUsComponent */]
    },
    {
        path: 'privacy',
        component: __WEBPACK_IMPORTED_MODULE_14__privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */]
    },
    {
        path: 'termsCondition',
        component: __WEBPACK_IMPORTED_MODULE_15__termsand_condition_termsand_condition_component__["a" /* TermsandConditionComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'blog',
        component: __WEBPACK_IMPORTED_MODULE_8__blog_blog_component__["a" /* BlogComponent */]
    },
    {
        path: 'faq',
        component: __WEBPACK_IMPORTED_MODULE_9__faq_faq_component__["a" /* FAQComponent */]
    },
];
var appRouterModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.route.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/adminchangepass/adminchangepass.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>  \n<section>\n  <section class=\"admin-dashbord\">\n    <div class=\"container-fluid\">\n        <app-sidemenu></app-sidemenu>\n          <div class=\"col-sm-9 right-side\">\n            <h3>Change Password</h3>\n            <form (ngSubmit)=\"ChangPass()\" #heroFormzzzzzz=\"ngForm\">  \n                <div class=\"form-group\">\n                <label  for=\"CurrentPass\">Current Password</label>\n                <input type=\"password\" class=\"form-control\" id=\"CurrentPass\"\n                required\n                [(ngModel)]=\"model.CurrentPass\" name=\"CurrentPass\"\n                #CurrentPass=\"ngModel\">\n                <div [hidden]=\"CurrentPass.valid || CurrentPass.pristine\"\n                    class=\"alert alert-danger\">\n                    <div [hidden]=\"!CurrentPass.hasError('required')\">Current Password is required</div>\n                </div>\n                </div>\n\n\n                <div class=\"form-group\">\n                <label for=\"NewPass\">New Password</label>\n                <input type=\"password\" class=\"form-control\" id=\"NewPass\"\n                required\n                [(ngModel)]=\"model.NewPass\" name=\"NewPass\"\n                #NewPass=\"ngModel\">\n                <div [hidden]=\"NewPass.valid || NewPass.pristine\"\n                    class=\"alert alert-danger\">\n                    <div [hidden]=\"!NewPass.hasError('required')\">New Password is required</div>\n                </div>\n                </div>\n\n\n                <div class=\"form-group\">\n                <label for=\"CnfrmPass\">Confirm New Password</label>\n                <input type=\"password\" class=\"form-control\" id=\"CnfrmPass\"\n                required\n                [(ngModel)]=\"model.CnfrmPass\" name=\"CnfrmPass\"\n                #CnfrmPass=\"ngModel\">\n                <div [hidden]=\"CnfrmPass.valid || CnfrmPass.pristine\"\n                    class=\"alert alert-danger\">\n                    <div [hidden]=\"!CnfrmPass.hasError('required')\">CnfrmPass is required</div>\n                </div>\n                </div>\n\n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!heroFormzzzzzz.form.valid\">Update</button>\n            </form>\n          </div>\n      </div>\n          <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n  </section>\n</section>\n<app-footer></app-footer> \n<div class=\"modal fade\" id=\"cnfrmDelete\" role=\"dialog\">\n<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Message</h4>\n    </div>\n    <div class=\"modal-body\">\n        <h4>Do you Want To Delete</h4>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"DeleteCategory()\">Delete</button>\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n    </div>\n    </div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/authentication/adminchangepass/adminchangepass.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__("../../../../../../config/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config_config__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminchangepassComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminchangepassComponent = (function () {
    function AdminchangepassComponent(http, router) {
        this.http = http;
        this.router = router;
        this.model = {
            CurrentPass: '',
            NewPass: '',
            CnfrmPass: '',
            id: ''
        };
    }
    AdminchangepassComponent.prototype.ngOnInit = function () {
        this.User_data = JSON.parse(localStorage.getItem('User'));
        if (this.User_data) {
            switch (this.User_data.User_Type) {
                case "Customer":
                    this.dashboard = 'customer';
                    break;
                case "Service_Provider":
                    this.dashboard = 'serviceprovider';
                    break;
                case "Company":
                    this.dashboard = 'company';
                    break;
                case "Admin":
                    this.dashboard = 'admin';
                    break;
            }
        }
        else {
            console.log('ll');
        }
    };
    AdminchangepassComponent.prototype.ChangPass = function () {
        var _this = this;
        if (this.model.CnfrmPass == this.model.NewPass) {
            this.model.id = this.User_data.idUsers;
            this.http.post('//' + __WEBPACK_IMPORTED_MODULE_3__config_config__["global_ip"] + '/auth/changepass', this.model).subscribe(function (res) {
                var result = JSON.parse(res._body);
                if (result.status == 200) {
                    _this.message = 'Password Changed';
                    $('#message').modal('toggle');
                    setTimeout(function () {
                        $('#message').modal('toggle');
                    }, 2000);
                }
                else if (result.status == 300) {
                    _this.message = 'Wrong Password';
                    $('#message').modal('toggle');
                    setTimeout(function () {
                        $('#message').modal('toggle');
                    }, 2000);
                }
            }, function (err) {
                _this.message = err;
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 2000);
            });
        }
        else {
            this.message = 'Password do not Match';
            $('#message').modal('toggle');
            setTimeout(function () {
                $('#message').modal('toggle');
            }, 2000);
        }
    };
    AdminchangepassComponent.prototype.isJson = function (str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    return AdminchangepassComponent;
}());
AdminchangepassComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-adminchangepass',
        template: __webpack_require__("../../../../../src/app/authentication/adminchangepass/adminchangepass.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AdminchangepassComponent);

var _a, _b;
//# sourceMappingURL=adminchangepass.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/changepass/changepass.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>  \n<section>\n  <section class=\"admin-dashbord\">\n    <div class=\"container-fluid\">\n        <app-company-sidemenu></app-company-sidemenu>\n          <div class=\"col-sm-9 right-side\">\n            <h3>Change Password</h3>\n            <form (ngSubmit)=\"ChangPass()\" #heroFormzzzzzz=\"ngForm\">  \n                <div class=\"form-group\">\n                <label  for=\"CurrentPass\">Current Password</label>\n                <input type=\"password\" class=\"form-control\" id=\"CurrentPass\"\n                required\n                [(ngModel)]=\"model.CurrentPass\" name=\"CurrentPass\"\n                #CurrentPass=\"ngModel\">\n                <div [hidden]=\"CurrentPass.valid || CurrentPass.pristine\"\n                    class=\"alert alert-danger\">\n                    <div [hidden]=\"!CurrentPass.hasError('required')\">Current Password is required</div>\n                </div>\n                </div>\n\n\n                <div class=\"form-group\">\n                <label for=\"NewPass\">New Password</label>\n                <input type=\"password\" class=\"form-control\" id=\"NewPass\"\n                required\n                [(ngModel)]=\"model.NewPass\" name=\"NewPass\"\n                #NewPass=\"ngModel\">\n                <div [hidden]=\"NewPass.valid || NewPass.pristine\"\n                    class=\"alert alert-danger\">\n                    <div [hidden]=\"!NewPass.hasError('required')\">New Password is required</div>\n                </div>\n                </div>\n\n\n                <div class=\"form-group\">\n                <label for=\"CnfrmPass\">Confirm New Password</label>\n                <input type=\"password\" class=\"form-control\" id=\"CnfrmPass\"\n                required\n                [(ngModel)]=\"model.CnfrmPass\" name=\"CnfrmPass\"\n                #CnfrmPass=\"ngModel\">\n                <div [hidden]=\"CnfrmPass.valid || CnfrmPass.pristine\"\n                    class=\"alert alert-danger\">\n                    <div [hidden]=\"!CnfrmPass.hasError('required')\">CnfrmPass is required</div>\n                </div>\n                </div>\n\n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!heroFormzzzzzz.form.valid\">Update</button>\n            </form>\n          </div>\n      </div>\n          <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n  </section>\n</section>\n<app-footer></app-footer> \n<div class=\"modal fade\" id=\"cnfrmDelete\" role=\"dialog\">\n<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Message</h4>\n    </div>\n    <div class=\"modal-body\">\n        <h4>Do you Want To Delete</h4>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"DeleteCategory()\">Delete</button>\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n    </div>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/authentication/changepass/changepass.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__("../../../../../../config/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__config_config__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepassComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangepassComponent = (function () {
    function ChangepassComponent(http, router, toasterService) {
        this.http = http;
        this.router = router;
        this.toasterService = toasterService;
        this.model = {
            CurrentPass: '',
            NewPass: '',
            CnfrmPass: '',
            id: ''
        };
    }
    ChangepassComponent.prototype.ngOnInit = function () {
        this.User_data = JSON.parse(localStorage.getItem('User'));
        if (this.User_data) {
            switch (this.User_data.User_Type) {
                case "Customer":
                    this.dashboard = 'customer';
                    break;
                case "Service_Provider":
                    this.dashboard = 'serviceprovider';
                    break;
                case "Company":
                    this.dashboard = 'company';
                    break;
                case "Admin":
                    this.dashboard = 'admin';
                    break;
            }
        }
        else {
            console.log('ll');
        }
    };
    ChangepassComponent.prototype.ChangPass = function () {
        var _this = this;
        if (this.model.CnfrmPass == this.model.NewPass) {
            this.model.id = this.User_data.idUsers;
            this.http.post('//' + __WEBPACK_IMPORTED_MODULE_4__config_config__["global_ip"] + '/auth/changepass', this.model).subscribe(function (res) {
                var result = JSON.parse(res._body);
                if (result.status == 200) {
                    _this.message = 'Password Changed';
                    $('#message').modal('toggle');
                    setTimeout(function () {
                        $('#message').modal('toggle');
                    }, 2000);
                }
                else if (result.status == 300) {
                    _this.message = 'Wrong Password';
                    $('#message').modal('toggle');
                    setTimeout(function () {
                        $('#message').modal('toggle');
                    }, 2000);
                }
            }, function (err) {
                _this.message = err;
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 2000);
            });
        }
        else {
            this.message = 'Password do not Match';
            $('#message').modal('toggle');
            setTimeout(function () {
                $('#message').modal('toggle');
            }, 2000);
        }
    };
    ChangepassComponent.prototype.isJson = function (str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    return ChangepassComponent;
}());
ChangepassComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-changepass',
        template: __webpack_require__("../../../../../src/app/authentication/changepass/changepass.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object])
], ChangepassComponent);

var _a, _b, _c;
//# sourceMappingURL=changepass.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"admin-dashbord\" style=\"min-height: 698px;\">\n    <div class=\"container\">\n        <h3>Enter Email Registered with your Account</h3>\n        <form (ngSubmit)=\"Submit()\" #heroForm1=\"ngForm\">  \n            <div class=\"form-group\">\n            <label for=\"lemail\">Email</label>\n            <input type=\"text\" class=\"form-control\" id=\"lemail\"\n            required\n            pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" \n            [(ngModel)]=\"model.email\" name=\"lemail\"\n            #lemail=\"ngModel\">\n            <div [hidden]=\"lemail.valid || lemail.pristine\"\n                class=\"alert alert-danger\">\n                <div [hidden]=\"!lemail.hasError('required')\">Email is required</div>\n                <div [hidden]=\"!lemail.hasError('pattern')\">Only alphabetsallowed</div>\n            </div>\n            </div>\n\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!heroForm1.form.valid\" >Submit</button>\n        </form>\n    </div>      \n</section>\n<app-footer></app-footer>\n<div class=\"modal fade\" id=\"message\" role=\"dialog\">\n<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Message</h4>\n    </div>\n    <div class=\"modal-body\">\n        <h4>Message! {{message}}</h4>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n    </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentication/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal__ = __webpack_require__("../../../../../src/app/modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__("../../../../../../config/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__config_config__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotComponent = (function () {
    function ForgotComponent(http, router, toasterService) {
        this.http = http;
        this.router = router;
        this.User = ['Select User', 'Customer', 'Service_Provider', 'Company'];
        this.toasterService = toasterService;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__modal__["a" /* Modal */]();
    }
    ForgotComponent.prototype.ngOnInit = function () { };
    ForgotComponent.prototype.Submit = function () {
        var _this = this;
        var obj = { email: this.model.email };
        this.http.post('//' + __WEBPACK_IMPORTED_MODULE_5__config_config__["global_ip"] + '/auth/forgot', obj).subscribe(function (res) {
            var result = JSON.parse(res._body);
            if (result.status == 200) {
                _this.message = result.res;
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 2000);
            }
            else if (result.status == 300) {
                _this.message = result.res;
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 2000);
            }
        }, function (err) {
            _this.message = err;
            $('#message').modal('toggle');
            setTimeout(function () {
                $('#message').modal('toggle');
            }, 2000);
        });
    };
    return ForgotComponent;
}());
ForgotComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-forgot',
        template: __webpack_require__("../../../../../src/app/authentication/forgot/forgot.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object])
], ForgotComponent);

var _a, _b, _c;
//# sourceMappingURL=forgot.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/main.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"top-header\">\n    <div class=\"banner\">\n    \t<div class=\"container\">\n        \t<div class=\"row\">\n            <div class=\"col-xs-8 col-sm-8 col-md-7\">\n            \t<h2>Now Create Digital Contract </h2>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus dui, laoreet placerat sodales sit amet, sodales in purus. Nunc id maximus turpis. Phasellus condimentum felis at imperdiet lacinia. </p>\n                <a href=\"#\" class=\"btn btn-default get-start-btn\">Get Started</a>\n            </div>\n            <div class=\"col-xs-4 col-sm-4 col-md-5\"><img src=\"assets/images/top-banner-1.png\" alt=\"image\" class=\"img-responsive\"/></div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!--======================navigation ends here=========================-->\n\n<section class=\"services-box\">\n\t<div class=\"container\">\n    \t<h2>How it Works</h2>\n        <div class=\"services-tabs\">\n          <!-- Nav tabs -->\n          <ul class=\"nav nav-tabs\" role=\"tablist\">\n            <li role=\"presentation\" class=\"active\"><a href=\"#home\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Service Provider</a></li>\n            <li role=\"presentation\"><a href=\"#profile\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">Customer</a></li>\n          </ul>\n          <!-- Tab panes -->\n          <div class=\"tab-content\">\n            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"home\">\n            \t<div class=\"container\">\n                \t<div class=\"row\">\n                    \t<div class=\"col-sm-3\">\n                        \t<figure class=\"icon-cont\">\n                            \t<img src=\"assets/images/register.png\" alt=\"icon\"/>\n                                <h4>Register</h4>\n                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus dui, laoreet placerat sodales sit amet, sodales in purus. </p>\n                            </figure>\n                        </div>\n                        <div class=\"col-sm-3\">\n                        \t<figure class=\"icon-cont\">\n                            \t<img src=\"assets/images/add-service.png\" alt=\"icon\"/>\n                                <h4>Add Services</h4>\n                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus dui, laoreet placerat sodales sit amet, sodales in purus. </p>\n                            </figure>\n                        </div>\n                        <div class=\"col-sm-3\">\n                        \t<figure class=\"icon-cont\">\n                            \t<img src=\"assets/images/add-client.png\" alt=\"icon\"/>\n                                <h4>Add Client</h4>\n                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus dui, laoreet placerat sodales sit amet, sodales in purus. </p>\n                            </figure>\n                        </div>\n                        <div class=\"col-sm-3\">\n                        \t<figure class=\"icon-cont\">\n                            \t<img src=\"assets/images/complete.png\" alt=\"icon\"/>\n                                <h4>Complete Services & Get Paid</h4>\n                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus dui, laoreet placerat sodales sit amet, sodales in purus. </p>\n                            </figure>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div role=\"tabpanel\" class=\"tab-pane\" id=\"profile\">\n            \t<div class=\"container\">\n                \t<div class=\"row\">\n                    \t<div class=\"col-sm-3\">\n                        \t<figure class=\"icon-cont\">\n                            \t<img src=\"assets/images/complete.png\" alt=\"icon\"/>\n                                <h4>Complete Services & Get Paid</h4>\n                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus dui, laoreet placerat sodales sit amet, sodales in purus. </p>\n                            </figure>\n                        </div>\n                        <div class=\"col-sm-3\">\n                        \t<figure class=\"icon-cont\">\n                            \t<img src=\"assets/images/add-service.png\" alt=\"icon\"/>\n                                <h4>Add Services</h4>\n                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus dui, laoreet placerat sodales sit amet, sodales in purus. </p>\n                            </figure>\n                        </div>\n                        <div class=\"col-sm-3\">\n                        \t<figure class=\"icon-cont\">\n                            \t<img src=\"assets/images/register.png\" alt=\"icon\"/>\n                                <h4>Register</h4>\n                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus dui, laoreet placerat sodales sit amet, sodales in purus. </p>\n                            </figure>\n                        </div>\n                        <div class=\"col-sm-3\">\n                        \t<figure class=\"icon-cont\">\n                            \t<img src=\"assets/images/add-client.png\" alt=\"icon\"/>\n                                <h4>Add Client</h4>\n                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus dui, laoreet placerat sodales sit amet, sodales in purus. </p>\n                            </figure>\n                        </div>\n                    </div>\n                </div>\n            </div>\n          </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"avail-benifits\">\n\t<div class=\"container\">\n    \t<div class=\"row\">\n        \t<div class=\"col-sm-4\">\n            \t<div class=\"avail-box av-box1\">\n                \t<h3>Avail<br>\n                    Benefits of Blockchain Based \n                    <span class=\"color-difr\">Smart Contract Generator</span></h3>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n            \t<div class=\"avail-box2\">\n                \t<h3>Benefit One</h3>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus dui, laoreet placerat sodales sit amet, sodales in purus. </p>\n                    <button class=\"btn btn-default\"> Read More</button>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n            \t<div class=\"avail-box2\">\n                \t<h3>Benefit One</h3>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus dui, laoreet placerat sodales sit amet, sodales in purus. </p>\n                    <button class=\"btn btn-default\"> Read More</button>\n                </div>\n            </div>\n            \n             <div class=\"col-sm-4\">\n            \t<div class=\"avail-box2\">\n                \t<h3>Benefit One</h3>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus dui, laoreet placerat sodales sit amet, sodales in purus. </p>\n                    <button class=\"btn btn-default\"> Read More</button>\n                </div>\n            </div>\n            \n             <div class=\"col-sm-4\">\n            \t<div class=\"avail-box2\">\n                \t<h3>Benefit One</h3>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus dui, laoreet placerat sodales sit amet, sodales in purus. </p>\n                    <button class=\"btn btn-default\"> Read More</button>\n                </div>\n            </div>\n            \n             <div class=\"col-sm-4\">\n            \t<div class=\"avail-box2\">\n                \t<h3>Benefit One</h3>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus dui, laoreet placerat sodales sit amet, sodales in purus. </p>\n                    <button class=\"btn btn-default\"> Read More</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section id=\"demos\" class=\"container\">\n\t<h2 class=\"color-blue text-center\">What Our Happy Customers Says</h2>\n      <div class=\"row\">\n        <div class=\"large-12 columns\">\n          <div class=\"owl-carousel owl-theme\">\n            <div class=\"item\">\n             <div class=\"row\">\n             \t<div class=\"col-sm-2\"><img src=\"assets/images/lady-image.png\" alt=\"image\"/></div>\n                <div class=\"col-sm-10\"><h4>Aliana james</h4><p>Managing Director, Aliana Electric Corporation</p></div>\n             </div>\n             <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus dui, laoreet placerat sodales sit amet, sodales in purus. Nunc id maximus turpis. Phasellus condimentum felis at imperdiet lacinia. Aenean in leo non sem scelerisque sodales in sit amet nisi. In cursus volutpat risus, vel faucibus orci vehicula id. ”</p>\n            </div>\n            <div class=\"item\">\n                 <div class=\"row\">\n             \t<div class=\"col-sm-2\"><img src=\"assets/images/lady-image.png\" alt=\"image\"/></div>\n                <div class=\"col-sm-10\"><h4>Aliana james</h4><p>Managing Director, Aliana Electric Corporation</p></div>\n             </div>\n             <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus dui, laoreet placerat sodales sit amet, sodales in purus. Nunc id maximus turpis. Phasellus condimentum felis at imperdiet lacinia. Aenean in leo non sem scelerisque sodales in sit amet nisi. In cursus volutpat risus, vel faucibus orci vehicula id. ”</p>\n            </div>\n            <div class=\"item\">\n                 <div class=\"row\">\n             \t<div class=\"col-sm-2\"><img src=\"assets/images/lady-image.png\" alt=\"image\"/></div>\n                <div class=\"col-sm-10\"><h4>Aliana james</h4><p>Managing Director, Aliana Electric Corporation</p></div>\n             </div>\n             <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus dui, laoreet placerat sodales sit amet, sodales in purus. Nunc id maximus turpis. Phasellus condimentum felis at imperdiet lacinia. Aenean in leo non sem scelerisque sodales in sit amet nisi. In cursus volutpat risus, vel faucibus orci vehicula id. ”</p>\n            </div>\n            <div class=\"item\">\n                 <div class=\"row\">\n             \t<div class=\"col-sm-2\"><img src=\"assets/images/lady-image.png\" alt=\"image\"/></div>\n                <div class=\"col-sm-10\"><h4>Aliana james</h4><p>Managing Director, Aliana Electric Corporation</p></div>\n             </div>\n             <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus dui, laoreet placerat sodales sit amet, sodales in purus. Nunc id maximus turpis. Phasellus condimentum felis at imperdiet lacinia. Aenean in leo non sem scelerisque sodales in sit amet nisi. In cursus volutpat risus, vel faucibus orci vehicula id. ”</p>\n            </div>\n            <div class=\"item\">\n              <h4>5</h4>\n            </div>\n            <div class=\"item\">\n                 <div class=\"row\">\n             \t<div class=\"col-sm-2\"><img src=\"assets/images/lady-image.png\" alt=\"image\"/></div>\n                <div class=\"col-sm-10\"><h4>Aliana james</h4><p>Managing Director, Aliana Electric Corporation</p></div>\n             </div>\n             <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus dui, laoreet placerat sodales sit amet, sodales in purus. Nunc id maximus turpis. Phasellus condimentum felis at imperdiet lacinia. Aenean in leo non sem scelerisque sodales in sit amet nisi. In cursus volutpat risus, vel faucibus orci vehicula id. ”</p>\n            </div>\n            <div class=\"item\">\n                 <div class=\"row\">\n             \t<div class=\"col-sm-2\"><img src=\"assets/images/lady-image.png\" alt=\"image\"/></div>\n                <div class=\"col-sm-10\"><h4>Aliana james</h4><p>Managing Director, Aliana Electric Corporation</p></div>\n             </div>\n             <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus dui, laoreet placerat sodales sit amet, sodales in purus. Nunc id maximus turpis. Phasellus condimentum felis at imperdiet lacinia. Aenean in leo non sem scelerisque sodales in sit amet nisi. In cursus volutpat risus, vel faucibus orci vehicula id. ”</p>\n            </div>\n          </div>\n          </div>\n        </div>\n    </section>\n \n<section class=\"pricing-plane\">\n\t<div class=\"container\">\n    \t<h2 class=\"text-center color-blue\">Our Pricing Plans</h2>\n        <div class=\"row\">\n        \t<div class=\"col-sm-4\">\n            \t<div class=\"price-box\">\n                \t<div class=\"price\">\n                    \t<span class=\"doller-box\">$80</span>\n                        <span class=\"plane\">Basic plan</span>\n                    </div>\n                    <ul>\n                    \t<li><a href=\"#\">Plan Benefit1</a></li>\n                        <li><a href=\"#\">Plan Benefit1</a></li>\n                        <li><a href=\"#\">Plan Benefit1</a></li>\n                        <li><a href=\"#\">Plan Benefit1</a></li>\n                        <li><a href=\"#\">Plan Benefit1</a></li>\n                        <li><a href=\"#\">Plan Benefit1</a></li>\n                        <li><a href=\"#\">Plan Benefit1</a></li>\n                    </ul>\n                    <button class=\"btn btn-default blue-btn\">Try It</button>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n            \t<div class=\"price-box\">\n                \t<div class=\"price\">\n                    \t<span class=\"doller-box\">$120</span>\n                        <span class=\"plane\">Medium Plan</span>\n                    </div>\n                    <ul>\n                    \t<li><a href=\"#\">Plan Benefit1</a></li>\n                        <li><a href=\"#\">Plan Benefit1</a></li>\n                        <li><a href=\"#\">Plan Benefit1</a></li>\n                        <li><a href=\"#\">Plan Benefit1</a></li>\n                        <li><a href=\"#\">Plan Benefit1</a></li>\n                        <li><a href=\"#\">Plan Benefit1</a></li>\n                        <li><a href=\"#\">Plan Benefit1</a></li>\n                    </ul>\n                    <button class=\"btn btn-default blue-btn\">Try It</button>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n            \t<div class=\"price-box\">\n                \t<div class=\"price\">\n                    \t<span class=\"doller-box\">$150</span>\n                        <span class=\"plane\">High Plan</span>\n                    </div>\n                    <ul>\n                    \t<li><a href=\"#\">Plan Benefit1</a></li>\n                        <li><a href=\"#\">Plan Benefit1</a></li>\n                        <li><a href=\"#\">Plan Benefit1</a></li>\n                        <li><a href=\"#\">Plan Benefit1</a></li>\n                        <li><a href=\"#\">Plan Benefit1</a></li>\n                        <li><a href=\"#\">Plan Benefit1</a></li>\n                        <li><a href=\"#\">Plan Benefit1</a></li>\n                    </ul>\n                    <button class=\"btn btn-default blue-btn\">Try It</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"free-30days\">\n\t<div class=\"container\">\n    \t<h2 class=\"text-center color-blue\">Try it for Free For 30 Days</h2>\n        <button class=\"btn blue-btn center-block\">Start your Free Trial</button>\n        <a href=\"#\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n    </div>\n</section>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/authentication/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'main-app',
        template: __webpack_require__("../../../../../src/app/authentication/main.component.html"),
    }),
    __metadata("design:paramtypes", [])
], MainComponent);

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"admin-dashbord\" style=\"min-height: 698px;\">\n    <div class=\"container-fluid\">\n        <div class=\"container section-common\">\n        <h2 class=\"color-blue text-center\">Blogs</h2>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since \n        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets\n        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since \n        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets\n        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since \n        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets\n        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n            </div>\n            </div>\n        <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n</section>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogComponent = (function () {
    function BlogComponent(http, router, toasterService) {
        this.http = http;
        this.router = router;
    }
    BlogComponent.prototype.ngOnInit = function () { };
    return BlogComponent;
}());
BlogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-blog',
        template: __webpack_require__("../../../../../src/app/blog/blog.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object])
], BlogComponent);

var _a, _b, _c;
//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/company.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n    <section class=\"admin-dashbord\">\n        <div class=\"container-fluid\">\n                <app-company-sidemenu></app-company-sidemenu>\n              <div class=\"col-sm-9 right-side\" style=\"margin-bottom: 100px;\">\n                <div class=\"graph-tab customer-das manage-dash-temp\">\n                  <div class=\"row mnage-user-forms\">\n                    <div class=\"col-sm-9\">\n                            <h3>Company Dashboard</h3>\n                    </div>\n                  </div>\n                  <div class=\"table-responsive\">\n                      <table class=\"table\" style=\"border: 1px solid #ccc;\">\n                          <thead>\n                              <tr class=\"active\">\n                                  <th>SNo</th>\n                                  <th width= \"25%\">User Name</th>\n                                  <th width= \"56%\">Contract Description</th>\n                                  <th width= \"100px\">Action</th>\n                              </tr>\n                          </thead>\n                          <tbody>\n                              <tr class=\"bg-wht\">\n                                  <td>#</td>\n                                  <td>Construction Company</td>\n                                  <td>The terms and conditions are defined step-wise and has confirm step/job completion,..</td>\n                                  <td><i class=\"fa fa-eye\" aria-hidden=\"true\" style=\"margin-right:10px;\" (click)=\"popup()\"></i></td>\n                              </tr>\n                          </tbody>\n                      </table>\n                  </div>\n                </div>\n              </div>\n          </div>\n              <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n      </section>\n      <app-footer></app-footer>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/company/company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyComponent = (function () {
    function CompanyComponent(router, toasterService) {
        this.router = router;
        this.toasterService = toasterService;
    }
    CompanyComponent.prototype.ngOnInit = function () {
        this.User_data = JSON.parse(localStorage.getItem('User'));
    };
    CompanyComponent.prototype.popup = function () {
        $('#bootalert').css('display', 'block');
        setTimeout(function () {
            $('#bootalert').css('display', 'none');
        }, 5000);
    };
    return CompanyComponent;
}());
CompanyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-company',
        template: __webpack_require__("../../../../../src/app/company/company.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]) === "function" && _b || Object])
], CompanyComponent);

var _a, _b;
//# sourceMappingURL=company.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/generate-contract/generate-contract.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"admin-dashbord\">\n    <div class=\"container-fluid\">\n            <app-company-sidemenu></app-company-sidemenu>\n          <div class=\"col-sm-9 right-side\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <h3>Generate Contract</h3>\n              </div>\n            </div>\n        <div class=\"row\">\n          <div class=\"tab-content\" style=\"padding:30px;\">\n                <form #heroFormxxxx=\"ngForm\">  \n\n                    <div class=\"form-group\">\n                    <label>Select Customer<span style=\"color:red\">*</span></label>\n                    <select  class=\"form-control\" id=\"customeremail\" [(ngModel)]=\"CustomerEmailAddress\" name=\"customeremail\"\n                    #customeremail=\"ngModel\">\n                        <option [ngValue]=\"null\" disabled>--Select--</option>\n                        <option *ngFor=\"let c of customers\">{{c.Email}}</option>\n                    </select>\n                    </div>\n\n                    <div class=\"form-group\">\n                    <label  for=\"ContractName\">Contract Name<span style=\"color:red\">*</span></label>\n                    <input type=\"text\" class=\"form-control\" id=\"ContractName\"\n                    required\n                    maxlength=\"20\" \n                    [(ngModel)]=\"Template.ContractName\" name=\"ContractName\"\n                    #ContractName=\"ngModel\">\n                    <div [hidden]=\"ContractName.valid || ContractName.pristine\"\n                        class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                        <div [hidden]=\"!ContractName.hasError('required')\">Contract Name is required</div>\n                    </div>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                    <label for=\"email\">Email<span style=\"color:red\">*</span></label>\n                    <input type=\"text\" class=\"form-control\" id=\"email\"\n                    required\n                    maxlength=\"50\" \n                    pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" \n                    [(ngModel)]=\"Template.email\" name=\"email\"\n                    #email=\"ngModel\">\n                    <div [hidden]=\"email.valid || email.pristine\"\n                        class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                        <div class=\"ddddddd\" [hidden]=\"!email.hasError('required')\">Email is required</div>\n                        <div [hidden]=\"!email.hasError('pattern')\">Enter a Valid Email Pattern</div>\n                    </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"Date\">Date<span style=\"color:red\">*</span></label>\n                        <input type=\"date\" class=\"form-control\" id=\"Date\"\n                        required\n                        [(ngModel)]=\"Template.Date\" name=\"Date\"\n                        #Date=\"ngModel\">\n                        <div [hidden]=\"Date.valid || Date.pristine\"\n                            class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                            <div [hidden]=\"!Date.hasError('required')\">This Field is required</div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"Price\">Price<span style=\"color:red\">*</span></label>\n                        <input type=\"text\" class=\"form-control\" id=\"Price\"\n                        required\n                        pattern=\"[0-9]*\"\n                        maxlength=\"10\" \n                        [(ngModel)]=\"Template.Price\" name=\"Price\"\n                        #Price=\"ngModel\">\n                        <div [hidden]=\"Price.valid || Price.pristine\"\n                            class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                            <div class=\"ddddddd\" [hidden]=\"!Price.hasError('required')\">This Field is required</div>\n                            <div class=\"ddddddd\" [hidden]=\"!Price.hasError('pattern')\">Only Numbers Are Allowed</div>\n                            <div [hidden]=\"!Price.hasError('minlength')\">Only 10 Numbers</div>\n                        </div>\n                    </div>\n\n\n                    <div *ngFor=\"let u of Milestones\" style=\"margin-bottom:20px; background-color:blanchedalmond\">\n                        <li class=\"btn btn-success\" style=\"margin-left:90%;\" (click)=\"RemoveMilestone()\">Remove</li>\n                        <h4>Milestone {{u.ID}}</h4>\n\n                        <div class=\"form-group\">\n                        <label for=\"EOW\">Execution oF Work<span style=\"color:red\">*</span></label>\n                        <input type=\"text\" class=\"form-control\" id=\"EOW\"\n                        required\n                        [(ngModel)]=\"u.WorkExecution\" name=\"EOW\"\n                        #EOW=\"ngModel\">\n                        <div [hidden]=\"EOW.valid || EOW.pristine\"\n                            class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                            <div [hidden]=\"!EOW.hasError('required')\">This Field is required</div>\n                        </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                        <label for=\"schedule\">Schedule<span style=\"color:red\">*</span></label>\n                        <input type=\"text\" class=\"form-control\" id=\"schedule\"\n                        required\n                        [(ngModel)]=\"u.Schedule\" name=\"schedule\"\n                        #schedule=\"ngModel\">\n                        <div [hidden]=\"schedule.valid || schedule.pristine\"\n                            class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                            <div [hidden]=\"!schedule.hasError('required')\">This Field is required</div>\n                        </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                        <label for=\"taxes\">Taxes<span style=\"color:red\">*</span></label>\n                        <input type=\"text\" class=\"form-control\" id=\"taxes\"\n                        required\n                        [(ngModel)]=\"u.Taxes\" name=\"taxes\"\n                        #taxes=\"ngModel\">\n                        <div [hidden]=\"taxes.valid || taxes.pristine\"\n                            class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                            <div [hidden]=\"!taxes.hasError('required')\">This Field is required</div>\n                        </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                        <label for=\"fees\">Fees<span style=\"color:red\">*</span></label>\n                        <input type=\"text\" class=\"form-control\" id=\"fees\"\n                        required\n                        pattern=\"[0-9]*\"\n                        maxlength=\"10\" \n                        [(ngModel)]=\"u.Fees\" name=\"fees\"\n                        #fees=\"ngModel\">\n                        <div [hidden]=\"fees.valid || fees.pristine\"\n                            class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                            <div class=\"ddddddd\" [hidden]=\"!fees.hasError('required')\">This Field is required</div>\n                            <div class=\"ddddddd\" [hidden]=\"!fees.hasError('pattern')\">Only Numbers Are Allowed</div>\n                            <div [hidden]=\"!fees.hasError('minlength')\">Only 10 Numbers</div>\n                        </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                        <label for=\"penalty\">Penalties<span style=\"color:red\">*</span></label>\n                        <input type=\"text\" class=\"form-control\" id=\"penalty\"\n                        required\n                        [(ngModel)]=\"u.Penalties\" name=\"penalty\"\n                        #penalty=\"ngModel\">\n                        <div [hidden]=\"penalty.valid || penalty.pristine\"\n                            class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                            <div [hidden]=\"!penalty.hasError('required')\">This Field is required</div>\n                        </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                        <label for=\"SDate\">Start Date<span style=\"color:red\">*</span></label>\n                        <input type=\"date\" class=\"form-control\" id=\"SDate\"\n                        required\n                        [(ngModel)]=\"u.StartDate\" name=\"SDate\"\n                        #SDate=\"ngModel\">\n                        <div [hidden]=\"SDate.valid || SDate.pristine\"\n                            class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                            <div [hidden]=\"!SDate.hasError('required')\">This Field is required</div>\n                        </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                        <label for=\"EDate\">End Date<span style=\"color:red\">*</span></label>\n                        <input type=\"date\" class=\"form-control\" id=\"EDate\"\n                        required\n                        [(ngModel)]=\"u.EndDate\" name=\"EDate\"\n                        #EDate=\"ngModel\">\n                        <div [hidden]=\"EDate.valid || EDate.pristine\"\n                            class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                            <div [hidden]=\"!EDate.hasError('required')\">This Field is required</div>\n                        </div>\n                        </div>\n\n                    </div>\n\n                    <div class=\"form-group\">\n                        <li class=\"btn btn-success\" (click)=\"AddMilestone()\">Add Milestone</li>\n                    </div>\n\n                    <div *ngFor=\"let u of Fields\">\n                        <div class=\"form-group\" *ngIf=\"u.INPUT_FIELD!=='ContractName' && u.INPUT_FIELD!=='ContractEmail' && u.INPUT_FIELD!=='ContractPrice' && u.INPUT_FIELD!=='ContractDate'\">\n                        <label for=\"{{u.INPUT_FIELD}}\">{{u.INPUT_FIELD}}<span style=\"color:red\">*</span></label>\n                        <input type=\"text\" class=\"form-control\" id=\"{{u.INPUT_FIELD}}\"\n                        required\n                        [(ngModel)]=\"u.Value_Input\" name=\"{{u.INPUT_FIELD}}\"\n                        #u.INPUT_FIELD=\"ngModel\">\n                        </div>\n                    </div>\n\n                    <button type=\"submit\" class=\"btn btn-success\" (click)= \"CreatePDF()\" [disabled]=\"!heroFormxxxx.form.valid\">Submit</button>\n                    <button type=\"submit\" class=\"btn btn-success\" (click)= \"PreviewContract()\" [disabled]=\"!heroFormxxxx.form.valid\">Preview</button>\n                </form>\n          </div>\n        </div>\n          </div>\n    </div>      \n</section>\n<app-footer></app-footer>\n<!-- //////////////////////////////////////////////////////////////////////////////////////////////////////\n///////////////////////////////////////////////////////////////////////////////////////////////////////\n///////////////////////////////////////////////////////////////////////////////////////////////////////////////\n//////////////////////////////////////////////////////////////////////////////////////////////////////////// -->\n<div class=\"modal fade\" id=\"myModal222222\" role=\"dialog\">\n<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Message</h4>\n    </div>\n    <div class=\"modal-body\">\n            <p>{{preview}}</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n    </div>\n    </div>\n</div>\n</div>\n<div class=\"modal fade\" id=\"message\" role=\"dialog\">\n<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Message</h4>\n    </div>\n    <div class=\"modal-body\">\n        <h4>Message! {{message}}</h4>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n    </div>\n    </div>\n</div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/company/generate-contract/generate-contract.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal__ = __webpack_require__("../../../../../src/app/modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__("../../../../../../config/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__config_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerateContractComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GenerateContractComponent = (function () {
    function GenerateContractComponent(router, http, route) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.route = route;
        this.MilestoneID = 1;
        this.Milestones = [];
        this.route.queryParams.subscribe(function (params) {
            _this.TemplateID = params["TemplateID"];
        });
        this.Template = new __WEBPACK_IMPORTED_MODULE_3__modal__["d" /* Template */]();
    }
    GenerateContractComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.User_data = JSON.parse(localStorage.getItem('User'));
        if (this.User_data) {
            switch (this.User_data.User_Type) {
                case "Customer":
                    this.dashboard = 'customer';
                    break;
                case "Service_Provider":
                    this.dashboard = 'serviceprovider';
                    break;
                case "Company":
                    this.dashboard = 'company';
                    break;
                case "Admin":
                    this.dashboard = 'admin';
                    break;
            }
            var obj = { TempID: this.TemplateID };
            this.http.post('//' + __WEBPACK_IMPORTED_MODULE_4__config_config__["global_ip"] + '/pdf/getInputs', obj).subscribe(function (res) {
                _this.ContractName = __WEBPACK_IMPORTED_MODULE_5_lodash__["filter"](JSON.parse(res._body).res, function (o) { return o.INPUT_FIELD == 'ContractName'; });
                _this.ContractEmail = __WEBPACK_IMPORTED_MODULE_5_lodash__["filter"](JSON.parse(res._body).res, function (o) { return o.INPUT_FIELD == 'ContractEmail'; });
                _this.ContractPrice = __WEBPACK_IMPORTED_MODULE_5_lodash__["filter"](JSON.parse(res._body).res, function (o) { return o.INPUT_FIELD == 'ContractPrice'; });
                _this.ContractDate = __WEBPACK_IMPORTED_MODULE_5_lodash__["filter"](JSON.parse(res._body).res, function (o) { return o.INPUT_FIELD == 'ContractDate'; });
                _this.Fields = __WEBPACK_IMPORTED_MODULE_5_lodash__["filter"](JSON.parse(res._body).res, function (o) { return o.INPUT_FIELD !== 'ContractName' && o.INPUT_FIELD !== 'ContractEmail' && o.INPUT_FIELD !== 'ContractPrice' && o.INPUT_FIELD !== 'ContractDate'; });
            }, function (err) {
                console.log(err);
            });
            this.http.post('//' + __WEBPACK_IMPORTED_MODULE_4__config_config__["global_ip"] + '/auth/customer', obj).subscribe(function (res) {
                _this.customers = JSON.parse(res._body).res;
            }, function (err) {
                console.log(err);
            });
        }
        else {
            console.log('ll');
        }
    };
    GenerateContractComponent.prototype.PreviewContract = function () {
        var _this = this;
        var self = this;
        this.ContractEmail[0].Value_Input = this.Template.email;
        this.ContractName[0].Value_Input = this.Template.ContractName;
        this.ContractPrice[0].Value_Input = this.Template.Price;
        this.ContractDate[0].Value_Input = this.Template.Date;
        var obj = { TemplateID: this.ContractEmail[0].IDTemplate, UID: this.User_data.idUsers,
            ContractName: this.Template.ContractName, CustomerEmail: this.CustomerEmailAddress,
            ContractPrice: this.Template.Price, ContractDate: this.Template.Date
        };
        this.Fields.push(this.ContractDate[0], this.ContractEmail[0], this.ContractName[0], this.ContractPrice[0]);
        console.log({ fields: this.Fields, ID: obj, milestone: this.Milestones });
        this.http.post('//' + __WEBPACK_IMPORTED_MODULE_4__config_config__["global_ip"] + '/pdf/preview', { fields: this.Fields, ID: obj, milestone: this.Milestones }).subscribe(function (res) {
            var result = JSON.parse(res._body);
            if (result.status == 200) {
                console.log(result.res);
                _this.preview = result.res;
                $('#myModal222222').modal('toggle');
            }
            else {
                _this.message = 'UnSucessfull';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            }
        }, function (err) {
            _this.message = err;
            $('#message').modal('toggle');
            setTimeout(function () {
                $('#message').modal('toggle');
            }, 1000);
        });
    };
    GenerateContractComponent.prototype.CreatePDF = function () {
        var _this = this;
        var self = this;
        this.ContractEmail[0].Value_Input = this.Template.email;
        this.ContractName[0].Value_Input = this.Template.ContractName;
        this.ContractPrice[0].Value_Input = this.Template.Price;
        this.ContractDate[0].Value_Input = this.Template.Date;
        var obj = { TemplateID: this.ContractEmail[0].IDTemplate, UID: this.User_data.idUsers,
            ContractName: this.Template.ContractName, CustomerEmail: this.CustomerEmailAddress,
            ContractPrice: this.Template.Price, ContractDate: this.Template.Date
        };
        this.Fields.push(this.ContractDate[0], this.ContractEmail[0], this.ContractName[0], this.ContractPrice[0]);
        console.log({ fields: this.Fields, ID: obj, milestone: this.Milestones });
        this.http.post('//' + __WEBPACK_IMPORTED_MODULE_4__config_config__["global_ip"] + '/pdf/createPDF', { fields: this.Fields, ID: obj, milestone: this.Milestones }).subscribe(function (res) {
            _this.Fields = [];
            var result = JSON.parse(res._body);
            if (result.status == 200) {
                self.router.navigate(['/' + self.dashboard + '/ViewContract']);
            }
            else {
                _this.message = 'UnSucessfull';
                $('#message').modal('toggle');
                setTimeout(function () {
                    $('#message').modal('toggle');
                }, 1000);
            }
        }, function (err) {
            _this.Fields = [];
            _this.message = err;
            $('#message').modal('toggle');
            setTimeout(function () {
                $('#message').modal('toggle');
            }, 1000);
        });
    };
    GenerateContractComponent.prototype.AddMilestone = function () {
        var ABC = new __WEBPACK_IMPORTED_MODULE_3__modal__["e" /* Milestone */]();
        ABC.ID = this.MilestoneID;
        this.MilestoneID++;
        this.Milestones.push(ABC);
    };
    GenerateContractComponent.prototype.RemoveMilestone = function () {
        this.Milestones.pop();
        this.MilestoneID--;
    };
    return GenerateContractComponent;
}());
GenerateContractComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-generate-contract',
        template: __webpack_require__("../../../../../src/app/company/generate-contract/generate-contract.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], GenerateContractComponent);

var _a, _b, _c;
//# sourceMappingURL=generate-contract.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/generate-contract/preview/preview.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"admin-dashbord\">\n\t<div class=\"container-fluid\">\n                  <app-company-sidemenu></app-company-sidemenu>\n        <div class=\"col-sm-9 right-side text-center\">\n\t\t\t\t\t<h2>Preview Contract</h2>\n           </div>\n  </div>\n        <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n</section>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/company/generate-contract/preview/preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreviewComponent = (function () {
    function PreviewComponent(router, http, toasterService) {
        this.router = router;
        this.http = http;
    }
    PreviewComponent.prototype.ngOnInit = function () {
        this.User_data = JSON.parse(localStorage.getItem('User'));
    };
    return PreviewComponent;
}());
PreviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-preview',
        template: __webpack_require__("../../../../../src/app/company/generate-contract/preview/preview.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object])
], PreviewComponent);

var _a, _b, _c;
//# sourceMappingURL=preview.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/generate-contract/template/template.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"admin-dashbord\">\n\t<div class=\"container-fluid\">\n\t\t\t<app-company-sidemenu></app-company-sidemenu>\n        \n        <div class=\"col-sm-9 right-side text-center\">\n\t\t\t\t\t<h2>Select Template</h2>\n        \t<div class=\"contract \" *ngFor=\"let u of Template\" style=\"margin-top:28px;\">\n\t\t\t<div class=\"col-md-3 col-sm-3 boxt text-center\">\n\t\t\t<div class=\"templateimage\">\n\t\t\t<a (click)=\"onChange(u.idTemplate)\"><img class=\"img-responsive center-block\" src=\"assets/images/template.jpg\" draggable=\"false\"/></a>\n\t\t\t</div>\n\t\t\t<div class=\"caption\">\n\t\t\t<h3>{{u.Template_Name}}</h3>\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t</div>\n           </div>\n  </div>\n        <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n</section>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/company/generate-contract/template/template.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal__ = __webpack_require__("../../../../../src/app/modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__("../../../../../../config/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__config_config__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TemplateComponent = (function () {
    function TemplateComponent(router, http, toasterService) {
        this.router = router;
        this.http = http;
        this.toasterService = toasterService;
        this.contract = new __WEBPACK_IMPORTED_MODULE_3__modal__["b" /* Contract */]();
    }
    TemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.User_data = JSON.parse(localStorage.getItem('User'));
        if (this.User_data) {
            switch (this.User_data.User_Type) {
                case "Customer":
                    this.dashboard = 'customer';
                    break;
                case "Service Provider":
                    this.dashboard = 'serviceprovider';
                    break;
                case "Company":
                    this.dashboard = 'company';
                    break;
                case "Admin":
                    this.dashboard = 'admin';
                    break;
            }
            this.http.get('//' + __WEBPACK_IMPORTED_MODULE_5__config_config__["global_ip"] + '/pdf/getTemplates').subscribe(function (res) {
                _this.Template = JSON.parse(res._body).res;
            }, function (err) {
                console.log(err);
            });
        }
        else {
            console.log('ll');
        }
    };
    TemplateComponent.prototype.onChange = function (id) {
        var navigationExtras = {
            queryParams: {
                "TemplateID": id
            }
        };
        this.router.navigate(['/' + this.dashboard + "/generateContract"], navigationExtras);
    };
    return TemplateComponent;
}());
TemplateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-template',
        template: __webpack_require__("../../../../../src/app/company/generate-contract/template/template.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object])
], TemplateComponent);

var _a, _b, _c;
//# sourceMappingURL=template.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"admin-dashbord\" style=\"min-height: 698px;\">\n        <div class=\"container-fluid\">\n            <div class=\"container section-common\">\n            <h2 class=\"color-blue text-center\">Contact Us</h2>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since \n            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets\n            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since \n            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets\n            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since \n            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets\n            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                </div>\n                </div>\n            <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n</section>\n<app-footer></app-footer>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactUsComponent = (function () {
    function ContactUsComponent(http, router, toasterService) {
        this.http = http;
        this.router = router;
        this.User = ['Select User', 'Customer', 'Service_Provider', 'Company'];
        this.toasterService = toasterService;
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    return ContactUsComponent;
}());
ContactUsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-contact-us',
        template: __webpack_require__("../../../../../src/app/contact-us/contact-us.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object])
], ContactUsComponent);

var _a, _b, _c;
//# sourceMappingURL=contact-us.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer/customer.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"admin-dashbord\">\n\t<div class=\"container-fluid\">\n            <app-company-sidemenu></app-company-sidemenu>\n        <div class=\"col-sm-9 right-side\">\n          <div class=\"graph-tab customer-das\">\n              <div class=\"row\">\n                  <h3>Dashboard</h3>\n              </div>\n  <div class=\"tab-content\">\n   \n    <div id=\"menu2\" class=\"tab-pane fade in active\">\n      <div class=\"row date-frm\">\n        <div class=\"col-sm-2\">\n         <div class=\"input-group\">\n        <input class=\"form-control\" id=\"date\" name=\"date\" placeholder=\"From\" type=\"text\"/>\n        <div class=\"input-group-addon\">\n         <i class=\"fa fa-calendar\">\n         </i>\n        </div>\n       </div></div>\n        <div class=\"col-sm-2\">\n        \t<div class=\"input-group\">\n                <input class=\"form-control\" id=\"date\" name=\"date\" placeholder=\"To\" type=\"text\"/>\n                 <div class=\"input-group-addon\">\n                 <i class=\"fa fa-calendar\"></i>\n                </div>\n            </div>\n       </div>\n        <div class=\"col-sm-4\" style=\"padding-right:0;\">\n        \t<select class=\"form-control\">\n                <option>Services</option>\n                <!-- looping here -->\n            </select>\n        </div>\n        <div class=\"col-sm-4\">\n        \t<select class=\"form-control\">\n            \t<option>Company name</option>\n                <!-- looping here -->\n            </select>\n        </div>\n      </div>\n      <div class=\"table-responsive\">\n      \t<table class=\"table table-bordered\">\n        \t<thead>\n                <tr class=\"active\">\n                    <th>Contract ID</th>\n                    <th>Contract Title</th>\n                    <th>Contract Price</th>\n                    <th>Company/ Service Provider Name</th>\n                    <th>Services</th>\n                    <th>Start Date</th>\n                </tr>\n            </thead>\n            <tbody>\n                <!-- looping here -->\n            \t<tr>\n                \t<td>#110011</td>\n                    <td>Lump Sum Contract</td>\n                    <td>ETH 13542</td>\n                    <td>Construction Company</td>\n                    <td>Building material</td>\n                    <td>01/08/2017</td>\n                </tr>\n            </tbody>\n        </table>\n      </div>\n    </div>\n    <div id=\"menu3\" class=\"tab-pane fade\">\n      <h3>Menu 3</h3>\n      <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n    </div>\n  </div>\n  \n          </div>\n        </div>\n    </div>\n        <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n</section>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/customer/customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerComponent = (function () {
    function CustomerComponent(router) {
        this.router = router;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        this.User_data = JSON.parse(localStorage.getItem('User'));
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-customer',
        template: __webpack_require__("../../../../../src/app/customer/customer.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], CustomerComponent);

var _a;
//# sourceMappingURL=customer.component.js.map

/***/ }),

/***/ "../../../../../src/app/date-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DateFilterPipe = (function () {
    function DateFilterPipe() {
    }
    DateFilterPipe.prototype.transform = function (value, args) {
        var abc = new Date(value);
        var str = abc.getDate() + ':' + abc.getMonth() + ':' + abc.getFullYear();
        return str;
    };
    return DateFilterPipe;
}());
DateFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'dateFilter'
    })
], DateFilterPipe);

//# sourceMappingURL=date-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"admin-dashbord\" style=\"min-height: 698px;\">\n        <div class=\"container-fluid\">\n            <div class=\"container section-common\">\n            <h2 class=\"color-blue text-center\">FAQ</h2>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since \n            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets\n            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since \n            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets\n            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since \n            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                </div>\n               </div>\n            <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n    </section>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FAQComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FAQComponent = (function () {
    function FAQComponent(http, router, toasterService, fb) {
        this.http = http;
        this.router = router;
        this.toasterService = toasterService;
    }
    FAQComponent.prototype.ngOnInit = function () { };
    return FAQComponent;
}());
FAQComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-faq',
        template: __webpack_require__("../../../../../src/app/faq/faq.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === "function" && _d || Object])
], FAQComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=faq.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n<div class=\"container\">\n    <div class=\"footer-nav text-center\">  \n        <a routerLink=\"/\">Home</a>\n          <a routerLink=\"/about\">About</a>\n          <a routerLink=\"/services\">Services</a>\n          <a routerLink=\"/payment\">Payments Plans</a>\n          <a routerLink=\"/termsCondition\">Terms & Conditions</a>\n          <a routerLink=\"/privacy\">Privacy Policy</a>\n          <a routerLink=\"/blog\">Blog</a>\n          <a routerLink=\"/faq\">FAQ,s</a>\n          <a routerLink=\"/contact\">Contact Us</a>\n      </div>\n      <div class=\"text-center social-icon\">\n        <a routerLink=\"/\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n          <a routerLink=\"/\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\n          <a routerLink=\"/\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n      </div>\n  </div>\n</footer>\n<div class=\"copy-right\">\n<p class=\"text-center\">© Copyright 2017 Smart Contract Generator. All rights reserved.</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"myModal1111\">\n<div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-5 col-xs-5\"><img src=\"assets/images/login.jpg\" alt=\"signin\" class=\"img-responsive\"/></div>\n            <div class=\"col-sm-7 col-xs-7 form-area\">\n                <button class=\"close\" data-dismiss=\"modal\" (click)=\"formreset(heroForm1)\">X</button>\n                <h3>Login</h3>\n                <form (ngSubmit)=\"Login()\" #heroForm1=\"ngForm\">  \n                    <div class=\"form-group\">\n                    <label for=\"lemail\">Email</label>\n                    <input type=\"text\" class=\"form-control\" id=\"lemail\"\n                    required\n                    pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" \n                    [(ngModel)]=\"model.email\" name=\"lemail\"\n                    #lemail=\"ngModel\">\n                    <div [hidden]=\"lemail.valid || lemail.pristine\"\n                        class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                        <div class=\"ddddddd\" [hidden]=\"!lemail.hasError('required')\">Email is required</div>\n                        <div [hidden]=\"!lemail.hasError('pattern')\">Only alphabetsallowed</div>\n                    </div>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                    <label for=\"lpassword\">Password</label>\n                    <input type=\"password\" class=\"form-control\" id=\"lpassword\"\n                    required\n                    [(ngModel)]=\"model.password\" name=\"password\"\n                    #password=\"ngModel\">\n                    <div [hidden]=\"password.valid || password.pristine\"\n                        class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                        <div [hidden]=\"!password.hasError('required')\">Password is required</div>\n                    </div>\n                    </div>\n\n\n                    <div class=\"checkbox form-group\">\n                        <label>\n                            <input type=\"checkbox\"> <span style=\"font-weight:300;\">Remember me</span>\n                        </label>\n                        <a routerLink='/forgot' data-dismiss=\"modal\" aria-label=\"Close\" class=\"pull-right color-blue\">Forgot Password</a>\n                    </div>\n\n\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!heroForm1.form.valid\" >Submit</button>\n                </form>\n            </div>\n        </div>\n    </div>\n    </div>\n</div>\n</div>\n      \n<div class=\"modal fade\" id=\"myModal2222\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n        <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n            <div class=\"row\">\n                <div class=\"col-sm-5 col-xs-5 imag-ht\"><img src=\"assets/images/register.jpg\" alt=\"signin\" class=\"img-responsive\"/></div>\n                <div class=\"col-sm-7 col-xs-7 form-area\">\n                    <button class=\"close\" data-dismiss=\"modal\" (click)=\"formreset(heroForm)\">X</button>\n                    <h3>Register</h3>\n                    <div class=\"rgister-tab\">\n                        <div class=\"tab-content\">\n                        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"home\">\n                            <form (ngSubmit)=\"Register()\" #heroForm=\"ngForm\">  \n\n                                <div class=\"form-group\">\n                                <label>Select User Type<span style=\"color:red\">*</span></label>\n                                <select  class=\"form-control\" id=\"UserType\" required [(ngModel)]=\"model.user_type\" name=\"UserType\"\n                                #UserType=\"ngModel\">\n                                    <option [ngValue]=\"null\" disabled>Select User</option>\n                                    <option *ngFor=\"let u of User\">{{u}}</option>\n                                </select>\n                                </div>\n\n                                <div *ngIf=\"model.user_type=='Customer' || model.user_type=='Service Provider'\">\n\n                                        <div class=\"form-group\">\n                                                <label  for=\"firstname\">First Name<span style=\"color:red\">*</span></label>\n                                                <input type=\"text\" class=\"form-control\" id=\"firstname\"\n                                                required\n                                                maxlength=\"20\" \n                                                [(ngModel)]=\"model.firstname\" name=\"firstname\"\n                                                #firstname=\"ngModel\">\n                                                <div [hidden]=\"firstname.valid || firstname.pristine\"\n                                                    class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                                                    <div [hidden]=\"!firstname.hasError('required')\">FirstName is required</div>\n                                                </div>\n                                                </div>\n                \n                \n                                                <div class=\"form-group\">\n                                                <label for=\"lastname\">Last Name<span style=\"color:red\">*</span></label>\n                                                <input type=\"text\" class=\"form-control\" id=\"lastname\"\n                                                required\n                                                maxlength=\"20\" \n                                                [(ngModel)]=\"model.lastname\" name=\"lastname\"\n                                                #lastname=\"ngModel\">\n                                                <div [hidden]=\"lastname.valid || lastname.pristine\"\n                                                    class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                                                    <div [hidden]=\"!lastname.hasError('required')\">LastName is required</div>\n                                                </div>\n                                                </div>\n                \n                \n                                                <div class=\"form-group\">\n                                                <label for=\"email\">Email<span style=\"color:red\">*</span></label>\n                                                <input type=\"text\" class=\"form-control\" id=\"email\"\n                                                required\n                                                maxlength=\"50\" \n                                                pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" \n                                                [(ngModel)]=\"model.email\" name=\"email\"\n                                                #email=\"ngModel\">\n                                                <div [hidden]=\"email.valid || email.pristine\"\n                                                    class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                                                    <div class=\"ddddddd\" [hidden]=\"!email.hasError('required')\">Email is required</div>\n                                                    <div [hidden]=\"!email.hasError('pattern')\">Enter a Valid Email Pattern</div>\n                                                </div>\n                                                </div>\n                \n                \n                                                <div class=\"form-group\">\n                                                <label for=\"password\">Password<span style=\"color:red\">*</span></label>\n                                                <input type=\"password\" class=\"form-control\" id=\"password\"\n                                                required\n                                                maxlength=\"50\" \n                                                [(ngModel)]=\"model.password\" name=\"password\"\n                                                #password=\"ngModel\">\n                                                <div [hidden]=\"password.valid || password.pristine\"\n                                                    class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                                                    <div [hidden]=\"!password.hasError('required')\">Password is required</div>\n                                                </div>\n                                                </div>\n                \n                \n                                                <div class=\"form-group\">\n                                                <label for=\"phone\">Phone<span style=\"color:red\">*</span></label>\n                                                <input type=\"text\" class=\"form-control\" id=\"phone\"\n                                                required\n                                                pattern=\"[0-9]*\"\n                                                minlength=\"10\"\n                                                maxlength=\"10\" \n                                                [(ngModel)]=\"model.phone\" name=\"phone\"\n                                                #phone=\"ngModel\">\n                                                <div [hidden]=\"phone.valid || phone.pristine\"\n                                                    class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                                                    <div class=\"ddddddd\" [hidden]=\"!phone.hasError('required')\">Phone is required</div>\n                                                    <div class=\"ddddddd\" [hidden]=\"!phone.hasError('pattern')\">Only Numbers Are Allowed</div>\n                                                    <div [hidden]=\"!phone.hasError('minlength')\">Enter Atleast 10 Numbers</div>\n                                                </div>\n                                                </div>\n\n                                </div>\n\n                                <div *ngIf=\"model.user_type=='Company'\">\n                                        \n                                            <div class=\"form-group\">\n                                            <label for=\"firstname\">Company Name<span style=\"color:red\">*</span></label>\n                                            <input type=\"text\" class=\"form-control\" id=\"firstname\"\n                                            required\n                                            maxlength=\"20\" \n                                            [(ngModel)]=\"model.firstname\" name=\"firstname\"\n                                            #firstname=\"ngModel\">\n                                            <div [hidden]=\"firstname.valid || firstname.pristine\"\n                                                class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                                                <div [hidden]=\"!firstname.hasError('required')\">Company name is required</div>\n                                            </div>\n                                            </div>\n            \n            \n                                            <div class=\"form-group\">\n                                            <label for=\"email\">Email<span style=\"color:red\">*</span></label>\n                                            <input type=\"text\" class=\"form-control\" id=\"email\"\n                                            required\n                                            maxlength=\"50\" \n                                            pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" \n                                            [(ngModel)]=\"model.email\" name=\"email\"\n                                            #email=\"ngModel\">\n                                            <div [hidden]=\"email.valid || email.pristine\"\n                                                class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                                                <div class=\"ddddddd\" [hidden]=\"!email.hasError('required')\">Email is required</div>\n                                                <div [hidden]=\"!email.hasError('pattern')\">Enter a Valid Email Pattern</div>\n                                            </div>\n                                            </div>\n            \n            \n                                            <div class=\"form-group\">\n                                            <label for=\"password\">Password<span style=\"color:red\">*</span></label>\n                                            <input type=\"password\" class=\"form-control\" id=\"password\"\n                                            required\n                                            maxlength=\"50\" \n                                            [(ngModel)]=\"model.password\" name=\"password\"\n                                            #password=\"ngModel\">\n                                            <div [hidden]=\"password.valid || password.pristine\"\n                                                class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                                                <div [hidden]=\"!password.hasError('required')\">Password is required</div>\n                                            </div>\n                                            </div>\n            \n            \n                                            <div class=\"form-group\">\n                                            <label for=\"phone\">Phone<span style=\"color:red\">*</span></label>\n                                            <input type=\"text\" class=\"form-control\" id=\"phone\"\n                                            required\n                                            pattern=\"[0-9]*\"\n                                            minlength=\"10\"\n                                            maxlength=\"10\" \n                                            [(ngModel)]=\"model.phone\" name=\"phone\"\n                                            #phone=\"ngModel\">\n                                            <div [hidden]=\"phone.valid || phone.pristine\"\n                                                class=\"alert alert-danger\" style=\"margin-top:10px;\">\n                                                <div class=\"ddddddd\" [hidden]=\"!phone.hasError('required')\">Phone is required</div>\n                                                <div class=\"ddddddd\" [hidden]=\"!phone.hasError('pattern')\">Only Numbers Are Allowed</div>\n                                                <div class=\"ddddddd\" [hidden]=\"!phone.hasError('minlength')\">Enter Atleast 10 Numbers</div>\n                                            </div>\n                                            </div>\n\n                            </div>\n\n                                \n\n                                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!heroForm.form.valid\">Submit</button>\n                            </form>\n                        </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            </div>\n        </div>\n        </div>\n    </div>\n\n<header class=\"bs-docs-nav navbar navbar-static-top\" id=\"top\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button aria-controls=\"bs-navbar\" aria-expanded=\"false\" class=\"collapsed navbar-toggle\" data-target=\"#bs-navbar\" data-toggle=\"collapse\" type=\"button\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button>\n        <a routerLink='/' class=\"navbar-brand\"><img src=\"assets/images/logo.png\" alt=\"logo\"/></a> </div>\n      <nav class=\"collapse navbar-collapse\" id=\"bs-navbar\">\n        <ul class=\"nav navbar-nav navbar-right\">                    \n        <li><a routerLink=\"/about\" >About</a></li>\n        <li><a routerLink=\"/blog\" >Blog</a></li>\n        <li><a routerLink=\"/faq\" >FAQ,s</a></li>\n        <li *ngIf=\"User_data\"><a><span style=\"color:black;\">Welcome!</span> {{User_data.first_name}}</a></li>\n        <li *ngIf=\"!User_data\" class=\"signin\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1111\" (click)=\"formreset(heroForm1)\">Sign in</a></li>\n        <li *ngIf=\"!User_data\" class=\"getstrted\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal2222\" (click)=\"formreset(heroForm)\">Register</a></li>\n        <li *ngIf=\"User_data\" class=\"getstrted\">\n            <button class=\"btn btn-success\" (click)=\"Toggle()\">\n                <i class=\"fa fa-cog\" aria-hidden=\"true\"></i>\n            </button>\n            <ul id=\"dropdown\" style=\"position:absolute; display:none;\">\n                <li><a routerLink='/{{dashboard}}'><button class=\"btn btn-success\" style=\"width:150px;\">Dashboard</button></a></li>\n                <li><a routerLink='/{{dashboard}}/profile'><button class=\"btn btn-success\" style=\"width:150px;\">My Profile</button></a></li>\n                <li><a (click)=\"Logout()\" ><button class=\"btn btn-success\" style=\"width:150px;\">Logout</button></a></li>\n            </ul>\n        </li>\n        </ul>\n      </nav>\n    </div>\n  </header>\n  <div class=\"modal fade\" id=\"messageheader\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 class=\"modal-title\">Message</h4>\n        </div>\n        <div class=\"modal-body\">\n            <h4>Message! {{message}}</h4>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n        </div>\n        </div>\n    </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal__ = __webpack_require__("../../../../../src/app/modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__("../../../../../../config/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__config_config__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = (function () {
    function HeaderComponent(http, router, toasterService) {
        this.http = http;
        this.router = router;
        this.User = ['Customer', 'Service Provider', 'Company'];
        this.toasterService = toasterService;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__modal__["a" /* Modal */]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.User_data = JSON.parse(localStorage.getItem('User'));
        if (this.User_data) {
            switch (this.User_data.User_Type) {
                case "Customer":
                    this.dashboard = 'customer';
                    break;
                case "Service Provider":
                    this.dashboard = 'serviceprovider';
                    break;
                case "Company":
                    this.dashboard = 'company';
                    break;
                case "Admin":
                    this.dashboard = 'admin';
                    break;
            }
        }
        else {
            console.log('ll');
        }
    };
    HeaderComponent.prototype.Logout = function () {
        localStorage.clear();
        this.router.navigate(['/']);
        window.location.reload();
    };
    HeaderComponent.prototype.Toggle = function () {
        $("#dropdown").toggle();
    };
    HeaderComponent.prototype.formreset = function (f) {
        f.resetForm();
    };
    HeaderComponent.prototype.Login = function () {
        var _this = this;
        $('#myModal1111').modal('toggle');
        var obj = { email: this.model.email, password: this.model.password };
        this.http.post('//' + __WEBPACK_IMPORTED_MODULE_5__config_config__["global_ip"] + '/auth/login', obj).subscribe(function (res) {
            _this.model = {};
            var result = JSON.parse(res._body);
            if (result.status == 200) {
                localStorage.setItem("User", JSON.stringify(result.res[0]));
                switch (result.res[0].User_Type) {
                    case "Customer":
                        _this.router.navigate(['/customer']);
                        break;
                    case "Service Provider":
                        _this.router.navigate(['/serviceprovider']);
                        break;
                    case "Company":
                        _this.router.navigate(['/company']);
                        break;
                    case "Admin":
                        _this.router.navigate(['/admin']);
                        break;
                }
            }
            else if (result.status == 300) {
                _this.message = 'Email or Password do not Match';
                $('#messageheader').modal('toggle');
                setTimeout(function () {
                    $('#messageheader').modal('toggle');
                }, 2000);
            }
        }, function (err) {
            _this.message = err;
            $('#messageheader').modal('toggle');
            setTimeout(function () {
                $('#messageheader').modal('toggle');
            }, 2000);
        });
    };
    HeaderComponent.prototype.Register = function () {
        var _this = this;
        $('#myModal2222').modal('toggle');
        var obj;
        if (this.model.user_type == 'company') {
            obj = { firstname: this.model.firstname, lastname: 'Company', email: this.model.email,
                password: this.model.password, phone: this.model.phone, type: this.model.user_type };
        }
        else {
            obj = { firstname: this.model.firstname, lastname: this.model.lastname, email: this.model.email,
                password: this.model.password, phone: this.model.phone, type: this.model.user_type };
        }
        this.http.post('//' + __WEBPACK_IMPORTED_MODULE_5__config_config__["global_ip"] + '/auth/signup', obj).subscribe(function (res) {
            _this.model = {};
            var result = JSON.parse(res._body);
            if (result.status == 200) {
                _this.message = 'Registration Sucessfull';
                $('#messageheader').modal('toggle');
                setTimeout(function () {
                    $('#messageheader').modal('toggle');
                }, 1000);
            }
            else {
                _this.message = 'Registration UnSucessfull';
                $('#messageheader').modal('toggle');
                setTimeout(function () {
                    $('#messageheader').modal('toggle');
                }, 1000);
            }
        }, function (err) {
            _this.message = err;
            $('#messageheader').modal('toggle');
            setTimeout(function () {
                $('#messageheader').modal('toggle');
            }, 1000);
        });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return subscriptionPlan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Templates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Contract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Milestone; });
var Modal = (function () {
    function Modal() {
    }
    return Modal;
}());

var subscriptionPlan = (function () {
    function subscriptionPlan() {
    }
    return subscriptionPlan;
}());

var Templates = (function () {
    function Templates() {
    }
    return Templates;
}());

var Contract = (function () {
    function Contract() {
    }
    return Contract;
}());

var Template = (function () {
    function Template() {
    }
    return Template;
}());

var Milestone = (function () {
    function Milestone() {
    }
    return Milestone;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ "../../../../../src/app/payment-plans/payment-plans.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"admin-dashbord\" style=\"min-height: 698px;\">\n        <div class=\"container-fluid\">\n            <div class=\"container section-common\">\n            <h2 class=\"color-blue text-center\">Payment Plans</h2>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since \n            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets\n            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since \n            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets\n            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since \n            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets\n            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                </div>\n                </div>\n            <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n</section>\n<app-footer></app-footer>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/payment-plans/payment-plans.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal__ = __webpack_require__("../../../../../src/app/modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPlansComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaymentPlansComponent = (function () {
    function PaymentPlansComponent(http, router, toasterService) {
        this.http = http;
        this.router = router;
        this.User = ['Select User', 'Customer', 'Service_Provider', 'Company'];
        this.toasterService = toasterService;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__modal__["a" /* Modal */]();
    }
    PaymentPlansComponent.prototype.ngOnInit = function () {
    };
    return PaymentPlansComponent;
}());
PaymentPlansComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-payment-plans',
        template: __webpack_require__("../../../../../src/app/payment-plans/payment-plans.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object])
], PaymentPlansComponent);

var _a, _b, _c;
//# sourceMappingURL=payment-plans.component.js.map

/***/ }),

/***/ "../../../../../src/app/privacy-policy/privacy-policy.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"admin-dashbord\" style=\"min-height: 698px;\">\n        <div class=\"container-fluid\">\n            <div class=\"container section-common\">\n            <h2 class=\"color-blue text-center\">Privacy Policy</h2>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since \n            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets\n            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since \n            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets\n            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since \n            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets\n            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                </div>\n                </div>\n            <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n</section>\n<app-footer></app-footer>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/privacy-policy/privacy-policy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal__ = __webpack_require__("../../../../../src/app/modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PrivacyPolicyComponent = (function () {
    function PrivacyPolicyComponent(http, router, toasterService) {
        this.http = http;
        this.router = router;
        this.User = ['Select User', 'Customer', 'Service_Provider', 'Company'];
        this.toasterService = toasterService;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__modal__["a" /* Modal */]();
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
    };
    return PrivacyPolicyComponent;
}());
PrivacyPolicyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-privacy-policy',
        template: __webpack_require__("../../../../../src/app/privacy-policy/privacy-policy.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object])
], PrivacyPolicyComponent);

var _a, _b, _c;
//# sourceMappingURL=privacy-policy.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/admin-profile/admin-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>  \n<section>\n  <section class=\"admin-dashbord\">\n    <div class=\"container-fluid\">\n            <app-sidemenu></app-sidemenu>\n          <div class=\"col-sm-9 right-side\">\n            <h3>Manage Profile</h3>\n            <form (ngSubmit)=\"Update()\" #heroFormzzzzzz=\"ngForm\">  \n                <div class=\"form-group\">\n                <label  for=\"firstname\">First Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"firstname\"\n                required\n                [(ngModel)]=\"model.first_name\" name=\"firstname\"\n                #firstname=\"ngModel\">\n                <div [hidden]=\"firstname.valid || firstname.pristine\"\n                    class=\"alert alert-danger\">\n                    <div [hidden]=\"!firstname.hasError('required')\">FirstName is required</div>\n                </div>\n                </div>\n\n\n                <div class=\"form-group\">\n                <label for=\"lastname\">Last Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"lastname\"\n                required\n                [(ngModel)]=\"model.last_name\" name=\"lastname\"\n                #lastname=\"ngModel\">\n                <div [hidden]=\"lastname.valid || lastname.pristine\"\n                    class=\"alert alert-danger\">\n                    <div [hidden]=\"!lastname.hasError('required')\">LastName is required</div>\n                </div>\n                </div>\n\n\n                <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input type=\"text\" class=\"form-control\" id=\"email\"\n                required\n                pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" \n                [(ngModel)]=\"model.Email\" name=\"email\"\n                #email=\"ngModel\">\n                <div [hidden]=\"email.valid || email.pristine\"\n                    class=\"alert alert-danger\">\n                    <div [hidden]=\"!email.hasError('required')\">Email is required</div>\n                    <div [hidden]=\"!email.hasError('pattern')\">Only alphabetsallowed</div>\n                </div>\n                </div>\n\n\n                <div class=\"form-group\">\n                <label for=\"phone\">Phone</label>\n                <input type=\"text\" class=\"form-control\" id=\"phone\"\n                required\n                pattern=\"[0-9]*\"\n                minlength=\"10\"\n                maxlength=\"10\" \n                [(ngModel)]=\"model.Phone\" name=\"phone\"\n                #phone=\"ngModel\">\n                <div [hidden]=\"phone.valid || phone.pristine\"\n                    class=\"alert alert-danger\">\n                    <div [hidden]=\"!phone.hasError('required')\">Phone is required</div>\n                    <div [hidden]=\"!phone.hasError('pattern')\">Only Numbers Are Allowed</div>\n                    <div [hidden]=\"!phone.hasError('minlength')\">Enter Atleast 10 Numbers</div>\n                </div>\n                </div>\n\n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!heroFormzzzzzz.form.valid\">Update</button>\n            </form>\n          </div>\n      </div>\n          <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n  </section>\n</section>\n<app-footer></app-footer> \n\n"

/***/ }),

/***/ "../../../../../src/app/profile/admin-profile/admin-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal__ = __webpack_require__("../../../../../src/app/modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__("../../../../../../config/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__config_config__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminProfileComponent = (function () {
    function AdminProfileComponent(http, router) {
        this.http = http;
        this.router = router;
        this.User = ['Select User', 'Customer', 'Service_Provider', 'Company'];
        this.model = new __WEBPACK_IMPORTED_MODULE_3__modal__["a" /* Modal */]();
    }
    AdminProfileComponent.prototype.ngOnInit = function () {
        this.User_data = JSON.parse(localStorage.getItem('User'));
        this.model = this.User_data;
    };
    AdminProfileComponent.prototype.onChange = function (e) {
        this.model.user_type = e;
    };
    AdminProfileComponent.prototype.Update = function () {
        var obj = {
            firstname: this.model.firstname,
            lastname: this.model.lastname,
            email: this.model.email,
            password: this.model.password,
            phone: this.model.phone,
            type: this.model.user_type
        };
        this.http.post('//' + __WEBPACK_IMPORTED_MODULE_4__config_config__["global_ip"] + '/auth/ProfileUpdate', obj).subscribe(function (res) {
            window.location.reload();
        }, function (err) {
            console.log(err);
        });
    };
    return AdminProfileComponent;
}());
AdminProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-admin-profile',
        template: __webpack_require__("../../../../../src/app/profile/admin-profile/admin-profile.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AdminProfileComponent);

var _a, _b;
//# sourceMappingURL=admin-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>  \n<section>\n  <section class=\"admin-dashbord\">\n    <div class=\"container-fluid\">\n            <app-company-sidemenu></app-company-sidemenu>\n          \n          <div class=\"col-sm-9 right-side\">\n            <h3>Manage Profile</h3>\n            <form (ngSubmit)=\"Update()\" #heroFormzzzzzz=\"ngForm\">  \n                <div class=\"form-group\">\n                <label  for=\"firstname\">First Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"firstname\"\n                required\n                [(ngModel)]=\"model.first_name\" name=\"firstname\"\n                #firstname=\"ngModel\">\n                <div [hidden]=\"firstname.valid || firstname.pristine\"\n                    class=\"alert alert-danger\">\n                    <div [hidden]=\"!firstname.hasError('required')\">FirstName is required</div>\n                </div>\n                </div>\n\n\n                <div class=\"form-group\">\n                <label for=\"lastname\">Last Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"lastname\"\n                required\n                [(ngModel)]=\"model.last_name\" name=\"lastname\"\n                #lastname=\"ngModel\">\n                <div [hidden]=\"lastname.valid || lastname.pristine\"\n                    class=\"alert alert-danger\">\n                    <div [hidden]=\"!lastname.hasError('required')\">LastName is required</div>\n                </div>\n                </div>\n\n\n                <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input type=\"text\" class=\"form-control\" id=\"email\"\n                required\n                pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" \n                [(ngModel)]=\"model.Email\" name=\"email\"\n                #email=\"ngModel\">\n                <div [hidden]=\"email.valid || email.pristine\"\n                    class=\"alert alert-danger\">\n                    <div [hidden]=\"!email.hasError('required')\">Email is required</div>\n                    <div [hidden]=\"!email.hasError('pattern')\">Only alphabetsallowed</div>\n                </div>\n                </div>\n\n\n                <div class=\"form-group\">\n                <label for=\"phone\">Phone</label>\n                <input type=\"text\" class=\"form-control\" id=\"phone\"\n                required\n                pattern=\"[0-9]*\"\n                minlength=\"10\"\n                maxlength=\"10\" \n                [(ngModel)]=\"model.Phone\" name=\"phone\"\n                #phone=\"ngModel\">\n                <div [hidden]=\"phone.valid || phone.pristine\"\n                    class=\"alert alert-danger\">\n                    <div [hidden]=\"!phone.hasError('required')\">Phone is required</div>\n                    <div [hidden]=\"!phone.hasError('pattern')\">Only Numbers Are Allowed</div>\n                    <div [hidden]=\"!phone.hasError('minlength')\">Enter Atleast 10 Numbers</div>\n                </div>\n                </div>\n\n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!heroFormzzzzzz.form.valid\">Update</button>\n            </form>\n          </div>\n      </div>\n          <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n  </section>\n</section>\n<app-footer></app-footer> \n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal__ = __webpack_require__("../../../../../src/app/modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__("../../../../../../config/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__config_config__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(http, router) {
        this.http = http;
        this.router = router;
        this.User = ['Select User', 'Customer', 'Service_Provider', 'Company'];
        this.model = new __WEBPACK_IMPORTED_MODULE_3__modal__["a" /* Modal */]();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.User_data = JSON.parse(localStorage.getItem('User'));
        this.model = this.User_data;
    };
    ProfileComponent.prototype.onChange = function (e) {
        this.model.user_type = e;
    };
    ProfileComponent.prototype.Update = function () {
        var obj = {
            firstname: this.model.firstname,
            lastname: this.model.lastname,
            email: this.model.email,
            password: this.model.password,
            phone: this.model.phone,
            type: this.model.user_type
        };
        this.http.post('//' + __WEBPACK_IMPORTED_MODULE_4__config_config__["global_ip"] + '/auth/ProfileUpdate', obj).subscribe(function (res) {
            window.location.reload();
        }, function (err) {
            console.log(err);
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/routeGuard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerRouteGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CompanyRouteGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AdminRouteGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ServiceProviderRouteGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerRouteGuard = (function () {
    function CustomerRouteGuard(router) {
        this.router = router;
    }
    CustomerRouteGuard.prototype.canActivate = function () {
        this.User_data = JSON.parse(localStorage.getItem('User'));
        if (this.User_data && this.User_data.User_Type == 'Customer') {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    return CustomerRouteGuard;
}());
CustomerRouteGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], CustomerRouteGuard);

var CompanyRouteGuard = (function () {
    function CompanyRouteGuard(router) {
        this.router = router;
    }
    CompanyRouteGuard.prototype.canActivate = function () {
        this.User_data = JSON.parse(localStorage.getItem('User'));
        if (this.User_data && this.User_data.User_Type == 'Company') {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    return CompanyRouteGuard;
}());
CompanyRouteGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], CompanyRouteGuard);

var AdminRouteGuard = (function () {
    function AdminRouteGuard(router) {
        this.router = router;
    }
    AdminRouteGuard.prototype.canActivate = function () {
        this.User_data = JSON.parse(localStorage.getItem('User'));
        if (this.User_data && this.User_data.User_Type == 'Admin') {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    return AdminRouteGuard;
}());
AdminRouteGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], AdminRouteGuard);

var ServiceProviderRouteGuard = (function () {
    function ServiceProviderRouteGuard(router) {
        this.router = router;
    }
    ServiceProviderRouteGuard.prototype.canActivate = function () {
        this.User_data = JSON.parse(localStorage.getItem('User'));
        if (this.User_data && this.User_data.User_Type == 'Service Provider') {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    return ServiceProviderRouteGuard;
}());
ServiceProviderRouteGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], ServiceProviderRouteGuard);

var _a, _b, _c, _d;
//# sourceMappingURL=routeGuard.js.map

/***/ }),

/***/ "../../../../../src/app/service-provider/service-provider.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"admin-dashbord\">\n\t<div class=\"container-fluid\">\n            <app-company-sidemenu></app-company-sidemenu>\n        <div class=\"col-sm-9 right-side\">\n          <div class=\"graph-tab customer-das\">\n              <div class=\"row\">\n                  <h3>Service Provider Dashboard</h3>\n              </div>\n  <div class=\"tab-content\">\n    <div id=\"menu2\" class=\"tab-pane fade in active\">\n      <div class=\"row date-frm\">\n        <div class=\"col-sm-2\">\n         <div class=\"input-group\">\n        <input class=\"form-control\" id=\"date\" name=\"date\" placeholder=\"From\" type=\"text\"/>\n        <div class=\"input-group-addon\">\n         <i class=\"fa fa-calendar\">\n         </i>\n        </div>\n       </div></div>\n        <div class=\"col-sm-2\">\n        \t<div class=\"input-group\">\n                <input class=\"form-control\" id=\"date\" name=\"date\" placeholder=\"To\" type=\"text\"/>\n                 <div class=\"input-group-addon\">\n                 <i class=\"fa fa-calendar\"></i>\n                </div>\n            </div>\n       </div>\n        <div class=\"col-sm-4\" style=\"padding-right:0;\">\n        \t<select class=\"form-control\">\n                <option>Services</option>\n                <!-- looping here -->\n            </select>\n        </div>\n        <div class=\"col-sm-4\">\n        \t<select class=\"form-control\">\n            \t<option>Company name</option>\n                <!-- looping here -->\n            </select>\n        </div>\n      </div>\n      <div class=\"table-responsive\">\n      \t<table class=\"table table-bordered\">\n        \t<thead>\n                <tr class=\"active\">\n                    <th>Contract ID</th>\n                    <th>Contract Title</th>\n                    <th>Contract Price</th>\n                    <th>Company/ Service Provider Name</th>\n                    <th>Services</th>\n                    <th>Start Date</th>\n                </tr>\n            </thead>\n            <tbody>\n                <!-- looping here -->\n            \t<tr>\n                \t<td>#110011</td>\n                    <td>Lump Sum Contract</td>\n                    <td>ETH 13542</td>\n                    <td>Construction Company</td>\n                    <td>Building material</td>\n                    <td>01/08/2017</td>\n                </tr>\n            </tbody>\n        </table>\n      </div>\n    </div>\n    <div id=\"menu3\" class=\"tab-pane fade\">\n      <h3>Menu 3</h3>\n      <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n    </div>\n  </div>\n  \n          </div>\n        </div>\n    </div>\n        <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n</section>\n<app-footer></app-footer>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/service-provider/service-provider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProviderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServiceProviderComponent = (function () {
    function ServiceProviderComponent(router) {
        this.router = router;
    }
    ServiceProviderComponent.prototype.ngOnInit = function () {
        this.User_data = JSON.parse(localStorage.getItem('User'));
    };
    ServiceProviderComponent.prototype.Logout = function () {
        localStorage.clear();
        this.router.navigate(['/']);
    };
    return ServiceProviderComponent;
}());
ServiceProviderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-service-provider',
        template: __webpack_require__("../../../../../src/app/service-provider/service-provider.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], ServiceProviderComponent);

var _a;
//# sourceMappingURL=service-provider.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"admin-dashbord\" style=\"min-height: 698px;\">\n        <div class=\"container-fluid\">\n            <div class=\"container section-common\">\n            <h2 class=\"color-blue text-center\">Services</h2>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since \n            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets\n            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since \n            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets\n            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since \n            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets\n            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                </div>\n                </div>\n            <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n</section>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServicesComponent = (function () {
    function ServicesComponent(http, router, toasterService) {
        this.http = http;
        this.router = router;
        this.User = ['Select User', 'Customer', 'Service_Provider', 'Company'];
        this.toasterService = toasterService;
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    return ServicesComponent;
}());
ServicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-services',
        template: __webpack_require__("../../../../../src/app/services/services.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object])
], ServicesComponent);

var _a, _b, _c;
//# sourceMappingURL=services.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidemenu/company/company.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-3 left-side\" style=\"min-height: 698px;\"><aside>\n    <ul>\n        <li><i><img src=\"assets/images/view.png\" alt=\"icon\"/></i><a routerLink='/{{dashboard}}'>Dashboard</a></li>\n        <li><i><img src=\"assets/images/view.png\" alt=\"icon\"/></i><a routerLink=\"/{{dashboard}}/ViewContract\">Manage contracts</a></li>\n        <li><i><img src=\"assets/images/view.png\" alt=\"icon\"/></i><a>Ether Wallet</a></li>\n        <li id=\"settings1\" (click)=\"Toggle('settings')\"><i><img src=\"assets/images/manage.png\" alt=\"icon\"/></i><a style=\"cursor:pointer;\">Settings</a><span class=\"pull-right\" style=\"margin-right:15px;\"><img src=\"assets/images/plus.png\" alt=\"img\"/></span>\n        </li>\n        <li id=\"settings\" style=\"padding:0px; border:none;\">\n            <ul>\n                <li (click)=\"Routing('settings')\"><i><img src=\"assets/images/view.png\" alt=\"icon\"/></i><a routerLink=\"/{{dashboard}}/changepassword\">Change Password</a></li>\n                <li (click)=\"Routing('settings')\"><i><img src=\"assets/images/view.png\" alt=\"icon\"/></i><a routerLink=\"/{{dashboard}}/upgrade\">Upgrade Subscription</a></li>\n            </ul>\n        </li>\n    </ul>\n</aside></div>\n"

/***/ }),

/***/ "../../../../../src/app/sidemenu/company/company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidenavigation_service__ = __webpack_require__("../../../../../src/app/sidenavigation.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponentSideMenu; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyComponentSideMenu = (function () {
    function CompanyComponentSideMenu(sidenav) {
        this.sidenav = sidenav;
    }
    CompanyComponentSideMenu.prototype.ngOnInit = function () {
        this.openSideMenu = this.sidenav.GetRouting();
        for (var i = 0; i < this.openSideMenu.length; i++) {
            $('#' + this.openSideMenu[i] + ' ul').show();
        }
        this.User_data = JSON.parse(localStorage.getItem('User'));
        if (this.User_data) {
            switch (this.User_data.User_Type) {
                case "Customer":
                    this.dashboard = 'customer';
                    break;
                case "Service Provider":
                    this.dashboard = 'serviceprovider';
                    break;
                case "Company":
                    this.dashboard = 'company';
                    break;
                case "Admin":
                    this.dashboard = 'admin';
                    break;
            }
        }
        else {
            console.log('ll');
        }
    };
    CompanyComponentSideMenu.prototype.Toggle = function (id) {
        $('#' + id + ' ul').toggle();
        this.sidenav.sidenav(id);
    };
    return CompanyComponentSideMenu;
}());
CompanyComponentSideMenu = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-company-sidemenu',
        template: __webpack_require__("../../../../../src/app/sidemenu/company/company.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sidenavigation_service__["a" /* SidenavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sidenavigation_service__["a" /* SidenavigationService */]) === "function" && _a || Object])
], CompanyComponentSideMenu);

var _a;
//# sourceMappingURL=company.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidemenu/sidemenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-3 left-side\" style=\"min-height: 698px;\"><aside>\n    <ul>\n        <li><i><img src=\"assets/images/view.png\" alt=\"icon\"/></i><a routerLink='/{{dashboard}}'>Dashboard</a></li>\n        <li id=\"manageuser1\" (click)=\"Toggle('manageuser')\"><i><img src=\"assets/images/manage.png\" alt=\"icon\"/></i><a style=\"cursor:pointer;\">Manage User</a><span class=\"pull-right\" style=\"margin-right:15px;\"><img src=\"assets/images/plus.png\" alt=\"img\"/></span>\n        </li>\n        <li id=\"manageuser\" style=\"padding:0px; border:none;\">\n          <ul>\n            <li><i><img src=\"assets/images/admin-.png\" alt=\"icon\"/></i><a routerLink=\"/admin/manageservice\" >Manage Service Provider</a></li>\n            <li><i><img src=\"assets/images/manage.png\" alt=\"icon\"/></i><a routerLink=\"/admin/managecustomer\">Manage Customer</a></li>\n            <li><i><img src=\"assets/images/view.png\" alt=\"icon\"/></i><a routerLink='/admin/managecompany'>Manage Company</a></li>\n          </ul>\n        </li>\n        <li><i><img src=\"assets/images/admin-.png\" alt=\"icon\"/></i><a routerLink=\"/admin/reports\" >Admin Reports</a></li>\n        <li id=\"settings1\" (click)=\"Toggle('settings')\"><i><img src=\"assets/images/manage.png\" alt=\"icon\"/></i><a style=\"cursor:pointer;\">Settings</a><span class=\"pull-right\" style=\"margin-right:15px;\"><img src=\"assets/images/plus.png\" alt=\"img\"/></span>\n        </li>\n        <li id=\"settings\" style=\"padding:0px; border:none;\">\n          <ul>\n              <li><i><img src=\"assets/images/manage.png\" alt=\"icon\"/></i><a routerLink=\"/admin/managesubscription\">Manage Subscription Plan</a></li>\n              <li><i><img src=\"assets/images/manage-template.png\" alt=\"icon\"/></i><a routerLink=\"/admin/manageTemplate\">Manage Template</a></li> \n              <li><i><img src=\"assets/images/view.png\" alt=\"icon\"/></i><a routerLink='/admin/addCategory'>Manage Category</a></li>\n          </ul>\n        </li>\n    </ul>\n</aside></div>\n"

/***/ }),

/***/ "../../../../../src/app/sidemenu/sidemenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidenavigation_service__ = __webpack_require__("../../../../../src/app/sidenavigation.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidemenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidemenuComponent = (function () {
    function SidemenuComponent(sidenav) {
        this.sidenav = sidenav;
    }
    SidemenuComponent.prototype.ngOnInit = function () {
        this.openSideMenu = this.sidenav.GetRouting();
        for (var i = 0; i < this.openSideMenu.length; i++) {
            $('#' + this.openSideMenu[i] + ' ul').show();
        }
        this.User_data = JSON.parse(localStorage.getItem('User'));
        if (this.User_data) {
            switch (this.User_data.User_Type) {
                case "Customer":
                    this.dashboard = 'customer';
                    break;
                case "Service Provider":
                    this.dashboard = 'serviceprovider';
                    break;
                case "Company":
                    this.dashboard = 'company';
                    break;
                case "Admin":
                    this.dashboard = 'admin';
                    break;
            }
        }
        else {
            console.log('ll');
        }
    };
    SidemenuComponent.prototype.Toggle = function (id) {
        $('#' + id + ' ul').toggle();
        this.sidenav.sidenav(id);
    };
    return SidemenuComponent;
}());
SidemenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-sidemenu',
        template: __webpack_require__("../../../../../src/app/sidemenu/sidemenu.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sidenavigation_service__["a" /* SidenavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sidenavigation_service__["a" /* SidenavigationService */]) === "function" && _a || Object])
], SidemenuComponent);

var _a;
//# sourceMappingURL=sidemenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidenavigation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavigationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavigationService = (function () {
    function SidenavigationService() {
        this.routingComponent = [];
    }
    SidenavigationService.prototype.sidenav = function (id) {
        var self = this;
        if (self.routingComponent.length == 0) {
            self.routingComponent.push(id);
        }
        else {
            var pushvar = true;
            for (var i = 0; i < self.routingComponent.length; i++) {
                if (self.routingComponent[i] == id) {
                    self.routingComponent.splice(i, 1);
                    pushvar = false;
                }
            }
            if (pushvar) {
                self.routingComponent.push(id);
            }
        }
    };
    SidenavigationService.prototype.GetRouting = function () {
        return this.routingComponent;
    };
    return SidenavigationService;
}());
SidenavigationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SidenavigationService);

//# sourceMappingURL=sidenavigation.service.js.map

/***/ }),

/***/ "../../../../../src/app/termsand-condition/termsand-condition.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"admin-dashbord\" style=\"min-height: 698px;\">\n        <div class=\"container-fluid\">\n            <div class=\"container section-common\">\n            <h2 class=\"color-blue text-center\">Terms and Condition</h2>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since \n            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets\n            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since \n            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets\n            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since \n            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets\n            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                </div>\n                </div>\n            <a href=\"#\" class=\"footer-logo\"><img src=\"assets/images/footer-logo.png\" alt=\"logo-footer\"/></a>\n</section>\n<app-footer></app-footer>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/termsand-condition/termsand-condition.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsandConditionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TermsandConditionComponent = (function () {
    function TermsandConditionComponent(http, router, toasterService) {
        this.http = http;
        this.router = router;
        this.User = ['Select User', 'Customer', 'Service_Provider', 'Company'];
        this.toasterService = toasterService;
    }
    TermsandConditionComponent.prototype.ngOnInit = function () {
    };
    return TermsandConditionComponent;
}());
TermsandConditionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-termsand-condition',
        template: __webpack_require__("../../../../../src/app/termsand-condition/termsand-condition.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object])
], TermsandConditionComponent);

var _a, _b, _c;
//# sourceMappingURL=termsand-condition.component.js.map

/***/ }),

/***/ "../../../../../src/app/upgrade/upgrade.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"admin-dashbord\">\n        <div class=\"container-fluid\">\n            <app-company-sidemenu></app-company-sidemenu>\n            <div class=\"col-sm-9 right-side\">\n                <h2>Select Subscription Package</h2>\n              <div class=\"graph-tab customer-das\">\n                  <div class=\"row\" *ngFor=\"let u of Subscriptions\">\n                        <div class=\"well col-sm-3\" style=\"margin-left:20px;\">\n                            Package Price<p>{{u.packagePrice}}</p>\n                            Package Name<p>{{u.packageName}}</p>\n                            renewal Frequency<p>{{u.renewalFrequency}}</p>\n                            <button type=\"submit\" class=\"btn btn-success\" click=\"Upgrade(u.idSubscriptions)\">Submit</button>\n                        </div>\n                  </div>\n              </div>\n            </div>\n        </div>\n    </section>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/upgrade/upgrade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__("../../../../../../config/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config_config__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpgradeComponent = (function () {
    function UpgradeComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    UpgradeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.User_data = JSON.parse(localStorage.getItem('User'));
        if (this.User_data) {
            switch (this.User_data.User_Type) {
                case "Customer":
                    this.dashboard = 'customer';
                    break;
                case "Service_Provider":
                    this.dashboard = 'serviceprovider';
                    break;
                case "Company":
                    this.dashboard = 'company';
                    break;
                case "Admin":
                    this.dashboard = 'admin';
                    break;
            }
            var obj = {
                id: this.User_data.idUsers
            };
            this.http.post('//' + __WEBPACK_IMPORTED_MODULE_3__config_config__["global_ip"] + '/ApI/AdminviewSubscription', obj).subscribe(function (res) {
                _this.Subscriptions = JSON.parse(res._body).res;
            }, function (err) {
                console.log(err);
            });
        }
        else {
            console.log('ll');
        }
    };
    UpgradeComponent.prototype.Upgrade = function (id) {
        console.log(id);
    };
    return UpgradeComponent;
}());
UpgradeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-upgrade',
        template: __webpack_require__("../../../../../src/app/upgrade/upgrade.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], UpgradeComponent);

var _a, _b;
//# sourceMappingURL=upgrade.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map