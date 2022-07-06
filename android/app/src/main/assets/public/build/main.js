webpackJsonp([0],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_setting_setting__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, navParams, storage, settingProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.settingProvider = settingProvider;
        this.currencyList = ['usd', 'aud', 'eur', 'cad', 'aed', 'gbp', 'jpy', 'idr', 'inr', 'lyd', 'egp', 'rub', 'syp', 'sdg'];
        this.currentCurrency = null;
        this.slideOpts = {
            slidesPerView: 3,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            on: {
                beforeInit: function () {
                    var swiper = this;
                    swiper.classNames.push(swiper.params.containerModifierClass + "coverflow");
                    swiper.classNames.push(swiper.params.containerModifierClass + "3d");
                    swiper.params.watchSlidesProgress = true;
                    swiper.originalParams.watchSlidesProgress = true;
                },
                setTranslate: function () {
                    var swiper = this;
                    var swiperWidth = swiper.width, swiperHeight = swiper.height, slides = swiper.slides, $wrapperEl = swiper.$wrapperEl, slidesSizesGrid = swiper.slidesSizesGrid, $ = swiper.$;
                    var params = swiper.params.coverflowEffect;
                    var isHorizontal = swiper.isHorizontal();
                    var transform$$1 = swiper.translate;
                    var center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
                    var rotate = isHorizontal ? params.rotate : -params.rotate;
                    var translate = params.depth;
                    // Each slide offset from center
                    for (var i = 0, length_1 = slides.length; i < length_1; i += 1) {
                        var $slideEl = slides.eq(i);
                        var slideSize = slidesSizesGrid[i];
                        var slideOffset = $slideEl[0].swiperSlideOffset;
                        var offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;
                        var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                        var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                        // var rotateZ = 0
                        var translateZ = -translate * Math.abs(offsetMultiplier);
                        var translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
                        var translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;
                        // Fix for ultra small values
                        if (Math.abs(translateX) < 0.001)
                            translateX = 0;
                        if (Math.abs(translateY) < 0.001)
                            translateY = 0;
                        if (Math.abs(translateZ) < 0.001)
                            translateZ = 0;
                        if (Math.abs(rotateY) < 0.001)
                            rotateY = 0;
                        if (Math.abs(rotateX) < 0.001)
                            rotateX = 0;
                        var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
                        $slideEl.transform(slideTransform);
                        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                        if (params.slideShadows) {
                            // Set shadows
                            var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                            var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                            if ($shadowBeforeEl.length === 0) {
                                $shadowBeforeEl = swiper.$("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
                                $slideEl.append($shadowBeforeEl);
                            }
                            if ($shadowAfterEl.length === 0) {
                                $shadowAfterEl = swiper.$("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
                                $slideEl.append($shadowAfterEl);
                            }
                            if ($shadowBeforeEl.length)
                                $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                            if ($shadowAfterEl.length)
                                $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                        }
                    }
                    // Set correct perspective for IE10
                    if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
                        var ws = $wrapperEl[0].style;
                        ws.perspectiveOrigin = center + "px 50%";
                    }
                },
                setTransition: function (duration) {
                    var swiper = this;
                    swiper.slides
                        .transition(duration)
                        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                        .transition(duration);
                }
            }
        };
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad WelcomePage");
    };
    WelcomePage.prototype.hideWelcomePage = function () {
        console.log("HIDE IS CLICKED!!");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        this.storage.set('isWelcomed', true);
    };
    WelcomePage.prototype.addFlag = function (el) {
        var icon = document.createElement('i');
        icon.className = "flag-icon flag-icon-" + el.innerText.substring(0, el.innerText.length - 1).toLowerCase();
        el.innerHTML = icon.outerHTML + el.innerHTML;
    };
    WelcomePage.prototype.addCurrentCurrencyFlag = function () {
        var _this = this;
        setTimeout(function () {
            var currentCurrencyNode = document.querySelector('.item-currency .select-text');
            currentCurrencyNode.innerHTML = _this.currentCurrency.toUpperCase();
            _this.addFlag(currentCurrencyNode);
        }, 100);
    };
    WelcomePage.prototype.changeCurrentCurrency = function () {
        this.addCurrentCurrencyFlag();
        this.settingProvider.currentSetting.currency = this.currentCurrency.toUpperCase();
        this.settingProvider.setSettings();
    };
    WelcomePage.prototype.initCurrencyIcon = function () {
        var _this = this;
        setTimeout(function () {
            var currencyList = document.querySelectorAll('.select-currency .alert-radio-label');
            var icon = document.createElement('i');
            Array.from(currencyList).forEach(function (el) {
                _this.addFlag(el);
            });
        }, 100);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-welcome",template:/*ion-inline-start:"C:\Users\asem.alakabani\source\repos\Cryptoz\src\pages\welcome\welcome.html"*/'<ion-content class="wel">\n\n  <ion-slides pager="true" options="slideOpts">\n\n    <ion-slide class="slideBG">\n\n      <div class="slide1">\n\n        <h2 class="slide1">Dinaro</h2>\n\n      </div>\n\n      <div class="pick">\n\n        <h4 class="pick">اختر بلدك</h4>\n\n      </div>\n\n      <ion-item class="item-currency"> \n\n        <ion-label>Currency</ion-label>\n\n        <ion-select   [selectOptions]="{cssClass : \'select-currency\'}" (ionChange)="changeCurrentCurrency()" (click)="initCurrencyIcon()" [(ngModel)]="currentCurrency">\n\n            <ion-option  class="select-currency" *ngFor="let currency of currencyList" [value]="currency">\n\n              {{currency | uppercase}}\n\n            </ion-option>\n\n          </ion-select>\n\n    </ion-item>\n\n    </ion-slide>\n\n\n\n    <ion-slide class="slideBG">\n\n      \n\n      <img src="assets/imgs/dinaro-1.png" />\n\n      \n\n      <h2 class="slide2">تنويه</h2>\n\n      <p class="slide2">\n\n        ﻣﺼﺮف ﻟﻴﺒﻴﺎ اﻟﻤﺮﻛﺰي ﻟﻢ ﻳﺼﺪر اﻟﻘﻮاﻧﻴﻴﻦ اﻟﺘﻲ ﺗﻨﻈﻢ اﻟﻌﻤﻞ ﻓﻲ ﺳﻮق اﻟﻌﻤﻠﺎت\n\n        اﻟﺮﻗﻤﻴﺔ ﻟﺬﻟﻚ ﻫﺬا اﻟﺘﻄﺒﻴﻖ ﻟﻤﺘﺎﺑﻌﺔ اﻟﺴﻮق وﻟﻴﺲ ﻟﻠﺘﺪاول\n\n      </p>\n\n      <img class="webImg" src="assets/imgs/web.png" />\n\n    </ion-slide>\n\n\n\n    <ion-slide class="slideBG">\n\n      <img src="assets/imgs/dinaro-2.png" />\n\n      <img  class="webImg" src="assets/imgs/web.png" />\n\n\n\n      <h2 class="slide3">لماذا دينارو؟</h2>\n\n      <p class="slide3">\n\n        ﺗﺎﺑﻊ اﻟﺄﺳﻌﺎر واﻟﺒﻴﺎﻧﺎت اﻟﺪﻗﻴﻘﺔ\n\n        <br> \n\n        اﺿﺒﻂ اﻟﻤﻨﺒﻪ ﻋﻠﻰ ﺣﺪود ﻋﻠﻴﺎ ودﻧﻴﺎ ﻟﻠﺴﻌﺮ\n\n        <br> \n\n        ﺗﺎﺑﻊ آﺧﺮ اﻟﺄﺧﺒﺎر واﻟﻤﻘﺎﻟﺎت واﻟﺘﺤﻠﻴﻠﺎت\n\n        <br>\n\n         ﺷﺎرك ﻓﻲ اﻟﻨﻘﺎﺷﺎت واﻟﻨﺪوات \n\n        \n\n         <br>\n\n         ﺷﺎرك ﻓﻲ\n\n        اﻟﺪورات اﻟﺘﻌﻠﻴﻤﻴﺔ واﻟﺘﺪرﻳﺒﻴﺔ\n\n      </p>\n\n    </ion-slide>\n\n\n\n    <ion-slide class="slideBG">\n\n      <img src="assets/imgs/dinaro-1.png" />\n\n      <img  class="webImg" src="assets/imgs/web.png" />\n\n      <h2>هل أنت جاهر</h2>\n\n      <span (click)="hideWelcomePage()" > \n\n               إبدأ\n\n        <ion-icon slot="end" name="arrow-forward"></ion-icon></span>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\asem.alakabani\source\repos\Cryptoz\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_setting_setting__["a" /* SettingProvider */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_news__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_market_global_market__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(267);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__news_news__["a" /* newsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__global_market_global_market__["a" /* GlobalMarketPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\asem.alakabani\source\repos\Cryptoz\src\pages\tabs\tabs.html"*/'<ion-tabs selectedIndex="1">\n\n  <ion-tab [root]="tab1Root" tabTitle="{{\'APP.HOME.HOME\' | translate}}" tabIcon="trending-up"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="{{\'APP.HOME.NEWS\' | translate}}" tabIcon="browsers"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="{{\'APP.HOME.GLOBAL\' | translate}}" tabIcon="ios-stats"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="{{\'APP.HOME.SETTINGS\' | translate}}" tabIcon="ios-cog-outline"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\asem.alakabani\source\repos\Cryptoz\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptoDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_api_api__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_HighCharts__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_HighCharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_HighCharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_chart_dark__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__theme_chart_light__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_setting_setting__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_admob_admob__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var CryptoDetailsPage = /** @class */ (function () {
    function CryptoDetailsPage(navCtrl, navParams, api, http, storage, iab, admob, events, settingProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.http = http;
        this.storage = storage;
        this.iab = iab;
        this.admob = admob;
        this.events = events;
        this.settingProvider = settingProvider;
        //coin data
        this.coin = {};
        //Chart filter
        this.chart_filter = 24; // Days
        //Loading Chart
        this.loadingChart = true;
        this.currentCurrency = "USD"; //default currency USD
        this.currentLanguage = "en"; //default lang en
        this.currentChartTheme = "dark";
        this.currencyPrice = {};
        this.news = [];
        this.isCategoryFound = false;
        //retreive coin ID
        this.coin = this.navParams.get("coin");
        this.is_favorite = this.coin.is_favorite;
        //GET THE CURRENT COIN DATA
        this.api.getCoinInfo(this.coin.id).then(function (data) {
            _this.coin = data;
            console.log(_this.coin);
        });
    }
    CryptoDetailsPage.prototype.ionViewWillEnter = function () {
        this.admob.showRandomAds();
    };
    CryptoDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.settingProvider.settingSubject.subscribe(function (data) {
            _this.currentCurrency = _this.settingProvider.currentSetting.currency;
            _this.currentChartTheme = _this.settingProvider.currentSetting.theme;
            _this.currentLanguage = _this.settingProvider.currentSetting.language;
            //GET chart data for  the current crypto
            _this.fetchCurrencyApi().then(function () { return _this.fetchCoinChartData(); });
        });
        this.api.getnewsByCoin(this.coin.name).then(function (data) {
            console.log("Get News data ", data);
            _this.news = data.rss.channel[0].item.reverse();
        });
    };
    CryptoDetailsPage.prototype.getElement = function (item, htmlElement) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(item, "text/html");
        return doc.getElementsByTagName(htmlElement)[0];
    };
    CryptoDetailsPage.prototype.openBrowser = function (url) {
        var browser = this.iab.create(url, "_blank", "location=no,shouldPauseOnSuspend=yes");
        browser.show();
    };
    CryptoDetailsPage.prototype.rssFilter = function (coin) {
        var _this = this;
        coin = coin.toLowerCase();
        return this.news.filter(function (i) {
            var elArr = i.category || [];
            var isIncludes = elArr.some(function (i) { return i.toLowerCase().includes(coin); });
            if (!_this.isCategoryFound) {
                _this.isCategoryFound = isIncludes;
            }
            return isIncludes;
        });
    };
    CryptoDetailsPage.prototype.fetchCoinChartData = function () {
        var _this = this;
        this.loadingChart = true;
        console.log("cryptoD", this.currentCurrency);
        var otherPrice = this.currencyPrice[this.currentCurrency.toLowerCase()];
        var arrayOfOtherCurrencies = Object.keys(this.currencyPrice);
        console.log("this.currencyPrice", this.currencyPrice);
        console.log("arrayOfOtherCurrencies", arrayOfOtherCurrencies);
        if (arrayOfOtherCurrencies.includes(this.currentCurrency.toLowerCase())) {
            this.api
                .getCoinChart(this.coin.id, "USD", this.chart_filter)
                .then(function (data) {
                var newData = data;
                console.log("DATA LYD CHART", newData);
                var dataArray = newData["prices"];
                var newPrices = [];
                dataArray.map(function (e) {
                    newPrices.unshift(e[1] * otherPrice);
                });
                console.log("DATA LYD CHART dataArray", newPrices);
                _this.loadingChart = false;
                newData["prices"] = newPrices;
                console.log("NEW DATA LYD CHART ", newData);
                _this.initChart(data);
            });
        }
        else {
            this.api
                .getCoinChart(this.coin.id, this.currentCurrency, this.chart_filter)
                .then(function (data) {
                _this.loadingChart = false;
                _this.initChart(data);
            });
        }
    };
    CryptoDetailsPage.prototype.onFilterChange = function (value) {
        this.chart_filter = value;
        this.fetchCoinChartData();
    };
    CryptoDetailsPage.prototype.toggleFavorite = function () {
        var _this = this;
        this.storage.get("favorites").then(function (val) {
            var favorites = [];
            //check if the coin is not favorite
            //if it's not a favorite coin, add to localstorage
            if (!_this.is_favorite) {
                //check if favorites exist
                if (val) {
                    favorites = val;
                    if (favorites.indexOf(_this.coin.id) == -1) {
                        favorites.push(_this.coin);
                    }
                }
                else {
                    favorites.push(_this.coin);
                }
                _this.is_favorite = true;
                _this.storage.set("favorites", favorites);
            }
            else {
                favorites = val.filter(function (f) {
                    return f.id !== _this.coin.id;
                });
                _this.is_favorite = false;
                _this.storage.set("favorites", favorites);
            }
        });
    };
    CryptoDetailsPage.prototype.ionViewDidLeave = function () {
        this.events.publish("toggle_favorite", this.coin.id, this.is_favorite);
    };
    CryptoDetailsPage.prototype.initChart = function (Data) {
        __WEBPACK_IMPORTED_MODULE_3_HighCharts__["theme"] =
            this.currentChartTheme == "dark" ? __WEBPACK_IMPORTED_MODULE_6__theme_chart_dark__["a" /* darkChartTheme */] : __WEBPACK_IMPORTED_MODULE_7__theme_chart_light__["b" /* lightChartTheme */];
        __WEBPACK_IMPORTED_MODULE_3_HighCharts__["setOptions"](__WEBPACK_IMPORTED_MODULE_3_HighCharts__["theme"]);
        __WEBPACK_IMPORTED_MODULE_3_HighCharts__["chart"]("chart-container", {
            chart: {
                zoomType: "x",
            },
            title: {
                text: this.coin.name +
                    " Price Chart (" +
                    this.currentCurrency.toUpperCase() +
                    ")",
            },
            subtitle: {
                text: document.ontouchstart === undefined
                    ? "Click and drag in the plot area to zoom in"
                    : "Pinch the chart to zoom in",
            },
            xAxis: {
                type: "datetime",
            },
            yAxis: {
                title: {
                    text: "Price",
                },
            },
            legend: {
                enabled: false,
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1,
                        },
                        stops: [
                            [0, __WEBPACK_IMPORTED_MODULE_3_HighCharts__["getOptions"]().colors[0]],
                            [
                                1,
                                __WEBPACK_IMPORTED_MODULE_3_HighCharts__["Color"](__WEBPACK_IMPORTED_MODULE_3_HighCharts__["getOptions"]().colors[0])
                                    .setOpacity(0)
                                    .get("rgba"),
                            ],
                        ],
                    },
                    marker: {
                        radius: 2,
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1,
                        },
                    },
                    threshold: null,
                },
            },
            tooltip: {
                pointFormat: "Price : {point.y:.2f}",
            },
            series: [
                {
                    type: "area",
                    data: Data.prices,
                },
            ],
        });
    };
    CryptoDetailsPage.prototype.fetchCurrencyApi = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.api.getCurrency().then(function (e) {
                _this.currencyPrice = e;
                resolve(true);
            });
        });
    };
    CryptoDetailsPage.prototype.highLowDetails = function (currency, usdPrice) {
        console.log("cuurency out element", usdPrice);
        return this.currencyPrice[currency] * usdPrice;
    };
    CryptoDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: "page-crypto-details",template:/*ion-inline-start:"C:\Users\asem.alakabani\source\repos\Cryptoz\src\pages\crypto-details\crypto-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title> {{coin.name}} <span class="crypto_symbol"> {{coin.symbol | uppercase}} </span></ion-title>\n\n    <button class="btn-favorite" [class.btn-favorite-set]="is_favorite" (click)="toggleFavorite()" ion-button icon-only><ion-icon name="ios-eye"></ion-icon></button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding-top>\n\n   <change-currency></change-currency>\n\n  <h1 class="crypto-price">{{coin.market_data.current_price[currentCurrency.toLowerCase()] | currency:currentCurrency}} </h1>\n\n  <div class="crypto-info">\n\n    <ion-row>\n\n       <ion-col text-right>\n\n          <span class="coin-red">{{\'APP.CRYPTO DETAILS.24HLOW\' | translate}}</span>\n\n       </ion-col>\n\n       <ion-col col-1 > / </ion-col>\n\n       <ion-col text-left>\n\n          <span class="coin-green">{{\'APP.CRYPTO DETAILS.24HHIGH\' | translate}}</span>\n\n       </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col text-right>\n\n          {{(coin.market_data.low_24h[currentCurrency.toLowerCase()] ? \n\n            coin.market_data.low_24h[currentCurrency.toLowerCase()] :\n\n            highLowDetails(currentCurrency.toLowerCase(),coin.market_data.low_24h["usd"]))  |  currency:currentCurrency }} ({{currentCurrency | uppercase}})        </ion-col>\n\n        <ion-col col-1> - </ion-col>\n\n        <ion-col text-left>\n\n          {{(coin.market_data.high_24h[currentCurrency.toLowerCase()] ? \n\n            coin.market_data.high_24h[currentCurrency.toLowerCase()] :\n\n            highLowDetails(currentCurrency.toLowerCase(),coin.market_data.high_24h["usd"]))  |  currency:currentCurrency }} ({{currentCurrency | uppercase}})        </ion-col>\n\n     </ion-row>\n\n  </div>\n\n  <mat-button-toggle-group  #group="matButtonToggleGroup" [value]="chart_filter" (change)="onFilterChange(group.value)"   margin-top name="chartTime">\n\n    <mat-button-toggle value="24">{{\'APP.CRYPTO DETAILS.24H\' | translate}}</mat-button-toggle>\n\n    <mat-button-toggle value="7">{{\'APP.CRYPTO DETAILS.7DAYS\' | translate}}</mat-button-toggle>\n\n    <mat-button-toggle value="60">{{\'APP.CRYPTO DETAILS.1MONTH\' | translate}}</mat-button-toggle>\n\n    <mat-button-toggle value="365">{{\'APP.CRYPTO DETAILS.1YEAR\' | translate}}</mat-button-toggle>\n\n    <mat-button-toggle value="max">{{\'APP.CRYPTO DETAILS.MAX\' | translate}}</mat-button-toggle>\n\n  </mat-button-toggle-group>\n\n<!-- if chart API is loading display loading_bars -->\n\n <ng-container *ngIf="loadingChart">\n\n    <div *ngFor="let in of [0,1,2,3,4]" class="loading_bar">\n\n      <h2><div class="load-bar"></div> </h2>\n\n      <h3><div class="load-bar"></div></h3>\n\n      <h4><div class="load-bar"></div></h4>\n\n    </div>\n\n</ng-container>\n\n  <div [hidden]="loadingChart" id="chart-container" style="display: block;"></div>\n\n  <div class="coin-info">\n\n    <h1 class="coin-info-title">\n\n      {{\'APP.CRYPTO DETAILS.COIN INFO\' | translate}}\n\n    </h1>\n\n    <div class="coin-info-card">\n\n        <ion-row>\n\n          <ion-col col-6 text-left>\n\n            <span class="coin-info-name">{{\'APP.CRYPTO DETAILS.RANK\' | translate}}</span>\n\n          </ion-col>\n\n          <ion-col col-6 class="coin-info-detail">\n\n           # {{coin.coingecko_rank}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-6 text-left>\n\n              <span class="coin-info-name">{{\'APP.CRYPTO DETAILS.MARKET CAP\' | translate}}</span>\n\n            </ion-col>\n\n            <ion-col col-6 class="coin-info-detail">\n\n                {{coin.market_data.market_cap[currentCurrency.toLowerCase()]  |  currency:currentCurrency }} ({{currentCurrency | uppercase}})\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-6 text-left>\n\n              <span class="coin-info-name">{{\'APP.CRYPTO DETAILS.TOTAL VOLUME\' | translate}}</span>\n\n            </ion-col>\n\n            <ion-col col-6 class="coin-info-detail">\n\n                {{coin.market_data.total_volume[currentCurrency.toLowerCase()]  |  currency:currentCurrency }} ({{currentCurrency | uppercase}})\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-6 text-left>\n\n              <span class="coin-info-name">{{\'APP.CRYPTO DETAILS.(24H)\' | translate}}</span>\n\n            </ion-col>\n\n            <ion-col col-6 class="coin-info-detail">\n\n                <div *ngIf="coin.market_data.price_change_percentage_24h >= 0 then positive24 else negative24" ></div>\n\n                <ng-template #positive24>\n\n                  <span class="nbr-positive">+ {{coin.market_data.price_change_percentage_24h |  percent}} </span>\n\n                </ng-template>\n\n                <ng-template #negative24>\n\n                    <span class="nbr-negative">{{coin.market_data.price_change_percentage_24h |  percent}} </span>\n\n                </ng-template>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-6 text-left>\n\n              <span class="coin-info-name">{{\'APP.CRYPTO DETAILS.(7DAYS)\' | translate}}</span>\n\n            </ion-col>\n\n            <ion-col col-6 class="coin-info-detail">\n\n                <div *ngIf="coin.market_data.price_change_percentage_7d >= 0 then positive7d else negative7d" ></div>\n\n                <ng-template #positive7d>\n\n                  <span class="nbr-positive">+ {{coin.market_data.price_change_percentage_7d |  percent}} </span>\n\n                </ng-template>\n\n                <ng-template #negative7d>\n\n                    <span class="nbr-negative">{{coin.market_data.price_change_percentage_7d |  percent}} </span>\n\n                </ng-template>\n\n            </ion-col>\n\n        </ion-row>\n\n        <!-- <ion-row>\n\n            <ion-col col-6 text-left>\n\n              <span class="coin-info-name">{{\'APP.CRYPTO DETAILS.(30DAYS)\' | translate}}</span>\n\n            </ion-col>\n\n            <ion-col col-6 class="coin-info-detail">\n\n                <div *ngIf="coin.market_data.price_change_percentage_30d >= 0 then positive30d else negative30d" ></div>\n\n                <ng-template #positive30d>\n\n                  <span class="nbr-positive">+ {{coin.market_data.price_change_percentage_30d |  percent}} </span>\n\n                </ng-template>\n\n                <ng-template #negative30d>\n\n                    <span class="nbr-negative">{{coin.market_data.price_change_percentage_30d |  percent}} </span>\n\n                </ng-template>\n\n            </ion-col>\n\n        </ion-row> -->\n\n        <ion-row>\n\n          <ion-col col-6 text-left>\n\n            <span class="coin-info-name">{{\'APP.CRYPTO DETAILS.(60DAYS)\' | translate}}</span>\n\n          </ion-col>\n\n          <ion-col col-6 class="coin-info-detail">\n\n              <div *ngIf="coin.market_data.price_change_percentage_60d >= 0 then positive60d else negative60d" ></div>\n\n              <ng-template #positive60d>\n\n                <span class="nbr-positive">+ {{coin.market_data.price_change_percentage_60d |  percent}} </span>\n\n              </ng-template>\n\n              <ng-template #negative60d>\n\n                  <span class="nbr-negative">{{coin.market_data.price_change_percentage_60d |  percent}} </span>\n\n              </ng-template>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-6 text-left>\n\n              <span class="coin-info-name">{{\'APP.CRYPTO DETAILS.(1YEAR)\' | translate}}</span>\n\n            </ion-col>\n\n            <ion-col col-6 class="coin-info-detail">\n\n                <div *ngIf="coin.market_data.price_change_percentage_1y >= 0 then positive1y else negative1y" ></div>\n\n                <ng-template #positive1y>\n\n                  <span class="nbr-positive">+ {{coin.market_data.price_change_percentage_1y |  percent }} </span>\n\n                </ng-template>\n\n                <ng-template #negative1y>\n\n                    <span class="nbr-negative">{{coin.market_data.price_change_percentage_1y |  percent }} </span>\n\n                </ng-template>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n  </div>\n\n  <div class="coin-info">\n\n    <h1 class="coin-info-title">\n\n      {{\'APP.CRYPTO DETAILS.COMMUNITY INFO\' | translate}}\n\n    </h1>\n\n    <div class="coin-info-card">\n\n      <ion-row class="coin_community_data">\n\n        <ion-col>\n\n           <div class="coin_data_icon">\n\n            <ion-icon name="logo-facebook"></ion-icon>\n\n           </div>\n\n           <span>{{coin.community_data?.facebook_likes}} </span>\n\n           <span class="coin_data_name">{{\'APP.CRYPTO DETAILS.LIKES\' | translate}}</span>\n\n        </ion-col>\n\n        <ion-col>\n\n          <div class="coin_data_icon">\n\n             <ion-icon name="logo-twitter"></ion-icon>\n\n          </div>\n\n          <span>{{coin.community_data?.twitter_followers}} </span>\n\n          <span class="coin_data_name">{{\'APP.CRYPTO DETAILS.FOLLOWERES\' | translate}}</span>\n\n        </ion-col>\n\n        <ion-col>\n\n          <div class="coin_data_icon">\n\n             <ion-icon name="logo-reddit"></ion-icon>\n\n          </div>\n\n          <span>{{coin.community_data?.reddit_subscribers}} </span>\n\n          <span class="coin_data_name">{{\'APP.CRYPTO DETAILS.SUBSICRIBERS\' | translate}}</span>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n  </div>\n\n  <div class="coin_news" >\n\n    <h1 class="coin-news-title" [hidden]="(!isCategoryFound)">\n\n      {{\'APP.CRYPTO DETAILS.COIN NEWS\' | translate}} <br>\n\n      <span>{{coin.name}}</span>\n\n    </h1>\n\n    <ion-card *ngFor="let item of news"  (click)="openBrowser(item.link[0])"  class="coin-info-card">\n\n      <div   >\n\n      <ion-card-content>\n\n        <ion-card-title text-left>\n\n             <img [src]="getElement(item.description[0],\'img\').src" alt="">\n\n            {{item.title[0]}}\n\n         </ion-card-title>\n\n      </ion-card-content>\n\n      <ion-row>\n\n        <ion-col text-left>\n\n          <ng-container *ngFor="let cat of item.category">\n\n              <ion-badge >{{cat}} </ion-badge>\n\n            </ng-container>\n\n        </ion-col>\n\n        <ion-col>\n\n            <ion-note>\n\n               {{item.pubDate[0] | date}}\n\n            </ion-note>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\asem.alakabani\source\repos\Cryptoz\src\pages\crypto-details\crypto-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_11__providers_admob_admob__["a" /* AdmobFreeProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_9__providers_setting_setting__["a" /* SettingProvider */]])
    ], CryptoDetailsPage);
    return CryptoDetailsPage;
}());

