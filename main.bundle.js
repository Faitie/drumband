webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \n       Every toolbar row uses a flexbox row layout. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.sidenav-content {\n  position:absolute;\n  top: 65px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  overflow-y: scroll;\n}\n\n.sidenav-content::-webkit-scrollbar {\n  display: none;\n}\n\nmat-toolbar {\n  background-color: #fff;\n}\n\n.logo {\n  width: 100px;\n  height: 50px;\n}", "", {"version":3,"sources":["C:/Github/drumband/src/app/C:/Github/drumband/app.component.css"],"names":[],"mappings":"AAAA;EACE;sDACoD;EACpD,oBAAe;MAAf,mBAAe;UAAf,eAAe;CAChB;;AAED;EACE,kBAAkB;EAClB,UAAU;EACV,UAAU;EACV,WAAW;EACX,YAAY;EACZ,mBAAmB;CACpB;;AAED;EACE,cAAc;CACf;;AAED;EACE,uBAAuB;CACxB;;AAED;EACE,aAAa;EACb,aAAa;CACd","file":"app.component.css","sourcesContent":[".example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \n       Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto;\n}\n\n.sidenav-content {\n  position:absolute;\n  top: 65px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  overflow-y: scroll;\n}\n\n.sidenav-content::-webkit-scrollbar {\n  display: none;\n}\n\nmat-toolbar {\n  background-color: #fff;\n}\n\n.logo {\n  width: 100px;\n  height: 50px;\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mat-elevation-z6\">\n  <div class=\"titlecontainer\" [routerLink]=\"['/']\">\n    <img src=\"../assets/logo.png\" alt=\"logo\" class=\"logo\" />\n  </div>\n  <span class=\"example-fill-remaining-space\"></span>\n  <button mat-button [routerLink]=\"['/calendar']\">Optredens</button>\n  <button mat-button [routerLink]=\"['/scores']\">Liedjes</button>\n  <button mat-button [routerLink]=\"['/contact']\">Contact</button>\n</mat-toolbar>\n\n<div class=\"sidenav-content\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_google_analytics_events_service__ = __webpack_require__("./src/app/core/google-analytics-events.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, googleAnalyticsEventsService) {
        this.router = router;
        this.googleAnalyticsEventsService = googleAnalyticsEventsService;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
    }
    AppComponent.prototype.ngOnDestroy = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__core_google_analytics_events_service__["a" /* GoogleAnalyticsEventsService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MaterialModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_http_interceptor__ = __webpack_require__("./src/app/core/http.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_service_worker__ = __webpack_require__("./node_modules/@angular/service-worker/esm5/service-worker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routing_module__ = __webpack_require__("./src/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__core_google_analytics_events_service__ = __webpack_require__("./src/app/core/google-analytics-events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__calendar_calendar_component__ = __webpack_require__("./src/app/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__calendar_calendar_service__ = __webpack_require__("./src/app/calendar/calendar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__loader_loader_component__ = __webpack_require__("./src/app/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__loader_loader_service__ = __webpack_require__("./src/app/loader/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__scores_overview_overview_component__ = __webpack_require__("./src/app/scores/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__scores_detail_detail_component__ = __webpack_require__("./src/app/scores/detail/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__scores_scores_service__ = __webpack_require__("./src/app/scores/scores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
























var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_11__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["B" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["A" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["F" /* MatTooltipModule */],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule(matIconRegistry) {
        matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_18__loader_loader_component__["a" /* LoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_20__scores_overview_overview_component__["a" /* ScoreOverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_21__scores_detail_detail_component__["a" /* ScoreDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_16__calendar_calendar_component__["a" /* CalendarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_23__environments_environment__["a" /* environment */].firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_service_worker__["a" /* ServiceWorkerModule */].register('/ngsw-worker.js', { enabled: __WEBPACK_IMPORTED_MODULE_23__environments_environment__["a" /* environment */].production }),
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                MaterialModule,
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__routing_module__["a" /* RoutingModule */],
            ],
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_9__core_http_interceptor__["a" /* AppHttpInterceptor */],
                    multi: true
                },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* LOCALE_ID */], useValue: 'nl_BE' },
                __WEBPACK_IMPORTED_MODULE_15__core_google_analytics_events_service__["a" /* GoogleAnalyticsEventsService */],
                __WEBPACK_IMPORTED_MODULE_17__calendar_calendar_service__["b" /* CalendarService */],
                __WEBPACK_IMPORTED_MODULE_19__loader_loader_service__["a" /* LoaderService */],
                __WEBPACK_IMPORTED_MODULE_22__scores_scores_service__["a" /* ScoresService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__angular_material__["l" /* MatIconRegistry */]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".example-card {\n    width: 400px;\n    margin: 10px auto;\n  }\n  \n  .example-header-image {\n    background-image: url('http://www.padvindersvansintjorisizegem.be/sites/default/files/styles/blog/public/scouts.JPG');\n    background-size: cover;\n  }", "", {"version":3,"sources":["C:/Github/drumband/src/app/calendar/C:/Github/drumband/calendar.component.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,kBAAkB;GACnB;;EAED;IACE,sHAAsH;IACtH,uBAAuB;GACxB","file":"calendar.component.css","sourcesContent":[".example-card {\n    width: 400px;\n    margin: 10px auto;\n  }\n  \n  .example-header-image {\n    background-image: url('http://www.padvindersvansintjorisizegem.be/sites/default/files/styles/blog/public/scouts.JPG');\n    background-size: cover;\n  }"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"calendar\">\n  <mat-card class=\"example-card\" *ngFor=\"let event of calendar.items\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>{{event.summary}} -  {{event.start.dateTime | date:'short':'':'nl-BE'}}</mat-card-title>\n      <mat-card-subtitle>{{event.location}}</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image src=\"{{event.attachments[0].fileUrl}}\" alt=\"{{event.attachments[0].title}}\">\n    <mat-card-content>\n      <p>{{event.discription}}</p>\n    </mat-card-content>\n    <mat-card-actions>\n        <button mat-button><mat-icon fontSet=\"fontawesome\" fontIcon=\"fa-facebook-square\"></mat-icon></button>         \n    </mat-card-actions>\n  </mat-card>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_service__ = __webpack_require__("./src/app/calendar/calendar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_google_analytics_events_service__ = __webpack_require__("./src/app/core/google-analytics-events.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(calenderService, googleAnalyticsEventsService) {
        this.calenderService = calenderService;
        this.googleAnalyticsEventsService = googleAnalyticsEventsService;
        this.calendar = new __WEBPACK_IMPORTED_MODULE_1__calendar_service__["a" /* CalendarEvents */]();
    }
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.googleAnalyticsEventsService.emitEvent('calendar', 'init', '', 0);
        this.calenderService.getCalendarEvent().subscribe(function (res) {
            _this.calendar = res;
        });
    };
    CalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-calendar',
            template: __webpack_require__("./src/app/calendar/calendar.component.html"),
            styles: [__webpack_require__("./src/app/calendar/calendar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__calendar_service__["b" /* CalendarService */], __WEBPACK_IMPORTED_MODULE_2__core_google_analytics_events_service__["a" /* GoogleAnalyticsEventsService */]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CalendarEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CalendarItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Creator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Organizer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Attachment; });
var CalendarEvents = /** @class */ (function () {
    function CalendarEvents() {
        this.defaultReminders = new Array();
        this.items = new Array();
    }
    return CalendarEvents;
}());

var CalendarItem = /** @class */ (function () {
    function CalendarItem() {
        this.attachments = new Array();
    }
    return CalendarItem;
}());

var Creator = /** @class */ (function () {
    function Creator(email, name) {
        this.email = email;
        this.displayName = name;
    }
    return Creator;
}());

var Organizer = /** @class */ (function () {
    function Organizer(email, name, self) {
        this.email = email;
        this.displayName = name;
        this.self = self;
    }
    return Organizer;
}());

var Attachment = /** @class */ (function () {
    function Attachment() {
    }
    return Attachment;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CalendarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendar_models__ = __webpack_require__("./src/app/calendar/calendar.models.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__calendar_models__["b"]; });
/* unused harmony reexport CalendarItem */
/* unused harmony reexport Creator */
/* unused harmony reexport Organizer */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CalendarService = /** @class */ (function () {
    function CalendarService(http) {
        this.http = http;
        this.url = 'https://www.googleapis.com/calendar/v3/calendars/' + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].calendarId + '/events?key=' + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].calendarApiKey;
    }
    CalendarService.prototype.getCalendarEvent = function () {
        var _this = this;
        return this.http.get(this.url)
            .map(function (res) {
            var events = new __WEBPACK_IMPORTED_MODULE_4__calendar_models__["b" /* CalendarEvents */]();
            events.kind = res.kind;
            events.etag = res.etag;
            events.summary = res.summary;
            events.updated = res.updated;
            events.timeZone = res.timeZone;
            events.accessRole = res.accessRole;
            events.defaultReminders = res.defaultReminders;
            events.nextSyncToken = res.nextSyncToken;
            for (var _i = 0, _a = res.items; _i < _a.length; _i++) {
                var item = _a[_i];
                var i = new __WEBPACK_IMPORTED_MODULE_4__calendar_models__["c" /* CalendarItem */]();
                i.kind = item.kind;
                i.etag = item.etag;
                i.id = item.id;
                i.status = item.status;
                i.htmlLink = item.htmlLink;
                i.created = item.created;
                i.updated = item.updated;
                i.summary = item.summary;
                i.location = item.location;
                i.htmlLink = item.htmlLink;
                i.creator = new __WEBPACK_IMPORTED_MODULE_4__calendar_models__["d" /* Creator */](item.creator.email, item.creator.displayName);
                i.organizer = new __WEBPACK_IMPORTED_MODULE_4__calendar_models__["e" /* Organizer */](item.organizer.email, item.organizer.displayName, item.organizer.self);
                i.start = item.start;
                i.end = item.end;
                i.iCalUID = item.iCalUID;
                i.sequence = item.sequence;
                for (var _b = 0, _c = item.attachments; _b < _c.length; _b++) {
                    var a = _c[_b];
                    var attachment = new __WEBPACK_IMPORTED_MODULE_4__calendar_models__["a" /* Attachment */]();
                    attachment.fileUrl = _this.buildPublicUrlFromCalendatAttachmentFile(a.fileUrl);
                    attachment.title = a.title;
                    attachment.iconLink = a.iconLink;
                    attachment.fileId = a.fileId;
                    i.attachments.push(attachment);
                }
                events.items.push(i);
            }
            return events;
        });
    };
    CalendarService.prototype.buildPublicUrlFromCalendatAttachmentFile = function (url) {
        var id = url.split('https://drive.google.com/file/d/').pop().split('/').shift();
        return "https://docs.google.com/uc?id=" + id;
    };
    CalendarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CalendarService);
    return CalendarService;
}());




/***/ }),

/***/ "./src/app/core/google-analytics-events.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleAnalyticsEventsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GoogleAnalyticsEventsService = /** @class */ (function () {
    function GoogleAnalyticsEventsService() {
    }
    GoogleAnalyticsEventsService.prototype.emitEvent = function (eventCategory, eventAction, eventLabel, eventValue) {
        if (eventLabel === void 0) { eventLabel = null; }
        if (eventValue === void 0) { eventValue = null; }
        ga('send', 'event', {
            eventCategory: eventCategory,
            eventLabel: eventLabel,
            eventAction: eventAction,
            eventValue: eventValue
        });
    };
    GoogleAnalyticsEventsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], GoogleAnalyticsEventsService);
    return GoogleAnalyticsEventsService;
}());



