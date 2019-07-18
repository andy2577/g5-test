(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_page_blocks_page_blocks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/page-blocks/page-blocks.component */ "./src/app/components/page-blocks/page-blocks.component.ts");
/* harmony import */ var _components_page_table_page_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page-table/page-table.component */ "./src/app/components/page-table/page-table.component.ts");
/* harmony import */ var _components_page_detail_page_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-detail/page-detail.component */ "./src/app/components/page-detail/page-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'blocks', component: _components_page_blocks_page_blocks_component__WEBPACK_IMPORTED_MODULE_2__["PageBlocksComponent"] },
    { path: 'table', component: _components_page_table_page_table_component__WEBPACK_IMPORTED_MODULE_3__["PageTableComponent"] },
    { path: 'detail/:login', component: _components_page_detail_page_detail_component__WEBPACK_IMPORTED_MODULE_4__["PageDetailComponent"] },
    { path: '**', redirectTo: 'blocks', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>Welcome to {{ title }}!</h1>\n</div>\n<div class=\"container\">\n  <app-navigation-bar></app-navigation-bar>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'g5-test';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");
/* harmony import */ var _components_page_blocks_page_blocks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page-blocks/page-blocks.component */ "./src/app/components/page-blocks/page-blocks.component.ts");
/* harmony import */ var _components_page_table_page_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page-table/page-table.component */ "./src/app/components/page-table/page-table.component.ts");
/* harmony import */ var _components_page_detail_page_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page-detail/page-detail.component */ "./src/app/components/page-detail/page-detail.component.ts");
/* harmony import */ var _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navigation-bar/navigation-bar.component */ "./src/app/components/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var _services_github_users_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/github-users.service */ "./src/app/services/github-users.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__["SearchBarComponent"],
                _components_page_blocks_page_blocks_component__WEBPACK_IMPORTED_MODULE_6__["PageBlocksComponent"],
                _components_page_table_page_table_component__WEBPACK_IMPORTED_MODULE_7__["PageTableComponent"],
                _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavigationBarComponent"],
                _components_page_detail_page_detail_component__WEBPACK_IMPORTED_MODULE_8__["PageDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ],
            providers: [
                _services_github_users_service__WEBPACK_IMPORTED_MODULE_10__["GithubUsersService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/navigation-bar/navigation-bar.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/navigation-bar/navigation-bar.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['./blocks']\" routerLinkActive=\"router-link-active\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['./blocks']\" routerLinkActive=\"router-link-active\" >Blocks Format</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['./table']\" routerLinkActive=\"router-link-active\" >Table Format</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navigation-bar/navigation-bar.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/navigation-bar/navigation-bar.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi1iYXIvbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/navigation-bar/navigation-bar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/navigation-bar/navigation-bar.component.ts ***!
  \***********************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent() {
    }
    NavigationBarComponent.prototype.ngOnInit = function () {
    };
    NavigationBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation-bar',
            template: __webpack_require__(/*! ./navigation-bar.component.html */ "./src/app/components/navigation-bar/navigation-bar.component.html"),
            styles: [__webpack_require__(/*! ./navigation-bar.component.scss */ "./src/app/components/navigation-bar/navigation-bar.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/components/page-blocks/page-blocks.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/page-blocks/page-blocks.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-search-bar (searchResults)=\"onSearchResults($event)\"></app-search-bar>\n\n<div class=\"container\">\n  <div class=\"card-deck\" *ngFor=\"let user of users\">\n    <div class=\"card\" style=\"width: 20rem;\">\n      <img class=\"card-img-top\" [src]=\"user.avatar_url\" alt=\"Card image cap\" />\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">{{ user.login }}</h4>\n        <p class=\"card-text\">\n          score: {{user.score}}\n        </p>\n        <a [routerLink]=\"['../detail', user.login]\" class=\"btn btn-primary\"\n          >See Details</a\n        >\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/page-blocks/page-blocks.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/page-blocks/page-blocks.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ibG9ja3MvcGFnZS1ibG9ja3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/page-blocks/page-blocks.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/page-blocks/page-blocks.component.ts ***!
  \*****************************************************************/
/*! exports provided: PageBlocksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageBlocksComponent", function() { return PageBlocksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageBlocksComponent = /** @class */ (function () {
    function PageBlocksComponent() {
    }
    PageBlocksComponent.prototype.ngOnInit = function () {
    };
    PageBlocksComponent.prototype.onSearchResults = function (items) {
        this.users = items;
    };
    PageBlocksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-blocks',
            template: __webpack_require__(/*! ./page-blocks.component.html */ "./src/app/components/page-blocks/page-blocks.component.html"),
            styles: [__webpack_require__(/*! ./page-blocks.component.scss */ "./src/app/components/page-blocks/page-blocks.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageBlocksComponent);
    return PageBlocksComponent;
}());



/***/ }),

/***/ "./src/app/components/page-detail/page-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/page-detail/page-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/page-detail/page-detail.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/page-detail/page-detail.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1kZXRhaWwvcGFnZS1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/page-detail/page-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/page-detail/page-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: PageDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageDetailComponent", function() { return PageDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageDetailComponent = /** @class */ (function () {
    function PageDetailComponent(route) {
        this.route = route;
    }
    PageDetailComponent.prototype.ngOnInit = function () {
        this.subToRoute = this.route.params.subscribe(function (param) {
            console.log(param);
        });
    };
    PageDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-detail',
            template: __webpack_require__(/*! ./page-detail.component.html */ "./src/app/components/page-detail/page-detail.component.html"),
            styles: [__webpack_require__(/*! ./page-detail.component.scss */ "./src/app/components/page-detail/page-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PageDetailComponent);
    return PageDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/page-table/page-table.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/page-table/page-table.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-search-bar (searchResults)=\"onSearchResults($event)\"></app-search-bar>\n\n<table *ngIf=\"users\" class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Score</th>\n      <th scope=\"col\">User Name</th>\n      <th scope=\"col\">Details</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let user of users; let i = index\" >\n      <th scope=\"row\">{{i + 1}}</th>\n      <td>{{user.score}}</td>\n      <td>{{user.login}}</td>\n      <td><a [routerLink]=\"['../detail', user.login]\" >details</a></td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/components/page-table/page-table.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/page-table/page-table.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS10YWJsZS9wYWdlLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/page-table/page-table.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/page-table/page-table.component.ts ***!
  \***************************************************************/
/*! exports provided: PageTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTableComponent", function() { return PageTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageTableComponent = /** @class */ (function () {
    function PageTableComponent() {
    }
    PageTableComponent.prototype.ngOnInit = function () {
    };
    PageTableComponent.prototype.onSearchResults = function (items) {
        this.users = items;
    };
    PageTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-table',
            template: __webpack_require__(/*! ./page-table.component.html */ "./src/app/components/page-table/page-table.component.html"),
            styles: [__webpack_require__(/*! ./page-table.component.scss */ "./src/app/components/page-table/page-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageTableComponent);
    return PageTableComponent;
}());



/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <link\n    rel=\"stylesheet\"\n    href=\"https://use.fontawesome.com/releases/v5.1.0/css/all.css\"\n    integrity=\"sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt\"\n    crossorigin=\"anonymous\"\n  />\n  <div class=\"container\">\n    <br />\n    <div class=\"row justify-content-center\">\n      <div class=\"col-12 col-md-10 col-lg-8\">\n        <form [formGroup]=\"search\" class=\"card card-sm\" (ngSubmit)=\"searchUsers(search.value)\" >\n          <div class=\"card-body row no-gutters align-items-center\">\n            <div class=\"col-auto\">\n              <i class=\"fas fa-search h4 text-body\"></i>\n            </div>\n            <div class=\"col\">\n              <input\n                class=\"form-control form-control-lg form-control-borderless\"\n                type=\"search\"\n                placeholder=\"Search Github users\"\n                formControlName=\"query\"\n              />\n            </div>\n            <div class=\"col-auto\">\n              <button class=\"btn btn-lg btn-success\" type=\"submit\">\n                Search\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<p *ngIf=\"totalResults\" >total records found: {{totalResults}} </p>\n"

/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_github_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/github-users.service */ "./src/app/services/github-users.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(gitService, fb) {
        this.gitService = gitService;
        this.fb = fb;
        this.searchResults = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchBarComponent.prototype.ngOnInit = function () {
        this.search = this.fb.group({
            query: ['', []]
        });
    };
    SearchBarComponent.prototype.ngOnDestroy = function () {
        if (this.subToSearch) {
            this.subToSearch.unsubscribe();
        }
    };
    SearchBarComponent.prototype.searchUsers = function (value) {
        var _this = this;
        var query = value.query;
        this.subToSearch = this.gitService.getUsers(query)
            .subscribe(function (result) {
            var total_count = result.total_count, items = result.items, incomplete_results = result.incomplete_results;
            _this.totalResults = total_count;
            _this.searchResults.emit(items);
        }, function (err) { return console.error(err); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SearchBarComponent.prototype, "searchResults", void 0);
    SearchBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/components/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.scss */ "./src/app/components/search-bar/search-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_github_users_service__WEBPACK_IMPORTED_MODULE_1__["GithubUsersService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/services/github-users.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/github-users.service.ts ***!
  \**************************************************/
/*! exports provided: GithubUsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubUsersService", function() { return GithubUsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GithubUsersService = /** @class */ (function () {
    function GithubUsersService(http) {
        this.http = http;
    }
    GithubUsersService.prototype.getUsers = function (q) {
        if (q === void 0) { q = ''; }
        return this.http.get("https://api.github.com/search/users?q=" + q + "&per_page=20");
    };
    GithubUsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GithubUsersService);
    return GithubUsersService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/home/node/g5-test/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map