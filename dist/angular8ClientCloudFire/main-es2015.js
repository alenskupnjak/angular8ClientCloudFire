(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar>Loading...</app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-client/add-client.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-client/add-client.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-6\">\n    <a routerLink=\"/\" class=\"btn btn-link\">\n      <i class=\"fa fa-arrow-circle-o-left\"></i> Back To Dashboard\n    </a>\n  </div>\n  <div class=\"col-md-6\">\n    <!-- namjerno stavljeno prazno za eventualno nesto dodatii -->\n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\">\n   Dodaj klijenta\n  </div>\n  <div class=\"card-body\">\n    <form #clientForm=\"ngForm\" (ngSubmit)=\"onSubmit(clientForm)\">\n      <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"firstName\"\n        #clientFirstName=\"ngModel\"\n        [ngClass]=\"{'is-invalid':clientFirstName.errors && clientFirstName.touched}\"\n        [(ngModel)]=\"client.firstName\"\n        minlength=\"2\"\n        required>\n\n        <div [hidden]=\"!clientFirstName.errors?.required\" class=\"invalid-feedback\">\n          First name required\n        </div>\n\n        <div [hidden]=\"!clientFirstName.errors?.minlength\" class=\"invalid-feedback\">\n          Must be at least 2 characters\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"lastName\"\n        #clientLastName=\"ngModel\"\n        [ngClass]=\"{'is-invalid':clientLastName.errors && clientLastName.touched}\"\n        [(ngModel)]=\"client.lastName\"\n        minlength=\"2\"\n        required>\n\n          <!--   (bootstrap class=\"invalid-feedback\")  -->\n        <div [hidden]=\"!clientLastName.errors?.required\" class=\"invalid-feedback\">\n          Last name required\n\n        </div>\n\n        <div [hidden]=\"!clientLastName.errors?.minlength\" class=\"invalid-feedback\">\n          Must be at least 2 characters\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"email\"\n        #clientEmail=\"ngModel\"\n        [ngClass]=\"{'is-invalid':clientEmail.errors && clientEmail.touched}\"\n        [(ngModel)]=\"client.email\"\n        pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n        required>\n\n        <div [hidden]=\"!clientEmail.errors?.required\" class=\"invalid-feedback\">\n          Email required\n        </div>\n\n        <div [hidden]=\"!clientEmail.errors?.pattern\" class=\"invalid-feedback\">\n          Email is not valid\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"phone\">Phone</label>\n        <input\n        type=\"text\"\n        class=\"form-control\"\n        [ngClass]=\"{'is-invalid':clientPhone.errors && clientPhone.touched}\"\n        [(ngModel)]=\"client.phone\"\n        name=\"phone\"\n        #clientPhone=\"ngModel\"\n        minlength=\"9\"\n        required>\n        <div [hidden]=\"!clientPhone.errors?.required\" class=\"invalid-feedback\">\n          Phone is required\n        </div>\n\n        <div [hidden]=\"!clientPhone.errors?.minlength\" class=\"invalid-feedback\">\n          Must be at least 9 characters\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"balance\">Balance</label>\n        <input\n        type=\"number\"\n        id='clientBalance'\n        class=\"form-control\"\n        [(ngModel)]=\"client.balance\"\n        name=\"balance\"\n        #clientBalance=\"ngModel\"\n        required\n        [disabled]=\"disableBalanceOnAdd\"\n        minlength=\"2\">\n\n        <div [hidden]=\"clientBalance.errors?.pattern\" class=\"invalid-feedback\">\n          Broj mora biti veći od 0!\n        </div>\n        <div *ngIf=\"!clientBalance.errors?.minlenght\" class=\"invalid-feedback\">\n          Broj mora biti veći od 0!\n        </div>\n        <div [hidden]=\"clientBalance.errors?.minlenght\" class=\"invalid-feedback\">\n          Broj mora biti veći od 0!\n        </div>\n\n      </div>\n\n\n      <!-- <input [disabled]=\"!clientForm.valid\" type=\"submit\" value=\"Submit\" class=\"btn btn-primary btn-block\"> -->\n      <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary btn-block\">\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/login/login.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/login/login.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h1 class=\"text-center pb-4 pt-3\">\n          <span class=\"text-primary\"><i class=\"fa fa-lock\"></i> Client Panel</span> Login\n        </h1>\n        <form (submit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input\n            type=\"email\"\n            name=\"email\"\n            [(ngModel)]=\"email\"\n            class=\"form-control\"\n            required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input\n            type=\"password\"\n            name=\"password\"\n            [(ngModel)]=\"password\"\n            class=\"form-control\"\n            required>\n          </div>\n          <input type=\"submit\" value=\"Login\" class=\"btn btn-primary btn-block\">\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/register/register.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/register/register.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h1 class=\"text-center pb-4 pt-3\">\n          <span class=\"text-primary\"><i class=\"fa fa-lock\"></i> Client Panel</span> Register\n        </h1>\n        <form (submit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input\n            type=\"email\"\n            name=\"email\"\n            [(ngModel)]=\"email\"\n            class=\"form-control\" required>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input\n              type=\"password\"\n              name=\"password\"\n              [(ngModel)]=\"password\" class=\"form-control\" required>\n          </div>\n          <input type=\"submit\" value=\"Register\" class=\"btn btn-primary btn-block\">\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/client-detail/client-detail.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/client-detail/client-detail.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\n  <div class=\"col-md-6\">\n    <a routerLink=\"/\" class=\"btn btn-link\">\n      <i class=\"fa fa-arrow-circle-o-left\"></i> Back to Dashboard\n    </a>\n  </div>\n\n  <div class=\"col-md-6\">\n    <div class=\"btn-group pull-right\">\n      <a routerLink=\"/client/edit/{{ id }}\" class=\"btn btn-dark\">\n        Edit\n      </a>\n      <button (click)=\"onDeleteClick()\" class=\"btn btn-danger\">Delete</button>\n    </div>\n  </div>\n\n\n</div>\n\n<hr>\n\n<div *ngIf=\"client\" class=\"card\">\n  <h3 class=\"card-header\">{{ client.firstName }} {{ client.lastName }}</h3>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"cold-md-8 col-sm-6\">\n        <h4>Client ID: {{ client.id }}</h4>\n      </div>\n      <div class=\"cold-md-8 col-sm-6\">\n        <h3 class=\"pull-right\">\n          Balance\n          Balance\n          <span [class.text-danger]=\"!hasBalance\" [class.text-success]=\"hasBalance\">\n            {{ client.balance | currency:\"USD\":\"symbol\" }}\n          </span>\n\n          <small>\n            <a (click)=\"showBalanceUpdateInput = !showBalanceUpdateInput\">\n              <i class=\"fa fa-pencil\"></i>\n            </a>\n            <!-- <button (click)=\"promjeni()\">\n            <i class=\"fa fa-pencil\"></i>\n          </button> -->\n          </small>\n        </h3>\n\n        <div class=\"clearfix\">\n          <!-- opcija bez programiranja !! -->\n          <form *ngIf=\"showBalanceUpdateInput\" (submit)=\"updateBalance()\">\n            <div class=\"input-group\">\n              <input type=\"text\" name=\"balance\" class=\"form-control\" [(ngModel)]=\"client.balance\">\n              <span class=\"input-group-btn\">\n                <button type=\"submit\" class=\"btn ptn-primary\">Update</button>\n              </span>\n            </div>\n          </form>\n        </div>\n\n      </div>\n    </div>\n\n    <hr>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">Contact Email: {{ client.email }}</li>\n      <li class=\"list-group-item\">Contact Phone: {{ client.phone }}</li>\n    </ul>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clients/clients.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/clients/clients.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h2><i class=\"fa fa-users\"></i> Clients</h2>\n  </div>\n  <div class=\"col-md-6\">\n    <h5 class=\"text-right text-secondary\">Total Owed: {{ totalOwed | currency:\"USD\":\"symbol\" }}</h5>\n  </div>\n</div>\n\n\n<!-- ako nema noClents, usnimava template.. -->\n<table *ngIf=\"clients?.length > 0;else noClients\" class=\"table table-striped\">\n  <!-- header -->\n  <thead class=\"thead-inverse\">\n    <tr>\n      <th style=\"width: 30%\">Name</th>\n      <th style=\"width: 30%\">Email</th>\n      <th style=\"width: 20%\">Balance</th>\n      <th></th>\n    </tr>\n  </thead>\n\n  <!-- podaci u tabli -->\n  <tbody>\n    <tr *ngFor=\"let client of clients\">\n      <td>{{ client.firstName }} {{ client.lastName }}</td>\n      <td>{{ client.email }}</td>\n      <td>{{ client.balance | currency:\"EUR\":\"symbol\" }}</td>\n      <td><a routerLink=\"client/{{ client.id }}\" class=\"btn btn-secondary btn-sm\"><i\n            class=\"fa fa-arrow-circle-o-right\"></i> Details</a></td>\n    </tr>\n  </tbody>\n</table>\n\n\n\n<!-- ako nema podataka prikazuje ovu poruku -->\n<ng-template #noClients>\n  <hr>\n  <h5>There are  <span class=\"text-danger\">no clients</span>  in the system</h5>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\n  <div class=\"col-md-10\">\n    <app-clients></app-clients>\n\n  </div>\n\n  <div class=\"col-md-2\">\n    <app-sidebar></app-sidebar>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-client/edit-client.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-client/edit-client.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-6\">\n    <a routerLink=\"/client/{{ id }}\" class=\"btn btn-link\">\n      <i class=\"fa fa-arrow-circle-o-left\"></i> Back To Client\n    </a>\n  </div>\n  <div class=\"col-md-6\">\n    <!--  -->\n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\">\n    Edit Client\n  </div>\n  <div class=\"card-body\">\n    <form #clientForm=\"ngForm\" (ngSubmit)=\"onSubmit(clientForm)\">\n      <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"firstName\"\n        #clientFirstName=\"ngModel\"\n        [ngClass]=\"{'is-invalid':clientFirstName.errors && clientFirstName.touched}\"\n        [(ngModel)]=\"client.firstName\"\n        minlength=\"2\"\n        required>\n        <div [hidden]=\"!clientFirstName.errors?.required\" class=\"invalid-feedback\">\n          First name required\n        </div>\n\n        <div [hidden]=\"!clientFirstName.errors?.minlength\" class=\"invalid-feedback\">\n          Must be at least 2 characters\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"lastName\"\n        #clientLastName=\"ngModel\"\n        [ngClass]=\"{'is-invalid':clientLastName.errors && clientLastName.touched}\"\n        [(ngModel)]=\"client.lastName\"\n        minlength=\"2\">\n\n        <div [hidden]=\"!clientLastName.errors?.required\" class=\"invalid-feedback\">\n          Last name required\n        </div>\n\n        <div [hidden]=\"!clientLastName.errors?.minlength\" class=\"invalid-feedback\">\n          Must be at least 2 characters\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"email\"\n        #clientEmail=\"ngModel\"\n        [ngClass]=\"{'is-invalid':clientEmail.errors && clientEmail.touched}\"\n        [(ngModel)]=\"client.email\"\n        pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n        required>\n\n        <div [hidden]=\"!clientEmail.errors?.required\" class=\"invalid-feedback\">\n          Email required\n        </div>\n\n        <div [hidden]=\"!clientEmail.errors?.pattern\" class=\"invalid-feedback\">\n          Email is not valid\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"phone\">Phone</label>\n        <input\n        type=\"text\"\n        class=\"form-control\"\n        [ngClass]=\"{'is-invalid':clientPhone.errors && clientPhone.touched}\"\n        [(ngModel)]=\"client.phone\"\n        name=\"phone\"\n        #clientPhone=\"ngModel\"\n        minlength=\"10\"\n        required>\n        <div [hidden]=\"!clientPhone.errors?.required\" class=\"invalid-feedback\">\n          Phone is required\n        </div>\n\n        <div [hidden]=\"!clientPhone.errors?.minlength\" class=\"invalid-feedback\">\n          Must be at least 10 characters\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"balance\">Balance</label>\n        <input\n        type=\"number\"\n        class=\"form-control\"\n        [(ngModel)]=\"client.balance\"\n        name=\"balance\"\n        #clientBalance=\"ngModel\"\n        [disabled]=\"disableBalanceOnEdit\">\n      </div>\n\n      <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary btn-block\">\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-dark bg-primary mb-4\">\n  <div class=\"container\">\n    <a routerLink=\"/\" class=\"navbar-brand\">ClientPanel</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarMain\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarMain\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a routerLink=\"/\" class=\"nav-link\">Dashboard</a>\n        </li>\n      </ul>\n\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a routerLink=\"/dod1\" class=\"nav-link\">Dodano 1</a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"/dod2\" class=\"nav-link\">Dodano 2</a>\n        </li>\n      </ul>\n\n      <ul class=\"navbar-nav ml-auto\">\n        <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n          <a href=\"\" class=\"nav-link\">{{ loggedInUser}}</a>\n        </li>\n        <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n          <a routerLink=\"/settings\" class=\"nav-link\">Setings</a>\n        </li>\n        <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n          <a href=\"\" (click)=\"onLogout()\" class=\"nav-link\">Logout</a>\n        </li>\n        <li *ngIf=\"!isLoggedIn && showRegister\"  class=\"nav-item\">\n          <a routerLink=\"/register\" class=\"nav-link\">Register</a>\n        </li>\n        <li *ngIf=\"!isLoggedIn && showRegister\" class=\"nav-item\">\n          <a routerLink=\"/login\" class=\"nav-link\">Login</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Nisam pronasao stranicu</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/settings.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/settings.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-nd-6\">\n    <a routerLink=\"/\" class=\"btn btn-link\">\n      <i class=\"fa fa-arrow-circle-o-left\">Back to Dashboard</i>\n    </a>\n  </div>\n\n  <div class=\"col-md-6\">\n\n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\">\n    Edit Settings\n  </div>\n  <div class=\"card-body\">\n    <form (submit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label>Allow Registration</label>\n        <input\n        type=\"checkbox\"\n        name=\"allowRegistration\"\n        [checked]=\"settings.allowRegistration\"\n\n\n\n        (change)=\"settings.allowRegistration = !settings.allowRegistration\"\n        >\n      </div>\n\n      <div class=\"form-group\">\n        <label>Disable Balance On Add</label>\n        <input\n        type=\"checkbox\"\n        name=\"disableBalanceOnAdd\"\n        [checked]=\"settings.disableBalanceOnAdd\"\n        (change)=\"settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd\"\n        >\n      </div>\n\n      <div class=\"form-group\">\n        <label>Disable Balance On Edit</label>\n        <input\n        type=\"checkbox\"\n        name=\"disableBalanceOnEdit\"\n        [checked]=\"settings.disableBalanceOnEdit\"\n        (change)=\"settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit\"\n        >\n      </div>\n\n      <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary btn-block\">\n    </form>\n  </div>\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a routerLink=\"/client/add\" class=\"btn btn-success btn-block\">\n  <i class=\"fa fa-plus\"></i> New\n</a>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/add-client/add-client.component */ "./src/app/components/add-client/add-client.component.ts");
/* harmony import */ var _components_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/client-detail/client-detail.component */ "./src/app/components/client-detail/client-detail.component.ts");
/* harmony import */ var _components_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/edit-client/edit-client.component */ "./src/app/components/edit-client/edit-client.component.ts");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/auth/register/register.component */ "./src/app/components/auth/register/register.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _services_register_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/register.guard */ "./src/app/services/register.guard.ts");