/***/ }),

/***/ "./src/app/core/http.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHttpInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loader_loader_service__ = __webpack_require__("./src/app/loader/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppHttpInterceptor = /** @class */ (function () {
    function AppHttpInterceptor(loader) {
        this.loader = loader;
    }
    AppHttpInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        console.log('intercepted request ... ');
        this.loader.show();
        // Clone the request to add the new header.
        // const authReq = req.clone({ headers: req.headers.set('headerName', 'headerValue') });
        // console.log('Sending request with new header now ...');
        // send the newly created request
        return next.handle(req)
            .do(function (response) {
            if (response instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpResponse */]) {
                _this.loader.hide();
            }
        }, function (error) {
            console.log('Error Occurred');
            console.log(error);
            _this.loader.hide();
        });
    };
    AppHttpInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__loader_loader_service__["a" /* LoaderService */]])
    ], AppHttpInterceptor);
    return AppHttpInterceptor;
}());



/***/ }),

/***/ "./src/app/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div [class.loader-hidden]=\"!show\">\n  <div class=\"loader-overlay\">\n    <div>\n      <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_service__ = __webpack_require__("./src/app/loader/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
        this.show = false;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.loaderService.loaderState
            .subscribe(function (state) {
            _this.show = state.show;
        });
    };
    LoaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loader',
            template: __webpack_require__("./src/app/loader/loader.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__loader_service__["a" /* LoaderService */]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/loader/loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.loaderSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.loaderState = this.loaderSubject.asObservable();
    }
    LoaderService.prototype.show = function () {
        this.loaderSubject.next({ show: true });
    };
    LoaderService.prototype.hide = function () {
        this.loaderSubject.next({ show: false });
    };
    LoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_calendar_component__ = __webpack_require__("./src/app/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scores_overview_overview_component__ = __webpack_require__("./src/app/scores/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scores_detail_detail_component__ = __webpack_require__("./src/app/scores/detail/detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'calendar', component: __WEBPACK_IMPORTED_MODULE_2__calendar_calendar_component__["a" /* CalendarComponent */] },
    { path: 'score/:id', component: __WEBPACK_IMPORTED_MODULE_4__scores_detail_detail_component__["a" /* ScoreDetailComponent */] },
    { path: 'scores', component: __WEBPACK_IMPORTED_MODULE_3__scores_overview_overview_component__["a" /* ScoreOverviewComponent */] },
    { path: 'contact', redirectTo: '/' }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/scores/detail/detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "#embed-container {\n    height: 100%;\n    overflow-y: hidden;\n}", "", {"version":3,"sources":["C:/Github/drumband/src/app/scores/detail/C:/Github/drumband/detail.component.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;CACtB","file":"detail.component.css","sourcesContent":["#embed-container {\n    height: 100%;\n    overflow-y: hidden;\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/scores/detail/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"embed-container\"></div>\n"

/***/ }),

/***/ "./src/app/scores/detail/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_google_analytics_events_service__ = __webpack_require__("./src/app/core/google-analytics-events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScoreDetailComponent = /** @class */ (function () {
    function ScoreDetailComponent(activatedRoute, googleAnalyticsEventsService) {
        this.activatedRoute = activatedRoute;
        this.googleAnalyticsEventsService = googleAnalyticsEventsService;
    }
    ScoreDetailComponent.prototype.ngOnInit = function () {
        var id = this.activatedRoute.snapshot.paramMap.get('id');
        this.googleAnalyticsEventsService.emitEvent('scoreDetail', 'init', 'scoreId', +id);
        // this.coursesObservable = this.getCourses('/scores');
        var container = document.getElementById('embed-container');
        var embed = new Flat.Embed(container, {
            score: id,
            width: '100%',
            height: '100%',
            embedParams: {
                appId: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].flatAppId,
                controlsFloating: false
            }
        });
    };
    ScoreDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-scores-detail',
            template: __webpack_require__("./src/app/scores/detail/detail.component.html"),
            styles: [__webpack_require__("./src/app/scores/detail/detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__core_google_analytics_events_service__["a" /* GoogleAnalyticsEventsService */]])
    ], ScoreDetailComponent);
    return ScoreDetailComponent;
}());



/***/ }),