//# sourceMappingURL=crypto-details.js.map

/***/ }),

/***/ 188:
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
webpackEmptyAsyncContext.id = 188;

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalMarketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_HighCharts__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_HighCharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_HighCharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_setting_setting__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__theme_chart_dark__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__theme_chart_light__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_admob_admob__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var GlobalMarketPage = /** @class */ (function () {
    function GlobalMarketPage(navCtrl, navParams, http, api, settingsProvider, _translate, admob) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.api = api;
        this.settingsProvider = settingsProvider;
        this._translate = _translate;
        this.admob = admob;
        this.currentCurrency = 'usd'; //current currency settings, Defualt USD
        this.active_cryptocurrencies = null;
        this.ongoing_icos = null;
        this.upcoming_icos = null;
        this.ended_icos = null;
        this.total_volume = null;
        this.total_market_cap = null;
        this.market_cap_percentage = null;
        this.currentChartTheme = "dark"; //default dark theme
    }
    GlobalMarketPage.prototype.ionViewWillEnter = function () {
        this.fetch_globalMarket();
        this.admob.showRandomAds();
    };
    GlobalMarketPage.prototype.fetch_globalMarket = function () {
        var _this = this;
        this.api.getGlobalMarket().then(function (data) {
            _this.marketData = data;
            _this.initMarketData();
            //initialize charts
            _this.initChart();
        });
    };
    GlobalMarketPage.prototype.initMarketData = function () {
        this.active_cryptocurrencies = this.marketData.active_cryptocurrencies;
        this.ongoing_icos = this.marketData.ongoing_icos;
        this.upcoming_icos = this.marketData.upcoming_icos;
        this.ended_icos = this.marketData.ended_icos;
        this.total_market_cap = this.marketData.total_market_cap[this.currentCurrency.toLowerCase()];
        this.total_volume = this.marketData.total_volume[this.currentCurrency.toLowerCase()];
        this.market_cap_percentage = this.marketData.market_cap_percentage;
    };
    GlobalMarketPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._translate.get('APP.HOME').subscribe(function (value) {
            _this.others_t = value['OTHERS'];
            _this.brands_t = value['BRANDS'];
        });
        this.currentCurrency = this.settingsProvider.currentSetting.currency;
        this.settingsProvider.settingSubject.subscribe(function (data) {
            _this.currentCurrency = data.currency;
            _this.currentChartTheme = data.theme;
            if (_this.marketData) {
                _this.initMarketData();
            }
        });
    };
    GlobalMarketPage.prototype.initChart = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_HighCharts__["theme"] = (this.currentChartTheme == 'dark') ? __WEBPACK_IMPORTED_MODULE_7__theme_chart_dark__["b" /* globalChartTheme */] : __WEBPACK_IMPORTED_MODULE_8__theme_chart_light__["a" /* globalLightChartTheme */];
        __WEBPACK_IMPORTED_MODULE_4_HighCharts__["setOptions"](__WEBPACK_IMPORTED_MODULE_4_HighCharts__["theme"]);
        __WEBPACK_IMPORTED_MODULE_4_HighCharts__["chart"]('chart-market-shares', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (__WEBPACK_IMPORTED_MODULE_4_HighCharts__["theme"] && __WEBPACK_IMPORTED_MODULE_4_HighCharts__["theme"].contrastTextColor) || 'black'
                        }
                    }
                }
            },
            title: {
                text: ''
            },
            series: [{
                    name: this.brands_t,
                    colorByPoint: true,
                    data: [{
                            name: 'BTC',
                            y: this.market_cap_percentage.btc,
                            sliced: true,
                            selected: true
                        }, {
                            name: 'ETH',
                            y: this.market_cap_percentage.eth
                        }, {
                            name: 'BCH',
                            y: this.market_cap_percentage.bch
                        }, {
                            name: 'LTC',
                            y: this.market_cap_percentage.ltc
                        },
                        {
                            name: this.others_t,
                            y: 100 - Object.keys(this.market_cap_percentage).map(function (key) { return _this.market_cap_percentage[key]; }).reduce(function (a, b) { return a + b; })
                        }]
                }]
        });
    };
    GlobalMarketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-global-market',template:/*ion-inline-start:"C:\Users\asem.alakabani\source\repos\Cryptoz\src\pages\global-market\global-market.html"*/'\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title text-center>\n\n        <ion-icon name="ios-stats" ></ion-icon>\n\n        {{\'APP.HOME.GLOBAL MARKET\' | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding-top>\n\n\n\n  <change-currency></change-currency>\n\n\n\n  <div class="coin-card-pink" padding>\n\n    <h1>{{total_market_cap | currency:currentCurrency}}</h1>\n\n    <span>{{\'APP.HOME.TOTAL MARKET CAPITALIZATION\' | translate}}</span>\n\n    <h1>{{total_volume | currency:currentCurrency}}</h1>\n\n      <span>{{\'APP.HOME.TOTAL VALUME\' | translate}}</span>\n\n  </div>\n\n\n\n  <div class="coin-card-pink" padding>\n\n      <h6>{{\'APP.HOME.CRYPTOCURRENCIES\' | translate}}</h6>\n\n      <ion-row justify-content-center>\n\n        <ion-col>\n\n            <h1>{{active_cryptocurrencies }}</h1>\n\n            <span>{{\'APP.HOME.ACTIVE\' | translate}}</span>\n\n        </ion-col>\n\n        <ion-col>\n\n            <h1>{{upcoming_icos }}</h1>\n\n            <span>{{\'APP.HOME.UPCOMING\' | translate}}</span>\n\n        </ion-col>\n\n        <ion-col>\n\n            <h1>{{ongoing_icos }}</h1>\n\n            <span>{{\'APP.HOME.ONGOING\' | translate}}</span>\n\n        </ion-col>\n\n        <ion-col>\n\n            <h1>{{ended_icos }}</h1>\n\n            <span>{{\'APP.HOME.ENDED\' | translate}}</span>\n\n        </ion-col>\n\n      </ion-row>\n\n  </div>\n\n  \n\n    <div id="chart-capitalization" style="display: block;"></div>\n\n  <div class="con-card">\n\n    <h1>{{\'APP.HOME.MARKET SHARE\' | translate}}</h1>\n\n    <div id="chart-market-shares" style="display: block;"></div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\asem.alakabani\source\repos\Cryptoz\src\pages\global-market\global-market.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_setting_setting__["a" /* SettingProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_9__providers_admob_admob__["a" /* AdmobFreeProvider */]])
    ], GlobalMarketPage);
    return GlobalMarketPage;
}());