// GUARDS


const routes = [
    { path: "", component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: "login", component: _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    {
        path: "register",
        component: _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
        canActivate: [_services_register_guard__WEBPACK_IMPORTED_MODULE_12__["RegisterGuard"]],
    },
    {
        path: "client/add",
        component: _components_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_4__["AddClientComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
    },
    {
        path: "client/edit/:id",
        component: _components_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_6__["EditClientComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
    },
    {
        path: "client/:id",
        component: _components_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_5__["ClientDetailComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
    },
    { path: "settings", component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    // '**' mora biti zadnji u nizu
    { path: "**", component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"], _services_register_guard__WEBPACK_IMPORTED_MODULE_12__["RegisterGuard"]],
    })
], AppRoutingModule);

// Using MULTUPLE guards for a route in Angular
// The canActivate( ) method which should be overridden, should return only one of the following types
//  - Observable<boolean>
//  - Promise<boolean>
//  - boolean
// The multiple routes work like an ‘&&’ condition in javascript, i.e., angular won’t execute the later guards, if the first one fails.


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular8ClientCloudFire';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_Forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/Forms */ "./node_modules/@angular/Forms/fesm2015/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/clients/clients.component */ "./src/app/components/clients/clients.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/add-client/add-client.component */ "./src/app/components/add-client/add-client.component.ts");
/* harmony import */ var _components_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/edit-client/edit-client.component */ "./src/app/components/edit-client/edit-client.component.ts");
/* harmony import */ var _components_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/client-detail/client-detail.component */ "./src/app/components/client-detail/client-detail.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_auth_auth_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/auth/auth.module */ "./src/app/components/auth/auth.module.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/settings.service */ "./src/app/services/settings.service.ts");





















// servisi



let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
            _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_12__["ClientsComponent"],
            _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"],
            _components_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_14__["AddClientComponent"],
            _components_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_15__["EditClientComponent"],
            _components_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_16__["ClientDetailComponent"],
            _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__["SettingsComponent"],
            _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebaseConfig, "cloudFirestore"),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
            _components_auth_auth_module__WEBPACK_IMPORTED_MODULE_20__["AuthModule"],
            _angular_Forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__["FlashMessagesModule"].forRoot(),
        ],
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"], _services_client_service__WEBPACK_IMPORTED_MODULE_22__["ClientService"], _services_settings_service__WEBPACK_IMPORTED_MODULE_23__["SettingsService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/add-client/add-client.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/add-client/add-client.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWNsaWVudC9hZGQtY2xpZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/add-client/add-client.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/add-client/add-client.component.ts ***!
  \***************************************************************/