/***/ "./src/app/scores/overview/overview.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\r\n *,\r\n*::before,\r\n*::after {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\nhtml {\r\n  background-color: #f0f0f0;\r\n}\r\nbody {\r\n  color: #999999;\r\n  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  letter-spacing: 0;\r\n  padding: 1rem;\r\n  text-rendering: optimizeLegibility;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -moz-font-feature-settings: \"liga\" on;\r\n}\r\nimg {\r\n  height: auto;\r\n  max-width: 100%;\r\n  vertical-align: middle;\r\n}\r\n.btn {\r\n  background-color: white;\r\n  border: 1px solid #cccccc;\r\n  padding: 0.5rem;\r\n  color: #696969;\r\n  font-size: 1.25rem;\r\n  font-weight: 300;\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n}\r\n.btn--block {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n.cards {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.cards__item {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  padding: 1rem;\r\n}\r\n@media (min-width: 40rem) {\r\n  .cards__item {\r\n    width: 50%;\r\n  }\r\n}\r\n@media (min-width: 56rem) {\r\n  .cards__item {\r\n    width: 33.3333%;\r\n  }\r\n}\r\n.card {\r\n  background-color: white;\r\n  border-radius: 0.25rem;\r\n  -webkit-box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);\r\n          box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  overflow: hidden;\r\n  width: 100%;\r\n}\r\n.card:hover .card__image {\r\n  -webkit-filter: contrast(100%);\r\n          filter: contrast(100%);\r\n}\r\n.card__content {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  padding: 1rem;\r\n}\r\n.card__image {\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  border-top-left-radius: 0.25rem;\r\n  border-top-right-radius: 0.25rem;\r\n  -webkit-filter: contrast(70%);\r\n          filter: contrast(70%);\r\n  overflow: hidden;\r\n  position: relative;\r\n  -webkit-transition: -webkit-filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);\r\n  transition: -webkit-filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);\r\n  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);\r\n  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91), -webkit-filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);\r\n}\r\n.card__image::before {\r\n  content: \"\";\r\n  display: block;\r\n  padding-top: 56.25%;\r\n}\r\n@media (min-width: 40rem) {\r\n  .card__image::before {\r\n    padding-top: 66.6%;\r\n  }\r\n}\r\n.card__image--image1 {\r\n  background-image: url(" + escape(__webpack_require__("./src/assets/image_1.jpg")) + ");\r\n}\r\n.card__image--image2 {\r\n  background-image: url(" + escape(__webpack_require__("./src/assets/image_2.jpg")) + ");\r\n}\r\n.card__image--image3 {\r\n  background-image: url(" + escape(__webpack_require__("./src/assets/image_3.jpg")) + ");\r\n}\r\n.card__image--image4 {\r\n  background-image: url(" + escape(__webpack_require__("./src/assets/image_4.jpg")) + ");\r\n}\r\n.card__image--image5 {\r\n  background-image: url(" + escape(__webpack_require__("./src/assets/image_5.jpg")) + ");\r\n}\r\n.card__image--image6 {\r\n  background-image: url(" + escape(__webpack_require__("./src/assets/image_6.jpg")) + ");\r\n}\r\n.card__image--image7 {\r\n  background-image: url(" + escape(__webpack_require__("./src/assets/image_7.jpg")) + ");\r\n}\r\n.card__title {\r\n  color: #696969;\r\n  font-size: 1.25rem;\r\n  font-weight: 300;\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n}\r\n.card__text {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n  font-size: 0.875rem;\r\n  line-height: 1.5;\r\n  margin-bottom: 1.25rem;\r\n}\r\n\r\n", "", {"version":3,"sources":["C:/Github/drumband/src/app/scores/overview/C:/Github/drumband/overview.component.css"],"names":[],"mappings":";CACC;;;EAGC,+BAA+B;UACvB,uBAAuB;CAChC;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,eAAe;EACf,sEAAsE;EACtE,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;EACd,mCAAmC;EACnC,oCAAoC;EACpC,mCAAmC;EACnC,sCAAsC;CACvC;AACD;EACE,aAAa;EACb,gBAAgB;EAChB,uBAAuB;CACxB;AACD;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,iBAAiB;EACjB,oBAAoB;EACpB,0BAA0B;CAC3B;AACD;EACE,eAAe;EACf,YAAY;CACb;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,oBAAoB;MAChB,gBAAgB;EACpB,iBAAiB;EACjB,UAAU;EACV,WAAW;CACZ;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,cAAc;CACf;AACD;EACE;IACE,WAAW;GACZ;CACF;AACD;EACE;IACE,gBAAgB;GACjB;CACF;AACD;EACE,wBAAwB;EACxB,uBAAuB;EACvB,0DAA0D;UAClD,kDAAkD;EAC1D,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;MAC1B,2BAA2B;UACvB,uBAAuB;EAC/B,iBAAiB;EACjB,YAAY;CACb;AACD;EACE,+BAA+B;UACvB,uBAAuB;CAChC;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,oBAAoB;MAChB,mBAAmB;UACf,eAAe;EACvB,6BAA6B;EAC7B,8BAA8B;MAC1B,2BAA2B;UACvB,uBAAuB;EAC/B,cAAc;CACf;AACD;EACE,mCAAmC;EACnC,6BAA6B;EAC7B,uBAAuB;EACvB,gCAAgC;EAChC,iCAAiC;EACjC,8BAA8B;UACtB,sBAAsB;EAC9B,iBAAiB;EACjB,mBAAmB;EACnB,6EAA6E;EAC7E,qEAAqE;EACrE,6DAA6D;EAC7D,uHAAuH;CACxH;AACD;EACE,YAAY;EACZ,eAAe;EACf,oBAAoB;CACrB;AACD;EACE;IACE,mBAAmB;GACpB;CACF;AACD;EACE,gDAAmD;CACpD;AACD;EACE,gDAAmD;CACpD;AACD;EACE,gDAAmD;CACpD;AACD;EACE,gDAAmD;CACpD;AACD;EACE,gDAAmD;CACpD;AACD;EACE,gDAAmD;CACpD;AACD;EACE,gDAAmD;CACpD;AACD;EACE,eAAe;EACf,mBAAmB;EACnB,iBAAiB;EACjB,oBAAoB;EACpB,0BAA0B;CAC3B;AACD;EACE,oBAAoB;MAChB,mBAAmB;UACf,eAAe;EACvB,oBAAoB;EACpB,iBAAiB;EACjB,uBAAuB;CACxB","file":"overview.component.css","sourcesContent":["\r\n *,\r\n*::before,\r\n*::after {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\nhtml {\r\n  background-color: #f0f0f0;\r\n}\r\nbody {\r\n  color: #999999;\r\n  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  letter-spacing: 0;\r\n  padding: 1rem;\r\n  text-rendering: optimizeLegibility;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -moz-font-feature-settings: \"liga\" on;\r\n}\r\nimg {\r\n  height: auto;\r\n  max-width: 100%;\r\n  vertical-align: middle;\r\n}\r\n.btn {\r\n  background-color: white;\r\n  border: 1px solid #cccccc;\r\n  padding: 0.5rem;\r\n  color: #696969;\r\n  font-size: 1.25rem;\r\n  font-weight: 300;\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n}\r\n.btn--block {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n.cards {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.cards__item {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  padding: 1rem;\r\n}\r\n@media (min-width: 40rem) {\r\n  .cards__item {\r\n    width: 50%;\r\n  }\r\n}\r\n@media (min-width: 56rem) {\r\n  .cards__item {\r\n    width: 33.3333%;\r\n  }\r\n}\r\n.card {\r\n  background-color: white;\r\n  border-radius: 0.25rem;\r\n  -webkit-box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);\r\n          box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  overflow: hidden;\r\n  width: 100%;\r\n}\r\n.card:hover .card__image {\r\n  -webkit-filter: contrast(100%);\r\n          filter: contrast(100%);\r\n}\r\n.card__content {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  padding: 1rem;\r\n}\r\n.card__image {\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  border-top-left-radius: 0.25rem;\r\n  border-top-right-radius: 0.25rem;\r\n  -webkit-filter: contrast(70%);\r\n          filter: contrast(70%);\r\n  overflow: hidden;\r\n  position: relative;\r\n  -webkit-transition: -webkit-filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);\r\n  transition: -webkit-filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);\r\n  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);\r\n  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91), -webkit-filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);\r\n}\r\n.card__image::before {\r\n  content: \"\";\r\n  display: block;\r\n  padding-top: 56.25%;\r\n}\r\n@media (min-width: 40rem) {\r\n  .card__image::before {\r\n    padding-top: 66.6%;\r\n  }\r\n}\r\n.card__image--image1 {\r\n  background-image: url(../../../assets/image_1.jpg);\r\n}\r\n.card__image--image2 {\r\n  background-image: url(../../../assets/image_2.jpg);\r\n}\r\n.card__image--image3 {\r\n  background-image: url(../../../assets/image_3.jpg);\r\n}\r\n.card__image--image4 {\r\n  background-image: url(../../../assets/image_4.jpg);\r\n}\r\n.card__image--image5 {\r\n  background-image: url(../../../assets/image_5.jpg);\r\n}\r\n.card__image--image6 {\r\n  background-image: url(../../../assets/image_6.jpg);\r\n}\r\n.card__image--image7 {\r\n  background-image: url(../../../assets/image_7.jpg);\r\n}\r\n.card__title {\r\n  color: #696969;\r\n  font-size: 1.25rem;\r\n  font-weight: 300;\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n}\r\n.card__text {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n  font-size: 0.875rem;\r\n  line-height: 1.5;\r\n  margin-bottom: 1.25rem;\r\n}\r\n\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/scores/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"main\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col s12 m4\" *ngFor=\"let score of scores\">\n                <div class=\"card blue white-text\" [routerLink]=\"['/score', score.id]\">\n                  <div class=\"card-content valign-wrapper\">\n                    <div class=\"card-text\">\n                      <h6>{{score.title}}</h6>\n                      <p>{{score.composer}}</p>\n                    </div>\n                    <div class=\"card-icon\">\n                      <i class=\"material-icons medium valign\">description</i>\n                    </div>\n                  </div>\n                  <div class=\"card-action\">\n                    <a href=\"#\">View report</a>\n                  </div>\n                </div>\n              </div>\n        </div>\n    </div>\n</div> -->\n\n\n\n<ul class=\"cards\">\n  <li class=\"cards__item\" *ngFor=\"let score of scores; let idx = index\">\n    <div class=\"card\">\n      <div class=\"card__image card__image--image{{idx + 1}}\"></div>\n      <div class=\"card__content\">\n        <div class=\"card__title\">{{score.title}}</div>\n        <p class=\"card__text\">{{score.composer}}</p>\n        <button class=\"btn btn--block card__btn\" [routerLink]=\"['/score', score.id]\">LUISTER</button>\n      </div>\n    </div>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/scores/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreOverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scores_service__ = __webpack_require__("./src/app/scores/scores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_google_analytics_events_service__ = __webpack_require__("./src/app/core/google-analytics-events.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScoreOverviewComponent = /** @class */ (function () {
    function ScoreOverviewComponent(scoreService, router, googleAnalyticsEventsService) {
        this.scoreService = scoreService;
        this.router = router;
        this.googleAnalyticsEventsService = googleAnalyticsEventsService;
        this.scores = new Array();
    }
    ScoreOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.googleAnalyticsEventsService.emitEvent('scoreOverview', 'init', '', 0);
        this.scoreService.getAllScores().subscribe(function (data) {
            _this.scores = data;
        });
    };
    ScoreOverviewComponent.prototype.onClickScoreDetail = function (id) {
        this.router.navigate(["score/" + id]);
    };
    ScoreOverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-scores-overview',
            template: __webpack_require__("./src/app/scores/overview/overview.component.html"),
            styles: [__webpack_require__("./src/app/scores/overview/overview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__scores_service__["a" /* ScoresService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__core_google_analytics_events_service__["a" /* GoogleAnalyticsEventsService */]])
    ], ScoreOverviewComponent);
    return ScoreOverviewComponent;
}());



