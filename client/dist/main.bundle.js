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

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log_reg_log_reg_component__ = __webpack_require__("./src/app/log-reg/log-reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_game_component__ = __webpack_require__("./src/app/game/game.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__log_reg_log_reg_component__["a" /* LogRegComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'game/:id', component: __WEBPACK_IMPORTED_MODULE_4__game_game_component__["a" /* GameComponent */] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_safeguard__ = __webpack_require__("./node_modules/angular-safeguard/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__log_reg_log_reg_component__ = __webpack_require__("./src/app/log-reg/log-reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__game_game_component__ = __webpack_require__("./src/app/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__http_service__ = __webpack_require__("./src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__socket_service__ = __webpack_require__("./src/app/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__log_reg_log_reg_component__["a" /* LogRegComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__game_game_component__["a" /* GameComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular_safeguard__["b" /* LockerModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__http_service__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_11__socket_service__["a" /* SocketService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page dashboard\">\n  <h1>Welcome, {{user.name}}!</h1>\n\n  <div class=\"error\">\n    {{error}}\n  </div>\n\n  <h4>Host a New Game</h4>\n  <form (submit)=\"onNewGameSubmit()\">\n    <div>\n      <label for=\"newGameWord\">Word:</label>\n      <input type=\"text\" name=\"newGameWord\" [(ngModel)]=\"newGameWord\">\n    </div>\n    <div>\n      <label for=\"newGameHint\">Hint:</label>\n      <input type=\"text\" name=\"newGameHint\" [(ngModel)]=\"newGameHint\">\n    </div>\n    <input type=\"submit\" value=\"New Game\">\n  </form>\n\n  <div class=\"games\">\n    <h4>Active Games You're Hosting/Playing:</h4>\n    <div *ngFor=\"let game of activeGames; let i = index\">\n      <div *ngIf=\"game.host._id == user._id || (game.player && game.player._id == user._id)\">\n        <a [routerLink]=\"['/game', game._id]\">\n          {{i + 1}}) by {{game.host.name}} - (Hint: {{game.hint}})\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"games\">\n    <h4>Active Games You Can Join:</h4>\n    <div *ngFor=\"let game of activeGames; let i = index\">\n      <div *ngIf=\"game.host._id != user._id && !game.player\">\n        <a [routerLink]=\"['/game', game._id]\">\n          {{i + 1}}) by {{game.host.name}} - (Hint: {{game.hint}})\n        </a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_safeguard__ = __webpack_require__("./node_modules/angular-safeguard/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("./src/app/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    // activeGame: get from locker
    function DashboardComponent(_http, router, locker) {
        this._http = _http;
        this.router = router;
        this.locker = locker;
        this.gameId = "";
        this.newGameWord = "";
        this.newGameHint = "";
        this.activeGames = [];
        this.error = "";
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = this.locker.get("session" /* SESSION */, 'user');
        if (!user) {
            this.router.navigate(['']);
        }
        else {
            this.user = user;
            this._http.getActiveGames().subscribe(function (data) {
                if (data['message'] == 'Error') {
                    _this.error = data['error']['message'];
                }
                else {
                    console.log("active games", data['data']);
                    _this.activeGames = data['data'];
                }
            });
        }
    };
    // id: 5adfab92c2e6fa2b317bd8c7
    DashboardComponent.prototype.onNewGameSubmit = function () {
        var _this = this;
        this._http.newGame(this.newGameWord, this.newGameHint, this.user._id).subscribe(function (data) {
            if (data['message'] == 'Error') {
                _this.error = data['error']['message'];
            }
            else {
                console.log('GAME DATA', data['data']);
                _this.router.navigate(['/game/' + data['data']['_id']]);
            }
        });
    };
    DashboardComponent.prototype.onJoinGameSubmit = function () {
        // TODO: navigate to the game page directly.
        // this._http.getGame(this.gameId).subscribe(data => {
        //   if (data['message'] == 'Error') {
        //     this.error = data['error']['message'];
        //   } else {
        //     console.log('GAME DATA', data['data']);
        this.router.navigate(['/game/' + this.gameId]);
        //   }
        // })
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_angular_safeguard__["a" /* Locker */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/game/game.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page game\">\n  <h2>Host: {{game.host.name}}</h2>\n  <h2 *ngIf=\"game.player\">Player: {{game.player.name}}</h2>\n  <h2 *ngIf=\"!game.player\">Player: waiting...</h2>\n\n  <div class=\"column stats\">\n    <p>Burn Level: {{game.burnLevel}}</p>\n    <p>Active: {{game.status}}</p>\n\n    <div class=\"result\">\n      <h1 class=\"win\" *ngIf=\"game.win\">{{game.player.name}} Won!</h1>\n      <h1 class=\"loss\" *ngIf=\"!game.win && !game.status\">{{game.player.name}} Lost!</h1>\n    </div>\n\n    <div class=\"box\">\n      <h4>The Word: (hint: {{game.hint}})</h4>\n      <p *ngIf=\"game.host._id == user._id\">(Only you can see this: {{game.word}})</p>\n      <h2 *ngFor=\"let l of game.word.split('')\" class=\"word-letter\">\n        <span *ngIf=\"game.guesses.indexOf(l) > -1; else dash\">{{l}}</span>\n        <ng-template #dash>__</ng-template>\n      </h2>\n    </div>\n\n    <div class=\"box\">\n      <h4>Guesses</h4>\n      <span *ngFor=\"let guess of game.guesses\" class=\"guess\">\n        {{guess}}\n      </span>\n    </div>\n\n    <div class=\"box\">\n      <h4>Misses</h4>\n      <span *ngFor=\"let miss of game.misses\" class=\"miss\">\n        {{miss}}\n      </span>\n    </div>\n\n    <!-- TODO: disable after one guess is sent until all updates are recieved -->\n    <div *ngIf=\"game.host._id != user._id && game.status\">\n      <input type=\"text\" minlength=\"1\" maxlength=\"1\" class=\"letter-input\" [(ngModel)]=\"guess\">\n      <button (click)=\"sendGuess()\">Guess</button>\n    </div>\n  </div>\n  <div class=\"column man\">\n    <img class=\"stickman\" src='assets/img/stickman2.png'>\n    <div *ngIf=\"game.burnLevel == 1\">\n        <div class=\"fire p-1\"></div>\n    </div>\n    <div *ngIf=\"game.burnLevel == 2\">\n        <div class=\"fire p-1\"></div>\n        <div class=\"fire p-2\"></div>\n    </div>\n    <div *ngIf=\"game.burnLevel == 3\">\n        <div class=\"fire p-1\"></div>\n        <div class=\"fire p-2\"></div>\n        <div class=\"fire p-3\"></div>\n    </div>\n    <div *ngIf=\"game.burnLevel == 4\">\n        <div class=\"fire p-1\"></div>\n        <div class=\"fire p-2\"></div>\n        <div class=\"fire p-3\"></div>\n        <div class=\"fire p-4\"></div>\n    </div>\n    <div *ngIf=\"game.burnLevel == 5\">\n        <div class=\"fire p-1\"></div>\n        <div class=\"fire p-2\"></div>\n        <div class=\"fire p-3\"></div>\n        <div class=\"fire p-4\"></div>\n        <div class=\"fire p-5\"></div>\n    </div>\n    <div *ngIf=\"game.burnLevel == 6\">\n        <div class=\"fire p-1\"></div>\n        <div class=\"fire p-2\"></div>\n        <div class=\"fire p-3\"></div>\n        <div class=\"fire p-4\"></div>\n        <div class=\"fire p-5\"></div>\n        <div class=\"fire p-6\"></div>\n    </div>\n    <div *ngIf=\"game.burnLevel == 7\">\n        <div class=\"fire p-1\"></div>\n        <div class=\"fire p-2\"></div>\n        <div class=\"fire p-3\"></div>\n        <div class=\"fire p-4\"></div>\n        <div class=\"fire p-5\"></div>\n        <div class=\"fire p-6\"></div>\n        <div class=\"fire p-7\"></div>\n    </div>\n    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("./src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__socket_service__ = __webpack_require__("./src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_safeguard__ = __webpack_require__("./node_modules/angular-safeguard/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameComponent = /** @class */ (function () {
    function GameComponent(_httpService, locker, socket, route, router) {
        this._httpService = _httpService;
        this.locker = locker;
        this.socket = socket;
        this.route = route;
        this.router = router;
        this.error = "";
        this.guess = "";
        this.game = { word: "", host: {} };
        this.gameId = "";
    }
    GameComponent.prototype.setGamePlayer = function () {
        if (!this.game.player && this.user._id != this.game.host._id) {
            console.log("SEND PLAYER");
            this.socket.sendPlayer(this.game._id, this.user._id);
        }
        // else if (this.user._id != this.game.host._id || 
        //   this.user._id != this.game.player._id) {
        //   this.router.navigate(['dashboard']);
        // }
    };
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = this.locker.get("session" /* SESSION */, 'user');
        if (!user) {
            this.router.navigate(['']);
        }
        else {
            this.user = user;
        }
        this.route.params.subscribe(function (params) {
            _this.gameId = params.id;
            _this.initToConnection();
            _this.getGameFromService();
        });
    };
    GameComponent.prototype.initToConnection = function () {
        var _this = this;
        this.socket.initSocket();
        this.ioConnection = this.socket.onGameUpdate().subscribe(function (data) {
            console.log("Recieved game update:", data);
            if (data['message'] == 'Error') {
                _this.error = data['error'].message;
                console.log("GAME UPDATE ERROR", data['error']);
            }
            else {
                _this.game = data['data'];
                _this.getGameFromService();
                console.log("GAME UPDATE", data['data']);
            }
        });
        this.socket.onEvent('connect').subscribe(function () {
            console.log('You are connected, room', _this.gameId);
            _this.socket.sendRoom(_this.gameId);
        });
        this.socket.onEvent('other:connection').subscribe(function () {
            console.log('Somebody else connected!');
        });
        this.socket.onEvent('disconnect').subscribe(function () {
            console.log('Somebody disconnected!');
        });
    };
    GameComponent.prototype.getGameFromService = function () {
        var _this = this;
        this._httpService.getGame(this.gameId).subscribe(function (data) {
            if (data['error']) {
                _this.error = data['error'].message;
            }
            else {
                console.log("GAME DATA", data['data']);
                _this.game = data['data'];
                _this.setGamePlayer();
            }
        });
    };
    GameComponent.prototype.sendGuess = function () {
        this.guess = this.guess.toUpperCase();
        console.log("Guessed", this.guess);
        if (this.game.guesses.includes(this.guess) ||
            this.game.misses.includes(this.guess)) {
            this.error = "You already guessed " + this.guess + "!" +
                " Try a different letter.";
        }
        else {
            this.socket.sendGuess(this.gameId, this.guess);
            this.guess = "";
        }
    };
    GameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game',
            template: __webpack_require__("./src/app/game/game.component.html"),
            styles: [__webpack_require__("./src/app/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4_angular_safeguard__["a" /* Locker */],
            __WEBPACK_IMPORTED_MODULE_3__socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.register = function (user) {
        return this._http.post('/users', { name: user });
    };
    HttpService.prototype.getActiveGames = function () {
        return this._http.get('/games');
    };
    HttpService.prototype.getGame = function (id) {
        return this._http.get('/games/' + id);
    };
    HttpService.prototype.newGame = function (word, hint, host) {
        return this._http.post('/games', { word: word, hint: hint, host: host });
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/log-reg/log-reg.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/log-reg/log-reg.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n    <h1 class=\"welcome\">Welcome to Burning Man</h1>\n\n    <div class=\"error\">\n        {{error}}\n    </div>\n    \n    <form (submit)=\"onRegisterSubmit()\">\n        <div>\n            <label for=\"regUser\">Name:</label>\n            <input type=\"text\" name=\"regUser\" [(ngModel)]=\"regUser\">\n        </div>\n        <input type=\"submit\" value=\"Enter\">\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/log-reg/log-reg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogRegComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("./src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_safeguard__ = __webpack_require__("./node_modules/angular-safeguard/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogRegComponent = /** @class */ (function () {
    function LogRegComponent(_httpService, router, locker) {
        this._httpService = _httpService;
        this.router = router;
        this.locker = locker;
        this.error = "";
        this.regUser = "";
    }
    LogRegComponent.prototype.ngOnInit = function () {
    };
    LogRegComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        if (this.regUser == "") {
            this.error = "Name cannot be empty.";
        }
        else {
            this._httpService.register(this.regUser).subscribe(function (data) {
                if (data['message'] == 'Error') {
                    _this.error = data['error']['message'];
                }
                else {
                    // Save this user in session, and navigate to dashboard
                    console.log("DATA USER", data['data']);
                    _this.locker.set("session" /* SESSION */, 'user', data['data']);
                    _this.router.navigate(['dashboard']);
                }
            });
        }
    };
    LogRegComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-log-reg',
            template: __webpack_require__("./src/app/log-reg/log-reg.component.html"),
            styles: [__webpack_require__("./src/app/log-reg/log-reg.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular_safeguard__["a" /* Locker */]])
    ], LogRegComponent);
    return LogRegComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SERVER_URL = 'http://localhost:8000';
var SocketService = /** @class */ (function () {
    function SocketService() {
    }
    SocketService.prototype.initSocket = function () {
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(SERVER_URL);
    };
    SocketService.prototype.sendGuess = function (roomId, guess) {
        this.socket.emit('guess', { id: roomId, guess: guess });
    };
    SocketService.prototype.sendRoom = function (roomId) {
        this.socket.emit('room', roomId);
    };
    SocketService.prototype.sendPlayer = function (roomId, userId) {
        this.socket.emit('player', { id: roomId, user: userId });
    };
    SocketService.prototype.onGameUpdate = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on('game_update', function (data) { return observer.next(data); });
        });
    };
    SocketService.prototype.onEvent = function (event) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on(event, function () { return observer.next(); });
        });
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



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
    ws_url: 'http://localhost:8000'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map