//# sourceMappingURL=global-market.js.map

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/welcome/welcome.module": [
		233
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 232;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */]),
            ],
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return newsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_admob_admob__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var newsPage = /** @class */ (function () {
    function newsPage(navCtrl, api, iab, admob) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.iab = iab;
        this.admob = admob;
    }
    newsPage.prototype.ionViewWillEnter = function () {
        this.admob.showRandomAds();
    };
    newsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.api.getnews().then(function (data) {
            console.log(data);
            _this.news = data.rss.channel[0].item;
        });
    };
    newsPage.prototype.getElement = function (item, htmlElement) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(item, "text/html");
        return doc.getElementsByTagName(htmlElement)[0];
    };
    newsPage.prototype.openBrowser = function (url) {
        var browser = this.iab.create(url, '_blank', 'location=no,shouldPauseOnSuspend=yes');
        browser.show();
    };
    newsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"C:\Users\asem.alakabani\source\repos\Cryptoz\src\pages\news\news.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n      <ion-title text-center><ion-icon name="browsers"></ion-icon> {{\'APP.HOME.NEWS\' | translate}}</ion-title>\n\n      <ion-buttons right>\n\n        <button ion-button icon-only><ion-icon name="ios-search-outline"></ion-icon></button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card *ngFor="let item of news"  (click)="openBrowser(item.link[0])"  class="coin-info-card">\n\n      <ion-card-content>\n\n        <ion-card-title text-left>\n\n             <img [src]="getElement(item.description[0],\'img\').src" alt="">\n\n            {{item.title[0]}}\n\n         </ion-card-title>\n\n      </ion-card-content>\n\n      <ion-row>\n\n        <ion-col text-left>\n\n          <ng-container *ngFor="let cat of item.category">\n\n              <ion-badge >{{cat}} </ion-badge>\n\n            </ng-container>\n\n        </ion-col>\n\n        <ion-col>\n\n            <ion-note>\n\n               {{item.pubDate[0] | date}}\n\n            </ion-note>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\asem.alakabani\source\repos\Cryptoz\src\pages\news\news.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_4__providers_admob_admob__["a" /* AdmobFreeProvider */]])
    ], newsPage);
    return newsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_api__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crypto_details_crypto_details__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__watch_list_watch_list__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_setting_setting__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_admob_admob__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, api, storage, events, settingsProvider, admob, platform, translateService) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.storage = storage;
        this.events = events;
        this.settingsProvider = settingsProvider;
        this.admob = admob;
        this.platform = platform;
        this.translateService = translateService;
        //store coins data
        this.COIN_DATA = [];
        //names of columns that will be displayed
        this.displayedColumns = [
            "rank",
            "name",
            "current_price",
            "price_change_24",
            "price_change_7d",
        ];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatTableDataSource */](this.COIN_DATA);
        this.search = false; //Search bar
        this.currentPage = 1; //current Page pagination
        this.maxPageNumber = 40; // maximum page pagination, currently, they are 500 coins on the market
        this.loading = true; // display loading when fetching data from API
        this.currencyPrice = null;
        // currentCurrency = "USD" // default currency
        this.currentCurrency = "USD"; // default currency
        this.currentLanguage = this.settingsProvider.currentSetting.language; // default lang
        this.api.getnews();
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.admob.showRandomAds();
    };
    HomePage.prototype.currencyOut = function (currency, element) {
        console.log("cuurency out element", element);
        return this.currencyPrice[currency] * element;
    };
    HomePage.prototype.fetchCurrencyApi = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.api.getCurrency().then(function (e) {
                _this.currencyPrice = e;
                resolve(true);
            });
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.admob.prepareBanner();
        });
        console.log("LANGGG", this.currentLanguage);
        this.settingsProvider.settingSubject.subscribe(function (data) {
            _this.currentCurrency = _this.settingsProvider.currentSetting.currency;
            _this.currentLanguage = _this.settingsProvider.currentSetting.language;
        });
        this.fetchCurrencyApi().then(function () { return console.log("FETCH CURRENCY API DONE"); });
        // this.translateService.get('APP.CURRENCIES.usd').subscribe((txt: string) => {this.currentCurrency = txt});
        this.fetch_coins().then(function () {
            _this.checkFavorite();
            _this.dataSource.sort = _this.sort;
            console.log("dsds");
        });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //subscribe to event when add new coin to favorite
        this.events.subscribe("toggle_favorite", function (coin_id, is_favorite) {
            _this.COIN_DATA.forEach(function (e) {
                if (e.id == coin_id) {
                    e.is_favorite = is_favorite;
                }
            });
        });
    };
    HomePage.prototype.fetch_coins = function (infiniteScroll) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.api.getAllCoins(_this.currentPage, infiniteScroll).then(function (data) {
                _this.COIN_DATA = _this.COIN_DATA.concat(data);
                _this.dataSource = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatTableDataSource */](_this.COIN_DATA);
                _this.dataSource.sortingDataAccessor = function (item, property) {
                    switch (property) {
                        case "current_price":
                            return item.market_data.current_price[_this.currentCurrency.toLowerCase()];
                        case "price_change_24":
                            return item.market_data.price_change_percentage_24h;
                        case "price_change_7d":
                            return item.market_data.price_change_percentage_7d;
                    }
                };
                _this.loading = false;
                resolve(true);
            });
        });
    };
    HomePage.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    HomePage.prototype.openCrypto = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__crypto_details_crypto_details__["a" /* CryptoDetailsPage */], { coin: data });
    };
    HomePage.prototype.checkFavorite = function () {
        var _this = this;
        this.storage.get("favorites").then(function (val) {
            var favorites = val;
            if (favorites) {
                _this.COIN_DATA.forEach(function (e) {
                    if (favorites.map(function (e) { return e.id; }).indexOf(e.id) != -1) {
                        e.is_favorite = true;
                    }
                });
            }
        });
    };
    HomePage.prototype.openWatchList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__watch_list_watch_list__["a" /* watchListPage */]);
    };
    HomePage.prototype.loadMoreCoins = function (infiniteScroll) {
        this.currentPage++;
        this.fetch_coins(infiniteScroll);
        if (this.currentPage === this.maxPageNumber) {
            infiniteScroll.enable(false);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatSort */])
    ], HomePage.prototype, "sort", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"C:\Users\asem.alakabani\source\repos\Cryptoz\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title text-center>   <ion-icon name="trending-up" ></ion-icon> {{\'APP.HOME.All Coins\' | translate}}   </ion-title>\n\n    <ion-buttons right>\n\n      <button (click)="openWatchList()" ion-button icon-only><ion-icon name="md-eye"></ion-icon></button>\n\n    </ion-buttons>\n\n    <ion-buttons left>\n\n      <button (click)="search = !search" ion-button icon-only><ion-icon name="ios-search-outline"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n      <ng-container *ngIf="!loading">\n\n          <ion-item class="cp-search" *ngIf="search">\n\n            <ion-label stacked><h2>{{\'APP.HOME.SEARCH\' | translate}}</h2> </ion-label>\n\n            <ion-input (keyup)="applyFilter($event.target.value)" placeholder="{{\'APP.HOME.SEARCH!\' | translate}}" ></ion-input>\n\n          </ion-item>\n\n          <mat-table  #table [dataSource]="dataSource" matSort [class.marginTop]="search">\n\n            <!-- Rank Column -->\n\n          <ng-container matColumnDef="rank">\n\n              <mat-header-cell fxFlex="20px" *matHeaderCellDef mat-sort-header> # </mat-header-cell>\n\n              <mat-cell  fxFlex="20px" *matCellDef="let element; let i = index ">\n\n                <span class="crypto-rank ">#  {{i + 1}}  </span>\n\n            </mat-cell>\n\n          </ng-container>\n\n          <!-- Name Column -->\n\n          <ng-container matColumnDef="name">\n\n    \n\n            <mat-header-cell *matHeaderCellDef mat-sort-header> {{\'APP.HOME.NAME\' | translate}}  </mat-header-cell>\n\n            <mat-cell *matCellDef="let element">\n\n                <ion-row align-items-center>\n\n                        <img [src]="element.image.small" alt="">\n\n                        <div class="currency-desc">\n\n                          <h5>{{element.name}}</h5>\n\n                        <span class="crypto-symbol">{{element.symbol | uppercase }}</span>\n\n                        </div>\n\n                  </ion-row>\n\n            </mat-cell>\n\n          </ng-container>\n\n          <!-- price Column -->\n\n          <ng-container matColumnDef="current_price">\n\n            <mat-header-cell *matHeaderCellDef mat-sort-header> {{\'APP.HOME.PRICE\' | translate}} </mat-header-cell>\n\n            <mat-cell *matCellDef="let element">\n\n              {{currentCurrency.toUpperCase()}} \n\n               {{(element.market_data.current_price[currentCurrency.toLowerCase()] ? element.market_data.current_price[currentCurrency.toLowerCase()]: currencyOut(currentCurrency.toLowerCase(),element.market_data.current_price[\'usd\'])) }} </mat-cell>\n\n            <!-- <mat-cell *matCellDef="let element"> {{currencyOut(element.market_data.current_price[currentCurrency.toLowerCase()], currentCurrency)  | currency:currentCurrency }} </mat-cell> -->\n\n          </ng-container>\n\n    \n\n          <!-- 24 hour Column -->\n\n          <ng-container  matColumnDef="price_change_24">\n\n            <mat-header-cell *matHeaderCellDef mat-sort-header>  {{\'APP.HOME.24H\' | translate}} </mat-header-cell>\n\n            <mat-cell *matCellDef="let element">\n\n                <div *ngIf="element.market_data.price_change_percentage_24h >= 0 then positive else negative" ></div>\n\n                <ng-template #positive>\n\n                  <span class="nbr-positive">+ {{element.market_data.price_change_percentage_24h | percent }}</span>\n\n                </ng-template>\n\n                <ng-template #negative>\n\n                    <span class="nbr-negative">{{element.market_data.price_change_percentage_24h | percent }}</span>\n\n                </ng-template>\n\n            </mat-cell>\n\n          </ng-container>\n\n          <!-- 7 Day Column -->\n\n          <ng-container  matColumnDef="price_change_7d">\n\n            <mat-header-cell *matHeaderCellDef mat-sort-header> {{\'APP.HOME.7D\' | translate}} </mat-header-cell>\n\n            <mat-cell *matCellDef="let element">\n\n                <div *ngIf="element.market_data.price_change_percentage_7d >= 0 then positive else negative" ></div>\n\n                <ng-template #positive>\n\n                  <span class="nbr-positive">+ {{element.market_data.price_change_percentage_7d | percent }}</span>\n\n                </ng-template>\n\n                <ng-template #negative>\n\n                    <span class="nbr-negative">{{element.market_data.price_change_percentage_7d | percent }}</span>\n\n                </ng-template>\n\n            </mat-cell>\n\n          </ng-container>\n\n    \n\n          <!-- 14 Day Column -->\n\n          <!-- <ng-container  matColumnDef="price_change_14d">\n\n            <mat-header-cell *matHeaderCellDef mat-sort-header> 14d </mat-header-cell>\n\n            <mat-cell *matCellDef="let element">\n\n                <div *ngIf="element.market_data.price_change_percentage_14d >= 0 then positive else negative" ></div>\n\n                <ng-template #positive>\n\n                  <span class="nbr-positive">+ {{element.market_data.price_change_percentage_14d | percent }}</span>\n\n                </ng-template>\n\n                <ng-template #negative>\n\n                    <span class="nbr-negative">{{element.market_data.price_change_percentage_14d | percent }}</span>\n\n                </ng-template>\n\n            </mat-cell>\n\n          </ng-container> -->\n\n          <!-- 30 Day Column \n\n          <ng-container  matColumnDef="price_change_30d">\n\n            <mat-header-cell *matHeaderCellDef mat-sort-header> {{\'APP.HOME.30D\' | translate}} </mat-header-cell>\n\n            <mat-cell *matCellDef="let element">\n\n                <div *ngIf="element.market_data.price_change_percentage_30d >= 0 then positive else negative" ></div>\n\n                <ng-template #positive>\n\n                  <span class="nbr-positive">+ {{element.market_data.price_change_percentage_30d | percent }}</span>\n\n                  <ion-icon class="coin-favorite" *ngIf="element.is_favorite" name="ios-eye"></ion-icon>\n\n                </ng-template>\n\n                <ng-template #negative>\n\n                    <span class="nbr-negative">{{element.market_data.price_change_percentage_30d | percent }}</span>\n\n                    <ion-icon class="coin-favorite" *ngIf="element.is_favorite" name="ios-eye"></ion-icon>\n\n                </ng-template>\n\n            </mat-cell>\n\n          </ng-container> -->\n\n          <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>\n\n          <mat-row *matRowDef="let row; columns: displayedColumns;" (click)="openCrypto(row)"></mat-row>\n\n        </mat-table>\n\n        <ion-infinite-scroll (ionInfinite)="loadMoreCoins($event)" loadingSpinner="bubbles" loadingText="Loading Users...">\n\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n        </ion-infinite-scroll>\n\n      </ng-container>\n\n      <ng-container *ngIf="loading">\n\n              <div *ngFor="let in of [0,1,2,3,4]" class="loading_bar">\n\n                <h2><div class="load-bar"></div> </h2>\n\n                <h3><div class="load-bar"></div></h3>\n\n                <h4><div class="load-bar"></div></h4>\n\n                <h2><div class="load-bar"></div> </h2>\n\n                <h3><div class="load-bar"></div></h3>\n\n                <h4><div class="load-bar"></div></h4>\n\n              </div>\n\n      </ng-container>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\asem.alakabani\source\repos\Cryptoz\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__providers_setting_setting__["a" /* SettingProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_admob_admob__["a" /* AdmobFreeProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return darkChartTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return globalChartTheme; });
var darkChartTheme = {
    colors: ['#ac5d70', '#ab689b'],
    chart: {
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
                [0, '#201f27']
            ]
        },
        style: {
            fontFamily: '\'Unica One\', sans-serif'
        },
        plotBorderColor: '#606063'
    },
    title: {
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase',
            fontSize: '20px'
        }
    },
    subtitle: {
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase'
        }
    },
    xAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    yAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
            color: '#F0F0F0'
        }
    },
    plotOptions: {
        series: {
            dataLabels: {
                color: '#B0B0B3'
            },
            marker: {
                lineColor: '#333'
            }
        },
        boxplot: {
            fillColor: '#505053'
        },
        candlestick: {
            lineColor: 'white'
        },
        errorbar: {
            color: 'white'
        }
    },
    legend: {
        itemStyle: {
            color: '#E0E0E3'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606063'
        }
    },
    credits: {
        enabled: false
    },
    labels: {
        style: {
            color: '#707073'
        }
    },
    drilldown: {
        activeAxisLabelStyle: {
            color: '#F0F0F3'
        },
        activeDataLabelStyle: {
            color: '#F0F0F3'
        }
    },
    navigation: {
        buttonOptions: {
            symbolStroke: '#DDDDDD',
            theme: {
                fill: '#505053'
            }
        }
    },
    // scroll charts
    rangeSelector: {
        buttonTheme: {
            fill: '#505053',
            stroke: '#000000',
            style: {
                color: '#CCC'
            },
            states: {
                hover: {
                    fill: '#707073',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                },
                select: {
                    fill: '#000003',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                }
            }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
            backgroundColor: '#333',
            color: 'silver'
        },
        labelStyle: {
            color: 'silver'
        }
    },
    navigator: {
        handles: {
            backgroundColor: '#666',
            borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
            color: '#7798BF',
            lineColor: '#A6C7ED'
        },
        xAxis: {
            gridLineColor: '#505053'
        }
    },
    scrollbar: {
        barBackgroundColor: '#808083',
        barBorderColor: '#808083',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#606063',
        rifleColor: '#FFF',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
    },
    // special colors for some of the
    legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
    background2: '#505053',
    dataLabelsColor: '#B0B0B3',
    textColor: '#C0C0C0',
    contrastTextColor: '#F0F0F3',
    maskColor: 'rgba(255,255,255,0.3)'
};
var globalChartTheme = {
    colors: ['#660394', '#66039478', '#A2698B', '#A26680', '#66039478'],
    chart: {
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
                [0, '#201f27']
            ]
        },
        style: {
            fontFamily: '\'Unica One\', sans-serif'
        },
        plotBorderColor: '#606063'
    },
    title: {
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase',
            fontSize: '20px'
        }
    },
    subtitle: {
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase'
        }
    },
    xAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    yAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
            color: '#F0F0F0'
        }
    },
    plotOptions: {
        series: {
            dataLabels: {
                color: '#B0B0B3'
            },
            marker: {
                lineColor: '#333'
            }
        },
        boxplot: {
            fillColor: '#505053'
        },
        candlestick: {
            lineColor: 'white'
        },
        errorbar: {
            color: 'white'
        }
    },
    legend: {
        itemStyle: {
            color: '#E0E0E3'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606063'
        }
    },
    credits: {
        style: {
            color: '#666'
        }
    },
    labels: {
        style: {
            color: '#707073'
        }
    },
    drilldown: {
        activeAxisLabelStyle: {
            color: '#F0F0F3'
        },
        activeDataLabelStyle: {
            color: '#F0F0F3'
        }
    },
    navigation: {
        buttonOptions: {
            symbolStroke: '#DDDDDD',
            theme: {
                fill: '#505053'
            }
        }
    },
    // scroll charts
    rangeSelector: {
        buttonTheme: {
            fill: '#505053',
            stroke: '#000000',
            style: {
                color: '#CCC'
            },
            states: {
                hover: {
                    fill: '#707073',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                },
                select: {
                    fill: '#000003',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                }
            }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
            backgroundColor: '#333',
            color: 'silver'
        },
        labelStyle: {
            color: 'silver'
        }
    },
    navigator: {
        handles: {
            backgroundColor: '#666',
            borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
            color: '#7798BF',
            lineColor: '#A6C7ED'
        },
        xAxis: {
            gridLineColor: '#505053'
        }
    },
    scrollbar: {
        barBackgroundColor: '#808083',
        barBorderColor: '#808083',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#606063',
        rifleColor: '#FFF',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
    },
    // special colors for some of the
    legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
    background2: '#505053',
    dataLabelsColor: '#B0B0B3',
    textColor: '#C0C0C0',
    contrastTextColor: '#F0F0F3',
    maskColor: 'rgba(255,255,255,0.3)'
};
//# sourceMappingURL=chart.dark.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lightChartTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return globalLightChartTheme; });
var lightChartTheme = {
    colors: ['#660394', '#ab689b'],
    chart: {
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
                [0, '#f8f8f8']
            ]
        },
        style: {
            fontFamily: '\'Unica One\', sans-serif'
        },
        plotBorderColor: '#606063'
    },
    title: {
        style: {
            color: '#6c5580',
            textTransform: 'uppercase',
            fontSize: '20px'
        }
    },
    subtitle: {
        style: {
            color: '#6c5580',
            textTransform: 'uppercase'
        }
    },
    xAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#6c5580'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    yAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#6c5580'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
            color: '#F0F0F0'
        }
    },
    plotOptions: {
        series: {
            dataLabels: {
                color: '#B0B0B3'
            },
            marker: {
                lineColor: '#333'
            }
        },
        boxplot: {
            fillColor: '#505053'
        },
        candlestick: {
            lineColor: 'white'
        },
        errorbar: {
            color: 'white'
        }
    },
    legend: {
        itemStyle: {
            color: '#6c5580'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606063'
        }
    },
    credits: {
        enabled: false
    },
    labels: {
        style: {
            color: '#707073'
        }
    },
    drilldown: {
        activeAxisLabelStyle: {
            color: '#F0F0F3'
        },
        activeDataLabelStyle: {
            color: '#F0F0F3'
        }
    },
    navigation: {
        buttonOptions: {
            theme: {
                fill: '#505053'
            }
        }
    },
    // scroll charts
    rangeSelector: {
        buttonTheme: {
            fill: '#505053',
            stroke: '0',
            style: {
                color: '#CCC'
            },
            states: {
                hover: {
                    fill: '#707073',
                    stroke: '0',
                    style: {
                        color: 'white'
                    }
                },
                select: {
                    fill: '#000003',
                    stroke: '0',
                    style: {
                        color: 'white'
                    }
                }
            }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
            backgroundColor: '#333',
            color: 'silver'
        },
        labelStyle: {
            color: 'silver'
        }
    },
    navigator: {
        handles: {
            backgroundColor: '#666',
            borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
            color: '#7798BF',
            lineColor: '#A6C7ED'
        },
        xAxis: {
            gridLineColor: '#505053'
        }
    },
    scrollbar: {
        barBackgroundColor: '#808083',
        barBorderColor: '#808083',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#606063',
        rifleColor: '#FFF',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
    },
    // special colors for some of the
    legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
    background2: '#505053',
    dataLabelsColor: '#B0B0B3',
    textColor: '#C0C0C0',
    contrastTextColor: '#F0F0F3',
    maskColor: 'rgba(255,255,255,0.3)'
};
var globalLightChartTheme = {
    colors: ['#660394', '#66039478', '#A2698B', '#A26680', '#66039478'],
    chart: {
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
                [0, '#f8f8f8']
            ]
        },
        style: {
            fontFamily: '\'Unica One\', sans-serif'
        },
        plotBorderColor: '#606063'
    },
    title: {
        style: {
            color: '#6c5580',
            textTransform: 'uppercase',
            fontSize: '20px'
        }
    },
    subtitle: {
        style: {
            color: '#6c5580',
            textTransform: 'uppercase'
        }
    },
    xAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#6c5580'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    yAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#6c5580'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
            color: '#F0F0F0'
        }
    },
    plotOptions: {
        series: {
            dataLabels: {
                color: '#B0B0B3'
            },
            marker: {
                lineColor: '#333'
            }
        },
        boxplot: {
            fillColor: '#505053'
        },
        candlestick: {
            lineColor: 'white'
        },
        errorbar: {
            color: 'white'
        }
    },
    legend: {
        itemStyle: {
            color: '#6c5580'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606063'
        }
    },
    credits: {
        style: {
            color: '#666'
        }
    },
    labels: {
        style: {
            color: '#707073'
        }
    },
    drilldown: {
        activeAxisLabelStyle: {
            color: '#F0F0F3'
        },
        activeDataLabelStyle: {
            color: '#F0F0F3'
        }
    },
    navigation: {
        buttonOptions: {
            theme: {
                fill: '#505053'
            }
        }
    },
    // scroll charts
    rangeSelector: {
        buttonTheme: {
            fill: '#505053',
            stroke: '0',
            style: {
                color: '#CCC'
            },
            states: {
                hover: {
                    fill: '#707073',
                    stroke: '0',
                    style: {
                        color: 'white'
                    }
                },
                select: {
                    fill: '#000003',
                    stroke: '0',
                    style: {
                        color: 'white'
                    }
                }
            }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
            backgroundColor: '#333',
            color: 'silver'
        },
        labelStyle: {
            color: 'silver'
        }
    },
    navigator: {
        handles: {
            backgroundColor: '#666',
            borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
            color: '#7798BF',
            lineColor: '#A6C7ED'
        },
        xAxis: {
            gridLineColor: '#505053'
        }
    },
    scrollbar: {
        barBackgroundColor: '#808083',
        barBorderColor: '#808083',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#606063',
        rifleColor: '#FFF',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
    },
    // special colors for some of the
    legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
    background2: '#505053',
    dataLabelsColor: '#B0B0B3',
    textColor: '#C0C0C0',
    contrastTextColor: '#F0F0F3',
    maskColor: 'rgba(255,255,255,0.3)'
};
//# sourceMappingURL=chart.light.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return watchListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crypto_details_crypto_details__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_admob_admob__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the watchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var watchListPage = /** @class */ (function () {
    function watchListPage(navCtrl, storage, navParams, events, admob) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.events = events;
        this.admob = admob;
        this.coins = [];
    }
    watchListPage.prototype.ionViewWillEnter = function () {
        this.admob.showRandomAds();
    };
    watchListPage.prototype.removeFavorite = function (coin) {
        this.coins = this.coins.filter(function (f) {
            return f.id !== coin.id;
        });
        this.storage.set('favorites', this.coins);
        this.events.publish('toggle_favorite', coin.id, false);
    };
    watchListPage.prototype.openCrypto = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__crypto_details_crypto_details__["a" /* CryptoDetailsPage */], { coin: data });
    };
    watchListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('favorites').then(function (val) {
            _this.coins = val;
        });
    };
    watchListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-watch-list',template:/*ion-inline-start:"C:\Users\asem.alakabani\source\repos\Cryptoz\src\pages\watch-list\watch-list.html"*/'<!--\n\n  Generated template for the watchListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Watching coins</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list class="crypto_list" no-lines>\n\n    <ion-item margin-vertical	ion-item *ngFor="let coin of coins" (click)="openCrypto(coin)">\n\n      <ion-row>\n\n        <ion-col class="d-flex d-align-center ">\n\n            <img [src]="coin.image?.small" alt="">\n\n            <span padding-left>{{coin.name}}</span>\n\n        </ion-col>\n\n        <ion-col>\n\n           <button ion-button  color="light" clear (click)="$event.stopPropagation();removeFavorite(coin)" class="coin_remove">REMOVE</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item >  \n\n  </ion-list>\n\n  <h3 *ngIf="!coins" text-center>\n\n      You don\'t have any wathicng coins\n\n  </h3>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\asem.alakabani\source\repos\Cryptoz\src\pages\watch-list\watch-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__providers_admob_admob__["a" /* AdmobFreeProvider */]])
    ], watchListPage);
    return watchListPage;
}());