/***/ }),

/***/ "./src/app/scores/score.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Score; });
var Score = /** @class */ (function () {
    function Score(id, title, composer) {
        this.id = id;
        this.title = title;
        this.composer = composer;
    }
    return Score;
}());



/***/ }),

/***/ "./src/app/scores/scores.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__score_model__ = __webpack_require__("./src/app/scores/score.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScoresService = /** @class */ (function () {
    function ScoresService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].flatUri + "/users/" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].flatUser + "/scores";
    }
    ScoresService.prototype.getAllScores = function () {
        return this.http.get(this.url).map(function (res) {
            var scoreArray = new Array();
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var score = res_1[_i];
                scoreArray.push(new __WEBPACK_IMPORTED_MODULE_3__score_model__["a" /* Score */](score.id, score.title, score.composer));
            }
            return scoreArray;
        });
    };
    ScoresService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ScoresService);
    return ScoresService;
}());



/***/ }),

/***/ "./src/assets/image_1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image_1.010a553853754928628a.jpg";

/***/ }),

/***/ "./src/assets/image_2.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image_2.3cb34296aa255e74e2d6.jpg";

/***/ }),

/***/ "./src/assets/image_3.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image_3.e35ea3eb3ef800ebe3cd.jpg";

/***/ }),

/***/ "./src/assets/image_4.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image_4.fbbb4294af9f135a38b9.jpg";