/*! exports provided: AddClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClientComponent", function() { return AddClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");






// obavezno dodati {FormsModule} za template driven formu !!!!!
let AddClientComponent = class AddClientComponent {
    constructor(flashMessage, clientService, router, settingsService) {
        this.flashMessage = flashMessage;
        this.clientService = clientService;
        this.router = router;
        this.settingsService = settingsService;
        // init client
        this.client = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            balance: 0,
        };
    }
    ngOnInit() {
        console.log('ajmooo', this.settingsService.getSettings());
        this.disableBalanceOnAdd = this.settingsService.getSettings().disableBalanceOnAdd;
    }
    onSubmit(formData) {
        if (this.disableBalanceOnAdd) {
            formData.value.balance = 0;
        }
        this.client = {
            firstName: formData.value.firstName,
            lastName: formData.value.lastName,
            email: formData.value.email,
            phone: formData.value.phone,
            balance: formData.value.balance,
        };
        if (formData.value.balance < 0) {
            console.log("Mora biti veci od 0");
        }
        if (!formData.valid) {
            // Show error
            this.flashMessage.show("Please fill out the form correctly", {
                cssClass: "alert-danger",
                timeout: 4000,
            });
        }
        else {
            // Add new client
            this.clientService.newClient(this.client);
            // Show message
            this.flashMessage.show("New client added", {
                cssClass: "alert-success",
                timeout: 4000,
            });
            // Redirect to dash
            this.router.navigate(["/"]); // za ovo import { Router } from "@angular/router";
        }
    }
};
AddClientComponent.ctorParameters = () => [
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] },
    { type: _services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("clientForm", { static: true })
], AddClientComponent.prototype, "form", void 0);
AddClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-client",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-client.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-client/add-client.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-client.component.css */ "./src/app/components/add-client/add-client.component.css")).default]
    })
], AddClientComponent);



