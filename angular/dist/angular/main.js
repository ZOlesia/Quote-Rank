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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/all/all.component.css":
/*!***************************************!*\
  !*** ./src/app/all/all.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/all/all.component.html":
/*!****************************************!*\
  !*** ./src/app/all/all.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <p class=\"font-italic\" >We have quotes by: </p>\n  \n  <table class=\"table table-striped text-center\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Authors</th>\n        <th>Actions Available</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor = \"let a of allAuthors\">\n        <td>{{a.name}}</td>\n        <td>\n          <button routerLink = '/writers/quotes/{{a._id}}' class=\"btn btn-warning\" style=\"margin-right: 5px;\">View Quotes</button>\n          <button routerLink = '/writers/edit/{{a._id}}' class=\"btn btn-success\" style=\"margin-right: 5px;\">Edit</button>\n          <button class=\"btn btn-danger\" (click)=\"deleteAuthor(a._id)\">Delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <button [routerLink] = \"['/writers/new']\" class=\"btn btn-outline-info float-right\">Add an Author</button>\n"

/***/ }),

/***/ "./src/app/all/all.component.ts":
/*!**************************************!*\
  !*** ./src/app/all/all.component.ts ***!
  \**************************************/
/*! exports provided: AllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllComponent", function() { return AllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // dependency injection
var AllComponent = /** @class */ (function () {
    function AllComponent(_httpService) {
        this._httpService = _httpService;
    }
    AllComponent.prototype.ngOnInit = function () {
        this.showAll();
    };
    AllComponent.prototype.showAll = function () {
        var _this = this;
        var observable = this._httpService.showAuthors();
        observable.subscribe(function (data) {
            console.log(data);
            _this.allAuthors = data['authors'];
        });
    };
    AllComponent.prototype.deleteAuthor = function (id) {
        var _this = this;
        var observable = this._httpService.deleteOneAuthor(id);
        observable.subscribe(function (data) {
            console.log(data);
            _this.showAll();
        });
    };
    AllComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all',
            template: __webpack_require__(/*! ./all.component.html */ "./src/app/all/all.component.html"),
            styles: [__webpack_require__(/*! ./all.component.css */ "./src/app/all/all.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], AllComponent);
    return AllComponent;
}());



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
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");
/* harmony import */ var _all_all_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all/all.component */ "./src/app/all/all.component.ts");
/* harmony import */ var _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quotes/quotes.component */ "./src/app/quotes/quotes.component.ts");
/* harmony import */ var _new_quote_new_quote_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-quote/new-quote.component */ "./src/app/new-quote/new-quote.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'writers/new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_2__["NewComponent"] },
    { path: 'writers/edit/:id', component: _update_update_component__WEBPACK_IMPORTED_MODULE_3__["UpdateComponent"] },
    { path: 'writers', component: _all_all_component__WEBPACK_IMPORTED_MODULE_4__["AllComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/writers' },
    { path: 'writers/quotes/:id', component: _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_5__["QuotesComponent"] },
    { path: 'writers/quotes/new/:id', component: _new_quote_new_quote_component__WEBPACK_IMPORTED_MODULE_6__["NewQuoteComponent"] }
    // {path: '**', component: AllComponent}
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"text-right font-italic\" style=\"margin-right: 150px;\">Favorite Authors</h1>\n    <router-outlet></router-outlet>\n</div>\n"

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
 //Anything  we want the component to do when it is initialized should go in the ngOnInit method.
 //for the routes
var AppComponent = /** @class */ (function () {
    function AppComponent(
    // private _httpService: HttpService,
    //these 2 lines are for the routes
    _route, _router) {
        this._route = _route;
        this._router = _router;
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _all_all_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all/all.component */ "./src/app/all/all.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quotes/quotes.component */ "./src/app/quotes/quotes.component.ts");
/* harmony import */ var _new_quote_new_quote_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new-quote/new-quote.component */ "./src/app/new-quote/new-quote.component.ts");
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
                _all_all_component__WEBPACK_IMPORTED_MODULE_6__["AllComponent"],
                _update_update_component__WEBPACK_IMPORTED_MODULE_7__["UpdateComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_8__["NewComponent"],
                _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_9__["QuotesComponent"],
                _new_quote_new_quote_component__WEBPACK_IMPORTED_MODULE_10__["NewQuoteComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"] // <-- register FormsModule with our app.
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
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

 //Dependency injection
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    } //Dependency injection
    HttpService.prototype.showAuthors = function () {
        return this._http.get('/authors');
    };
    HttpService.prototype.addAuthor = function (newAuthor) {
        return this._http.post('/authors', newAuthor);
    };
    HttpService.prototype.showOne = function (id) {
        return this._http.get('/authors/' + id);
    };
    HttpService.prototype.editAuthor = function (updateAuthor, id) {
        return this._http.put('/authors/' + id, updateAuthor);
    };
    HttpService.prototype.deleteOneAuthor = function (id) {
        return this._http.delete('/authors/' + id);
    };
    HttpService.prototype.addQuote = function (id, newQuote) {
        return this._http.post('authors/' + id + '/quotes', newQuote);
    };
    HttpService.prototype.voteQuote = function (id, vote) {
        return this._http.put('/authors/quotes/' + id, vote);
    };
    HttpService.prototype.removeQuote = function (id) {
        return this._http.delete('/authors/quotes/' + id);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/new-quote/new-quote.component.css":
/*!***************************************************!*\
  !*** ./src/app/new-quote/new-quote.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-quote/new-quote.component.html":
/*!****************************************************!*\
  !*** ./src/app/new-quote/new-quote.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<form (submit)=\"addNewQuote()\" class=\"bg-light  mx-auto border border-info\" style=\"height: 400px; width: 400px;\">\n    <a href=\"\" [routerLink] = \"['/writers']\" class=\"float-right\" style = \"margin: 5px;\">Home</a>\n    <p style=\"margin: 75px 0 0 125px\" *ngIf=\"author\">Provide new Quote by {{author.name}}: </p>\n  <div class=\"form-group col-8 ml-50\" style=\"margin: auto; margin-top: 25px;\">\n      <label for=\"newQuote.content\">Content</label>\n      <input type=\"text\" class = \"form-control\" name=\"newQuote.content\" placeholder=\"Content..\" required minlength=\"3\"  [(ngModel)] = \"newQuote.content\" #content=\"ngModel\">\n  </div>\n  <div *ngIf = \"err\" class=\"alert alert-danger\">{{err}}</div>\n  <div *ngIf=\"content.invalid && (content.dirty || !content.untouched)\"\n  class=\"alert alert-danger\">\n    <div *ngIf=\"content.errors.required\">\n    Quote is required.\n    </div>\n    <div *ngIf=\"content.errors.minlength\">\n    Quote must be at least 3 characters long.\n    </div>\n  </div>\n  <input type=\"submit\" value=\"Add\" class=\"btn btn-success\" style=\"margin: 50px 20px 0px 130px;\" [disabled]=\"!content.valid\">\n  <button routerLink = '/writers/quotes/{{authorId}}' class=\"btn btn-primary\" style=\"margin-top: 50px;\">Cancel</button>\n</form>\n\n"

/***/ }),

/***/ "./src/app/new-quote/new-quote.component.ts":
/*!**************************************************!*\
  !*** ./src/app/new-quote/new-quote.component.ts ***!
  \**************************************************/
/*! exports provided: NewQuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewQuoteComponent", function() { return NewQuoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // dependency injection
 //for the routes
var NewQuoteComponent = /** @class */ (function () {
    function NewQuoteComponent(_httpService, 
    //these 2 lines are for the routes
    _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    NewQuoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.authorId = params['id'];
        });
        this.showAuthor(this.authorId);
        this.newQuote = { content: "" };
    };
    NewQuoteComponent.prototype.showAuthor = function (id) {
        var _this = this;
        var observable = this._httpService.showOne(this.authorId);
        observable.subscribe(function (data) {
            console.log(data);
            _this.author = data['author'];
            console.log("**********", _this.author);
        });
    };
    NewQuoteComponent.prototype.addNewQuote = function (id) {
        var _this = this;
        var observable = this._httpService.addQuote(this.authorId, this.newQuote);
        observable.subscribe(function (data) {
            if (data['err']) {
                console.log(data['err'].errors.content.message);
                _this.err = data['err'].errors.content.message;
                _this._router.navigate(['/writers/quotes/new/' + _this.authorId]);
            }
            else {
                console.log('AUTHORS ID IS HERE ', _this.authorId);
                console.log('NEW QUOTE IS HERE', data);
                _this.newQuote = { content: "" };
                _this._router.navigate(['/writers/quotes/' + _this.authorId]);
            }
        });
    };
    NewQuoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-quote',
            template: __webpack_require__(/*! ./new-quote.component.html */ "./src/app/new-quote/new-quote.component.html"),
            styles: [__webpack_require__(/*! ./new-quote.component.css */ "./src/app/new-quote/new-quote.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewQuoteComponent);
    return NewQuoteComponent;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<form (submit)=\"createAuthor()\" class=\"bg-light  mx-auto border border-info\" style=\"height: 400px; width: 400px;\">\n    <a href=\"\" [routerLink] = \"['/writers']\" class=\"float-right\" style = \"margin: 5px;\">Home</a>\n    <p style=\"margin: 75px 0 0 125px\">Add a new Author: </p>\n  <div class=\"form-group col-8 ml-50\" style=\"margin: auto; margin-top: 25px;\">\n      <label for=\"newAuthor.name\">Name</label>\n      <input type=\"text\" class = \"form-control\" name=\"newAuthor.name\" placeholder=\"Name..\" required minlength=\"3\"  [(ngModel)] = \"newAuthor.name\" #name=\"ngModel\">\n  </div>\n  <div *ngIf = \"err\" class=\"alert alert-danger\">{{err}}</div>\n  <div *ngIf=\"name.invalid && (name.dirty || !name.untouched)\"\n  class=\"alert alert-danger\">\n    <div *ngIf=\"name.errors.required\">\n    Name is required.\n    </div>\n    <div *ngIf=\"name.errors.minlength\">\n    Name must be at least 3 characters long.\n    </div>\n  </div>\n  <input type=\"submit\" value=\"Add\" class=\"btn btn-success\" style=\"margin: 50px 20px 0px 130px;\" [disabled]=\"!name.valid\">\n  <button [routerLink] = \"['/writers']\" class=\"btn btn-primary\" style=\"margin-top: 50px;\">Cancel</button>\n</form>\n\n\n \n      \n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // dependency injection
 //for the routes
var NewComponent = /** @class */ (function () {
    function NewComponent(_httpService, 
    //these 2 lines are for the routes
    _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    NewComponent.prototype.ngOnInit = function () {
        this.newAuthor = { name: "" };
    };
    NewComponent.prototype.createAuthor = function () {
        var _this = this;
        var observable = this._httpService.addAuthor(this.newAuthor);
        observable.subscribe(function (data) {
            console.log(data);
            if (!data['err']) {
                _this.newAuthor = { name: "" };
                _this._router.navigate(['/writers']);
            }
            else {
                _this.err = data['err'].errors.name.message;
                _this._router.navigate(['/writers/new']);
            }
        });
    };
    NewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/quotes/quotes.component.css":
/*!*********************************************!*\
  !*** ./src/app/quotes/quotes.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quotes/quotes.component.html":
/*!**********************************************!*\
  !*** ./src/app/quotes/quotes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf = \"selectedAuthor\">\n  <p class=\"font-italic\" >Quotes by {{selectedAuthor.name}}: </p>\n  <table class=\"table table-striped text-center\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Quote</th>\n        <th>Votes</th>\n        <th>Actions Available</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor = \"let quote of selectedAuthor.quotes\">\n        <td>{{quote.content}}</td>\n        <td>{{quote.vote}}</td>\n        <td>\n          <button class=\"btn btn-warning\" style=\"margin-right: 5px;\" (click) = \"voteUp(quote._id)\">Vote Up</button>\n          <button class=\"btn btn-success\" style=\"margin-right: 5px;\" (click) = \"voteDown(quote._id)\">Vote Down</button>\n          <button class=\"btn btn-danger\" (click) = \"deleteThisQuote(quote._id)\">Delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <button [routerLink] = \"['/writers']\" class=\"btn btn-outline-secondary\">Home</button>\n  <button class=\"btn btn-outline-info float-right\" routerLink = '/writers/quotes/new/{{selectedAuthor._id}}'>Add new Quote</button>\n</div>"

/***/ }),

/***/ "./src/app/quotes/quotes.component.ts":
/*!********************************************!*\
  !*** ./src/app/quotes/quotes.component.ts ***!
  \********************************************/
/*! exports provided: QuotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesComponent", function() { return QuotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // dependency injection
 //for the routes
var QuotesComponent = /** @class */ (function () {
    function QuotesComponent(_httpService, 
    //these 2 lines are for the routes
    _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    QuotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.authorId = params['id'];
        });
        this.showSelectedAuthor(this.authorId);
    };
    QuotesComponent.prototype.showSelectedAuthor = function (id) {
        var _this = this;
        var observable = this._httpService.showOne(this.authorId);
        observable.subscribe(function (data) {
            console.log(data);
            _this.selectedAuthor = data['author'];
            console.log('***** author is here', _this.selectedAuthor);
        });
    };
    QuotesComponent.prototype.voteUp = function (id) {
        var _this = this;
        var observable = this._httpService.voteQuote(this.authorId, { _id: id, voteVal: 1 });
        observable.subscribe(function (data) {
            console.log(data);
            _this.showSelectedAuthor(_this.authorId);
        });
    };
    QuotesComponent.prototype.voteDown = function (id) {
        var _this = this;
        var observable = this._httpService.voteQuote(this.authorId, { _id: id, voteVal: -1 });
        observable.subscribe(function (data) {
            console.log(data);
            _this.showSelectedAuthor(_this.authorId);
        });
    };
    QuotesComponent.prototype.deleteThisQuote = function (id) {
        var _this = this;
        var observable = this._httpService.removeQuote(id);
        observable.subscribe(function (data) {
            console.log(data);
            _this.showSelectedAuthor(_this.authorId);
        });
    };
    QuotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quotes',
            template: __webpack_require__(/*! ./quotes.component.html */ "./src/app/quotes/quotes.component.html"),
            styles: [__webpack_require__(/*! ./quotes.component.css */ "./src/app/quotes/quotes.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QuotesComponent);
    return QuotesComponent;
}());



/***/ }),

/***/ "./src/app/update/update.component.css":
/*!*********************************************!*\
  !*** ./src/app/update/update.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/update/update.component.html":
/*!**********************************************!*\
  !*** ./src/app/update/update.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  <!-- <div *ngIf = \"err\" class=\"alert alert-danger\">{{err}}</div>\n  <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n  class=\"alert alert-danger\">\n    <div *ngIf=\"name.errors.required\">\n    Name is required.\n    </div>\n    <div *ngIf=\"name.errors.minlength\">\n    Name must be at least 3 characters long.\n    </div>\n  </div> -->\n \n\n\n<form (submit) = \"editOneAuthor(updateAuthor._id)\" class=\"bg-light  mx-auto border border-info\" style=\"height: 400px; width: 400px;\">\n    <a href=\"\" [routerLink] = \"['/writers']\" class=\"float-right\" style = \"margin: 5px;\">Home</a>\n    <p style=\"margin: 75px 0 0 125px\">Edit this Author: </p>\n  <div class=\"form-group col-8 ml-50\" style=\"margin: auto; margin-top: 25px;\">\n      <label for=\"updateAuthor.name\">Name</label>\n      <input type=\"text\" class = \"form-control\" name=\"updateAuthor.name\" placeholder=\"Name..\" required minlength=\"3\"  [(ngModel)] = \"updateAuthor.name\" #name=\"ngModel\">\n  </div>\n  <div *ngIf = \"err\" class=\"alert alert-danger\">{{err}}</div>\n  <div *ngIf=\"name.invalid && (name.dirty || !name.untouched)\"\n  class=\"alert alert-danger\">\n    <div *ngIf=\"name.errors.required\">\n    Name is required.\n    </div>\n    <div *ngIf=\"name.errors.minlength\">\n    Name must be at least 3 characters long.\n    </div>\n  </div>\n  <input type=\"submit\" value=\"Edit\" class=\"btn btn-success\" style=\"margin: 50px 20px 0px 130px;\">\n  <button [routerLink] = \"['/writers']\" class=\"btn btn-primary\" style=\"margin-top: 50px;\">Cancel</button>\n</form>"

/***/ }),

/***/ "./src/app/update/update.component.ts":
/*!********************************************!*\
  !*** ./src/app/update/update.component.ts ***!
  \********************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // dependency injection
 //for the routes
var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(_httpService, 
    //these 2 lines are for the routes
    _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    UpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.updateAuthorId = params['id'];
        });
        this.showAuthor(this.updateAuthorId);
        this.updateAuthor = { name: "" };
    };
    UpdateComponent.prototype.showAuthor = function (id) {
        var _this = this;
        var observable = this._httpService.showOne(this.updateAuthorId);
        observable.subscribe(function (data) {
            console.log(data);
            _this.updateAuthor = data['author'];
            console.log("**********", _this.updateAuthor);
        });
    };
    UpdateComponent.prototype.editOneAuthor = function (id) {
        var _this = this;
        var observable = this._httpService.editAuthor(this.updateAuthor, this.updateAuthorId);
        observable.subscribe(function (data) {
            console.log(data);
            if (!data['err']) {
                _this._router.navigate(['/writers']);
            }
            else {
                console.log('YEAAAAAHH ERROR');
                _this.err = data['err'].errors.name.message;
                _this._router.navigate(['/writers/edit/' + _this.updateAuthorId]);
            }
        });
    };
    UpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.css */ "./src/app/update/update.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UpdateComponent);
    return UpdateComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\56ole\Documents\DOJO\DojoAssignments\MEAN\ANGULAR\authors\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map