/***/ }),

/***/ "./src/assets/image_5.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image_5.f175621f93b4753b20c2.jpg";

/***/ }),

/***/ "./src/assets/image_6.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image_6.7e62e354e507269dc2ee.jpg";

/***/ }),

/***/ "./src/assets/image_7.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image_7.be47c343513e1b2a0cbe.jpg";

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    calendarId: 'spjvj2a6rdp3rf57c18834ti2g@group.calendar.google.com',
    calendarApiKey: 'AIzaSyCedN1Z2LIsNfTnUBurTJZrUynE-sqMSsk',
    firebaseConfig: {
        apiKey: 'AIzaSyAAfDoYCqW1LkvkWDw1E-YUNovAoAAfpP4',
        authDomain: 'drumband-193616.firebaseapp.com',
        databaseURL: 'https://drumband-193616.firebaseio.com',
        projectId: 'drumband-193616',
        storageBucket: 'drumband-193616.appspot.com',
        messagingSenderId: '1092695911267'
    },
    flatUri: 'https://api.flat.io/v2',
    flatAppId: '5a74505db8bdfd7777ec4219',
    flatUser: 'jens_malfait',
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_locales_nl_be__ = __webpack_require__("./node_modules/@angular/common/locales/nl-be.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_font_awesome_css_font_awesome_css__ = __webpack_require__("./node_modules/font-awesome/css/font-awesome.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_font_awesome_css_font_awesome_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_font_awesome_css_font_awesome_css__);


__WEBPACK_IMPORTED_MODULE_1__angular_common__["m" /* registerLocaleData */](__WEBPACK_IMPORTED_MODULE_0__angular_common_locales_nl_be__["a" /* default */]);






if (__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map