/***/ }),

/***/ "./src/app/components/auth/auth.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/auth/auth.module.ts ***!
  \************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/components/auth/register/register.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



 // za  [(ngModel)] Template driven forme



let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
        ],
    })
], AuthModule);



/***/ }),

/***/ "./src/app/components/auth/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/auth/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");





let LoginComponent = class LoginComponent {
    constructor(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ngOnInit() {
        this.authService.getAuth().subscribe((auth) => {
            if (auth) {
                this.router.navigate(["/"]);
            }
        });
    }
    onSubmit() {
        this.authService
            .login(this.email, this.password)
            .then((res) => {
            this.flashMessage.show("You are now logged in", {
                cssClass: "alert-success",
                timeout: 4000,
            });
            this.router.navigate(["/"]);
        })
            .catch((err) => {
            console.log(err);
            this.flashMessage.show(err.message, {
                cssClass: "alert-danger",
                timeout: 4000,
            });
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/auth/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/auth/register/register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/auth/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegisterComponent = class RegisterComponent {
    constructor(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ngOnInit() { }
    onSubmit() {
        this.authService
            .register(this.email, this.password)
            .then((res) => {
            this.flashMessage.show("You are now registered and logged in", {
                cssClass: "alert-success",
                timeout: 4000,
            });
            this.router.navigate(["/"]);
        })
            .catch((err) => {
            this.flashMessage.show(err.message, {
                cssClass: "alert-danger",
                timeout: 4000,
            });
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-register",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/components/auth/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/components/client-detail/client-detail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/client-detail/client-detail.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50LWRldGFpbC9jbGllbnQtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/client-detail/client-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/client-detail/client-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: ClientDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailComponent", function() { return ClientDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





let ClientDetailComponent = class ClientDetailComponent {
    constructor(clientService, router, route, flashMessage) {
        this.clientService = clientService;
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
        this.hasBalance = false;
        this.showBalanceUpdateInput = false;
    }
    ngOnInit() {
        console.log('showBalanceUpdateInput', this.showBalanceUpdateInput);
        console.log(' hasBalance', this.hasBalance);
        // Get id from url PATH: client/:id
        this.id = this.route.snapshot.params["id"];
        // Povuci kljenta
        this.clientService.getOneClient(this.id).subscribe((client) => {
            console.log('--------');
            console.log(client);
            if (client != null) {
                if (client.balance > 0) {
                    this.hasBalance = true;
                }
            }
            // klijent definiran
            this.client = client;
        });
    }
    updateBalance() {
        this.clientService.updateClient(this.client);
        this.flashMessage.show('Balance updated', {
            cssClass: 'alert-success', timeout: 4000
        });
    }
    // obrisi klijenta
    onDeleteClick() {
        if (confirm('Are you sure?')) {
            this.clientService.deleteClient(this.client);
            this.flashMessage.show('Client removed', {
                cssClass: 'alert-success', timeout: 4000
            });
            this.router.navigate(['/']);
        }
    }
};
ClientDetailComponent.ctorParameters = () => [
    { type: _services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] }
];
ClientDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-client-detail",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/client-detail/client-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-detail.component.css */ "./src/app/components/client-detail/client-detail.component.css")).default]
    })
], ClientDetailComponent);



/***/ }),

/***/ "./src/app/components/clients/clients.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/clients/clients.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/clients/clients.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/clients/clients.component.ts ***!
  \*********************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/client.service */ "./src/app/services/client.service.ts");



let ClientsComponent = class ClientsComponent {
    constructor(clientsServices) {
        this.clientsServices = clientsServices;
    }
    ngOnInit() {
        this.clientsServices.getAllClient().subscribe((clients) => {
            this.clients = clients;
            this.getTotalOwed();
        });
    }
    getTotalOwed() {
        this.totalOwed = this.clients.reduce((total, client) => {
            return total + parseFloat(client.balance.toString());
        }, 0);
        console.log(this.totalOwed, this.totalOwed);
    }
};
ClientsComponent.ctorParameters = () => [
    { type: src_app_services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"] }
];
ClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-clients",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clients.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clients/clients.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clients.component.css */ "./src/app/components/clients/clients.component.css")).default]
    })
], ClientsComponent);



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/edit-client/edit-client.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/edit-client/edit-client.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1jbGllbnQvZWRpdC1jbGllbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/edit-client/edit-client.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/edit-client/edit-client.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditClientComponent", function() { return EditClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");