//# sourceMappingURL=watch-list.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_setting_setting__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_admob_admob__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, settingProvider, alertCtrl, admob, _translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settingProvider = settingProvider;
        this.alertCtrl = alertCtrl;
        this.admob = admob;
        this._translate = _translate;
        this.currencyList = ['usd', 'aud', 'eur', 'cad', 'aed', 'gbp', 'jpy', 'idr', 'inr', 'lyd', 'egp', 'rub', 'syp', 'sdg'];
        this.languageList = ['en', 'ar'];
        this.currentCurrency = this.settingProvider.currentSetting.currency;
        this.currentLanguage = this.settingProvider.currentSetting.language;
        this.isDarkTheme = true;
    }
    SettingsPage.prototype.ionViewWillEnter = function () {
        this.admob.showRandomAds();
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.settingProvider.settingSubject.subscribe(function (data) {
            //get the current currency
            _this.currentCurrency = _this.settingProvider.currentSetting.currency;
            _this.currentLanguage = _this.settingProvider.currentSetting.language;
            _this.isDarkTheme = (_this.settingProvider.currentSetting.theme === 'dark');
        });
        //this.currentCurrency = this.settingProvider.settings.currency.toLowerCase();
        this.addCurrentCurrencyFlag();
        this.addCurrentLanguageFlag();
    };
    SettingsPage.prototype.addFlag = function (el) {
        var icon = document.createElement('i');
        icon.className = "flag-icon flag-icon-" + el.innerText.substring(0, el.innerText.length - 1).toLowerCase();
        el.innerHTML = icon.outerHTML + el.innerHTML;
    };
    SettingsPage.prototype.initCurrencyIcon = function (currency) {
        var _this = this;
        setTimeout(function () {
            var currencyList = document.querySelectorAll('.select-currency .alert-radio-label ');
            var icon = document.createElement('i');
            Array.from(currencyList).forEach(function (el) {
                _this.addFlag(el);
            });
        }, 100);
    };
    SettingsPage.prototype.addLanguageFlag = function (el) {
        var language = el.innerText == 'EN' ? 'US' : 'LY';
        var icon = document.createElement('i');
        icon.className = "flag-icon flag-icon-" + language.toLowerCase();
        el.innerHTML = icon.outerHTML + el.innerHTML;
    };
    SettingsPage.prototype.initlanguageIcon = function (language) {
        var _this = this;
        setTimeout(function () {
            var languageList = document.querySelectorAll('.select-language .alert-radio-label ');
            var icon = document.createElement('i');
            Array.from(languageList).forEach(function (el) {
                _this.addLanguageFlag(el);
            });
        }, 100);
    };
    SettingsPage.prototype.addCurrentCurrencyFlag = function () {
        var _this = this;
        setTimeout(function () {
            console.log("entering in curren funciton");
            var currentCurrencyNode = document.querySelector('.item-currency .select-text');
            currentCurrencyNode.innerHTML = _this.currentCurrency.toUpperCase();
            _this.addFlag(currentCurrencyNode);
        }, 100);
    };
    SettingsPage.prototype.addCurrentLanguageFlag = function () {
        var _this = this;
        setTimeout(function () {
            var currentLanguageNode = document.querySelector('.item-language .select-text');
            currentLanguageNode.innerHTML = _this.currentLanguage.toUpperCase();
            console.log("in add current " + currentLanguageNode.innerText);
            _this.addLanguageFlag(currentLanguageNode);
        }, 100);
    };
    SettingsPage.prototype.changeCurrentCurrency = function () {
        this.addCurrentCurrencyFlag();
        this.settingProvider.currentSetting.currency = this.currentCurrency.toUpperCase();
        this.settingProvider.setSettings();
    };
    SettingsPage.prototype.changeCurrentLanguage = function (event) {
        this.addCurrentLanguageFlag();
        this.settingProvider.currentSetting.language = event;
        this._translate.use(event);
        this.settingProvider.setSettings();
    };
    SettingsPage.prototype.showAlertCredit = function () {
        var alert = this.alertCtrl.create({
            title: 'Credits',
            subTitle: 'We are using Coingecko API to get charts data and other watch.',
            buttons: ['OK']
        });
        alert.present();
    };
    SettingsPage.prototype.updateTheme = function () {
        this.settingProvider.currentSetting.theme = (this.isDarkTheme) ? 'dark' : 'light';
        this.settingProvider.setSettings();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\asem.alakabani\source\repos\Cryptoz\src\pages\settings\settings.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title text-center>\n\n      <ion-icon name="ios-cog-outline"></ion-icon>\n\n      {{\'APP.HOME.SETTINGS\' | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list class="list-setting">\n\n      <ion-list-header>\n\n        {{\'APP.HOME.GENERAL SETTINGS\' | translate}}\n\n      </ion-list-header>\n\n      <ion-item>\n\n          <ion-label>{{\'APP.HOME.THEME\' | translate}}</ion-label>\n\n         <ion-toggle  [(ngModel)]="isDarkTheme" (ionChange)="updateTheme()" checked="false"></ion-toggle>\n\n      </ion-item>\n\n      <ion-item class="item-currency"> \n\n          <ion-label>{{\'APP.HOME.CURRENCY\' | translate}}</ion-label>\n\n          <ion-select  [selectOptions]="{cssClass : \'select-currency\'}" (ionChange)="changeCurrentCurrency()" (click)="initCurrencyIcon(currentCurrency)" [(ngModel)]="currentCurrency">\n\n              <ion-option  class="select-currency" *ngFor="let currency of currencyList" [value]="currency">\n\n                {{currency | uppercase}}\n\n              </ion-option>\n\n            </ion-select>\n\n      </ion-item>\n\n      <ion-item class="item-language"> \n\n          <ion-label>{{\'APP.HOME.LANGUAGE\' | translate}}</ion-label>\n\n          <ion-select  [selectOptions]="{cssClass : \'select-language\'}" (ionChange)="changeCurrentLanguage($event)" (click)="initlanguageIcon(currentLanguage)" [(ngModel)]="currentLanguage">\n\n              <ion-option  class="select-language" *ngFor="let language of languageList" [value]="language" >\n\n                {{language | uppercase}}\n\n              </ion-option>\n\n            </ion-select>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list class="list-setting">\n\n        <ion-list-header>\n\n          {{\'APP.HOME.ABOUT\' | translate}}\n\n        </ion-list-header>\n\n        <ion-item (click)="showAlertCredit()">\n\n            <ion-label>{{\'APP.HOME.CREDITS\' | translate}}</ion-label>\n\n        </ion-item>\n\n     </ion-list>\n\n\n\n     <h6 ion-text text-center class="credits"> {{\'APP.HOME.DINARO\' | translate}}</h6>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\asem.alakabani\source\repos\Cryptoz\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_setting_setting__["a" /* SettingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_admob_admob__["a" /* AdmobFreeProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(322);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_global_market_global_market__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_crypto_details_crypto_details__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_module__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_cdk_table__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_admob_free__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_http__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_setting_httpLoaderFactory__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_news_news__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_api_api__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_watch_list_watch_list__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_setting_setting__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_components_module__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_settings_settings__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_in_app_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_admob_admob__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_network__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_welcome_welcome__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_welcome_welcome_module__ = __webpack_require__(233);
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_news_news__["a" /* newsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_crypto_details_crypto_details__["a" /* CryptoDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_global_market_global_market__["a" /* GlobalMarketPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_watch_list_watch_list__["a" /* watchListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_module__["a" /* AngularMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_30__pages_welcome_welcome_module__["WelcomePageModule"],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], { mode: 'md' }, {
                    links: [
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_24__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: __WEBPACK_IMPORTED_MODULE_15__providers_setting_httpLoaderFactory__["a" /* httpLoaderFactory */],
                        deps: [__WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_news_news__["a" /* newsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_crypto_details_crypto_details__["a" /* CryptoDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_global_market_global_market__["a" /* GlobalMarketPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_watch_list_watch_list__["a" /* watchListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_setting_setting__["a" /* SettingProvider */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_27__providers_admob_admob__["a" /* AdmobFreeProvider */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_http__["a" /* HTTP */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 357:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 359:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatSortModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonToggleModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatSortModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonToggleModule */]],
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());

//# sourceMappingURL=angular-material.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_setting_setting__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, network, toastCtrl, setting, storage, _translate) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.setting = setting;
        this.storage = storage;
        this._translate = _translate;
        //rootPage:any;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        this.theme = "dark"; //default theme
        this.language = "en"; //default theme
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        this._translate.setDefaultLang("en");
        //this.storage.get('settings').then((settings)=>{
        //if(settings.language){
        //console.log("LANG FROM MSTORAGE", settings.language)
        // this._translate.use(settings.language);
        // }
        // })
        this.storage.get('isWelcomed').then(function (val) {
            if (val) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */];
            }
        });
        this.platform.ready().then(function () {
            console.log("LANGG COMPONENT", _this.setting.currentSetting.language);
            console.log("LANGG COMPONENT", _this.setting.currentSetting.currency);
            _this.setting.settingSubject.subscribe(function (data) {
                _this.theme = _this.setting.currentSetting.theme;
                _this.language = _this.setting.currentSetting.language;
            });
            _this.listenConnection();
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleLightContent();
            _this.statusBar.overlaysWebView(false);
            _this.statusBar.backgroundColorByHexString('##0264ed');
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.listenConnection = function () {
        var _this = this;
        this.network.onDisconnect()
            .subscribe(function () {
            var toast = _this.toastCtrl.create({
                message: 'Connexion lost',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\asem.alakabani\source\repos\Cryptoz\src\app\app.html"*/'<ion-nav [root]="rootPage" [class]="theme+\'-theme\'"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\asem.alakabani\source\repos\Cryptoz\src\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_setting_setting__["a" /* SettingProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = httpLoaderFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_http_loader__ = __webpack_require__(451);

function httpLoaderFactory(httpClient) {
    return new __WEBPACK_IMPORTED_MODULE_0__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](httpClient, './assets/lang/', '.json');
}
//# sourceMappingURL=httpLoaderFactory.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__change_currency_change_currency__ = __webpack_require__(454);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__change_currency_change_currency__["a" /* ChangeCurrencyComponent */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__change_currency_change_currency__["a" /* ChangeCurrencyComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeCurrencyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_setting_setting__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangeCurrencyComponent = /** @class */ (function () {
    function ChangeCurrencyComponent(settingsProvider, navCtrl) {
        this.settingsProvider = settingsProvider;
        this.navCtrl = navCtrl;
    }
    ChangeCurrencyComponent.prototype.getFlag = function () {
        return 'flag-icon flag-icon-' + this.settingsProvider.currentSetting.currency.substring(0, this.settingsProvider.currentSetting.currency.length - 1).toLowerCase();
    };
    ChangeCurrencyComponent.prototype.pushSetting = function () {
        this.navCtrl.parent.select(3);
    };
    ChangeCurrencyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'change-currency',template:/*ion-inline-start:"C:\Users\asem.alakabani\source\repos\Cryptoz\src\components\change-currency\change-currency.html"*/'<span  class="current-currency">current currency</span>\n\n<div class="row">\n\n        <i [class]="getFlag()"></i>\n\n        <span>{{settingsProvider.currentSetting.currency}} </span>\n\n        <span (click)="pushSetting()" class="currency-change">Change</span>\n\n</div>\n\n'/*ion-inline-end:"C:\Users\asem.alakabani\source\repos\Cryptoz\src\components\change-currency\change-currency.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_setting_setting__["a" /* SettingProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]])
    ], ChangeCurrencyComponent);
    return ChangeCurrencyComponent;
}());

//# sourceMappingURL=change-currency.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingProvider = /** @class */ (function () {
    function SettingProvider(storage) {
        var _this = this;
        this.storage = storage;
        //initial default settings 
        this.currentSetting = {
            theme: 'light',
            currency: 'USD',
            language: 'en'
        };
        this.settingSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](this.currentSetting);
        this.loadSetting();
        this.settingSubject.subscribe(function (newsetting) {
            _this.currentSetting = newsetting;
        });
    }
    SettingProvider.prototype.loadSetting = function () {
        var _this = this;
        this.storage.get('settings').then(function (value) {
            if (value) {
                _this.currentSetting = value;
                _this.settingSubject.next(_this.currentSetting);
            }
        });
    };
    SettingProvider.prototype.setSettings = function () {
        this.settingSubject.next(this.currentSetting);
        this.storage.set('settings', this.currentSetting);
    };
    SettingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], SettingProvider);
    return SettingProvider;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmobFreeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdmobFreeProvider = /** @class */ (function () {
    function AdmobFreeProvider(admob, platform) {
        var _this = this;
        this.admob = admob;
        this.platform = platform;
        this.clickToShowAds = 5; //<-- number of time user click on the app before the ads shown
        this.bannerConfig = {
            id: "ca-app-pub-2249157507977141/9983566656",
            autoShow: true,
            bannerAtTop: false,
            isTesting: false,
        };
        this.InterstitialConfig = {
            id: "ca-app-pub-2249157507977141/3362317982",
            autoShow: true,
            isTesting: false,
        };
        this.RewardVideoConfig = {
            id: "ca-app-pub-2249157507977141/9663997250",
            autoShow: true,
            isTesting: false,
        };
        this.isBannerShown = false;
        this.platform.ready().then(function () {
            if (_this.platform.is('android')) {
                _this.bannerId = 'ca-app-pub-2249157507977141/9983566656'; //<-- Past your banner admob id  for android here
                _this.InterstitialId = 'ca-app-pub-2249157507977141/3362317982'; //<-- Past your Interstitial admob id for android here
                _this.VideoID = "ca-app-pub-2249157507977141/9663997250"; //<-- Past your video admob id for android here
                // this.bannerConfig.id = this.bannerId;
                // this.InterstitialConfig.id = this.InterstitialId;
                // this.VideoID.id = this.VideoID;
                console.log("config admob success");
            }
            if (_this.platform.is('ios')) {
                _this.bannerId = "ca-app-pub-2249157507977141/7720360192"; //<-- Past your banner admob id  for ios here
                _this.InterstitialId = "ca-app-pub-2249157507977141/6849706620"; //<-- Past your Interstitial admob id for ios here
                _this.VideoID = "ca-app-pub-2249157507977141/1510175066"; //<-- Past your video admob id for ios here
                // this.bannerConfig.id = this.bannerId;
                // this.InterstitialConfig.id = this.InterstitialId;
                // this.VideoID.id = this.VideoID;
                console.log("config admob success");
            }
            _this.admob.banner.config(_this.bannerConfig);
            _this.admob.interstitial.config(_this.InterstitialConfig);
            _this.admob.rewardVideo.config(_this.RewardVideoConfig);
        });
    }
    AdmobFreeProvider.prototype.prepareBanner = function () {
        // show and hide banner every time
        var _this = this;
        setInterval(function () {
            //sho banner if it's not exist
            if (!_this.isBannerShown) {
                return _this.admob.banner.prepare().then(function () {
                    console.log('banner success');
                    _this.isBannerShown = true;
                }).catch(function (e) {
                    console.log(JSON.stringify(e));
                });
            }
            else {
                _this.isBannerShown = false;
                _this.admob.banner.hide();
                console.log('hide success');
            }
        }, 60000);
    };
    AdmobFreeProvider.prototype.prepareInterstitial = function () {
        return this.admob.interstitial.prepare().then(function () {
            console.log('Interstitial success');
        }).catch(function (e) {
            console.log(JSON.stringify(e));
        });
    };
    AdmobFreeProvider.prototype.prepareVideo = function () {
        return this.admob.rewardVideo.prepare().then(function () {
            console.log('Video success');
        }).catch(function (e) {
            console.log(JSON.stringify(e));
        });
    };
    AdmobFreeProvider.prototype.showRandomAds = function () {
        if (this.clickToShowAds == 0) {
            this.clickToShowAds = 5; //<-- number of time user click on the app before the ads shown;
            var random = Math.round(Math.random());
            //show random ads, either video or interstitial
            (random == 0) ? this.prepareVideo() : this.prepareInterstitial();
        }
        else {
            this.clickToShowAds--;
            return false;
        }
    };
    AdmobFreeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], AdmobFreeProvider);
    return AdmobFreeProvider;
}());

//# sourceMappingURL=admob.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_xml2js__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_xml2js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var default_api_url = "https://api.coingecko.com/api/v3";
var default_news_rss = "http://cointelegraph.com/rss";
var default_news_rss_by_coin = "http://cointelegraph.com/rss/tag/";
var ApiProvider = /** @class */ (function () {
    function ApiProvider(http) {
        this.http = http;
    }
    ApiProvider.prototype.getAllCoins = function (pageNumber, infiniteScroll) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(default_api_url + "/coins?per_page=50&page=" + pageNumber).subscribe(function (data) {
                if (infiniteScroll) {
                    infiniteScroll.complete();
                }
                resolve(data);
            }, function (e) {
                reject(e);
            });
        });
    };
    ApiProvider.prototype.getCoinInfo = function (coin_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(default_api_url + "/coins/" + coin_id).subscribe(function (data) {
                resolve(data);
            }, function (e) {
                reject(e);
            });
        });
    };
    ApiProvider.prototype.getCoinChart = function (coin_id, currency, period) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(default_api_url + "/coins/" + coin_id + "/market_chart?vs_currency=" + currency + "&days=" + period).subscribe(function (data) {
                resolve(data);
            }, function (e) {
                reject(e);
            });
        });
    };
    ApiProvider.prototype.getGlobalMarket = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(default_api_url + "/global").subscribe(function (response) {
                resolve(response.data);
            }, function (e) {
                reject(e);
            });
        });
    };
    ApiProvider.prototype.getnews = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            headers.append('Content-type', 'application/xml');
            _this.http.get(default_news_rss, { responseType: 'text', headers: headers })
                .subscribe(function (data) {
                console.log('RSS DATA', data);
                __WEBPACK_IMPORTED_MODULE_3_xml2js__["parseString"](data, { trim: true }, function (err, result) {
                    resolve(result);
                });
            }, function (e) {
                console.log("FOUND THE PROBLEM");
                // reject(e);
            });
        });
    };
    ApiProvider.prototype.getnewsByCoin = function (coin) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            var uri = default_news_rss_by_coin + coin;
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            headers.append('Content-type', 'application/xml');
            _this.http.get(uri, { responseType: 'text', headers: headers })
                .subscribe(function (data) {
                console.log('RSS DATA', data);
                __WEBPACK_IMPORTED_MODULE_3_xml2js__["parseString"](data, { trim: true }, function (err, result) {
                    resolve(result);
                });
            }, function (e) {
                console.log("FOUND THE PROBLEM");
                // reject(e);
            });
        });
    };
    ApiProvider.prototype.getCurrency = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            _this.http.get('https://62376f9fb08c39a3af805515.mockapi.io/currencies', { responseType: 'json', headers: headers })
                .subscribe(function (data) {
                console.log("LOADING DATA !!!", data);
                resolve(data[0]);
                reject({
                    "egp": 0,
                    "lyd": 0,
                    "sdg": 0
                });
                return data;
            }, function (e) {
                console.log("REJECTED! ");
                reject(e);
            });
        });
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], ApiProvider);
    return ApiProvider;
    var _a;
}());

//# sourceMappingURL=api.js.map

/***/ })

},[310]);
//# sourceMappingURL=main.js.map