let EditClientComponent = class EditClientComponent {
    constructor(clientService, router, route, flashMessage, settingsService) {
        this.clientService = clientService;
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
        this.settingsService = settingsService;
        this.client = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            balance: 0,
        };
    }
    ngOnInit() {
        // definiramo u settingsu, pocetno inicijalno stanje pojedinh parametara
        this.disableBalanceOnEdit = this.settingsService.getSettings().disableBalanceOnEdit;
        // Get id from url
        this.id = this.route.snapshot.params["id"];
        // Get client
        this.clientService.getOneClient(this.id).subscribe((client) => {
            console.log(client);
            this.client = client;
        });
    }
    onSubmit(formData) {
        console.log("formData=", formData);
        console.log("this", this);
        console.log("this.id", this.id);
        console.log("formData.value=", formData.value);
        console.log("formData.value=", formData.value.id);
        this.client = {
            firstName: formData.value.firstName,
            lastName: formData.value.lastName,
            email: formData.value.email,
            phone: formData.value.phone,
            balance: formData.value.balance,
        };
        if (!formData.valid) {
            // ugradena funkcija angular2...
            this.flashMessage.show("Please fill out the form correctly", {
                cssClass: "alert-danger",
                timeout: 4000,
            });
        }
        else {
            // Add id to client
            this.client.id = this.id;
            // Update client
            this.clientService.updateClient(this.client);
            this.flashMessage.show("Client updated", {
                cssClass: "alert-success",
                timeout: 4000,
            });
            this.router.navigate(["/client/" + this.id]);
        }
    }
};
EditClientComponent.ctorParameters = () => [
    { type: _services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] },
    { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] }
];
EditClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-edit-client",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-client.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-client/edit-client.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-client.component.css */ "./src/app/components/edit-client/edit-client.component.css")).default]
    })
], EditClientComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);






let NavbarComponent = class NavbarComponent {
    constructor(authService, router, flashMessage, settingService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.settingService = settingService;
    }
    ngOnInit() {
        // definiramo u settingsu, pocetno inicijalno stanje pojedinh parametara
        this.showRegister = this.settingService.getSettings().allowRegistration;
        // fire base sprema  auth- podatke u Indexdb local-storage....
        this.authService.getAuth().subscribe((auth) => {
            if (auth) {
                this.isLoggedIn = true;
                this.loggedInUser = auth.email;
                console.log(this.loggedInUser);
            }
            else {
                this.isLoggedIn = false;
            }
        });
    }
    onLogout() {
        this.authService.logout();
        this.flashMessage.show("You are logged out", {
            cssClass: "alert-sucess",
            timeout: 4000,
        });
        this.router.navigate(["/login"]);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"] },
    { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-navbar",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/components/settings/settings.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/settings/settings.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");




let SettingsComponent = class SettingsComponent {
    constructor(flashMessage, settingsService) {
        this.flashMessage = flashMessage;
        this.settingsService = settingsService;
    }
    ngOnInit() {
        this.settings = this.settingsService.getSettings();
        this.vrijednosti();
    }
    onSubmit() {
        this.settingsService.changeSettings(this.settings);
        this.flashMessage.show("Settings saved", {
            cssClass: "alert-success",
            timeout: 4000,
        });
    }
    vrijednosti() {
        console.log(this.settings);
    }
};
SettingsComponent.ctorParameters = () => [
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"] },
    { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-settings",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/settings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.css */ "./src/app/components/settings/settings.component.css")).default]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")).default]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthGuard = class AuthGuard {
    constructor(router, angularFirebaseAuth) {
        this.router = router;
        this.angularFirebaseAuth = angularFirebaseAuth;
    }
    canActivate() {
        return this.angularFirebaseAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((auth) => {
            if (!auth) {
                this.router.navigate(["/login"]);
                return false;
            }
            else {
                return true;
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);

// dodati u app-routing.module.ts
// ....providers: [AuthGuard], // obavezno ovdje dodajemo zastitu za rute ako to zelimo


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let AuthService = class AuthService {
    constructor(afAuth) {
        this.afAuth = afAuth;
        console.log('da da da   AuthService');
    }
    // logiranje korisnika
    login(email, password) {
        return new Promise((resolve, reject) => {
            // sign je ispušten u zadnjim u verziji
            this.afAuth.signInWithEmailAndPassword(email, password).then((userData) => {
                console.log(userData);
                return resolve(userData);
            }, (err) => reject(err));
        });
    }
    // registracija korisnika
    register(email, password) {
        return new Promise((resolve, reject) => {
            this.afAuth.createUserWithEmailAndPassword(email, password).then((userData) => {
                return resolve(userData);
            }, (err) => reject(err));
        });
    }
    getAuth() {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((auth) => {
            console.log(auth, "auth xxxxxxxxxxxxxxxxxxx");
            return auth;
        }));
    }
    logout() {
        this.afAuth.signOut();
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/services/client.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/client.service.ts ***!
  \********************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let ClientService = class ClientService {
    constructor(
    // kljucni parametar koji aktivira Firebase
    firestoreData) {
        this.firestoreData = firestoreData;
        console.log('**** Ovo se aktivira samo prvi puta kada dolazim u aplikaciju **********');
        // inicijalizacije baze
        this.clientsCollection = this.firestoreData.collection("databaseClients", (ref) => ref.orderBy("lastName", "asc"));
    }
    // Povuci podatke o klijentima iz baze
    getAllClient() {
        // Get clients with the id
        console.log("this.clientsCollection=", this.clientsCollection);
        this.clients = this.clientsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((changes, ind) => {
            console.log(ind, "changes=", changes);
            return changes.map((action, index) => {
                console.log(index, "action", action.payload.doc);
                const data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
        console.log("this.clients=", this.clients);
        return this.clients;
    }
    //
    // dodavanje novog klijenta
    newClient(client) {
        this.clientsCollection.add(client);
    }
    //
    // Dohvati jednog klijenta
    getOneClient(id) {
        this.clientDoc = this.firestoreData.doc(`databaseClients/${id}`);
        console.log("this.clientDoc=", this.clientDoc);
        this.client = this.clientDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((action) => {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                const data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
        return this.client;
    }
    //
    // brisanje klijenta
    deleteClient(client) {
        this.clientDoc = this.firestoreData.doc(`databaseClients/${client.id}`);
        this.clientDoc.delete();
    }
    // updatiramo klijenta
    updateClient(client) {
        // databaseClients je naziv baze!
        this.clientDoc = this.firestoreData.doc(`databaseClients/${client.id}`);
        this.clientDoc.update(client);
    }
};
ClientService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ClientService);



/***/ }),

/***/ "./src/app/services/register.guard.ts":
/*!********************************************!*\
  !*** ./src/app/services/register.guard.ts ***!
  \********************************************/
/*! exports provided: RegisterGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterGuard", function() { return RegisterGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/settings.service */ "./src/app/services/settings.service.ts");




let RegisterGuard = class RegisterGuard {
    constructor(router, settingService) {
        this.router = router;
        this.settingService = settingService;
    }
    canActivate() {
        if (this.settingService.getSettings().allowRegistration) {
            return true;
        }
        else {
            this.router.navigate(["/login"]);
            return false;
        }
    }
};
RegisterGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] }
];
RegisterGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], RegisterGuard);

// dodati u app-routing.module.ts
// providers: [....,RegisterGuard,...],
// obavezno ovdje dodajemo zastitu za rute ako to zelimo


/***/ }),

/***/ "./src/app/services/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsService = 
// pocetno stanje
class SettingsService {
    constructor() {
        // pocetna vrijenost ako nema zapisa u local storage
        this.settings = {
            allowRegistration: true,
            disableBalanceOnAdd: true,
            disableBalanceOnEdit: true,
        };
        console.log(' da da da SettingsService');
        if (localStorage.getItem("settingsAngularClient") != null) {
            this.settings = JSON.parse(localStorage.getItem("settingsAngularClient"));
        }
    }
    getSettings() {
        return this.settings;
    }
    changeSettings(settings) {
        localStorage.setItem("settingsAngularClient", JSON.stringify(settings));
    }
};
SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    // pocetno stanje
], SettingsService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDm_wjyGn5sSAVxwKI4CNBRelLrVXguKoE",
        authDomain: "cloudfirestore-9984e.firebaseapp.com",
        databaseURL: "https://cloudfirestore-9984e.firebaseio.com",
        projectId: "cloudfirestore-9984e",
        storageBucket: "cloudfirestore-9984e.appspot.com",
        messagingSenderId: "1050125717014",
        appId: "1:1050125717014:web:e74f6e20ee952191fb6f37",
        measurementId: "G-X7X8NKGF1W",
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\angular8ClientCloudFire\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map