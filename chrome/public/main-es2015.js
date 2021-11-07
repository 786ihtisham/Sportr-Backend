(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Data-source-code\matan-repository-main\src\main.ts */"zUnb");


/***/ }),

/***/ "2IJj":
/*!************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.ts ***!
  \************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _manage_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manage-article.service */ "fUOv");




class SideBarComponent {
    constructor(authService, manageArticle, eRef) {
        this.authService = authService;
        this.manageArticle = manageArticle;
        this.eRef = eRef;
        this.settingManage = false;
        this.sideFeedBar = false;
        this.notificationManage = false;
        this.dMode = "false";
        this.showNotification = false;
        this.favArticle = false;
        this.darkModeArray = [];
        this.loginManage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.favoriteArticle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newsApi = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.profileSettingMange = () => {
            this.settingManage = true;
        };
        this.sideFeedBarManage = () => {
            this.sideFeedBar = true;
        };
        this.notificationOpen = () => {
            this.notificationManage = true;
        };
        this.darkmode = () => {
            var appBody = document.getElementsByTagName("BODY")[0];
            if (!(this.dMode == "false")) {
                appBody.classList.add('darkmode');
            }
            else {
                appBody.classList.remove('darkmode');
            }
            if (this.dMode == "false")
                this.dMode = 'true';
            else
                this.dMode = 'false';
            localStorage.setItem('darkMode', this.dMode);
        };
        this.getNewsApi = () => {
            this.newsApi.emit(this.manageArticle.getNewsApiFlag());
        };
    }
    clickout(event) {
        if (this.eRef.nativeElement.contains(event.target)) {
        }
        else {
            document.getElementById("Settings").classList.remove("active");
            document.getElementById("Notification").classList.remove("active");
        }
    }
    ngOnInit() {
        if (localStorage.getItem('darkMode') == null) {
            this.dMode = "false";
        }
        else if (localStorage.getItem('darkMode') == 'false') {
            this.dMode = "true";
            this.darkmode();
        }
    }
    signOut() {
        this.authService.signOut();
        localStorage.clear();
        this.loginManage.emit(false);
    }
    addFavoriteArticle() {
        this.favoriteArticle.emit(true);
    }
    removeFavoriteArticle() {
        this.favoriteArticle.emit(false);
    }
}
SideBarComponent.ɵfac = function SideBarComponent_Factory(t) { return new (t || SideBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["SocialAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_manage_article_service__WEBPACK_IMPORTED_MODULE_2__["ManageArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
SideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideBarComponent, selectors: [["app-side-bar"]], hostBindings: function SideBarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideBarComponent_click_HostBindingHandler($event) { return ctx.clickout($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { loginData: "loginData" }, outputs: { loginManage: "loginManage", favoriteArticle: "favoriteArticle", newsApi: "newsApi" }, decls: 195, vars: 4, consts: [["id", "sidebar", 1, "sidebar"], [1, "sidebar_content"], [1, "spaces-bar"], [1, "spaces-bar-content"], [1, "sidebar-top"], [1, "toolnew"], ["id", "home", "flow", "right", "tooltip", "Home", 1, "sidebar_link"], ["data-tab", "tab-1", "href", "#tab1", 3, "click"], [1, "sidebar_content_col"], [1, "sidebar_content_col_inner", "sidebar_content_col_inner_1"], ["src", "assets/images/logoill.png", "alt", "", 1, "logo"], ["id", "#", "onclick", "menu()", 1, "group_list_style"], ["data-tab", "tab-1", "href", "#tab1", "flow", "right", "tooltip", "Feed", 1, "sidebar_link"], [1, "material-icons"], [1, "sidebar-body"], ["id", "SaveArticle", 1, "group_list_style"], ["data-tab", "tab-1", "href", "#tab1", "flow", "right", "tooltip", "Saved Items", 1, "sidebar_link", 3, "click"], [1, "position-relative", "group_list_style"], ["data-tab", "tab", "href", "#tab15", "onclick", "Notificationopen()", "flow", "right", "tooltip", "Notifications", 1, "sidebar_link"], ["id", "dark-mode-toggle", 1, "dark-mode-toggle", "group_list_style"], ["data-tab", "#", "href", "#tab1", "onclick", "myFunction();", "flow", "right", "tooltip", "Switch lighting Mode", 1, "sidebar_link"], [1, "material-icons-outlined", 3, "click"], [1, "sidebar-bottom"], ["data-tab", "tab", "href", "#tab13", "flow", "right", "tooltip", "Profile", "onclick", "Settingsopen()", 1, "sidebar_link"], ["href", "#", 1, "btn-custom", "profile", "align"], [3, "src"], ["id", "Notification", 1, "Notification_sidebar"], [1, "Notification_content"], [1, "noti-title"], [1, "float-right"], ["href", "javascript: void(0);"], [1, "scrolllist"], [1, "notify-item"], [1, "notify-icon", "bg-primary"], [1, "notify-details"], [1, "msg-time"], ["ng-if", "notification.cta", "ng-click", "logNotificationCta(notification, $event)", 1, "cta"], ["href", "", "ng-click", "::shareAfterLogin('twitter')", 1, "twitter"], ["href", "", "ng-click", "::shareAfterLogin('facebook')", 1, "facebook"], [1, "notify-icon"], ["src", "assets/images/profilenoti.png", "alt", "", 1, "img-fluid", "rounded-circle"], [1, "user-msg"], [1, "d", "notify-item"], [1, "notify-icon", "bg-info"], ["src", "https://yt3.ggpht.com/ytc/AAUvwngHSD7Xxh5h1yH1RAJfpTIHujIEYI3eyncOB5fwyA=s88-c-k-c0x00ffffff-no-rj", "alt", "", 1, "img-fluid", "rounded-circle"], ["href", "javascript:void(0);", 1, "text-center", "notify-item", "notify-all"], ["id", "Settings", 1, "settings_sidebar"], [1, "Settingsmenu_content"], [1, "menu-section-body"], [1, "left-settings"], [1, "sidebartiltle"], [1, "rowinfo", "checkboxrow"], [1, "icon"], ["src", "assets/images/fullload.png", "alt", "", 1, "img-responsive"], ["type", "checkbox", 1, "settingtoggle"], ["src", "assets/images/mostvisited.png", "alt", "", 1, "img-responsive"], ["onclick", "openNew()", 1, "position-relative", "group_list_style"], ["data-tab", "ta", "href", "#b1", 1, "linkhover"], [1, "rowinfo"], [1, "align"], ["src", "assets/images/Explore.png", 1, "img-responsive"], ["src", "assets/images/arrow.png", 1, "arrowright"], ["src", "assets/images/Doante.png", 1, "img-responsive"], ["src", "assets/images/Plusinvite.png", 1, "img-responsive"], ["src", "assets/images/arrow.png", "alt", "", 1, "arrowright"], ["src", "assets/images/feedback.png", 1, "img-responsive"], ["data-tab", "ta", "onclick", "subitweb()", 1, "linkhover"], ["src", "assets/images/Suggest.png", 1, "img-responsive"], [1, "right-settings"], [1, "links"], ["href", "http://www.Sportr.io/about/bug"], ["href", "https://www.Sportr.io/privacy"], ["href", "https://www.Sportr.io/terms"], [1, "menu-section-footer", "userinfo"], ["alt", "", 1, "profilesettings", 3, "src"], [1, "logout", "hoverbutton", 3, "click"]], template: function SideBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideBarComponent_Template_a_click_7_listener() { return ctx.removeFavoriteArticle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideBarComponent_Template_a_click_21_listener() { return ctx.addFavoriteArticle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "bookmark_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "notifications_none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideBarComponent_Template_i_click_37_listener() { return ctx.darkmode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "brightness_2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Notification ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Clear All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "perm_identity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "1 min ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " If you like what we do, please tell your friends and share the love for Sportr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Founder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Yam Sasson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Thank you for helping Sportr grow!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Nov 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "New user registered with your invitation! thank you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "5 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Founder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Dan Bloom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Hi, I want to welcome you to Sportr. Please let us know what you think");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " View All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "ul", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h4", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Full view on load");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Most visited websites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h4", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "What's new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h4", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "How you can halp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Doante");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Invite friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Give us feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Suggest a link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "ul", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "h4", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Report a bug");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Terms of Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "button", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideBarComponent_Template_button_click_193_listener() { return ctx.signOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.loginData.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.loginData.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.loginData.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("via ", ctx.loginData.provider, "");
    } }, styles: [".profile-setting-close[_ngcontent-%COMP%]{\n  width: 17px;\n  float: right;\n  margin-top: -17px;\n  margin-right: 11px;\n}\n\n.settings_sidebar[_ngcontent-%COMP%]{\n  display: inline-block;\n}\n\n.iframe[_ngcontent-%COMP%]{\n  position: absolute;\n  top: 2%;\n  right: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLXNldHRpbmctY2xvc2V7XG4gIHdpZHRoOiAxN3B4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IC0xN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDExcHg7XG59XG5cbi5zZXR0aW5nc19zaWRlYmFye1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uaWZyYW1le1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMiU7XG4gIHJpZ2h0OiAwJTtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-bar',
                templateUrl: './side-bar.component.html',
                styleUrls: ['./side-bar.component.css']
            }]
    }], function () { return [{ type: angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["SocialAuthService"] }, { type: _manage_article_service__WEBPACK_IMPORTED_MODULE_2__["ManageArticleService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { loginData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loginManage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], favoriteArticle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], newsApi: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], clickout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "5hVl":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _chrome_top_sites_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chrome-top-sites.service */ "QU36");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function NavBarComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topsite_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", topsite_r5.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://www.google.com/s2/favicons?domain=", topsite_r5.url, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function NavBarComponent_div_180_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_180_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const topsite_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.removeTopSites(topsite_r6._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topsite_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://www.google.com/s2/favicons?sz=64&domain=", topsite_r6.url, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](topsite_r6.url);
} }
function NavBarComponent_li_199_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topsite_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", topsite_r9.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://www.google.com/s2/favicons?sz=64&domain=", topsite_r9.url, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "active": a0 }; };
const _c1 = function (a0) { return { "show": a0 }; };
const _c2 = function (a0) { return { "display-none": a0 }; };
const _c3 = function (a0) { return { "red-border": a0 }; };
class NavBarComponent {
    constructor(chromeTopSites, eRef) {
        this.chromeTopSites = chromeTopSites;
        this.eRef = eRef;
        this.google_bar = false;
        this.chromeTopSite = false;
        this.siteURLFlag = false;
        this.siteUrlError = 'Please Enter the HTTPS URL';
        this.showModel = false;
        this.getTopChromeTopSites = () => {
            this.chromeTopSites.getChromeTopSites(localStorage.getItem("userId")).subscribe(data => {
                this.topSites = [];
                this.topSites = data.data;
            });
        };
        this.manageGoogleBar = () => {
            this.google_bar = true;
        };
        this.handleChromeTopSites = () => {
            this.chromeTopSite = !this.chromeTopSite;
        };
        this.removeTopSites = (id) => {
            this.chromeTopSites.removeChromeTopSites(id).subscribe((data) => {
                if (data) {
                    this.getTopChromeTopSites();
                }
            });
        };
        this.addChromeSite = () => {
            var regex = /^(https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
            var flag = regex.test(this.siteUrl);
            if (!flag) {
                this.siteURLFlag = true;
                return;
            }
            this.siteURLFlag = false;
            this.chromeTopSites.addChromeTopSites(this.siteUrl, localStorage.getItem("userId")).subscribe((data) => {
                if (data)
                    this.getTopChromeTopSites();
            });
        };
        this.openGoogle = (value) => {
            window.open('http://google.com/search?q=' + value);
        };
        this.siteUrl = '';
    }
    clickout(event) {
        if (this.eRef.nativeElement.contains(event.target)) {
            console.log(event.target);
            if (event.target != document.getElementById('googleUl') && event.target != document.getElementById('clickImage')) {
                this.google_bar = false;
            }
            if (event.target == document.getElementById('bookmark_modalCustome')) {
                document.getElementById('bookmark_modal_1').classList.remove('show');
            }
        }
        else {
            this.google_bar = false;
            if (document.getElementById("googleapps").classList.contains('active')) {
                document.getElementById("googleapps").classList.remove('active');
            }
        }
    }
    ngOnInit() {
        this.getTopChromeTopSites();
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chrome_top_sites_service__WEBPACK_IMPORTED_MODULE_1__["ChromeTopSitesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], hostBindings: function NavBarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_click_HostBindingHandler($event) { return ctx.clickout($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 200, vars: 17, consts: [[1, "header", "top-nav"], [1, "inner-content", 2, "z-index", "1"], [1, "pull-left", "nav-icon"], [1, "search-container"], ["id", "searchForm", 1, "ng-pristine", "ng-valid", "ng-valid-maxlength", 3, "ngSubmit"], [1, "input"], [1, "material-icons"], ["maxlength", "50", "type", "text", "placeholder", "Search Google", "tabindex", "2", "lookahead", "", "autocomplete", "off", 1, "searchBar"], ["google", ""], [1, "googleapps_icon"], ["flow", "down", "tooltip", "Google Apps", 1, "btn", "btn-custom", "GoogleApps", "align", 3, "click"], ["src", "assets/images/googleappsoff.svg", "alt", "googleappsoff"], ["id", "clickImage", "src", "assets/images/googleappson.svg", "alt", "googleappson", 1, "img-top"], [1, "pull-right", "top-logo"], [1, "socials-icon"], ["flow", "down", "tooltip", "Add shortcuts"], [3, "click"], ["width", "11", "height", "10", "viewBox", "0 0 11 10", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "transparent-background"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.16379 0.353027H4.83615V4.33573L0.853149 4.33573L0.853149 5.66337H4.83615V9.6465H6.16379V5.66337H10.1466V4.33573L6.16379 4.33573V0.353027Z", "fill", "#202124"], ["data-toggle", "tooltip", "flow", "down", 4, "ngFor", "ngForOf"], ["id", "googleapps", 1, "sidebar_google", 3, "ngClass"], [1, "sidebar_google_content"], [1, "GoogleAppsList"], ["id", "googleUl"], [1, "ligoogle"], ["href", "https://myaccount.google.com", "target", "_blank", 1, "sidebar_applink"], [1, "dsds"], ["src", "assets/images/Googleapps/Account.png"], [1, "sada"], ["href", "https://www.google.com", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Search.png"], ["href", "https://drive.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/drive.png"], ["href", "https://mail.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/gmail.png"], ["href", "https://calendar.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Calender.png"], ["href", "https://maps.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Maps.png"], ["href", "https://Translate.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Translate.png"], ["href", "https://www.youtube.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Youtube.png"], ["href", "https://Earth.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Earth.png"], ["href", "https://Photos.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Photos.png"], ["jsname", "hgDUwe", 1, "dGrefb"], ["href", "https://sheets.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/sheets.png"], ["href", "https://docs.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/docs.png"], ["href", "https://Slides.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Slides.png"], ["href", "https://Blogger.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Blogger.png"], ["href", "https://Hangout.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Hangout.png"], ["href", "https://Mybusiness.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/My business.png"], ["href", "https://classroom.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/classroom.png"], ["href", "https://Keep.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Keep.png"], ["href", "https://Jamboard.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Jamboard.png"], ["href", "https://www.google.co.il/save", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Collections.png"], ["href", "https://artsandculture.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Arts and culture.png"], ["id", "bookmark_modal_1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", "aria-hidden", "true", 1, "fade", "book_modal_block", 3, "ngClass"], [1, "sourceForm", "bookmark-modal", "new-source"], ["id", "bookmark_modalCustome", 1, "modal__background"], [1, "modal__container", "shadow2"], [1, "btn-icon", "modal__close-btn", 3, "click"], ["version", "1.1", "viewBox", "0 0 24 24", 1, "svg-icon", "svg-fill"], ["pid", "0", "d", "M12 9.44l3.91-3.91a1.81 1.81 0 012.56 2.56L14.56 12l3.91 3.91a1.81 1.81 0 01-2.56 2.56L12 14.56l-3.91 3.91a1.81 1.81 0 11-2.56-2.56L9.44 12 5.53 8.09a1.81 1.81 0 112.56-2.56L12 9.44z", "_fill", "#FFF", "fill-rule", "evenodd"], [1, "new-source__header"], [2, "color", "red", 3, "ngClass"], [1, "text-field"], [1, "text-field__box", "field", "active", 3, "ngClass"], [1, "text-field__input-container"], [1, "text-field__label", "micro2", 2, "display", "none"], ["required", "required", "type", "url", "name", "url", "placeholder", "Please Enter Https Url", "aria-label", "Source url", "autofocus", "autofocus", 1, "text-field__input", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "text-field__right-slot", "btn", "btn-invert", 3, "click"], [1, "text-field__hint", "micsro2"], [1, "topsites-container"], [1, "new-source__footer", "no-padding"], ["class", "radio", 4, "ngFor", "ngForOf"], [1, "btn", "btn-big", "btn-invert", "new-source__confirm", 3, "click"], ["id", "quickAccess", 1, "navbar-custom"], [1, "ng-pristine", "ng-valid", "ng-valid-maxlength", 3, "ngSubmit"], ["search", ""], [1, "social_drop_min"], [1, "social_header"], [1, "social_icon"], ["flow", "down", "tooltip", "Add shortcuts", 1, "social_icon_link", "add"], ["width", "15", "height", "15", "viewBox", "0 0 11 10", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "transparent-background"], ["class", "btn btn-custom social_icon_link", "data-toggle", "tooltip", 4, "ngFor", "ngForOf"], ["data-toggle", "tooltip", "flow", "down"], [3, "href"], [1, "transparent-background", 3, "src"], [1, "radio"], [1, "radio-item"], [3, "src"], [1, "webAddress", "websiteLink"], [1, "btn-icon", "modal__close-btn", "chromeTopSitesCrossButton", 3, "click"], ["data-toggle", "tooltip", 1, "btn", "btn-custom", "social_icon_link"], [1, "", 3, "src"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NavBarComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.openGoogle(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_11_listener() { return ctx.manageGoogleBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_18_listener() { return ctx.handleChromeTopSites(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NavBarComponent_li_21_Template, 3, 2, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Drive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Gmail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Maps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Youtube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Earth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Sheets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Docs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Slides");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Blogger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Hangout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "My business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Classroom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Keep");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Jamboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Collections");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Arts and culture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "dialog", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_158_listener() { return ctx.handleChromeTopSites(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "svg", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Edit shortcut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " Want to add new shortcut? Insert its link below to add it to your quick access row. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "label", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Source url");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavBarComponent_Template_input_ngModelChange_174_listener($event) { return ctx.siteUrl = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "button", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_175_listener() { return ctx.addChromeSite(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](180, NavBarComponent_div_180_Template, 9, 2, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "button", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_181_listener() { return ctx.handleChromeTopSites(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "section", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "form", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NavBarComponent_Template_form_ngSubmit_185_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](190); return ctx.openGoogle(_r3.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "input", 7, 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "li", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_196_listener() { return ctx.handleChromeTopSites(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "svg", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](199, NavBarComponent_li_199_Template, 3, 2, "li", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topSites);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.google_bar));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.chromeTopSite));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, !ctx.siteURLFlag));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.siteUrlError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c3, ctx.siteURLFlag));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.siteUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topSites);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topSites);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".chromeTopSitesCrossButton[_ngcontent-%COMP%]{\n  height: 21px;\n  width: 43px;\n  overflow: hidden;\n  border: none;\n  margin-top: -8px\n}\n.websiteLink[_ngcontent-%COMP%]{\n  margin-right: 65px;\n}\n.transparent-background[_ngcontent-%COMP%]{\n  background-color: transparent;\n}\n.d-block[_ngcontent-%COMP%]{\n  display: block ;\n}\n.red-border[_ngcontent-%COMP%]  {\n border: 2px solid red;\n}\n.display-none[_ngcontent-%COMP%]{\n  display: none;\n}\n.navbar-custom[_ngcontent-%COMP%]{\n  width: 84% !important;\n  position: relative !important;\n  top: 136px;\n  margin: auto;\n  z-index: 5;\n}\n.custom-sties[_ngcontent-%COMP%]{\n  width: 84% !important;\n  margin: auto;\n  position: relative !important;\n  top: 97px\n}\n.social-icons-custom[_ngcontent-%COMP%]{\n  background: white;\n  border-radius: 16px;\n  padding: 5px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1o7QUFDRjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtDQUNDLHFCQUFxQjtBQUN0QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixZQUFZO0VBQ1osVUFBVTtBQUNaO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QjtBQUNGO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaHJvbWVUb3BTaXRlc0Nyb3NzQnV0dG9ue1xuICBoZWlnaHQ6IDIxcHg7XG4gIHdpZHRoOiA0M3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi10b3A6IC04cHhcbn1cbi53ZWJzaXRlTGlua3tcbiAgbWFyZ2luLXJpZ2h0OiA2NXB4O1xufVxuXG4udHJhbnNwYXJlbnQtYmFja2dyb3VuZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uZC1ibG9ja3tcbiAgZGlzcGxheTogYmxvY2sgO1xufVxuLnJlZC1ib3JkZXIgIHtcbiBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG59XG4uZGlzcGxheS1ub25le1xuICBkaXNwbGF5OiBub25lO1xufVxuLm5hdmJhci1jdXN0b217XG4gIHdpZHRoOiA4NCUgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIHRvcDogMTM2cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgei1pbmRleDogNTtcbn1cbi5jdXN0b20tc3RpZXN7XG4gIHdpZHRoOiA4NCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgdG9wOiA5N3B4XG59XG4uc29jaWFsLWljb25zLWN1c3RvbXtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDVweFxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css']
            }]
    }], function () { return [{ type: _chrome_top_sites_service__WEBPACK_IMPORTED_MODULE_1__["ChromeTopSitesService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { clickout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "QU36":
/*!*********************************************!*\
  !*** ./src/app/chrome-top-sites.service.ts ***!
  \*********************************************/
/*! exports provided: ChromeTopSitesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChromeTopSitesService", function() { return ChromeTopSitesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ChromeTopSitesService {
    constructor(http) {
        this.http = http;
        // baseUrl:string = "http://localhost:8000/api";
        this.baseUrl = "api";
    }
    addChromeTopSites(url, user_Id) {
        return this.http.post(this.baseUrl + "/auth/addChromeSites", { userId: user_Id, url: url });
    }
    getChromeTopSites(id) {
        return this.http.get(this.baseUrl + "/auth/getChromeSites/" + id);
    }
    removeChromeTopSites(id) {
        return this.http.delete(this.baseUrl + "/auth/deleteChromeSites/" + id);
    }
}
ChromeTopSitesService.ɵfac = function ChromeTopSitesService_Factory(t) { return new (t || ChromeTopSitesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ChromeTopSitesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChromeTopSitesService, factory: ChromeTopSitesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChromeTopSitesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "edGd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "2IJj");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _sports_ads_sports_ads_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sports-ads/sports-ads.component */ "ef37");
/* harmony import */ var _favorite_article_favorite_article_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./favorite-article/favorite-article.component */ "aCOj");









function AppComponent_app_login_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-login", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sendLoginData", function AppComponent_app_login_0_Template_app_login_sendLoginData_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.sendLoginData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_app_sports_ads_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-sports-ads", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sendShowMore", function AppComponent_div_1_app_sports_ads_3_Template_app_sports_ads_sendShowMore_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.sendShowMore($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMore", ctx_r4.showMore);
} }
function AppComponent_div_1_app_favorite_article_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-favorite-article");
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-side-bar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loginManage", function AppComponent_div_1_Template_app_side_bar_loginManage_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.loginManage($event); })("favoriteArticle", function AppComponent_div_1_Template_app_side_bar_favoriteArticle_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.favoriteArticle($event); })("newsApi", function AppComponent_div_1_Template_app_side_bar_newsApi_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.newsApiManage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-nav-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_1_app_sports_ads_3_Template, 1, 1, "app-sports-ads", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_1_app_favorite_article_4_Template, 1, 0, "app-favorite-article", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loginData", ctx_r1.loginData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.favArtcile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.favArtcile);
} }
class AppComponent {
    constructor(loginService) {
        this.loginService = loginService;
        this.title = 'Chrome-Extension-Like-Muszli-main';
        this.isLogin = false;
        this.showMore = false;
        this.scrollEffect = true;
        this.fFilter = false;
        this.sendLoginData = (data) => {
            this.loginData = data;
            this.isLogin = true;
        };
        this.sendShowMore = (data) => {
            this.showMore = data;
        };
        this.loginManage = (data) => {
            this.isLogin = data;
        };
        this.favoriteArticle = (event) => {
            this.favArtcile = event;
        };
        this.newsApiManage = (event) => {
            this.newsApiFlag = event;
        };
    }
    ngOnInit() {
        if (localStorage.getItem("userId")) {
            this.isLogin = true;
            this.loginService.logedUser(localStorage.getItem("userId")).subscribe((response) => {
                console.log(response);
                let loginData = {
                    email: String,
                    name: String,
                    provider: String,
                    photoUrl: String
                };
                loginData.email = response.data.email;
                loginData.name = response.data.name;
                loginData.photoUrl = response.data.picture.replaceAll("&#x2F;", "/");
                loginData.provider = response.data.provder;
                this.sendLoginData(loginData);
            });
            // this.sendLoginData(user);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [[3, "sendLoginData", 4, "ngIf"], [4, "ngIf"], [3, "sendLoginData"], [3, "loginData", "loginManage", "favoriteArticle", "newsApi"], [3, "showMore", "sendShowMore", 4, "ngIf"], [3, "showMore", "sendShowMore"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_login_0_Template, 1, 0, "app-login", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 5, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogin);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_4__["SideBarComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"], _sports_ads_sports_ads_component__WEBPACK_IMPORTED_MODULE_6__["SportsAdsComponent"], _favorite_article_favorite_article_component__WEBPACK_IMPORTED_MODULE_7__["FavoriteArticleComponent"]], styles: [".side-bar[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.headline-row[_ngcontent-%COMP%]{\n  width: 100%;\n  display: inline-block;\n}\n.update-design[_ngcontent-%COMP%]{\n  width: 80%;\n  margin-left: 237px;\n}\n.display-none[_ngcontent-%COMP%]{\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGUtYmFyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmhlYWRsaW5lLXJvd3tcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi51cGRhdGUtZGVzaWdue1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMjM3cHg7XG59XG4uZGlzcGxheS1ub25le1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _sports_ads_sports_ads_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sports-ads/sports-ads.component */ "ef37");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "2IJj");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _favorite_article_favorite_article_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./favorite-article/favorite-article.component */ "aCOj");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: true,
                providers: [
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"]('664526784532-q8i5a965d7jquaait7iml6b3eucktd34.apps.googleusercontent.com'),
                    },
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["FacebookLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["FacebookLoginProvider"]('728354921269452'),
                    },
                ],
            },
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["SocialLoginModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _sports_ads_sports_ads_component__WEBPACK_IMPORTED_MODULE_8__["SportsAdsComponent"],
        _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_9__["SideBarComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
        _favorite_article_favorite_article_component__WEBPACK_IMPORTED_MODULE_11__["FavoriteArticleComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["SocialLoginModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                    _sports_ads_sports_ads_component__WEBPACK_IMPORTED_MODULE_8__["SportsAdsComponent"],
                    _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_9__["SideBarComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
                    _favorite_article_favorite_article_component__WEBPACK_IMPORTED_MODULE_11__["FavoriteArticleComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["SocialLoginModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ],
                providers: [
                    {
                        provide: 'SocialAuthServiceConfig',
                        useValue: {
                            autoLogin: true,
                            providers: [
                                {
                                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"].PROVIDER_ID,
                                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"]('664526784532-q8i5a965d7jquaait7iml6b3eucktd34.apps.googleusercontent.com'),
                                },
                                {
                                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["FacebookLoginProvider"].PROVIDER_ID,
                                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["FacebookLoginProvider"]('728354921269452'),
                                },
                            ],
                        },
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aCOj":
/*!****************************************************************!*\
  !*** ./src/app/favorite-article/favorite-article.component.ts ***!
  \****************************************************************/
/*! exports provided: FavoriteArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteArticleComponent", function() { return FavoriteArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article.service */ "rZgH");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a0) { return { "player-image": a0 }; };
function FavoriteArticleComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoriteArticleComponent_div_20_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const article_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.addVisitor(article_r1._id, article_r1.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoriteArticleComponent_div_20_Template_img_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const article_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.applySourceFilter(article_r1.source); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoriteArticleComponent_div_20_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const article_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.addUpvote(article_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoriteArticleComponent_div_20_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const article_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.hideArticle(article_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Hide post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoriteArticleComponent_div_20_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const article_r1 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.hideArticle(article_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Broken link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoriteArticleComponent_div_20_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const article_r1 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.hideArticle(article_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Report NSFW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoriteArticleComponent_div_20_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const article_r1 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.removeFavorite(article_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Remove Favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://www.google.com/s2/favicons?domain=", article_r1.link, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, article_r1.playerVideo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", article_r1.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 8, article_r1.published_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r1.upvote);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r1.visitor);
} }
const _c1 = function (a0) { return { "display-none": a0 }; };
class FavoriteArticleComponent {
    constructor(articleService, eRef, sanitizer) {
        this.articleService = articleService;
        this.eRef = eRef;
        this.sanitizer = sanitizer;
        this.articles = [];
        this.activeIframe = true;
        this.defaultSection = true;
        this.removeFavorite = (articleId) => {
            let a = [];
            for (let i = 0; i < this.articles.length; i++) {
                if (articleId != this.articles[i]._id)
                    a.push(this.articles[i]);
            }
            this.articles = [];
            this.articles = a;
            if (this.articles.length > 0)
                this.defaultSection = true;
            else
                this.defaultSection = false;
            this.articleService.removeFavorite(articleId, localStorage.getItem("userId")).then((data) => {
                if (data) { }
            });
        };
        this.applySourceFilter = (source) => {
            let a = [];
            for (var i = 0; i < this.articles.length; i++) {
                if (this.articles[i].source == source) {
                    a.push(this.articles[i]);
                }
            }
            this.articles = [];
            this.articles = a;
        };
        this.hideArticle = (articleId) => {
            this.articleService.hideArticle(articleId, localStorage.getItem("userId")).then((data) => {
                for (let i = 0; i < this.articles.length; i++) {
                    if (this.articles[i]._id == articleId) {
                        this.articles.splice(i, 1);
                        break;
                    }
                }
            });
        };
        this.addVisitor = (id, link) => {
            //  this.openYoutubeVideo(url);
            var url = link;
            if (url != undefined || url != '') {
                var regExp = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
                var match = regExp.test(link);
                if (match) {
                    this.articleService.addVisitor(id);
                    setTimeout(() => {
                        for (let i = 0; i < this.articles.length; i++) {
                            if (id == this.articles[i]._id) {
                                this.articles[i].visitor = this.articles[i].visitor + 1;
                                break;
                            }
                        }
                    }, 1000);
                    this.playVideo(link);
                }
                else {
                    window.open(link, "_blank");
                    this.articleService.addVisitor(id);
                    setTimeout(() => {
                        for (let i = 0; i < this.articles.length; i++) {
                            if (id == this.articles[i]._id) {
                                this.articles[i].visitor = this.articles[i].visitor + 1;
                                break;
                            }
                        }
                    }, 1000);
                    this.activeIframe = true;
                }
            }
        };
    }
    ngOnInit() {
        this.articleService.getFavoriteArticle(localStorage.getItem("userId")).subscribe(data => {
            if (data.data.length > 0)
                this.defaultSection = true;
            else
                this.defaultSection = false;
            this.arrangeArticles(data);
        });
    }
    addUpvote(id) {
        this.articleService.upvoteArticle(id, localStorage.getItem("userId")).toPromise().then((response) => {
            for (let i = 0; i < this.articles.length; i++) {
                if (id == this.articles[i]._id) {
                    this.articles[i].upvote = response.data.upvoteCounter;
                    break;
                }
            }
        });
    }
    arrangeArticles(data) {
        for (var j = 0; j < data.data.length; j++) {
            let articleData = {
                visitor: '',
                _id: '',
                title: '',
                description: '',
                image_url: '',
                playerVideo: false,
                source: '',
                game: '',
                league: '',
                team: '',
                link: '',
                created_date: '',
                published_date: '',
                type: '',
                upvote: 0,
                updatedAt: ''
            };
            ;
            articleData._id = data.data[j].article._id;
            articleData.image_url = data.data[j].article.image_url;
            articleData.source = data.data[j].article.source;
            var regExp = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
            var match = regExp.test(data.data[j].article.link);
            if (match) {
                articleData.playerVideo = true;
            }
            else {
                articleData.playerVideo = false;
            }
            articleData.link = data.data[j].article.link;
            articleData.game = data.data[j].article.game;
            articleData.team = data.data[j].article.team;
            articleData.upvote = data.data[j].article.upvoteCounter;
            articleData.created_date = data.data[j].article.created_date;
            articleData.published_date = data.data[j].article.published_date;
            articleData.title = data.data[j].article.title;
            articleData.description = data.data[j].article.description;
            articleData.league = data.data[j].article.league;
            articleData.type = data.data[j].article.type;
            articleData.visitor = data.data[j].article.visitor;
            articleData.updatedAt = data.data[j].article.updatedAt;
            this.articles.push(articleData);
        }
    }
    playVideo(link) {
        this.youtubeVideo = this.sanitizer.bypassSecurityTrustResourceUrl(link);
        this.activeIframe = false;
    }
    closeIframe() {
        this.activeIframe = true;
        document.getElementById('iframVideo1').setAttribute('src', '');
    }
}
FavoriteArticleComponent.ɵfac = function FavoriteArticleComponent_Factory(t) { return new (t || FavoriteArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
FavoriteArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavoriteArticleComponent, selectors: [["app-favorite-article"]], decls: 21, vars: 8, consts: [["id", "SaveForLater", 3, "ngClass"], [1, "SaveForLater-content"], [1, "savearticles"], [1, "bottbuttons"], [1, "save-img"], ["src", "assets/images/logosave.png"], [1, "textsave"], ["onclick", "playButton()", 1, "videorow"], ["src", "assets/images/play.png"], [1, "btn", "textsavebutton"], [1, "onboarding-sceneBg"], [1, "iframe-mainContainer", 3, "ngClass"], [1, "closeButton", 3, "click"], ["src", "assets/images/cross.png", "width", "20px"], [1, ""], ["id", "iframVideo1", "width", "500", "height", "300", "frameborder", "0", "allowfullscreen", "", 1, "embed-responsive-item", 3, "src"], [1, "small_desk"], ["class", "margin-top", 4, "ngFor", "ngForOf"], [1, "margin-top"], [1, "tile-post"], [1, "hover-options"], ["ng-click", "::openSharer($event, 'share', item)", "flow", "left", "tooltip", "Share", 1, "Share-icon"], [1, "post-link", 3, "click"], [1, "post-photo", "video-photo"], [1, "source-logo"], [1, "image-source", 3, "src", "click"], [3, "ngClass"], [1, "image_url", 3, "src"], [1, "postInfo", "videoinfo"], [1, "title"], [1, "created"], [1, "post-meta"], [1, "left-pull"], ["flow", "up", "tooltip", "Upvote", 1, "btn", "btn-menu", "upvote", 3, "click"], ["version", "1.1", "viewBox", "0 0 24 24", 1, "svg-icon", "svg-fill"], ["pid", "0", "d", "M13.162 3.813a2 2 0 01.465.465l6.674 9.343a1 1 0 01-1.102 1.539l-4.032-1.21a1 1 0 00-1.277.816l-.767 5.375a1 1 0 01-.99.859h-.266a1 1 0 01-.99-.859l-.767-5.375a1 1 0 00-1.278-.816l-4.031 1.21a1 1 0 01-1.102-1.54l6.674-9.342a2 2 0 012.79-.465z", "_fill", "#fff", "fill-rule", "evenodd"], [1, "btn-group", "dropup", "btn-g-height"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle", "btn-g-height"], ["tooltip", "More options", "flow", "up", 1, "material-icons", "icon-menu"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "more-open", 3, "id"], [1, "dropdown-item", 3, "click"], ["flow", "up", "tooltip", "View", "ng-if", "::item.clicks > 0", 1, "click-count"], [1, "material-icons"]], template: function FavoriteArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u05D0\u05D9\u05DF \u05DC\u05DA \u05E2\u05D3\u05D9\u05D9\u05DF \u05DB\u05EA\u05D1\u05D5\u05EA \u05E9\u05DE\u05D5\u05E8\u05D5\u05EA, \u05D7\u05D6\u05D5\u05E8 \u05DC\u05E2\u05DE\u05D5\u05D3 \u05D4\u05DB\u05EA\u05D1\u05D5\u05EA \u05D5\u05E1\u05DE\u05DF \u05DB\u05EA\u05D1\u05D5\u05EA \u05E9\u05EA\u05E8\u05E6\u05D4 \u05DC\u05E9\u05DE\u05D5\u05E8 \u05DC\u05DE\u05D5\u05E2\u05D3 \u05DE\u05D0\u05D5\u05D7\u05E8 \u05D9\u05D5\u05EA\u05E8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u05D4\u05E8\u05D0\u05D5 \u05DC\u05D9 \u05D0\u05D9\u05DA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoriteArticleComponent_Template_button_click_15_listener() { return ctx.closeIframe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "iframe", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FavoriteArticleComponent_div_20_Template, 41, 12, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.defaultSection));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.activeIframe));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.youtubeVideo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".small_desk[_ngcontent-%COMP%]{\n  width: 75%;\n  margin-left:  216px;\n}\n.margin-top[_ngcontent-%COMP%]{\n  margin-top: 98px;\n}\n.btn-g-height[_ngcontent-%COMP%]{\n  width: 31px;\n  height: 24px\n}\n.display-none[_ngcontent-%COMP%]{\n  display: none !important;\n}\n.iframe-mainContainer[_ngcontent-%COMP%]{\n  position: fixed;\n  right: 1%;\n  bottom: 10%;\n  z-index: 20\n}\n.closeButton[_ngcontent-%COMP%]{\n  position: fixed;\n  right: 1%;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  z-index: 74;\n  margin-top: -26px;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGUtYXJ0aWNsZS9mYXZvcml0ZS1hcnRpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7RUFDWDtBQUNGO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYO0FBQ0Y7QUFDQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9mYXZvcml0ZS1hcnRpY2xlL2Zhdm9yaXRlLWFydGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbWFsbF9kZXNre1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW4tbGVmdDogIDIxNnB4O1xufVxuLm1hcmdpbi10b3B7XG4gIG1hcmdpbi10b3A6IDk4cHg7XG59XG5cbi5idG4tZy1oZWlnaHR7XG4gIHdpZHRoOiAzMXB4O1xuICBoZWlnaHQ6IDI0cHhcbn1cbi5kaXNwbGF5LW5vbmV7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5pZnJhbWUtbWFpbkNvbnRhaW5lcntcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMSU7XG4gIGJvdHRvbTogMTAlO1xuICB6LWluZGV4OiAyMFxufVxuLmNsb3NlQnV0dG9ue1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAxJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiA3NDtcbiAgbWFyZ2luLXRvcDogLTI2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoriteArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-favorite-article',
                templateUrl: './favorite-article.component.html',
                styleUrls: ['./favorite-article.component.css']
            }]
    }], function () { return [{ type: _article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "edGd":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class LoginService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.loginUser = {
            email: String,
            name: String,
            picture: String,
            provider: String
        };
        // apiURL: string = 'http://localhost:8000/api';
        this.apiURL = "api";
    }
    registerUser(user) {
        this.loginUser.email = user.email;
        this.loginUser.name = user.name;
        this.loginUser.picture = user.photoUrl;
        this.loginUser.provider = user.provider;
        this.httpClient.post(this.apiURL + "/auth/register", this.loginUser).toPromise().then((data) => {
            localStorage.setItem("userId", data.data._id);
        });
    }
    logedUser(id) {
        return this.httpClient.get(this.apiURL + "/auth/" + id);
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ef37":
/*!****************************************************!*\
  !*** ./src/app/sports-ads/sports-ads.component.ts ***!
  \****************************************************/
/*! exports provided: SportsAdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsAdsComponent", function() { return SportsAdsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article.service */ "rZgH");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function SportsAdsComponent_div_21_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SportsAdsComponent_div_21_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SportsAdsComponent_div_21_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SportsAdsComponent_div_21_div_7_div_1_Template, 2, 0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SportsAdsComponent_div_21_div_7_div_2_Template, 2, 0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.bannerArticles[0].veryHot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.bannerArticles[0].hot);
} }
const _c0 = function (a0) { return { "player-image": a0 }; };
function SportsAdsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_21_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.addVisitor(ctx_r14.bannerArticles[0]._id, ctx_r14.bannerArticles[0].link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SportsAdsComponent_div_21_div_7_Template, 3, 2, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_21_Template_i_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.addFavoriteArticle(ctx_r16.bannerArticles[0]._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "bookmark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Hide post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Broken link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Report NSFW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "i", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.bannerArticles[0].veryHot || ctx_r0.bannerArticles[0].hot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r0.bannerArticles[0].playerVideo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.bannerArticles[0].image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.bannerArticles[0].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.bannerArticles[0].source);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.bannerArticles[0].visitor);
} }
function SportsAdsComponent_div_22_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SportsAdsComponent_div_22_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SportsAdsComponent_div_22_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SportsAdsComponent_div_22_div_7_div_1_Template, 2, 0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SportsAdsComponent_div_22_div_7_div_2_Template, 2, 0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.bannerArticles[1].veryHot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.bannerArticles[1].hot);
} }
function SportsAdsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_22_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.addVisitor(ctx_r20.bannerArticles[1]._id, ctx_r20.bannerArticles[1].link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SportsAdsComponent_div_22_div_7_Template, 3, 2, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_22_Template_i_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.addFavoriteArticle(ctx_r22.bannerArticles[1]._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "bookmark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Hide post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Broken link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Report NSFW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "i", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.bannerArticles[1].veryHot || ctx_r1.bannerArticles[1].hot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r1.bannerArticles[1].playerVideo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.bannerArticles[1].image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.bannerArticles[1].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.bannerArticles[1].source);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.bannerArticles[1].visitor);
} }
function SportsAdsComponent_div_23_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SportsAdsComponent_div_23_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SportsAdsComponent_div_23_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SportsAdsComponent_div_23_div_7_div_1_Template, 2, 0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SportsAdsComponent_div_23_div_7_div_2_Template, 2, 0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.bannerArticles[2].veryHot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.bannerArticles[2].hot);
} }
function SportsAdsComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_23_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.addVisitor(ctx_r26.bannerArticles[2]._id, ctx_r26.bannerArticles[2].link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SportsAdsComponent_div_23_div_7_Template, 3, 2, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_23_Template_i_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.addFavoriteArticle(ctx_r28.bannerArticles[2]._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "bookmark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Hide post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Broken link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Report NSFW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "i", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.bannerArticles[2].veryHot || ctx_r2.bannerArticles[2].hot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r2.bannerArticles[2].playerVideo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.bannerArticles[2].image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.bannerArticles[2].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.bannerArticles[2].source);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.bannerArticles[2].visitor);
} }
function SportsAdsComponent_div_24_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SportsAdsComponent_div_24_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SportsAdsComponent_div_24_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SportsAdsComponent_div_24_div_7_div_1_Template, 2, 0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SportsAdsComponent_div_24_div_7_div_2_Template, 2, 0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.bannerArticles[3].veryHot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.bannerArticles[3].hot);
} }
function SportsAdsComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_24_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.addVisitor(ctx_r32.bannerArticles[3]._id, ctx_r32.bannerArticles[3].link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SportsAdsComponent_div_24_div_7_Template, 3, 2, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_24_Template_i_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.addFavoriteArticle(ctx_r34.bannerArticles[3]._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "bookmark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Hide post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Broken link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Report NSFW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "i", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.bannerArticles[3].veryHot || ctx_r3.bannerArticles[3].hot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r3.bannerArticles[3].playerVideo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.bannerArticles[3].image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.bannerArticles[3].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.bannerArticles[3].source);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.bannerArticles[3].visitor);
} }
function SportsAdsComponent_div_25_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SportsAdsComponent_div_25_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SportsAdsComponent_div_25_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SportsAdsComponent_div_25_div_7_div_1_Template, 2, 0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SportsAdsComponent_div_25_div_7_div_2_Template, 2, 0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.bannerArticles[4].veryHot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.bannerArticles[4].hot);
} }
function SportsAdsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_25_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.addVisitor(ctx_r38.bannerArticles[4]._id, ctx_r38.bannerArticles[4].link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SportsAdsComponent_div_25_div_7_Template, 3, 2, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_25_Template_i_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.addFavoriteArticle(ctx_r40.bannerArticles[4]._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "bookmark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Hide post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Broken link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Report NSFW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "i", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.bannerArticles[4].veryHot || ctx_r4.bannerArticles[4].hot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r4.bannerArticles[4].playerVideo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.bannerArticles[4].image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.bannerArticles[4].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.bannerArticles[4].source);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.bannerArticles[4].visitor);
} }
function SportsAdsComponent_div_26_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SportsAdsComponent_div_26_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SportsAdsComponent_div_26_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SportsAdsComponent_div_26_div_7_div_1_Template, 2, 0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SportsAdsComponent_div_26_div_7_div_2_Template, 2, 0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r41.bannerArticles[5].veryHot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r41.bannerArticles[5].hot);
} }
function SportsAdsComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_26_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.addVisitor(ctx_r44.bannerArticles[5]._id, ctx_r44.bannerArticles[5].link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SportsAdsComponent_div_26_div_7_Template, 3, 2, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_26_Template_i_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.addFavoriteArticle(ctx_r46.bannerArticles[5]._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "bookmark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Hide post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Broken link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Report NSFW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "i", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.bannerArticles[5].veryHot || ctx_r5.bannerArticles[5].hot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r5.bannerArticles[5].playerVideo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.bannerArticles[5].image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.bannerArticles[5].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.bannerArticles[5].source);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.bannerArticles[5].visitor);
} }
function SportsAdsComponent_div_27_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SportsAdsComponent_div_27_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SportsAdsComponent_div_27_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SportsAdsComponent_div_27_div_7_div_1_Template, 2, 0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SportsAdsComponent_div_27_div_7_div_2_Template, 2, 0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.bannerArticles[6].veryHot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.bannerArticles[6].hot);
} }
function SportsAdsComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_27_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.addVisitor(ctx_r50.bannerArticles[6]._id, ctx_r50.bannerArticles[6].link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SportsAdsComponent_div_27_div_7_Template, 3, 2, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_27_Template_i_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.addFavoriteArticle(ctx_r52.bannerArticles[6]._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "bookmark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Hide post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Broken link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Report NSFW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "i", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.bannerArticles[6].veryHot || ctx_r6.bannerArticles[6].hot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r6.bannerArticles[6].playerVideo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r6.bannerArticles[6].image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.bannerArticles[6].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.bannerArticles[6].source);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.bannerArticles[6].visitor);
} }
function SportsAdsComponent_li_63_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_li_63_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const article_r53 = ctx.$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.applySourceFilter(article_r53.source); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r53.source);
} }
const _c1 = function (a0) { return { "darkBg": a0 }; };
const _c2 = function (a0) { return { "videoinfo": a0 }; };
function SportsAdsComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_90_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const i_r58 = ctx.index; const article_r57 = ctx.$implicit; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.addFavoriteArticle(i_r58, article_r57._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "bookmark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_90_Template_img_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const article_r57 = ctx.$implicit; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.applySourceFilter1(article_r57.source); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_90_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const article_r57 = ctx.$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.addVisitor(article_r57._id, article_r57.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_90_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const article_r57 = ctx.$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.addUpvote(article_r57._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_90_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const article_r57 = ctx.$implicit; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.hideArticle(article_r57._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Hide post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_90_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const article_r57 = ctx.$implicit; const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.hideArticle(article_r57._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Broken link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_90_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const article_r57 = ctx.$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.hideArticle(article_r57._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Report NSFW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "i", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r57 = ctx.$implicit;
    const i_r58 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, article_r57.saveLater));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://www.google.com/s2/favicons?domain=", article_r57.link, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r57.source);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, article_r57.playerVideo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", article_r57.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c2, article_r57.playerVideo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r57.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 11, article_r57.published_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r57.upvote);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", i_r58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r57.visitor);
} }
function SportsAdsComponent_li_161_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_li_161_Template_i_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const s_r67 = ctx.$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.userCrossSource(s_r67.source); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r67 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://www.google.com/s2/favicons?sz=64&domain=", ctx_r9.getValue(s_r67.source), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r67.source);
} }
function SportsAdsComponent_li_173_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_li_173_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); const s_r70 = ctx.$implicit; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.applySourceFilter(s_r70.source); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r70 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://www.google.com/s2/favicons?sz=64&domain=", ctx_r10.getValue(s_r70.source), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r70.source);
} }
const _c3 = function (a0) { return { "display-none": a0 }; };
class SportsAdsComponent {
    constructor(articleService, sanitizer) {
        this.articleService = articleService;
        this.sanitizer = sanitizer;
        this.articles = [];
        this.bannerArticles = [];
        this.sources = [];
        this.filterTag = '';
        this.filterLink = '';
        this.getArticlesFlag = false;
        this.getUpvoteFlag = false;
        this.getViewedFlag = false;
        this.uniqueSource = [];
        this.selectedSources = [];
        this.unSelectedSources = [];
        this.totalSource = [];
        this.favoriteArticles = [];
        this.activate = false;
        this.filter = false;
        this.loadedAll = true;
        this.sendShowMore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activeIframe = true;
        this.getArticle = () => {
            this.articleService.getArticles(localStorage.getItem("userId")).subscribe(data => {
                if (data.data.length) {
                    console.log("article", data.data);
                    for (var j = 0; j < data.data.length; j++) {
                        let articleData = {
                            visitor: '',
                            _id: '',
                            title: '',
                            description: '',
                            image_url: '',
                            playerVideo: false,
                            source: '',
                            game: '',
                            saveLater: false,
                            league: '',
                            team: '',
                            link: '',
                            created_date: '',
                            published_date: '',
                            type: '',
                            upvote: 0,
                            hot: false,
                            veryHot: false,
                            updatedAt: ''
                        };
                        articleData._id = data.data[j]._id;
                        articleData.image_url = data.data[j].image_url;
                        articleData.source = data.data[j].source;
                        var regExp = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
                        var match = regExp.test(data.data[j].link);
                        if (match) {
                            articleData.playerVideo = true;
                        }
                        else {
                            articleData.playerVideo = false;
                        }
                        articleData.saveLater = false;
                        articleData.link = data.data[j].link;
                        articleData.game = data.data[j].game;
                        articleData.team = data.data[j].team;
                        articleData.upvote = data.data[j].upvoteCounter;
                        articleData.created_date = data.data[j].created_date;
                        articleData.published_date = data.data[j].published_date;
                        articleData.title = data.data[j].title;
                        articleData.description = data.data[j].description;
                        articleData.league = data.data[j].league;
                        articleData.type = data.data[j].type;
                        articleData.visitor = data.data[j].visitor;
                        articleData.hot = data.data[j].hot,
                            articleData.veryHot = data.data[j].veryHot,
                            articleData.updatedAt = data.data[j].updatedAt;
                        this.articles.push(articleData);
                    }
                    if (data.data.length < 30) {
                        this.loadedAll = true;
                    }
                    else {
                        this.loadedAll = false;
                    }
                    this.articleService.getFavoriteArticle(localStorage.getItem("userId")).subscribe(data => {
                        if (data.data.length > 0) {
                            this.favoriteArticles = data.data;
                            console.log("fy", this.favoriteArticles);
                            for (let i = 0; i < this.favoriteArticles.length; i++) {
                                for (let j = 0; j < this.articles.length; j++) {
                                    if (this.favoriteArticles[i].article._id === this.articles[j]._id) {
                                        this.articles[j].saveLater = true;
                                    }
                                }
                            }
                        }
                    });
                }
                else {
                    this.loadedAll = true;
                }
            });
            this.articleService.getHigherArticles().subscribe(data => {
                if (data.data.length) {
                    for (var j = 0; j < data.data.length; j++) {
                        let articleData = {
                            visitor: '',
                            _id: '',
                            title: '',
                            description: '',
                            image_url: '',
                            playerVideo: false,
                            source: '',
                            game: '',
                            league: '',
                            team: '',
                            link: '',
                            created_date: '',
                            published_date: '',
                            type: '',
                            upvote: 0,
                            updatedAt: '',
                            hot: false,
                            aboveFold: false,
                            veryHot: false
                        };
                        ;
                        articleData._id = data.data[j]._id;
                        articleData.image_url = data.data[j].image_url;
                        articleData.source = data.data[j].source;
                        var regExp = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
                        var match = regExp.test(data.data[j].link);
                        if (match) {
                            articleData.playerVideo = true;
                        }
                        else {
                            articleData.playerVideo = false;
                        }
                        articleData.link = data.data[j].link;
                        articleData.game = data.data[j].game;
                        articleData.team = data.data[j].team;
                        articleData.upvote = data.data[j].upvoteCounter;
                        articleData.created_date = data.data[j].created_date;
                        articleData.published_date = data.data[j].published_date;
                        articleData.title = data.data[j].title;
                        articleData.description = data.data[j].description;
                        articleData.league = data.data[j].league;
                        articleData.type = data.data[j].type;
                        articleData.hot = data.data[j].hot,
                            articleData.aboveFold = data.data[j].aboveFold,
                            articleData.veryHot = data.data[j].veryHot,
                            articleData.visitor = data.data[j].visitor;
                        articleData.updatedAt = data.data[j].updatedAt;
                        this.bannerArticles.push(articleData);
                    }
                }
            });
            this.handleScroll();
        };
        this.addVisitor = (id, link) => {
            console.log("hello world");
            //  this.openYoutubeVideo(url);
            var url = link;
            if (url != undefined || url != '') {
                var regExp = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
                var match = regExp.test(link);
                if (match) {
                    this.articleService.addVisitor(id);
                    setTimeout(() => {
                        for (let i = 0; i < this.articles.length; i++) {
                            if (id == this.articles[i]._id) {
                                this.articles[i].visitor = this.articles[i].visitor + 1;
                                break;
                            }
                        }
                        for (let i = 0; i < this.bannerArticles.length; i++) {
                            if (id == this.bannerArticles[i]._id) {
                                this.bannerArticles[i].visitor = this.bannerArticles[i].visitor + 1;
                                break;
                            }
                        }
                    }, 1000);
                    this.playVideo(link);
                }
                else {
                    window.open(link, "_blank");
                    this.articleService.addVisitor(id);
                    setTimeout(() => {
                        for (let i = 0; i < this.articles.length; i++) {
                            if (id == this.articles[i]._id) {
                                this.articles[i].visitor = this.articles[i].visitor + 1;
                                break;
                            }
                        }
                        for (let i = 0; i < this.bannerArticles.length; i++) {
                            if (id == this.bannerArticles[i]._id) {
                                this.bannerArticles[i].visitor = this.bannerArticles[i].visitor + 1;
                                break;
                            }
                        }
                    }, 1000);
                    this.activeIframe = true;
                }
            }
        };
        this.addFavoriteArticle = (index, id) => {
            this.articleService.addFavoriteArticle(id, localStorage.getItem("userId")).subscribe((data) => {
                if (data.message == "Already Add.") {
                    this.articles[index].saveLater = !this.articles[index].saveLater;
                    this.articleService.removeFavorite(id, localStorage.getItem("userId")).then((data) => {
                        if (data) { }
                    });
                    document.getElementById('removeContainer').classList.remove('display-none');
                    setTimeout(function () {
                        document.getElementById('removeContainer').classList.add('display-none');
                    }, 1000);
                    return;
                }
                document.getElementById('successContainer').classList.remove('display-none');
                setTimeout(function () {
                    document.getElementById('successContainer').classList.add('display-none');
                }, 1000);
            });
            this.articles[index].saveLater = !this.articles[index].saveLater;
        };
        this.applyFilter = (value) => {
            if (value == '') {
                this.getArticlesFlag = true;
                this.getUpvoteFlag = false;
                this.getViewedFlag = false;
                this.getArticle();
                return;
            }
            this.articleService.resetPaginate();
            this.articleService.applyFilter(value, localStorage.getItem("userId")).subscribe(response => {
                this.articles = [];
                this.arrangeArticles(response);
            });
        };
        this.applySourceFilter = (value) => {
            this.getArticlesFlag = false;
            this.getUpvoteFlag = false;
            this.getViewedFlag = false;
            this.loadedAll = true;
            if (value == '') {
                this.getArticlesFlag = true;
                this.getUpvoteFlag = false;
                this.getViewedFlag = false;
                this.getArticle();
                return;
            }
            this.filterTag = value;
            this.articleService.sourceApplyFilter(value, localStorage.getItem("userId")).subscribe(response => {
                this.articles = [];
                this.filterLink = response.data[0].link;
                this.arrangeArticles(response);
            });
        };
        this.applySourceFilter1 = (value) => {
            this.getArticlesFlag = false;
            this.getUpvoteFlag = false;
            this.getViewedFlag = false;
            this.loadedAll = true;
            this.filterFlags = true;
            this.filterTag = value;
            this.articleService.sourceApplyFilter(value, localStorage.getItem("userId")).subscribe(response => {
                this.articles = [];
                this.filterLink = response.data[0].link;
                this.arrangeArticles(response);
            });
        };
        this.mostViewedArticles = () => {
            this.articles = [];
            this.getViewedFlag = true;
            this.getUpvoteFlag = false;
            this.getArticlesFlag = false;
            this.articleService.resetPaginate();
            this.loadedAll = false;
            this.getViewedArticles();
        };
        this.mostRecentArticles = () => {
            this.articleService.resetPaginate();
            this.articles = [];
            this.getArticlesFlag = true;
            this.getUpvoteFlag = false;
            this.getViewedFlag = false;
            this.getArticle();
        };
        this.mostUpvoteArticles = () => {
            this.articles = [];
            this.getArticlesFlag = false;
            this.getUpvoteFlag = true;
            this.getViewedFlag = false;
            this.articleService.resetPaginate();
            this.getUpvoteArticles();
            this.loadedAll = false;
        };
        this.hideArticle = (articleId) => {
            this.articleService.hideArticle(articleId, localStorage.getItem("userId")).then((data) => {
                for (let i = 0; i < this.articles.length; i++) {
                    if (this.articles[i]._id == articleId) {
                        this.articles.splice(i, 1);
                        break;
                    }
                }
            });
        };
        this.openYoutubeVideo = (url) => {
            this.youtubeVideo = url;
        };
    }
    onWindowScroll($event) {
        this.sendShowMore.emit(true);
    }
    ngOnInit() {
        this.totalSource = [];
        this.getArticlesFlag = true;
        this.getUpvoteFlag = false;
        this.getViewedFlag = false;
        if (this.articles.length == 0) {
            document.getElementById("loadingIcons").classList.remove('display-none');
            setTimeout(function () {
                document.getElementById("loadingIcons").classList.add('display-none');
            }, 1000);
        }
        this.getArticle();
        this.articleService.getSourceArticle().subscribe(data => {
            if (data) {
                for (let i = 0; i < data.data.length; i++) {
                    let s = {
                        source: ''
                    };
                    s.source = data.data[i];
                    this.sources.push(s);
                }
            }
        });
        this.articleService.selectedSource().subscribe(data => {
            if (data) {
                for (let i = 0; i < data.data.length; i++) {
                    let s = {
                        source: ''
                    };
                    s.source = data.data[i];
                    this.selectedSources.push(s);
                }
            }
        });
        this.articleService.unSelectedSource().subscribe(data => {
            if (data) {
                this.articleService.unSelectedCustomSource().subscribe(response => {
                    for (let i = 0; i < data.data.length; i++) {
                        let s = {
                            source: '',
                            icon: ''
                        };
                        s.source = data.data[i].source;
                        s.icon = data.data[i].icon;
                        this.totalSource.push(s);
                    }
                    for (var j = 0; j < response.data.length; j++) {
                        for (let i = 0; i < data.data.length; i++) {
                            let s = {
                                source: '',
                                icon: ''
                            };
                            s.source = data.data[i].source;
                            s.icon = data.data[i].icon;
                            if (response.data[j] == data.data[i].source) {
                                this.unSelectedSources.push(s);
                                break;
                            }
                        }
                    }
                });
            }
        });
        this.articleService.getUniSourceArticle().subscribe(data => {
            if (data) {
                for (let i = 0; i < data.data.length; i++) {
                    let s = {
                        source: '',
                        link: ''
                    };
                    s.source = data.data[i].source;
                    s.link = data.data[i].link;
                    this.uniqueSource.push(s);
                }
            }
        });
    }
    getValue(source) {
        if (this.totalSource.length > 0) {
            for (let i = 0; i < this.totalSource.length; i++) {
                if (source == this.totalSource[i].source)
                    return this.totalSource[i].icon;
            }
        }
        return '';
    }
    getsource(source) {
        return source;
    }
    getBannerArticle(value) {
        if (this.bannerArticles.length > value)
            return true;
        return false;
    }
    addUpvote(id) {
        this.articleService.upvoteArticle(id, localStorage.getItem("userId")).toPromise().then((response) => {
            for (let i = 0; i < this.articles.length; i++) {
                if (id == this.articles[i]._id) {
                    this.articles[i].upvote = response.data.upvoteCounter;
                    break;
                }
            }
            for (let i = 0; i < this.bannerArticles.length; i++) {
                if (id == this.bannerArticles[i]._id) {
                    this.bannerArticles[i].visitor = response.data.upvoteCounter;
                    break;
                }
            }
        });
    }
    closeFilterArticles() {
        this.filterFlags = !this.filterFlags;
        this.articles = [];
        // this.getArticlesFlag=true;
        this.applySourceFilter('');
    }
    showSeeMore() {
        document.body.classList.add('show_sidebar');
        document.getElementById("see_more").classList.add('d-none');
    }
    getViewedArticles() {
        this.articleService.mostViewedAticles().subscribe(response => {
            this.arrangeArticles(response);
            if (response.data.length < 30)
                this.loadedAll = true;
            else
                this.loadedAll = false;
        });
    }
    getUpvoteArticles() {
        this.articleService.mostUpvoteAticles().subscribe(response => {
            this.arrangeArticles(response);
            if (response.data.length < 30) {
                this.loadedAll = true;
            }
            else {
                this.loadedAll = false;
            }
        });
    }
    arrangeArticles(data) {
        for (var j = 0; j < data.data.length; j++) {
            let articleData = {
                visitor: '',
                _id: '',
                title: '',
                description: '',
                image_url: '',
                playerVideo: false,
                source: '',
                game: '',
                league: '',
                team: '',
                link: '',
                created_date: '',
                published_date: '',
                type: '',
                upvote: 0,
                updatedAt: ''
            };
            ;
            articleData._id = data.data[j]._id;
            articleData.image_url = data.data[j].image_url;
            articleData.source = data.data[j].source;
            var regExp = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
            var match = regExp.test(data.data[j].link);
            if (match) {
                articleData.playerVideo = true;
            }
            else {
                articleData.playerVideo = false;
            }
            articleData.link = data.data[j].link;
            articleData.game = data.data[j].game;
            articleData.team = data.data[j].team;
            articleData.upvote = data.data[j].upvoteCounter;
            articleData.created_date = data.data[j].created_date;
            articleData.published_date = data.data[j].published_date;
            articleData.title = data.data[j].title;
            articleData.description = data.data[j].description;
            articleData.league = data.data[j].league;
            articleData.type = data.data[j].type;
            articleData.visitor = data.data[j].visitor;
            articleData.updatedAt = data.data[j].updatedAt;
            this.articles.push(articleData);
        }
    }
    handleScroll() {
        window.onscroll = () => this.detectBottom();
    }
    detectBottom() {
        if ((window.innerHeight + window.scrollY + 60) >= document.body.offsetHeight) {
            console.log("bottom");
            console.log("hello wg");
            if (!this.loadedAll) {
                if (this.articles.length > 0) {
                    document.getElementById("loadingIcons").classList.remove('display-none');
                    setTimeout(function () {
                        document.getElementById("loadingIcons").classList.add('display-none');
                    }, 1700);
                    this.articleService.paginatePage();
                    if (this.getArticlesFlag) {
                        this.getArticle();
                    }
                    if (this.getUpvoteFlag)
                        this.getUpvoteArticles();
                    if (this.getViewedFlag)
                        this.getViewedArticles();
                    this.loadedAll = true;
                }
            }
        }
    }
    playVideo(link) {
        this.youtubeVideo = this.sanitizer.bypassSecurityTrustResourceUrl(link);
        this.activeIframe = false;
    }
    closeIframe() {
        this.activeIframe = true;
        document.getElementById('iframVideo').setAttribute('src', '');
    }
    userChooseMoreSource(value) {
        this.selectedSources = [];
        this.articles = [];
        this.articleService.selectSources(value).toPromise().then(response => {
            if (response) {
                this.articleService.selectedSource().subscribe(data => {
                    if (data) {
                        for (let i = 0; i < data.data.length; i++) {
                            let s = {
                                source: ''
                            };
                            s.source = data.data[i];
                            this.selectedSources.push(s);
                        }
                        this.unSelectedSources = [];
                        this.articleService.unSelectedSource().subscribe(data => {
                            for (let i = 0; i < data.data.length; i++) {
                                let s = {
                                    source: '',
                                    icon: ''
                                };
                                s.source = data.data[i].source;
                                s.icon = data.data[i].icon;
                                this.unSelectedSources.push(s);
                            }
                            // if(data){
                            //   this.articleService.unSelectedCustomSource().subscribe(response=>{
                            //
                            //     for(var j=0;j<response.data.length;j++){
                            //       for(let i=0;i<data.data.length;i++) {
                            //         if(response.data[j]==data.data[i].source){
                            //           let s = {
                            //             source: '',
                            //             icon: ''
                            //           };
                            //
                            //           break;
                            //         }
                            //       }
                            //     }
                            //
                            //   })
                            //
                            // }
                        });
                    }
                });
                this.getArticlesFlag = true;
                this.getViewedFlag = false;
                this.getUpvoteFlag = false;
                this.getArticle();
            }
        });
    }
    userCrossSource(value) {
        this.selectedSources = [];
        this.articles = [];
        this.articleService.unSelectSources(value).toPromise().then(response => {
            if (response) {
                this.articleService.selectedSource().subscribe(data => {
                    if (data) {
                        for (let i = 0; i < data.data.length; i++) {
                            let s = {
                                source: ''
                            };
                            s.source = data.data[i];
                            this.selectedSources.push(s);
                        }
                        this.unSelectedSources = [];
                        this.articleService.unSelectedSource().subscribe(data => {
                            if (data) {
                                this.articleService.unSelectedCustomSource().subscribe(response => {
                                    console.log(response);
                                    console.log(data);
                                    for (var j = 0; j < response.data.length; j++) {
                                        for (let i = 0; i < data.data.length; i++) {
                                            if (response.data[j] == data.data[i].source) {
                                                let s = {
                                                    source: '',
                                                    icon: ''
                                                };
                                                s.source = data.data[i].source;
                                                s.icon = data.data[i].icon;
                                                this.unSelectedSources.push(s);
                                                break;
                                            }
                                        }
                                    }
                                });
                            }
                        });
                    }
                });
            }
            this.getArticlesFlag = true;
            this.getUpvoteFlag = false;
            this.getViewedFlag = false;
            this.getArticle();
        });
    }
}
SportsAdsComponent.ɵfac = function SportsAdsComponent_Factory(t) { return new (t || SportsAdsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
SportsAdsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SportsAdsComponent, selectors: [["app-sports-ads"]], hostBindings: function SportsAdsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function SportsAdsComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { showMore: "showMore", favoriteArticle: "favoriteArticle", newsApi: "newsApi" }, outputs: { sendShowMore: "sendShowMore" }, decls: 179, vars: 33, consts: [["id", "successContainer", 1, "success-container", "display-none"], ["id", "removeContainer", 1, "success-container", "display-none"], [1, "iframe-mainContainer", 3, "ngClass"], [1, "closeButton", 3, "click"], ["src", "assets/images/cross.png", "width", "20px"], [1, ""], ["id", "iframVideo", "width", "500", "height", "300", "frameborder", "0", "allowfullscreen", "", 1, "embed-responsive-item", 3, "src"], [1, "manager2_container"], [1, "manager2_container-inner"], [1, "cu-dashboard"], [1, "seemore-scroll", 3, "ngClass"], ["id", "see_more", 1, "see_more", 3, "click"], ["id", "featured-feed-menu", 1, "dashboard_body"], [1, "home-title"], [1, "mostVisitedContainer"], [1, "aboveTheFold", 3, "ngClass"], ["class", "article", 4, "ngIf"], ["id", "feed-menu", 1, "dashboard_body", "content-tab"], [1, "headline"], [1, "headline-row", 3, "ngClass"], [1, "title"], [1, "SearchResultsHeadings__ResultCountText"], [1, "right-pull"], [1, "sortBy"], [1, "filterCustomParagraph"], ["tabindex", "0", 1, "nice-select", "custom-t", "right", "filtersCustom"], [1, "current"], [1, "list"], [1, "option", "active", "selected", "focus", 3, "click"], [1, "option", 3, "click"], ["onclick", "openfilter()", "href", "#", 1, "filter-btn", "outlined", "filters-toggle-btn"], ["src", "assets/images/filtertr.png"], ["title", "Filters", 1, "label"], ["id", "filter", 1, "display-filter", 3, "ngClass"], [1, "filter"], [1, "select-box"], ["tabindex", "0", 1, "nice-select", "custom-t", "right"], [1, "option", "selected", 3, "click"], ["class", "option", 3, "click", 4, "ngFor", "ngForOf"], [1, "mb-5", 3, "ngClass"], [3, "src"], [1, "displayInline"], [1, "backButton"], ["src", "assets/images/back.png", 1, "backImage"], [3, "click"], ["id", "small_desk", 1, "small_desk"], [4, "ngFor", "ngForOf"], ["id", "videoplay", 1, "step-welcome"], [1, "video-overlay"], [1, "video-container"], ["src", "images/y2mate.com - Muzli 2_dYSIZ13yS64_1080p copy 2.mp4", "loop", "", "controls", "", 1, "video-screen"], ["tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", "onclick", "closevideo()", "aria-hidden", "true", 1, "background-popup"], ["id", "bookmark_modal_1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", "aria-hidden", "true", 1, "modal", "fade", "book_modal_block"], ["open", "", 1, "sourceForm", "bookmark-modal", "new-source"], [1, "modal__background"], [1, "modal__container", "shadow2"], ["data-dismiss", "modal", 1, "btn-icon", "modal__close-btn"], ["version", "1.1", "viewBox", "0 0 24 24", 1, "svg-icon", "svg-fill"], ["pid", "0", "d", "M12 9.44l3.91-3.91a1.81 1.81 0 012.56 2.56L14.56 12l3.91 3.91a1.81 1.81 0 01-2.56 2.56L12 14.56l-3.91 3.91a1.81 1.81 0 11-2.56-2.56L9.44 12 5.53 8.09a1.81 1.81 0 112.56-2.56L12 9.44z", "_fill", "#FFF", "fill-rule", "evenodd"], [1, "new-source__header"], [1, "text-field"], [1, "text-field__box", "field", "active"], [1, "text-field__input-container"], [1, "text-field__label", "micro2", 2, "display", "none"], ["required", "required", "type", "url", "placeholder", "Paste url", "aria-label", "Source url", "autofocus", "autofocus", 1, "text-field__input"], ["type", "submit", 1, "text-field__right-slot", "btn", "btn-invert"], [1, "text-field__hint", "micro2"], [1, "new-source__footer", "no-padding"], [1, "radio"], [1, "radio-item"], ["src", "images/Whatapp.png"], [1, "webAddress"], ["src", "images/Amazon seller.png"], ["src", "images/Facebook.png"], ["src", "images/Amazon.png"], ["src", "images/gmail.png"], ["src", "images/Shopify.png"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], [1, "btn", "btn-big", "btn-invert", "new-source__confirm"], ["onclick", "menu()", "data-original-title", "null", "aria-describedby", "tooltip_0bdgaluu0q", 1, "sidebar-trigger", "has-tooltip", "v-tooltip-open"], ["pid", "0", "d", "M12 11.545L7.176 16.37a1.86 1.86 0 11-2.631-2.631l6.077-6.077a1.949 1.949 0 012.756 0l6.077 6.077a1.86 1.86 0 11-2.631 2.63L12 11.546z", "_fill", "#FFF", "fill-rule", "evenodd"], ["id", "feed", 1, "feed_sidebar"], [1, "Settingsmenu_content", "feedmenu_content"], [1, "fevoriteSources"], [1, "titleRow"], [1, "sidebartiltle"], [1, "sourceNumber"], ["class", "position-relative group_list selector", "tooltip", "View source", 4, "ngFor", "ngForOf"], [1, "moreSources"], ["tooltip", "View source", 1, "position-relative", "group_list", "selector"], [1, "linkhover"], [1, "rowinfo"], [1, "align"], ["src", "assets/images/Filter/Websites/Home-web.png", "alt", "", 1, "fevorite-image", "website"], [1, "separator"], [1, "sidebar__element", "btn", "btn-menu"], ["version", "1.1", "viewBox", "0 0 24 24", 1, "sidebar__element__image", "svg-icon", "svg-fill"], ["pid", "0", "d", "M13.78 10.22h4.44a1.78 1.78 0 010 3.56h-4.44v4.44a1.78 1.78 0 01-3.56 0v-4.44H5.78a1.78 1.78 0 010-3.56h4.44V5.78a1.78 1.78 0 013.56 0v4.44z", "_fill", "#FFF", "fill-rule", "evenodd"], ["id", "loadingIcons", 1, "loadingIcons", "display-none"], ["src", "https://i.gifer.com/ZZ5H.gif", 1, "loadingIconsImage"], [1, "article"], [1, "tile-post"], [1, "hover-options"], ["flow", "left", "tooltip", "Share", 1, "Share-icon", "material-icons"], [1, "post-link", 3, "click"], [1, "post-photo"], ["class", "hot-article-badge", 4, "ngIf"], [3, "ngClass"], [1, "image_url", "footer-pan", 3, "src"], [1, "postInfo"], ["ng-bind", "::item.source.title", 1, "source"], [1, "post-meta"], [1, "left-pull"], ["tooltip", "Save item", 1, "book-save", "btn", "btn-custom", "transparent"], ["aria-hidden", "true", 1, "material-icons", 3, "click"], [1, "btn-group", "dropup", "btn-g-height"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["tooltip", "More options", "flow", "up", 1, "material-icons", "icon-menu"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], ["tooltip", "View", "flow", "up", "ng-if", "::item.clicks > 0", 1, "click-count"], [1, "material-icons"], [1, "hot-article-badge"], [4, "ngIf"], ["src", "assets/images/very-hot.svg", 1, "image-source"], ["src", "assets/images/hot.svg", 1, "image-source"], ["data-custom-class", "tooltip-primary", "title", "", "tooltip", "Save item", 1, "book-save", "btn", "btn-custom", "transparent"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "more-open"], ["flow", "left", "tooltip", "Save item", 1, "book-save", "btn", "btn-custom", "transparent"], ["tooltip", "More options", "flow", "up", "flow", "up", 1, "material-icons", "icon-menu"], ["flow", "left", "tooltip", "Save for later", 1, "Bookmark-icon", "material-icons", 3, "ngClass", "click"], ["ng-click", "::openSharer($event, 'share', item)", "flow", "left", "tooltip", "Share", 1, "Share-icon", "material-icons"], [1, "source-logo", "tooltip1"], [1, "image-source", 3, "src", "click"], [1, "tooltiptext1"], ["target", "_blank", 1, "post-link", 3, "click"], [1, "post-photo", "video-photo"], [1, "image_url", 3, "src"], [1, "postInfo", 3, "ngClass"], [1, "created"], ["tooltip", "Upvote", 1, "btn", "btn-menu", "upvote", 3, "click"], ["pid", "0", "d", "M13.162 3.813a2 2 0 01.465.465l6.674 9.343a1 1 0 01-1.102 1.539l-4.032-1.21a1 1 0 00-1.277.816l-.767 5.375a1 1 0 01-.99.859h-.266a1 1 0 01-.99-.859l-.767-5.375a1 1 0 00-1.278-.816l-4.031 1.21a1 1 0 01-1.102-1.54l6.674-9.342a2 2 0 012.79-.465z", "_fill", "#fff", "fill-rule", "evenodd"], [1, "btn-group", "dropup"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle", "btn-g-height"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "more-open", 3, "id"], [1, "dropdown-item", 3, "click"], ["data-tab", "ta", "href", "#b1", 1, "linkhover"], [1, "material-icons", "remove", 3, "click"], ["data-tab", "ta", 1, "linkhover", 3, "click"], ["alt", "", 1, "fevorite-image", "website", 3, "src"]], template: function SportsAdsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Article Save for later Succussfully.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Article remove from save later.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_button_click_7_listener() { return ctx.closeIframe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "iframe", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_a_click_15_listener() { return ctx.showSeeMore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "See more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SportsAdsComponent_div_21_Template, 36, 8, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SportsAdsComponent_div_22_Template, 36, 8, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SportsAdsComponent_div_23_Template, 36, 8, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SportsAdsComponent_div_24_Template, 36, 8, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SportsAdsComponent_div_25_Template, 36, 8, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SportsAdsComponent_div_26_Template, 36, 8, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SportsAdsComponent_div_27_Template, 36, 8, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Article's that match your search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "720 article's are available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sort by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Most Recent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_li_click_44_listener() { return ctx.mostRecentArticles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Most Recent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_li_click_46_listener() { return ctx.mostUpvoteArticles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Most upvote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_li_click_48_listener() { return ctx.mostViewedArticles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Most Viewed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "All websites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ul", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_li_click_61_listener() { return ctx.applySourceFilter(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "All websites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, SportsAdsComponent_li_63_Template, 2, 1, "li", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "All sports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ul", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_li_click_69_listener() { return ctx.applyFilter(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "All sports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_li_click_71_listener() { return ctx.applyFilter("baseball"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Baseball");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_li_click_73_listener() { return ctx.applyFilter("soccer"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Soccer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_li_click_75_listener() { return ctx.applyFilter("basketball"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Basketball");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_li_click_77_listener() { return ctx.applyFilter("tennis"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Tennis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_li_click_79_listener() { return ctx.applyFilter("football"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Football");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_a_click_87_listener() { return ctx.closeFilterArticles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, SportsAdsComponent_div_90_Template, 45, 19, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "video", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "dialog", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "svg", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Edit shortcut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Want to add new shortcut? Insert its link below to add it to your quick access row. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Source url");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "https://web.whatsapp.com/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "https://sellercentral.amazon.com/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "https://www.facebook.com/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "https://www.amazon.com/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "https://mail.google.com/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "https://www.shopify.com/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "button", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "svg", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "path", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "ul", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h4", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " sources selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](161, SportsAdsComponent_li_161_Template, 9, 2, "li", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "ul", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h4", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "More sources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "img", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "\u2022 \u2022 \u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](173, SportsAdsComponent_li_173_Template, 7, 2, "li", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "button", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "svg", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "path", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "img", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c3, ctx.activeIframe));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.youtubeVideo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c3, ctx.showMore));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c3, ctx.filterFlags));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getBannerArticle(0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getBannerArticle(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getBannerArticle(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getBannerArticle(3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getBannerArticle(4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getBannerArticle(5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getBannerArticle(6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c3, ctx.filterFlags));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c3, ctx.filterFlags));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.totalSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c3, !ctx.filterFlags));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://www.google.com/s2/favicons?domain=", ctx.filterLink, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.filterTag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedSources.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedSources);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.unSelectedSources);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".display-none[_ngcontent-%COMP%]{\n  display: none;\n}\n.success-container[_ngcontent-%COMP%]{\n  position: fixed;\n  right: 0px;\n  z-index: 13;\n  top: 8%;\n  background-color: #6000d2;\n  padding: 15px;\n  border-radius: 4px 0 0 4px;\n}\n.displayInline[_ngcontent-%COMP%]{\n  display: inline;\n  margin: 0;\n}\n.success-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n  font-size: 18px;\n  color: #e9eaec;\n  background-color: transparent;\n  margin: 0;\n}\n.backImage[_ngcontent-%COMP%]{\n  width: 20px;\n  margin-right: 4px;\n  margin-top: -2px;\n}\n.iframe-mainContainer[_ngcontent-%COMP%]{\n  position: fixed;\n  right: 1%;\n  bottom: 10%;\n  z-index: 20\n\n}\n.backButton[_ngcontent-%COMP%]{\n  float: right;\n  cursor: pointer;\n  color: darkblue;\n}\n.iframe[_ngcontent-%COMP%]{\n  position: fixed;\n  z-index: 1;\n  bottom: 0;\n  right: 0%;\n}\n.transparent-background[_ngcontent-%COMP%]{\n  background-color: transparent;\n}\n.dropdown-menu[_ngcontent-%COMP%]{\n  z-index: 20;\n  margin-top: -10px\n}\nbutton.closeButton[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  text-align: center;\n  position: absolute;\n  color: #FFF;\n  top: -15px;\n  left: -15px;\n  background: #fff;\n  border-radius: 20px;\n  border: 3px solid #fff;\n  transition: all 0.15s ease-out;\n}\n.closeButton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 10px;\n}\n.closeButton[_ngcontent-%COMP%]:hover{\n  background-color: white;\n}\n.source-logo[_ngcontent-%COMP%]{\n  position: absolute !important;\n}\n.btn-g-height[_ngcontent-%COMP%]{\n  width: 31px;\n  height: 24px\n}\n.loadingIcons[_ngcontent-%COMP%]{\n  position:fixed;\n  bottom: 5%;\n  left: 50%;\n  width: 40px;\n  height: 40px;\n    background: #e9eaec;\n    border-radius: 6px;\n}\n.loadingIconsImage[_ngcontent-%COMP%]{\n  height: 100%;\n  width: 100%;\n  border-radius: 10px;\n}\n.filtersCustom[_ngcontent-%COMP%]{\n  top: 15px;\n  text-decoration: underline;\n  background-color: transparent;\n  width: auto;\n  border: none;\n  font-weight: 600;\n  padding-left: 0;\n}\n.tooltip1[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  \n}\n.tooltip1[_ngcontent-%COMP%]   .tooltiptext1[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n\n  \n  position: absolute;\n  z-index: 1;\n  margin-left: -55px;\n  margin-top: -34px;\n  opacity: 0.8;\n}\n.darkBg[_ngcontent-%COMP%]{\n  background-color: black;\n  color:white;\n}\n.tooltip1[_ngcontent-%COMP%]:hover   .tooltiptext1[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BvcnRzLWFkcy9zcG9ydHMtYWRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsV0FBVztFQUNYLE9BQU87RUFDUCx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsU0FBUztBQUNYO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1g7O0FBRUY7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0VBQ1QsU0FBUztBQUNYO0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFdBQVc7RUFDWDtBQUNGO0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxXQUFXO0VBQ1g7QUFDRjtBQUNBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7SUFDVixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsU0FBUztFQUNULDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGNBQWM7O0VBRWQseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Nwb3J0cy1hZHMvc3BvcnRzLWFkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXktbm9uZXtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zdWNjZXNzLWNvbnRhaW5lcntcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMHB4O1xuICB6LWluZGV4OiAxMztcbiAgdG9wOiA4JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwMDBkMjtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG59XG5cbi5kaXNwbGF5SW5saW5le1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbjogMDtcbn1cbi5zdWNjZXNzLWNvbnRhaW5lciBoM3tcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2U5ZWFlYztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMDtcbn1cbi5iYWNrSW1hZ2V7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cbi5pZnJhbWUtbWFpbkNvbnRhaW5lcntcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMSU7XG4gIGJvdHRvbTogMTAlO1xuICB6LWluZGV4OiAyMFxuXG59XG4uYmFja0J1dHRvbntcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBkYXJrYmx1ZTtcbn1cbi5pZnJhbWV7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMCU7XG59XG5cbi50cmFuc3BhcmVudC1iYWNrZ3JvdW5ke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5kcm9wZG93bi1tZW51e1xuICB6LWluZGV4OiAyMDtcbiAgbWFyZ2luLXRvcDogLTEwcHhcbn1cblxuYnV0dG9uLmNsb3NlQnV0dG9uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjRkZGO1xuICB0b3A6IC0xNXB4O1xuICBsZWZ0OiAtMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2Utb3V0O1xufVxuXG4uY2xvc2VCdXR0b24gaW1nIHtcbiAgd2lkdGg6IDEwcHg7XG59XG5cbi5jbG9zZUJ1dHRvbjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5zb3VyY2UtbG9nb3tcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG59XG4uYnRuLWctaGVpZ2h0e1xuICB3aWR0aDogMzFweDtcbiAgaGVpZ2h0OiAyNHB4XG59XG4ubG9hZGluZ0ljb25ze1xuICBwb3NpdGlvbjpmaXhlZDtcbiAgYm90dG9tOiA1JTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQ6ICNlOWVhZWM7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmxvYWRpbmdJY29uc0ltYWdle1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmZpbHRlcnNDdXN0b217XG4gIHRvcDogMTVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4udG9vbHRpcDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLypib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrOyovXG59XG4udG9vbHRpcDEgLnRvb2x0aXB0ZXh0MSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiA1cHggMDtcblxuICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiAtNTVweDtcbiAgbWFyZ2luLXRvcDogLTM0cHg7XG4gIG9wYWNpdHk6IDAuODtcbn1cbi5kYXJrQmd7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuLnRvb2x0aXAxOmhvdmVyIC50b29sdGlwdGV4dDEge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SportsAdsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sports-ads',
                templateUrl: './sports-ads.component.html',
                styleUrls: ['./sports-ads.component.css']
            }]
    }], function () { return [{ type: _article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, { showMore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sendShowMore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }], favoriteArticle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], newsApi: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "fUOv":
/*!*******************************************!*\
  !*** ./src/app/manage-article.service.ts ***!
  \*******************************************/
/*! exports provided: ManageArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageArticleService", function() { return ManageArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ManageArticleService {
    constructor() {
        this.newsApiFlag = false;
    }
    getNewsApiFlag() {
        this.newsApiFlag = !this.newsApiFlag;
        return this.newsApiFlag;
    }
}
ManageArticleService.ɵfac = function ManageArticleService_Factory(t) { return new (t || ManageArticleService)(); };
ManageArticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ManageArticleService, factory: ManageArticleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageArticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rZgH":
/*!************************************!*\
  !*** ./src/app/article.service.ts ***!
  \************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ArticleService {
    constructor(http) {
        this.http = http;
        // baseUrl:string = "http://localhost:8000/api";
        this.baseUrl = "api";
        this.pageNo = 0;
    }
    getArticles(id) {
        return this.http.get(this.baseUrl + "/article/" + id + "/" + this.pageNo);
    }
    getFavoriteArticle(id) {
        return this.http.get(this.baseUrl + "/article/favorite/article/" + id);
    }
    addVisitor(id) {
        this.http.post(this.baseUrl + "/article/add-visitor", { id: id }).toPromise().then((data) => {
        });
    }
    getSourceArticle() {
        return this.http.get(this.baseUrl + "/article/uniqueSource");
    }
    getUniSourceArticle() {
        return this.http.get(this.baseUrl + "/article/uniqueSourceArticle");
    }
    selectedSource() {
        return this.http.get(this.baseUrl + "/auth/userSelectedSources/" + localStorage.getItem("userId"));
    }
    unSelectedSource() {
        return this.http.get(this.baseUrl + "/auth/source/Store");
    }
    unSelectedCustomSource() {
        return this.http.get(this.baseUrl + "/auth/userunSelectedSources/" + localStorage.getItem("userId"));
    }
    selectSources(value) {
        return this.http.put(this.baseUrl + "/auth/selectSources/" + localStorage.getItem("userId") + "/" + value, {});
    }
    unSelectSources(value) {
        return this.http.put(this.baseUrl + "/auth/unSelectSources/" + localStorage.getItem("userId") + "/" + value, {});
    }
    upvoteArticle(id, userId) {
        return this.http.get(this.baseUrl + "/auth/upvoteArticle/" + id + "/" + userId, {});
    }
    addFavoriteArticle(id, user_Id) {
        return this.http.post(this.baseUrl + "/article/favorite-article", { userId: user_Id, article: id });
    }
    applyFilter(filter, userId) {
        return this.http.get(this.baseUrl + "/article/filterArticle/" + userId + "/" + filter);
    }
    sourceApplyFilter(filter, userId) {
        return this.http.get(this.baseUrl + "/article/filterSourceArticle/" + userId + "/" + filter);
    }
    mostViewedAticles() {
        return this.http.get(this.baseUrl + "/article/most/Viewed/" + localStorage.getItem("userId") + "/" + this.pageNo);
    }
    mostUpvoteAticles() {
        return this.http.get(this.baseUrl + "/article/most/Upvote/" + localStorage.getItem("userId") + "/" + this.pageNo);
    }
    hideArticle(articleId, userId) {
        return this.http.put(this.baseUrl + "/auth/hideArticle/" + articleId, { "userId": userId }).toPromise();
    }
    removeFavorite(article, userId) {
        return this.http.delete(this.baseUrl + "/article/favorite/delete/" + userId + "/" + article).toPromise();
    }
    paginatePage() {
        this.pageNo++;
    }
    resetPaginate() {
        this.pageNo = 0;
    }
    getNewsApi() {
        return this.http.get("http://newsapi.org/v2/everything?q=tesla&from=2021-01-02&sortBy=publishedAt&apiKey=2ca184e92cad4bbaa2e422011ca10cc9");
    }
    getHigherArticles() {
        return this.http.get(this.baseUrl + "/article/getHigherArticle");
    }
}
ArticleService.ɵfac = function ArticleService_Factory(t) { return new (t || ArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ArticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArticleService, factory: ArticleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "edGd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class LoginComponent {
    constructor(authService, loginService) {
        this.authService = authService;
        this.GoogleLoginProvider = angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["GoogleLoginProvider"];
        this.sendLoginData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._loginService = loginService;
    }
    ngOnInit() {
        this.authService.authState.subscribe(user => {
            this.user = user;
        });
    }
    signInWithGoogle() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["GoogleLoginProvider"].PROVIDER_ID).then((data) => {
            this._loginService.registerUser(this.user);
            this.sendLoginData.emit(this.user);
        });
    }
    signInWithFB() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["FacebookLoginProvider"].PROVIDER_ID).then((data) => {
            this._loginService.registerUser(this.user);
            this.sendLoginData.emit(this.user);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["SocialAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], outputs: { sendLoginData: "sendLoginData" }, decls: 31, vars: 0, consts: [["id", "SignUp_modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", "aria-hidden", "true", 1, "login-modal", "model", "in"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], ["href", "#", 1, "logo"], ["src", "assets/images/logoill.png", "alt", "", 1, "img-responsive", "white-background"], ["action", "#", "id", "UserLoginForm", "method", "post", "accept-charset", "utf-8", 1, "login-form"], [1, "social-ssn"], [1, "facebook-signing-button", 3, "click"], [1, "fit-icon"], ["src", "assets/images/facebookssn.png", 1, "transparent-background"], [1, "transparent-background"], [1, "google-signing-button", 3, "click"], ["src", "assets/images/Googlessn.png", 1, "transparent-background"], [1, "control-group", "social-login", "white-background"], [1, "seprater-or", "white-background"], [1, "control-group"], ["type", "submit", "value", "Continue with Email", 1, "btn", "btn-primary", "btn-large", "btn-block", 2, "width", "100%"], [1, "signup-txt", "white-background"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_8_listener() { return ctx.signInWithFB(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Continue with Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_13_listener() { return ctx.signInWithGoogle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Continue with Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Or");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "By sign-up you agree to our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " & ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "privacy Pocily");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 13px;\n  color: #18191b;\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-transition: background-color .2s;\n  -webkit-font-smoothing: antialiased\n}\n\n.transparent-background[_ngcontent-%COMP%]{\n  background-color: transparent;\n}\n\n.modal.in[_ngcontent-%COMP%] {\n  background-color: rgba(222, 232, 253, 0.95);\n}\n\n.modal-open[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%], div#SignIn_modal[_ngcontent-%COMP%], .login-modal.in#SignIn_modal[_ngcontent-%COMP%] {\n  z-index: 999999\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #f7f7f7;\n  border-radius: 10px;\n  box-shadow: 0 5px 15px rgba(0,0,0,.25);\n  border: none;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  position:absolute;\n  top:50% !important;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%) !important;\n  -ms-transform: translateX(-50%) translateY(-50%) !important;\n  -webkit-transform: translateX(-50%) translateY(-50%) !important;\n  margin: 0 auto;\n  width: 420px;\n}\n\n.login-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px 0 20px 0;\n}\n\n.continueMail[_ngcontent-%COMP%]{\n  width: 100%;\n}\n\n.modal-body[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: auto;\n  margin: 0 0 30px 0;\n}\n\n.login-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n  max-width: 320px;\n  width: 100%\n}\n\n.control-group.social-login[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n}\n\np.transparent-background[_ngcontent-%COMP%] {\n    margin: 0;\n}\n\n.facebook-signing-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  background: #4267b2;\n  border: 1px solid #4267b2;\n  border-radius: 4px;\n  padding: 0 30px 0 16px;\n  width: 100%;\n  margin: 0 0 10px 0;\n  height: 50px;\n  align-items: center;\n  cursor: pointer;\n}\n\n.google-signing-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  background: #6bb0c5;\n  border: 1px solid #6bb0c5;\n  border-radius: 4px;\n  padding: 0 30px 0 16px;\n  width: 100%;\n  height: 50px;\n  align-items: center;\n  cursor: pointer;\n}\n\n.fit-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: 0 0;\n  border: none;\n  padding: 0;\n  margin: 0;\n}\n\n.fit-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  height: 20px !important;\n}\n\n.social-ssn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 14px;\n  font-weight: 600;\n  color: #fff;\n  padding: 0;\n  text-align: center;\n}\n\n.logo[_ngcontent-%COMP%] {\n  height: 65px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 25px 0 0;\n  float: right;\n  cursor: inherit;\n}\n\n.social-login[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n\nheader[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: auto!important;\n  margin: 0 auto!important\n}\n\n.login-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .control-group[_ngcontent-%COMP%]   input.btn[_ngcontent-%COMP%] {\n  background: #f7f7f7;\n  border: 1px solid #4789ff;\n  height: 50px;\n  color: #4789ff;\n  text-align: center;\n  border-radius: 4px;\n  font-weight: 600;\n  transition: 200ms ease-in-out;\n}\n\n.login-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .control-group[_ngcontent-%COMP%]   input.btn[_ngcontent-%COMP%]:hover {\n  background: #4789ff;\n  color: #fff;\n  border: 1px solid #4789ff\n}\n\n.seprater-or[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n  margin: 0 auto;\n  text-align: center;\n  display: inline-block;\n  position: relative;\n  font-size: 14px;\n  color: #8f9eb1\n}\n\n.seprater-or[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  width: 100px;\n  height: 1px;\n  top: 50%;\n  background: #ebeff5;\n  transform: translateY(-50%);\n  left: auto;\n  right: 100%;\n  margin: 0 auto\n}\n\n.seprater-or[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  width: 100px;\n  height: 1px;\n  top: 50%;\n  background: #ebeff5;\n  transform: translateY(-50%);\n  left: 100%;\n  right: auto\n}\n\n.signup-txt[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #91a1b3;\n  width: 100%;\n  text-align: center;\n  font-weight: 500;\n  letter-spacing: .3px;\n  line-height: 20px;\n  margin: 20px 0 20px 0;\n}\n\n.signup-txt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1b8df1;\n  cursor: pointer;\n}\n\nheader[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  width: 500px;\n  margin: 30px auto\n}\n\n.modal-backdrop.fade.in[_ngcontent-%COMP%] {\n  z-index: 99999\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7O0VBRUU7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCx1REFBdUQ7RUFDdkQsMkRBQTJEO0VBQzNELCtEQUErRDtFQUMvRCxjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBR2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFHYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QjtBQUNGOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1g7QUFDRjs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsUUFBUTtFQUNSLG1CQUFtQjtFQUtuQiwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLFdBQVc7RUFDWDtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFFBQVE7RUFDUixtQkFBbUI7RUFLbkIsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUdBO0VBQ0UsWUFBWTtFQUNaO0FBQ0Y7O0FBR0E7RUFDRTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMxODE5MWI7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycztcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWRcbn1cblxuLnRyYW5zcGFyZW50LWJhY2tncm91bmR7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLm1vZGFsLmluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjIsIDIzMiwgMjUzLCAwLjk1KTtcbn1cblxuLm1vZGFsLW9wZW4gLm1vZGFsLFxuZGl2I1NpZ25Jbl9tb2RhbCwubG9naW4tbW9kYWwuaW4jU2lnbkluX21vZGFsIHtcbiAgei1pbmRleDogOTk5OTk5XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwwLDAsLjI1KTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubW9kYWwtZGlhbG9nIHtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDo1MCUgIWltcG9ydGFudDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSAhaW1wb3J0YW50O1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDQyMHB4O1xufVxuXG4ubG9naW4tbW9kYWwgLm1vZGFsLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA0MHB4IDAgMjBweCAwO1xufVxuLmNvbnRpbnVlTWFpbHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tb2RhbC1ib2R5IC5sb2dvIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgMCAzMHB4IDA7XG59XG5cbi5sb2dpbi1tb2RhbCAubW9kYWwtYm9keSAubG9naW4tZm9ybSB7XG4gIG1heC13aWR0aDogMzIwcHg7XG4gIHdpZHRoOiAxMDAlXG59XG5cbi5jb250cm9sLWdyb3VwLnNvY2lhbC1sb2dpbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbnAudHJhbnNwYXJlbnQtYmFja2dyb3VuZCB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uZmFjZWJvb2stc2lnbmluZy1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICM0MjY3YjI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0MjY3YjI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMCAzMHB4IDAgMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5nb29nbGUtc2lnbmluZy1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICM2YmIwYzU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2YmIwYzU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMCAzMHB4IDAgMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZml0LWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6IDAgMDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4uZml0LWljb24gaW1ne1xuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbn1cbi5zb2NpYWwtc3NuIHAge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9nbyB7XG4gIGhlaWdodDogNjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAyNXB4IDAgMDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjdXJzb3I6IGluaGVyaXQ7XG59XG5cbi5zb2NpYWwtbG9naW4gc3BhbiB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG5oZWFkZXIgLm1vZGFsLWJvZHkgLmxvZ28ge1xuICBoZWlnaHQ6IGF1dG8haW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0byFpbXBvcnRhbnRcbn1cblxuLmxvZ2luLW1vZGFsIC5tb2RhbC1ib2R5IC5jb250cm9sLWdyb3VwIGlucHV0LmJ0biB7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0Nzg5ZmY7XG4gIGhlaWdodDogNTBweDtcbiAgY29sb3I6ICM0Nzg5ZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLmxvZ2luLW1vZGFsIC5tb2RhbC1ib2R5IC5jb250cm9sLWdyb3VwIGlucHV0LmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM0Nzg5ZmY7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDc4OWZmXG59XG5cblxuLnNlcHJhdGVyLW9yIHtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOGY5ZWIxXG59XG5cbi5zZXByYXRlci1vcjo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHRvcDogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZWJlZmY1O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG9cbn1cblxuLnNlcHJhdGVyLW9yOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHRvcDogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZWJlZmY1O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBsZWZ0OiAxMDAlO1xuICByaWdodDogYXV0b1xufVxuXG4uc2lnbnVwLXR4dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM5MWExYjM7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAuM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAyMHB4IDAgMjBweCAwO1xufVxuXG4uc2lnbnVwLXR4dCBzcGFuIHtcbiAgY29sb3I6ICMxYjhkZjE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG5oZWFkZXIgLm1vZGFsLWRpYWxvZyB7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG9cbn1cblxuXG4ubW9kYWwtYmFja2Ryb3AuZmFkZS5pbiB7XG4gIHotaW5kZXg6IDk5OTk5XG59XG5cblxuXG5cblxuXG5cbiJdfQ== */", ".fs-1[_ngcontent-%COMP%] {font-size: 1px;}\n.fs-2[_ngcontent-%COMP%] {font-size: 2px;}\n.fs-3[_ngcontent-%COMP%] {font-size: 3px;}\n.fs-4[_ngcontent-%COMP%] {font-size: 4px;}\n.fs-5[_ngcontent-%COMP%] {font-size: 5px;}\n.fs-6[_ngcontent-%COMP%] {font-size: 6px;}\n.fs-7[_ngcontent-%COMP%] {font-size: 7px;}\n.fs-8[_ngcontent-%COMP%] {font-size: 8px;}\n.fs-9[_ngcontent-%COMP%] {font-size: 9px;}\n.fs-10[_ngcontent-%COMP%] {font-size: 10px;}\n.fs-11[_ngcontent-%COMP%] {font-size: 11px;}\n.fs-12[_ngcontent-%COMP%] {font-size: 12px;}\n.fs-13[_ngcontent-%COMP%] {font-size: 13px;}\n.fs-14[_ngcontent-%COMP%] {font-size: 14px;}\n.fs-15[_ngcontent-%COMP%] {font-size: 15px;}\n.fs-16[_ngcontent-%COMP%] {font-size: 16px;}\n.fs-17[_ngcontent-%COMP%] {font-size: 17px;}\n.fs-18[_ngcontent-%COMP%] {font-size: 18px;}\n.fs-19[_ngcontent-%COMP%] {font-size: 19px;}\n.fs-20[_ngcontent-%COMP%] {font-size: 20px;}\n.fs-21[_ngcontent-%COMP%] {font-size: 21px;}\n.fs-22[_ngcontent-%COMP%] {font-size: 22px;}\n.fs-23[_ngcontent-%COMP%] {font-size: 23px;}\n.fs-24[_ngcontent-%COMP%] {font-size: 24px;}\n.fs-25[_ngcontent-%COMP%] {font-size: 25px;}\n.fs-26[_ngcontent-%COMP%] {font-size: 26px;}\n.fs-27[_ngcontent-%COMP%] {font-size: 27px;}\n.fs-28[_ngcontent-%COMP%] {font-size: 28px;}\n.fs-29[_ngcontent-%COMP%] {font-size: 29px;}\n.fs-30[_ngcontent-%COMP%] {font-size: 30px;}\n.fs-31[_ngcontent-%COMP%] {font-size: 31px;}\n.fs-32[_ngcontent-%COMP%] {font-size: 32px;}\n.fs-33[_ngcontent-%COMP%] {font-size: 33px;}\n.fs-34[_ngcontent-%COMP%] {font-size: 34px;}\n.fs-35[_ngcontent-%COMP%] {font-size: 35px;}\n.fs-36[_ngcontent-%COMP%] {font-size: 36px;}\n.fs-37[_ngcontent-%COMP%] {font-size: 37px;}\n.fs-38[_ngcontent-%COMP%] {font-size: 38px;}\n.fs-39[_ngcontent-%COMP%] {font-size: 39px;}\n.fs-40[_ngcontent-%COMP%] {font-size: 40px;}\n.fs-41[_ngcontent-%COMP%] {font-size: 41px;}\n.fs-42[_ngcontent-%COMP%] {font-size: 42px;}\n.fs-43[_ngcontent-%COMP%] {font-size: 43px;}\n.fs-44[_ngcontent-%COMP%] {font-size: 44px;}\n.fs-45[_ngcontent-%COMP%] {font-size: 45px;}\n.fs-46[_ngcontent-%COMP%] {font-size: 46px;}\n.fs-47[_ngcontent-%COMP%] {font-size: 47px;}\n.fs-48[_ngcontent-%COMP%] {font-size: 48px;}\n.fs-49[_ngcontent-%COMP%] {font-size: 49px;}\n.fs-50[_ngcontent-%COMP%] {font-size: 50px;}\n.fs-51[_ngcontent-%COMP%] {font-size: 51px;}\n.fs-52[_ngcontent-%COMP%] {font-size: 52px;}\n.fs-53[_ngcontent-%COMP%] {font-size: 53px;}\n.fs-54[_ngcontent-%COMP%] {font-size: 54px;}\n.fs-55[_ngcontent-%COMP%] {font-size: 55px;}\n.fs-56[_ngcontent-%COMP%] {font-size: 56px;}\n.fs-57[_ngcontent-%COMP%] {font-size: 57px;}\n.fs-58[_ngcontent-%COMP%] {font-size: 58px;}\n.fs-59[_ngcontent-%COMP%] {font-size: 59px;}\n.fs-60[_ngcontent-%COMP%] {font-size: 60px;}\n.fs-61[_ngcontent-%COMP%] {font-size: 61px;}\n.fs-62[_ngcontent-%COMP%] {font-size: 62px;}\n.fs-63[_ngcontent-%COMP%] {font-size: 63px;}\n.fs-64[_ngcontent-%COMP%] {font-size: 64px;}\n.fs-65[_ngcontent-%COMP%] {font-size: 65px;}\n.fs-66[_ngcontent-%COMP%] {font-size: 66px;}\n.fs-67[_ngcontent-%COMP%] {font-size: 67px;}\n.fs-68[_ngcontent-%COMP%] {font-size: 68px;}\n.fs-69[_ngcontent-%COMP%] {font-size: 69px;}\n.fs-70[_ngcontent-%COMP%] {font-size: 70px;}\n.fs-71[_ngcontent-%COMP%] {font-size: 71px;}\n.fs-72[_ngcontent-%COMP%] {font-size: 72px;}\n.fs-73[_ngcontent-%COMP%] {font-size: 73px;}\n.fs-74[_ngcontent-%COMP%] {font-size: 74px;}\n.fs-75[_ngcontent-%COMP%] {font-size: 75px;}\n.fs-76[_ngcontent-%COMP%] {font-size: 76px;}\n.fs-77[_ngcontent-%COMP%] {font-size: 77px;}\n.fs-78[_ngcontent-%COMP%] {font-size: 78px;}\n.fs-79[_ngcontent-%COMP%] {font-size: 79px;}\n.fs-80[_ngcontent-%COMP%] {font-size: 80px;}\n.fs-81[_ngcontent-%COMP%] {font-size: 81px;}\n.fs-82[_ngcontent-%COMP%] {font-size: 82px;}\n.fs-83[_ngcontent-%COMP%] {font-size: 83px;}\n.fs-84[_ngcontent-%COMP%] {font-size: 84px;}\n.fs-85[_ngcontent-%COMP%] {font-size: 85px;}\n.fs-86[_ngcontent-%COMP%] {font-size: 86px;}\n.fs-87[_ngcontent-%COMP%] {font-size: 87px;}\n.fs-88[_ngcontent-%COMP%] {font-size: 88px;}\n.fs-89[_ngcontent-%COMP%] {font-size: 89px;}\n.fs-90[_ngcontent-%COMP%] {font-size: 90px;}\n.fs-91[_ngcontent-%COMP%] {font-size: 91px;}\n.fs-92[_ngcontent-%COMP%] {font-size: 92px;}\n.fs-93[_ngcontent-%COMP%] {font-size: 93px;}\n.fs-94[_ngcontent-%COMP%] {font-size: 94px;}\n.fs-95[_ngcontent-%COMP%] {font-size: 95px;}\n.fs-96[_ngcontent-%COMP%] {font-size: 96px;}\n.fs-97[_ngcontent-%COMP%] {font-size: 97px;}\n.fs-98[_ngcontent-%COMP%] {font-size: 98px;}\n.fs-99[_ngcontent-%COMP%] {font-size: 99px;}\n.fs-100[_ngcontent-%COMP%] {font-size: 100px;}\n.fs-101[_ngcontent-%COMP%] {font-size: 101px;}\n.fs-102[_ngcontent-%COMP%] {font-size: 102px;}\n.fs-103[_ngcontent-%COMP%] {font-size: 103px;}\n.fs-104[_ngcontent-%COMP%] {font-size: 104px;}\n.fs-105[_ngcontent-%COMP%] {font-size: 105px;}\n.fs-106[_ngcontent-%COMP%] {font-size: 106px;}\n.fs-107[_ngcontent-%COMP%] {font-size: 107px;}\n.fs-108[_ngcontent-%COMP%] {font-size: 108px;}\n.fs-109[_ngcontent-%COMP%] {font-size: 109px;}\n.fs-110[_ngcontent-%COMP%] {font-size: 110px;}\n.fs-111[_ngcontent-%COMP%] {font-size: 111px;}\n.fs-112[_ngcontent-%COMP%] {font-size: 112px;}\n.fs-113[_ngcontent-%COMP%] {font-size: 113px;}\n.fs-114[_ngcontent-%COMP%] {font-size: 114px;}\n.fs-115[_ngcontent-%COMP%] {font-size: 115px;}\n.fs-116[_ngcontent-%COMP%] {font-size: 116px;}\n.fs-117[_ngcontent-%COMP%] {font-size: 117px;}\n.fs-118[_ngcontent-%COMP%] {font-size: 118px;}\n.fs-119[_ngcontent-%COMP%] {font-size: 119px;}\n.fs-120[_ngcontent-%COMP%] {font-size: 120px;}\n.fs-121[_ngcontent-%COMP%] {font-size: 121px;}\n.fs-122[_ngcontent-%COMP%] {font-size: 122px;}\n.fs-123[_ngcontent-%COMP%] {font-size: 123px;}\n.fs-124[_ngcontent-%COMP%] {font-size: 124px;}\n.fs-125[_ngcontent-%COMP%] {font-size: 125px;}\n.fs-126[_ngcontent-%COMP%] {font-size: 126px;}\n.fs-127[_ngcontent-%COMP%] {font-size: 127px;}\n.fs-128[_ngcontent-%COMP%] {font-size: 128px;}\n.fs-129[_ngcontent-%COMP%] {font-size: 129px;}\n.fs-130[_ngcontent-%COMP%] {font-size: 130px;}\n.fs-131[_ngcontent-%COMP%] {font-size: 131px;}\n.fs-132[_ngcontent-%COMP%] {font-size: 132px;}\n.fs-133[_ngcontent-%COMP%] {font-size: 133px;}\n.fs-134[_ngcontent-%COMP%] {font-size: 134px;}\n.fs-135[_ngcontent-%COMP%] {font-size: 135px;}\n.fs-136[_ngcontent-%COMP%] {font-size: 136px;}\n.fs-137[_ngcontent-%COMP%] {font-size: 137px;}\n.fs-138[_ngcontent-%COMP%] {font-size: 138px;}\n.fs-139[_ngcontent-%COMP%] {font-size: 139px;}\n.fs-140[_ngcontent-%COMP%] {font-size: 140px;}\n.fs-141[_ngcontent-%COMP%] {font-size: 141px;}\n.fs-142[_ngcontent-%COMP%] {font-size: 142px;}\n.fs-143[_ngcontent-%COMP%] {font-size: 143px;}\n.fs-144[_ngcontent-%COMP%] {font-size: 144px;}\n.fs-145[_ngcontent-%COMP%] {font-size: 145px;}\n.fs-146[_ngcontent-%COMP%] {font-size: 146px;}\n.fs-147[_ngcontent-%COMP%] {font-size: 147px;}\n.fs-148[_ngcontent-%COMP%] {font-size: 148px;}\n.fs-149[_ngcontent-%COMP%] {font-size: 149px;}\n.fs-150[_ngcontent-%COMP%] {font-size: 150px;}\n.fs-151[_ngcontent-%COMP%] {font-size: 151px;}\n.fs-152[_ngcontent-%COMP%] {font-size: 152px;}\n.fs-153[_ngcontent-%COMP%] {font-size: 153px;}\n.fs-154[_ngcontent-%COMP%] {font-size: 154px;}\n.fs-155[_ngcontent-%COMP%] {font-size: 155px;}\n.fs-156[_ngcontent-%COMP%] {font-size: 156px;}\n.fs-157[_ngcontent-%COMP%] {font-size: 157px;}\n.fs-158[_ngcontent-%COMP%] {font-size: 158px;}\n.fs-159[_ngcontent-%COMP%] {font-size: 159px;}\n.fs-160[_ngcontent-%COMP%] {font-size: 160px;}\n.fs-161[_ngcontent-%COMP%] {font-size: 161px;}\n.fs-162[_ngcontent-%COMP%] {font-size: 162px;}\n.fs-163[_ngcontent-%COMP%] {font-size: 163px;}\n.fs-164[_ngcontent-%COMP%] {font-size: 164px;}\n.fs-165[_ngcontent-%COMP%] {font-size: 165px;}\n.fs-166[_ngcontent-%COMP%] {font-size: 166px;}\n.fs-167[_ngcontent-%COMP%] {font-size: 167px;}\n.fs-168[_ngcontent-%COMP%] {font-size: 168px;}\n.fs-169[_ngcontent-%COMP%] {font-size: 169px;}\n.fs-170[_ngcontent-%COMP%] {font-size: 170px;}\n.fs-171[_ngcontent-%COMP%] {font-size: 171px;}\n.fs-172[_ngcontent-%COMP%] {font-size: 172px;}\n.fs-173[_ngcontent-%COMP%] {font-size: 173px;}\n.fs-174[_ngcontent-%COMP%] {font-size: 174px;}\n.fs-175[_ngcontent-%COMP%] {font-size: 175px;}\n.fs-176[_ngcontent-%COMP%] {font-size: 176px;}\n.fs-177[_ngcontent-%COMP%] {font-size: 177px;}\n.fs-178[_ngcontent-%COMP%] {font-size: 178px;}\n.fs-179[_ngcontent-%COMP%] {font-size: 179px;}\n.fs-180[_ngcontent-%COMP%] {font-size: 180px;}\n.fs-181[_ngcontent-%COMP%] {font-size: 181px;}\n.fs-182[_ngcontent-%COMP%] {font-size: 182px;}\n.fs-183[_ngcontent-%COMP%] {font-size: 183px;}\n.fs-184[_ngcontent-%COMP%] {font-size: 184px;}\n.fs-185[_ngcontent-%COMP%] {font-size: 185px;}\n.fs-186[_ngcontent-%COMP%] {font-size: 186px;}\n.fs-187[_ngcontent-%COMP%] {font-size: 187px;}\n.fs-188[_ngcontent-%COMP%] {font-size: 188px;}\n.fs-189[_ngcontent-%COMP%] {font-size: 189px;}\n.fs-190[_ngcontent-%COMP%] {font-size: 190px;}\n.fs-191[_ngcontent-%COMP%] {font-size: 191px;}\n.fs-192[_ngcontent-%COMP%] {font-size: 192px;}\n.fs-193[_ngcontent-%COMP%] {font-size: 193px;}\n.fs-194[_ngcontent-%COMP%] {font-size: 194px;}\n.fs-195[_ngcontent-%COMP%] {font-size: 195px;}\n.fs-196[_ngcontent-%COMP%] {font-size: 196px;}\n.fs-197[_ngcontent-%COMP%] {font-size: 197px;}\n.fs-198[_ngcontent-%COMP%] {font-size: 198px;}\n.fs-199[_ngcontent-%COMP%] {font-size: 199px;}\n.fs-200[_ngcontent-%COMP%] {font-size: 200px;}\n\n.p-t-0[_ngcontent-%COMP%] {padding-top: 0px;}\n.p-t-1[_ngcontent-%COMP%] {padding-top: 1px;}\n.p-t-2[_ngcontent-%COMP%] {padding-top: 2px;}\n.p-t-3[_ngcontent-%COMP%] {padding-top: 3px;}\n.p-t-4[_ngcontent-%COMP%] {padding-top: 4px;}\n.p-t-5[_ngcontent-%COMP%] {padding-top: 5px;}\n.p-t-6[_ngcontent-%COMP%] {padding-top: 6px;}\n.p-t-7[_ngcontent-%COMP%] {padding-top: 7px;}\n.p-t-8[_ngcontent-%COMP%] {padding-top: 8px;}\n.p-t-9[_ngcontent-%COMP%] {padding-top: 9px;}\n.p-t-10[_ngcontent-%COMP%] {padding-top: 10px;}\n.p-t-11[_ngcontent-%COMP%] {padding-top: 11px;}\n.p-t-12[_ngcontent-%COMP%] {padding-top: 12px;}\n.p-t-13[_ngcontent-%COMP%] {padding-top: 13px;}\n.p-t-14[_ngcontent-%COMP%] {padding-top: 14px;}\n.p-t-15[_ngcontent-%COMP%] {padding-top: 15px;}\n.p-t-16[_ngcontent-%COMP%] {padding-top: 16px;}\n.p-t-17[_ngcontent-%COMP%] {padding-top: 17px;}\n.p-t-18[_ngcontent-%COMP%] {padding-top: 18px;}\n.p-t-19[_ngcontent-%COMP%] {padding-top: 19px;}\n.p-t-20[_ngcontent-%COMP%] {padding-top: 20px;}\n.p-t-21[_ngcontent-%COMP%] {padding-top: 21px;}\n.p-t-22[_ngcontent-%COMP%] {padding-top: 22px;}\n.p-t-23[_ngcontent-%COMP%] {padding-top: 23px;}\n.p-t-24[_ngcontent-%COMP%] {padding-top: 24px;}\n.p-t-25[_ngcontent-%COMP%] {padding-top: 25px;}\n.p-t-26[_ngcontent-%COMP%] {padding-top: 26px;}\n.p-t-27[_ngcontent-%COMP%] {padding-top: 27px;}\n.p-t-28[_ngcontent-%COMP%] {padding-top: 28px;}\n.p-t-29[_ngcontent-%COMP%] {padding-top: 29px;}\n.p-t-30[_ngcontent-%COMP%] {padding-top: 30px;}\n.p-t-31[_ngcontent-%COMP%] {padding-top: 31px;}\n.p-t-32[_ngcontent-%COMP%] {padding-top: 32px;}\n.p-t-33[_ngcontent-%COMP%] {padding-top: 33px;}\n.p-t-34[_ngcontent-%COMP%] {padding-top: 34px;}\n.p-t-35[_ngcontent-%COMP%] {padding-top: 35px;}\n.p-t-36[_ngcontent-%COMP%] {padding-top: 36px;}\n.p-t-37[_ngcontent-%COMP%] {padding-top: 37px;}\n.p-t-38[_ngcontent-%COMP%] {padding-top: 38px;}\n.p-t-39[_ngcontent-%COMP%] {padding-top: 39px;}\n.p-t-40[_ngcontent-%COMP%] {padding-top: 40px;}\n.p-t-41[_ngcontent-%COMP%] {padding-top: 41px;}\n.p-t-42[_ngcontent-%COMP%] {padding-top: 42px;}\n.p-t-43[_ngcontent-%COMP%] {padding-top: 43px;}\n.p-t-44[_ngcontent-%COMP%] {padding-top: 44px;}\n.p-t-45[_ngcontent-%COMP%] {padding-top: 45px;}\n.p-t-46[_ngcontent-%COMP%] {padding-top: 46px;}\n.p-t-47[_ngcontent-%COMP%] {padding-top: 47px;}\n.p-t-48[_ngcontent-%COMP%] {padding-top: 48px;}\n.p-t-49[_ngcontent-%COMP%] {padding-top: 49px;}\n.p-t-50[_ngcontent-%COMP%] {padding-top: 50px;}\n.p-t-51[_ngcontent-%COMP%] {padding-top: 51px;}\n.p-t-52[_ngcontent-%COMP%] {padding-top: 52px;}\n.p-t-53[_ngcontent-%COMP%] {padding-top: 53px;}\n.p-t-54[_ngcontent-%COMP%] {padding-top: 54px;}\n.p-t-55[_ngcontent-%COMP%] {padding-top: 55px;}\n.p-t-56[_ngcontent-%COMP%] {padding-top: 56px;}\n.p-t-57[_ngcontent-%COMP%] {padding-top: 57px;}\n.p-t-58[_ngcontent-%COMP%] {padding-top: 58px;}\n.p-t-59[_ngcontent-%COMP%] {padding-top: 59px;}\n.p-t-60[_ngcontent-%COMP%] {padding-top: 60px;}\n.p-t-61[_ngcontent-%COMP%] {padding-top: 61px;}\n.p-t-62[_ngcontent-%COMP%] {padding-top: 62px;}\n.p-t-63[_ngcontent-%COMP%] {padding-top: 63px;}\n.p-t-64[_ngcontent-%COMP%] {padding-top: 64px;}\n.p-t-65[_ngcontent-%COMP%] {padding-top: 65px;}\n.p-t-66[_ngcontent-%COMP%] {padding-top: 66px;}\n.p-t-67[_ngcontent-%COMP%] {padding-top: 67px;}\n.p-t-68[_ngcontent-%COMP%] {padding-top: 68px;}\n.p-t-69[_ngcontent-%COMP%] {padding-top: 69px;}\n.p-t-70[_ngcontent-%COMP%] {padding-top: 70px;}\n.p-t-71[_ngcontent-%COMP%] {padding-top: 71px;}\n.p-t-72[_ngcontent-%COMP%] {padding-top: 72px;}\n.p-t-73[_ngcontent-%COMP%] {padding-top: 73px;}\n.p-t-74[_ngcontent-%COMP%] {padding-top: 74px;}\n.p-t-75[_ngcontent-%COMP%] {padding-top: 75px;}\n.p-t-76[_ngcontent-%COMP%] {padding-top: 76px;}\n.p-t-77[_ngcontent-%COMP%] {padding-top: 77px;}\n.p-t-78[_ngcontent-%COMP%] {padding-top: 78px;}\n.p-t-79[_ngcontent-%COMP%] {padding-top: 79px;}\n.p-t-80[_ngcontent-%COMP%] {padding-top: 80px;}\n.p-t-81[_ngcontent-%COMP%] {padding-top: 81px;}\n.p-t-82[_ngcontent-%COMP%] {padding-top: 82px;}\n.p-t-83[_ngcontent-%COMP%] {padding-top: 83px;}\n.p-t-84[_ngcontent-%COMP%] {padding-top: 84px;}\n.p-t-85[_ngcontent-%COMP%] {padding-top: 85px;}\n.p-t-86[_ngcontent-%COMP%] {padding-top: 86px;}\n.p-t-87[_ngcontent-%COMP%] {padding-top: 87px;}\n.p-t-88[_ngcontent-%COMP%] {padding-top: 88px;}\n.p-t-89[_ngcontent-%COMP%] {padding-top: 89px;}\n.p-t-90[_ngcontent-%COMP%] {padding-top: 90px;}\n.p-t-91[_ngcontent-%COMP%] {padding-top: 91px;}\n.p-t-92[_ngcontent-%COMP%] {padding-top: 92px;}\n.p-t-93[_ngcontent-%COMP%] {padding-top: 93px;}\n.p-t-94[_ngcontent-%COMP%] {padding-top: 94px;}\n.p-t-95[_ngcontent-%COMP%] {padding-top: 95px;}\n.p-t-96[_ngcontent-%COMP%] {padding-top: 96px;}\n.p-t-97[_ngcontent-%COMP%] {padding-top: 97px;}\n.p-t-98[_ngcontent-%COMP%] {padding-top: 98px;}\n.p-t-99[_ngcontent-%COMP%] {padding-top: 99px;}\n.p-t-100[_ngcontent-%COMP%] {padding-top: 100px;}\n.p-t-101[_ngcontent-%COMP%] {padding-top: 101px;}\n.p-t-102[_ngcontent-%COMP%] {padding-top: 102px;}\n.p-t-103[_ngcontent-%COMP%] {padding-top: 103px;}\n.p-t-104[_ngcontent-%COMP%] {padding-top: 104px;}\n.p-t-105[_ngcontent-%COMP%] {padding-top: 105px;}\n.p-t-106[_ngcontent-%COMP%] {padding-top: 106px;}\n.p-t-107[_ngcontent-%COMP%] {padding-top: 107px;}\n.p-t-108[_ngcontent-%COMP%] {padding-top: 108px;}\n.p-t-109[_ngcontent-%COMP%] {padding-top: 109px;}\n.p-t-110[_ngcontent-%COMP%] {padding-top: 110px;}\n.p-t-111[_ngcontent-%COMP%] {padding-top: 111px;}\n.p-t-112[_ngcontent-%COMP%] {padding-top: 112px;}\n.p-t-113[_ngcontent-%COMP%] {padding-top: 113px;}\n.p-t-114[_ngcontent-%COMP%] {padding-top: 114px;}\n.p-t-115[_ngcontent-%COMP%] {padding-top: 115px;}\n.p-t-116[_ngcontent-%COMP%] {padding-top: 116px;}\n.p-t-117[_ngcontent-%COMP%] {padding-top: 117px;}\n.p-t-118[_ngcontent-%COMP%] {padding-top: 118px;}\n.p-t-119[_ngcontent-%COMP%] {padding-top: 119px;}\n.p-t-120[_ngcontent-%COMP%] {padding-top: 120px;}\n.p-t-121[_ngcontent-%COMP%] {padding-top: 121px;}\n.p-t-122[_ngcontent-%COMP%] {padding-top: 122px;}\n.p-t-123[_ngcontent-%COMP%] {padding-top: 123px;}\n.p-t-124[_ngcontent-%COMP%] {padding-top: 124px;}\n.p-t-125[_ngcontent-%COMP%] {padding-top: 125px;}\n.p-t-126[_ngcontent-%COMP%] {padding-top: 126px;}\n.p-t-127[_ngcontent-%COMP%] {padding-top: 127px;}\n.p-t-128[_ngcontent-%COMP%] {padding-top: 128px;}\n.p-t-129[_ngcontent-%COMP%] {padding-top: 129px;}\n.p-t-130[_ngcontent-%COMP%] {padding-top: 130px;}\n.p-t-131[_ngcontent-%COMP%] {padding-top: 131px;}\n.p-t-132[_ngcontent-%COMP%] {padding-top: 132px;}\n.p-t-133[_ngcontent-%COMP%] {padding-top: 133px;}\n.p-t-134[_ngcontent-%COMP%] {padding-top: 134px;}\n.p-t-135[_ngcontent-%COMP%] {padding-top: 135px;}\n.p-t-136[_ngcontent-%COMP%] {padding-top: 136px;}\n.p-t-137[_ngcontent-%COMP%] {padding-top: 137px;}\n.p-t-138[_ngcontent-%COMP%] {padding-top: 138px;}\n.p-t-139[_ngcontent-%COMP%] {padding-top: 139px;}\n.p-t-140[_ngcontent-%COMP%] {padding-top: 140px;}\n.p-t-141[_ngcontent-%COMP%] {padding-top: 141px;}\n.p-t-142[_ngcontent-%COMP%] {padding-top: 142px;}\n.p-t-143[_ngcontent-%COMP%] {padding-top: 143px;}\n.p-t-144[_ngcontent-%COMP%] {padding-top: 144px;}\n.p-t-145[_ngcontent-%COMP%] {padding-top: 145px;}\n.p-t-146[_ngcontent-%COMP%] {padding-top: 146px;}\n.p-t-147[_ngcontent-%COMP%] {padding-top: 147px;}\n.p-t-148[_ngcontent-%COMP%] {padding-top: 148px;}\n.p-t-149[_ngcontent-%COMP%] {padding-top: 149px;}\n.p-t-150[_ngcontent-%COMP%] {padding-top: 150px;}\n.p-t-151[_ngcontent-%COMP%] {padding-top: 151px;}\n.p-t-152[_ngcontent-%COMP%] {padding-top: 152px;}\n.p-t-153[_ngcontent-%COMP%] {padding-top: 153px;}\n.p-t-154[_ngcontent-%COMP%] {padding-top: 154px;}\n.p-t-155[_ngcontent-%COMP%] {padding-top: 155px;}\n.p-t-156[_ngcontent-%COMP%] {padding-top: 156px;}\n.p-t-157[_ngcontent-%COMP%] {padding-top: 157px;}\n.p-t-158[_ngcontent-%COMP%] {padding-top: 158px;}\n.p-t-159[_ngcontent-%COMP%] {padding-top: 159px;}\n.p-t-160[_ngcontent-%COMP%] {padding-top: 160px;}\n.p-t-161[_ngcontent-%COMP%] {padding-top: 161px;}\n.p-t-162[_ngcontent-%COMP%] {padding-top: 162px;}\n.p-t-163[_ngcontent-%COMP%] {padding-top: 163px;}\n.p-t-164[_ngcontent-%COMP%] {padding-top: 164px;}\n.p-t-165[_ngcontent-%COMP%] {padding-top: 165px;}\n.p-t-166[_ngcontent-%COMP%] {padding-top: 166px;}\n.p-t-167[_ngcontent-%COMP%] {padding-top: 167px;}\n.p-t-168[_ngcontent-%COMP%] {padding-top: 168px;}\n.p-t-169[_ngcontent-%COMP%] {padding-top: 169px;}\n.p-t-170[_ngcontent-%COMP%] {padding-top: 170px;}\n.p-t-171[_ngcontent-%COMP%] {padding-top: 171px;}\n.p-t-172[_ngcontent-%COMP%] {padding-top: 172px;}\n.p-t-173[_ngcontent-%COMP%] {padding-top: 173px;}\n.p-t-174[_ngcontent-%COMP%] {padding-top: 174px;}\n.p-t-175[_ngcontent-%COMP%] {padding-top: 175px;}\n.p-t-176[_ngcontent-%COMP%] {padding-top: 176px;}\n.p-t-177[_ngcontent-%COMP%] {padding-top: 177px;}\n.p-t-178[_ngcontent-%COMP%] {padding-top: 178px;}\n.p-t-179[_ngcontent-%COMP%] {padding-top: 179px;}\n.p-t-180[_ngcontent-%COMP%] {padding-top: 180px;}\n.p-t-181[_ngcontent-%COMP%] {padding-top: 181px;}\n.p-t-182[_ngcontent-%COMP%] {padding-top: 182px;}\n.p-t-183[_ngcontent-%COMP%] {padding-top: 183px;}\n.p-t-184[_ngcontent-%COMP%] {padding-top: 184px;}\n.p-t-185[_ngcontent-%COMP%] {padding-top: 185px;}\n.p-t-186[_ngcontent-%COMP%] {padding-top: 186px;}\n.p-t-187[_ngcontent-%COMP%] {padding-top: 187px;}\n.p-t-188[_ngcontent-%COMP%] {padding-top: 188px;}\n.p-t-189[_ngcontent-%COMP%] {padding-top: 189px;}\n.p-t-190[_ngcontent-%COMP%] {padding-top: 190px;}\n.p-t-191[_ngcontent-%COMP%] {padding-top: 191px;}\n.p-t-192[_ngcontent-%COMP%] {padding-top: 192px;}\n.p-t-193[_ngcontent-%COMP%] {padding-top: 193px;}\n.p-t-194[_ngcontent-%COMP%] {padding-top: 194px;}\n.p-t-195[_ngcontent-%COMP%] {padding-top: 195px;}\n.p-t-196[_ngcontent-%COMP%] {padding-top: 196px;}\n.p-t-197[_ngcontent-%COMP%] {padding-top: 197px;}\n.p-t-198[_ngcontent-%COMP%] {padding-top: 198px;}\n.p-t-199[_ngcontent-%COMP%] {padding-top: 199px;}\n.p-t-200[_ngcontent-%COMP%] {padding-top: 200px;}\n.p-t-201[_ngcontent-%COMP%] {padding-top: 201px;}\n.p-t-202[_ngcontent-%COMP%] {padding-top: 202px;}\n.p-t-203[_ngcontent-%COMP%] {padding-top: 203px;}\n.p-t-204[_ngcontent-%COMP%] {padding-top: 204px;}\n.p-t-205[_ngcontent-%COMP%] {padding-top: 205px;}\n.p-t-206[_ngcontent-%COMP%] {padding-top: 206px;}\n.p-t-207[_ngcontent-%COMP%] {padding-top: 207px;}\n.p-t-208[_ngcontent-%COMP%] {padding-top: 208px;}\n.p-t-209[_ngcontent-%COMP%] {padding-top: 209px;}\n.p-t-210[_ngcontent-%COMP%] {padding-top: 210px;}\n.p-t-211[_ngcontent-%COMP%] {padding-top: 211px;}\n.p-t-212[_ngcontent-%COMP%] {padding-top: 212px;}\n.p-t-213[_ngcontent-%COMP%] {padding-top: 213px;}\n.p-t-214[_ngcontent-%COMP%] {padding-top: 214px;}\n.p-t-215[_ngcontent-%COMP%] {padding-top: 215px;}\n.p-t-216[_ngcontent-%COMP%] {padding-top: 216px;}\n.p-t-217[_ngcontent-%COMP%] {padding-top: 217px;}\n.p-t-218[_ngcontent-%COMP%] {padding-top: 218px;}\n.p-t-219[_ngcontent-%COMP%] {padding-top: 219px;}\n.p-t-220[_ngcontent-%COMP%] {padding-top: 220px;}\n.p-t-221[_ngcontent-%COMP%] {padding-top: 221px;}\n.p-t-222[_ngcontent-%COMP%] {padding-top: 222px;}\n.p-t-223[_ngcontent-%COMP%] {padding-top: 223px;}\n.p-t-224[_ngcontent-%COMP%] {padding-top: 224px;}\n.p-t-225[_ngcontent-%COMP%] {padding-top: 225px;}\n.p-t-226[_ngcontent-%COMP%] {padding-top: 226px;}\n.p-t-227[_ngcontent-%COMP%] {padding-top: 227px;}\n.p-t-228[_ngcontent-%COMP%] {padding-top: 228px;}\n.p-t-229[_ngcontent-%COMP%] {padding-top: 229px;}\n.p-t-230[_ngcontent-%COMP%] {padding-top: 230px;}\n.p-t-231[_ngcontent-%COMP%] {padding-top: 231px;}\n.p-t-232[_ngcontent-%COMP%] {padding-top: 232px;}\n.p-t-233[_ngcontent-%COMP%] {padding-top: 233px;}\n.p-t-234[_ngcontent-%COMP%] {padding-top: 234px;}\n.p-t-235[_ngcontent-%COMP%] {padding-top: 235px;}\n.p-t-236[_ngcontent-%COMP%] {padding-top: 236px;}\n.p-t-237[_ngcontent-%COMP%] {padding-top: 237px;}\n.p-t-238[_ngcontent-%COMP%] {padding-top: 238px;}\n.p-t-239[_ngcontent-%COMP%] {padding-top: 239px;}\n.p-t-240[_ngcontent-%COMP%] {padding-top: 240px;}\n.p-t-241[_ngcontent-%COMP%] {padding-top: 241px;}\n.p-t-242[_ngcontent-%COMP%] {padding-top: 242px;}\n.p-t-243[_ngcontent-%COMP%] {padding-top: 243px;}\n.p-t-244[_ngcontent-%COMP%] {padding-top: 244px;}\n.p-t-245[_ngcontent-%COMP%] {padding-top: 245px;}\n.p-t-246[_ngcontent-%COMP%] {padding-top: 246px;}\n.p-t-247[_ngcontent-%COMP%] {padding-top: 247px;}\n.p-t-248[_ngcontent-%COMP%] {padding-top: 248px;}\n.p-t-249[_ngcontent-%COMP%] {padding-top: 249px;}\n.p-t-250[_ngcontent-%COMP%] {padding-top: 250px;}\n.p-b-0[_ngcontent-%COMP%] {padding-bottom: 0px;}\n.p-b-1[_ngcontent-%COMP%] {padding-bottom: 1px;}\n.p-b-2[_ngcontent-%COMP%] {padding-bottom: 2px;}\n.p-b-3[_ngcontent-%COMP%] {padding-bottom: 3px;}\n.p-b-4[_ngcontent-%COMP%] {padding-bottom: 4px;}\n.p-b-5[_ngcontent-%COMP%] {padding-bottom: 5px;}\n.p-b-6[_ngcontent-%COMP%] {padding-bottom: 6px;}\n.p-b-7[_ngcontent-%COMP%] {padding-bottom: 7px;}\n.p-b-8[_ngcontent-%COMP%] {padding-bottom: 8px;}\n.p-b-9[_ngcontent-%COMP%] {padding-bottom: 9px;}\n.p-b-10[_ngcontent-%COMP%] {padding-bottom: 10px;}\n.p-b-11[_ngcontent-%COMP%] {padding-bottom: 11px;}\n.p-b-12[_ngcontent-%COMP%] {padding-bottom: 12px;}\n.p-b-13[_ngcontent-%COMP%] {padding-bottom: 13px;}\n.p-b-14[_ngcontent-%COMP%] {padding-bottom: 14px;}\n.p-b-15[_ngcontent-%COMP%] {padding-bottom: 15px;}\n.p-b-16[_ngcontent-%COMP%] {padding-bottom: 16px;}\n.p-b-17[_ngcontent-%COMP%] {padding-bottom: 17px;}\n.p-b-18[_ngcontent-%COMP%] {padding-bottom: 18px;}\n.p-b-19[_ngcontent-%COMP%] {padding-bottom: 19px;}\n.p-b-20[_ngcontent-%COMP%] {padding-bottom: 20px;}\n.p-b-21[_ngcontent-%COMP%] {padding-bottom: 21px;}\n.p-b-22[_ngcontent-%COMP%] {padding-bottom: 22px;}\n.p-b-23[_ngcontent-%COMP%] {padding-bottom: 23px;}\n.p-b-24[_ngcontent-%COMP%] {padding-bottom: 24px;}\n.p-b-25[_ngcontent-%COMP%] {padding-bottom: 25px;}\n.p-b-26[_ngcontent-%COMP%] {padding-bottom: 26px;}\n.p-b-27[_ngcontent-%COMP%] {padding-bottom: 27px;}\n.p-b-28[_ngcontent-%COMP%] {padding-bottom: 28px;}\n.p-b-29[_ngcontent-%COMP%] {padding-bottom: 29px;}\n.p-b-30[_ngcontent-%COMP%] {padding-bottom: 30px;}\n.p-b-31[_ngcontent-%COMP%] {padding-bottom: 31px;}\n.p-b-32[_ngcontent-%COMP%] {padding-bottom: 32px;}\n.p-b-33[_ngcontent-%COMP%] {padding-bottom: 33px;}\n.p-b-34[_ngcontent-%COMP%] {padding-bottom: 34px;}\n.p-b-35[_ngcontent-%COMP%] {padding-bottom: 35px;}\n.p-b-36[_ngcontent-%COMP%] {padding-bottom: 36px;}\n.p-b-37[_ngcontent-%COMP%] {padding-bottom: 37px;}\n.p-b-38[_ngcontent-%COMP%] {padding-bottom: 38px;}\n.p-b-39[_ngcontent-%COMP%] {padding-bottom: 39px;}\n.p-b-40[_ngcontent-%COMP%] {padding-bottom: 40px;}\n.p-b-41[_ngcontent-%COMP%] {padding-bottom: 41px;}\n.p-b-42[_ngcontent-%COMP%] {padding-bottom: 42px;}\n.p-b-43[_ngcontent-%COMP%] {padding-bottom: 43px;}\n.p-b-44[_ngcontent-%COMP%] {padding-bottom: 44px;}\n.p-b-45[_ngcontent-%COMP%] {padding-bottom: 45px;}\n.p-b-46[_ngcontent-%COMP%] {padding-bottom: 46px;}\n.p-b-47[_ngcontent-%COMP%] {padding-bottom: 47px;}\n.p-b-48[_ngcontent-%COMP%] {padding-bottom: 48px;}\n.p-b-49[_ngcontent-%COMP%] {padding-bottom: 49px;}\n.p-b-50[_ngcontent-%COMP%] {padding-bottom: 50px;}\n.p-b-51[_ngcontent-%COMP%] {padding-bottom: 51px;}\n.p-b-52[_ngcontent-%COMP%] {padding-bottom: 52px;}\n.p-b-53[_ngcontent-%COMP%] {padding-bottom: 53px;}\n.p-b-54[_ngcontent-%COMP%] {padding-bottom: 54px;}\n.p-b-55[_ngcontent-%COMP%] {padding-bottom: 55px;}\n.p-b-56[_ngcontent-%COMP%] {padding-bottom: 56px;}\n.p-b-57[_ngcontent-%COMP%] {padding-bottom: 57px;}\n.p-b-58[_ngcontent-%COMP%] {padding-bottom: 58px;}\n.p-b-59[_ngcontent-%COMP%] {padding-bottom: 59px;}\n.p-b-60[_ngcontent-%COMP%] {padding-bottom: 60px;}\n.p-b-61[_ngcontent-%COMP%] {padding-bottom: 61px;}\n.p-b-62[_ngcontent-%COMP%] {padding-bottom: 62px;}\n.p-b-63[_ngcontent-%COMP%] {padding-bottom: 63px;}\n.p-b-64[_ngcontent-%COMP%] {padding-bottom: 64px;}\n.p-b-65[_ngcontent-%COMP%] {padding-bottom: 65px;}\n.p-b-66[_ngcontent-%COMP%] {padding-bottom: 66px;}\n.p-b-67[_ngcontent-%COMP%] {padding-bottom: 67px;}\n.p-b-68[_ngcontent-%COMP%] {padding-bottom: 68px;}\n.p-b-69[_ngcontent-%COMP%] {padding-bottom: 69px;}\n.p-b-70[_ngcontent-%COMP%] {padding-bottom: 70px;}\n.p-b-71[_ngcontent-%COMP%] {padding-bottom: 71px;}\n.p-b-72[_ngcontent-%COMP%] {padding-bottom: 72px;}\n.p-b-73[_ngcontent-%COMP%] {padding-bottom: 73px;}\n.p-b-74[_ngcontent-%COMP%] {padding-bottom: 74px;}\n.p-b-75[_ngcontent-%COMP%] {padding-bottom: 75px;}\n.p-b-76[_ngcontent-%COMP%] {padding-bottom: 76px;}\n.p-b-77[_ngcontent-%COMP%] {padding-bottom: 77px;}\n.p-b-78[_ngcontent-%COMP%] {padding-bottom: 78px;}\n.p-b-79[_ngcontent-%COMP%] {padding-bottom: 79px;}\n.p-b-80[_ngcontent-%COMP%] {padding-bottom: 80px;}\n.p-b-81[_ngcontent-%COMP%] {padding-bottom: 81px;}\n.p-b-82[_ngcontent-%COMP%] {padding-bottom: 82px;}\n.p-b-83[_ngcontent-%COMP%] {padding-bottom: 83px;}\n.p-b-84[_ngcontent-%COMP%] {padding-bottom: 84px;}\n.p-b-85[_ngcontent-%COMP%] {padding-bottom: 85px;}\n.p-b-86[_ngcontent-%COMP%] {padding-bottom: 86px;}\n.p-b-87[_ngcontent-%COMP%] {padding-bottom: 87px;}\n.p-b-88[_ngcontent-%COMP%] {padding-bottom: 88px;}\n.p-b-89[_ngcontent-%COMP%] {padding-bottom: 89px;}\n.p-b-90[_ngcontent-%COMP%] {padding-bottom: 90px;}\n.p-b-91[_ngcontent-%COMP%] {padding-bottom: 91px;}\n.p-b-92[_ngcontent-%COMP%] {padding-bottom: 92px;}\n.p-b-93[_ngcontent-%COMP%] {padding-bottom: 93px;}\n.p-b-94[_ngcontent-%COMP%] {padding-bottom: 94px;}\n.p-b-95[_ngcontent-%COMP%] {padding-bottom: 95px;}\n.p-b-96[_ngcontent-%COMP%] {padding-bottom: 96px;}\n.p-b-97[_ngcontent-%COMP%] {padding-bottom: 97px;}\n.p-b-98[_ngcontent-%COMP%] {padding-bottom: 98px;}\n.p-b-99[_ngcontent-%COMP%] {padding-bottom: 99px;}\n.p-b-100[_ngcontent-%COMP%] {padding-bottom: 100px;}\n.p-b-101[_ngcontent-%COMP%] {padding-bottom: 101px;}\n.p-b-102[_ngcontent-%COMP%] {padding-bottom: 102px;}\n.p-b-103[_ngcontent-%COMP%] {padding-bottom: 103px;}\n.p-b-104[_ngcontent-%COMP%] {padding-bottom: 104px;}\n.p-b-105[_ngcontent-%COMP%] {padding-bottom: 105px;}\n.p-b-106[_ngcontent-%COMP%] {padding-bottom: 106px;}\n.p-b-107[_ngcontent-%COMP%] {padding-bottom: 107px;}\n.p-b-108[_ngcontent-%COMP%] {padding-bottom: 108px;}\n.p-b-109[_ngcontent-%COMP%] {padding-bottom: 109px;}\n.p-b-110[_ngcontent-%COMP%] {padding-bottom: 110px;}\n.p-b-111[_ngcontent-%COMP%] {padding-bottom: 111px;}\n.p-b-112[_ngcontent-%COMP%] {padding-bottom: 112px;}\n.p-b-113[_ngcontent-%COMP%] {padding-bottom: 113px;}\n.p-b-114[_ngcontent-%COMP%] {padding-bottom: 114px;}\n.p-b-115[_ngcontent-%COMP%] {padding-bottom: 115px;}\n.p-b-116[_ngcontent-%COMP%] {padding-bottom: 116px;}\n.p-b-117[_ngcontent-%COMP%] {padding-bottom: 117px;}\n.p-b-118[_ngcontent-%COMP%] {padding-bottom: 118px;}\n.p-b-119[_ngcontent-%COMP%] {padding-bottom: 119px;}\n.p-b-120[_ngcontent-%COMP%] {padding-bottom: 120px;}\n.p-b-121[_ngcontent-%COMP%] {padding-bottom: 121px;}\n.p-b-122[_ngcontent-%COMP%] {padding-bottom: 122px;}\n.p-b-123[_ngcontent-%COMP%] {padding-bottom: 123px;}\n.p-b-124[_ngcontent-%COMP%] {padding-bottom: 124px;}\n.p-b-125[_ngcontent-%COMP%] {padding-bottom: 125px;}\n.p-b-126[_ngcontent-%COMP%] {padding-bottom: 126px;}\n.p-b-127[_ngcontent-%COMP%] {padding-bottom: 127px;}\n.p-b-128[_ngcontent-%COMP%] {padding-bottom: 128px;}\n.p-b-129[_ngcontent-%COMP%] {padding-bottom: 129px;}\n.p-b-130[_ngcontent-%COMP%] {padding-bottom: 130px;}\n.p-b-131[_ngcontent-%COMP%] {padding-bottom: 131px;}\n.p-b-132[_ngcontent-%COMP%] {padding-bottom: 132px;}\n.p-b-133[_ngcontent-%COMP%] {padding-bottom: 133px;}\n.p-b-134[_ngcontent-%COMP%] {padding-bottom: 134px;}\n.p-b-135[_ngcontent-%COMP%] {padding-bottom: 135px;}\n.p-b-136[_ngcontent-%COMP%] {padding-bottom: 136px;}\n.p-b-137[_ngcontent-%COMP%] {padding-bottom: 137px;}\n.p-b-138[_ngcontent-%COMP%] {padding-bottom: 138px;}\n.p-b-139[_ngcontent-%COMP%] {padding-bottom: 139px;}\n.p-b-140[_ngcontent-%COMP%] {padding-bottom: 140px;}\n.p-b-141[_ngcontent-%COMP%] {padding-bottom: 141px;}\n.p-b-142[_ngcontent-%COMP%] {padding-bottom: 142px;}\n.p-b-143[_ngcontent-%COMP%] {padding-bottom: 143px;}\n.p-b-144[_ngcontent-%COMP%] {padding-bottom: 144px;}\n.p-b-145[_ngcontent-%COMP%] {padding-bottom: 145px;}\n.p-b-146[_ngcontent-%COMP%] {padding-bottom: 146px;}\n.p-b-147[_ngcontent-%COMP%] {padding-bottom: 147px;}\n.p-b-148[_ngcontent-%COMP%] {padding-bottom: 148px;}\n.p-b-149[_ngcontent-%COMP%] {padding-bottom: 149px;}\n.p-b-150[_ngcontent-%COMP%] {padding-bottom: 150px;}\n.p-b-151[_ngcontent-%COMP%] {padding-bottom: 151px;}\n.p-b-152[_ngcontent-%COMP%] {padding-bottom: 152px;}\n.p-b-153[_ngcontent-%COMP%] {padding-bottom: 153px;}\n.p-b-154[_ngcontent-%COMP%] {padding-bottom: 154px;}\n.p-b-155[_ngcontent-%COMP%] {padding-bottom: 155px;}\n.p-b-156[_ngcontent-%COMP%] {padding-bottom: 156px;}\n.p-b-157[_ngcontent-%COMP%] {padding-bottom: 157px;}\n.p-b-158[_ngcontent-%COMP%] {padding-bottom: 158px;}\n.p-b-159[_ngcontent-%COMP%] {padding-bottom: 159px;}\n.p-b-160[_ngcontent-%COMP%] {padding-bottom: 160px;}\n.p-b-161[_ngcontent-%COMP%] {padding-bottom: 161px;}\n.p-b-162[_ngcontent-%COMP%] {padding-bottom: 162px;}\n.p-b-163[_ngcontent-%COMP%] {padding-bottom: 163px;}\n.p-b-164[_ngcontent-%COMP%] {padding-bottom: 164px;}\n.p-b-165[_ngcontent-%COMP%] {padding-bottom: 165px;}\n.p-b-166[_ngcontent-%COMP%] {padding-bottom: 166px;}\n.p-b-167[_ngcontent-%COMP%] {padding-bottom: 167px;}\n.p-b-168[_ngcontent-%COMP%] {padding-bottom: 168px;}\n.p-b-169[_ngcontent-%COMP%] {padding-bottom: 169px;}\n.p-b-170[_ngcontent-%COMP%] {padding-bottom: 170px;}\n.p-b-171[_ngcontent-%COMP%] {padding-bottom: 171px;}\n.p-b-172[_ngcontent-%COMP%] {padding-bottom: 172px;}\n.p-b-173[_ngcontent-%COMP%] {padding-bottom: 173px;}\n.p-b-174[_ngcontent-%COMP%] {padding-bottom: 174px;}\n.p-b-175[_ngcontent-%COMP%] {padding-bottom: 175px;}\n.p-b-176[_ngcontent-%COMP%] {padding-bottom: 176px;}\n.p-b-177[_ngcontent-%COMP%] {padding-bottom: 177px;}\n.p-b-178[_ngcontent-%COMP%] {padding-bottom: 178px;}\n.p-b-179[_ngcontent-%COMP%] {padding-bottom: 179px;}\n.p-b-180[_ngcontent-%COMP%] {padding-bottom: 180px;}\n.p-b-181[_ngcontent-%COMP%] {padding-bottom: 181px;}\n.p-b-182[_ngcontent-%COMP%] {padding-bottom: 182px;}\n.p-b-183[_ngcontent-%COMP%] {padding-bottom: 183px;}\n.p-b-184[_ngcontent-%COMP%] {padding-bottom: 184px;}\n.p-b-185[_ngcontent-%COMP%] {padding-bottom: 185px;}\n.p-b-186[_ngcontent-%COMP%] {padding-bottom: 186px;}\n.p-b-187[_ngcontent-%COMP%] {padding-bottom: 187px;}\n.p-b-188[_ngcontent-%COMP%] {padding-bottom: 188px;}\n.p-b-189[_ngcontent-%COMP%] {padding-bottom: 189px;}\n.p-b-190[_ngcontent-%COMP%] {padding-bottom: 190px;}\n.p-b-191[_ngcontent-%COMP%] {padding-bottom: 191px;}\n.p-b-192[_ngcontent-%COMP%] {padding-bottom: 192px;}\n.p-b-193[_ngcontent-%COMP%] {padding-bottom: 193px;}\n.p-b-194[_ngcontent-%COMP%] {padding-bottom: 194px;}\n.p-b-195[_ngcontent-%COMP%] {padding-bottom: 195px;}\n.p-b-196[_ngcontent-%COMP%] {padding-bottom: 196px;}\n.p-b-197[_ngcontent-%COMP%] {padding-bottom: 197px;}\n.p-b-198[_ngcontent-%COMP%] {padding-bottom: 198px;}\n.p-b-199[_ngcontent-%COMP%] {padding-bottom: 199px;}\n.p-b-200[_ngcontent-%COMP%] {padding-bottom: 200px;}\n.p-b-201[_ngcontent-%COMP%] {padding-bottom: 201px;}\n.p-b-202[_ngcontent-%COMP%] {padding-bottom: 202px;}\n.p-b-203[_ngcontent-%COMP%] {padding-bottom: 203px;}\n.p-b-204[_ngcontent-%COMP%] {padding-bottom: 204px;}\n.p-b-205[_ngcontent-%COMP%] {padding-bottom: 205px;}\n.p-b-206[_ngcontent-%COMP%] {padding-bottom: 206px;}\n.p-b-207[_ngcontent-%COMP%] {padding-bottom: 207px;}\n.p-b-208[_ngcontent-%COMP%] {padding-bottom: 208px;}\n.p-b-209[_ngcontent-%COMP%] {padding-bottom: 209px;}\n.p-b-210[_ngcontent-%COMP%] {padding-bottom: 210px;}\n.p-b-211[_ngcontent-%COMP%] {padding-bottom: 211px;}\n.p-b-212[_ngcontent-%COMP%] {padding-bottom: 212px;}\n.p-b-213[_ngcontent-%COMP%] {padding-bottom: 213px;}\n.p-b-214[_ngcontent-%COMP%] {padding-bottom: 214px;}\n.p-b-215[_ngcontent-%COMP%] {padding-bottom: 215px;}\n.p-b-216[_ngcontent-%COMP%] {padding-bottom: 216px;}\n.p-b-217[_ngcontent-%COMP%] {padding-bottom: 217px;}\n.p-b-218[_ngcontent-%COMP%] {padding-bottom: 218px;}\n.p-b-219[_ngcontent-%COMP%] {padding-bottom: 219px;}\n.p-b-220[_ngcontent-%COMP%] {padding-bottom: 220px;}\n.p-b-221[_ngcontent-%COMP%] {padding-bottom: 221px;}\n.p-b-222[_ngcontent-%COMP%] {padding-bottom: 222px;}\n.p-b-223[_ngcontent-%COMP%] {padding-bottom: 223px;}\n.p-b-224[_ngcontent-%COMP%] {padding-bottom: 224px;}\n.p-b-225[_ngcontent-%COMP%] {padding-bottom: 225px;}\n.p-b-226[_ngcontent-%COMP%] {padding-bottom: 226px;}\n.p-b-227[_ngcontent-%COMP%] {padding-bottom: 227px;}\n.p-b-228[_ngcontent-%COMP%] {padding-bottom: 228px;}\n.p-b-229[_ngcontent-%COMP%] {padding-bottom: 229px;}\n.p-b-230[_ngcontent-%COMP%] {padding-bottom: 230px;}\n.p-b-231[_ngcontent-%COMP%] {padding-bottom: 231px;}\n.p-b-232[_ngcontent-%COMP%] {padding-bottom: 232px;}\n.p-b-233[_ngcontent-%COMP%] {padding-bottom: 233px;}\n.p-b-234[_ngcontent-%COMP%] {padding-bottom: 234px;}\n.p-b-235[_ngcontent-%COMP%] {padding-bottom: 235px;}\n.p-b-236[_ngcontent-%COMP%] {padding-bottom: 236px;}\n.p-b-237[_ngcontent-%COMP%] {padding-bottom: 237px;}\n.p-b-238[_ngcontent-%COMP%] {padding-bottom: 238px;}\n.p-b-239[_ngcontent-%COMP%] {padding-bottom: 239px;}\n.p-b-240[_ngcontent-%COMP%] {padding-bottom: 240px;}\n.p-b-241[_ngcontent-%COMP%] {padding-bottom: 241px;}\n.p-b-242[_ngcontent-%COMP%] {padding-bottom: 242px;}\n.p-b-243[_ngcontent-%COMP%] {padding-bottom: 243px;}\n.p-b-244[_ngcontent-%COMP%] {padding-bottom: 244px;}\n.p-b-245[_ngcontent-%COMP%] {padding-bottom: 245px;}\n.p-b-246[_ngcontent-%COMP%] {padding-bottom: 246px;}\n.p-b-247[_ngcontent-%COMP%] {padding-bottom: 247px;}\n.p-b-248[_ngcontent-%COMP%] {padding-bottom: 248px;}\n.p-b-249[_ngcontent-%COMP%] {padding-bottom: 249px;}\n.p-b-250[_ngcontent-%COMP%] {padding-bottom: 250px;}\n.p-l-0[_ngcontent-%COMP%] {padding-left: 0px;}\n.p-l-1[_ngcontent-%COMP%] {padding-left: 1px;}\n.p-l-2[_ngcontent-%COMP%] {padding-left: 2px;}\n.p-l-3[_ngcontent-%COMP%] {padding-left: 3px;}\n.p-l-4[_ngcontent-%COMP%] {padding-left: 4px;}\n.p-l-5[_ngcontent-%COMP%] {padding-left: 5px;}\n.p-l-6[_ngcontent-%COMP%] {padding-left: 6px;}\n.p-l-7[_ngcontent-%COMP%] {padding-left: 7px;}\n.p-l-8[_ngcontent-%COMP%] {padding-left: 8px;}\n.p-l-9[_ngcontent-%COMP%] {padding-left: 9px;}\n.p-l-10[_ngcontent-%COMP%] {padding-left: 10px;}\n.p-l-11[_ngcontent-%COMP%] {padding-left: 11px;}\n.p-l-12[_ngcontent-%COMP%] {padding-left: 12px;}\n.p-l-13[_ngcontent-%COMP%] {padding-left: 13px;}\n.p-l-14[_ngcontent-%COMP%] {padding-left: 14px;}\n.p-l-15[_ngcontent-%COMP%] {padding-left: 15px;}\n.p-l-16[_ngcontent-%COMP%] {padding-left: 16px;}\n.p-l-17[_ngcontent-%COMP%] {padding-left: 17px;}\n.p-l-18[_ngcontent-%COMP%] {padding-left: 18px;}\n.p-l-19[_ngcontent-%COMP%] {padding-left: 19px;}\n.p-l-20[_ngcontent-%COMP%] {padding-left: 20px;}\n.p-l-21[_ngcontent-%COMP%] {padding-left: 21px;}\n.p-l-22[_ngcontent-%COMP%] {padding-left: 22px;}\n.p-l-23[_ngcontent-%COMP%] {padding-left: 23px;}\n.p-l-24[_ngcontent-%COMP%] {padding-left: 24px;}\n.p-l-25[_ngcontent-%COMP%] {padding-left: 25px;}\n.p-l-26[_ngcontent-%COMP%] {padding-left: 26px;}\n.p-l-27[_ngcontent-%COMP%] {padding-left: 27px;}\n.p-l-28[_ngcontent-%COMP%] {padding-left: 28px;}\n.p-l-29[_ngcontent-%COMP%] {padding-left: 29px;}\n.p-l-30[_ngcontent-%COMP%] {padding-left: 30px;}\n.p-l-31[_ngcontent-%COMP%] {padding-left: 31px;}\n.p-l-32[_ngcontent-%COMP%] {padding-left: 32px;}\n.p-l-33[_ngcontent-%COMP%] {padding-left: 33px;}\n.p-l-34[_ngcontent-%COMP%] {padding-left: 34px;}\n.p-l-35[_ngcontent-%COMP%] {padding-left: 35px;}\n.p-l-36[_ngcontent-%COMP%] {padding-left: 36px;}\n.p-l-37[_ngcontent-%COMP%] {padding-left: 37px;}\n.p-l-38[_ngcontent-%COMP%] {padding-left: 38px;}\n.p-l-39[_ngcontent-%COMP%] {padding-left: 39px;}\n.p-l-40[_ngcontent-%COMP%] {padding-left: 40px;}\n.p-l-41[_ngcontent-%COMP%] {padding-left: 41px;}\n.p-l-42[_ngcontent-%COMP%] {padding-left: 42px;}\n.p-l-43[_ngcontent-%COMP%] {padding-left: 43px;}\n.p-l-44[_ngcontent-%COMP%] {padding-left: 44px;}\n.p-l-45[_ngcontent-%COMP%] {padding-left: 45px;}\n.p-l-46[_ngcontent-%COMP%] {padding-left: 46px;}\n.p-l-47[_ngcontent-%COMP%] {padding-left: 47px;}\n.p-l-48[_ngcontent-%COMP%] {padding-left: 48px;}\n.p-l-49[_ngcontent-%COMP%] {padding-left: 49px;}\n.p-l-50[_ngcontent-%COMP%] {padding-left: 50px;}\n.p-l-51[_ngcontent-%COMP%] {padding-left: 51px;}\n.p-l-52[_ngcontent-%COMP%] {padding-left: 52px;}\n.p-l-53[_ngcontent-%COMP%] {padding-left: 53px;}\n.p-l-54[_ngcontent-%COMP%] {padding-left: 54px;}\n.p-l-55[_ngcontent-%COMP%] {padding-left: 55px;}\n.p-l-56[_ngcontent-%COMP%] {padding-left: 56px;}\n.p-l-57[_ngcontent-%COMP%] {padding-left: 57px;}\n.p-l-58[_ngcontent-%COMP%] {padding-left: 58px;}\n.p-l-59[_ngcontent-%COMP%] {padding-left: 59px;}\n.p-l-60[_ngcontent-%COMP%] {padding-left: 60px;}\n.p-l-61[_ngcontent-%COMP%] {padding-left: 61px;}\n.p-l-62[_ngcontent-%COMP%] {padding-left: 62px;}\n.p-l-63[_ngcontent-%COMP%] {padding-left: 63px;}\n.p-l-64[_ngcontent-%COMP%] {padding-left: 64px;}\n.p-l-65[_ngcontent-%COMP%] {padding-left: 65px;}\n.p-l-66[_ngcontent-%COMP%] {padding-left: 66px;}\n.p-l-67[_ngcontent-%COMP%] {padding-left: 67px;}\n.p-l-68[_ngcontent-%COMP%] {padding-left: 68px;}\n.p-l-69[_ngcontent-%COMP%] {padding-left: 69px;}\n.p-l-70[_ngcontent-%COMP%] {padding-left: 70px;}\n.p-l-71[_ngcontent-%COMP%] {padding-left: 71px;}\n.p-l-72[_ngcontent-%COMP%] {padding-left: 72px;}\n.p-l-73[_ngcontent-%COMP%] {padding-left: 73px;}\n.p-l-74[_ngcontent-%COMP%] {padding-left: 74px;}\n.p-l-75[_ngcontent-%COMP%] {padding-left: 75px;}\n.p-l-76[_ngcontent-%COMP%] {padding-left: 76px;}\n.p-l-77[_ngcontent-%COMP%] {padding-left: 77px;}\n.p-l-78[_ngcontent-%COMP%] {padding-left: 78px;}\n.p-l-79[_ngcontent-%COMP%] {padding-left: 79px;}\n.p-l-80[_ngcontent-%COMP%] {padding-left: 80px;}\n.p-l-81[_ngcontent-%COMP%] {padding-left: 81px;}\n.p-l-82[_ngcontent-%COMP%] {padding-left: 82px;}\n.p-l-83[_ngcontent-%COMP%] {padding-left: 83px;}\n.p-l-84[_ngcontent-%COMP%] {padding-left: 84px;}\n.p-l-85[_ngcontent-%COMP%] {padding-left: 85px;}\n.p-l-86[_ngcontent-%COMP%] {padding-left: 86px;}\n.p-l-87[_ngcontent-%COMP%] {padding-left: 87px;}\n.p-l-88[_ngcontent-%COMP%] {padding-left: 88px;}\n.p-l-89[_ngcontent-%COMP%] {padding-left: 89px;}\n.p-l-90[_ngcontent-%COMP%] {padding-left: 90px;}\n.p-l-91[_ngcontent-%COMP%] {padding-left: 91px;}\n.p-l-92[_ngcontent-%COMP%] {padding-left: 92px;}\n.p-l-93[_ngcontent-%COMP%] {padding-left: 93px;}\n.p-l-94[_ngcontent-%COMP%] {padding-left: 94px;}\n.p-l-95[_ngcontent-%COMP%] {padding-left: 95px;}\n.p-l-96[_ngcontent-%COMP%] {padding-left: 96px;}\n.p-l-97[_ngcontent-%COMP%] {padding-left: 97px;}\n.p-l-98[_ngcontent-%COMP%] {padding-left: 98px;}\n.p-l-99[_ngcontent-%COMP%] {padding-left: 99px;}\n.p-l-100[_ngcontent-%COMP%] {padding-left: 100px;}\n.p-l-101[_ngcontent-%COMP%] {padding-left: 101px;}\n.p-l-102[_ngcontent-%COMP%] {padding-left: 102px;}\n.p-l-103[_ngcontent-%COMP%] {padding-left: 103px;}\n.p-l-104[_ngcontent-%COMP%] {padding-left: 104px;}\n.p-l-105[_ngcontent-%COMP%] {padding-left: 105px;}\n.p-l-106[_ngcontent-%COMP%] {padding-left: 106px;}\n.p-l-107[_ngcontent-%COMP%] {padding-left: 107px;}\n.p-l-108[_ngcontent-%COMP%] {padding-left: 108px;}\n.p-l-109[_ngcontent-%COMP%] {padding-left: 109px;}\n.p-l-110[_ngcontent-%COMP%] {padding-left: 110px;}\n.p-l-111[_ngcontent-%COMP%] {padding-left: 111px;}\n.p-l-112[_ngcontent-%COMP%] {padding-left: 112px;}\n.p-l-113[_ngcontent-%COMP%] {padding-left: 113px;}\n.p-l-114[_ngcontent-%COMP%] {padding-left: 114px;}\n.p-l-115[_ngcontent-%COMP%] {padding-left: 115px;}\n.p-l-116[_ngcontent-%COMP%] {padding-left: 116px;}\n.p-l-117[_ngcontent-%COMP%] {padding-left: 117px;}\n.p-l-118[_ngcontent-%COMP%] {padding-left: 118px;}\n.p-l-119[_ngcontent-%COMP%] {padding-left: 119px;}\n.p-l-120[_ngcontent-%COMP%] {padding-left: 120px;}\n.p-l-121[_ngcontent-%COMP%] {padding-left: 121px;}\n.p-l-122[_ngcontent-%COMP%] {padding-left: 122px;}\n.p-l-123[_ngcontent-%COMP%] {padding-left: 123px;}\n.p-l-124[_ngcontent-%COMP%] {padding-left: 124px;}\n.p-l-125[_ngcontent-%COMP%] {padding-left: 125px;}\n.p-l-126[_ngcontent-%COMP%] {padding-left: 126px;}\n.p-l-127[_ngcontent-%COMP%] {padding-left: 127px;}\n.p-l-128[_ngcontent-%COMP%] {padding-left: 128px;}\n.p-l-129[_ngcontent-%COMP%] {padding-left: 129px;}\n.p-l-130[_ngcontent-%COMP%] {padding-left: 130px;}\n.p-l-131[_ngcontent-%COMP%] {padding-left: 131px;}\n.p-l-132[_ngcontent-%COMP%] {padding-left: 132px;}\n.p-l-133[_ngcontent-%COMP%] {padding-left: 133px;}\n.p-l-134[_ngcontent-%COMP%] {padding-left: 134px;}\n.p-l-135[_ngcontent-%COMP%] {padding-left: 135px;}\n.p-l-136[_ngcontent-%COMP%] {padding-left: 136px;}\n.p-l-137[_ngcontent-%COMP%] {padding-left: 137px;}\n.p-l-138[_ngcontent-%COMP%] {padding-left: 138px;}\n.p-l-139[_ngcontent-%COMP%] {padding-left: 139px;}\n.p-l-140[_ngcontent-%COMP%] {padding-left: 140px;}\n.p-l-141[_ngcontent-%COMP%] {padding-left: 141px;}\n.p-l-142[_ngcontent-%COMP%] {padding-left: 142px;}\n.p-l-143[_ngcontent-%COMP%] {padding-left: 143px;}\n.p-l-144[_ngcontent-%COMP%] {padding-left: 144px;}\n.p-l-145[_ngcontent-%COMP%] {padding-left: 145px;}\n.p-l-146[_ngcontent-%COMP%] {padding-left: 146px;}\n.p-l-147[_ngcontent-%COMP%] {padding-left: 147px;}\n.p-l-148[_ngcontent-%COMP%] {padding-left: 148px;}\n.p-l-149[_ngcontent-%COMP%] {padding-left: 149px;}\n.p-l-150[_ngcontent-%COMP%] {padding-left: 150px;}\n.p-l-151[_ngcontent-%COMP%] {padding-left: 151px;}\n.p-l-152[_ngcontent-%COMP%] {padding-left: 152px;}\n.p-l-153[_ngcontent-%COMP%] {padding-left: 153px;}\n.p-l-154[_ngcontent-%COMP%] {padding-left: 154px;}\n.p-l-155[_ngcontent-%COMP%] {padding-left: 155px;}\n.p-l-156[_ngcontent-%COMP%] {padding-left: 156px;}\n.p-l-157[_ngcontent-%COMP%] {padding-left: 157px;}\n.p-l-158[_ngcontent-%COMP%] {padding-left: 158px;}\n.p-l-159[_ngcontent-%COMP%] {padding-left: 159px;}\n.p-l-160[_ngcontent-%COMP%] {padding-left: 160px;}\n.p-l-161[_ngcontent-%COMP%] {padding-left: 161px;}\n.p-l-162[_ngcontent-%COMP%] {padding-left: 162px;}\n.p-l-163[_ngcontent-%COMP%] {padding-left: 163px;}\n.p-l-164[_ngcontent-%COMP%] {padding-left: 164px;}\n.p-l-165[_ngcontent-%COMP%] {padding-left: 165px;}\n.p-l-166[_ngcontent-%COMP%] {padding-left: 166px;}\n.p-l-167[_ngcontent-%COMP%] {padding-left: 167px;}\n.p-l-168[_ngcontent-%COMP%] {padding-left: 168px;}\n.p-l-169[_ngcontent-%COMP%] {padding-left: 169px;}\n.p-l-170[_ngcontent-%COMP%] {padding-left: 170px;}\n.p-l-171[_ngcontent-%COMP%] {padding-left: 171px;}\n.p-l-172[_ngcontent-%COMP%] {padding-left: 172px;}\n.p-l-173[_ngcontent-%COMP%] {padding-left: 173px;}\n.p-l-174[_ngcontent-%COMP%] {padding-left: 174px;}\n.p-l-175[_ngcontent-%COMP%] {padding-left: 175px;}\n.p-l-176[_ngcontent-%COMP%] {padding-left: 176px;}\n.p-l-177[_ngcontent-%COMP%] {padding-left: 177px;}\n.p-l-178[_ngcontent-%COMP%] {padding-left: 178px;}\n.p-l-179[_ngcontent-%COMP%] {padding-left: 179px;}\n.p-l-180[_ngcontent-%COMP%] {padding-left: 180px;}\n.p-l-181[_ngcontent-%COMP%] {padding-left: 181px;}\n.p-l-182[_ngcontent-%COMP%] {padding-left: 182px;}\n.p-l-183[_ngcontent-%COMP%] {padding-left: 183px;}\n.p-l-184[_ngcontent-%COMP%] {padding-left: 184px;}\n.p-l-185[_ngcontent-%COMP%] {padding-left: 185px;}\n.p-l-186[_ngcontent-%COMP%] {padding-left: 186px;}\n.p-l-187[_ngcontent-%COMP%] {padding-left: 187px;}\n.p-l-188[_ngcontent-%COMP%] {padding-left: 188px;}\n.p-l-189[_ngcontent-%COMP%] {padding-left: 189px;}\n.p-l-190[_ngcontent-%COMP%] {padding-left: 190px;}\n.p-l-191[_ngcontent-%COMP%] {padding-left: 191px;}\n.p-l-192[_ngcontent-%COMP%] {padding-left: 192px;}\n.p-l-193[_ngcontent-%COMP%] {padding-left: 193px;}\n.p-l-194[_ngcontent-%COMP%] {padding-left: 194px;}\n.p-l-195[_ngcontent-%COMP%] {padding-left: 195px;}\n.p-l-196[_ngcontent-%COMP%] {padding-left: 196px;}\n.p-l-197[_ngcontent-%COMP%] {padding-left: 197px;}\n.p-l-198[_ngcontent-%COMP%] {padding-left: 198px;}\n.p-l-199[_ngcontent-%COMP%] {padding-left: 199px;}\n.p-l-200[_ngcontent-%COMP%] {padding-left: 200px;}\n.p-l-201[_ngcontent-%COMP%] {padding-left: 201px;}\n.p-l-202[_ngcontent-%COMP%] {padding-left: 202px;}\n.p-l-203[_ngcontent-%COMP%] {padding-left: 203px;}\n.p-l-204[_ngcontent-%COMP%] {padding-left: 204px;}\n.p-l-205[_ngcontent-%COMP%] {padding-left: 205px;}\n.p-l-206[_ngcontent-%COMP%] {padding-left: 206px;}\n.p-l-207[_ngcontent-%COMP%] {padding-left: 207px;}\n.p-l-208[_ngcontent-%COMP%] {padding-left: 208px;}\n.p-l-209[_ngcontent-%COMP%] {padding-left: 209px;}\n.p-l-210[_ngcontent-%COMP%] {padding-left: 210px;}\n.p-l-211[_ngcontent-%COMP%] {padding-left: 211px;}\n.p-l-212[_ngcontent-%COMP%] {padding-left: 212px;}\n.p-l-213[_ngcontent-%COMP%] {padding-left: 213px;}\n.p-l-214[_ngcontent-%COMP%] {padding-left: 214px;}\n.p-l-215[_ngcontent-%COMP%] {padding-left: 215px;}\n.p-l-216[_ngcontent-%COMP%] {padding-left: 216px;}\n.p-l-217[_ngcontent-%COMP%] {padding-left: 217px;}\n.p-l-218[_ngcontent-%COMP%] {padding-left: 218px;}\n.p-l-219[_ngcontent-%COMP%] {padding-left: 219px;}\n.p-l-220[_ngcontent-%COMP%] {padding-left: 220px;}\n.p-l-221[_ngcontent-%COMP%] {padding-left: 221px;}\n.p-l-222[_ngcontent-%COMP%] {padding-left: 222px;}\n.p-l-223[_ngcontent-%COMP%] {padding-left: 223px;}\n.p-l-224[_ngcontent-%COMP%] {padding-left: 224px;}\n.p-l-225[_ngcontent-%COMP%] {padding-left: 225px;}\n.p-l-226[_ngcontent-%COMP%] {padding-left: 226px;}\n.p-l-227[_ngcontent-%COMP%] {padding-left: 227px;}\n.p-l-228[_ngcontent-%COMP%] {padding-left: 228px;}\n.p-l-229[_ngcontent-%COMP%] {padding-left: 229px;}\n.p-l-230[_ngcontent-%COMP%] {padding-left: 230px;}\n.p-l-231[_ngcontent-%COMP%] {padding-left: 231px;}\n.p-l-232[_ngcontent-%COMP%] {padding-left: 232px;}\n.p-l-233[_ngcontent-%COMP%] {padding-left: 233px;}\n.p-l-234[_ngcontent-%COMP%] {padding-left: 234px;}\n.p-l-235[_ngcontent-%COMP%] {padding-left: 235px;}\n.p-l-236[_ngcontent-%COMP%] {padding-left: 236px;}\n.p-l-237[_ngcontent-%COMP%] {padding-left: 237px;}\n.p-l-238[_ngcontent-%COMP%] {padding-left: 238px;}\n.p-l-239[_ngcontent-%COMP%] {padding-left: 239px;}\n.p-l-240[_ngcontent-%COMP%] {padding-left: 240px;}\n.p-l-241[_ngcontent-%COMP%] {padding-left: 241px;}\n.p-l-242[_ngcontent-%COMP%] {padding-left: 242px;}\n.p-l-243[_ngcontent-%COMP%] {padding-left: 243px;}\n.p-l-244[_ngcontent-%COMP%] {padding-left: 244px;}\n.p-l-245[_ngcontent-%COMP%] {padding-left: 245px;}\n.p-l-246[_ngcontent-%COMP%] {padding-left: 246px;}\n.p-l-247[_ngcontent-%COMP%] {padding-left: 247px;}\n.p-l-248[_ngcontent-%COMP%] {padding-left: 248px;}\n.p-l-249[_ngcontent-%COMP%] {padding-left: 249px;}\n.p-l-250[_ngcontent-%COMP%] {padding-left: 250px;}\n.p-r-0[_ngcontent-%COMP%] {padding-right: 0px;}\n.p-r-1[_ngcontent-%COMP%] {padding-right: 1px;}\n.p-r-2[_ngcontent-%COMP%] {padding-right: 2px;}\n.p-r-3[_ngcontent-%COMP%] {padding-right: 3px;}\n.p-r-4[_ngcontent-%COMP%] {padding-right: 4px;}\n.p-r-5[_ngcontent-%COMP%] {padding-right: 5px;}\n.p-r-6[_ngcontent-%COMP%] {padding-right: 6px;}\n.p-r-7[_ngcontent-%COMP%] {padding-right: 7px;}\n.p-r-8[_ngcontent-%COMP%] {padding-right: 8px;}\n.p-r-9[_ngcontent-%COMP%] {padding-right: 9px;}\n.p-r-10[_ngcontent-%COMP%] {padding-right: 10px;}\n.p-r-11[_ngcontent-%COMP%] {padding-right: 11px;}\n.p-r-12[_ngcontent-%COMP%] {padding-right: 12px;}\n.p-r-13[_ngcontent-%COMP%] {padding-right: 13px;}\n.p-r-14[_ngcontent-%COMP%] {padding-right: 14px;}\n.p-r-15[_ngcontent-%COMP%] {padding-right: 15px;}\n.p-r-16[_ngcontent-%COMP%] {padding-right: 16px;}\n.p-r-17[_ngcontent-%COMP%] {padding-right: 17px;}\n.p-r-18[_ngcontent-%COMP%] {padding-right: 18px;}\n.p-r-19[_ngcontent-%COMP%] {padding-right: 19px;}\n.p-r-20[_ngcontent-%COMP%] {padding-right: 20px;}\n.p-r-21[_ngcontent-%COMP%] {padding-right: 21px;}\n.p-r-22[_ngcontent-%COMP%] {padding-right: 22px;}\n.p-r-23[_ngcontent-%COMP%] {padding-right: 23px;}\n.p-r-24[_ngcontent-%COMP%] {padding-right: 24px;}\n.p-r-25[_ngcontent-%COMP%] {padding-right: 25px;}\n.p-r-26[_ngcontent-%COMP%] {padding-right: 26px;}\n.p-r-27[_ngcontent-%COMP%] {padding-right: 27px;}\n.p-r-28[_ngcontent-%COMP%] {padding-right: 28px;}\n.p-r-29[_ngcontent-%COMP%] {padding-right: 29px;}\n.p-r-30[_ngcontent-%COMP%] {padding-right: 30px;}\n.p-r-31[_ngcontent-%COMP%] {padding-right: 31px;}\n.p-r-32[_ngcontent-%COMP%] {padding-right: 32px;}\n.p-r-33[_ngcontent-%COMP%] {padding-right: 33px;}\n.p-r-34[_ngcontent-%COMP%] {padding-right: 34px;}\n.p-r-35[_ngcontent-%COMP%] {padding-right: 35px;}\n.p-r-36[_ngcontent-%COMP%] {padding-right: 36px;}\n.p-r-37[_ngcontent-%COMP%] {padding-right: 37px;}\n.p-r-38[_ngcontent-%COMP%] {padding-right: 38px;}\n.p-r-39[_ngcontent-%COMP%] {padding-right: 39px;}\n.p-r-40[_ngcontent-%COMP%] {padding-right: 40px;}\n.p-r-41[_ngcontent-%COMP%] {padding-right: 41px;}\n.p-r-42[_ngcontent-%COMP%] {padding-right: 42px;}\n.p-r-43[_ngcontent-%COMP%] {padding-right: 43px;}\n.p-r-44[_ngcontent-%COMP%] {padding-right: 44px;}\n.p-r-45[_ngcontent-%COMP%] {padding-right: 45px;}\n.p-r-46[_ngcontent-%COMP%] {padding-right: 46px;}\n.p-r-47[_ngcontent-%COMP%] {padding-right: 47px;}\n.p-r-48[_ngcontent-%COMP%] {padding-right: 48px;}\n.p-r-49[_ngcontent-%COMP%] {padding-right: 49px;}\n.p-r-50[_ngcontent-%COMP%] {padding-right: 50px;}\n.p-r-51[_ngcontent-%COMP%] {padding-right: 51px;}\n.p-r-52[_ngcontent-%COMP%] {padding-right: 52px;}\n.p-r-53[_ngcontent-%COMP%] {padding-right: 53px;}\n.p-r-54[_ngcontent-%COMP%] {padding-right: 54px;}\n.p-r-55[_ngcontent-%COMP%] {padding-right: 55px;}\n.p-r-56[_ngcontent-%COMP%] {padding-right: 56px;}\n.p-r-57[_ngcontent-%COMP%] {padding-right: 57px;}\n.p-r-58[_ngcontent-%COMP%] {padding-right: 58px;}\n.p-r-59[_ngcontent-%COMP%] {padding-right: 59px;}\n.p-r-60[_ngcontent-%COMP%] {padding-right: 60px;}\n.p-r-61[_ngcontent-%COMP%] {padding-right: 61px;}\n.p-r-62[_ngcontent-%COMP%] {padding-right: 62px;}\n.p-r-63[_ngcontent-%COMP%] {padding-right: 63px;}\n.p-r-64[_ngcontent-%COMP%] {padding-right: 64px;}\n.p-r-65[_ngcontent-%COMP%] {padding-right: 65px;}\n.p-r-66[_ngcontent-%COMP%] {padding-right: 66px;}\n.p-r-67[_ngcontent-%COMP%] {padding-right: 67px;}\n.p-r-68[_ngcontent-%COMP%] {padding-right: 68px;}\n.p-r-69[_ngcontent-%COMP%] {padding-right: 69px;}\n.p-r-70[_ngcontent-%COMP%] {padding-right: 70px;}\n.p-r-71[_ngcontent-%COMP%] {padding-right: 71px;}\n.p-r-72[_ngcontent-%COMP%] {padding-right: 72px;}\n.p-r-73[_ngcontent-%COMP%] {padding-right: 73px;}\n.p-r-74[_ngcontent-%COMP%] {padding-right: 74px;}\n.p-r-75[_ngcontent-%COMP%] {padding-right: 75px;}\n.p-r-76[_ngcontent-%COMP%] {padding-right: 76px;}\n.p-r-77[_ngcontent-%COMP%] {padding-right: 77px;}\n.p-r-78[_ngcontent-%COMP%] {padding-right: 78px;}\n.p-r-79[_ngcontent-%COMP%] {padding-right: 79px;}\n.p-r-80[_ngcontent-%COMP%] {padding-right: 80px;}\n.p-r-81[_ngcontent-%COMP%] {padding-right: 81px;}\n.p-r-82[_ngcontent-%COMP%] {padding-right: 82px;}\n.p-r-83[_ngcontent-%COMP%] {padding-right: 83px;}\n.p-r-84[_ngcontent-%COMP%] {padding-right: 84px;}\n.p-r-85[_ngcontent-%COMP%] {padding-right: 85px;}\n.p-r-86[_ngcontent-%COMP%] {padding-right: 86px;}\n.p-r-87[_ngcontent-%COMP%] {padding-right: 87px;}\n.p-r-88[_ngcontent-%COMP%] {padding-right: 88px;}\n.p-r-89[_ngcontent-%COMP%] {padding-right: 89px;}\n.p-r-90[_ngcontent-%COMP%] {padding-right: 90px;}\n.p-r-91[_ngcontent-%COMP%] {padding-right: 91px;}\n.p-r-92[_ngcontent-%COMP%] {padding-right: 92px;}\n.p-r-93[_ngcontent-%COMP%] {padding-right: 93px;}\n.p-r-94[_ngcontent-%COMP%] {padding-right: 94px;}\n.p-r-95[_ngcontent-%COMP%] {padding-right: 95px;}\n.p-r-96[_ngcontent-%COMP%] {padding-right: 96px;}\n.p-r-97[_ngcontent-%COMP%] {padding-right: 97px;}\n.p-r-98[_ngcontent-%COMP%] {padding-right: 98px;}\n.p-r-99[_ngcontent-%COMP%] {padding-right: 99px;}\n.p-r-100[_ngcontent-%COMP%] {padding-right: 100px;}\n.p-r-101[_ngcontent-%COMP%] {padding-right: 101px;}\n.p-r-102[_ngcontent-%COMP%] {padding-right: 102px;}\n.p-r-103[_ngcontent-%COMP%] {padding-right: 103px;}\n.p-r-104[_ngcontent-%COMP%] {padding-right: 104px;}\n.p-r-105[_ngcontent-%COMP%] {padding-right: 105px;}\n.p-r-106[_ngcontent-%COMP%] {padding-right: 106px;}\n.p-r-107[_ngcontent-%COMP%] {padding-right: 107px;}\n.p-r-108[_ngcontent-%COMP%] {padding-right: 108px;}\n.p-r-109[_ngcontent-%COMP%] {padding-right: 109px;}\n.p-r-110[_ngcontent-%COMP%] {padding-right: 110px;}\n.p-r-111[_ngcontent-%COMP%] {padding-right: 111px;}\n.p-r-112[_ngcontent-%COMP%] {padding-right: 112px;}\n.p-r-113[_ngcontent-%COMP%] {padding-right: 113px;}\n.p-r-114[_ngcontent-%COMP%] {padding-right: 114px;}\n.p-r-115[_ngcontent-%COMP%] {padding-right: 115px;}\n.p-r-116[_ngcontent-%COMP%] {padding-right: 116px;}\n.p-r-117[_ngcontent-%COMP%] {padding-right: 117px;}\n.p-r-118[_ngcontent-%COMP%] {padding-right: 118px;}\n.p-r-119[_ngcontent-%COMP%] {padding-right: 119px;}\n.p-r-120[_ngcontent-%COMP%] {padding-right: 120px;}\n.p-r-121[_ngcontent-%COMP%] {padding-right: 121px;}\n.p-r-122[_ngcontent-%COMP%] {padding-right: 122px;}\n.p-r-123[_ngcontent-%COMP%] {padding-right: 123px;}\n.p-r-124[_ngcontent-%COMP%] {padding-right: 124px;}\n.p-r-125[_ngcontent-%COMP%] {padding-right: 125px;}\n.p-r-126[_ngcontent-%COMP%] {padding-right: 126px;}\n.p-r-127[_ngcontent-%COMP%] {padding-right: 127px;}\n.p-r-128[_ngcontent-%COMP%] {padding-right: 128px;}\n.p-r-129[_ngcontent-%COMP%] {padding-right: 129px;}\n.p-r-130[_ngcontent-%COMP%] {padding-right: 130px;}\n.p-r-131[_ngcontent-%COMP%] {padding-right: 131px;}\n.p-r-132[_ngcontent-%COMP%] {padding-right: 132px;}\n.p-r-133[_ngcontent-%COMP%] {padding-right: 133px;}\n.p-r-134[_ngcontent-%COMP%] {padding-right: 134px;}\n.p-r-135[_ngcontent-%COMP%] {padding-right: 135px;}\n.p-r-136[_ngcontent-%COMP%] {padding-right: 136px;}\n.p-r-137[_ngcontent-%COMP%] {padding-right: 137px;}\n.p-r-138[_ngcontent-%COMP%] {padding-right: 138px;}\n.p-r-139[_ngcontent-%COMP%] {padding-right: 139px;}\n.p-r-140[_ngcontent-%COMP%] {padding-right: 140px;}\n.p-r-141[_ngcontent-%COMP%] {padding-right: 141px;}\n.p-r-142[_ngcontent-%COMP%] {padding-right: 142px;}\n.p-r-143[_ngcontent-%COMP%] {padding-right: 143px;}\n.p-r-144[_ngcontent-%COMP%] {padding-right: 144px;}\n.p-r-145[_ngcontent-%COMP%] {padding-right: 145px;}\n.p-r-146[_ngcontent-%COMP%] {padding-right: 146px;}\n.p-r-147[_ngcontent-%COMP%] {padding-right: 147px;}\n.p-r-148[_ngcontent-%COMP%] {padding-right: 148px;}\n.p-r-149[_ngcontent-%COMP%] {padding-right: 149px;}\n.p-r-150[_ngcontent-%COMP%] {padding-right: 150px;}\n.p-r-151[_ngcontent-%COMP%] {padding-right: 151px;}\n.p-r-152[_ngcontent-%COMP%] {padding-right: 152px;}\n.p-r-153[_ngcontent-%COMP%] {padding-right: 153px;}\n.p-r-154[_ngcontent-%COMP%] {padding-right: 154px;}\n.p-r-155[_ngcontent-%COMP%] {padding-right: 155px;}\n.p-r-156[_ngcontent-%COMP%] {padding-right: 156px;}\n.p-r-157[_ngcontent-%COMP%] {padding-right: 157px;}\n.p-r-158[_ngcontent-%COMP%] {padding-right: 158px;}\n.p-r-159[_ngcontent-%COMP%] {padding-right: 159px;}\n.p-r-160[_ngcontent-%COMP%] {padding-right: 160px;}\n.p-r-161[_ngcontent-%COMP%] {padding-right: 161px;}\n.p-r-162[_ngcontent-%COMP%] {padding-right: 162px;}\n.p-r-163[_ngcontent-%COMP%] {padding-right: 163px;}\n.p-r-164[_ngcontent-%COMP%] {padding-right: 164px;}\n.p-r-165[_ngcontent-%COMP%] {padding-right: 165px;}\n.p-r-166[_ngcontent-%COMP%] {padding-right: 166px;}\n.p-r-167[_ngcontent-%COMP%] {padding-right: 167px;}\n.p-r-168[_ngcontent-%COMP%] {padding-right: 168px;}\n.p-r-169[_ngcontent-%COMP%] {padding-right: 169px;}\n.p-r-170[_ngcontent-%COMP%] {padding-right: 170px;}\n.p-r-171[_ngcontent-%COMP%] {padding-right: 171px;}\n.p-r-172[_ngcontent-%COMP%] {padding-right: 172px;}\n.p-r-173[_ngcontent-%COMP%] {padding-right: 173px;}\n.p-r-174[_ngcontent-%COMP%] {padding-right: 174px;}\n.p-r-175[_ngcontent-%COMP%] {padding-right: 175px;}\n.p-r-176[_ngcontent-%COMP%] {padding-right: 176px;}\n.p-r-177[_ngcontent-%COMP%] {padding-right: 177px;}\n.p-r-178[_ngcontent-%COMP%] {padding-right: 178px;}\n.p-r-179[_ngcontent-%COMP%] {padding-right: 179px;}\n.p-r-180[_ngcontent-%COMP%] {padding-right: 180px;}\n.p-r-181[_ngcontent-%COMP%] {padding-right: 181px;}\n.p-r-182[_ngcontent-%COMP%] {padding-right: 182px;}\n.p-r-183[_ngcontent-%COMP%] {padding-right: 183px;}\n.p-r-184[_ngcontent-%COMP%] {padding-right: 184px;}\n.p-r-185[_ngcontent-%COMP%] {padding-right: 185px;}\n.p-r-186[_ngcontent-%COMP%] {padding-right: 186px;}\n.p-r-187[_ngcontent-%COMP%] {padding-right: 187px;}\n.p-r-188[_ngcontent-%COMP%] {padding-right: 188px;}\n.p-r-189[_ngcontent-%COMP%] {padding-right: 189px;}\n.p-r-190[_ngcontent-%COMP%] {padding-right: 190px;}\n.p-r-191[_ngcontent-%COMP%] {padding-right: 191px;}\n.p-r-192[_ngcontent-%COMP%] {padding-right: 192px;}\n.p-r-193[_ngcontent-%COMP%] {padding-right: 193px;}\n.p-r-194[_ngcontent-%COMP%] {padding-right: 194px;}\n.p-r-195[_ngcontent-%COMP%] {padding-right: 195px;}\n.p-r-196[_ngcontent-%COMP%] {padding-right: 196px;}\n.p-r-197[_ngcontent-%COMP%] {padding-right: 197px;}\n.p-r-198[_ngcontent-%COMP%] {padding-right: 198px;}\n.p-r-199[_ngcontent-%COMP%] {padding-right: 199px;}\n.p-r-200[_ngcontent-%COMP%] {padding-right: 200px;}\n.p-r-201[_ngcontent-%COMP%] {padding-right: 201px;}\n.p-r-202[_ngcontent-%COMP%] {padding-right: 202px;}\n.p-r-203[_ngcontent-%COMP%] {padding-right: 203px;}\n.p-r-204[_ngcontent-%COMP%] {padding-right: 204px;}\n.p-r-205[_ngcontent-%COMP%] {padding-right: 205px;}\n.p-r-206[_ngcontent-%COMP%] {padding-right: 206px;}\n.p-r-207[_ngcontent-%COMP%] {padding-right: 207px;}\n.p-r-208[_ngcontent-%COMP%] {padding-right: 208px;}\n.p-r-209[_ngcontent-%COMP%] {padding-right: 209px;}\n.p-r-210[_ngcontent-%COMP%] {padding-right: 210px;}\n.p-r-211[_ngcontent-%COMP%] {padding-right: 211px;}\n.p-r-212[_ngcontent-%COMP%] {padding-right: 212px;}\n.p-r-213[_ngcontent-%COMP%] {padding-right: 213px;}\n.p-r-214[_ngcontent-%COMP%] {padding-right: 214px;}\n.p-r-215[_ngcontent-%COMP%] {padding-right: 215px;}\n.p-r-216[_ngcontent-%COMP%] {padding-right: 216px;}\n.p-r-217[_ngcontent-%COMP%] {padding-right: 217px;}\n.p-r-218[_ngcontent-%COMP%] {padding-right: 218px;}\n.p-r-219[_ngcontent-%COMP%] {padding-right: 219px;}\n.p-r-220[_ngcontent-%COMP%] {padding-right: 220px;}\n.p-r-221[_ngcontent-%COMP%] {padding-right: 221px;}\n.p-r-222[_ngcontent-%COMP%] {padding-right: 222px;}\n.p-r-223[_ngcontent-%COMP%] {padding-right: 223px;}\n.p-r-224[_ngcontent-%COMP%] {padding-right: 224px;}\n.p-r-225[_ngcontent-%COMP%] {padding-right: 225px;}\n.p-r-226[_ngcontent-%COMP%] {padding-right: 226px;}\n.p-r-227[_ngcontent-%COMP%] {padding-right: 227px;}\n.p-r-228[_ngcontent-%COMP%] {padding-right: 228px;}\n.p-r-229[_ngcontent-%COMP%] {padding-right: 229px;}\n.p-r-230[_ngcontent-%COMP%] {padding-right: 230px;}\n.p-r-231[_ngcontent-%COMP%] {padding-right: 231px;}\n.p-r-232[_ngcontent-%COMP%] {padding-right: 232px;}\n.p-r-233[_ngcontent-%COMP%] {padding-right: 233px;}\n.p-r-234[_ngcontent-%COMP%] {padding-right: 234px;}\n.p-r-235[_ngcontent-%COMP%] {padding-right: 235px;}\n.p-r-236[_ngcontent-%COMP%] {padding-right: 236px;}\n.p-r-237[_ngcontent-%COMP%] {padding-right: 237px;}\n.p-r-238[_ngcontent-%COMP%] {padding-right: 238px;}\n.p-r-239[_ngcontent-%COMP%] {padding-right: 239px;}\n.p-r-240[_ngcontent-%COMP%] {padding-right: 240px;}\n.p-r-241[_ngcontent-%COMP%] {padding-right: 241px;}\n.p-r-242[_ngcontent-%COMP%] {padding-right: 242px;}\n.p-r-243[_ngcontent-%COMP%] {padding-right: 243px;}\n.p-r-244[_ngcontent-%COMP%] {padding-right: 244px;}\n.p-r-245[_ngcontent-%COMP%] {padding-right: 245px;}\n.p-r-246[_ngcontent-%COMP%] {padding-right: 246px;}\n.p-r-247[_ngcontent-%COMP%] {padding-right: 247px;}\n.p-r-248[_ngcontent-%COMP%] {padding-right: 248px;}\n.p-r-249[_ngcontent-%COMP%] {padding-right: 249px;}\n.p-r-250[_ngcontent-%COMP%] {padding-right: 250px;}\n\n.m-t-0[_ngcontent-%COMP%] {margin-top: 0px;}\n.m-t-1[_ngcontent-%COMP%] {margin-top: 1px;}\n.m-t-2[_ngcontent-%COMP%] {margin-top: 2px;}\n.m-t-3[_ngcontent-%COMP%] {margin-top: 3px;}\n.m-t-4[_ngcontent-%COMP%] {margin-top: 4px;}\n.m-t-5[_ngcontent-%COMP%] {margin-top: 5px;}\n.m-t-6[_ngcontent-%COMP%] {margin-top: 6px;}\n.m-t-7[_ngcontent-%COMP%] {margin-top: 7px;}\n.m-t-8[_ngcontent-%COMP%] {margin-top: 8px;}\n.m-t-9[_ngcontent-%COMP%] {margin-top: 9px;}\n.m-t-10[_ngcontent-%COMP%] {margin-top: 10px;}\n.m-t-11[_ngcontent-%COMP%] {margin-top: 11px;}\n.m-t-12[_ngcontent-%COMP%] {margin-top: 12px;}\n.m-t-13[_ngcontent-%COMP%] {margin-top: 13px;}\n.m-t-14[_ngcontent-%COMP%] {margin-top: 14px;}\n.m-t-15[_ngcontent-%COMP%] {margin-top: 15px;}\n.m-t-16[_ngcontent-%COMP%] {margin-top: 16px;}\n.m-t-17[_ngcontent-%COMP%] {margin-top: 17px;}\n.m-t-18[_ngcontent-%COMP%] {margin-top: 18px;}\n.m-t-19[_ngcontent-%COMP%] {margin-top: 19px;}\n.m-t-20[_ngcontent-%COMP%] {margin-top: 20px;}\n.m-t-21[_ngcontent-%COMP%] {margin-top: 21px;}\n.m-t-22[_ngcontent-%COMP%] {margin-top: 22px;}\n.m-t-23[_ngcontent-%COMP%] {margin-top: 23px;}\n.m-t-24[_ngcontent-%COMP%] {margin-top: 24px;}\n.m-t-25[_ngcontent-%COMP%] {margin-top: 25px;}\n.m-t-26[_ngcontent-%COMP%] {margin-top: 26px;}\n.m-t-27[_ngcontent-%COMP%] {margin-top: 27px;}\n.m-t-28[_ngcontent-%COMP%] {margin-top: 28px;}\n.m-t-29[_ngcontent-%COMP%] {margin-top: 29px;}\n.m-t-30[_ngcontent-%COMP%] {margin-top: 30px;}\n.m-t-31[_ngcontent-%COMP%] {margin-top: 31px;}\n.m-t-32[_ngcontent-%COMP%] {margin-top: 32px;}\n.m-t-33[_ngcontent-%COMP%] {margin-top: 33px;}\n.m-t-34[_ngcontent-%COMP%] {margin-top: 34px;}\n.m-t-35[_ngcontent-%COMP%] {margin-top: 35px;}\n.m-t-36[_ngcontent-%COMP%] {margin-top: 36px;}\n.m-t-37[_ngcontent-%COMP%] {margin-top: 37px;}\n.m-t-38[_ngcontent-%COMP%] {margin-top: 38px;}\n.m-t-39[_ngcontent-%COMP%] {margin-top: 39px;}\n.m-t-40[_ngcontent-%COMP%] {margin-top: 40px;}\n.m-t-41[_ngcontent-%COMP%] {margin-top: 41px;}\n.m-t-42[_ngcontent-%COMP%] {margin-top: 42px;}\n.m-t-43[_ngcontent-%COMP%] {margin-top: 43px;}\n.m-t-44[_ngcontent-%COMP%] {margin-top: 44px;}\n.m-t-45[_ngcontent-%COMP%] {margin-top: 45px;}\n.m-t-46[_ngcontent-%COMP%] {margin-top: 46px;}\n.m-t-47[_ngcontent-%COMP%] {margin-top: 47px;}\n.m-t-48[_ngcontent-%COMP%] {margin-top: 48px;}\n.m-t-49[_ngcontent-%COMP%] {margin-top: 49px;}\n.m-t-50[_ngcontent-%COMP%] {margin-top: 50px;}\n.m-t-51[_ngcontent-%COMP%] {margin-top: 51px;}\n.m-t-52[_ngcontent-%COMP%] {margin-top: 52px;}\n.m-t-53[_ngcontent-%COMP%] {margin-top: 53px;}\n.m-t-54[_ngcontent-%COMP%] {margin-top: 54px;}\n.m-t-55[_ngcontent-%COMP%] {margin-top: 55px;}\n.m-t-56[_ngcontent-%COMP%] {margin-top: 56px;}\n.m-t-57[_ngcontent-%COMP%] {margin-top: 57px;}\n.m-t-58[_ngcontent-%COMP%] {margin-top: 58px;}\n.m-t-59[_ngcontent-%COMP%] {margin-top: 59px;}\n.m-t-60[_ngcontent-%COMP%] {margin-top: 60px;}\n.m-t-61[_ngcontent-%COMP%] {margin-top: 61px;}\n.m-t-62[_ngcontent-%COMP%] {margin-top: 62px;}\n.m-t-63[_ngcontent-%COMP%] {margin-top: 63px;}\n.m-t-64[_ngcontent-%COMP%] {margin-top: 64px;}\n.m-t-65[_ngcontent-%COMP%] {margin-top: 65px;}\n.m-t-66[_ngcontent-%COMP%] {margin-top: 66px;}\n.m-t-67[_ngcontent-%COMP%] {margin-top: 67px;}\n.m-t-68[_ngcontent-%COMP%] {margin-top: 68px;}\n.m-t-69[_ngcontent-%COMP%] {margin-top: 69px;}\n.m-t-70[_ngcontent-%COMP%] {margin-top: 70px;}\n.m-t-71[_ngcontent-%COMP%] {margin-top: 71px;}\n.m-t-72[_ngcontent-%COMP%] {margin-top: 72px;}\n.m-t-73[_ngcontent-%COMP%] {margin-top: 73px;}\n.m-t-74[_ngcontent-%COMP%] {margin-top: 74px;}\n.m-t-75[_ngcontent-%COMP%] {margin-top: 75px;}\n.m-t-76[_ngcontent-%COMP%] {margin-top: 76px;}\n.m-t-77[_ngcontent-%COMP%] {margin-top: 77px;}\n.m-t-78[_ngcontent-%COMP%] {margin-top: 78px;}\n.m-t-79[_ngcontent-%COMP%] {margin-top: 79px;}\n.m-t-80[_ngcontent-%COMP%] {margin-top: 80px;}\n.m-t-81[_ngcontent-%COMP%] {margin-top: 81px;}\n.m-t-82[_ngcontent-%COMP%] {margin-top: 82px;}\n.m-t-83[_ngcontent-%COMP%] {margin-top: 83px;}\n.m-t-84[_ngcontent-%COMP%] {margin-top: 84px;}\n.m-t-85[_ngcontent-%COMP%] {margin-top: 85px;}\n.m-t-86[_ngcontent-%COMP%] {margin-top: 86px;}\n.m-t-87[_ngcontent-%COMP%] {margin-top: 87px;}\n.m-t-88[_ngcontent-%COMP%] {margin-top: 88px;}\n.m-t-89[_ngcontent-%COMP%] {margin-top: 89px;}\n.m-t-90[_ngcontent-%COMP%] {margin-top: 90px;}\n.m-t-91[_ngcontent-%COMP%] {margin-top: 91px;}\n.m-t-92[_ngcontent-%COMP%] {margin-top: 92px;}\n.m-t-93[_ngcontent-%COMP%] {margin-top: 93px;}\n.m-t-94[_ngcontent-%COMP%] {margin-top: 94px;}\n.m-t-95[_ngcontent-%COMP%] {margin-top: 95px;}\n.m-t-96[_ngcontent-%COMP%] {margin-top: 96px;}\n.m-t-97[_ngcontent-%COMP%] {margin-top: 97px;}\n.m-t-98[_ngcontent-%COMP%] {margin-top: 98px;}\n.m-t-99[_ngcontent-%COMP%] {margin-top: 99px;}\n.m-t-100[_ngcontent-%COMP%] {margin-top: 100px;}\n.m-t-101[_ngcontent-%COMP%] {margin-top: 101px;}\n.m-t-102[_ngcontent-%COMP%] {margin-top: 102px;}\n.m-t-103[_ngcontent-%COMP%] {margin-top: 103px;}\n.m-t-104[_ngcontent-%COMP%] {margin-top: 104px;}\n.m-t-105[_ngcontent-%COMP%] {margin-top: 105px;}\n.m-t-106[_ngcontent-%COMP%] {margin-top: 106px;}\n.m-t-107[_ngcontent-%COMP%] {margin-top: 107px;}\n.m-t-108[_ngcontent-%COMP%] {margin-top: 108px;}\n.m-t-109[_ngcontent-%COMP%] {margin-top: 109px;}\n.m-t-110[_ngcontent-%COMP%] {margin-top: 110px;}\n.m-t-111[_ngcontent-%COMP%] {margin-top: 111px;}\n.m-t-112[_ngcontent-%COMP%] {margin-top: 112px;}\n.m-t-113[_ngcontent-%COMP%] {margin-top: 113px;}\n.m-t-114[_ngcontent-%COMP%] {margin-top: 114px;}\n.m-t-115[_ngcontent-%COMP%] {margin-top: 115px;}\n.m-t-116[_ngcontent-%COMP%] {margin-top: 116px;}\n.m-t-117[_ngcontent-%COMP%] {margin-top: 117px;}\n.m-t-118[_ngcontent-%COMP%] {margin-top: 118px;}\n.m-t-119[_ngcontent-%COMP%] {margin-top: 119px;}\n.m-t-120[_ngcontent-%COMP%] {margin-top: 120px;}\n.m-t-121[_ngcontent-%COMP%] {margin-top: 121px;}\n.m-t-122[_ngcontent-%COMP%] {margin-top: 122px;}\n.m-t-123[_ngcontent-%COMP%] {margin-top: 123px;}\n.m-t-124[_ngcontent-%COMP%] {margin-top: 124px;}\n.m-t-125[_ngcontent-%COMP%] {margin-top: 125px;}\n.m-t-126[_ngcontent-%COMP%] {margin-top: 126px;}\n.m-t-127[_ngcontent-%COMP%] {margin-top: 127px;}\n.m-t-128[_ngcontent-%COMP%] {margin-top: 128px;}\n.m-t-129[_ngcontent-%COMP%] {margin-top: 129px;}\n.m-t-130[_ngcontent-%COMP%] {margin-top: 130px;}\n.m-t-131[_ngcontent-%COMP%] {margin-top: 131px;}\n.m-t-132[_ngcontent-%COMP%] {margin-top: 132px;}\n.m-t-133[_ngcontent-%COMP%] {margin-top: 133px;}\n.m-t-134[_ngcontent-%COMP%] {margin-top: 134px;}\n.m-t-135[_ngcontent-%COMP%] {margin-top: 135px;}\n.m-t-136[_ngcontent-%COMP%] {margin-top: 136px;}\n.m-t-137[_ngcontent-%COMP%] {margin-top: 137px;}\n.m-t-138[_ngcontent-%COMP%] {margin-top: 138px;}\n.m-t-139[_ngcontent-%COMP%] {margin-top: 139px;}\n.m-t-140[_ngcontent-%COMP%] {margin-top: 140px;}\n.m-t-141[_ngcontent-%COMP%] {margin-top: 141px;}\n.m-t-142[_ngcontent-%COMP%] {margin-top: 142px;}\n.m-t-143[_ngcontent-%COMP%] {margin-top: 143px;}\n.m-t-144[_ngcontent-%COMP%] {margin-top: 144px;}\n.m-t-145[_ngcontent-%COMP%] {margin-top: 145px;}\n.m-t-146[_ngcontent-%COMP%] {margin-top: 146px;}\n.m-t-147[_ngcontent-%COMP%] {margin-top: 147px;}\n.m-t-148[_ngcontent-%COMP%] {margin-top: 148px;}\n.m-t-149[_ngcontent-%COMP%] {margin-top: 149px;}\n.m-t-150[_ngcontent-%COMP%] {margin-top: 150px;}\n.m-t-151[_ngcontent-%COMP%] {margin-top: 151px;}\n.m-t-152[_ngcontent-%COMP%] {margin-top: 152px;}\n.m-t-153[_ngcontent-%COMP%] {margin-top: 153px;}\n.m-t-154[_ngcontent-%COMP%] {margin-top: 154px;}\n.m-t-155[_ngcontent-%COMP%] {margin-top: 155px;}\n.m-t-156[_ngcontent-%COMP%] {margin-top: 156px;}\n.m-t-157[_ngcontent-%COMP%] {margin-top: 157px;}\n.m-t-158[_ngcontent-%COMP%] {margin-top: 158px;}\n.m-t-159[_ngcontent-%COMP%] {margin-top: 159px;}\n.m-t-160[_ngcontent-%COMP%] {margin-top: 160px;}\n.m-t-161[_ngcontent-%COMP%] {margin-top: 161px;}\n.m-t-162[_ngcontent-%COMP%] {margin-top: 162px;}\n.m-t-163[_ngcontent-%COMP%] {margin-top: 163px;}\n.m-t-164[_ngcontent-%COMP%] {margin-top: 164px;}\n.m-t-165[_ngcontent-%COMP%] {margin-top: 165px;}\n.m-t-166[_ngcontent-%COMP%] {margin-top: 166px;}\n.m-t-167[_ngcontent-%COMP%] {margin-top: 167px;}\n.m-t-168[_ngcontent-%COMP%] {margin-top: 168px;}\n.m-t-169[_ngcontent-%COMP%] {margin-top: 169px;}\n.m-t-170[_ngcontent-%COMP%] {margin-top: 170px;}\n.m-t-171[_ngcontent-%COMP%] {margin-top: 171px;}\n.m-t-172[_ngcontent-%COMP%] {margin-top: 172px;}\n.m-t-173[_ngcontent-%COMP%] {margin-top: 173px;}\n.m-t-174[_ngcontent-%COMP%] {margin-top: 174px;}\n.m-t-175[_ngcontent-%COMP%] {margin-top: 175px;}\n.m-t-176[_ngcontent-%COMP%] {margin-top: 176px;}\n.m-t-177[_ngcontent-%COMP%] {margin-top: 177px;}\n.m-t-178[_ngcontent-%COMP%] {margin-top: 178px;}\n.m-t-179[_ngcontent-%COMP%] {margin-top: 179px;}\n.m-t-180[_ngcontent-%COMP%] {margin-top: 180px;}\n.m-t-181[_ngcontent-%COMP%] {margin-top: 181px;}\n.m-t-182[_ngcontent-%COMP%] {margin-top: 182px;}\n.m-t-183[_ngcontent-%COMP%] {margin-top: 183px;}\n.m-t-184[_ngcontent-%COMP%] {margin-top: 184px;}\n.m-t-185[_ngcontent-%COMP%] {margin-top: 185px;}\n.m-t-186[_ngcontent-%COMP%] {margin-top: 186px;}\n.m-t-187[_ngcontent-%COMP%] {margin-top: 187px;}\n.m-t-188[_ngcontent-%COMP%] {margin-top: 188px;}\n.m-t-189[_ngcontent-%COMP%] {margin-top: 189px;}\n.m-t-190[_ngcontent-%COMP%] {margin-top: 190px;}\n.m-t-191[_ngcontent-%COMP%] {margin-top: 191px;}\n.m-t-192[_ngcontent-%COMP%] {margin-top: 192px;}\n.m-t-193[_ngcontent-%COMP%] {margin-top: 193px;}\n.m-t-194[_ngcontent-%COMP%] {margin-top: 194px;}\n.m-t-195[_ngcontent-%COMP%] {margin-top: 195px;}\n.m-t-196[_ngcontent-%COMP%] {margin-top: 196px;}\n.m-t-197[_ngcontent-%COMP%] {margin-top: 197px;}\n.m-t-198[_ngcontent-%COMP%] {margin-top: 198px;}\n.m-t-199[_ngcontent-%COMP%] {margin-top: 199px;}\n.m-t-200[_ngcontent-%COMP%] {margin-top: 200px;}\n.m-t-201[_ngcontent-%COMP%] {margin-top: 201px;}\n.m-t-202[_ngcontent-%COMP%] {margin-top: 202px;}\n.m-t-203[_ngcontent-%COMP%] {margin-top: 203px;}\n.m-t-204[_ngcontent-%COMP%] {margin-top: 204px;}\n.m-t-205[_ngcontent-%COMP%] {margin-top: 205px;}\n.m-t-206[_ngcontent-%COMP%] {margin-top: 206px;}\n.m-t-207[_ngcontent-%COMP%] {margin-top: 207px;}\n.m-t-208[_ngcontent-%COMP%] {margin-top: 208px;}\n.m-t-209[_ngcontent-%COMP%] {margin-top: 209px;}\n.m-t-210[_ngcontent-%COMP%] {margin-top: 210px;}\n.m-t-211[_ngcontent-%COMP%] {margin-top: 211px;}\n.m-t-212[_ngcontent-%COMP%] {margin-top: 212px;}\n.m-t-213[_ngcontent-%COMP%] {margin-top: 213px;}\n.m-t-214[_ngcontent-%COMP%] {margin-top: 214px;}\n.m-t-215[_ngcontent-%COMP%] {margin-top: 215px;}\n.m-t-216[_ngcontent-%COMP%] {margin-top: 216px;}\n.m-t-217[_ngcontent-%COMP%] {margin-top: 217px;}\n.m-t-218[_ngcontent-%COMP%] {margin-top: 218px;}\n.m-t-219[_ngcontent-%COMP%] {margin-top: 219px;}\n.m-t-220[_ngcontent-%COMP%] {margin-top: 220px;}\n.m-t-221[_ngcontent-%COMP%] {margin-top: 221px;}\n.m-t-222[_ngcontent-%COMP%] {margin-top: 222px;}\n.m-t-223[_ngcontent-%COMP%] {margin-top: 223px;}\n.m-t-224[_ngcontent-%COMP%] {margin-top: 224px;}\n.m-t-225[_ngcontent-%COMP%] {margin-top: 225px;}\n.m-t-226[_ngcontent-%COMP%] {margin-top: 226px;}\n.m-t-227[_ngcontent-%COMP%] {margin-top: 227px;}\n.m-t-228[_ngcontent-%COMP%] {margin-top: 228px;}\n.m-t-229[_ngcontent-%COMP%] {margin-top: 229px;}\n.m-t-230[_ngcontent-%COMP%] {margin-top: 230px;}\n.m-t-231[_ngcontent-%COMP%] {margin-top: 231px;}\n.m-t-232[_ngcontent-%COMP%] {margin-top: 232px;}\n.m-t-233[_ngcontent-%COMP%] {margin-top: 233px;}\n.m-t-234[_ngcontent-%COMP%] {margin-top: 234px;}\n.m-t-235[_ngcontent-%COMP%] {margin-top: 235px;}\n.m-t-236[_ngcontent-%COMP%] {margin-top: 236px;}\n.m-t-237[_ngcontent-%COMP%] {margin-top: 237px;}\n.m-t-238[_ngcontent-%COMP%] {margin-top: 238px;}\n.m-t-239[_ngcontent-%COMP%] {margin-top: 239px;}\n.m-t-240[_ngcontent-%COMP%] {margin-top: 240px;}\n.m-t-241[_ngcontent-%COMP%] {margin-top: 241px;}\n.m-t-242[_ngcontent-%COMP%] {margin-top: 242px;}\n.m-t-243[_ngcontent-%COMP%] {margin-top: 243px;}\n.m-t-244[_ngcontent-%COMP%] {margin-top: 244px;}\n.m-t-245[_ngcontent-%COMP%] {margin-top: 245px;}\n.m-t-246[_ngcontent-%COMP%] {margin-top: 246px;}\n.m-t-247[_ngcontent-%COMP%] {margin-top: 247px;}\n.m-t-248[_ngcontent-%COMP%] {margin-top: 248px;}\n.m-t-249[_ngcontent-%COMP%] {margin-top: 249px;}\n.m-t-250[_ngcontent-%COMP%] {margin-top: 250px;}\n.m-b-0[_ngcontent-%COMP%] {margin-bottom: 0px;}\n.m-b-1[_ngcontent-%COMP%] {margin-bottom: 1px;}\n.m-b-2[_ngcontent-%COMP%] {margin-bottom: 2px;}\n.m-b-3[_ngcontent-%COMP%] {margin-bottom: 3px;}\n.m-b-4[_ngcontent-%COMP%] {margin-bottom: 4px;}\n.m-b-5[_ngcontent-%COMP%] {margin-bottom: 5px;}\n.m-b-6[_ngcontent-%COMP%] {margin-bottom: 6px;}\n.m-b-7[_ngcontent-%COMP%] {margin-bottom: 7px;}\n.m-b-8[_ngcontent-%COMP%] {margin-bottom: 8px;}\n.m-b-9[_ngcontent-%COMP%] {margin-bottom: 9px;}\n.m-b-10[_ngcontent-%COMP%] {margin-bottom: 10px;}\n.m-b-11[_ngcontent-%COMP%] {margin-bottom: 11px;}\n.m-b-12[_ngcontent-%COMP%] {margin-bottom: 12px;}\n.m-b-13[_ngcontent-%COMP%] {margin-bottom: 13px;}\n.m-b-14[_ngcontent-%COMP%] {margin-bottom: 14px;}\n.m-b-15[_ngcontent-%COMP%] {margin-bottom: 15px;}\n.m-b-16[_ngcontent-%COMP%] {margin-bottom: 16px;}\n.m-b-17[_ngcontent-%COMP%] {margin-bottom: 17px;}\n.m-b-18[_ngcontent-%COMP%] {margin-bottom: 18px;}\n.m-b-19[_ngcontent-%COMP%] {margin-bottom: 19px;}\n.m-b-20[_ngcontent-%COMP%] {margin-bottom: 20px;}\n.m-b-21[_ngcontent-%COMP%] {margin-bottom: 21px;}\n.m-b-22[_ngcontent-%COMP%] {margin-bottom: 22px;}\n.m-b-23[_ngcontent-%COMP%] {margin-bottom: 23px;}\n.m-b-24[_ngcontent-%COMP%] {margin-bottom: 24px;}\n.m-b-25[_ngcontent-%COMP%] {margin-bottom: 25px;}\n.m-b-26[_ngcontent-%COMP%] {margin-bottom: 26px;}\n.m-b-27[_ngcontent-%COMP%] {margin-bottom: 27px;}\n.m-b-28[_ngcontent-%COMP%] {margin-bottom: 28px;}\n.m-b-29[_ngcontent-%COMP%] {margin-bottom: 29px;}\n.m-b-30[_ngcontent-%COMP%] {margin-bottom: 30px;}\n.m-b-31[_ngcontent-%COMP%] {margin-bottom: 31px;}\n.m-b-32[_ngcontent-%COMP%] {margin-bottom: 32px;}\n.m-b-33[_ngcontent-%COMP%] {margin-bottom: 33px;}\n.m-b-34[_ngcontent-%COMP%] {margin-bottom: 34px;}\n.m-b-35[_ngcontent-%COMP%] {margin-bottom: 35px;}\n.m-b-36[_ngcontent-%COMP%] {margin-bottom: 36px;}\n.m-b-37[_ngcontent-%COMP%] {margin-bottom: 37px;}\n.m-b-38[_ngcontent-%COMP%] {margin-bottom: 38px;}\n.m-b-39[_ngcontent-%COMP%] {margin-bottom: 39px;}\n.m-b-40[_ngcontent-%COMP%] {margin-bottom: 40px;}\n.m-b-41[_ngcontent-%COMP%] {margin-bottom: 41px;}\n.m-b-42[_ngcontent-%COMP%] {margin-bottom: 42px;}\n.m-b-43[_ngcontent-%COMP%] {margin-bottom: 43px;}\n.m-b-44[_ngcontent-%COMP%] {margin-bottom: 44px;}\n.m-b-45[_ngcontent-%COMP%] {margin-bottom: 45px;}\n.m-b-46[_ngcontent-%COMP%] {margin-bottom: 46px;}\n.m-b-47[_ngcontent-%COMP%] {margin-bottom: 47px;}\n.m-b-48[_ngcontent-%COMP%] {margin-bottom: 48px;}\n.m-b-49[_ngcontent-%COMP%] {margin-bottom: 49px;}\n.m-b-50[_ngcontent-%COMP%] {margin-bottom: 50px;}\n.m-b-51[_ngcontent-%COMP%] {margin-bottom: 51px;}\n.m-b-52[_ngcontent-%COMP%] {margin-bottom: 52px;}\n.m-b-53[_ngcontent-%COMP%] {margin-bottom: 53px;}\n.m-b-54[_ngcontent-%COMP%] {margin-bottom: 54px;}\n.m-b-55[_ngcontent-%COMP%] {margin-bottom: 55px;}\n.m-b-56[_ngcontent-%COMP%] {margin-bottom: 56px;}\n.m-b-57[_ngcontent-%COMP%] {margin-bottom: 57px;}\n.m-b-58[_ngcontent-%COMP%] {margin-bottom: 58px;}\n.m-b-59[_ngcontent-%COMP%] {margin-bottom: 59px;}\n.m-b-60[_ngcontent-%COMP%] {margin-bottom: 60px;}\n.m-b-61[_ngcontent-%COMP%] {margin-bottom: 61px;}\n.m-b-62[_ngcontent-%COMP%] {margin-bottom: 62px;}\n.m-b-63[_ngcontent-%COMP%] {margin-bottom: 63px;}\n.m-b-64[_ngcontent-%COMP%] {margin-bottom: 64px;}\n.m-b-65[_ngcontent-%COMP%] {margin-bottom: 65px;}\n.m-b-66[_ngcontent-%COMP%] {margin-bottom: 66px;}\n.m-b-67[_ngcontent-%COMP%] {margin-bottom: 67px;}\n.m-b-68[_ngcontent-%COMP%] {margin-bottom: 68px;}\n.m-b-69[_ngcontent-%COMP%] {margin-bottom: 69px;}\n.m-b-70[_ngcontent-%COMP%] {margin-bottom: 70px;}\n.m-b-71[_ngcontent-%COMP%] {margin-bottom: 71px;}\n.m-b-72[_ngcontent-%COMP%] {margin-bottom: 72px;}\n.m-b-73[_ngcontent-%COMP%] {margin-bottom: 73px;}\n.m-b-74[_ngcontent-%COMP%] {margin-bottom: 74px;}\n.m-b-75[_ngcontent-%COMP%] {margin-bottom: 75px;}\n.m-b-76[_ngcontent-%COMP%] {margin-bottom: 76px;}\n.m-b-77[_ngcontent-%COMP%] {margin-bottom: 77px;}\n.m-b-78[_ngcontent-%COMP%] {margin-bottom: 78px;}\n.m-b-79[_ngcontent-%COMP%] {margin-bottom: 79px;}\n.m-b-80[_ngcontent-%COMP%] {margin-bottom: 80px;}\n.m-b-81[_ngcontent-%COMP%] {margin-bottom: 81px;}\n.m-b-82[_ngcontent-%COMP%] {margin-bottom: 82px;}\n.m-b-83[_ngcontent-%COMP%] {margin-bottom: 83px;}\n.m-b-84[_ngcontent-%COMP%] {margin-bottom: 84px;}\n.m-b-85[_ngcontent-%COMP%] {margin-bottom: 85px;}\n.m-b-86[_ngcontent-%COMP%] {margin-bottom: 86px;}\n.m-b-87[_ngcontent-%COMP%] {margin-bottom: 87px;}\n.m-b-88[_ngcontent-%COMP%] {margin-bottom: 88px;}\n.m-b-89[_ngcontent-%COMP%] {margin-bottom: 89px;}\n.m-b-90[_ngcontent-%COMP%] {margin-bottom: 90px;}\n.m-b-91[_ngcontent-%COMP%] {margin-bottom: 91px;}\n.m-b-92[_ngcontent-%COMP%] {margin-bottom: 92px;}\n.m-b-93[_ngcontent-%COMP%] {margin-bottom: 93px;}\n.m-b-94[_ngcontent-%COMP%] {margin-bottom: 94px;}\n.m-b-95[_ngcontent-%COMP%] {margin-bottom: 95px;}\n.m-b-96[_ngcontent-%COMP%] {margin-bottom: 96px;}\n.m-b-97[_ngcontent-%COMP%] {margin-bottom: 97px;}\n.m-b-98[_ngcontent-%COMP%] {margin-bottom: 98px;}\n.m-b-99[_ngcontent-%COMP%] {margin-bottom: 99px;}\n.m-b-100[_ngcontent-%COMP%] {margin-bottom: 100px;}\n.m-b-101[_ngcontent-%COMP%] {margin-bottom: 101px;}\n.m-b-102[_ngcontent-%COMP%] {margin-bottom: 102px;}\n.m-b-103[_ngcontent-%COMP%] {margin-bottom: 103px;}\n.m-b-104[_ngcontent-%COMP%] {margin-bottom: 104px;}\n.m-b-105[_ngcontent-%COMP%] {margin-bottom: 105px;}\n.m-b-106[_ngcontent-%COMP%] {margin-bottom: 106px;}\n.m-b-107[_ngcontent-%COMP%] {margin-bottom: 107px;}\n.m-b-108[_ngcontent-%COMP%] {margin-bottom: 108px;}\n.m-b-109[_ngcontent-%COMP%] {margin-bottom: 109px;}\n.m-b-110[_ngcontent-%COMP%] {margin-bottom: 110px;}\n.m-b-111[_ngcontent-%COMP%] {margin-bottom: 111px;}\n.m-b-112[_ngcontent-%COMP%] {margin-bottom: 112px;}\n.m-b-113[_ngcontent-%COMP%] {margin-bottom: 113px;}\n.m-b-114[_ngcontent-%COMP%] {margin-bottom: 114px;}\n.m-b-115[_ngcontent-%COMP%] {margin-bottom: 115px;}\n.m-b-116[_ngcontent-%COMP%] {margin-bottom: 116px;}\n.m-b-117[_ngcontent-%COMP%] {margin-bottom: 117px;}\n.m-b-118[_ngcontent-%COMP%] {margin-bottom: 118px;}\n.m-b-119[_ngcontent-%COMP%] {margin-bottom: 119px;}\n.m-b-120[_ngcontent-%COMP%] {margin-bottom: 120px;}\n.m-b-121[_ngcontent-%COMP%] {margin-bottom: 121px;}\n.m-b-122[_ngcontent-%COMP%] {margin-bottom: 122px;}\n.m-b-123[_ngcontent-%COMP%] {margin-bottom: 123px;}\n.m-b-124[_ngcontent-%COMP%] {margin-bottom: 124px;}\n.m-b-125[_ngcontent-%COMP%] {margin-bottom: 125px;}\n.m-b-126[_ngcontent-%COMP%] {margin-bottom: 126px;}\n.m-b-127[_ngcontent-%COMP%] {margin-bottom: 127px;}\n.m-b-128[_ngcontent-%COMP%] {margin-bottom: 128px;}\n.m-b-129[_ngcontent-%COMP%] {margin-bottom: 129px;}\n.m-b-130[_ngcontent-%COMP%] {margin-bottom: 130px;}\n.m-b-131[_ngcontent-%COMP%] {margin-bottom: 131px;}\n.m-b-132[_ngcontent-%COMP%] {margin-bottom: 132px;}\n.m-b-133[_ngcontent-%COMP%] {margin-bottom: 133px;}\n.m-b-134[_ngcontent-%COMP%] {margin-bottom: 134px;}\n.m-b-135[_ngcontent-%COMP%] {margin-bottom: 135px;}\n.m-b-136[_ngcontent-%COMP%] {margin-bottom: 136px;}\n.m-b-137[_ngcontent-%COMP%] {margin-bottom: 137px;}\n.m-b-138[_ngcontent-%COMP%] {margin-bottom: 138px;}\n.m-b-139[_ngcontent-%COMP%] {margin-bottom: 139px;}\n.m-b-140[_ngcontent-%COMP%] {margin-bottom: 140px;}\n.m-b-141[_ngcontent-%COMP%] {margin-bottom: 141px;}\n.m-b-142[_ngcontent-%COMP%] {margin-bottom: 142px;}\n.m-b-143[_ngcontent-%COMP%] {margin-bottom: 143px;}\n.m-b-144[_ngcontent-%COMP%] {margin-bottom: 144px;}\n.m-b-145[_ngcontent-%COMP%] {margin-bottom: 145px;}\n.m-b-146[_ngcontent-%COMP%] {margin-bottom: 146px;}\n.m-b-147[_ngcontent-%COMP%] {margin-bottom: 147px;}\n.m-b-148[_ngcontent-%COMP%] {margin-bottom: 148px;}\n.m-b-149[_ngcontent-%COMP%] {margin-bottom: 149px;}\n.m-b-150[_ngcontent-%COMP%] {margin-bottom: 150px;}\n.m-b-151[_ngcontent-%COMP%] {margin-bottom: 151px;}\n.m-b-152[_ngcontent-%COMP%] {margin-bottom: 152px;}\n.m-b-153[_ngcontent-%COMP%] {margin-bottom: 153px;}\n.m-b-154[_ngcontent-%COMP%] {margin-bottom: 154px;}\n.m-b-155[_ngcontent-%COMP%] {margin-bottom: 155px;}\n.m-b-156[_ngcontent-%COMP%] {margin-bottom: 156px;}\n.m-b-157[_ngcontent-%COMP%] {margin-bottom: 157px;}\n.m-b-158[_ngcontent-%COMP%] {margin-bottom: 158px;}\n.m-b-159[_ngcontent-%COMP%] {margin-bottom: 159px;}\n.m-b-160[_ngcontent-%COMP%] {margin-bottom: 160px;}\n.m-b-161[_ngcontent-%COMP%] {margin-bottom: 161px;}\n.m-b-162[_ngcontent-%COMP%] {margin-bottom: 162px;}\n.m-b-163[_ngcontent-%COMP%] {margin-bottom: 163px;}\n.m-b-164[_ngcontent-%COMP%] {margin-bottom: 164px;}\n.m-b-165[_ngcontent-%COMP%] {margin-bottom: 165px;}\n.m-b-166[_ngcontent-%COMP%] {margin-bottom: 166px;}\n.m-b-167[_ngcontent-%COMP%] {margin-bottom: 167px;}\n.m-b-168[_ngcontent-%COMP%] {margin-bottom: 168px;}\n.m-b-169[_ngcontent-%COMP%] {margin-bottom: 169px;}\n.m-b-170[_ngcontent-%COMP%] {margin-bottom: 170px;}\n.m-b-171[_ngcontent-%COMP%] {margin-bottom: 171px;}\n.m-b-172[_ngcontent-%COMP%] {margin-bottom: 172px;}\n.m-b-173[_ngcontent-%COMP%] {margin-bottom: 173px;}\n.m-b-174[_ngcontent-%COMP%] {margin-bottom: 174px;}\n.m-b-175[_ngcontent-%COMP%] {margin-bottom: 175px;}\n.m-b-176[_ngcontent-%COMP%] {margin-bottom: 176px;}\n.m-b-177[_ngcontent-%COMP%] {margin-bottom: 177px;}\n.m-b-178[_ngcontent-%COMP%] {margin-bottom: 178px;}\n.m-b-179[_ngcontent-%COMP%] {margin-bottom: 179px;}\n.m-b-180[_ngcontent-%COMP%] {margin-bottom: 180px;}\n.m-b-181[_ngcontent-%COMP%] {margin-bottom: 181px;}\n.m-b-182[_ngcontent-%COMP%] {margin-bottom: 182px;}\n.m-b-183[_ngcontent-%COMP%] {margin-bottom: 183px;}\n.m-b-184[_ngcontent-%COMP%] {margin-bottom: 184px;}\n.m-b-185[_ngcontent-%COMP%] {margin-bottom: 185px;}\n.m-b-186[_ngcontent-%COMP%] {margin-bottom: 186px;}\n.m-b-187[_ngcontent-%COMP%] {margin-bottom: 187px;}\n.m-b-188[_ngcontent-%COMP%] {margin-bottom: 188px;}\n.m-b-189[_ngcontent-%COMP%] {margin-bottom: 189px;}\n.m-b-190[_ngcontent-%COMP%] {margin-bottom: 190px;}\n.m-b-191[_ngcontent-%COMP%] {margin-bottom: 191px;}\n.m-b-192[_ngcontent-%COMP%] {margin-bottom: 192px;}\n.m-b-193[_ngcontent-%COMP%] {margin-bottom: 193px;}\n.m-b-194[_ngcontent-%COMP%] {margin-bottom: 194px;}\n.m-b-195[_ngcontent-%COMP%] {margin-bottom: 195px;}\n.m-b-196[_ngcontent-%COMP%] {margin-bottom: 196px;}\n.m-b-197[_ngcontent-%COMP%] {margin-bottom: 197px;}\n.m-b-198[_ngcontent-%COMP%] {margin-bottom: 198px;}\n.m-b-199[_ngcontent-%COMP%] {margin-bottom: 199px;}\n.m-b-200[_ngcontent-%COMP%] {margin-bottom: 200px;}\n.m-b-201[_ngcontent-%COMP%] {margin-bottom: 201px;}\n.m-b-202[_ngcontent-%COMP%] {margin-bottom: 202px;}\n.m-b-203[_ngcontent-%COMP%] {margin-bottom: 203px;}\n.m-b-204[_ngcontent-%COMP%] {margin-bottom: 204px;}\n.m-b-205[_ngcontent-%COMP%] {margin-bottom: 205px;}\n.m-b-206[_ngcontent-%COMP%] {margin-bottom: 206px;}\n.m-b-207[_ngcontent-%COMP%] {margin-bottom: 207px;}\n.m-b-208[_ngcontent-%COMP%] {margin-bottom: 208px;}\n.m-b-209[_ngcontent-%COMP%] {margin-bottom: 209px;}\n.m-b-210[_ngcontent-%COMP%] {margin-bottom: 210px;}\n.m-b-211[_ngcontent-%COMP%] {margin-bottom: 211px;}\n.m-b-212[_ngcontent-%COMP%] {margin-bottom: 212px;}\n.m-b-213[_ngcontent-%COMP%] {margin-bottom: 213px;}\n.m-b-214[_ngcontent-%COMP%] {margin-bottom: 214px;}\n.m-b-215[_ngcontent-%COMP%] {margin-bottom: 215px;}\n.m-b-216[_ngcontent-%COMP%] {margin-bottom: 216px;}\n.m-b-217[_ngcontent-%COMP%] {margin-bottom: 217px;}\n.m-b-218[_ngcontent-%COMP%] {margin-bottom: 218px;}\n.m-b-219[_ngcontent-%COMP%] {margin-bottom: 219px;}\n.m-b-220[_ngcontent-%COMP%] {margin-bottom: 220px;}\n.m-b-221[_ngcontent-%COMP%] {margin-bottom: 221px;}\n.m-b-222[_ngcontent-%COMP%] {margin-bottom: 222px;}\n.m-b-223[_ngcontent-%COMP%] {margin-bottom: 223px;}\n.m-b-224[_ngcontent-%COMP%] {margin-bottom: 224px;}\n.m-b-225[_ngcontent-%COMP%] {margin-bottom: 225px;}\n.m-b-226[_ngcontent-%COMP%] {margin-bottom: 226px;}\n.m-b-227[_ngcontent-%COMP%] {margin-bottom: 227px;}\n.m-b-228[_ngcontent-%COMP%] {margin-bottom: 228px;}\n.m-b-229[_ngcontent-%COMP%] {margin-bottom: 229px;}\n.m-b-230[_ngcontent-%COMP%] {margin-bottom: 230px;}\n.m-b-231[_ngcontent-%COMP%] {margin-bottom: 231px;}\n.m-b-232[_ngcontent-%COMP%] {margin-bottom: 232px;}\n.m-b-233[_ngcontent-%COMP%] {margin-bottom: 233px;}\n.m-b-234[_ngcontent-%COMP%] {margin-bottom: 234px;}\n.m-b-235[_ngcontent-%COMP%] {margin-bottom: 235px;}\n.m-b-236[_ngcontent-%COMP%] {margin-bottom: 236px;}\n.m-b-237[_ngcontent-%COMP%] {margin-bottom: 237px;}\n.m-b-238[_ngcontent-%COMP%] {margin-bottom: 238px;}\n.m-b-239[_ngcontent-%COMP%] {margin-bottom: 239px;}\n.m-b-240[_ngcontent-%COMP%] {margin-bottom: 240px;}\n.m-b-241[_ngcontent-%COMP%] {margin-bottom: 241px;}\n.m-b-242[_ngcontent-%COMP%] {margin-bottom: 242px;}\n.m-b-243[_ngcontent-%COMP%] {margin-bottom: 243px;}\n.m-b-244[_ngcontent-%COMP%] {margin-bottom: 244px;}\n.m-b-245[_ngcontent-%COMP%] {margin-bottom: 245px;}\n.m-b-246[_ngcontent-%COMP%] {margin-bottom: 246px;}\n.m-b-247[_ngcontent-%COMP%] {margin-bottom: 247px;}\n.m-b-248[_ngcontent-%COMP%] {margin-bottom: 248px;}\n.m-b-249[_ngcontent-%COMP%] {margin-bottom: 249px;}\n.m-b-250[_ngcontent-%COMP%] {margin-bottom: 250px;}\n.m-l-0[_ngcontent-%COMP%] {margin-left: 0px;}\n.m-l-1[_ngcontent-%COMP%] {margin-left: 1px;}\n.m-l-2[_ngcontent-%COMP%] {margin-left: 2px;}\n.m-l-3[_ngcontent-%COMP%] {margin-left: 3px;}\n.m-l-4[_ngcontent-%COMP%] {margin-left: 4px;}\n.m-l-5[_ngcontent-%COMP%] {margin-left: 5px;}\n.m-l-6[_ngcontent-%COMP%] {margin-left: 6px;}\n.m-l-7[_ngcontent-%COMP%] {margin-left: 7px;}\n.m-l-8[_ngcontent-%COMP%] {margin-left: 8px;}\n.m-l-9[_ngcontent-%COMP%] {margin-left: 9px;}\n.m-l-10[_ngcontent-%COMP%] {margin-left: 10px;}\n.m-l-11[_ngcontent-%COMP%] {margin-left: 11px;}\n.m-l-12[_ngcontent-%COMP%] {margin-left: 12px;}\n.m-l-13[_ngcontent-%COMP%] {margin-left: 13px;}\n.m-l-14[_ngcontent-%COMP%] {margin-left: 14px;}\n.m-l-15[_ngcontent-%COMP%] {margin-left: 15px;}\n.m-l-16[_ngcontent-%COMP%] {margin-left: 16px;}\n.m-l-17[_ngcontent-%COMP%] {margin-left: 17px;}\n.m-l-18[_ngcontent-%COMP%] {margin-left: 18px;}\n.m-l-19[_ngcontent-%COMP%] {margin-left: 19px;}\n.m-l-20[_ngcontent-%COMP%] {margin-left: 20px;}\n.m-l-21[_ngcontent-%COMP%] {margin-left: 21px;}\n.m-l-22[_ngcontent-%COMP%] {margin-left: 22px;}\n.m-l-23[_ngcontent-%COMP%] {margin-left: 23px;}\n.m-l-24[_ngcontent-%COMP%] {margin-left: 24px;}\n.m-l-25[_ngcontent-%COMP%] {margin-left: 25px;}\n.m-l-26[_ngcontent-%COMP%] {margin-left: 26px;}\n.m-l-27[_ngcontent-%COMP%] {margin-left: 27px;}\n.m-l-28[_ngcontent-%COMP%] {margin-left: 28px;}\n.m-l-29[_ngcontent-%COMP%] {margin-left: 29px;}\n.m-l-30[_ngcontent-%COMP%] {margin-left: 30px;}\n.m-l-31[_ngcontent-%COMP%] {margin-left: 31px;}\n.m-l-32[_ngcontent-%COMP%] {margin-left: 32px;}\n.m-l-33[_ngcontent-%COMP%] {margin-left: 33px;}\n.m-l-34[_ngcontent-%COMP%] {margin-left: 34px;}\n.m-l-35[_ngcontent-%COMP%] {margin-left: 35px;}\n.m-l-36[_ngcontent-%COMP%] {margin-left: 36px;}\n.m-l-37[_ngcontent-%COMP%] {margin-left: 37px;}\n.m-l-38[_ngcontent-%COMP%] {margin-left: 38px;}\n.m-l-39[_ngcontent-%COMP%] {margin-left: 39px;}\n.m-l-40[_ngcontent-%COMP%] {margin-left: 40px;}\n.m-l-41[_ngcontent-%COMP%] {margin-left: 41px;}\n.m-l-42[_ngcontent-%COMP%] {margin-left: 42px;}\n.m-l-43[_ngcontent-%COMP%] {margin-left: 43px;}\n.m-l-44[_ngcontent-%COMP%] {margin-left: 44px;}\n.m-l-45[_ngcontent-%COMP%] {margin-left: 45px;}\n.m-l-46[_ngcontent-%COMP%] {margin-left: 46px;}\n.m-l-47[_ngcontent-%COMP%] {margin-left: 47px;}\n.m-l-48[_ngcontent-%COMP%] {margin-left: 48px;}\n.m-l-49[_ngcontent-%COMP%] {margin-left: 49px;}\n.m-l-50[_ngcontent-%COMP%] {margin-left: 50px;}\n.m-l-51[_ngcontent-%COMP%] {margin-left: 51px;}\n.m-l-52[_ngcontent-%COMP%] {margin-left: 52px;}\n.m-l-53[_ngcontent-%COMP%] {margin-left: 53px;}\n.m-l-54[_ngcontent-%COMP%] {margin-left: 54px;}\n.m-l-55[_ngcontent-%COMP%] {margin-left: 55px;}\n.m-l-56[_ngcontent-%COMP%] {margin-left: 56px;}\n.m-l-57[_ngcontent-%COMP%] {margin-left: 57px;}\n.m-l-58[_ngcontent-%COMP%] {margin-left: 58px;}\n.m-l-59[_ngcontent-%COMP%] {margin-left: 59px;}\n.m-l-60[_ngcontent-%COMP%] {margin-left: 60px;}\n.m-l-61[_ngcontent-%COMP%] {margin-left: 61px;}\n.m-l-62[_ngcontent-%COMP%] {margin-left: 62px;}\n.m-l-63[_ngcontent-%COMP%] {margin-left: 63px;}\n.m-l-64[_ngcontent-%COMP%] {margin-left: 64px;}\n.m-l-65[_ngcontent-%COMP%] {margin-left: 65px;}\n.m-l-66[_ngcontent-%COMP%] {margin-left: 66px;}\n.m-l-67[_ngcontent-%COMP%] {margin-left: 67px;}\n.m-l-68[_ngcontent-%COMP%] {margin-left: 68px;}\n.m-l-69[_ngcontent-%COMP%] {margin-left: 69px;}\n.m-l-70[_ngcontent-%COMP%] {margin-left: 70px;}\n.m-l-71[_ngcontent-%COMP%] {margin-left: 71px;}\n.m-l-72[_ngcontent-%COMP%] {margin-left: 72px;}\n.m-l-73[_ngcontent-%COMP%] {margin-left: 73px;}\n.m-l-74[_ngcontent-%COMP%] {margin-left: 74px;}\n.m-l-75[_ngcontent-%COMP%] {margin-left: 75px;}\n.m-l-76[_ngcontent-%COMP%] {margin-left: 76px;}\n.m-l-77[_ngcontent-%COMP%] {margin-left: 77px;}\n.m-l-78[_ngcontent-%COMP%] {margin-left: 78px;}\n.m-l-79[_ngcontent-%COMP%] {margin-left: 79px;}\n.m-l-80[_ngcontent-%COMP%] {margin-left: 80px;}\n.m-l-81[_ngcontent-%COMP%] {margin-left: 81px;}\n.m-l-82[_ngcontent-%COMP%] {margin-left: 82px;}\n.m-l-83[_ngcontent-%COMP%] {margin-left: 83px;}\n.m-l-84[_ngcontent-%COMP%] {margin-left: 84px;}\n.m-l-85[_ngcontent-%COMP%] {margin-left: 85px;}\n.m-l-86[_ngcontent-%COMP%] {margin-left: 86px;}\n.m-l-87[_ngcontent-%COMP%] {margin-left: 87px;}\n.m-l-88[_ngcontent-%COMP%] {margin-left: 88px;}\n.m-l-89[_ngcontent-%COMP%] {margin-left: 89px;}\n.m-l-90[_ngcontent-%COMP%] {margin-left: 90px;}\n.m-l-91[_ngcontent-%COMP%] {margin-left: 91px;}\n.m-l-92[_ngcontent-%COMP%] {margin-left: 92px;}\n.m-l-93[_ngcontent-%COMP%] {margin-left: 93px;}\n.m-l-94[_ngcontent-%COMP%] {margin-left: 94px;}\n.m-l-95[_ngcontent-%COMP%] {margin-left: 95px;}\n.m-l-96[_ngcontent-%COMP%] {margin-left: 96px;}\n.m-l-97[_ngcontent-%COMP%] {margin-left: 97px;}\n.m-l-98[_ngcontent-%COMP%] {margin-left: 98px;}\n.m-l-99[_ngcontent-%COMP%] {margin-left: 99px;}\n.m-l-100[_ngcontent-%COMP%] {margin-left: 100px;}\n.m-l-101[_ngcontent-%COMP%] {margin-left: 101px;}\n.m-l-102[_ngcontent-%COMP%] {margin-left: 102px;}\n.m-l-103[_ngcontent-%COMP%] {margin-left: 103px;}\n.m-l-104[_ngcontent-%COMP%] {margin-left: 104px;}\n.m-l-105[_ngcontent-%COMP%] {margin-left: 105px;}\n.m-l-106[_ngcontent-%COMP%] {margin-left: 106px;}\n.m-l-107[_ngcontent-%COMP%] {margin-left: 107px;}\n.m-l-108[_ngcontent-%COMP%] {margin-left: 108px;}\n.m-l-109[_ngcontent-%COMP%] {margin-left: 109px;}\n.m-l-110[_ngcontent-%COMP%] {margin-left: 110px;}\n.m-l-111[_ngcontent-%COMP%] {margin-left: 111px;}\n.m-l-112[_ngcontent-%COMP%] {margin-left: 112px;}\n.m-l-113[_ngcontent-%COMP%] {margin-left: 113px;}\n.m-l-114[_ngcontent-%COMP%] {margin-left: 114px;}\n.m-l-115[_ngcontent-%COMP%] {margin-left: 115px;}\n.m-l-116[_ngcontent-%COMP%] {margin-left: 116px;}\n.m-l-117[_ngcontent-%COMP%] {margin-left: 117px;}\n.m-l-118[_ngcontent-%COMP%] {margin-left: 118px;}\n.m-l-119[_ngcontent-%COMP%] {margin-left: 119px;}\n.m-l-120[_ngcontent-%COMP%] {margin-left: 120px;}\n.m-l-121[_ngcontent-%COMP%] {margin-left: 121px;}\n.m-l-122[_ngcontent-%COMP%] {margin-left: 122px;}\n.m-l-123[_ngcontent-%COMP%] {margin-left: 123px;}\n.m-l-124[_ngcontent-%COMP%] {margin-left: 124px;}\n.m-l-125[_ngcontent-%COMP%] {margin-left: 125px;}\n.m-l-126[_ngcontent-%COMP%] {margin-left: 126px;}\n.m-l-127[_ngcontent-%COMP%] {margin-left: 127px;}\n.m-l-128[_ngcontent-%COMP%] {margin-left: 128px;}\n.m-l-129[_ngcontent-%COMP%] {margin-left: 129px;}\n.m-l-130[_ngcontent-%COMP%] {margin-left: 130px;}\n.m-l-131[_ngcontent-%COMP%] {margin-left: 131px;}\n.m-l-132[_ngcontent-%COMP%] {margin-left: 132px;}\n.m-l-133[_ngcontent-%COMP%] {margin-left: 133px;}\n.m-l-134[_ngcontent-%COMP%] {margin-left: 134px;}\n.m-l-135[_ngcontent-%COMP%] {margin-left: 135px;}\n.m-l-136[_ngcontent-%COMP%] {margin-left: 136px;}\n.m-l-137[_ngcontent-%COMP%] {margin-left: 137px;}\n.m-l-138[_ngcontent-%COMP%] {margin-left: 138px;}\n.m-l-139[_ngcontent-%COMP%] {margin-left: 139px;}\n.m-l-140[_ngcontent-%COMP%] {margin-left: 140px;}\n.m-l-141[_ngcontent-%COMP%] {margin-left: 141px;}\n.m-l-142[_ngcontent-%COMP%] {margin-left: 142px;}\n.m-l-143[_ngcontent-%COMP%] {margin-left: 143px;}\n.m-l-144[_ngcontent-%COMP%] {margin-left: 144px;}\n.m-l-145[_ngcontent-%COMP%] {margin-left: 145px;}\n.m-l-146[_ngcontent-%COMP%] {margin-left: 146px;}\n.m-l-147[_ngcontent-%COMP%] {margin-left: 147px;}\n.m-l-148[_ngcontent-%COMP%] {margin-left: 148px;}\n.m-l-149[_ngcontent-%COMP%] {margin-left: 149px;}\n.m-l-150[_ngcontent-%COMP%] {margin-left: 150px;}\n.m-l-151[_ngcontent-%COMP%] {margin-left: 151px;}\n.m-l-152[_ngcontent-%COMP%] {margin-left: 152px;}\n.m-l-153[_ngcontent-%COMP%] {margin-left: 153px;}\n.m-l-154[_ngcontent-%COMP%] {margin-left: 154px;}\n.m-l-155[_ngcontent-%COMP%] {margin-left: 155px;}\n.m-l-156[_ngcontent-%COMP%] {margin-left: 156px;}\n.m-l-157[_ngcontent-%COMP%] {margin-left: 157px;}\n.m-l-158[_ngcontent-%COMP%] {margin-left: 158px;}\n.m-l-159[_ngcontent-%COMP%] {margin-left: 159px;}\n.m-l-160[_ngcontent-%COMP%] {margin-left: 160px;}\n.m-l-161[_ngcontent-%COMP%] {margin-left: 161px;}\n.m-l-162[_ngcontent-%COMP%] {margin-left: 162px;}\n.m-l-163[_ngcontent-%COMP%] {margin-left: 163px;}\n.m-l-164[_ngcontent-%COMP%] {margin-left: 164px;}\n.m-l-165[_ngcontent-%COMP%] {margin-left: 165px;}\n.m-l-166[_ngcontent-%COMP%] {margin-left: 166px;}\n.m-l-167[_ngcontent-%COMP%] {margin-left: 167px;}\n.m-l-168[_ngcontent-%COMP%] {margin-left: 168px;}\n.m-l-169[_ngcontent-%COMP%] {margin-left: 169px;}\n.m-l-170[_ngcontent-%COMP%] {margin-left: 170px;}\n.m-l-171[_ngcontent-%COMP%] {margin-left: 171px;}\n.m-l-172[_ngcontent-%COMP%] {margin-left: 172px;}\n.m-l-173[_ngcontent-%COMP%] {margin-left: 173px;}\n.m-l-174[_ngcontent-%COMP%] {margin-left: 174px;}\n.m-l-175[_ngcontent-%COMP%] {margin-left: 175px;}\n.m-l-176[_ngcontent-%COMP%] {margin-left: 176px;}\n.m-l-177[_ngcontent-%COMP%] {margin-left: 177px;}\n.m-l-178[_ngcontent-%COMP%] {margin-left: 178px;}\n.m-l-179[_ngcontent-%COMP%] {margin-left: 179px;}\n.m-l-180[_ngcontent-%COMP%] {margin-left: 180px;}\n.m-l-181[_ngcontent-%COMP%] {margin-left: 181px;}\n.m-l-182[_ngcontent-%COMP%] {margin-left: 182px;}\n.m-l-183[_ngcontent-%COMP%] {margin-left: 183px;}\n.m-l-184[_ngcontent-%COMP%] {margin-left: 184px;}\n.m-l-185[_ngcontent-%COMP%] {margin-left: 185px;}\n.m-l-186[_ngcontent-%COMP%] {margin-left: 186px;}\n.m-l-187[_ngcontent-%COMP%] {margin-left: 187px;}\n.m-l-188[_ngcontent-%COMP%] {margin-left: 188px;}\n.m-l-189[_ngcontent-%COMP%] {margin-left: 189px;}\n.m-l-190[_ngcontent-%COMP%] {margin-left: 190px;}\n.m-l-191[_ngcontent-%COMP%] {margin-left: 191px;}\n.m-l-192[_ngcontent-%COMP%] {margin-left: 192px;}\n.m-l-193[_ngcontent-%COMP%] {margin-left: 193px;}\n.m-l-194[_ngcontent-%COMP%] {margin-left: 194px;}\n.m-l-195[_ngcontent-%COMP%] {margin-left: 195px;}\n.m-l-196[_ngcontent-%COMP%] {margin-left: 196px;}\n.m-l-197[_ngcontent-%COMP%] {margin-left: 197px;}\n.m-l-198[_ngcontent-%COMP%] {margin-left: 198px;}\n.m-l-199[_ngcontent-%COMP%] {margin-left: 199px;}\n.m-l-200[_ngcontent-%COMP%] {margin-left: 200px;}\n.m-l-201[_ngcontent-%COMP%] {margin-left: 201px;}\n.m-l-202[_ngcontent-%COMP%] {margin-left: 202px;}\n.m-l-203[_ngcontent-%COMP%] {margin-left: 203px;}\n.m-l-204[_ngcontent-%COMP%] {margin-left: 204px;}\n.m-l-205[_ngcontent-%COMP%] {margin-left: 205px;}\n.m-l-206[_ngcontent-%COMP%] {margin-left: 206px;}\n.m-l-207[_ngcontent-%COMP%] {margin-left: 207px;}\n.m-l-208[_ngcontent-%COMP%] {margin-left: 208px;}\n.m-l-209[_ngcontent-%COMP%] {margin-left: 209px;}\n.m-l-210[_ngcontent-%COMP%] {margin-left: 210px;}\n.m-l-211[_ngcontent-%COMP%] {margin-left: 211px;}\n.m-l-212[_ngcontent-%COMP%] {margin-left: 212px;}\n.m-l-213[_ngcontent-%COMP%] {margin-left: 213px;}\n.m-l-214[_ngcontent-%COMP%] {margin-left: 214px;}\n.m-l-215[_ngcontent-%COMP%] {margin-left: 215px;}\n.m-l-216[_ngcontent-%COMP%] {margin-left: 216px;}\n.m-l-217[_ngcontent-%COMP%] {margin-left: 217px;}\n.m-l-218[_ngcontent-%COMP%] {margin-left: 218px;}\n.m-l-219[_ngcontent-%COMP%] {margin-left: 219px;}\n.m-l-220[_ngcontent-%COMP%] {margin-left: 220px;}\n.m-l-221[_ngcontent-%COMP%] {margin-left: 221px;}\n.m-l-222[_ngcontent-%COMP%] {margin-left: 222px;}\n.m-l-223[_ngcontent-%COMP%] {margin-left: 223px;}\n.m-l-224[_ngcontent-%COMP%] {margin-left: 224px;}\n.m-l-225[_ngcontent-%COMP%] {margin-left: 225px;}\n.m-l-226[_ngcontent-%COMP%] {margin-left: 226px;}\n.m-l-227[_ngcontent-%COMP%] {margin-left: 227px;}\n.m-l-228[_ngcontent-%COMP%] {margin-left: 228px;}\n.m-l-229[_ngcontent-%COMP%] {margin-left: 229px;}\n.m-l-230[_ngcontent-%COMP%] {margin-left: 230px;}\n.m-l-231[_ngcontent-%COMP%] {margin-left: 231px;}\n.m-l-232[_ngcontent-%COMP%] {margin-left: 232px;}\n.m-l-233[_ngcontent-%COMP%] {margin-left: 233px;}\n.m-l-234[_ngcontent-%COMP%] {margin-left: 234px;}\n.m-l-235[_ngcontent-%COMP%] {margin-left: 235px;}\n.m-l-236[_ngcontent-%COMP%] {margin-left: 236px;}\n.m-l-237[_ngcontent-%COMP%] {margin-left: 237px;}\n.m-l-238[_ngcontent-%COMP%] {margin-left: 238px;}\n.m-l-239[_ngcontent-%COMP%] {margin-left: 239px;}\n.m-l-240[_ngcontent-%COMP%] {margin-left: 240px;}\n.m-l-241[_ngcontent-%COMP%] {margin-left: 241px;}\n.m-l-242[_ngcontent-%COMP%] {margin-left: 242px;}\n.m-l-243[_ngcontent-%COMP%] {margin-left: 243px;}\n.m-l-244[_ngcontent-%COMP%] {margin-left: 244px;}\n.m-l-245[_ngcontent-%COMP%] {margin-left: 245px;}\n.m-l-246[_ngcontent-%COMP%] {margin-left: 246px;}\n.m-l-247[_ngcontent-%COMP%] {margin-left: 247px;}\n.m-l-248[_ngcontent-%COMP%] {margin-left: 248px;}\n.m-l-249[_ngcontent-%COMP%] {margin-left: 249px;}\n.m-l-250[_ngcontent-%COMP%] {margin-left: 250px;}\n.m-r-0[_ngcontent-%COMP%] {margin-right: 0px;}\n.m-r-1[_ngcontent-%COMP%] {margin-right: 1px;}\n.m-r-2[_ngcontent-%COMP%] {margin-right: 2px;}\n.m-r-3[_ngcontent-%COMP%] {margin-right: 3px;}\n.m-r-4[_ngcontent-%COMP%] {margin-right: 4px;}\n.m-r-5[_ngcontent-%COMP%] {margin-right: 5px;}\n.m-r-6[_ngcontent-%COMP%] {margin-right: 6px;}\n.m-r-7[_ngcontent-%COMP%] {margin-right: 7px;}\n.m-r-8[_ngcontent-%COMP%] {margin-right: 8px;}\n.m-r-9[_ngcontent-%COMP%] {margin-right: 9px;}\n.m-r-10[_ngcontent-%COMP%] {margin-right: 10px;}\n.m-r-11[_ngcontent-%COMP%] {margin-right: 11px;}\n.m-r-12[_ngcontent-%COMP%] {margin-right: 12px;}\n.m-r-13[_ngcontent-%COMP%] {margin-right: 13px;}\n.m-r-14[_ngcontent-%COMP%] {margin-right: 14px;}\n.m-r-15[_ngcontent-%COMP%] {margin-right: 15px;}\n.m-r-16[_ngcontent-%COMP%] {margin-right: 16px;}\n.m-r-17[_ngcontent-%COMP%] {margin-right: 17px;}\n.m-r-18[_ngcontent-%COMP%] {margin-right: 18px;}\n.m-r-19[_ngcontent-%COMP%] {margin-right: 19px;}\n.m-r-20[_ngcontent-%COMP%] {margin-right: 20px;}\n.m-r-21[_ngcontent-%COMP%] {margin-right: 21px;}\n.m-r-22[_ngcontent-%COMP%] {margin-right: 22px;}\n.m-r-23[_ngcontent-%COMP%] {margin-right: 23px;}\n.m-r-24[_ngcontent-%COMP%] {margin-right: 24px;}\n.m-r-25[_ngcontent-%COMP%] {margin-right: 25px;}\n.m-r-26[_ngcontent-%COMP%] {margin-right: 26px;}\n.m-r-27[_ngcontent-%COMP%] {margin-right: 27px;}\n.m-r-28[_ngcontent-%COMP%] {margin-right: 28px;}\n.m-r-29[_ngcontent-%COMP%] {margin-right: 29px;}\n.m-r-30[_ngcontent-%COMP%] {margin-right: 30px;}\n.m-r-31[_ngcontent-%COMP%] {margin-right: 31px;}\n.m-r-32[_ngcontent-%COMP%] {margin-right: 32px;}\n.m-r-33[_ngcontent-%COMP%] {margin-right: 33px;}\n.m-r-34[_ngcontent-%COMP%] {margin-right: 34px;}\n.m-r-35[_ngcontent-%COMP%] {margin-right: 35px;}\n.m-r-36[_ngcontent-%COMP%] {margin-right: 36px;}\n.m-r-37[_ngcontent-%COMP%] {margin-right: 37px;}\n.m-r-38[_ngcontent-%COMP%] {margin-right: 38px;}\n.m-r-39[_ngcontent-%COMP%] {margin-right: 39px;}\n.m-r-40[_ngcontent-%COMP%] {margin-right: 40px;}\n.m-r-41[_ngcontent-%COMP%] {margin-right: 41px;}\n.m-r-42[_ngcontent-%COMP%] {margin-right: 42px;}\n.m-r-43[_ngcontent-%COMP%] {margin-right: 43px;}\n.m-r-44[_ngcontent-%COMP%] {margin-right: 44px;}\n.m-r-45[_ngcontent-%COMP%] {margin-right: 45px;}\n.m-r-46[_ngcontent-%COMP%] {margin-right: 46px;}\n.m-r-47[_ngcontent-%COMP%] {margin-right: 47px;}\n.m-r-48[_ngcontent-%COMP%] {margin-right: 48px;}\n.m-r-49[_ngcontent-%COMP%] {margin-right: 49px;}\n.m-r-50[_ngcontent-%COMP%] {margin-right: 50px;}\n.m-r-51[_ngcontent-%COMP%] {margin-right: 51px;}\n.m-r-52[_ngcontent-%COMP%] {margin-right: 52px;}\n.m-r-53[_ngcontent-%COMP%] {margin-right: 53px;}\n.m-r-54[_ngcontent-%COMP%] {margin-right: 54px;}\n.m-r-55[_ngcontent-%COMP%] {margin-right: 55px;}\n.m-r-56[_ngcontent-%COMP%] {margin-right: 56px;}\n.m-r-57[_ngcontent-%COMP%] {margin-right: 57px;}\n.m-r-58[_ngcontent-%COMP%] {margin-right: 58px;}\n.m-r-59[_ngcontent-%COMP%] {margin-right: 59px;}\n.m-r-60[_ngcontent-%COMP%] {margin-right: 60px;}\n.m-r-61[_ngcontent-%COMP%] {margin-right: 61px;}\n.m-r-62[_ngcontent-%COMP%] {margin-right: 62px;}\n.m-r-63[_ngcontent-%COMP%] {margin-right: 63px;}\n.m-r-64[_ngcontent-%COMP%] {margin-right: 64px;}\n.m-r-65[_ngcontent-%COMP%] {margin-right: 65px;}\n.m-r-66[_ngcontent-%COMP%] {margin-right: 66px;}\n.m-r-67[_ngcontent-%COMP%] {margin-right: 67px;}\n.m-r-68[_ngcontent-%COMP%] {margin-right: 68px;}\n.m-r-69[_ngcontent-%COMP%] {margin-right: 69px;}\n.m-r-70[_ngcontent-%COMP%] {margin-right: 70px;}\n.m-r-71[_ngcontent-%COMP%] {margin-right: 71px;}\n.m-r-72[_ngcontent-%COMP%] {margin-right: 72px;}\n.m-r-73[_ngcontent-%COMP%] {margin-right: 73px;}\n.m-r-74[_ngcontent-%COMP%] {margin-right: 74px;}\n.m-r-75[_ngcontent-%COMP%] {margin-right: 75px;}\n.m-r-76[_ngcontent-%COMP%] {margin-right: 76px;}\n.m-r-77[_ngcontent-%COMP%] {margin-right: 77px;}\n.m-r-78[_ngcontent-%COMP%] {margin-right: 78px;}\n.m-r-79[_ngcontent-%COMP%] {margin-right: 79px;}\n.m-r-80[_ngcontent-%COMP%] {margin-right: 80px;}\n.m-r-81[_ngcontent-%COMP%] {margin-right: 81px;}\n.m-r-82[_ngcontent-%COMP%] {margin-right: 82px;}\n.m-r-83[_ngcontent-%COMP%] {margin-right: 83px;}\n.m-r-84[_ngcontent-%COMP%] {margin-right: 84px;}\n.m-r-85[_ngcontent-%COMP%] {margin-right: 85px;}\n.m-r-86[_ngcontent-%COMP%] {margin-right: 86px;}\n.m-r-87[_ngcontent-%COMP%] {margin-right: 87px;}\n.m-r-88[_ngcontent-%COMP%] {margin-right: 88px;}\n.m-r-89[_ngcontent-%COMP%] {margin-right: 89px;}\n.m-r-90[_ngcontent-%COMP%] {margin-right: 90px;}\n.m-r-91[_ngcontent-%COMP%] {margin-right: 91px;}\n.m-r-92[_ngcontent-%COMP%] {margin-right: 92px;}\n.m-r-93[_ngcontent-%COMP%] {margin-right: 93px;}\n.m-r-94[_ngcontent-%COMP%] {margin-right: 94px;}\n.m-r-95[_ngcontent-%COMP%] {margin-right: 95px;}\n.m-r-96[_ngcontent-%COMP%] {margin-right: 96px;}\n.m-r-97[_ngcontent-%COMP%] {margin-right: 97px;}\n.m-r-98[_ngcontent-%COMP%] {margin-right: 98px;}\n.m-r-99[_ngcontent-%COMP%] {margin-right: 99px;}\n.m-r-100[_ngcontent-%COMP%] {margin-right: 100px;}\n.m-r-101[_ngcontent-%COMP%] {margin-right: 101px;}\n.m-r-102[_ngcontent-%COMP%] {margin-right: 102px;}\n.m-r-103[_ngcontent-%COMP%] {margin-right: 103px;}\n.m-r-104[_ngcontent-%COMP%] {margin-right: 104px;}\n.m-r-105[_ngcontent-%COMP%] {margin-right: 105px;}\n.m-r-106[_ngcontent-%COMP%] {margin-right: 106px;}\n.m-r-107[_ngcontent-%COMP%] {margin-right: 107px;}\n.m-r-108[_ngcontent-%COMP%] {margin-right: 108px;}\n.m-r-109[_ngcontent-%COMP%] {margin-right: 109px;}\n.m-r-110[_ngcontent-%COMP%] {margin-right: 110px;}\n.m-r-111[_ngcontent-%COMP%] {margin-right: 111px;}\n.m-r-112[_ngcontent-%COMP%] {margin-right: 112px;}\n.m-r-113[_ngcontent-%COMP%] {margin-right: 113px;}\n.m-r-114[_ngcontent-%COMP%] {margin-right: 114px;}\n.m-r-115[_ngcontent-%COMP%] {margin-right: 115px;}\n.m-r-116[_ngcontent-%COMP%] {margin-right: 116px;}\n.m-r-117[_ngcontent-%COMP%] {margin-right: 117px;}\n.m-r-118[_ngcontent-%COMP%] {margin-right: 118px;}\n.m-r-119[_ngcontent-%COMP%] {margin-right: 119px;}\n.m-r-120[_ngcontent-%COMP%] {margin-right: 120px;}\n.m-r-121[_ngcontent-%COMP%] {margin-right: 121px;}\n.m-r-122[_ngcontent-%COMP%] {margin-right: 122px;}\n.m-r-123[_ngcontent-%COMP%] {margin-right: 123px;}\n.m-r-124[_ngcontent-%COMP%] {margin-right: 124px;}\n.m-r-125[_ngcontent-%COMP%] {margin-right: 125px;}\n.m-r-126[_ngcontent-%COMP%] {margin-right: 126px;}\n.m-r-127[_ngcontent-%COMP%] {margin-right: 127px;}\n.m-r-128[_ngcontent-%COMP%] {margin-right: 128px;}\n.m-r-129[_ngcontent-%COMP%] {margin-right: 129px;}\n.m-r-130[_ngcontent-%COMP%] {margin-right: 130px;}\n.m-r-131[_ngcontent-%COMP%] {margin-right: 131px;}\n.m-r-132[_ngcontent-%COMP%] {margin-right: 132px;}\n.m-r-133[_ngcontent-%COMP%] {margin-right: 133px;}\n.m-r-134[_ngcontent-%COMP%] {margin-right: 134px;}\n.m-r-135[_ngcontent-%COMP%] {margin-right: 135px;}\n.m-r-136[_ngcontent-%COMP%] {margin-right: 136px;}\n.m-r-137[_ngcontent-%COMP%] {margin-right: 137px;}\n.m-r-138[_ngcontent-%COMP%] {margin-right: 138px;}\n.m-r-139[_ngcontent-%COMP%] {margin-right: 139px;}\n.m-r-140[_ngcontent-%COMP%] {margin-right: 140px;}\n.m-r-141[_ngcontent-%COMP%] {margin-right: 141px;}\n.m-r-142[_ngcontent-%COMP%] {margin-right: 142px;}\n.m-r-143[_ngcontent-%COMP%] {margin-right: 143px;}\n.m-r-144[_ngcontent-%COMP%] {margin-right: 144px;}\n.m-r-145[_ngcontent-%COMP%] {margin-right: 145px;}\n.m-r-146[_ngcontent-%COMP%] {margin-right: 146px;}\n.m-r-147[_ngcontent-%COMP%] {margin-right: 147px;}\n.m-r-148[_ngcontent-%COMP%] {margin-right: 148px;}\n.m-r-149[_ngcontent-%COMP%] {margin-right: 149px;}\n.m-r-150[_ngcontent-%COMP%] {margin-right: 150px;}\n.m-r-151[_ngcontent-%COMP%] {margin-right: 151px;}\n.m-r-152[_ngcontent-%COMP%] {margin-right: 152px;}\n.m-r-153[_ngcontent-%COMP%] {margin-right: 153px;}\n.m-r-154[_ngcontent-%COMP%] {margin-right: 154px;}\n.m-r-155[_ngcontent-%COMP%] {margin-right: 155px;}\n.m-r-156[_ngcontent-%COMP%] {margin-right: 156px;}\n.m-r-157[_ngcontent-%COMP%] {margin-right: 157px;}\n.m-r-158[_ngcontent-%COMP%] {margin-right: 158px;}\n.m-r-159[_ngcontent-%COMP%] {margin-right: 159px;}\n.m-r-160[_ngcontent-%COMP%] {margin-right: 160px;}\n.m-r-161[_ngcontent-%COMP%] {margin-right: 161px;}\n.m-r-162[_ngcontent-%COMP%] {margin-right: 162px;}\n.m-r-163[_ngcontent-%COMP%] {margin-right: 163px;}\n.m-r-164[_ngcontent-%COMP%] {margin-right: 164px;}\n.m-r-165[_ngcontent-%COMP%] {margin-right: 165px;}\n.m-r-166[_ngcontent-%COMP%] {margin-right: 166px;}\n.m-r-167[_ngcontent-%COMP%] {margin-right: 167px;}\n.m-r-168[_ngcontent-%COMP%] {margin-right: 168px;}\n.m-r-169[_ngcontent-%COMP%] {margin-right: 169px;}\n.m-r-170[_ngcontent-%COMP%] {margin-right: 170px;}\n.m-r-171[_ngcontent-%COMP%] {margin-right: 171px;}\n.m-r-172[_ngcontent-%COMP%] {margin-right: 172px;}\n.m-r-173[_ngcontent-%COMP%] {margin-right: 173px;}\n.m-r-174[_ngcontent-%COMP%] {margin-right: 174px;}\n.m-r-175[_ngcontent-%COMP%] {margin-right: 175px;}\n.m-r-176[_ngcontent-%COMP%] {margin-right: 176px;}\n.m-r-177[_ngcontent-%COMP%] {margin-right: 177px;}\n.m-r-178[_ngcontent-%COMP%] {margin-right: 178px;}\n.m-r-179[_ngcontent-%COMP%] {margin-right: 179px;}\n.m-r-180[_ngcontent-%COMP%] {margin-right: 180px;}\n.m-r-181[_ngcontent-%COMP%] {margin-right: 181px;}\n.m-r-182[_ngcontent-%COMP%] {margin-right: 182px;}\n.m-r-183[_ngcontent-%COMP%] {margin-right: 183px;}\n.m-r-184[_ngcontent-%COMP%] {margin-right: 184px;}\n.m-r-185[_ngcontent-%COMP%] {margin-right: 185px;}\n.m-r-186[_ngcontent-%COMP%] {margin-right: 186px;}\n.m-r-187[_ngcontent-%COMP%] {margin-right: 187px;}\n.m-r-188[_ngcontent-%COMP%] {margin-right: 188px;}\n.m-r-189[_ngcontent-%COMP%] {margin-right: 189px;}\n.m-r-190[_ngcontent-%COMP%] {margin-right: 190px;}\n.m-r-191[_ngcontent-%COMP%] {margin-right: 191px;}\n.m-r-192[_ngcontent-%COMP%] {margin-right: 192px;}\n.m-r-193[_ngcontent-%COMP%] {margin-right: 193px;}\n.m-r-194[_ngcontent-%COMP%] {margin-right: 194px;}\n.m-r-195[_ngcontent-%COMP%] {margin-right: 195px;}\n.m-r-196[_ngcontent-%COMP%] {margin-right: 196px;}\n.m-r-197[_ngcontent-%COMP%] {margin-right: 197px;}\n.m-r-198[_ngcontent-%COMP%] {margin-right: 198px;}\n.m-r-199[_ngcontent-%COMP%] {margin-right: 199px;}\n.m-r-200[_ngcontent-%COMP%] {margin-right: 200px;}\n.m-r-201[_ngcontent-%COMP%] {margin-right: 201px;}\n.m-r-202[_ngcontent-%COMP%] {margin-right: 202px;}\n.m-r-203[_ngcontent-%COMP%] {margin-right: 203px;}\n.m-r-204[_ngcontent-%COMP%] {margin-right: 204px;}\n.m-r-205[_ngcontent-%COMP%] {margin-right: 205px;}\n.m-r-206[_ngcontent-%COMP%] {margin-right: 206px;}\n.m-r-207[_ngcontent-%COMP%] {margin-right: 207px;}\n.m-r-208[_ngcontent-%COMP%] {margin-right: 208px;}\n.m-r-209[_ngcontent-%COMP%] {margin-right: 209px;}\n.m-r-210[_ngcontent-%COMP%] {margin-right: 210px;}\n.m-r-211[_ngcontent-%COMP%] {margin-right: 211px;}\n.m-r-212[_ngcontent-%COMP%] {margin-right: 212px;}\n.m-r-213[_ngcontent-%COMP%] {margin-right: 213px;}\n.m-r-214[_ngcontent-%COMP%] {margin-right: 214px;}\n.m-r-215[_ngcontent-%COMP%] {margin-right: 215px;}\n.m-r-216[_ngcontent-%COMP%] {margin-right: 216px;}\n.m-r-217[_ngcontent-%COMP%] {margin-right: 217px;}\n.m-r-218[_ngcontent-%COMP%] {margin-right: 218px;}\n.m-r-219[_ngcontent-%COMP%] {margin-right: 219px;}\n.m-r-220[_ngcontent-%COMP%] {margin-right: 220px;}\n.m-r-221[_ngcontent-%COMP%] {margin-right: 221px;}\n.m-r-222[_ngcontent-%COMP%] {margin-right: 222px;}\n.m-r-223[_ngcontent-%COMP%] {margin-right: 223px;}\n.m-r-224[_ngcontent-%COMP%] {margin-right: 224px;}\n.m-r-225[_ngcontent-%COMP%] {margin-right: 225px;}\n.m-r-226[_ngcontent-%COMP%] {margin-right: 226px;}\n.m-r-227[_ngcontent-%COMP%] {margin-right: 227px;}\n.m-r-228[_ngcontent-%COMP%] {margin-right: 228px;}\n.m-r-229[_ngcontent-%COMP%] {margin-right: 229px;}\n.m-r-230[_ngcontent-%COMP%] {margin-right: 230px;}\n.m-r-231[_ngcontent-%COMP%] {margin-right: 231px;}\n.m-r-232[_ngcontent-%COMP%] {margin-right: 232px;}\n.m-r-233[_ngcontent-%COMP%] {margin-right: 233px;}\n.m-r-234[_ngcontent-%COMP%] {margin-right: 234px;}\n.m-r-235[_ngcontent-%COMP%] {margin-right: 235px;}\n.m-r-236[_ngcontent-%COMP%] {margin-right: 236px;}\n.m-r-237[_ngcontent-%COMP%] {margin-right: 237px;}\n.m-r-238[_ngcontent-%COMP%] {margin-right: 238px;}\n.m-r-239[_ngcontent-%COMP%] {margin-right: 239px;}\n.m-r-240[_ngcontent-%COMP%] {margin-right: 240px;}\n.m-r-241[_ngcontent-%COMP%] {margin-right: 241px;}\n.m-r-242[_ngcontent-%COMP%] {margin-right: 242px;}\n.m-r-243[_ngcontent-%COMP%] {margin-right: 243px;}\n.m-r-244[_ngcontent-%COMP%] {margin-right: 244px;}\n.m-r-245[_ngcontent-%COMP%] {margin-right: 245px;}\n.m-r-246[_ngcontent-%COMP%] {margin-right: 246px;}\n.m-r-247[_ngcontent-%COMP%] {margin-right: 247px;}\n.m-r-248[_ngcontent-%COMP%] {margin-right: 248px;}\n.m-r-249[_ngcontent-%COMP%] {margin-right: 249px;}\n.m-r-250[_ngcontent-%COMP%] {margin-right: 250px;}\n.m-l-r-auto[_ngcontent-%COMP%] {margin-left: auto;\tmargin-right: auto;}\n.m-l-auto[_ngcontent-%COMP%] {margin-left: auto;}\n.m-r-auto[_ngcontent-%COMP%] {margin-right: auto;}\n\n\n.text-white[_ngcontent-%COMP%] {color: white;}\n.text-black[_ngcontent-%COMP%] {color: black;}\n.text-hov-white[_ngcontent-%COMP%]:hover {color: white;}\n\n.text-up[_ngcontent-%COMP%] {text-transform: uppercase;}\n\n.text-center[_ngcontent-%COMP%] {text-align: center;}\n.text-left[_ngcontent-%COMP%] {text-align: left;}\n.text-right[_ngcontent-%COMP%] {text-align: right;}\n.text-middle[_ngcontent-%COMP%] {vertical-align: middle;}\n\n.lh-1-0[_ngcontent-%COMP%] {line-height: 1.0;}\n.lh-1-1[_ngcontent-%COMP%] {line-height: 1.1;}\n.lh-1-2[_ngcontent-%COMP%] {line-height: 1.2;}\n.lh-1-3[_ngcontent-%COMP%] {line-height: 1.3;}\n.lh-1-4[_ngcontent-%COMP%] {line-height: 1.4;}\n.lh-1-5[_ngcontent-%COMP%] {line-height: 1.5;}\n.lh-1-6[_ngcontent-%COMP%] {line-height: 1.6;}\n.lh-1-7[_ngcontent-%COMP%] {line-height: 1.7;}\n.lh-1-8[_ngcontent-%COMP%] {line-height: 1.8;}\n.lh-1-9[_ngcontent-%COMP%] {line-height: 1.9;}\n.lh-2-0[_ngcontent-%COMP%] {line-height: 2.0;}\n.lh-2-1[_ngcontent-%COMP%] {line-height: 2.1;}\n.lh-2-2[_ngcontent-%COMP%] {line-height: 2.2;}\n.lh-2-3[_ngcontent-%COMP%] {line-height: 2.3;}\n.lh-2-4[_ngcontent-%COMP%] {line-height: 2.4;}\n.lh-2-5[_ngcontent-%COMP%] {line-height: 2.5;}\n.lh-2-6[_ngcontent-%COMP%] {line-height: 2.6;}\n.lh-2-7[_ngcontent-%COMP%] {line-height: 2.7;}\n.lh-2-8[_ngcontent-%COMP%] {line-height: 2.8;}\n.lh-2-9[_ngcontent-%COMP%] {line-height: 2.9;}\n\n\n.dis-none[_ngcontent-%COMP%] {display: none;}\n.dis-block[_ngcontent-%COMP%] {display: block;}\n.dis-inline[_ngcontent-%COMP%] {display: inline;}\n.dis-inline-block[_ngcontent-%COMP%] {display: inline-block;}\n.dis-flex[_ngcontent-%COMP%] {\n\tdisplay: flex;\n}\n\n.pos-relative[_ngcontent-%COMP%] {position: relative;}\n.pos-absolute[_ngcontent-%COMP%] {position: absolute;}\n.pos-fixed[_ngcontent-%COMP%] {position: fixed;}\n\n.float-l[_ngcontent-%COMP%] {float: left;}\n.float-r[_ngcontent-%COMP%] {float: right;}\n\n.sizefull[_ngcontent-%COMP%] {\n\twidth: 100%;\n\theight: 100%;\n}\n.w-full[_ngcontent-%COMP%] {width: 100%;}\n.h-full[_ngcontent-%COMP%] {height: 100%;}\n.max-w-full[_ngcontent-%COMP%] {max-width: 100%;}\n.max-h-full[_ngcontent-%COMP%] {max-height: 100%;}\n.min-w-full[_ngcontent-%COMP%] {min-width: 100%;}\n.min-h-full[_ngcontent-%COMP%] {min-height: 100%;}\n\n.top-0[_ngcontent-%COMP%] {top: 0;}\n.bottom-0[_ngcontent-%COMP%] {bottom: 0;}\n.left-0[_ngcontent-%COMP%] {left: 0;}\n.right-0[_ngcontent-%COMP%] {right: 0;}\n.top-auto[_ngcontent-%COMP%] {top: auto;}\n.bottom-auto[_ngcontent-%COMP%] {bottom: auto;}\n.left-auto[_ngcontent-%COMP%] {left: auto;}\n.right-auto[_ngcontent-%COMP%] {right: auto;}\n\n.op-0-0[_ngcontent-%COMP%] {opacity: 0;}\n.op-0-1[_ngcontent-%COMP%] {opacity: 0.1;}\n.op-0-2[_ngcontent-%COMP%] {opacity: 0.2;}\n.op-0-3[_ngcontent-%COMP%] {opacity: 0.3;}\n.op-0-4[_ngcontent-%COMP%] {opacity: 0.4;}\n.op-0-5[_ngcontent-%COMP%] {opacity: 0.5;}\n.op-0-6[_ngcontent-%COMP%] {opacity: 0.6;}\n.op-0-7[_ngcontent-%COMP%] {opacity: 0.7;}\n.op-0-8[_ngcontent-%COMP%] {opacity: 0.8;}\n.op-0-9[_ngcontent-%COMP%] {opacity: 0.9;}\n.op-1-0[_ngcontent-%COMP%] {opacity: 1;}\n\n.bgwhite[_ngcontent-%COMP%] {background-color: white;}\n.bgblack[_ngcontent-%COMP%] {background-color: black;}\n\n.wrap-pic-w[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {width: 100%;}\n.wrap-pic-max-w[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {max-width: 100%;}\n\n.wrap-pic-h[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {height: 100%;}\n.wrap-pic-max-h[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {max-height: 100%;}\n\n.wrap-pic-cir[_ngcontent-%COMP%] {\n\tborder-radius: 50%;\n\toverflow: hidden;\n}\n.wrap-pic-cir[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\twidth: 100%;\n}\n\n.hov-pointer[_ngcontent-%COMP%]:hover {cursor: pointer;}\n\n.hov-img-zoom[_ngcontent-%COMP%] {\n\tdisplay: block;\n\toverflow: hidden;\n}\n.hov-img-zoom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n\twidth: 100%;\n transition: all 0.6s;\n}\n.hov-img-zoom[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\ttransform: scale(1.1);\n}\n\n.bo-cir[_ngcontent-%COMP%] {border-radius: 50%;}\n.of-hidden[_ngcontent-%COMP%] {overflow: hidden;}\n.visible-false[_ngcontent-%COMP%] {visibility: hidden;}\n.visible-true[_ngcontent-%COMP%] {visibility: visible;}\n\n.trans-0-1[_ngcontent-%COMP%] {\n transition: all 0.1s;\n}\n.trans-0-2[_ngcontent-%COMP%] {\n transition: all 0.2s;\n}\n.trans-0-3[_ngcontent-%COMP%] {\n transition: all 0.3s;\n}\n.trans-0-4[_ngcontent-%COMP%] {\n transition: all 0.4s;\n}\n.trans-0-5[_ngcontent-%COMP%] {\n transition: all 0.5s;\n}\n.trans-0-6[_ngcontent-%COMP%] {\n transition: all 0.6s;\n}\n.trans-0-9[_ngcontent-%COMP%] {\n transition: all 0.9s;\n}\n.trans-1-0[_ngcontent-%COMP%] {\n transition: all 1s;\n}\n\n\n\n.flex-w[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\t-o-flex-wrap: wrap;\n\tflex-wrap: wrap;\n}\n\n.flex-l[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tjustify-content: flex-start;\n}\n.flex-r[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n}\n.flex-c[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.flex-sa[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tjustify-content: space-around;\n}\n.flex-sb[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.flex-t[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\t-ms-align-items: flex-start;\n\talign-items: flex-start;\n}\n.flex-b[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\t-ms-align-items: flex-end;\n\talign-items: flex-end;\n}\n.flex-m[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\t-ms-align-items: center;\n\talign-items: center;\n}\n.flex-str[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\t-ms-align-items: stretch;\n\talign-items: stretch;\n}\n\n.flex-row[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\t-moz-flex-direction: row;\n\t-o-flex-direction: row;\n\tflex-direction: row;\n}\n.flex-row-rev[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\t-moz-flex-direction: row-reverse;\n\t-o-flex-direction: row-reverse;\n\tflex-direction: row-reverse;\n}\n.flex-col[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\t-moz-flex-direction: column;\n\t-o-flex-direction: column;\n\tflex-direction: column;\n}\n.flex-col-rev[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\t-moz-flex-direction: column-reverse;\n\t-o-flex-direction: column-reverse;\n\tflex-direction: column-reverse;\n}\n\n.flex-c-m[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tjustify-content: center;\n\t-ms-align-items: center;\n\talign-items: center;\n}\n.flex-c-t[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tjustify-content: center;\n\t-ms-align-items: flex-start;\n\talign-items: flex-start;\n}\n.flex-c-b[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tjustify-content: center;\n\t-ms-align-items: flex-end;\n\talign-items: flex-end;\n}\n.flex-c-str[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tjustify-content: center;\n\t-ms-align-items: stretch;\n\talign-items: stretch;\n}\n.flex-l-m[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\t-ms-align-items: center;\n\talign-items: center;\n}\n.flex-r-m[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\t-ms-align-items: center;\n\talign-items: center;\n}\n.flex-sa-m[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tjustify-content: space-around;\n\t-ms-align-items: center;\n\talign-items: center;\n}\n.flex-sb-m[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\t-ms-align-items: center;\n\talign-items: center;\n}\n\n.flex-col-l[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\t-moz-flex-direction: column;\n\t-o-flex-direction: column;\n\tflex-direction: column;\n\t-ms-align-items: flex-start;\n\talign-items: flex-start;\n}\n.flex-col-r[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\t-moz-flex-direction: column;\n\t-o-flex-direction: column;\n\tflex-direction: column;\n\t-ms-align-items: flex-end;\n\talign-items: flex-end;\n}\n.flex-col-c[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\t-moz-flex-direction: column;\n\t-o-flex-direction: column;\n\tflex-direction: column;\n\t-ms-align-items: center;\n\talign-items: center;\n}\n.flex-col-l-m[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\t-moz-flex-direction: column;\n\t-o-flex-direction: column;\n\tflex-direction: column;\n\t-ms-align-items: flex-start;\n\talign-items: flex-start;\n\tjustify-content: center;\n}\n.flex-col-r-m[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\t-moz-flex-direction: column;\n\t-o-flex-direction: column;\n\tflex-direction: column;\n\t-ms-align-items: flex-end;\n\talign-items: flex-end;\n\tjustify-content: center;\n}\n.flex-col-c-m[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\t-moz-flex-direction: column;\n\t-o-flex-direction: column;\n\tflex-direction: column;\n\t-ms-align-items: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n.flex-col-str[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\t-moz-flex-direction: column;\n\t-o-flex-direction: column;\n\tflex-direction: column;\n\t-ms-align-items: stretch;\n\talign-items: stretch;\n}\n.flex-col-sb[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\t-moz-flex-direction: column;\n\t-o-flex-direction: column;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.flex-col-rev-l[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\t-moz-flex-direction: column-reverse;\n\t-o-flex-direction: column-reverse;\n\tflex-direction: column-reverse;\n\t-ms-align-items: flex-start;\n\talign-items: flex-start;\n}\n.flex-col-rev-r[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\t-moz-flex-direction: column-reverse;\n\t-o-flex-direction: column-reverse;\n\tflex-direction: column-reverse;\n\t-ms-align-items: flex-end;\n\talign-items: flex-end;\n}\n.flex-col-rev-c[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\t-moz-flex-direction: column-reverse;\n\t-o-flex-direction: column-reverse;\n\tflex-direction: column-reverse;\n\t-ms-align-items: center;\n\talign-items: center;\n}\n.flex-col-rev-str[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\t-moz-flex-direction: column-reverse;\n\t-o-flex-direction: column-reverse;\n\tflex-direction: column-reverse;\n\t-ms-align-items: stretch;\n\talign-items: stretch;\n}\n\n.ab-c-m[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n}\n.ab-c-t[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n}\n.ab-c-b[_ngcontent-%COMP%] {\n\tposition: absolute;\n\tbottom: 0px;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n}\n.ab-l-m[_ngcontent-%COMP%] {\n\tposition: absolute;\n\tleft: 0px;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n}\n.ab-r-m[_ngcontent-%COMP%] {\n\tposition: absolute;\n\tright: 0px;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n}\n.ab-t-l[_ngcontent-%COMP%] {\n\tposition: absolute;\n\tleft: 0px;\n\ttop: 0px;\n}\n.ab-t-r[_ngcontent-%COMP%] {\n\tposition: absolute;\n\tright: 0px;\n\ttop: 0px;\n}\n.ab-b-l[_ngcontent-%COMP%] {\n\tposition: absolute;\n\tleft: 0px;\n\tbottom: 0px;\n}\n.ab-b-r[_ngcontent-%COMP%] {\n\tposition: absolute;\n\tright: 0px;\n\tbottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vdXRpbC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUM7QUFDRCxPQUFPLGNBQWMsQ0FBQztBQUN0QixPQUFPLGNBQWMsQ0FBQztBQUN0QixPQUFPLGNBQWMsQ0FBQztBQUN0QixPQUFPLGNBQWMsQ0FBQztBQUN0QixPQUFPLGNBQWMsQ0FBQztBQUN0QixPQUFPLGNBQWMsQ0FBQztBQUN0QixPQUFPLGNBQWMsQ0FBQztBQUN0QixPQUFPLGNBQWMsQ0FBQztBQUN0QixPQUFPLGNBQWMsQ0FBQztBQUN0QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFFMUI7O0NBRUM7QUFDRCxRQUFRLGdCQUFnQixDQUFDO0FBQ3pCLFFBQVEsZ0JBQWdCLENBQUM7QUFDekIsUUFBUSxnQkFBZ0IsQ0FBQztBQUN6QixRQUFRLGdCQUFnQixDQUFDO0FBQ3pCLFFBQVEsZ0JBQWdCLENBQUM7QUFDekIsUUFBUSxnQkFBZ0IsQ0FBQztBQUN6QixRQUFRLGdCQUFnQixDQUFDO0FBQ3pCLFFBQVEsZ0JBQWdCLENBQUM7QUFDekIsUUFBUSxnQkFBZ0IsQ0FBQztBQUN6QixRQUFRLGdCQUFnQixDQUFDO0FBQ3pCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsUUFBUSxtQkFBbUIsQ0FBQztBQUM1QixRQUFRLG1CQUFtQixDQUFDO0FBQzVCLFFBQVEsbUJBQW1CLENBQUM7QUFDNUIsUUFBUSxtQkFBbUIsQ0FBQztBQUM1QixRQUFRLG1CQUFtQixDQUFDO0FBQzVCLFFBQVEsbUJBQW1CLENBQUM7QUFDNUIsUUFBUSxtQkFBbUIsQ0FBQztBQUM1QixRQUFRLG1CQUFtQixDQUFDO0FBQzVCLFFBQVEsbUJBQW1CLENBQUM7QUFDNUIsUUFBUSxtQkFBbUIsQ0FBQztBQUM1QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFFBQVEsaUJBQWlCLENBQUM7QUFDMUIsUUFBUSxpQkFBaUIsQ0FBQztBQUMxQixRQUFRLGlCQUFpQixDQUFDO0FBQzFCLFFBQVEsaUJBQWlCLENBQUM7QUFDMUIsUUFBUSxpQkFBaUIsQ0FBQztBQUMxQixRQUFRLGlCQUFpQixDQUFDO0FBQzFCLFFBQVEsaUJBQWlCLENBQUM7QUFDMUIsUUFBUSxpQkFBaUIsQ0FBQztBQUMxQixRQUFRLGlCQUFpQixDQUFDO0FBQzFCLFFBQVEsaUJBQWlCLENBQUM7QUFDMUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixRQUFRLGtCQUFrQixDQUFDO0FBQzNCLFFBQVEsa0JBQWtCLENBQUM7QUFDM0IsUUFBUSxrQkFBa0IsQ0FBQztBQUMzQixRQUFRLGtCQUFrQixDQUFDO0FBQzNCLFFBQVEsa0JBQWtCLENBQUM7QUFDM0IsUUFBUSxrQkFBa0IsQ0FBQztBQUMzQixRQUFRLGtCQUFrQixDQUFDO0FBQzNCLFFBQVEsa0JBQWtCLENBQUM7QUFDM0IsUUFBUSxrQkFBa0IsQ0FBQztBQUMzQixRQUFRLGtCQUFrQixDQUFDO0FBQzNCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFFL0I7O0NBRUM7QUFDRCxRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFFBQVEsa0JBQWtCLENBQUM7QUFDM0IsUUFBUSxrQkFBa0IsQ0FBQztBQUMzQixRQUFRLGtCQUFrQixDQUFDO0FBQzNCLFFBQVEsa0JBQWtCLENBQUM7QUFDM0IsUUFBUSxrQkFBa0IsQ0FBQztBQUMzQixRQUFRLGtCQUFrQixDQUFDO0FBQzNCLFFBQVEsa0JBQWtCLENBQUM7QUFDM0IsUUFBUSxrQkFBa0IsQ0FBQztBQUMzQixRQUFRLGtCQUFrQixDQUFDO0FBQzNCLFFBQVEsa0JBQWtCLENBQUM7QUFDM0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixRQUFRLGdCQUFnQixDQUFDO0FBQ3pCLFFBQVEsZ0JBQWdCLENBQUM7QUFDekIsUUFBUSxnQkFBZ0IsQ0FBQztBQUN6QixRQUFRLGdCQUFnQixDQUFDO0FBQ3pCLFFBQVEsZ0JBQWdCLENBQUM7QUFDekIsUUFBUSxnQkFBZ0IsQ0FBQztBQUN6QixRQUFRLGdCQUFnQixDQUFDO0FBQ3pCLFFBQVEsZ0JBQWdCLENBQUM7QUFDekIsUUFBUSxnQkFBZ0IsQ0FBQztBQUN6QixRQUFRLGdCQUFnQixDQUFDO0FBQ3pCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsUUFBUSxpQkFBaUIsQ0FBQztBQUMxQixRQUFRLGlCQUFpQixDQUFDO0FBQzFCLFFBQVEsaUJBQWlCLENBQUM7QUFDMUIsUUFBUSxpQkFBaUIsQ0FBQztBQUMxQixRQUFRLGlCQUFpQixDQUFDO0FBQzFCLFFBQVEsaUJBQWlCLENBQUM7QUFDMUIsUUFBUSxpQkFBaUIsQ0FBQztBQUMxQixRQUFRLGlCQUFpQixDQUFDO0FBQzFCLFFBQVEsaUJBQWlCLENBQUM7QUFDMUIsUUFBUSxpQkFBaUIsQ0FBQztBQUMxQixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLGFBQWEsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7QUFDbkQsV0FBVyxpQkFBaUIsQ0FBQztBQUM3QixXQUFXLGtCQUFrQixDQUFDO0FBSTlCOztDQUVDO0FBQ0QseUNBQXlDO0FBQ3pDLGFBQWEsWUFBWSxDQUFDO0FBQzFCLGFBQWEsWUFBWSxDQUFDO0FBRTFCLHVCQUF1QixZQUFZLENBQUM7QUFFcEMseUNBQXlDO0FBQ3pDLFVBQVUseUJBQXlCLENBQUM7QUFFcEMseUNBQXlDO0FBQ3pDLGNBQWMsa0JBQWtCLENBQUM7QUFDakMsWUFBWSxnQkFBZ0IsQ0FBQztBQUM3QixhQUFhLGlCQUFpQixDQUFDO0FBQy9CLGNBQWMsc0JBQXNCLENBQUM7QUFFckMseUNBQXlDO0FBQ3pDLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQU0xQjs7Q0FFQztBQUVEOztDQUVDO0FBQ0QsV0FBVyxhQUFhLENBQUM7QUFDekIsWUFBWSxjQUFjLENBQUM7QUFDM0IsYUFBYSxlQUFlLENBQUM7QUFDN0IsbUJBQW1CLHFCQUFxQixDQUFDO0FBQ3pDO0NBS0MsYUFBYTtBQUNkO0FBRUE7O0NBRUM7QUFDRCxlQUFlLGtCQUFrQixDQUFDO0FBQ2xDLGVBQWUsa0JBQWtCLENBQUM7QUFDbEMsWUFBWSxlQUFlLENBQUM7QUFFNUI7O0NBRUM7QUFDRCxVQUFVLFdBQVcsQ0FBQztBQUN0QixVQUFVLFlBQVksQ0FBQztBQUd2Qjs7Q0FFQztBQUNEO0NBQ0MsV0FBVztDQUNYLFlBQVk7QUFDYjtBQUNBLFNBQVMsV0FBVyxDQUFDO0FBQ3JCLFNBQVMsWUFBWSxDQUFDO0FBQ3RCLGFBQWEsZUFBZSxDQUFDO0FBQzdCLGFBQWEsZ0JBQWdCLENBQUM7QUFDOUIsYUFBYSxlQUFlLENBQUM7QUFDN0IsYUFBYSxnQkFBZ0IsQ0FBQztBQUU5Qjs7Q0FFQztBQUNELFFBQVEsTUFBTSxDQUFDO0FBQ2YsV0FBVyxTQUFTLENBQUM7QUFDckIsU0FBUyxPQUFPLENBQUM7QUFDakIsVUFBVSxRQUFRLENBQUM7QUFFbkIsV0FBVyxTQUFTLENBQUM7QUFDckIsY0FBYyxZQUFZLENBQUM7QUFDM0IsWUFBWSxVQUFVLENBQUM7QUFDdkIsYUFBYSxXQUFXLENBQUM7QUFHekI7O0NBRUM7QUFDRCxTQUFTLFVBQVUsQ0FBQztBQUNwQixTQUFTLFlBQVksQ0FBQztBQUN0QixTQUFTLFlBQVksQ0FBQztBQUN0QixTQUFTLFlBQVksQ0FBQztBQUN0QixTQUFTLFlBQVksQ0FBQztBQUN0QixTQUFTLFlBQVksQ0FBQztBQUN0QixTQUFTLFlBQVksQ0FBQztBQUN0QixTQUFTLFlBQVksQ0FBQztBQUN0QixTQUFTLFlBQVksQ0FBQztBQUN0QixTQUFTLFlBQVksQ0FBQztBQUN0QixTQUFTLFVBQVUsQ0FBQztBQUVwQjs7Q0FFQztBQUNELFVBQVUsdUJBQXVCLENBQUM7QUFDbEMsVUFBVSx1QkFBdUIsQ0FBQztBQUlsQzs7Q0FFQztBQUNELGlCQUFpQixXQUFXLENBQUM7QUFDN0IscUJBQXFCLGVBQWUsQ0FBQztBQUVyQyx5Q0FBeUM7QUFDekMsaUJBQWlCLFlBQVksQ0FBQztBQUM5QixxQkFBcUIsZ0JBQWdCLENBQUM7QUFFdEMseUNBQXlDO0FBQ3pDO0NBQ0Msa0JBQWtCO0NBQ2xCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBSUE7O0NBRUM7QUFDRCxvQkFBb0IsZUFBZSxDQUFDO0FBRXBDLHlDQUF5QztBQUN6QztDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFdBQVc7Q0FJUixvQkFBb0I7QUFDeEI7QUFDQTtDQUtDLHFCQUFxQjtBQUN0QjtBQUlBOztDQUVDO0FBQ0QsU0FBUyxrQkFBa0IsQ0FBQztBQUU1QixZQUFZLGdCQUFnQixDQUFDO0FBRTdCLGdCQUFnQixrQkFBa0IsQ0FBQztBQUNuQyxlQUFlLG1CQUFtQixDQUFDO0FBS25DOztDQUVDO0FBQ0Q7Q0FJSSxvQkFBb0I7QUFDeEI7QUFDQTtDQUlJLG9CQUFvQjtBQUN4QjtBQUNBO0NBSUksb0JBQW9CO0FBQ3hCO0FBQ0E7Q0FJSSxvQkFBb0I7QUFDeEI7QUFDQTtDQUlJLG9CQUFvQjtBQUN4QjtBQUNBO0NBSUksb0JBQW9CO0FBQ3hCO0FBQ0E7Q0FJSSxvQkFBb0I7QUFDeEI7QUFDQTtDQUlJLGtCQUFrQjtBQUN0QjtBQUlBOztDQUVDO0FBRUQ7O0NBRUM7QUFDRCx5Q0FBeUM7QUFDekM7Q0FLQyxhQUFhO0NBSWIsa0JBQWtCO0NBQ2xCLGVBQWU7QUFDaEI7QUFFQSx5Q0FBeUM7QUFDekM7Q0FLQyxhQUFhO0NBQ2IsMkJBQTJCO0FBQzVCO0FBRUE7Q0FLQyxhQUFhO0NBQ2IseUJBQXlCO0FBQzFCO0FBRUE7Q0FLQyxhQUFhO0NBQ2IsdUJBQXVCO0FBQ3hCO0FBRUE7Q0FLQyxhQUFhO0NBQ2IsNkJBQTZCO0FBQzlCO0FBRUE7Q0FLQyxhQUFhO0NBQ2IsOEJBQThCO0FBQy9CO0FBRUEseUNBQXlDO0FBQ3pDO0NBS0MsYUFBYTtDQUNiLDJCQUEyQjtDQUMzQix1QkFBdUI7QUFDeEI7QUFFQTtDQUtDLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIscUJBQXFCO0FBQ3RCO0FBRUE7Q0FLQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjtBQUVBO0NBS0MsYUFBYTtDQUNiLHdCQUF3QjtDQUN4QixvQkFBb0I7QUFDckI7QUFFQSx5Q0FBeUM7QUFDekM7Q0FLQyxhQUFhO0NBRWIsd0JBQXdCO0NBRXhCLHNCQUFzQjtDQUN0QixtQkFBbUI7QUFDcEI7QUFFQTtDQUtDLGFBQWE7Q0FFYixnQ0FBZ0M7Q0FFaEMsOEJBQThCO0NBQzlCLDJCQUEyQjtBQUM1QjtBQUVBO0NBS0MsYUFBYTtDQUViLDJCQUEyQjtDQUUzQix5QkFBeUI7Q0FDekIsc0JBQXNCO0FBQ3ZCO0FBRUE7Q0FLQyxhQUFhO0NBRWIsbUNBQW1DO0NBRW5DLGlDQUFpQztDQUNqQyw4QkFBOEI7QUFDL0I7QUFFQSx5Q0FBeUM7QUFDekM7Q0FLQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7QUFFQTtDQUtDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsMkJBQTJCO0NBQzNCLHVCQUF1QjtBQUN4QjtBQUVBO0NBS0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2Qix5QkFBeUI7Q0FDekIscUJBQXFCO0FBQ3RCO0FBRUE7Q0FLQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLHdCQUF3QjtDQUN4QixvQkFBb0I7QUFDckI7QUFFQTtDQUtDLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjtBQUVBO0NBS0MsYUFBYTtDQUNiLHlCQUF5QjtDQUN6Qix1QkFBdUI7Q0FDdkIsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FLQyxhQUFhO0NBQ2IsNkJBQTZCO0NBQzdCLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7QUFFQTtDQUtDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjtBQUVBLHlDQUF5QztBQUN6QztDQUtDLGFBQWE7Q0FFYiwyQkFBMkI7Q0FFM0IseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QiwyQkFBMkI7Q0FDM0IsdUJBQXVCO0FBQ3hCO0FBRUE7Q0FLQyxhQUFhO0NBRWIsMkJBQTJCO0NBRTNCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIseUJBQXlCO0NBQ3pCLHFCQUFxQjtBQUN0QjtBQUVBO0NBS0MsYUFBYTtDQUViLDJCQUEyQjtDQUUzQix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7QUFFQTtDQUtDLGFBQWE7Q0FFYiwyQkFBMkI7Q0FFM0IseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QiwyQkFBMkI7Q0FDM0IsdUJBQXVCO0NBQ3ZCLHVCQUF1QjtBQUN4QjtBQUVBO0NBS0MsYUFBYTtDQUViLDJCQUEyQjtDQUUzQix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLHlCQUF5QjtDQUN6QixxQkFBcUI7Q0FDckIsdUJBQXVCO0FBQ3hCO0FBRUE7Q0FLQyxhQUFhO0NBRWIsMkJBQTJCO0NBRTNCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEI7QUFFQTtDQUtDLGFBQWE7Q0FFYiwyQkFBMkI7Q0FFM0IseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0Qix3QkFBd0I7Q0FDeEIsb0JBQW9CO0FBQ3JCO0FBRUE7Q0FLQyxhQUFhO0NBRWIsMkJBQTJCO0NBRTNCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsOEJBQThCO0FBQy9CO0FBRUEseUNBQXlDO0FBQ3pDO0NBS0MsYUFBYTtDQUViLG1DQUFtQztDQUVuQyxpQ0FBaUM7Q0FDakMsOEJBQThCO0NBQzlCLDJCQUEyQjtDQUMzQix1QkFBdUI7QUFDeEI7QUFFQTtDQUtDLGFBQWE7Q0FFYixtQ0FBbUM7Q0FFbkMsaUNBQWlDO0NBQ2pDLDhCQUE4QjtDQUM5Qix5QkFBeUI7Q0FDekIscUJBQXFCO0FBQ3RCO0FBRUE7Q0FLQyxhQUFhO0NBRWIsbUNBQW1DO0NBRW5DLGlDQUFpQztDQUNqQyw4QkFBOEI7Q0FDOUIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjtBQUVBO0NBS0MsYUFBYTtDQUViLG1DQUFtQztDQUVuQyxpQ0FBaUM7Q0FDakMsOEJBQThCO0NBQzlCLHdCQUF3QjtDQUN4QixvQkFBb0I7QUFDckI7QUFHQTs7Q0FFQztBQUNEO0NBQ0Msa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixTQUFTO0NBS1QsZ0NBQWdDO0FBQ2pDO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFNBQVM7Q0FLVCwyQkFBMkI7QUFDNUI7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsU0FBUztDQUtULDJCQUEyQjtBQUM1QjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxRQUFRO0NBS1IsMkJBQTJCO0FBQzVCO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFFBQVE7Q0FLUiwyQkFBMkI7QUFDNUI7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsUUFBUTtBQUNUO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFFBQVE7QUFDVDtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxXQUFXO0FBQ1o7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsV0FBVztBQUNaIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vdXRpbC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlsgRk9OVCBTSVpFIF1cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4qL1xuLmZzLTEge2ZvbnQtc2l6ZTogMXB4O31cbi5mcy0yIHtmb250LXNpemU6IDJweDt9XG4uZnMtMyB7Zm9udC1zaXplOiAzcHg7fVxuLmZzLTQge2ZvbnQtc2l6ZTogNHB4O31cbi5mcy01IHtmb250LXNpemU6IDVweDt9XG4uZnMtNiB7Zm9udC1zaXplOiA2cHg7fVxuLmZzLTcge2ZvbnQtc2l6ZTogN3B4O31cbi5mcy04IHtmb250LXNpemU6IDhweDt9XG4uZnMtOSB7Zm9udC1zaXplOiA5cHg7fVxuLmZzLTEwIHtmb250LXNpemU6IDEwcHg7fVxuLmZzLTExIHtmb250LXNpemU6IDExcHg7fVxuLmZzLTEyIHtmb250LXNpemU6IDEycHg7fVxuLmZzLTEzIHtmb250LXNpemU6IDEzcHg7fVxuLmZzLTE0IHtmb250LXNpemU6IDE0cHg7fVxuLmZzLTE1IHtmb250LXNpemU6IDE1cHg7fVxuLmZzLTE2IHtmb250LXNpemU6IDE2cHg7fVxuLmZzLTE3IHtmb250LXNpemU6IDE3cHg7fVxuLmZzLTE4IHtmb250LXNpemU6IDE4cHg7fVxuLmZzLTE5IHtmb250LXNpemU6IDE5cHg7fVxuLmZzLTIwIHtmb250LXNpemU6IDIwcHg7fVxuLmZzLTIxIHtmb250LXNpemU6IDIxcHg7fVxuLmZzLTIyIHtmb250LXNpemU6IDIycHg7fVxuLmZzLTIzIHtmb250LXNpemU6IDIzcHg7fVxuLmZzLTI0IHtmb250LXNpemU6IDI0cHg7fVxuLmZzLTI1IHtmb250LXNpemU6IDI1cHg7fVxuLmZzLTI2IHtmb250LXNpemU6IDI2cHg7fVxuLmZzLTI3IHtmb250LXNpemU6IDI3cHg7fVxuLmZzLTI4IHtmb250LXNpemU6IDI4cHg7fVxuLmZzLTI5IHtmb250LXNpemU6IDI5cHg7fVxuLmZzLTMwIHtmb250LXNpemU6IDMwcHg7fVxuLmZzLTMxIHtmb250LXNpemU6IDMxcHg7fVxuLmZzLTMyIHtmb250LXNpemU6IDMycHg7fVxuLmZzLTMzIHtmb250LXNpemU6IDMzcHg7fVxuLmZzLTM0IHtmb250LXNpemU6IDM0cHg7fVxuLmZzLTM1IHtmb250LXNpemU6IDM1cHg7fVxuLmZzLTM2IHtmb250LXNpemU6IDM2cHg7fVxuLmZzLTM3IHtmb250LXNpemU6IDM3cHg7fVxuLmZzLTM4IHtmb250LXNpemU6IDM4cHg7fVxuLmZzLTM5IHtmb250LXNpemU6IDM5cHg7fVxuLmZzLTQwIHtmb250LXNpemU6IDQwcHg7fVxuLmZzLTQxIHtmb250LXNpemU6IDQxcHg7fVxuLmZzLTQyIHtmb250LXNpemU6IDQycHg7fVxuLmZzLTQzIHtmb250LXNpemU6IDQzcHg7fVxuLmZzLTQ0IHtmb250LXNpemU6IDQ0cHg7fVxuLmZzLTQ1IHtmb250LXNpemU6IDQ1cHg7fVxuLmZzLTQ2IHtmb250LXNpemU6IDQ2cHg7fVxuLmZzLTQ3IHtmb250LXNpemU6IDQ3cHg7fVxuLmZzLTQ4IHtmb250LXNpemU6IDQ4cHg7fVxuLmZzLTQ5IHtmb250LXNpemU6IDQ5cHg7fVxuLmZzLTUwIHtmb250LXNpemU6IDUwcHg7fVxuLmZzLTUxIHtmb250LXNpemU6IDUxcHg7fVxuLmZzLTUyIHtmb250LXNpemU6IDUycHg7fVxuLmZzLTUzIHtmb250LXNpemU6IDUzcHg7fVxuLmZzLTU0IHtmb250LXNpemU6IDU0cHg7fVxuLmZzLTU1IHtmb250LXNpemU6IDU1cHg7fVxuLmZzLTU2IHtmb250LXNpemU6IDU2cHg7fVxuLmZzLTU3IHtmb250LXNpemU6IDU3cHg7fVxuLmZzLTU4IHtmb250LXNpemU6IDU4cHg7fVxuLmZzLTU5IHtmb250LXNpemU6IDU5cHg7fVxuLmZzLTYwIHtmb250LXNpemU6IDYwcHg7fVxuLmZzLTYxIHtmb250LXNpemU6IDYxcHg7fVxuLmZzLTYyIHtmb250LXNpemU6IDYycHg7fVxuLmZzLTYzIHtmb250LXNpemU6IDYzcHg7fVxuLmZzLTY0IHtmb250LXNpemU6IDY0cHg7fVxuLmZzLTY1IHtmb250LXNpemU6IDY1cHg7fVxuLmZzLTY2IHtmb250LXNpemU6IDY2cHg7fVxuLmZzLTY3IHtmb250LXNpemU6IDY3cHg7fVxuLmZzLTY4IHtmb250LXNpemU6IDY4cHg7fVxuLmZzLTY5IHtmb250LXNpemU6IDY5cHg7fVxuLmZzLTcwIHtmb250LXNpemU6IDcwcHg7fVxuLmZzLTcxIHtmb250LXNpemU6IDcxcHg7fVxuLmZzLTcyIHtmb250LXNpemU6IDcycHg7fVxuLmZzLTczIHtmb250LXNpemU6IDczcHg7fVxuLmZzLTc0IHtmb250LXNpemU6IDc0cHg7fVxuLmZzLTc1IHtmb250LXNpemU6IDc1cHg7fVxuLmZzLTc2IHtmb250LXNpemU6IDc2cHg7fVxuLmZzLTc3IHtmb250LXNpemU6IDc3cHg7fVxuLmZzLTc4IHtmb250LXNpemU6IDc4cHg7fVxuLmZzLTc5IHtmb250LXNpemU6IDc5cHg7fVxuLmZzLTgwIHtmb250LXNpemU6IDgwcHg7fVxuLmZzLTgxIHtmb250LXNpemU6IDgxcHg7fVxuLmZzLTgyIHtmb250LXNpemU6IDgycHg7fVxuLmZzLTgzIHtmb250LXNpemU6IDgzcHg7fVxuLmZzLTg0IHtmb250LXNpemU6IDg0cHg7fVxuLmZzLTg1IHtmb250LXNpemU6IDg1cHg7fVxuLmZzLTg2IHtmb250LXNpemU6IDg2cHg7fVxuLmZzLTg3IHtmb250LXNpemU6IDg3cHg7fVxuLmZzLTg4IHtmb250LXNpemU6IDg4cHg7fVxuLmZzLTg5IHtmb250LXNpemU6IDg5cHg7fVxuLmZzLTkwIHtmb250LXNpemU6IDkwcHg7fVxuLmZzLTkxIHtmb250LXNpemU6IDkxcHg7fVxuLmZzLTkyIHtmb250LXNpemU6IDkycHg7fVxuLmZzLTkzIHtmb250LXNpemU6IDkzcHg7fVxuLmZzLTk0IHtmb250LXNpemU6IDk0cHg7fVxuLmZzLTk1IHtmb250LXNpemU6IDk1cHg7fVxuLmZzLTk2IHtmb250LXNpemU6IDk2cHg7fVxuLmZzLTk3IHtmb250LXNpemU6IDk3cHg7fVxuLmZzLTk4IHtmb250LXNpemU6IDk4cHg7fVxuLmZzLTk5IHtmb250LXNpemU6IDk5cHg7fVxuLmZzLTEwMCB7Zm9udC1zaXplOiAxMDBweDt9XG4uZnMtMTAxIHtmb250LXNpemU6IDEwMXB4O31cbi5mcy0xMDIge2ZvbnQtc2l6ZTogMTAycHg7fVxuLmZzLTEwMyB7Zm9udC1zaXplOiAxMDNweDt9XG4uZnMtMTA0IHtmb250LXNpemU6IDEwNHB4O31cbi5mcy0xMDUge2ZvbnQtc2l6ZTogMTA1cHg7fVxuLmZzLTEwNiB7Zm9udC1zaXplOiAxMDZweDt9XG4uZnMtMTA3IHtmb250LXNpemU6IDEwN3B4O31cbi5mcy0xMDgge2ZvbnQtc2l6ZTogMTA4cHg7fVxuLmZzLTEwOSB7Zm9udC1zaXplOiAxMDlweDt9XG4uZnMtMTEwIHtmb250LXNpemU6IDExMHB4O31cbi5mcy0xMTEge2ZvbnQtc2l6ZTogMTExcHg7fVxuLmZzLTExMiB7Zm9udC1zaXplOiAxMTJweDt9XG4uZnMtMTEzIHtmb250LXNpemU6IDExM3B4O31cbi5mcy0xMTQge2ZvbnQtc2l6ZTogMTE0cHg7fVxuLmZzLTExNSB7Zm9udC1zaXplOiAxMTVweDt9XG4uZnMtMTE2IHtmb250LXNpemU6IDExNnB4O31cbi5mcy0xMTcge2ZvbnQtc2l6ZTogMTE3cHg7fVxuLmZzLTExOCB7Zm9udC1zaXplOiAxMThweDt9XG4uZnMtMTE5IHtmb250LXNpemU6IDExOXB4O31cbi5mcy0xMjAge2ZvbnQtc2l6ZTogMTIwcHg7fVxuLmZzLTEyMSB7Zm9udC1zaXplOiAxMjFweDt9XG4uZnMtMTIyIHtmb250LXNpemU6IDEyMnB4O31cbi5mcy0xMjMge2ZvbnQtc2l6ZTogMTIzcHg7fVxuLmZzLTEyNCB7Zm9udC1zaXplOiAxMjRweDt9XG4uZnMtMTI1IHtmb250LXNpemU6IDEyNXB4O31cbi5mcy0xMjYge2ZvbnQtc2l6ZTogMTI2cHg7fVxuLmZzLTEyNyB7Zm9udC1zaXplOiAxMjdweDt9XG4uZnMtMTI4IHtmb250LXNpemU6IDEyOHB4O31cbi5mcy0xMjkge2ZvbnQtc2l6ZTogMTI5cHg7fVxuLmZzLTEzMCB7Zm9udC1zaXplOiAxMzBweDt9XG4uZnMtMTMxIHtmb250LXNpemU6IDEzMXB4O31cbi5mcy0xMzIge2ZvbnQtc2l6ZTogMTMycHg7fVxuLmZzLTEzMyB7Zm9udC1zaXplOiAxMzNweDt9XG4uZnMtMTM0IHtmb250LXNpemU6IDEzNHB4O31cbi5mcy0xMzUge2ZvbnQtc2l6ZTogMTM1cHg7fVxuLmZzLTEzNiB7Zm9udC1zaXplOiAxMzZweDt9XG4uZnMtMTM3IHtmb250LXNpemU6IDEzN3B4O31cbi5mcy0xMzgge2ZvbnQtc2l6ZTogMTM4cHg7fVxuLmZzLTEzOSB7Zm9udC1zaXplOiAxMzlweDt9XG4uZnMtMTQwIHtmb250LXNpemU6IDE0MHB4O31cbi5mcy0xNDEge2ZvbnQtc2l6ZTogMTQxcHg7fVxuLmZzLTE0MiB7Zm9udC1zaXplOiAxNDJweDt9XG4uZnMtMTQzIHtmb250LXNpemU6IDE0M3B4O31cbi5mcy0xNDQge2ZvbnQtc2l6ZTogMTQ0cHg7fVxuLmZzLTE0NSB7Zm9udC1zaXplOiAxNDVweDt9XG4uZnMtMTQ2IHtmb250LXNpemU6IDE0NnB4O31cbi5mcy0xNDcge2ZvbnQtc2l6ZTogMTQ3cHg7fVxuLmZzLTE0OCB7Zm9udC1zaXplOiAxNDhweDt9XG4uZnMtMTQ5IHtmb250LXNpemU6IDE0OXB4O31cbi5mcy0xNTAge2ZvbnQtc2l6ZTogMTUwcHg7fVxuLmZzLTE1MSB7Zm9udC1zaXplOiAxNTFweDt9XG4uZnMtMTUyIHtmb250LXNpemU6IDE1MnB4O31cbi5mcy0xNTMge2ZvbnQtc2l6ZTogMTUzcHg7fVxuLmZzLTE1NCB7Zm9udC1zaXplOiAxNTRweDt9XG4uZnMtMTU1IHtmb250LXNpemU6IDE1NXB4O31cbi5mcy0xNTYge2ZvbnQtc2l6ZTogMTU2cHg7fVxuLmZzLTE1NyB7Zm9udC1zaXplOiAxNTdweDt9XG4uZnMtMTU4IHtmb250LXNpemU6IDE1OHB4O31cbi5mcy0xNTkge2ZvbnQtc2l6ZTogMTU5cHg7fVxuLmZzLTE2MCB7Zm9udC1zaXplOiAxNjBweDt9XG4uZnMtMTYxIHtmb250LXNpemU6IDE2MXB4O31cbi5mcy0xNjIge2ZvbnQtc2l6ZTogMTYycHg7fVxuLmZzLTE2MyB7Zm9udC1zaXplOiAxNjNweDt9XG4uZnMtMTY0IHtmb250LXNpemU6IDE2NHB4O31cbi5mcy0xNjUge2ZvbnQtc2l6ZTogMTY1cHg7fVxuLmZzLTE2NiB7Zm9udC1zaXplOiAxNjZweDt9XG4uZnMtMTY3IHtmb250LXNpemU6IDE2N3B4O31cbi5mcy0xNjgge2ZvbnQtc2l6ZTogMTY4cHg7fVxuLmZzLTE2OSB7Zm9udC1zaXplOiAxNjlweDt9XG4uZnMtMTcwIHtmb250LXNpemU6IDE3MHB4O31cbi5mcy0xNzEge2ZvbnQtc2l6ZTogMTcxcHg7fVxuLmZzLTE3MiB7Zm9udC1zaXplOiAxNzJweDt9XG4uZnMtMTczIHtmb250LXNpemU6IDE3M3B4O31cbi5mcy0xNzQge2ZvbnQtc2l6ZTogMTc0cHg7fVxuLmZzLTE3NSB7Zm9udC1zaXplOiAxNzVweDt9XG4uZnMtMTc2IHtmb250LXNpemU6IDE3NnB4O31cbi5mcy0xNzcge2ZvbnQtc2l6ZTogMTc3cHg7fVxuLmZzLTE3OCB7Zm9udC1zaXplOiAxNzhweDt9XG4uZnMtMTc5IHtmb250LXNpemU6IDE3OXB4O31cbi5mcy0xODAge2ZvbnQtc2l6ZTogMTgwcHg7fVxuLmZzLTE4MSB7Zm9udC1zaXplOiAxODFweDt9XG4uZnMtMTgyIHtmb250LXNpemU6IDE4MnB4O31cbi5mcy0xODMge2ZvbnQtc2l6ZTogMTgzcHg7fVxuLmZzLTE4NCB7Zm9udC1zaXplOiAxODRweDt9XG4uZnMtMTg1IHtmb250LXNpemU6IDE4NXB4O31cbi5mcy0xODYge2ZvbnQtc2l6ZTogMTg2cHg7fVxuLmZzLTE4NyB7Zm9udC1zaXplOiAxODdweDt9XG4uZnMtMTg4IHtmb250LXNpemU6IDE4OHB4O31cbi5mcy0xODkge2ZvbnQtc2l6ZTogMTg5cHg7fVxuLmZzLTE5MCB7Zm9udC1zaXplOiAxOTBweDt9XG4uZnMtMTkxIHtmb250LXNpemU6IDE5MXB4O31cbi5mcy0xOTIge2ZvbnQtc2l6ZTogMTkycHg7fVxuLmZzLTE5MyB7Zm9udC1zaXplOiAxOTNweDt9XG4uZnMtMTk0IHtmb250LXNpemU6IDE5NHB4O31cbi5mcy0xOTUge2ZvbnQtc2l6ZTogMTk1cHg7fVxuLmZzLTE5NiB7Zm9udC1zaXplOiAxOTZweDt9XG4uZnMtMTk3IHtmb250LXNpemU6IDE5N3B4O31cbi5mcy0xOTgge2ZvbnQtc2l6ZTogMTk4cHg7fVxuLmZzLTE5OSB7Zm9udC1zaXplOiAxOTlweDt9XG4uZnMtMjAwIHtmb250LXNpemU6IDIwMHB4O31cblxuLypbIFBBRERJTkcgXVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiovXG4ucC10LTAge3BhZGRpbmctdG9wOiAwcHg7fVxuLnAtdC0xIHtwYWRkaW5nLXRvcDogMXB4O31cbi5wLXQtMiB7cGFkZGluZy10b3A6IDJweDt9XG4ucC10LTMge3BhZGRpbmctdG9wOiAzcHg7fVxuLnAtdC00IHtwYWRkaW5nLXRvcDogNHB4O31cbi5wLXQtNSB7cGFkZGluZy10b3A6IDVweDt9XG4ucC10LTYge3BhZGRpbmctdG9wOiA2cHg7fVxuLnAtdC03IHtwYWRkaW5nLXRvcDogN3B4O31cbi5wLXQtOCB7cGFkZGluZy10b3A6IDhweDt9XG4ucC10LTkge3BhZGRpbmctdG9wOiA5cHg7fVxuLnAtdC0xMCB7cGFkZGluZy10b3A6IDEwcHg7fVxuLnAtdC0xMSB7cGFkZGluZy10b3A6IDExcHg7fVxuLnAtdC0xMiB7cGFkZGluZy10b3A6IDEycHg7fVxuLnAtdC0xMyB7cGFkZGluZy10b3A6IDEzcHg7fVxuLnAtdC0xNCB7cGFkZGluZy10b3A6IDE0cHg7fVxuLnAtdC0xNSB7cGFkZGluZy10b3A6IDE1cHg7fVxuLnAtdC0xNiB7cGFkZGluZy10b3A6IDE2cHg7fVxuLnAtdC0xNyB7cGFkZGluZy10b3A6IDE3cHg7fVxuLnAtdC0xOCB7cGFkZGluZy10b3A6IDE4cHg7fVxuLnAtdC0xOSB7cGFkZGluZy10b3A6IDE5cHg7fVxuLnAtdC0yMCB7cGFkZGluZy10b3A6IDIwcHg7fVxuLnAtdC0yMSB7cGFkZGluZy10b3A6IDIxcHg7fVxuLnAtdC0yMiB7cGFkZGluZy10b3A6IDIycHg7fVxuLnAtdC0yMyB7cGFkZGluZy10b3A6IDIzcHg7fVxuLnAtdC0yNCB7cGFkZGluZy10b3A6IDI0cHg7fVxuLnAtdC0yNSB7cGFkZGluZy10b3A6IDI1cHg7fVxuLnAtdC0yNiB7cGFkZGluZy10b3A6IDI2cHg7fVxuLnAtdC0yNyB7cGFkZGluZy10b3A6IDI3cHg7fVxuLnAtdC0yOCB7cGFkZGluZy10b3A6IDI4cHg7fVxuLnAtdC0yOSB7cGFkZGluZy10b3A6IDI5cHg7fVxuLnAtdC0zMCB7cGFkZGluZy10b3A6IDMwcHg7fVxuLnAtdC0zMSB7cGFkZGluZy10b3A6IDMxcHg7fVxuLnAtdC0zMiB7cGFkZGluZy10b3A6IDMycHg7fVxuLnAtdC0zMyB7cGFkZGluZy10b3A6IDMzcHg7fVxuLnAtdC0zNCB7cGFkZGluZy10b3A6IDM0cHg7fVxuLnAtdC0zNSB7cGFkZGluZy10b3A6IDM1cHg7fVxuLnAtdC0zNiB7cGFkZGluZy10b3A6IDM2cHg7fVxuLnAtdC0zNyB7cGFkZGluZy10b3A6IDM3cHg7fVxuLnAtdC0zOCB7cGFkZGluZy10b3A6IDM4cHg7fVxuLnAtdC0zOSB7cGFkZGluZy10b3A6IDM5cHg7fVxuLnAtdC00MCB7cGFkZGluZy10b3A6IDQwcHg7fVxuLnAtdC00MSB7cGFkZGluZy10b3A6IDQxcHg7fVxuLnAtdC00MiB7cGFkZGluZy10b3A6IDQycHg7fVxuLnAtdC00MyB7cGFkZGluZy10b3A6IDQzcHg7fVxuLnAtdC00NCB7cGFkZGluZy10b3A6IDQ0cHg7fVxuLnAtdC00NSB7cGFkZGluZy10b3A6IDQ1cHg7fVxuLnAtdC00NiB7cGFkZGluZy10b3A6IDQ2cHg7fVxuLnAtdC00NyB7cGFkZGluZy10b3A6IDQ3cHg7fVxuLnAtdC00OCB7cGFkZGluZy10b3A6IDQ4cHg7fVxuLnAtdC00OSB7cGFkZGluZy10b3A6IDQ5cHg7fVxuLnAtdC01MCB7cGFkZGluZy10b3A6IDUwcHg7fVxuLnAtdC01MSB7cGFkZGluZy10b3A6IDUxcHg7fVxuLnAtdC01MiB7cGFkZGluZy10b3A6IDUycHg7fVxuLnAtdC01MyB7cGFkZGluZy10b3A6IDUzcHg7fVxuLnAtdC01NCB7cGFkZGluZy10b3A6IDU0cHg7fVxuLnAtdC01NSB7cGFkZGluZy10b3A6IDU1cHg7fVxuLnAtdC01NiB7cGFkZGluZy10b3A6IDU2cHg7fVxuLnAtdC01NyB7cGFkZGluZy10b3A6IDU3cHg7fVxuLnAtdC01OCB7cGFkZGluZy10b3A6IDU4cHg7fVxuLnAtdC01OSB7cGFkZGluZy10b3A6IDU5cHg7fVxuLnAtdC02MCB7cGFkZGluZy10b3A6IDYwcHg7fVxuLnAtdC02MSB7cGFkZGluZy10b3A6IDYxcHg7fVxuLnAtdC02MiB7cGFkZGluZy10b3A6IDYycHg7fVxuLnAtdC02MyB7cGFkZGluZy10b3A6IDYzcHg7fVxuLnAtdC02NCB7cGFkZGluZy10b3A6IDY0cHg7fVxuLnAtdC02NSB7cGFkZGluZy10b3A6IDY1cHg7fVxuLnAtdC02NiB7cGFkZGluZy10b3A6IDY2cHg7fVxuLnAtdC02NyB7cGFkZGluZy10b3A6IDY3cHg7fVxuLnAtdC02OCB7cGFkZGluZy10b3A6IDY4cHg7fVxuLnAtdC02OSB7cGFkZGluZy10b3A6IDY5cHg7fVxuLnAtdC03MCB7cGFkZGluZy10b3A6IDcwcHg7fVxuLnAtdC03MSB7cGFkZGluZy10b3A6IDcxcHg7fVxuLnAtdC03MiB7cGFkZGluZy10b3A6IDcycHg7fVxuLnAtdC03MyB7cGFkZGluZy10b3A6IDczcHg7fVxuLnAtdC03NCB7cGFkZGluZy10b3A6IDc0cHg7fVxuLnAtdC03NSB7cGFkZGluZy10b3A6IDc1cHg7fVxuLnAtdC03NiB7cGFkZGluZy10b3A6IDc2cHg7fVxuLnAtdC03NyB7cGFkZGluZy10b3A6IDc3cHg7fVxuLnAtdC03OCB7cGFkZGluZy10b3A6IDc4cHg7fVxuLnAtdC03OSB7cGFkZGluZy10b3A6IDc5cHg7fVxuLnAtdC04MCB7cGFkZGluZy10b3A6IDgwcHg7fVxuLnAtdC04MSB7cGFkZGluZy10b3A6IDgxcHg7fVxuLnAtdC04MiB7cGFkZGluZy10b3A6IDgycHg7fVxuLnAtdC04MyB7cGFkZGluZy10b3A6IDgzcHg7fVxuLnAtdC04NCB7cGFkZGluZy10b3A6IDg0cHg7fVxuLnAtdC04NSB7cGFkZGluZy10b3A6IDg1cHg7fVxuLnAtdC04NiB7cGFkZGluZy10b3A6IDg2cHg7fVxuLnAtdC04NyB7cGFkZGluZy10b3A6IDg3cHg7fVxuLnAtdC04OCB7cGFkZGluZy10b3A6IDg4cHg7fVxuLnAtdC04OSB7cGFkZGluZy10b3A6IDg5cHg7fVxuLnAtdC05MCB7cGFkZGluZy10b3A6IDkwcHg7fVxuLnAtdC05MSB7cGFkZGluZy10b3A6IDkxcHg7fVxuLnAtdC05MiB7cGFkZGluZy10b3A6IDkycHg7fVxuLnAtdC05MyB7cGFkZGluZy10b3A6IDkzcHg7fVxuLnAtdC05NCB7cGFkZGluZy10b3A6IDk0cHg7fVxuLnAtdC05NSB7cGFkZGluZy10b3A6IDk1cHg7fVxuLnAtdC05NiB7cGFkZGluZy10b3A6IDk2cHg7fVxuLnAtdC05NyB7cGFkZGluZy10b3A6IDk3cHg7fVxuLnAtdC05OCB7cGFkZGluZy10b3A6IDk4cHg7fVxuLnAtdC05OSB7cGFkZGluZy10b3A6IDk5cHg7fVxuLnAtdC0xMDAge3BhZGRpbmctdG9wOiAxMDBweDt9XG4ucC10LTEwMSB7cGFkZGluZy10b3A6IDEwMXB4O31cbi5wLXQtMTAyIHtwYWRkaW5nLXRvcDogMTAycHg7fVxuLnAtdC0xMDMge3BhZGRpbmctdG9wOiAxMDNweDt9XG4ucC10LTEwNCB7cGFkZGluZy10b3A6IDEwNHB4O31cbi5wLXQtMTA1IHtwYWRkaW5nLXRvcDogMTA1cHg7fVxuLnAtdC0xMDYge3BhZGRpbmctdG9wOiAxMDZweDt9XG4ucC10LTEwNyB7cGFkZGluZy10b3A6IDEwN3B4O31cbi5wLXQtMTA4IHtwYWRkaW5nLXRvcDogMTA4cHg7fVxuLnAtdC0xMDkge3BhZGRpbmctdG9wOiAxMDlweDt9XG4ucC10LTExMCB7cGFkZGluZy10b3A6IDExMHB4O31cbi5wLXQtMTExIHtwYWRkaW5nLXRvcDogMTExcHg7fVxuLnAtdC0xMTIge3BhZGRpbmctdG9wOiAxMTJweDt9XG4ucC10LTExMyB7cGFkZGluZy10b3A6IDExM3B4O31cbi5wLXQtMTE0IHtwYWRkaW5nLXRvcDogMTE0cHg7fVxuLnAtdC0xMTUge3BhZGRpbmctdG9wOiAxMTVweDt9XG4ucC10LTExNiB7cGFkZGluZy10b3A6IDExNnB4O31cbi5wLXQtMTE3IHtwYWRkaW5nLXRvcDogMTE3cHg7fVxuLnAtdC0xMTgge3BhZGRpbmctdG9wOiAxMThweDt9XG4ucC10LTExOSB7cGFkZGluZy10b3A6IDExOXB4O31cbi5wLXQtMTIwIHtwYWRkaW5nLXRvcDogMTIwcHg7fVxuLnAtdC0xMjEge3BhZGRpbmctdG9wOiAxMjFweDt9XG4ucC10LTEyMiB7cGFkZGluZy10b3A6IDEyMnB4O31cbi5wLXQtMTIzIHtwYWRkaW5nLXRvcDogMTIzcHg7fVxuLnAtdC0xMjQge3BhZGRpbmctdG9wOiAxMjRweDt9XG4ucC10LTEyNSB7cGFkZGluZy10b3A6IDEyNXB4O31cbi5wLXQtMTI2IHtwYWRkaW5nLXRvcDogMTI2cHg7fVxuLnAtdC0xMjcge3BhZGRpbmctdG9wOiAxMjdweDt9XG4ucC10LTEyOCB7cGFkZGluZy10b3A6IDEyOHB4O31cbi5wLXQtMTI5IHtwYWRkaW5nLXRvcDogMTI5cHg7fVxuLnAtdC0xMzAge3BhZGRpbmctdG9wOiAxMzBweDt9XG4ucC10LTEzMSB7cGFkZGluZy10b3A6IDEzMXB4O31cbi5wLXQtMTMyIHtwYWRkaW5nLXRvcDogMTMycHg7fVxuLnAtdC0xMzMge3BhZGRpbmctdG9wOiAxMzNweDt9XG4ucC10LTEzNCB7cGFkZGluZy10b3A6IDEzNHB4O31cbi5wLXQtMTM1IHtwYWRkaW5nLXRvcDogMTM1cHg7fVxuLnAtdC0xMzYge3BhZGRpbmctdG9wOiAxMzZweDt9XG4ucC10LTEzNyB7cGFkZGluZy10b3A6IDEzN3B4O31cbi5wLXQtMTM4IHtwYWRkaW5nLXRvcDogMTM4cHg7fVxuLnAtdC0xMzkge3BhZGRpbmctdG9wOiAxMzlweDt9XG4ucC10LTE0MCB7cGFkZGluZy10b3A6IDE0MHB4O31cbi5wLXQtMTQxIHtwYWRkaW5nLXRvcDogMTQxcHg7fVxuLnAtdC0xNDIge3BhZGRpbmctdG9wOiAxNDJweDt9XG4ucC10LTE0MyB7cGFkZGluZy10b3A6IDE0M3B4O31cbi5wLXQtMTQ0IHtwYWRkaW5nLXRvcDogMTQ0cHg7fVxuLnAtdC0xNDUge3BhZGRpbmctdG9wOiAxNDVweDt9XG4ucC10LTE0NiB7cGFkZGluZy10b3A6IDE0NnB4O31cbi5wLXQtMTQ3IHtwYWRkaW5nLXRvcDogMTQ3cHg7fVxuLnAtdC0xNDgge3BhZGRpbmctdG9wOiAxNDhweDt9XG4ucC10LTE0OSB7cGFkZGluZy10b3A6IDE0OXB4O31cbi5wLXQtMTUwIHtwYWRkaW5nLXRvcDogMTUwcHg7fVxuLnAtdC0xNTEge3BhZGRpbmctdG9wOiAxNTFweDt9XG4ucC10LTE1MiB7cGFkZGluZy10b3A6IDE1MnB4O31cbi5wLXQtMTUzIHtwYWRkaW5nLXRvcDogMTUzcHg7fVxuLnAtdC0xNTQge3BhZGRpbmctdG9wOiAxNTRweDt9XG4ucC10LTE1NSB7cGFkZGluZy10b3A6IDE1NXB4O31cbi5wLXQtMTU2IHtwYWRkaW5nLXRvcDogMTU2cHg7fVxuLnAtdC0xNTcge3BhZGRpbmctdG9wOiAxNTdweDt9XG4ucC10LTE1OCB7cGFkZGluZy10b3A6IDE1OHB4O31cbi5wLXQtMTU5IHtwYWRkaW5nLXRvcDogMTU5cHg7fVxuLnAtdC0xNjAge3BhZGRpbmctdG9wOiAxNjBweDt9XG4ucC10LTE2MSB7cGFkZGluZy10b3A6IDE2MXB4O31cbi5wLXQtMTYyIHtwYWRkaW5nLXRvcDogMTYycHg7fVxuLnAtdC0xNjMge3BhZGRpbmctdG9wOiAxNjNweDt9XG4ucC10LTE2NCB7cGFkZGluZy10b3A6IDE2NHB4O31cbi5wLXQtMTY1IHtwYWRkaW5nLXRvcDogMTY1cHg7fVxuLnAtdC0xNjYge3BhZGRpbmctdG9wOiAxNjZweDt9XG4ucC10LTE2NyB7cGFkZGluZy10b3A6IDE2N3B4O31cbi5wLXQtMTY4IHtwYWRkaW5nLXRvcDogMTY4cHg7fVxuLnAtdC0xNjkge3BhZGRpbmctdG9wOiAxNjlweDt9XG4ucC10LTE3MCB7cGFkZGluZy10b3A6IDE3MHB4O31cbi5wLXQtMTcxIHtwYWRkaW5nLXRvcDogMTcxcHg7fVxuLnAtdC0xNzIge3BhZGRpbmctdG9wOiAxNzJweDt9XG4ucC10LTE3MyB7cGFkZGluZy10b3A6IDE3M3B4O31cbi5wLXQtMTc0IHtwYWRkaW5nLXRvcDogMTc0cHg7fVxuLnAtdC0xNzUge3BhZGRpbmctdG9wOiAxNzVweDt9XG4ucC10LTE3NiB7cGFkZGluZy10b3A6IDE3NnB4O31cbi5wLXQtMTc3IHtwYWRkaW5nLXRvcDogMTc3cHg7fVxuLnAtdC0xNzgge3BhZGRpbmctdG9wOiAxNzhweDt9XG4ucC10LTE3OSB7cGFkZGluZy10b3A6IDE3OXB4O31cbi5wLXQtMTgwIHtwYWRkaW5nLXRvcDogMTgwcHg7fVxuLnAtdC0xODEge3BhZGRpbmctdG9wOiAxODFweDt9XG4ucC10LTE4MiB7cGFkZGluZy10b3A6IDE4MnB4O31cbi5wLXQtMTgzIHtwYWRkaW5nLXRvcDogMTgzcHg7fVxuLnAtdC0xODQge3BhZGRpbmctdG9wOiAxODRweDt9XG4ucC10LTE4NSB7cGFkZGluZy10b3A6IDE4NXB4O31cbi5wLXQtMTg2IHtwYWRkaW5nLXRvcDogMTg2cHg7fVxuLnAtdC0xODcge3BhZGRpbmctdG9wOiAxODdweDt9XG4ucC10LTE4OCB7cGFkZGluZy10b3A6IDE4OHB4O31cbi5wLXQtMTg5IHtwYWRkaW5nLXRvcDogMTg5cHg7fVxuLnAtdC0xOTAge3BhZGRpbmctdG9wOiAxOTBweDt9XG4ucC10LTE5MSB7cGFkZGluZy10b3A6IDE5MXB4O31cbi5wLXQtMTkyIHtwYWRkaW5nLXRvcDogMTkycHg7fVxuLnAtdC0xOTMge3BhZGRpbmctdG9wOiAxOTNweDt9XG4ucC10LTE5NCB7cGFkZGluZy10b3A6IDE5NHB4O31cbi5wLXQtMTk1IHtwYWRkaW5nLXRvcDogMTk1cHg7fVxuLnAtdC0xOTYge3BhZGRpbmctdG9wOiAxOTZweDt9XG4ucC10LTE5NyB7cGFkZGluZy10b3A6IDE5N3B4O31cbi5wLXQtMTk4IHtwYWRkaW5nLXRvcDogMTk4cHg7fVxuLnAtdC0xOTkge3BhZGRpbmctdG9wOiAxOTlweDt9XG4ucC10LTIwMCB7cGFkZGluZy10b3A6IDIwMHB4O31cbi5wLXQtMjAxIHtwYWRkaW5nLXRvcDogMjAxcHg7fVxuLnAtdC0yMDIge3BhZGRpbmctdG9wOiAyMDJweDt9XG4ucC10LTIwMyB7cGFkZGluZy10b3A6IDIwM3B4O31cbi5wLXQtMjA0IHtwYWRkaW5nLXRvcDogMjA0cHg7fVxuLnAtdC0yMDUge3BhZGRpbmctdG9wOiAyMDVweDt9XG4ucC10LTIwNiB7cGFkZGluZy10b3A6IDIwNnB4O31cbi5wLXQtMjA3IHtwYWRkaW5nLXRvcDogMjA3cHg7fVxuLnAtdC0yMDgge3BhZGRpbmctdG9wOiAyMDhweDt9XG4ucC10LTIwOSB7cGFkZGluZy10b3A6IDIwOXB4O31cbi5wLXQtMjEwIHtwYWRkaW5nLXRvcDogMjEwcHg7fVxuLnAtdC0yMTEge3BhZGRpbmctdG9wOiAyMTFweDt9XG4ucC10LTIxMiB7cGFkZGluZy10b3A6IDIxMnB4O31cbi5wLXQtMjEzIHtwYWRkaW5nLXRvcDogMjEzcHg7fVxuLnAtdC0yMTQge3BhZGRpbmctdG9wOiAyMTRweDt9XG4ucC10LTIxNSB7cGFkZGluZy10b3A6IDIxNXB4O31cbi5wLXQtMjE2IHtwYWRkaW5nLXRvcDogMjE2cHg7fVxuLnAtdC0yMTcge3BhZGRpbmctdG9wOiAyMTdweDt9XG4ucC10LTIxOCB7cGFkZGluZy10b3A6IDIxOHB4O31cbi5wLXQtMjE5IHtwYWRkaW5nLXRvcDogMjE5cHg7fVxuLnAtdC0yMjAge3BhZGRpbmctdG9wOiAyMjBweDt9XG4ucC10LTIyMSB7cGFkZGluZy10b3A6IDIyMXB4O31cbi5wLXQtMjIyIHtwYWRkaW5nLXRvcDogMjIycHg7fVxuLnAtdC0yMjMge3BhZGRpbmctdG9wOiAyMjNweDt9XG4ucC10LTIyNCB7cGFkZGluZy10b3A6IDIyNHB4O31cbi5wLXQtMjI1IHtwYWRkaW5nLXRvcDogMjI1cHg7fVxuLnAtdC0yMjYge3BhZGRpbmctdG9wOiAyMjZweDt9XG4ucC10LTIyNyB7cGFkZGluZy10b3A6IDIyN3B4O31cbi5wLXQtMjI4IHtwYWRkaW5nLXRvcDogMjI4cHg7fVxuLnAtdC0yMjkge3BhZGRpbmctdG9wOiAyMjlweDt9XG4ucC10LTIzMCB7cGFkZGluZy10b3A6IDIzMHB4O31cbi5wLXQtMjMxIHtwYWRkaW5nLXRvcDogMjMxcHg7fVxuLnAtdC0yMzIge3BhZGRpbmctdG9wOiAyMzJweDt9XG4ucC10LTIzMyB7cGFkZGluZy10b3A6IDIzM3B4O31cbi5wLXQtMjM0IHtwYWRkaW5nLXRvcDogMjM0cHg7fVxuLnAtdC0yMzUge3BhZGRpbmctdG9wOiAyMzVweDt9XG4ucC10LTIzNiB7cGFkZGluZy10b3A6IDIzNnB4O31cbi5wLXQtMjM3IHtwYWRkaW5nLXRvcDogMjM3cHg7fVxuLnAtdC0yMzgge3BhZGRpbmctdG9wOiAyMzhweDt9XG4ucC10LTIzOSB7cGFkZGluZy10b3A6IDIzOXB4O31cbi5wLXQtMjQwIHtwYWRkaW5nLXRvcDogMjQwcHg7fVxuLnAtdC0yNDEge3BhZGRpbmctdG9wOiAyNDFweDt9XG4ucC10LTI0MiB7cGFkZGluZy10b3A6IDI0MnB4O31cbi5wLXQtMjQzIHtwYWRkaW5nLXRvcDogMjQzcHg7fVxuLnAtdC0yNDQge3BhZGRpbmctdG9wOiAyNDRweDt9XG4ucC10LTI0NSB7cGFkZGluZy10b3A6IDI0NXB4O31cbi5wLXQtMjQ2IHtwYWRkaW5nLXRvcDogMjQ2cHg7fVxuLnAtdC0yNDcge3BhZGRpbmctdG9wOiAyNDdweDt9XG4ucC10LTI0OCB7cGFkZGluZy10b3A6IDI0OHB4O31cbi5wLXQtMjQ5IHtwYWRkaW5nLXRvcDogMjQ5cHg7fVxuLnAtdC0yNTAge3BhZGRpbmctdG9wOiAyNTBweDt9XG4ucC1iLTAge3BhZGRpbmctYm90dG9tOiAwcHg7fVxuLnAtYi0xIHtwYWRkaW5nLWJvdHRvbTogMXB4O31cbi5wLWItMiB7cGFkZGluZy1ib3R0b206IDJweDt9XG4ucC1iLTMge3BhZGRpbmctYm90dG9tOiAzcHg7fVxuLnAtYi00IHtwYWRkaW5nLWJvdHRvbTogNHB4O31cbi5wLWItNSB7cGFkZGluZy1ib3R0b206IDVweDt9XG4ucC1iLTYge3BhZGRpbmctYm90dG9tOiA2cHg7fVxuLnAtYi03IHtwYWRkaW5nLWJvdHRvbTogN3B4O31cbi5wLWItOCB7cGFkZGluZy1ib3R0b206IDhweDt9XG4ucC1iLTkge3BhZGRpbmctYm90dG9tOiA5cHg7fVxuLnAtYi0xMCB7cGFkZGluZy1ib3R0b206IDEwcHg7fVxuLnAtYi0xMSB7cGFkZGluZy1ib3R0b206IDExcHg7fVxuLnAtYi0xMiB7cGFkZGluZy1ib3R0b206IDEycHg7fVxuLnAtYi0xMyB7cGFkZGluZy1ib3R0b206IDEzcHg7fVxuLnAtYi0xNCB7cGFkZGluZy1ib3R0b206IDE0cHg7fVxuLnAtYi0xNSB7cGFkZGluZy1ib3R0b206IDE1cHg7fVxuLnAtYi0xNiB7cGFkZGluZy1ib3R0b206IDE2cHg7fVxuLnAtYi0xNyB7cGFkZGluZy1ib3R0b206IDE3cHg7fVxuLnAtYi0xOCB7cGFkZGluZy1ib3R0b206IDE4cHg7fVxuLnAtYi0xOSB7cGFkZGluZy1ib3R0b206IDE5cHg7fVxuLnAtYi0yMCB7cGFkZGluZy1ib3R0b206IDIwcHg7fVxuLnAtYi0yMSB7cGFkZGluZy1ib3R0b206IDIxcHg7fVxuLnAtYi0yMiB7cGFkZGluZy1ib3R0b206IDIycHg7fVxuLnAtYi0yMyB7cGFkZGluZy1ib3R0b206IDIzcHg7fVxuLnAtYi0yNCB7cGFkZGluZy1ib3R0b206IDI0cHg7fVxuLnAtYi0yNSB7cGFkZGluZy1ib3R0b206IDI1cHg7fVxuLnAtYi0yNiB7cGFkZGluZy1ib3R0b206IDI2cHg7fVxuLnAtYi0yNyB7cGFkZGluZy1ib3R0b206IDI3cHg7fVxuLnAtYi0yOCB7cGFkZGluZy1ib3R0b206IDI4cHg7fVxuLnAtYi0yOSB7cGFkZGluZy1ib3R0b206IDI5cHg7fVxuLnAtYi0zMCB7cGFkZGluZy1ib3R0b206IDMwcHg7fVxuLnAtYi0zMSB7cGFkZGluZy1ib3R0b206IDMxcHg7fVxuLnAtYi0zMiB7cGFkZGluZy1ib3R0b206IDMycHg7fVxuLnAtYi0zMyB7cGFkZGluZy1ib3R0b206IDMzcHg7fVxuLnAtYi0zNCB7cGFkZGluZy1ib3R0b206IDM0cHg7fVxuLnAtYi0zNSB7cGFkZGluZy1ib3R0b206IDM1cHg7fVxuLnAtYi0zNiB7cGFkZGluZy1ib3R0b206IDM2cHg7fVxuLnAtYi0zNyB7cGFkZGluZy1ib3R0b206IDM3cHg7fVxuLnAtYi0zOCB7cGFkZGluZy1ib3R0b206IDM4cHg7fVxuLnAtYi0zOSB7cGFkZGluZy1ib3R0b206IDM5cHg7fVxuLnAtYi00MCB7cGFkZGluZy1ib3R0b206IDQwcHg7fVxuLnAtYi00MSB7cGFkZGluZy1ib3R0b206IDQxcHg7fVxuLnAtYi00MiB7cGFkZGluZy1ib3R0b206IDQycHg7fVxuLnAtYi00MyB7cGFkZGluZy1ib3R0b206IDQzcHg7fVxuLnAtYi00NCB7cGFkZGluZy1ib3R0b206IDQ0cHg7fVxuLnAtYi00NSB7cGFkZGluZy1ib3R0b206IDQ1cHg7fVxuLnAtYi00NiB7cGFkZGluZy1ib3R0b206IDQ2cHg7fVxuLnAtYi00NyB7cGFkZGluZy1ib3R0b206IDQ3cHg7fVxuLnAtYi00OCB7cGFkZGluZy1ib3R0b206IDQ4cHg7fVxuLnAtYi00OSB7cGFkZGluZy1ib3R0b206IDQ5cHg7fVxuLnAtYi01MCB7cGFkZGluZy1ib3R0b206IDUwcHg7fVxuLnAtYi01MSB7cGFkZGluZy1ib3R0b206IDUxcHg7fVxuLnAtYi01MiB7cGFkZGluZy1ib3R0b206IDUycHg7fVxuLnAtYi01MyB7cGFkZGluZy1ib3R0b206IDUzcHg7fVxuLnAtYi01NCB7cGFkZGluZy1ib3R0b206IDU0cHg7fVxuLnAtYi01NSB7cGFkZGluZy1ib3R0b206IDU1cHg7fVxuLnAtYi01NiB7cGFkZGluZy1ib3R0b206IDU2cHg7fVxuLnAtYi01NyB7cGFkZGluZy1ib3R0b206IDU3cHg7fVxuLnAtYi01OCB7cGFkZGluZy1ib3R0b206IDU4cHg7fVxuLnAtYi01OSB7cGFkZGluZy1ib3R0b206IDU5cHg7fVxuLnAtYi02MCB7cGFkZGluZy1ib3R0b206IDYwcHg7fVxuLnAtYi02MSB7cGFkZGluZy1ib3R0b206IDYxcHg7fVxuLnAtYi02MiB7cGFkZGluZy1ib3R0b206IDYycHg7fVxuLnAtYi02MyB7cGFkZGluZy1ib3R0b206IDYzcHg7fVxuLnAtYi02NCB7cGFkZGluZy1ib3R0b206IDY0cHg7fVxuLnAtYi02NSB7cGFkZGluZy1ib3R0b206IDY1cHg7fVxuLnAtYi02NiB7cGFkZGluZy1ib3R0b206IDY2cHg7fVxuLnAtYi02NyB7cGFkZGluZy1ib3R0b206IDY3cHg7fVxuLnAtYi02OCB7cGFkZGluZy1ib3R0b206IDY4cHg7fVxuLnAtYi02OSB7cGFkZGluZy1ib3R0b206IDY5cHg7fVxuLnAtYi03MCB7cGFkZGluZy1ib3R0b206IDcwcHg7fVxuLnAtYi03MSB7cGFkZGluZy1ib3R0b206IDcxcHg7fVxuLnAtYi03MiB7cGFkZGluZy1ib3R0b206IDcycHg7fVxuLnAtYi03MyB7cGFkZGluZy1ib3R0b206IDczcHg7fVxuLnAtYi03NCB7cGFkZGluZy1ib3R0b206IDc0cHg7fVxuLnAtYi03NSB7cGFkZGluZy1ib3R0b206IDc1cHg7fVxuLnAtYi03NiB7cGFkZGluZy1ib3R0b206IDc2cHg7fVxuLnAtYi03NyB7cGFkZGluZy1ib3R0b206IDc3cHg7fVxuLnAtYi03OCB7cGFkZGluZy1ib3R0b206IDc4cHg7fVxuLnAtYi03OSB7cGFkZGluZy1ib3R0b206IDc5cHg7fVxuLnAtYi04MCB7cGFkZGluZy1ib3R0b206IDgwcHg7fVxuLnAtYi04MSB7cGFkZGluZy1ib3R0b206IDgxcHg7fVxuLnAtYi04MiB7cGFkZGluZy1ib3R0b206IDgycHg7fVxuLnAtYi04MyB7cGFkZGluZy1ib3R0b206IDgzcHg7fVxuLnAtYi04NCB7cGFkZGluZy1ib3R0b206IDg0cHg7fVxuLnAtYi04NSB7cGFkZGluZy1ib3R0b206IDg1cHg7fVxuLnAtYi04NiB7cGFkZGluZy1ib3R0b206IDg2cHg7fVxuLnAtYi04NyB7cGFkZGluZy1ib3R0b206IDg3cHg7fVxuLnAtYi04OCB7cGFkZGluZy1ib3R0b206IDg4cHg7fVxuLnAtYi04OSB7cGFkZGluZy1ib3R0b206IDg5cHg7fVxuLnAtYi05MCB7cGFkZGluZy1ib3R0b206IDkwcHg7fVxuLnAtYi05MSB7cGFkZGluZy1ib3R0b206IDkxcHg7fVxuLnAtYi05MiB7cGFkZGluZy1ib3R0b206IDkycHg7fVxuLnAtYi05MyB7cGFkZGluZy1ib3R0b206IDkzcHg7fVxuLnAtYi05NCB7cGFkZGluZy1ib3R0b206IDk0cHg7fVxuLnAtYi05NSB7cGFkZGluZy1ib3R0b206IDk1cHg7fVxuLnAtYi05NiB7cGFkZGluZy1ib3R0b206IDk2cHg7fVxuLnAtYi05NyB7cGFkZGluZy1ib3R0b206IDk3cHg7fVxuLnAtYi05OCB7cGFkZGluZy1ib3R0b206IDk4cHg7fVxuLnAtYi05OSB7cGFkZGluZy1ib3R0b206IDk5cHg7fVxuLnAtYi0xMDAge3BhZGRpbmctYm90dG9tOiAxMDBweDt9XG4ucC1iLTEwMSB7cGFkZGluZy1ib3R0b206IDEwMXB4O31cbi5wLWItMTAyIHtwYWRkaW5nLWJvdHRvbTogMTAycHg7fVxuLnAtYi0xMDMge3BhZGRpbmctYm90dG9tOiAxMDNweDt9XG4ucC1iLTEwNCB7cGFkZGluZy1ib3R0b206IDEwNHB4O31cbi5wLWItMTA1IHtwYWRkaW5nLWJvdHRvbTogMTA1cHg7fVxuLnAtYi0xMDYge3BhZGRpbmctYm90dG9tOiAxMDZweDt9XG4ucC1iLTEwNyB7cGFkZGluZy1ib3R0b206IDEwN3B4O31cbi5wLWItMTA4IHtwYWRkaW5nLWJvdHRvbTogMTA4cHg7fVxuLnAtYi0xMDkge3BhZGRpbmctYm90dG9tOiAxMDlweDt9XG4ucC1iLTExMCB7cGFkZGluZy1ib3R0b206IDExMHB4O31cbi5wLWItMTExIHtwYWRkaW5nLWJvdHRvbTogMTExcHg7fVxuLnAtYi0xMTIge3BhZGRpbmctYm90dG9tOiAxMTJweDt9XG4ucC1iLTExMyB7cGFkZGluZy1ib3R0b206IDExM3B4O31cbi5wLWItMTE0IHtwYWRkaW5nLWJvdHRvbTogMTE0cHg7fVxuLnAtYi0xMTUge3BhZGRpbmctYm90dG9tOiAxMTVweDt9XG4ucC1iLTExNiB7cGFkZGluZy1ib3R0b206IDExNnB4O31cbi5wLWItMTE3IHtwYWRkaW5nLWJvdHRvbTogMTE3cHg7fVxuLnAtYi0xMTgge3BhZGRpbmctYm90dG9tOiAxMThweDt9XG4ucC1iLTExOSB7cGFkZGluZy1ib3R0b206IDExOXB4O31cbi5wLWItMTIwIHtwYWRkaW5nLWJvdHRvbTogMTIwcHg7fVxuLnAtYi0xMjEge3BhZGRpbmctYm90dG9tOiAxMjFweDt9XG4ucC1iLTEyMiB7cGFkZGluZy1ib3R0b206IDEyMnB4O31cbi5wLWItMTIzIHtwYWRkaW5nLWJvdHRvbTogMTIzcHg7fVxuLnAtYi0xMjQge3BhZGRpbmctYm90dG9tOiAxMjRweDt9XG4ucC1iLTEyNSB7cGFkZGluZy1ib3R0b206IDEyNXB4O31cbi5wLWItMTI2IHtwYWRkaW5nLWJvdHRvbTogMTI2cHg7fVxuLnAtYi0xMjcge3BhZGRpbmctYm90dG9tOiAxMjdweDt9XG4ucC1iLTEyOCB7cGFkZGluZy1ib3R0b206IDEyOHB4O31cbi5wLWItMTI5IHtwYWRkaW5nLWJvdHRvbTogMTI5cHg7fVxuLnAtYi0xMzAge3BhZGRpbmctYm90dG9tOiAxMzBweDt9XG4ucC1iLTEzMSB7cGFkZGluZy1ib3R0b206IDEzMXB4O31cbi5wLWItMTMyIHtwYWRkaW5nLWJvdHRvbTogMTMycHg7fVxuLnAtYi0xMzMge3BhZGRpbmctYm90dG9tOiAxMzNweDt9XG4ucC1iLTEzNCB7cGFkZGluZy1ib3R0b206IDEzNHB4O31cbi5wLWItMTM1IHtwYWRkaW5nLWJvdHRvbTogMTM1cHg7fVxuLnAtYi0xMzYge3BhZGRpbmctYm90dG9tOiAxMzZweDt9XG4ucC1iLTEzNyB7cGFkZGluZy1ib3R0b206IDEzN3B4O31cbi5wLWItMTM4IHtwYWRkaW5nLWJvdHRvbTogMTM4cHg7fVxuLnAtYi0xMzkge3BhZGRpbmctYm90dG9tOiAxMzlweDt9XG4ucC1iLTE0MCB7cGFkZGluZy1ib3R0b206IDE0MHB4O31cbi5wLWItMTQxIHtwYWRkaW5nLWJvdHRvbTogMTQxcHg7fVxuLnAtYi0xNDIge3BhZGRpbmctYm90dG9tOiAxNDJweDt9XG4ucC1iLTE0MyB7cGFkZGluZy1ib3R0b206IDE0M3B4O31cbi5wLWItMTQ0IHtwYWRkaW5nLWJvdHRvbTogMTQ0cHg7fVxuLnAtYi0xNDUge3BhZGRpbmctYm90dG9tOiAxNDVweDt9XG4ucC1iLTE0NiB7cGFkZGluZy1ib3R0b206IDE0NnB4O31cbi5wLWItMTQ3IHtwYWRkaW5nLWJvdHRvbTogMTQ3cHg7fVxuLnAtYi0xNDgge3BhZGRpbmctYm90dG9tOiAxNDhweDt9XG4ucC1iLTE0OSB7cGFkZGluZy1ib3R0b206IDE0OXB4O31cbi5wLWItMTUwIHtwYWRkaW5nLWJvdHRvbTogMTUwcHg7fVxuLnAtYi0xNTEge3BhZGRpbmctYm90dG9tOiAxNTFweDt9XG4ucC1iLTE1MiB7cGFkZGluZy1ib3R0b206IDE1MnB4O31cbi5wLWItMTUzIHtwYWRkaW5nLWJvdHRvbTogMTUzcHg7fVxuLnAtYi0xNTQge3BhZGRpbmctYm90dG9tOiAxNTRweDt9XG4ucC1iLTE1NSB7cGFkZGluZy1ib3R0b206IDE1NXB4O31cbi5wLWItMTU2IHtwYWRkaW5nLWJvdHRvbTogMTU2cHg7fVxuLnAtYi0xNTcge3BhZGRpbmctYm90dG9tOiAxNTdweDt9XG4ucC1iLTE1OCB7cGFkZGluZy1ib3R0b206IDE1OHB4O31cbi5wLWItMTU5IHtwYWRkaW5nLWJvdHRvbTogMTU5cHg7fVxuLnAtYi0xNjAge3BhZGRpbmctYm90dG9tOiAxNjBweDt9XG4ucC1iLTE2MSB7cGFkZGluZy1ib3R0b206IDE2MXB4O31cbi5wLWItMTYyIHtwYWRkaW5nLWJvdHRvbTogMTYycHg7fVxuLnAtYi0xNjMge3BhZGRpbmctYm90dG9tOiAxNjNweDt9XG4ucC1iLTE2NCB7cGFkZGluZy1ib3R0b206IDE2NHB4O31cbi5wLWItMTY1IHtwYWRkaW5nLWJvdHRvbTogMTY1cHg7fVxuLnAtYi0xNjYge3BhZGRpbmctYm90dG9tOiAxNjZweDt9XG4ucC1iLTE2NyB7cGFkZGluZy1ib3R0b206IDE2N3B4O31cbi5wLWItMTY4IHtwYWRkaW5nLWJvdHRvbTogMTY4cHg7fVxuLnAtYi0xNjkge3BhZGRpbmctYm90dG9tOiAxNjlweDt9XG4ucC1iLTE3MCB7cGFkZGluZy1ib3R0b206IDE3MHB4O31cbi5wLWItMTcxIHtwYWRkaW5nLWJvdHRvbTogMTcxcHg7fVxuLnAtYi0xNzIge3BhZGRpbmctYm90dG9tOiAxNzJweDt9XG4ucC1iLTE3MyB7cGFkZGluZy1ib3R0b206IDE3M3B4O31cbi5wLWItMTc0IHtwYWRkaW5nLWJvdHRvbTogMTc0cHg7fVxuLnAtYi0xNzUge3BhZGRpbmctYm90dG9tOiAxNzVweDt9XG4ucC1iLTE3NiB7cGFkZGluZy1ib3R0b206IDE3NnB4O31cbi5wLWItMTc3IHtwYWRkaW5nLWJvdHRvbTogMTc3cHg7fVxuLnAtYi0xNzgge3BhZGRpbmctYm90dG9tOiAxNzhweDt9XG4ucC1iLTE3OSB7cGFkZGluZy1ib3R0b206IDE3OXB4O31cbi5wLWItMTgwIHtwYWRkaW5nLWJvdHRvbTogMTgwcHg7fVxuLnAtYi0xODEge3BhZGRpbmctYm90dG9tOiAxODFweDt9XG4ucC1iLTE4MiB7cGFkZGluZy1ib3R0b206IDE4MnB4O31cbi5wLWItMTgzIHtwYWRkaW5nLWJvdHRvbTogMTgzcHg7fVxuLnAtYi0xODQge3BhZGRpbmctYm90dG9tOiAxODRweDt9XG4ucC1iLTE4NSB7cGFkZGluZy1ib3R0b206IDE4NXB4O31cbi5wLWItMTg2IHtwYWRkaW5nLWJvdHRvbTogMTg2cHg7fVxuLnAtYi0xODcge3BhZGRpbmctYm90dG9tOiAxODdweDt9XG4ucC1iLTE4OCB7cGFkZGluZy1ib3R0b206IDE4OHB4O31cbi5wLWItMTg5IHtwYWRkaW5nLWJvdHRvbTogMTg5cHg7fVxuLnAtYi0xOTAge3BhZGRpbmctYm90dG9tOiAxOTBweDt9XG4ucC1iLTE5MSB7cGFkZGluZy1ib3R0b206IDE5MXB4O31cbi5wLWItMTkyIHtwYWRkaW5nLWJvdHRvbTogMTkycHg7fVxuLnAtYi0xOTMge3BhZGRpbmctYm90dG9tOiAxOTNweDt9XG4ucC1iLTE5NCB7cGFkZGluZy1ib3R0b206IDE5NHB4O31cbi5wLWItMTk1IHtwYWRkaW5nLWJvdHRvbTogMTk1cHg7fVxuLnAtYi0xOTYge3BhZGRpbmctYm90dG9tOiAxOTZweDt9XG4ucC1iLTE5NyB7cGFkZGluZy1ib3R0b206IDE5N3B4O31cbi5wLWItMTk4IHtwYWRkaW5nLWJvdHRvbTogMTk4cHg7fVxuLnAtYi0xOTkge3BhZGRpbmctYm90dG9tOiAxOTlweDt9XG4ucC1iLTIwMCB7cGFkZGluZy1ib3R0b206IDIwMHB4O31cbi5wLWItMjAxIHtwYWRkaW5nLWJvdHRvbTogMjAxcHg7fVxuLnAtYi0yMDIge3BhZGRpbmctYm90dG9tOiAyMDJweDt9XG4ucC1iLTIwMyB7cGFkZGluZy1ib3R0b206IDIwM3B4O31cbi5wLWItMjA0IHtwYWRkaW5nLWJvdHRvbTogMjA0cHg7fVxuLnAtYi0yMDUge3BhZGRpbmctYm90dG9tOiAyMDVweDt9XG4ucC1iLTIwNiB7cGFkZGluZy1ib3R0b206IDIwNnB4O31cbi5wLWItMjA3IHtwYWRkaW5nLWJvdHRvbTogMjA3cHg7fVxuLnAtYi0yMDgge3BhZGRpbmctYm90dG9tOiAyMDhweDt9XG4ucC1iLTIwOSB7cGFkZGluZy1ib3R0b206IDIwOXB4O31cbi5wLWItMjEwIHtwYWRkaW5nLWJvdHRvbTogMjEwcHg7fVxuLnAtYi0yMTEge3BhZGRpbmctYm90dG9tOiAyMTFweDt9XG4ucC1iLTIxMiB7cGFkZGluZy1ib3R0b206IDIxMnB4O31cbi5wLWItMjEzIHtwYWRkaW5nLWJvdHRvbTogMjEzcHg7fVxuLnAtYi0yMTQge3BhZGRpbmctYm90dG9tOiAyMTRweDt9XG4ucC1iLTIxNSB7cGFkZGluZy1ib3R0b206IDIxNXB4O31cbi5wLWItMjE2IHtwYWRkaW5nLWJvdHRvbTogMjE2cHg7fVxuLnAtYi0yMTcge3BhZGRpbmctYm90dG9tOiAyMTdweDt9XG4ucC1iLTIxOCB7cGFkZGluZy1ib3R0b206IDIxOHB4O31cbi5wLWItMjE5IHtwYWRkaW5nLWJvdHRvbTogMjE5cHg7fVxuLnAtYi0yMjAge3BhZGRpbmctYm90dG9tOiAyMjBweDt9XG4ucC1iLTIyMSB7cGFkZGluZy1ib3R0b206IDIyMXB4O31cbi5wLWItMjIyIHtwYWRkaW5nLWJvdHRvbTogMjIycHg7fVxuLnAtYi0yMjMge3BhZGRpbmctYm90dG9tOiAyMjNweDt9XG4ucC1iLTIyNCB7cGFkZGluZy1ib3R0b206IDIyNHB4O31cbi5wLWItMjI1IHtwYWRkaW5nLWJvdHRvbTogMjI1cHg7fVxuLnAtYi0yMjYge3BhZGRpbmctYm90dG9tOiAyMjZweDt9XG4ucC1iLTIyNyB7cGFkZGluZy1ib3R0b206IDIyN3B4O31cbi5wLWItMjI4IHtwYWRkaW5nLWJvdHRvbTogMjI4cHg7fVxuLnAtYi0yMjkge3BhZGRpbmctYm90dG9tOiAyMjlweDt9XG4ucC1iLTIzMCB7cGFkZGluZy1ib3R0b206IDIzMHB4O31cbi5wLWItMjMxIHtwYWRkaW5nLWJvdHRvbTogMjMxcHg7fVxuLnAtYi0yMzIge3BhZGRpbmctYm90dG9tOiAyMzJweDt9XG4ucC1iLTIzMyB7cGFkZGluZy1ib3R0b206IDIzM3B4O31cbi5wLWItMjM0IHtwYWRkaW5nLWJvdHRvbTogMjM0cHg7fVxuLnAtYi0yMzUge3BhZGRpbmctYm90dG9tOiAyMzVweDt9XG4ucC1iLTIzNiB7cGFkZGluZy1ib3R0b206IDIzNnB4O31cbi5wLWItMjM3IHtwYWRkaW5nLWJvdHRvbTogMjM3cHg7fVxuLnAtYi0yMzgge3BhZGRpbmctYm90dG9tOiAyMzhweDt9XG4ucC1iLTIzOSB7cGFkZGluZy1ib3R0b206IDIzOXB4O31cbi5wLWItMjQwIHtwYWRkaW5nLWJvdHRvbTogMjQwcHg7fVxuLnAtYi0yNDEge3BhZGRpbmctYm90dG9tOiAyNDFweDt9XG4ucC1iLTI0MiB7cGFkZGluZy1ib3R0b206IDI0MnB4O31cbi5wLWItMjQzIHtwYWRkaW5nLWJvdHRvbTogMjQzcHg7fVxuLnAtYi0yNDQge3BhZGRpbmctYm90dG9tOiAyNDRweDt9XG4ucC1iLTI0NSB7cGFkZGluZy1ib3R0b206IDI0NXB4O31cbi5wLWItMjQ2IHtwYWRkaW5nLWJvdHRvbTogMjQ2cHg7fVxuLnAtYi0yNDcge3BhZGRpbmctYm90dG9tOiAyNDdweDt9XG4ucC1iLTI0OCB7cGFkZGluZy1ib3R0b206IDI0OHB4O31cbi5wLWItMjQ5IHtwYWRkaW5nLWJvdHRvbTogMjQ5cHg7fVxuLnAtYi0yNTAge3BhZGRpbmctYm90dG9tOiAyNTBweDt9XG4ucC1sLTAge3BhZGRpbmctbGVmdDogMHB4O31cbi5wLWwtMSB7cGFkZGluZy1sZWZ0OiAxcHg7fVxuLnAtbC0yIHtwYWRkaW5nLWxlZnQ6IDJweDt9XG4ucC1sLTMge3BhZGRpbmctbGVmdDogM3B4O31cbi5wLWwtNCB7cGFkZGluZy1sZWZ0OiA0cHg7fVxuLnAtbC01IHtwYWRkaW5nLWxlZnQ6IDVweDt9XG4ucC1sLTYge3BhZGRpbmctbGVmdDogNnB4O31cbi5wLWwtNyB7cGFkZGluZy1sZWZ0OiA3cHg7fVxuLnAtbC04IHtwYWRkaW5nLWxlZnQ6IDhweDt9XG4ucC1sLTkge3BhZGRpbmctbGVmdDogOXB4O31cbi5wLWwtMTAge3BhZGRpbmctbGVmdDogMTBweDt9XG4ucC1sLTExIHtwYWRkaW5nLWxlZnQ6IDExcHg7fVxuLnAtbC0xMiB7cGFkZGluZy1sZWZ0OiAxMnB4O31cbi5wLWwtMTMge3BhZGRpbmctbGVmdDogMTNweDt9XG4ucC1sLTE0IHtwYWRkaW5nLWxlZnQ6IDE0cHg7fVxuLnAtbC0xNSB7cGFkZGluZy1sZWZ0OiAxNXB4O31cbi5wLWwtMTYge3BhZGRpbmctbGVmdDogMTZweDt9XG4ucC1sLTE3IHtwYWRkaW5nLWxlZnQ6IDE3cHg7fVxuLnAtbC0xOCB7cGFkZGluZy1sZWZ0OiAxOHB4O31cbi5wLWwtMTkge3BhZGRpbmctbGVmdDogMTlweDt9XG4ucC1sLTIwIHtwYWRkaW5nLWxlZnQ6IDIwcHg7fVxuLnAtbC0yMSB7cGFkZGluZy1sZWZ0OiAyMXB4O31cbi5wLWwtMjIge3BhZGRpbmctbGVmdDogMjJweDt9XG4ucC1sLTIzIHtwYWRkaW5nLWxlZnQ6IDIzcHg7fVxuLnAtbC0yNCB7cGFkZGluZy1sZWZ0OiAyNHB4O31cbi5wLWwtMjUge3BhZGRpbmctbGVmdDogMjVweDt9XG4ucC1sLTI2IHtwYWRkaW5nLWxlZnQ6IDI2cHg7fVxuLnAtbC0yNyB7cGFkZGluZy1sZWZ0OiAyN3B4O31cbi5wLWwtMjgge3BhZGRpbmctbGVmdDogMjhweDt9XG4ucC1sLTI5IHtwYWRkaW5nLWxlZnQ6IDI5cHg7fVxuLnAtbC0zMCB7cGFkZGluZy1sZWZ0OiAzMHB4O31cbi5wLWwtMzEge3BhZGRpbmctbGVmdDogMzFweDt9XG4ucC1sLTMyIHtwYWRkaW5nLWxlZnQ6IDMycHg7fVxuLnAtbC0zMyB7cGFkZGluZy1sZWZ0OiAzM3B4O31cbi5wLWwtMzQge3BhZGRpbmctbGVmdDogMzRweDt9XG4ucC1sLTM1IHtwYWRkaW5nLWxlZnQ6IDM1cHg7fVxuLnAtbC0zNiB7cGFkZGluZy1sZWZ0OiAzNnB4O31cbi5wLWwtMzcge3BhZGRpbmctbGVmdDogMzdweDt9XG4ucC1sLTM4IHtwYWRkaW5nLWxlZnQ6IDM4cHg7fVxuLnAtbC0zOSB7cGFkZGluZy1sZWZ0OiAzOXB4O31cbi5wLWwtNDAge3BhZGRpbmctbGVmdDogNDBweDt9XG4ucC1sLTQxIHtwYWRkaW5nLWxlZnQ6IDQxcHg7fVxuLnAtbC00MiB7cGFkZGluZy1sZWZ0OiA0MnB4O31cbi5wLWwtNDMge3BhZGRpbmctbGVmdDogNDNweDt9XG4ucC1sLTQ0IHtwYWRkaW5nLWxlZnQ6IDQ0cHg7fVxuLnAtbC00NSB7cGFkZGluZy1sZWZ0OiA0NXB4O31cbi5wLWwtNDYge3BhZGRpbmctbGVmdDogNDZweDt9XG4ucC1sLTQ3IHtwYWRkaW5nLWxlZnQ6IDQ3cHg7fVxuLnAtbC00OCB7cGFkZGluZy1sZWZ0OiA0OHB4O31cbi5wLWwtNDkge3BhZGRpbmctbGVmdDogNDlweDt9XG4ucC1sLTUwIHtwYWRkaW5nLWxlZnQ6IDUwcHg7fVxuLnAtbC01MSB7cGFkZGluZy1sZWZ0OiA1MXB4O31cbi5wLWwtNTIge3BhZGRpbmctbGVmdDogNTJweDt9XG4ucC1sLTUzIHtwYWRkaW5nLWxlZnQ6IDUzcHg7fVxuLnAtbC01NCB7cGFkZGluZy1sZWZ0OiA1NHB4O31cbi5wLWwtNTUge3BhZGRpbmctbGVmdDogNTVweDt9XG4ucC1sLTU2IHtwYWRkaW5nLWxlZnQ6IDU2cHg7fVxuLnAtbC01NyB7cGFkZGluZy1sZWZ0OiA1N3B4O31cbi5wLWwtNTgge3BhZGRpbmctbGVmdDogNThweDt9XG4ucC1sLTU5IHtwYWRkaW5nLWxlZnQ6IDU5cHg7fVxuLnAtbC02MCB7cGFkZGluZy1sZWZ0OiA2MHB4O31cbi5wLWwtNjEge3BhZGRpbmctbGVmdDogNjFweDt9XG4ucC1sLTYyIHtwYWRkaW5nLWxlZnQ6IDYycHg7fVxuLnAtbC02MyB7cGFkZGluZy1sZWZ0OiA2M3B4O31cbi5wLWwtNjQge3BhZGRpbmctbGVmdDogNjRweDt9XG4ucC1sLTY1IHtwYWRkaW5nLWxlZnQ6IDY1cHg7fVxuLnAtbC02NiB7cGFkZGluZy1sZWZ0OiA2NnB4O31cbi5wLWwtNjcge3BhZGRpbmctbGVmdDogNjdweDt9XG4ucC1sLTY4IHtwYWRkaW5nLWxlZnQ6IDY4cHg7fVxuLnAtbC02OSB7cGFkZGluZy1sZWZ0OiA2OXB4O31cbi5wLWwtNzAge3BhZGRpbmctbGVmdDogNzBweDt9XG4ucC1sLTcxIHtwYWRkaW5nLWxlZnQ6IDcxcHg7fVxuLnAtbC03MiB7cGFkZGluZy1sZWZ0OiA3MnB4O31cbi5wLWwtNzMge3BhZGRpbmctbGVmdDogNzNweDt9XG4ucC1sLTc0IHtwYWRkaW5nLWxlZnQ6IDc0cHg7fVxuLnAtbC03NSB7cGFkZGluZy1sZWZ0OiA3NXB4O31cbi5wLWwtNzYge3BhZGRpbmctbGVmdDogNzZweDt9XG4ucC1sLTc3IHtwYWRkaW5nLWxlZnQ6IDc3cHg7fVxuLnAtbC03OCB7cGFkZGluZy1sZWZ0OiA3OHB4O31cbi5wLWwtNzkge3BhZGRpbmctbGVmdDogNzlweDt9XG4ucC1sLTgwIHtwYWRkaW5nLWxlZnQ6IDgwcHg7fVxuLnAtbC04MSB7cGFkZGluZy1sZWZ0OiA4MXB4O31cbi5wLWwtODIge3BhZGRpbmctbGVmdDogODJweDt9XG4ucC1sLTgzIHtwYWRkaW5nLWxlZnQ6IDgzcHg7fVxuLnAtbC04NCB7cGFkZGluZy1sZWZ0OiA4NHB4O31cbi5wLWwtODUge3BhZGRpbmctbGVmdDogODVweDt9XG4ucC1sLTg2IHtwYWRkaW5nLWxlZnQ6IDg2cHg7fVxuLnAtbC04NyB7cGFkZGluZy1sZWZ0OiA4N3B4O31cbi5wLWwtODgge3BhZGRpbmctbGVmdDogODhweDt9XG4ucC1sLTg5IHtwYWRkaW5nLWxlZnQ6IDg5cHg7fVxuLnAtbC05MCB7cGFkZGluZy1sZWZ0OiA5MHB4O31cbi5wLWwtOTEge3BhZGRpbmctbGVmdDogOTFweDt9XG4ucC1sLTkyIHtwYWRkaW5nLWxlZnQ6IDkycHg7fVxuLnAtbC05MyB7cGFkZGluZy1sZWZ0OiA5M3B4O31cbi5wLWwtOTQge3BhZGRpbmctbGVmdDogOTRweDt9XG4ucC1sLTk1IHtwYWRkaW5nLWxlZnQ6IDk1cHg7fVxuLnAtbC05NiB7cGFkZGluZy1sZWZ0OiA5NnB4O31cbi5wLWwtOTcge3BhZGRpbmctbGVmdDogOTdweDt9XG4ucC1sLTk4IHtwYWRkaW5nLWxlZnQ6IDk4cHg7fVxuLnAtbC05OSB7cGFkZGluZy1sZWZ0OiA5OXB4O31cbi5wLWwtMTAwIHtwYWRkaW5nLWxlZnQ6IDEwMHB4O31cbi5wLWwtMTAxIHtwYWRkaW5nLWxlZnQ6IDEwMXB4O31cbi5wLWwtMTAyIHtwYWRkaW5nLWxlZnQ6IDEwMnB4O31cbi5wLWwtMTAzIHtwYWRkaW5nLWxlZnQ6IDEwM3B4O31cbi5wLWwtMTA0IHtwYWRkaW5nLWxlZnQ6IDEwNHB4O31cbi5wLWwtMTA1IHtwYWRkaW5nLWxlZnQ6IDEwNXB4O31cbi5wLWwtMTA2IHtwYWRkaW5nLWxlZnQ6IDEwNnB4O31cbi5wLWwtMTA3IHtwYWRkaW5nLWxlZnQ6IDEwN3B4O31cbi5wLWwtMTA4IHtwYWRkaW5nLWxlZnQ6IDEwOHB4O31cbi5wLWwtMTA5IHtwYWRkaW5nLWxlZnQ6IDEwOXB4O31cbi5wLWwtMTEwIHtwYWRkaW5nLWxlZnQ6IDExMHB4O31cbi5wLWwtMTExIHtwYWRkaW5nLWxlZnQ6IDExMXB4O31cbi5wLWwtMTEyIHtwYWRkaW5nLWxlZnQ6IDExMnB4O31cbi5wLWwtMTEzIHtwYWRkaW5nLWxlZnQ6IDExM3B4O31cbi5wLWwtMTE0IHtwYWRkaW5nLWxlZnQ6IDExNHB4O31cbi5wLWwtMTE1IHtwYWRkaW5nLWxlZnQ6IDExNXB4O31cbi5wLWwtMTE2IHtwYWRkaW5nLWxlZnQ6IDExNnB4O31cbi5wLWwtMTE3IHtwYWRkaW5nLWxlZnQ6IDExN3B4O31cbi5wLWwtMTE4IHtwYWRkaW5nLWxlZnQ6IDExOHB4O31cbi5wLWwtMTE5IHtwYWRkaW5nLWxlZnQ6IDExOXB4O31cbi5wLWwtMTIwIHtwYWRkaW5nLWxlZnQ6IDEyMHB4O31cbi5wLWwtMTIxIHtwYWRkaW5nLWxlZnQ6IDEyMXB4O31cbi5wLWwtMTIyIHtwYWRkaW5nLWxlZnQ6IDEyMnB4O31cbi5wLWwtMTIzIHtwYWRkaW5nLWxlZnQ6IDEyM3B4O31cbi5wLWwtMTI0IHtwYWRkaW5nLWxlZnQ6IDEyNHB4O31cbi5wLWwtMTI1IHtwYWRkaW5nLWxlZnQ6IDEyNXB4O31cbi5wLWwtMTI2IHtwYWRkaW5nLWxlZnQ6IDEyNnB4O31cbi5wLWwtMTI3IHtwYWRkaW5nLWxlZnQ6IDEyN3B4O31cbi5wLWwtMTI4IHtwYWRkaW5nLWxlZnQ6IDEyOHB4O31cbi5wLWwtMTI5IHtwYWRkaW5nLWxlZnQ6IDEyOXB4O31cbi5wLWwtMTMwIHtwYWRkaW5nLWxlZnQ6IDEzMHB4O31cbi5wLWwtMTMxIHtwYWRkaW5nLWxlZnQ6IDEzMXB4O31cbi5wLWwtMTMyIHtwYWRkaW5nLWxlZnQ6IDEzMnB4O31cbi5wLWwtMTMzIHtwYWRkaW5nLWxlZnQ6IDEzM3B4O31cbi5wLWwtMTM0IHtwYWRkaW5nLWxlZnQ6IDEzNHB4O31cbi5wLWwtMTM1IHtwYWRkaW5nLWxlZnQ6IDEzNXB4O31cbi5wLWwtMTM2IHtwYWRkaW5nLWxlZnQ6IDEzNnB4O31cbi5wLWwtMTM3IHtwYWRkaW5nLWxlZnQ6IDEzN3B4O31cbi5wLWwtMTM4IHtwYWRkaW5nLWxlZnQ6IDEzOHB4O31cbi5wLWwtMTM5IHtwYWRkaW5nLWxlZnQ6IDEzOXB4O31cbi5wLWwtMTQwIHtwYWRkaW5nLWxlZnQ6IDE0MHB4O31cbi5wLWwtMTQxIHtwYWRkaW5nLWxlZnQ6IDE0MXB4O31cbi5wLWwtMTQyIHtwYWRkaW5nLWxlZnQ6IDE0MnB4O31cbi5wLWwtMTQzIHtwYWRkaW5nLWxlZnQ6IDE0M3B4O31cbi5wLWwtMTQ0IHtwYWRkaW5nLWxlZnQ6IDE0NHB4O31cbi5wLWwtMTQ1IHtwYWRkaW5nLWxlZnQ6IDE0NXB4O31cbi5wLWwtMTQ2IHtwYWRkaW5nLWxlZnQ6IDE0NnB4O31cbi5wLWwtMTQ3IHtwYWRkaW5nLWxlZnQ6IDE0N3B4O31cbi5wLWwtMTQ4IHtwYWRkaW5nLWxlZnQ6IDE0OHB4O31cbi5wLWwtMTQ5IHtwYWRkaW5nLWxlZnQ6IDE0OXB4O31cbi5wLWwtMTUwIHtwYWRkaW5nLWxlZnQ6IDE1MHB4O31cbi5wLWwtMTUxIHtwYWRkaW5nLWxlZnQ6IDE1MXB4O31cbi5wLWwtMTUyIHtwYWRkaW5nLWxlZnQ6IDE1MnB4O31cbi5wLWwtMTUzIHtwYWRkaW5nLWxlZnQ6IDE1M3B4O31cbi5wLWwtMTU0IHtwYWRkaW5nLWxlZnQ6IDE1NHB4O31cbi5wLWwtMTU1IHtwYWRkaW5nLWxlZnQ6IDE1NXB4O31cbi5wLWwtMTU2IHtwYWRkaW5nLWxlZnQ6IDE1NnB4O31cbi5wLWwtMTU3IHtwYWRkaW5nLWxlZnQ6IDE1N3B4O31cbi5wLWwtMTU4IHtwYWRkaW5nLWxlZnQ6IDE1OHB4O31cbi5wLWwtMTU5IHtwYWRkaW5nLWxlZnQ6IDE1OXB4O31cbi5wLWwtMTYwIHtwYWRkaW5nLWxlZnQ6IDE2MHB4O31cbi5wLWwtMTYxIHtwYWRkaW5nLWxlZnQ6IDE2MXB4O31cbi5wLWwtMTYyIHtwYWRkaW5nLWxlZnQ6IDE2MnB4O31cbi5wLWwtMTYzIHtwYWRkaW5nLWxlZnQ6IDE2M3B4O31cbi5wLWwtMTY0IHtwYWRkaW5nLWxlZnQ6IDE2NHB4O31cbi5wLWwtMTY1IHtwYWRkaW5nLWxlZnQ6IDE2NXB4O31cbi5wLWwtMTY2IHtwYWRkaW5nLWxlZnQ6IDE2NnB4O31cbi5wLWwtMTY3IHtwYWRkaW5nLWxlZnQ6IDE2N3B4O31cbi5wLWwtMTY4IHtwYWRkaW5nLWxlZnQ6IDE2OHB4O31cbi5wLWwtMTY5IHtwYWRkaW5nLWxlZnQ6IDE2OXB4O31cbi5wLWwtMTcwIHtwYWRkaW5nLWxlZnQ6IDE3MHB4O31cbi5wLWwtMTcxIHtwYWRkaW5nLWxlZnQ6IDE3MXB4O31cbi5wLWwtMTcyIHtwYWRkaW5nLWxlZnQ6IDE3MnB4O31cbi5wLWwtMTczIHtwYWRkaW5nLWxlZnQ6IDE3M3B4O31cbi5wLWwtMTc0IHtwYWRkaW5nLWxlZnQ6IDE3NHB4O31cbi5wLWwtMTc1IHtwYWRkaW5nLWxlZnQ6IDE3NXB4O31cbi5wLWwtMTc2IHtwYWRkaW5nLWxlZnQ6IDE3NnB4O31cbi5wLWwtMTc3IHtwYWRkaW5nLWxlZnQ6IDE3N3B4O31cbi5wLWwtMTc4IHtwYWRkaW5nLWxlZnQ6IDE3OHB4O31cbi5wLWwtMTc5IHtwYWRkaW5nLWxlZnQ6IDE3OXB4O31cbi5wLWwtMTgwIHtwYWRkaW5nLWxlZnQ6IDE4MHB4O31cbi5wLWwtMTgxIHtwYWRkaW5nLWxlZnQ6IDE4MXB4O31cbi5wLWwtMTgyIHtwYWRkaW5nLWxlZnQ6IDE4MnB4O31cbi5wLWwtMTgzIHtwYWRkaW5nLWxlZnQ6IDE4M3B4O31cbi5wLWwtMTg0IHtwYWRkaW5nLWxlZnQ6IDE4NHB4O31cbi5wLWwtMTg1IHtwYWRkaW5nLWxlZnQ6IDE4NXB4O31cbi5wLWwtMTg2IHtwYWRkaW5nLWxlZnQ6IDE4NnB4O31cbi5wLWwtMTg3IHtwYWRkaW5nLWxlZnQ6IDE4N3B4O31cbi5wLWwtMTg4IHtwYWRkaW5nLWxlZnQ6IDE4OHB4O31cbi5wLWwtMTg5IHtwYWRkaW5nLWxlZnQ6IDE4OXB4O31cbi5wLWwtMTkwIHtwYWRkaW5nLWxlZnQ6IDE5MHB4O31cbi5wLWwtMTkxIHtwYWRkaW5nLWxlZnQ6IDE5MXB4O31cbi5wLWwtMTkyIHtwYWRkaW5nLWxlZnQ6IDE5MnB4O31cbi5wLWwtMTkzIHtwYWRkaW5nLWxlZnQ6IDE5M3B4O31cbi5wLWwtMTk0IHtwYWRkaW5nLWxlZnQ6IDE5NHB4O31cbi5wLWwtMTk1IHtwYWRkaW5nLWxlZnQ6IDE5NXB4O31cbi5wLWwtMTk2IHtwYWRkaW5nLWxlZnQ6IDE5NnB4O31cbi5wLWwtMTk3IHtwYWRkaW5nLWxlZnQ6IDE5N3B4O31cbi5wLWwtMTk4IHtwYWRkaW5nLWxlZnQ6IDE5OHB4O31cbi5wLWwtMTk5IHtwYWRkaW5nLWxlZnQ6IDE5OXB4O31cbi5wLWwtMjAwIHtwYWRkaW5nLWxlZnQ6IDIwMHB4O31cbi5wLWwtMjAxIHtwYWRkaW5nLWxlZnQ6IDIwMXB4O31cbi5wLWwtMjAyIHtwYWRkaW5nLWxlZnQ6IDIwMnB4O31cbi5wLWwtMjAzIHtwYWRkaW5nLWxlZnQ6IDIwM3B4O31cbi5wLWwtMjA0IHtwYWRkaW5nLWxlZnQ6IDIwNHB4O31cbi5wLWwtMjA1IHtwYWRkaW5nLWxlZnQ6IDIwNXB4O31cbi5wLWwtMjA2IHtwYWRkaW5nLWxlZnQ6IDIwNnB4O31cbi5wLWwtMjA3IHtwYWRkaW5nLWxlZnQ6IDIwN3B4O31cbi5wLWwtMjA4IHtwYWRkaW5nLWxlZnQ6IDIwOHB4O31cbi5wLWwtMjA5IHtwYWRkaW5nLWxlZnQ6IDIwOXB4O31cbi5wLWwtMjEwIHtwYWRkaW5nLWxlZnQ6IDIxMHB4O31cbi5wLWwtMjExIHtwYWRkaW5nLWxlZnQ6IDIxMXB4O31cbi5wLWwtMjEyIHtwYWRkaW5nLWxlZnQ6IDIxMnB4O31cbi5wLWwtMjEzIHtwYWRkaW5nLWxlZnQ6IDIxM3B4O31cbi5wLWwtMjE0IHtwYWRkaW5nLWxlZnQ6IDIxNHB4O31cbi5wLWwtMjE1IHtwYWRkaW5nLWxlZnQ6IDIxNXB4O31cbi5wLWwtMjE2IHtwYWRkaW5nLWxlZnQ6IDIxNnB4O31cbi5wLWwtMjE3IHtwYWRkaW5nLWxlZnQ6IDIxN3B4O31cbi5wLWwtMjE4IHtwYWRkaW5nLWxlZnQ6IDIxOHB4O31cbi5wLWwtMjE5IHtwYWRkaW5nLWxlZnQ6IDIxOXB4O31cbi5wLWwtMjIwIHtwYWRkaW5nLWxlZnQ6IDIyMHB4O31cbi5wLWwtMjIxIHtwYWRkaW5nLWxlZnQ6IDIyMXB4O31cbi5wLWwtMjIyIHtwYWRkaW5nLWxlZnQ6IDIyMnB4O31cbi5wLWwtMjIzIHtwYWRkaW5nLWxlZnQ6IDIyM3B4O31cbi5wLWwtMjI0IHtwYWRkaW5nLWxlZnQ6IDIyNHB4O31cbi5wLWwtMjI1IHtwYWRkaW5nLWxlZnQ6IDIyNXB4O31cbi5wLWwtMjI2IHtwYWRkaW5nLWxlZnQ6IDIyNnB4O31cbi5wLWwtMjI3IHtwYWRkaW5nLWxlZnQ6IDIyN3B4O31cbi5wLWwtMjI4IHtwYWRkaW5nLWxlZnQ6IDIyOHB4O31cbi5wLWwtMjI5IHtwYWRkaW5nLWxlZnQ6IDIyOXB4O31cbi5wLWwtMjMwIHtwYWRkaW5nLWxlZnQ6IDIzMHB4O31cbi5wLWwtMjMxIHtwYWRkaW5nLWxlZnQ6IDIzMXB4O31cbi5wLWwtMjMyIHtwYWRkaW5nLWxlZnQ6IDIzMnB4O31cbi5wLWwtMjMzIHtwYWRkaW5nLWxlZnQ6IDIzM3B4O31cbi5wLWwtMjM0IHtwYWRkaW5nLWxlZnQ6IDIzNHB4O31cbi5wLWwtMjM1IHtwYWRkaW5nLWxlZnQ6IDIzNXB4O31cbi5wLWwtMjM2IHtwYWRkaW5nLWxlZnQ6IDIzNnB4O31cbi5wLWwtMjM3IHtwYWRkaW5nLWxlZnQ6IDIzN3B4O31cbi5wLWwtMjM4IHtwYWRkaW5nLWxlZnQ6IDIzOHB4O31cbi5wLWwtMjM5IHtwYWRkaW5nLWxlZnQ6IDIzOXB4O31cbi5wLWwtMjQwIHtwYWRkaW5nLWxlZnQ6IDI0MHB4O31cbi5wLWwtMjQxIHtwYWRkaW5nLWxlZnQ6IDI0MXB4O31cbi5wLWwtMjQyIHtwYWRkaW5nLWxlZnQ6IDI0MnB4O31cbi5wLWwtMjQzIHtwYWRkaW5nLWxlZnQ6IDI0M3B4O31cbi5wLWwtMjQ0IHtwYWRkaW5nLWxlZnQ6IDI0NHB4O31cbi5wLWwtMjQ1IHtwYWRkaW5nLWxlZnQ6IDI0NXB4O31cbi5wLWwtMjQ2IHtwYWRkaW5nLWxlZnQ6IDI0NnB4O31cbi5wLWwtMjQ3IHtwYWRkaW5nLWxlZnQ6IDI0N3B4O31cbi5wLWwtMjQ4IHtwYWRkaW5nLWxlZnQ6IDI0OHB4O31cbi5wLWwtMjQ5IHtwYWRkaW5nLWxlZnQ6IDI0OXB4O31cbi5wLWwtMjUwIHtwYWRkaW5nLWxlZnQ6IDI1MHB4O31cbi5wLXItMCB7cGFkZGluZy1yaWdodDogMHB4O31cbi5wLXItMSB7cGFkZGluZy1yaWdodDogMXB4O31cbi5wLXItMiB7cGFkZGluZy1yaWdodDogMnB4O31cbi5wLXItMyB7cGFkZGluZy1yaWdodDogM3B4O31cbi5wLXItNCB7cGFkZGluZy1yaWdodDogNHB4O31cbi5wLXItNSB7cGFkZGluZy1yaWdodDogNXB4O31cbi5wLXItNiB7cGFkZGluZy1yaWdodDogNnB4O31cbi5wLXItNyB7cGFkZGluZy1yaWdodDogN3B4O31cbi5wLXItOCB7cGFkZGluZy1yaWdodDogOHB4O31cbi5wLXItOSB7cGFkZGluZy1yaWdodDogOXB4O31cbi5wLXItMTAge3BhZGRpbmctcmlnaHQ6IDEwcHg7fVxuLnAtci0xMSB7cGFkZGluZy1yaWdodDogMTFweDt9XG4ucC1yLTEyIHtwYWRkaW5nLXJpZ2h0OiAxMnB4O31cbi5wLXItMTMge3BhZGRpbmctcmlnaHQ6IDEzcHg7fVxuLnAtci0xNCB7cGFkZGluZy1yaWdodDogMTRweDt9XG4ucC1yLTE1IHtwYWRkaW5nLXJpZ2h0OiAxNXB4O31cbi5wLXItMTYge3BhZGRpbmctcmlnaHQ6IDE2cHg7fVxuLnAtci0xNyB7cGFkZGluZy1yaWdodDogMTdweDt9XG4ucC1yLTE4IHtwYWRkaW5nLXJpZ2h0OiAxOHB4O31cbi5wLXItMTkge3BhZGRpbmctcmlnaHQ6IDE5cHg7fVxuLnAtci0yMCB7cGFkZGluZy1yaWdodDogMjBweDt9XG4ucC1yLTIxIHtwYWRkaW5nLXJpZ2h0OiAyMXB4O31cbi5wLXItMjIge3BhZGRpbmctcmlnaHQ6IDIycHg7fVxuLnAtci0yMyB7cGFkZGluZy1yaWdodDogMjNweDt9XG4ucC1yLTI0IHtwYWRkaW5nLXJpZ2h0OiAyNHB4O31cbi5wLXItMjUge3BhZGRpbmctcmlnaHQ6IDI1cHg7fVxuLnAtci0yNiB7cGFkZGluZy1yaWdodDogMjZweDt9XG4ucC1yLTI3IHtwYWRkaW5nLXJpZ2h0OiAyN3B4O31cbi5wLXItMjgge3BhZGRpbmctcmlnaHQ6IDI4cHg7fVxuLnAtci0yOSB7cGFkZGluZy1yaWdodDogMjlweDt9XG4ucC1yLTMwIHtwYWRkaW5nLXJpZ2h0OiAzMHB4O31cbi5wLXItMzEge3BhZGRpbmctcmlnaHQ6IDMxcHg7fVxuLnAtci0zMiB7cGFkZGluZy1yaWdodDogMzJweDt9XG4ucC1yLTMzIHtwYWRkaW5nLXJpZ2h0OiAzM3B4O31cbi5wLXItMzQge3BhZGRpbmctcmlnaHQ6IDM0cHg7fVxuLnAtci0zNSB7cGFkZGluZy1yaWdodDogMzVweDt9XG4ucC1yLTM2IHtwYWRkaW5nLXJpZ2h0OiAzNnB4O31cbi5wLXItMzcge3BhZGRpbmctcmlnaHQ6IDM3cHg7fVxuLnAtci0zOCB7cGFkZGluZy1yaWdodDogMzhweDt9XG4ucC1yLTM5IHtwYWRkaW5nLXJpZ2h0OiAzOXB4O31cbi5wLXItNDAge3BhZGRpbmctcmlnaHQ6IDQwcHg7fVxuLnAtci00MSB7cGFkZGluZy1yaWdodDogNDFweDt9XG4ucC1yLTQyIHtwYWRkaW5nLXJpZ2h0OiA0MnB4O31cbi5wLXItNDMge3BhZGRpbmctcmlnaHQ6IDQzcHg7fVxuLnAtci00NCB7cGFkZGluZy1yaWdodDogNDRweDt9XG4ucC1yLTQ1IHtwYWRkaW5nLXJpZ2h0OiA0NXB4O31cbi5wLXItNDYge3BhZGRpbmctcmlnaHQ6IDQ2cHg7fVxuLnAtci00NyB7cGFkZGluZy1yaWdodDogNDdweDt9XG4ucC1yLTQ4IHtwYWRkaW5nLXJpZ2h0OiA0OHB4O31cbi5wLXItNDkge3BhZGRpbmctcmlnaHQ6IDQ5cHg7fVxuLnAtci01MCB7cGFkZGluZy1yaWdodDogNTBweDt9XG4ucC1yLTUxIHtwYWRkaW5nLXJpZ2h0OiA1MXB4O31cbi5wLXItNTIge3BhZGRpbmctcmlnaHQ6IDUycHg7fVxuLnAtci01MyB7cGFkZGluZy1yaWdodDogNTNweDt9XG4ucC1yLTU0IHtwYWRkaW5nLXJpZ2h0OiA1NHB4O31cbi5wLXItNTUge3BhZGRpbmctcmlnaHQ6IDU1cHg7fVxuLnAtci01NiB7cGFkZGluZy1yaWdodDogNTZweDt9XG4ucC1yLTU3IHtwYWRkaW5nLXJpZ2h0OiA1N3B4O31cbi5wLXItNTgge3BhZGRpbmctcmlnaHQ6IDU4cHg7fVxuLnAtci01OSB7cGFkZGluZy1yaWdodDogNTlweDt9XG4ucC1yLTYwIHtwYWRkaW5nLXJpZ2h0OiA2MHB4O31cbi5wLXItNjEge3BhZGRpbmctcmlnaHQ6IDYxcHg7fVxuLnAtci02MiB7cGFkZGluZy1yaWdodDogNjJweDt9XG4ucC1yLTYzIHtwYWRkaW5nLXJpZ2h0OiA2M3B4O31cbi5wLXItNjQge3BhZGRpbmctcmlnaHQ6IDY0cHg7fVxuLnAtci02NSB7cGFkZGluZy1yaWdodDogNjVweDt9XG4ucC1yLTY2IHtwYWRkaW5nLXJpZ2h0OiA2NnB4O31cbi5wLXItNjcge3BhZGRpbmctcmlnaHQ6IDY3cHg7fVxuLnAtci02OCB7cGFkZGluZy1yaWdodDogNjhweDt9XG4ucC1yLTY5IHtwYWRkaW5nLXJpZ2h0OiA2OXB4O31cbi5wLXItNzAge3BhZGRpbmctcmlnaHQ6IDcwcHg7fVxuLnAtci03MSB7cGFkZGluZy1yaWdodDogNzFweDt9XG4ucC1yLTcyIHtwYWRkaW5nLXJpZ2h0OiA3MnB4O31cbi5wLXItNzMge3BhZGRpbmctcmlnaHQ6IDczcHg7fVxuLnAtci03NCB7cGFkZGluZy1yaWdodDogNzRweDt9XG4ucC1yLTc1IHtwYWRkaW5nLXJpZ2h0OiA3NXB4O31cbi5wLXItNzYge3BhZGRpbmctcmlnaHQ6IDc2cHg7fVxuLnAtci03NyB7cGFkZGluZy1yaWdodDogNzdweDt9XG4ucC1yLTc4IHtwYWRkaW5nLXJpZ2h0OiA3OHB4O31cbi5wLXItNzkge3BhZGRpbmctcmlnaHQ6IDc5cHg7fVxuLnAtci04MCB7cGFkZGluZy1yaWdodDogODBweDt9XG4ucC1yLTgxIHtwYWRkaW5nLXJpZ2h0OiA4MXB4O31cbi5wLXItODIge3BhZGRpbmctcmlnaHQ6IDgycHg7fVxuLnAtci04MyB7cGFkZGluZy1yaWdodDogODNweDt9XG4ucC1yLTg0IHtwYWRkaW5nLXJpZ2h0OiA4NHB4O31cbi5wLXItODUge3BhZGRpbmctcmlnaHQ6IDg1cHg7fVxuLnAtci04NiB7cGFkZGluZy1yaWdodDogODZweDt9XG4ucC1yLTg3IHtwYWRkaW5nLXJpZ2h0OiA4N3B4O31cbi5wLXItODgge3BhZGRpbmctcmlnaHQ6IDg4cHg7fVxuLnAtci04OSB7cGFkZGluZy1yaWdodDogODlweDt9XG4ucC1yLTkwIHtwYWRkaW5nLXJpZ2h0OiA5MHB4O31cbi5wLXItOTEge3BhZGRpbmctcmlnaHQ6IDkxcHg7fVxuLnAtci05MiB7cGFkZGluZy1yaWdodDogOTJweDt9XG4ucC1yLTkzIHtwYWRkaW5nLXJpZ2h0OiA5M3B4O31cbi5wLXItOTQge3BhZGRpbmctcmlnaHQ6IDk0cHg7fVxuLnAtci05NSB7cGFkZGluZy1yaWdodDogOTVweDt9XG4ucC1yLTk2IHtwYWRkaW5nLXJpZ2h0OiA5NnB4O31cbi5wLXItOTcge3BhZGRpbmctcmlnaHQ6IDk3cHg7fVxuLnAtci05OCB7cGFkZGluZy1yaWdodDogOThweDt9XG4ucC1yLTk5IHtwYWRkaW5nLXJpZ2h0OiA5OXB4O31cbi5wLXItMTAwIHtwYWRkaW5nLXJpZ2h0OiAxMDBweDt9XG4ucC1yLTEwMSB7cGFkZGluZy1yaWdodDogMTAxcHg7fVxuLnAtci0xMDIge3BhZGRpbmctcmlnaHQ6IDEwMnB4O31cbi5wLXItMTAzIHtwYWRkaW5nLXJpZ2h0OiAxMDNweDt9XG4ucC1yLTEwNCB7cGFkZGluZy1yaWdodDogMTA0cHg7fVxuLnAtci0xMDUge3BhZGRpbmctcmlnaHQ6IDEwNXB4O31cbi5wLXItMTA2IHtwYWRkaW5nLXJpZ2h0OiAxMDZweDt9XG4ucC1yLTEwNyB7cGFkZGluZy1yaWdodDogMTA3cHg7fVxuLnAtci0xMDgge3BhZGRpbmctcmlnaHQ6IDEwOHB4O31cbi5wLXItMTA5IHtwYWRkaW5nLXJpZ2h0OiAxMDlweDt9XG4ucC1yLTExMCB7cGFkZGluZy1yaWdodDogMTEwcHg7fVxuLnAtci0xMTEge3BhZGRpbmctcmlnaHQ6IDExMXB4O31cbi5wLXItMTEyIHtwYWRkaW5nLXJpZ2h0OiAxMTJweDt9XG4ucC1yLTExMyB7cGFkZGluZy1yaWdodDogMTEzcHg7fVxuLnAtci0xMTQge3BhZGRpbmctcmlnaHQ6IDExNHB4O31cbi5wLXItMTE1IHtwYWRkaW5nLXJpZ2h0OiAxMTVweDt9XG4ucC1yLTExNiB7cGFkZGluZy1yaWdodDogMTE2cHg7fVxuLnAtci0xMTcge3BhZGRpbmctcmlnaHQ6IDExN3B4O31cbi5wLXItMTE4IHtwYWRkaW5nLXJpZ2h0OiAxMThweDt9XG4ucC1yLTExOSB7cGFkZGluZy1yaWdodDogMTE5cHg7fVxuLnAtci0xMjAge3BhZGRpbmctcmlnaHQ6IDEyMHB4O31cbi5wLXItMTIxIHtwYWRkaW5nLXJpZ2h0OiAxMjFweDt9XG4ucC1yLTEyMiB7cGFkZGluZy1yaWdodDogMTIycHg7fVxuLnAtci0xMjMge3BhZGRpbmctcmlnaHQ6IDEyM3B4O31cbi5wLXItMTI0IHtwYWRkaW5nLXJpZ2h0OiAxMjRweDt9XG4ucC1yLTEyNSB7cGFkZGluZy1yaWdodDogMTI1cHg7fVxuLnAtci0xMjYge3BhZGRpbmctcmlnaHQ6IDEyNnB4O31cbi5wLXItMTI3IHtwYWRkaW5nLXJpZ2h0OiAxMjdweDt9XG4ucC1yLTEyOCB7cGFkZGluZy1yaWdodDogMTI4cHg7fVxuLnAtci0xMjkge3BhZGRpbmctcmlnaHQ6IDEyOXB4O31cbi5wLXItMTMwIHtwYWRkaW5nLXJpZ2h0OiAxMzBweDt9XG4ucC1yLTEzMSB7cGFkZGluZy1yaWdodDogMTMxcHg7fVxuLnAtci0xMzIge3BhZGRpbmctcmlnaHQ6IDEzMnB4O31cbi5wLXItMTMzIHtwYWRkaW5nLXJpZ2h0OiAxMzNweDt9XG4ucC1yLTEzNCB7cGFkZGluZy1yaWdodDogMTM0cHg7fVxuLnAtci0xMzUge3BhZGRpbmctcmlnaHQ6IDEzNXB4O31cbi5wLXItMTM2IHtwYWRkaW5nLXJpZ2h0OiAxMzZweDt9XG4ucC1yLTEzNyB7cGFkZGluZy1yaWdodDogMTM3cHg7fVxuLnAtci0xMzgge3BhZGRpbmctcmlnaHQ6IDEzOHB4O31cbi5wLXItMTM5IHtwYWRkaW5nLXJpZ2h0OiAxMzlweDt9XG4ucC1yLTE0MCB7cGFkZGluZy1yaWdodDogMTQwcHg7fVxuLnAtci0xNDEge3BhZGRpbmctcmlnaHQ6IDE0MXB4O31cbi5wLXItMTQyIHtwYWRkaW5nLXJpZ2h0OiAxNDJweDt9XG4ucC1yLTE0MyB7cGFkZGluZy1yaWdodDogMTQzcHg7fVxuLnAtci0xNDQge3BhZGRpbmctcmlnaHQ6IDE0NHB4O31cbi5wLXItMTQ1IHtwYWRkaW5nLXJpZ2h0OiAxNDVweDt9XG4ucC1yLTE0NiB7cGFkZGluZy1yaWdodDogMTQ2cHg7fVxuLnAtci0xNDcge3BhZGRpbmctcmlnaHQ6IDE0N3B4O31cbi5wLXItMTQ4IHtwYWRkaW5nLXJpZ2h0OiAxNDhweDt9XG4ucC1yLTE0OSB7cGFkZGluZy1yaWdodDogMTQ5cHg7fVxuLnAtci0xNTAge3BhZGRpbmctcmlnaHQ6IDE1MHB4O31cbi5wLXItMTUxIHtwYWRkaW5nLXJpZ2h0OiAxNTFweDt9XG4ucC1yLTE1MiB7cGFkZGluZy1yaWdodDogMTUycHg7fVxuLnAtci0xNTMge3BhZGRpbmctcmlnaHQ6IDE1M3B4O31cbi5wLXItMTU0IHtwYWRkaW5nLXJpZ2h0OiAxNTRweDt9XG4ucC1yLTE1NSB7cGFkZGluZy1yaWdodDogMTU1cHg7fVxuLnAtci0xNTYge3BhZGRpbmctcmlnaHQ6IDE1NnB4O31cbi5wLXItMTU3IHtwYWRkaW5nLXJpZ2h0OiAxNTdweDt9XG4ucC1yLTE1OCB7cGFkZGluZy1yaWdodDogMTU4cHg7fVxuLnAtci0xNTkge3BhZGRpbmctcmlnaHQ6IDE1OXB4O31cbi5wLXItMTYwIHtwYWRkaW5nLXJpZ2h0OiAxNjBweDt9XG4ucC1yLTE2MSB7cGFkZGluZy1yaWdodDogMTYxcHg7fVxuLnAtci0xNjIge3BhZGRpbmctcmlnaHQ6IDE2MnB4O31cbi5wLXItMTYzIHtwYWRkaW5nLXJpZ2h0OiAxNjNweDt9XG4ucC1yLTE2NCB7cGFkZGluZy1yaWdodDogMTY0cHg7fVxuLnAtci0xNjUge3BhZGRpbmctcmlnaHQ6IDE2NXB4O31cbi5wLXItMTY2IHtwYWRkaW5nLXJpZ2h0OiAxNjZweDt9XG4ucC1yLTE2NyB7cGFkZGluZy1yaWdodDogMTY3cHg7fVxuLnAtci0xNjgge3BhZGRpbmctcmlnaHQ6IDE2OHB4O31cbi5wLXItMTY5IHtwYWRkaW5nLXJpZ2h0OiAxNjlweDt9XG4ucC1yLTE3MCB7cGFkZGluZy1yaWdodDogMTcwcHg7fVxuLnAtci0xNzEge3BhZGRpbmctcmlnaHQ6IDE3MXB4O31cbi5wLXItMTcyIHtwYWRkaW5nLXJpZ2h0OiAxNzJweDt9XG4ucC1yLTE3MyB7cGFkZGluZy1yaWdodDogMTczcHg7fVxuLnAtci0xNzQge3BhZGRpbmctcmlnaHQ6IDE3NHB4O31cbi5wLXItMTc1IHtwYWRkaW5nLXJpZ2h0OiAxNzVweDt9XG4ucC1yLTE3NiB7cGFkZGluZy1yaWdodDogMTc2cHg7fVxuLnAtci0xNzcge3BhZGRpbmctcmlnaHQ6IDE3N3B4O31cbi5wLXItMTc4IHtwYWRkaW5nLXJpZ2h0OiAxNzhweDt9XG4ucC1yLTE3OSB7cGFkZGluZy1yaWdodDogMTc5cHg7fVxuLnAtci0xODAge3BhZGRpbmctcmlnaHQ6IDE4MHB4O31cbi5wLXItMTgxIHtwYWRkaW5nLXJpZ2h0OiAxODFweDt9XG4ucC1yLTE4MiB7cGFkZGluZy1yaWdodDogMTgycHg7fVxuLnAtci0xODMge3BhZGRpbmctcmlnaHQ6IDE4M3B4O31cbi5wLXItMTg0IHtwYWRkaW5nLXJpZ2h0OiAxODRweDt9XG4ucC1yLTE4NSB7cGFkZGluZy1yaWdodDogMTg1cHg7fVxuLnAtci0xODYge3BhZGRpbmctcmlnaHQ6IDE4NnB4O31cbi5wLXItMTg3IHtwYWRkaW5nLXJpZ2h0OiAxODdweDt9XG4ucC1yLTE4OCB7cGFkZGluZy1yaWdodDogMTg4cHg7fVxuLnAtci0xODkge3BhZGRpbmctcmlnaHQ6IDE4OXB4O31cbi5wLXItMTkwIHtwYWRkaW5nLXJpZ2h0OiAxOTBweDt9XG4ucC1yLTE5MSB7cGFkZGluZy1yaWdodDogMTkxcHg7fVxuLnAtci0xOTIge3BhZGRpbmctcmlnaHQ6IDE5MnB4O31cbi5wLXItMTkzIHtwYWRkaW5nLXJpZ2h0OiAxOTNweDt9XG4ucC1yLTE5NCB7cGFkZGluZy1yaWdodDogMTk0cHg7fVxuLnAtci0xOTUge3BhZGRpbmctcmlnaHQ6IDE5NXB4O31cbi5wLXItMTk2IHtwYWRkaW5nLXJpZ2h0OiAxOTZweDt9XG4ucC1yLTE5NyB7cGFkZGluZy1yaWdodDogMTk3cHg7fVxuLnAtci0xOTgge3BhZGRpbmctcmlnaHQ6IDE5OHB4O31cbi5wLXItMTk5IHtwYWRkaW5nLXJpZ2h0OiAxOTlweDt9XG4ucC1yLTIwMCB7cGFkZGluZy1yaWdodDogMjAwcHg7fVxuLnAtci0yMDEge3BhZGRpbmctcmlnaHQ6IDIwMXB4O31cbi5wLXItMjAyIHtwYWRkaW5nLXJpZ2h0OiAyMDJweDt9XG4ucC1yLTIwMyB7cGFkZGluZy1yaWdodDogMjAzcHg7fVxuLnAtci0yMDQge3BhZGRpbmctcmlnaHQ6IDIwNHB4O31cbi5wLXItMjA1IHtwYWRkaW5nLXJpZ2h0OiAyMDVweDt9XG4ucC1yLTIwNiB7cGFkZGluZy1yaWdodDogMjA2cHg7fVxuLnAtci0yMDcge3BhZGRpbmctcmlnaHQ6IDIwN3B4O31cbi5wLXItMjA4IHtwYWRkaW5nLXJpZ2h0OiAyMDhweDt9XG4ucC1yLTIwOSB7cGFkZGluZy1yaWdodDogMjA5cHg7fVxuLnAtci0yMTAge3BhZGRpbmctcmlnaHQ6IDIxMHB4O31cbi5wLXItMjExIHtwYWRkaW5nLXJpZ2h0OiAyMTFweDt9XG4ucC1yLTIxMiB7cGFkZGluZy1yaWdodDogMjEycHg7fVxuLnAtci0yMTMge3BhZGRpbmctcmlnaHQ6IDIxM3B4O31cbi5wLXItMjE0IHtwYWRkaW5nLXJpZ2h0OiAyMTRweDt9XG4ucC1yLTIxNSB7cGFkZGluZy1yaWdodDogMjE1cHg7fVxuLnAtci0yMTYge3BhZGRpbmctcmlnaHQ6IDIxNnB4O31cbi5wLXItMjE3IHtwYWRkaW5nLXJpZ2h0OiAyMTdweDt9XG4ucC1yLTIxOCB7cGFkZGluZy1yaWdodDogMjE4cHg7fVxuLnAtci0yMTkge3BhZGRpbmctcmlnaHQ6IDIxOXB4O31cbi5wLXItMjIwIHtwYWRkaW5nLXJpZ2h0OiAyMjBweDt9XG4ucC1yLTIyMSB7cGFkZGluZy1yaWdodDogMjIxcHg7fVxuLnAtci0yMjIge3BhZGRpbmctcmlnaHQ6IDIyMnB4O31cbi5wLXItMjIzIHtwYWRkaW5nLXJpZ2h0OiAyMjNweDt9XG4ucC1yLTIyNCB7cGFkZGluZy1yaWdodDogMjI0cHg7fVxuLnAtci0yMjUge3BhZGRpbmctcmlnaHQ6IDIyNXB4O31cbi5wLXItMjI2IHtwYWRkaW5nLXJpZ2h0OiAyMjZweDt9XG4ucC1yLTIyNyB7cGFkZGluZy1yaWdodDogMjI3cHg7fVxuLnAtci0yMjgge3BhZGRpbmctcmlnaHQ6IDIyOHB4O31cbi5wLXItMjI5IHtwYWRkaW5nLXJpZ2h0OiAyMjlweDt9XG4ucC1yLTIzMCB7cGFkZGluZy1yaWdodDogMjMwcHg7fVxuLnAtci0yMzEge3BhZGRpbmctcmlnaHQ6IDIzMXB4O31cbi5wLXItMjMyIHtwYWRkaW5nLXJpZ2h0OiAyMzJweDt9XG4ucC1yLTIzMyB7cGFkZGluZy1yaWdodDogMjMzcHg7fVxuLnAtci0yMzQge3BhZGRpbmctcmlnaHQ6IDIzNHB4O31cbi5wLXItMjM1IHtwYWRkaW5nLXJpZ2h0OiAyMzVweDt9XG4ucC1yLTIzNiB7cGFkZGluZy1yaWdodDogMjM2cHg7fVxuLnAtci0yMzcge3BhZGRpbmctcmlnaHQ6IDIzN3B4O31cbi5wLXItMjM4IHtwYWRkaW5nLXJpZ2h0OiAyMzhweDt9XG4ucC1yLTIzOSB7cGFkZGluZy1yaWdodDogMjM5cHg7fVxuLnAtci0yNDAge3BhZGRpbmctcmlnaHQ6IDI0MHB4O31cbi5wLXItMjQxIHtwYWRkaW5nLXJpZ2h0OiAyNDFweDt9XG4ucC1yLTI0MiB7cGFkZGluZy1yaWdodDogMjQycHg7fVxuLnAtci0yNDMge3BhZGRpbmctcmlnaHQ6IDI0M3B4O31cbi5wLXItMjQ0IHtwYWRkaW5nLXJpZ2h0OiAyNDRweDt9XG4ucC1yLTI0NSB7cGFkZGluZy1yaWdodDogMjQ1cHg7fVxuLnAtci0yNDYge3BhZGRpbmctcmlnaHQ6IDI0NnB4O31cbi5wLXItMjQ3IHtwYWRkaW5nLXJpZ2h0OiAyNDdweDt9XG4ucC1yLTI0OCB7cGFkZGluZy1yaWdodDogMjQ4cHg7fVxuLnAtci0yNDkge3BhZGRpbmctcmlnaHQ6IDI0OXB4O31cbi5wLXItMjUwIHtwYWRkaW5nLXJpZ2h0OiAyNTBweDt9XG5cbi8qWyBNQVJHSU4gXVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiovXG4ubS10LTAge21hcmdpbi10b3A6IDBweDt9XG4ubS10LTEge21hcmdpbi10b3A6IDFweDt9XG4ubS10LTIge21hcmdpbi10b3A6IDJweDt9XG4ubS10LTMge21hcmdpbi10b3A6IDNweDt9XG4ubS10LTQge21hcmdpbi10b3A6IDRweDt9XG4ubS10LTUge21hcmdpbi10b3A6IDVweDt9XG4ubS10LTYge21hcmdpbi10b3A6IDZweDt9XG4ubS10LTcge21hcmdpbi10b3A6IDdweDt9XG4ubS10LTgge21hcmdpbi10b3A6IDhweDt9XG4ubS10LTkge21hcmdpbi10b3A6IDlweDt9XG4ubS10LTEwIHttYXJnaW4tdG9wOiAxMHB4O31cbi5tLXQtMTEge21hcmdpbi10b3A6IDExcHg7fVxuLm0tdC0xMiB7bWFyZ2luLXRvcDogMTJweDt9XG4ubS10LTEzIHttYXJnaW4tdG9wOiAxM3B4O31cbi5tLXQtMTQge21hcmdpbi10b3A6IDE0cHg7fVxuLm0tdC0xNSB7bWFyZ2luLXRvcDogMTVweDt9XG4ubS10LTE2IHttYXJnaW4tdG9wOiAxNnB4O31cbi5tLXQtMTcge21hcmdpbi10b3A6IDE3cHg7fVxuLm0tdC0xOCB7bWFyZ2luLXRvcDogMThweDt9XG4ubS10LTE5IHttYXJnaW4tdG9wOiAxOXB4O31cbi5tLXQtMjAge21hcmdpbi10b3A6IDIwcHg7fVxuLm0tdC0yMSB7bWFyZ2luLXRvcDogMjFweDt9XG4ubS10LTIyIHttYXJnaW4tdG9wOiAyMnB4O31cbi5tLXQtMjMge21hcmdpbi10b3A6IDIzcHg7fVxuLm0tdC0yNCB7bWFyZ2luLXRvcDogMjRweDt9XG4ubS10LTI1IHttYXJnaW4tdG9wOiAyNXB4O31cbi5tLXQtMjYge21hcmdpbi10b3A6IDI2cHg7fVxuLm0tdC0yNyB7bWFyZ2luLXRvcDogMjdweDt9XG4ubS10LTI4IHttYXJnaW4tdG9wOiAyOHB4O31cbi5tLXQtMjkge21hcmdpbi10b3A6IDI5cHg7fVxuLm0tdC0zMCB7bWFyZ2luLXRvcDogMzBweDt9XG4ubS10LTMxIHttYXJnaW4tdG9wOiAzMXB4O31cbi5tLXQtMzIge21hcmdpbi10b3A6IDMycHg7fVxuLm0tdC0zMyB7bWFyZ2luLXRvcDogMzNweDt9XG4ubS10LTM0IHttYXJnaW4tdG9wOiAzNHB4O31cbi5tLXQtMzUge21hcmdpbi10b3A6IDM1cHg7fVxuLm0tdC0zNiB7bWFyZ2luLXRvcDogMzZweDt9XG4ubS10LTM3IHttYXJnaW4tdG9wOiAzN3B4O31cbi5tLXQtMzgge21hcmdpbi10b3A6IDM4cHg7fVxuLm0tdC0zOSB7bWFyZ2luLXRvcDogMzlweDt9XG4ubS10LTQwIHttYXJnaW4tdG9wOiA0MHB4O31cbi5tLXQtNDEge21hcmdpbi10b3A6IDQxcHg7fVxuLm0tdC00MiB7bWFyZ2luLXRvcDogNDJweDt9XG4ubS10LTQzIHttYXJnaW4tdG9wOiA0M3B4O31cbi5tLXQtNDQge21hcmdpbi10b3A6IDQ0cHg7fVxuLm0tdC00NSB7bWFyZ2luLXRvcDogNDVweDt9XG4ubS10LTQ2IHttYXJnaW4tdG9wOiA0NnB4O31cbi5tLXQtNDcge21hcmdpbi10b3A6IDQ3cHg7fVxuLm0tdC00OCB7bWFyZ2luLXRvcDogNDhweDt9XG4ubS10LTQ5IHttYXJnaW4tdG9wOiA0OXB4O31cbi5tLXQtNTAge21hcmdpbi10b3A6IDUwcHg7fVxuLm0tdC01MSB7bWFyZ2luLXRvcDogNTFweDt9XG4ubS10LTUyIHttYXJnaW4tdG9wOiA1MnB4O31cbi5tLXQtNTMge21hcmdpbi10b3A6IDUzcHg7fVxuLm0tdC01NCB7bWFyZ2luLXRvcDogNTRweDt9XG4ubS10LTU1IHttYXJnaW4tdG9wOiA1NXB4O31cbi5tLXQtNTYge21hcmdpbi10b3A6IDU2cHg7fVxuLm0tdC01NyB7bWFyZ2luLXRvcDogNTdweDt9XG4ubS10LTU4IHttYXJnaW4tdG9wOiA1OHB4O31cbi5tLXQtNTkge21hcmdpbi10b3A6IDU5cHg7fVxuLm0tdC02MCB7bWFyZ2luLXRvcDogNjBweDt9XG4ubS10LTYxIHttYXJnaW4tdG9wOiA2MXB4O31cbi5tLXQtNjIge21hcmdpbi10b3A6IDYycHg7fVxuLm0tdC02MyB7bWFyZ2luLXRvcDogNjNweDt9XG4ubS10LTY0IHttYXJnaW4tdG9wOiA2NHB4O31cbi5tLXQtNjUge21hcmdpbi10b3A6IDY1cHg7fVxuLm0tdC02NiB7bWFyZ2luLXRvcDogNjZweDt9XG4ubS10LTY3IHttYXJnaW4tdG9wOiA2N3B4O31cbi5tLXQtNjgge21hcmdpbi10b3A6IDY4cHg7fVxuLm0tdC02OSB7bWFyZ2luLXRvcDogNjlweDt9XG4ubS10LTcwIHttYXJnaW4tdG9wOiA3MHB4O31cbi5tLXQtNzEge21hcmdpbi10b3A6IDcxcHg7fVxuLm0tdC03MiB7bWFyZ2luLXRvcDogNzJweDt9XG4ubS10LTczIHttYXJnaW4tdG9wOiA3M3B4O31cbi5tLXQtNzQge21hcmdpbi10b3A6IDc0cHg7fVxuLm0tdC03NSB7bWFyZ2luLXRvcDogNzVweDt9XG4ubS10LTc2IHttYXJnaW4tdG9wOiA3NnB4O31cbi5tLXQtNzcge21hcmdpbi10b3A6IDc3cHg7fVxuLm0tdC03OCB7bWFyZ2luLXRvcDogNzhweDt9XG4ubS10LTc5IHttYXJnaW4tdG9wOiA3OXB4O31cbi5tLXQtODAge21hcmdpbi10b3A6IDgwcHg7fVxuLm0tdC04MSB7bWFyZ2luLXRvcDogODFweDt9XG4ubS10LTgyIHttYXJnaW4tdG9wOiA4MnB4O31cbi5tLXQtODMge21hcmdpbi10b3A6IDgzcHg7fVxuLm0tdC04NCB7bWFyZ2luLXRvcDogODRweDt9XG4ubS10LTg1IHttYXJnaW4tdG9wOiA4NXB4O31cbi5tLXQtODYge21hcmdpbi10b3A6IDg2cHg7fVxuLm0tdC04NyB7bWFyZ2luLXRvcDogODdweDt9XG4ubS10LTg4IHttYXJnaW4tdG9wOiA4OHB4O31cbi5tLXQtODkge21hcmdpbi10b3A6IDg5cHg7fVxuLm0tdC05MCB7bWFyZ2luLXRvcDogOTBweDt9XG4ubS10LTkxIHttYXJnaW4tdG9wOiA5MXB4O31cbi5tLXQtOTIge21hcmdpbi10b3A6IDkycHg7fVxuLm0tdC05MyB7bWFyZ2luLXRvcDogOTNweDt9XG4ubS10LTk0IHttYXJnaW4tdG9wOiA5NHB4O31cbi5tLXQtOTUge21hcmdpbi10b3A6IDk1cHg7fVxuLm0tdC05NiB7bWFyZ2luLXRvcDogOTZweDt9XG4ubS10LTk3IHttYXJnaW4tdG9wOiA5N3B4O31cbi5tLXQtOTgge21hcmdpbi10b3A6IDk4cHg7fVxuLm0tdC05OSB7bWFyZ2luLXRvcDogOTlweDt9XG4ubS10LTEwMCB7bWFyZ2luLXRvcDogMTAwcHg7fVxuLm0tdC0xMDEge21hcmdpbi10b3A6IDEwMXB4O31cbi5tLXQtMTAyIHttYXJnaW4tdG9wOiAxMDJweDt9XG4ubS10LTEwMyB7bWFyZ2luLXRvcDogMTAzcHg7fVxuLm0tdC0xMDQge21hcmdpbi10b3A6IDEwNHB4O31cbi5tLXQtMTA1IHttYXJnaW4tdG9wOiAxMDVweDt9XG4ubS10LTEwNiB7bWFyZ2luLXRvcDogMTA2cHg7fVxuLm0tdC0xMDcge21hcmdpbi10b3A6IDEwN3B4O31cbi5tLXQtMTA4IHttYXJnaW4tdG9wOiAxMDhweDt9XG4ubS10LTEwOSB7bWFyZ2luLXRvcDogMTA5cHg7fVxuLm0tdC0xMTAge21hcmdpbi10b3A6IDExMHB4O31cbi5tLXQtMTExIHttYXJnaW4tdG9wOiAxMTFweDt9XG4ubS10LTExMiB7bWFyZ2luLXRvcDogMTEycHg7fVxuLm0tdC0xMTMge21hcmdpbi10b3A6IDExM3B4O31cbi5tLXQtMTE0IHttYXJnaW4tdG9wOiAxMTRweDt9XG4ubS10LTExNSB7bWFyZ2luLXRvcDogMTE1cHg7fVxuLm0tdC0xMTYge21hcmdpbi10b3A6IDExNnB4O31cbi5tLXQtMTE3IHttYXJnaW4tdG9wOiAxMTdweDt9XG4ubS10LTExOCB7bWFyZ2luLXRvcDogMTE4cHg7fVxuLm0tdC0xMTkge21hcmdpbi10b3A6IDExOXB4O31cbi5tLXQtMTIwIHttYXJnaW4tdG9wOiAxMjBweDt9XG4ubS10LTEyMSB7bWFyZ2luLXRvcDogMTIxcHg7fVxuLm0tdC0xMjIge21hcmdpbi10b3A6IDEyMnB4O31cbi5tLXQtMTIzIHttYXJnaW4tdG9wOiAxMjNweDt9XG4ubS10LTEyNCB7bWFyZ2luLXRvcDogMTI0cHg7fVxuLm0tdC0xMjUge21hcmdpbi10b3A6IDEyNXB4O31cbi5tLXQtMTI2IHttYXJnaW4tdG9wOiAxMjZweDt9XG4ubS10LTEyNyB7bWFyZ2luLXRvcDogMTI3cHg7fVxuLm0tdC0xMjgge21hcmdpbi10b3A6IDEyOHB4O31cbi5tLXQtMTI5IHttYXJnaW4tdG9wOiAxMjlweDt9XG4ubS10LTEzMCB7bWFyZ2luLXRvcDogMTMwcHg7fVxuLm0tdC0xMzEge21hcmdpbi10b3A6IDEzMXB4O31cbi5tLXQtMTMyIHttYXJnaW4tdG9wOiAxMzJweDt9XG4ubS10LTEzMyB7bWFyZ2luLXRvcDogMTMzcHg7fVxuLm0tdC0xMzQge21hcmdpbi10b3A6IDEzNHB4O31cbi5tLXQtMTM1IHttYXJnaW4tdG9wOiAxMzVweDt9XG4ubS10LTEzNiB7bWFyZ2luLXRvcDogMTM2cHg7fVxuLm0tdC0xMzcge21hcmdpbi10b3A6IDEzN3B4O31cbi5tLXQtMTM4IHttYXJnaW4tdG9wOiAxMzhweDt9XG4ubS10LTEzOSB7bWFyZ2luLXRvcDogMTM5cHg7fVxuLm0tdC0xNDAge21hcmdpbi10b3A6IDE0MHB4O31cbi5tLXQtMTQxIHttYXJnaW4tdG9wOiAxNDFweDt9XG4ubS10LTE0MiB7bWFyZ2luLXRvcDogMTQycHg7fVxuLm0tdC0xNDMge21hcmdpbi10b3A6IDE0M3B4O31cbi5tLXQtMTQ0IHttYXJnaW4tdG9wOiAxNDRweDt9XG4ubS10LTE0NSB7bWFyZ2luLXRvcDogMTQ1cHg7fVxuLm0tdC0xNDYge21hcmdpbi10b3A6IDE0NnB4O31cbi5tLXQtMTQ3IHttYXJnaW4tdG9wOiAxNDdweDt9XG4ubS10LTE0OCB7bWFyZ2luLXRvcDogMTQ4cHg7fVxuLm0tdC0xNDkge21hcmdpbi10b3A6IDE0OXB4O31cbi5tLXQtMTUwIHttYXJnaW4tdG9wOiAxNTBweDt9XG4ubS10LTE1MSB7bWFyZ2luLXRvcDogMTUxcHg7fVxuLm0tdC0xNTIge21hcmdpbi10b3A6IDE1MnB4O31cbi5tLXQtMTUzIHttYXJnaW4tdG9wOiAxNTNweDt9XG4ubS10LTE1NCB7bWFyZ2luLXRvcDogMTU0cHg7fVxuLm0tdC0xNTUge21hcmdpbi10b3A6IDE1NXB4O31cbi5tLXQtMTU2IHttYXJnaW4tdG9wOiAxNTZweDt9XG4ubS10LTE1NyB7bWFyZ2luLXRvcDogMTU3cHg7fVxuLm0tdC0xNTgge21hcmdpbi10b3A6IDE1OHB4O31cbi5tLXQtMTU5IHttYXJnaW4tdG9wOiAxNTlweDt9XG4ubS10LTE2MCB7bWFyZ2luLXRvcDogMTYwcHg7fVxuLm0tdC0xNjEge21hcmdpbi10b3A6IDE2MXB4O31cbi5tLXQtMTYyIHttYXJnaW4tdG9wOiAxNjJweDt9XG4ubS10LTE2MyB7bWFyZ2luLXRvcDogMTYzcHg7fVxuLm0tdC0xNjQge21hcmdpbi10b3A6IDE2NHB4O31cbi5tLXQtMTY1IHttYXJnaW4tdG9wOiAxNjVweDt9XG4ubS10LTE2NiB7bWFyZ2luLXRvcDogMTY2cHg7fVxuLm0tdC0xNjcge21hcmdpbi10b3A6IDE2N3B4O31cbi5tLXQtMTY4IHttYXJnaW4tdG9wOiAxNjhweDt9XG4ubS10LTE2OSB7bWFyZ2luLXRvcDogMTY5cHg7fVxuLm0tdC0xNzAge21hcmdpbi10b3A6IDE3MHB4O31cbi5tLXQtMTcxIHttYXJnaW4tdG9wOiAxNzFweDt9XG4ubS10LTE3MiB7bWFyZ2luLXRvcDogMTcycHg7fVxuLm0tdC0xNzMge21hcmdpbi10b3A6IDE3M3B4O31cbi5tLXQtMTc0IHttYXJnaW4tdG9wOiAxNzRweDt9XG4ubS10LTE3NSB7bWFyZ2luLXRvcDogMTc1cHg7fVxuLm0tdC0xNzYge21hcmdpbi10b3A6IDE3NnB4O31cbi5tLXQtMTc3IHttYXJnaW4tdG9wOiAxNzdweDt9XG4ubS10LTE3OCB7bWFyZ2luLXRvcDogMTc4cHg7fVxuLm0tdC0xNzkge21hcmdpbi10b3A6IDE3OXB4O31cbi5tLXQtMTgwIHttYXJnaW4tdG9wOiAxODBweDt9XG4ubS10LTE4MSB7bWFyZ2luLXRvcDogMTgxcHg7fVxuLm0tdC0xODIge21hcmdpbi10b3A6IDE4MnB4O31cbi5tLXQtMTgzIHttYXJnaW4tdG9wOiAxODNweDt9XG4ubS10LTE4NCB7bWFyZ2luLXRvcDogMTg0cHg7fVxuLm0tdC0xODUge21hcmdpbi10b3A6IDE4NXB4O31cbi5tLXQtMTg2IHttYXJnaW4tdG9wOiAxODZweDt9XG4ubS10LTE4NyB7bWFyZ2luLXRvcDogMTg3cHg7fVxuLm0tdC0xODgge21hcmdpbi10b3A6IDE4OHB4O31cbi5tLXQtMTg5IHttYXJnaW4tdG9wOiAxODlweDt9XG4ubS10LTE5MCB7bWFyZ2luLXRvcDogMTkwcHg7fVxuLm0tdC0xOTEge21hcmdpbi10b3A6IDE5MXB4O31cbi5tLXQtMTkyIHttYXJnaW4tdG9wOiAxOTJweDt9XG4ubS10LTE5MyB7bWFyZ2luLXRvcDogMTkzcHg7fVxuLm0tdC0xOTQge21hcmdpbi10b3A6IDE5NHB4O31cbi5tLXQtMTk1IHttYXJnaW4tdG9wOiAxOTVweDt9XG4ubS10LTE5NiB7bWFyZ2luLXRvcDogMTk2cHg7fVxuLm0tdC0xOTcge21hcmdpbi10b3A6IDE5N3B4O31cbi5tLXQtMTk4IHttYXJnaW4tdG9wOiAxOThweDt9XG4ubS10LTE5OSB7bWFyZ2luLXRvcDogMTk5cHg7fVxuLm0tdC0yMDAge21hcmdpbi10b3A6IDIwMHB4O31cbi5tLXQtMjAxIHttYXJnaW4tdG9wOiAyMDFweDt9XG4ubS10LTIwMiB7bWFyZ2luLXRvcDogMjAycHg7fVxuLm0tdC0yMDMge21hcmdpbi10b3A6IDIwM3B4O31cbi5tLXQtMjA0IHttYXJnaW4tdG9wOiAyMDRweDt9XG4ubS10LTIwNSB7bWFyZ2luLXRvcDogMjA1cHg7fVxuLm0tdC0yMDYge21hcmdpbi10b3A6IDIwNnB4O31cbi5tLXQtMjA3IHttYXJnaW4tdG9wOiAyMDdweDt9XG4ubS10LTIwOCB7bWFyZ2luLXRvcDogMjA4cHg7fVxuLm0tdC0yMDkge21hcmdpbi10b3A6IDIwOXB4O31cbi5tLXQtMjEwIHttYXJnaW4tdG9wOiAyMTBweDt9XG4ubS10LTIxMSB7bWFyZ2luLXRvcDogMjExcHg7fVxuLm0tdC0yMTIge21hcmdpbi10b3A6IDIxMnB4O31cbi5tLXQtMjEzIHttYXJnaW4tdG9wOiAyMTNweDt9XG4ubS10LTIxNCB7bWFyZ2luLXRvcDogMjE0cHg7fVxuLm0tdC0yMTUge21hcmdpbi10b3A6IDIxNXB4O31cbi5tLXQtMjE2IHttYXJnaW4tdG9wOiAyMTZweDt9XG4ubS10LTIxNyB7bWFyZ2luLXRvcDogMjE3cHg7fVxuLm0tdC0yMTgge21hcmdpbi10b3A6IDIxOHB4O31cbi5tLXQtMjE5IHttYXJnaW4tdG9wOiAyMTlweDt9XG4ubS10LTIyMCB7bWFyZ2luLXRvcDogMjIwcHg7fVxuLm0tdC0yMjEge21hcmdpbi10b3A6IDIyMXB4O31cbi5tLXQtMjIyIHttYXJnaW4tdG9wOiAyMjJweDt9XG4ubS10LTIyMyB7bWFyZ2luLXRvcDogMjIzcHg7fVxuLm0tdC0yMjQge21hcmdpbi10b3A6IDIyNHB4O31cbi5tLXQtMjI1IHttYXJnaW4tdG9wOiAyMjVweDt9XG4ubS10LTIyNiB7bWFyZ2luLXRvcDogMjI2cHg7fVxuLm0tdC0yMjcge21hcmdpbi10b3A6IDIyN3B4O31cbi5tLXQtMjI4IHttYXJnaW4tdG9wOiAyMjhweDt9XG4ubS10LTIyOSB7bWFyZ2luLXRvcDogMjI5cHg7fVxuLm0tdC0yMzAge21hcmdpbi10b3A6IDIzMHB4O31cbi5tLXQtMjMxIHttYXJnaW4tdG9wOiAyMzFweDt9XG4ubS10LTIzMiB7bWFyZ2luLXRvcDogMjMycHg7fVxuLm0tdC0yMzMge21hcmdpbi10b3A6IDIzM3B4O31cbi5tLXQtMjM0IHttYXJnaW4tdG9wOiAyMzRweDt9XG4ubS10LTIzNSB7bWFyZ2luLXRvcDogMjM1cHg7fVxuLm0tdC0yMzYge21hcmdpbi10b3A6IDIzNnB4O31cbi5tLXQtMjM3IHttYXJnaW4tdG9wOiAyMzdweDt9XG4ubS10LTIzOCB7bWFyZ2luLXRvcDogMjM4cHg7fVxuLm0tdC0yMzkge21hcmdpbi10b3A6IDIzOXB4O31cbi5tLXQtMjQwIHttYXJnaW4tdG9wOiAyNDBweDt9XG4ubS10LTI0MSB7bWFyZ2luLXRvcDogMjQxcHg7fVxuLm0tdC0yNDIge21hcmdpbi10b3A6IDI0MnB4O31cbi5tLXQtMjQzIHttYXJnaW4tdG9wOiAyNDNweDt9XG4ubS10LTI0NCB7bWFyZ2luLXRvcDogMjQ0cHg7fVxuLm0tdC0yNDUge21hcmdpbi10b3A6IDI0NXB4O31cbi5tLXQtMjQ2IHttYXJnaW4tdG9wOiAyNDZweDt9XG4ubS10LTI0NyB7bWFyZ2luLXRvcDogMjQ3cHg7fVxuLm0tdC0yNDgge21hcmdpbi10b3A6IDI0OHB4O31cbi5tLXQtMjQ5IHttYXJnaW4tdG9wOiAyNDlweDt9XG4ubS10LTI1MCB7bWFyZ2luLXRvcDogMjUwcHg7fVxuLm0tYi0wIHttYXJnaW4tYm90dG9tOiAwcHg7fVxuLm0tYi0xIHttYXJnaW4tYm90dG9tOiAxcHg7fVxuLm0tYi0yIHttYXJnaW4tYm90dG9tOiAycHg7fVxuLm0tYi0zIHttYXJnaW4tYm90dG9tOiAzcHg7fVxuLm0tYi00IHttYXJnaW4tYm90dG9tOiA0cHg7fVxuLm0tYi01IHttYXJnaW4tYm90dG9tOiA1cHg7fVxuLm0tYi02IHttYXJnaW4tYm90dG9tOiA2cHg7fVxuLm0tYi03IHttYXJnaW4tYm90dG9tOiA3cHg7fVxuLm0tYi04IHttYXJnaW4tYm90dG9tOiA4cHg7fVxuLm0tYi05IHttYXJnaW4tYm90dG9tOiA5cHg7fVxuLm0tYi0xMCB7bWFyZ2luLWJvdHRvbTogMTBweDt9XG4ubS1iLTExIHttYXJnaW4tYm90dG9tOiAxMXB4O31cbi5tLWItMTIge21hcmdpbi1ib3R0b206IDEycHg7fVxuLm0tYi0xMyB7bWFyZ2luLWJvdHRvbTogMTNweDt9XG4ubS1iLTE0IHttYXJnaW4tYm90dG9tOiAxNHB4O31cbi5tLWItMTUge21hcmdpbi1ib3R0b206IDE1cHg7fVxuLm0tYi0xNiB7bWFyZ2luLWJvdHRvbTogMTZweDt9XG4ubS1iLTE3IHttYXJnaW4tYm90dG9tOiAxN3B4O31cbi5tLWItMTgge21hcmdpbi1ib3R0b206IDE4cHg7fVxuLm0tYi0xOSB7bWFyZ2luLWJvdHRvbTogMTlweDt9XG4ubS1iLTIwIHttYXJnaW4tYm90dG9tOiAyMHB4O31cbi5tLWItMjEge21hcmdpbi1ib3R0b206IDIxcHg7fVxuLm0tYi0yMiB7bWFyZ2luLWJvdHRvbTogMjJweDt9XG4ubS1iLTIzIHttYXJnaW4tYm90dG9tOiAyM3B4O31cbi5tLWItMjQge21hcmdpbi1ib3R0b206IDI0cHg7fVxuLm0tYi0yNSB7bWFyZ2luLWJvdHRvbTogMjVweDt9XG4ubS1iLTI2IHttYXJnaW4tYm90dG9tOiAyNnB4O31cbi5tLWItMjcge21hcmdpbi1ib3R0b206IDI3cHg7fVxuLm0tYi0yOCB7bWFyZ2luLWJvdHRvbTogMjhweDt9XG4ubS1iLTI5IHttYXJnaW4tYm90dG9tOiAyOXB4O31cbi5tLWItMzAge21hcmdpbi1ib3R0b206IDMwcHg7fVxuLm0tYi0zMSB7bWFyZ2luLWJvdHRvbTogMzFweDt9XG4ubS1iLTMyIHttYXJnaW4tYm90dG9tOiAzMnB4O31cbi5tLWItMzMge21hcmdpbi1ib3R0b206IDMzcHg7fVxuLm0tYi0zNCB7bWFyZ2luLWJvdHRvbTogMzRweDt9XG4ubS1iLTM1IHttYXJnaW4tYm90dG9tOiAzNXB4O31cbi5tLWItMzYge21hcmdpbi1ib3R0b206IDM2cHg7fVxuLm0tYi0zNyB7bWFyZ2luLWJvdHRvbTogMzdweDt9XG4ubS1iLTM4IHttYXJnaW4tYm90dG9tOiAzOHB4O31cbi5tLWItMzkge21hcmdpbi1ib3R0b206IDM5cHg7fVxuLm0tYi00MCB7bWFyZ2luLWJvdHRvbTogNDBweDt9XG4ubS1iLTQxIHttYXJnaW4tYm90dG9tOiA0MXB4O31cbi5tLWItNDIge21hcmdpbi1ib3R0b206IDQycHg7fVxuLm0tYi00MyB7bWFyZ2luLWJvdHRvbTogNDNweDt9XG4ubS1iLTQ0IHttYXJnaW4tYm90dG9tOiA0NHB4O31cbi5tLWItNDUge21hcmdpbi1ib3R0b206IDQ1cHg7fVxuLm0tYi00NiB7bWFyZ2luLWJvdHRvbTogNDZweDt9XG4ubS1iLTQ3IHttYXJnaW4tYm90dG9tOiA0N3B4O31cbi5tLWItNDgge21hcmdpbi1ib3R0b206IDQ4cHg7fVxuLm0tYi00OSB7bWFyZ2luLWJvdHRvbTogNDlweDt9XG4ubS1iLTUwIHttYXJnaW4tYm90dG9tOiA1MHB4O31cbi5tLWItNTEge21hcmdpbi1ib3R0b206IDUxcHg7fVxuLm0tYi01MiB7bWFyZ2luLWJvdHRvbTogNTJweDt9XG4ubS1iLTUzIHttYXJnaW4tYm90dG9tOiA1M3B4O31cbi5tLWItNTQge21hcmdpbi1ib3R0b206IDU0cHg7fVxuLm0tYi01NSB7bWFyZ2luLWJvdHRvbTogNTVweDt9XG4ubS1iLTU2IHttYXJnaW4tYm90dG9tOiA1NnB4O31cbi5tLWItNTcge21hcmdpbi1ib3R0b206IDU3cHg7fVxuLm0tYi01OCB7bWFyZ2luLWJvdHRvbTogNThweDt9XG4ubS1iLTU5IHttYXJnaW4tYm90dG9tOiA1OXB4O31cbi5tLWItNjAge21hcmdpbi1ib3R0b206IDYwcHg7fVxuLm0tYi02MSB7bWFyZ2luLWJvdHRvbTogNjFweDt9XG4ubS1iLTYyIHttYXJnaW4tYm90dG9tOiA2MnB4O31cbi5tLWItNjMge21hcmdpbi1ib3R0b206IDYzcHg7fVxuLm0tYi02NCB7bWFyZ2luLWJvdHRvbTogNjRweDt9XG4ubS1iLTY1IHttYXJnaW4tYm90dG9tOiA2NXB4O31cbi5tLWItNjYge21hcmdpbi1ib3R0b206IDY2cHg7fVxuLm0tYi02NyB7bWFyZ2luLWJvdHRvbTogNjdweDt9XG4ubS1iLTY4IHttYXJnaW4tYm90dG9tOiA2OHB4O31cbi5tLWItNjkge21hcmdpbi1ib3R0b206IDY5cHg7fVxuLm0tYi03MCB7bWFyZ2luLWJvdHRvbTogNzBweDt9XG4ubS1iLTcxIHttYXJnaW4tYm90dG9tOiA3MXB4O31cbi5tLWItNzIge21hcmdpbi1ib3R0b206IDcycHg7fVxuLm0tYi03MyB7bWFyZ2luLWJvdHRvbTogNzNweDt9XG4ubS1iLTc0IHttYXJnaW4tYm90dG9tOiA3NHB4O31cbi5tLWItNzUge21hcmdpbi1ib3R0b206IDc1cHg7fVxuLm0tYi03NiB7bWFyZ2luLWJvdHRvbTogNzZweDt9XG4ubS1iLTc3IHttYXJnaW4tYm90dG9tOiA3N3B4O31cbi5tLWItNzgge21hcmdpbi1ib3R0b206IDc4cHg7fVxuLm0tYi03OSB7bWFyZ2luLWJvdHRvbTogNzlweDt9XG4ubS1iLTgwIHttYXJnaW4tYm90dG9tOiA4MHB4O31cbi5tLWItODEge21hcmdpbi1ib3R0b206IDgxcHg7fVxuLm0tYi04MiB7bWFyZ2luLWJvdHRvbTogODJweDt9XG4ubS1iLTgzIHttYXJnaW4tYm90dG9tOiA4M3B4O31cbi5tLWItODQge21hcmdpbi1ib3R0b206IDg0cHg7fVxuLm0tYi04NSB7bWFyZ2luLWJvdHRvbTogODVweDt9XG4ubS1iLTg2IHttYXJnaW4tYm90dG9tOiA4NnB4O31cbi5tLWItODcge21hcmdpbi1ib3R0b206IDg3cHg7fVxuLm0tYi04OCB7bWFyZ2luLWJvdHRvbTogODhweDt9XG4ubS1iLTg5IHttYXJnaW4tYm90dG9tOiA4OXB4O31cbi5tLWItOTAge21hcmdpbi1ib3R0b206IDkwcHg7fVxuLm0tYi05MSB7bWFyZ2luLWJvdHRvbTogOTFweDt9XG4ubS1iLTkyIHttYXJnaW4tYm90dG9tOiA5MnB4O31cbi5tLWItOTMge21hcmdpbi1ib3R0b206IDkzcHg7fVxuLm0tYi05NCB7bWFyZ2luLWJvdHRvbTogOTRweDt9XG4ubS1iLTk1IHttYXJnaW4tYm90dG9tOiA5NXB4O31cbi5tLWItOTYge21hcmdpbi1ib3R0b206IDk2cHg7fVxuLm0tYi05NyB7bWFyZ2luLWJvdHRvbTogOTdweDt9XG4ubS1iLTk4IHttYXJnaW4tYm90dG9tOiA5OHB4O31cbi5tLWItOTkge21hcmdpbi1ib3R0b206IDk5cHg7fVxuLm0tYi0xMDAge21hcmdpbi1ib3R0b206IDEwMHB4O31cbi5tLWItMTAxIHttYXJnaW4tYm90dG9tOiAxMDFweDt9XG4ubS1iLTEwMiB7bWFyZ2luLWJvdHRvbTogMTAycHg7fVxuLm0tYi0xMDMge21hcmdpbi1ib3R0b206IDEwM3B4O31cbi5tLWItMTA0IHttYXJnaW4tYm90dG9tOiAxMDRweDt9XG4ubS1iLTEwNSB7bWFyZ2luLWJvdHRvbTogMTA1cHg7fVxuLm0tYi0xMDYge21hcmdpbi1ib3R0b206IDEwNnB4O31cbi5tLWItMTA3IHttYXJnaW4tYm90dG9tOiAxMDdweDt9XG4ubS1iLTEwOCB7bWFyZ2luLWJvdHRvbTogMTA4cHg7fVxuLm0tYi0xMDkge21hcmdpbi1ib3R0b206IDEwOXB4O31cbi5tLWItMTEwIHttYXJnaW4tYm90dG9tOiAxMTBweDt9XG4ubS1iLTExMSB7bWFyZ2luLWJvdHRvbTogMTExcHg7fVxuLm0tYi0xMTIge21hcmdpbi1ib3R0b206IDExMnB4O31cbi5tLWItMTEzIHttYXJnaW4tYm90dG9tOiAxMTNweDt9XG4ubS1iLTExNCB7bWFyZ2luLWJvdHRvbTogMTE0cHg7fVxuLm0tYi0xMTUge21hcmdpbi1ib3R0b206IDExNXB4O31cbi5tLWItMTE2IHttYXJnaW4tYm90dG9tOiAxMTZweDt9XG4ubS1iLTExNyB7bWFyZ2luLWJvdHRvbTogMTE3cHg7fVxuLm0tYi0xMTgge21hcmdpbi1ib3R0b206IDExOHB4O31cbi5tLWItMTE5IHttYXJnaW4tYm90dG9tOiAxMTlweDt9XG4ubS1iLTEyMCB7bWFyZ2luLWJvdHRvbTogMTIwcHg7fVxuLm0tYi0xMjEge21hcmdpbi1ib3R0b206IDEyMXB4O31cbi5tLWItMTIyIHttYXJnaW4tYm90dG9tOiAxMjJweDt9XG4ubS1iLTEyMyB7bWFyZ2luLWJvdHRvbTogMTIzcHg7fVxuLm0tYi0xMjQge21hcmdpbi1ib3R0b206IDEyNHB4O31cbi5tLWItMTI1IHttYXJnaW4tYm90dG9tOiAxMjVweDt9XG4ubS1iLTEyNiB7bWFyZ2luLWJvdHRvbTogMTI2cHg7fVxuLm0tYi0xMjcge21hcmdpbi1ib3R0b206IDEyN3B4O31cbi5tLWItMTI4IHttYXJnaW4tYm90dG9tOiAxMjhweDt9XG4ubS1iLTEyOSB7bWFyZ2luLWJvdHRvbTogMTI5cHg7fVxuLm0tYi0xMzAge21hcmdpbi1ib3R0b206IDEzMHB4O31cbi5tLWItMTMxIHttYXJnaW4tYm90dG9tOiAxMzFweDt9XG4ubS1iLTEzMiB7bWFyZ2luLWJvdHRvbTogMTMycHg7fVxuLm0tYi0xMzMge21hcmdpbi1ib3R0b206IDEzM3B4O31cbi5tLWItMTM0IHttYXJnaW4tYm90dG9tOiAxMzRweDt9XG4ubS1iLTEzNSB7bWFyZ2luLWJvdHRvbTogMTM1cHg7fVxuLm0tYi0xMzYge21hcmdpbi1ib3R0b206IDEzNnB4O31cbi5tLWItMTM3IHttYXJnaW4tYm90dG9tOiAxMzdweDt9XG4ubS1iLTEzOCB7bWFyZ2luLWJvdHRvbTogMTM4cHg7fVxuLm0tYi0xMzkge21hcmdpbi1ib3R0b206IDEzOXB4O31cbi5tLWItMTQwIHttYXJnaW4tYm90dG9tOiAxNDBweDt9XG4ubS1iLTE0MSB7bWFyZ2luLWJvdHRvbTogMTQxcHg7fVxuLm0tYi0xNDIge21hcmdpbi1ib3R0b206IDE0MnB4O31cbi5tLWItMTQzIHttYXJnaW4tYm90dG9tOiAxNDNweDt9XG4ubS1iLTE0NCB7bWFyZ2luLWJvdHRvbTogMTQ0cHg7fVxuLm0tYi0xNDUge21hcmdpbi1ib3R0b206IDE0NXB4O31cbi5tLWItMTQ2IHttYXJnaW4tYm90dG9tOiAxNDZweDt9XG4ubS1iLTE0NyB7bWFyZ2luLWJvdHRvbTogMTQ3cHg7fVxuLm0tYi0xNDgge21hcmdpbi1ib3R0b206IDE0OHB4O31cbi5tLWItMTQ5IHttYXJnaW4tYm90dG9tOiAxNDlweDt9XG4ubS1iLTE1MCB7bWFyZ2luLWJvdHRvbTogMTUwcHg7fVxuLm0tYi0xNTEge21hcmdpbi1ib3R0b206IDE1MXB4O31cbi5tLWItMTUyIHttYXJnaW4tYm90dG9tOiAxNTJweDt9XG4ubS1iLTE1MyB7bWFyZ2luLWJvdHRvbTogMTUzcHg7fVxuLm0tYi0xNTQge21hcmdpbi1ib3R0b206IDE1NHB4O31cbi5tLWItMTU1IHttYXJnaW4tYm90dG9tOiAxNTVweDt9XG4ubS1iLTE1NiB7bWFyZ2luLWJvdHRvbTogMTU2cHg7fVxuLm0tYi0xNTcge21hcmdpbi1ib3R0b206IDE1N3B4O31cbi5tLWItMTU4IHttYXJnaW4tYm90dG9tOiAxNThweDt9XG4ubS1iLTE1OSB7bWFyZ2luLWJvdHRvbTogMTU5cHg7fVxuLm0tYi0xNjAge21hcmdpbi1ib3R0b206IDE2MHB4O31cbi5tLWItMTYxIHttYXJnaW4tYm90dG9tOiAxNjFweDt9XG4ubS1iLTE2MiB7bWFyZ2luLWJvdHRvbTogMTYycHg7fVxuLm0tYi0xNjMge21hcmdpbi1ib3R0b206IDE2M3B4O31cbi5tLWItMTY0IHttYXJnaW4tYm90dG9tOiAxNjRweDt9XG4ubS1iLTE2NSB7bWFyZ2luLWJvdHRvbTogMTY1cHg7fVxuLm0tYi0xNjYge21hcmdpbi1ib3R0b206IDE2NnB4O31cbi5tLWItMTY3IHttYXJnaW4tYm90dG9tOiAxNjdweDt9XG4ubS1iLTE2OCB7bWFyZ2luLWJvdHRvbTogMTY4cHg7fVxuLm0tYi0xNjkge21hcmdpbi1ib3R0b206IDE2OXB4O31cbi5tLWItMTcwIHttYXJnaW4tYm90dG9tOiAxNzBweDt9XG4ubS1iLTE3MSB7bWFyZ2luLWJvdHRvbTogMTcxcHg7fVxuLm0tYi0xNzIge21hcmdpbi1ib3R0b206IDE3MnB4O31cbi5tLWItMTczIHttYXJnaW4tYm90dG9tOiAxNzNweDt9XG4ubS1iLTE3NCB7bWFyZ2luLWJvdHRvbTogMTc0cHg7fVxuLm0tYi0xNzUge21hcmdpbi1ib3R0b206IDE3NXB4O31cbi5tLWItMTc2IHttYXJnaW4tYm90dG9tOiAxNzZweDt9XG4ubS1iLTE3NyB7bWFyZ2luLWJvdHRvbTogMTc3cHg7fVxuLm0tYi0xNzgge21hcmdpbi1ib3R0b206IDE3OHB4O31cbi5tLWItMTc5IHttYXJnaW4tYm90dG9tOiAxNzlweDt9XG4ubS1iLTE4MCB7bWFyZ2luLWJvdHRvbTogMTgwcHg7fVxuLm0tYi0xODEge21hcmdpbi1ib3R0b206IDE4MXB4O31cbi5tLWItMTgyIHttYXJnaW4tYm90dG9tOiAxODJweDt9XG4ubS1iLTE4MyB7bWFyZ2luLWJvdHRvbTogMTgzcHg7fVxuLm0tYi0xODQge21hcmdpbi1ib3R0b206IDE4NHB4O31cbi5tLWItMTg1IHttYXJnaW4tYm90dG9tOiAxODVweDt9XG4ubS1iLTE4NiB7bWFyZ2luLWJvdHRvbTogMTg2cHg7fVxuLm0tYi0xODcge21hcmdpbi1ib3R0b206IDE4N3B4O31cbi5tLWItMTg4IHttYXJnaW4tYm90dG9tOiAxODhweDt9XG4ubS1iLTE4OSB7bWFyZ2luLWJvdHRvbTogMTg5cHg7fVxuLm0tYi0xOTAge21hcmdpbi1ib3R0b206IDE5MHB4O31cbi5tLWItMTkxIHttYXJnaW4tYm90dG9tOiAxOTFweDt9XG4ubS1iLTE5MiB7bWFyZ2luLWJvdHRvbTogMTkycHg7fVxuLm0tYi0xOTMge21hcmdpbi1ib3R0b206IDE5M3B4O31cbi5tLWItMTk0IHttYXJnaW4tYm90dG9tOiAxOTRweDt9XG4ubS1iLTE5NSB7bWFyZ2luLWJvdHRvbTogMTk1cHg7fVxuLm0tYi0xOTYge21hcmdpbi1ib3R0b206IDE5NnB4O31cbi5tLWItMTk3IHttYXJnaW4tYm90dG9tOiAxOTdweDt9XG4ubS1iLTE5OCB7bWFyZ2luLWJvdHRvbTogMTk4cHg7fVxuLm0tYi0xOTkge21hcmdpbi1ib3R0b206IDE5OXB4O31cbi5tLWItMjAwIHttYXJnaW4tYm90dG9tOiAyMDBweDt9XG4ubS1iLTIwMSB7bWFyZ2luLWJvdHRvbTogMjAxcHg7fVxuLm0tYi0yMDIge21hcmdpbi1ib3R0b206IDIwMnB4O31cbi5tLWItMjAzIHttYXJnaW4tYm90dG9tOiAyMDNweDt9XG4ubS1iLTIwNCB7bWFyZ2luLWJvdHRvbTogMjA0cHg7fVxuLm0tYi0yMDUge21hcmdpbi1ib3R0b206IDIwNXB4O31cbi5tLWItMjA2IHttYXJnaW4tYm90dG9tOiAyMDZweDt9XG4ubS1iLTIwNyB7bWFyZ2luLWJvdHRvbTogMjA3cHg7fVxuLm0tYi0yMDgge21hcmdpbi1ib3R0b206IDIwOHB4O31cbi5tLWItMjA5IHttYXJnaW4tYm90dG9tOiAyMDlweDt9XG4ubS1iLTIxMCB7bWFyZ2luLWJvdHRvbTogMjEwcHg7fVxuLm0tYi0yMTEge21hcmdpbi1ib3R0b206IDIxMXB4O31cbi5tLWItMjEyIHttYXJnaW4tYm90dG9tOiAyMTJweDt9XG4ubS1iLTIxMyB7bWFyZ2luLWJvdHRvbTogMjEzcHg7fVxuLm0tYi0yMTQge21hcmdpbi1ib3R0b206IDIxNHB4O31cbi5tLWItMjE1IHttYXJnaW4tYm90dG9tOiAyMTVweDt9XG4ubS1iLTIxNiB7bWFyZ2luLWJvdHRvbTogMjE2cHg7fVxuLm0tYi0yMTcge21hcmdpbi1ib3R0b206IDIxN3B4O31cbi5tLWItMjE4IHttYXJnaW4tYm90dG9tOiAyMThweDt9XG4ubS1iLTIxOSB7bWFyZ2luLWJvdHRvbTogMjE5cHg7fVxuLm0tYi0yMjAge21hcmdpbi1ib3R0b206IDIyMHB4O31cbi5tLWItMjIxIHttYXJnaW4tYm90dG9tOiAyMjFweDt9XG4ubS1iLTIyMiB7bWFyZ2luLWJvdHRvbTogMjIycHg7fVxuLm0tYi0yMjMge21hcmdpbi1ib3R0b206IDIyM3B4O31cbi5tLWItMjI0IHttYXJnaW4tYm90dG9tOiAyMjRweDt9XG4ubS1iLTIyNSB7bWFyZ2luLWJvdHRvbTogMjI1cHg7fVxuLm0tYi0yMjYge21hcmdpbi1ib3R0b206IDIyNnB4O31cbi5tLWItMjI3IHttYXJnaW4tYm90dG9tOiAyMjdweDt9XG4ubS1iLTIyOCB7bWFyZ2luLWJvdHRvbTogMjI4cHg7fVxuLm0tYi0yMjkge21hcmdpbi1ib3R0b206IDIyOXB4O31cbi5tLWItMjMwIHttYXJnaW4tYm90dG9tOiAyMzBweDt9XG4ubS1iLTIzMSB7bWFyZ2luLWJvdHRvbTogMjMxcHg7fVxuLm0tYi0yMzIge21hcmdpbi1ib3R0b206IDIzMnB4O31cbi5tLWItMjMzIHttYXJnaW4tYm90dG9tOiAyMzNweDt9XG4ubS1iLTIzNCB7bWFyZ2luLWJvdHRvbTogMjM0cHg7fVxuLm0tYi0yMzUge21hcmdpbi1ib3R0b206IDIzNXB4O31cbi5tLWItMjM2IHttYXJnaW4tYm90dG9tOiAyMzZweDt9XG4ubS1iLTIzNyB7bWFyZ2luLWJvdHRvbTogMjM3cHg7fVxuLm0tYi0yMzgge21hcmdpbi1ib3R0b206IDIzOHB4O31cbi5tLWItMjM5IHttYXJnaW4tYm90dG9tOiAyMzlweDt9XG4ubS1iLTI0MCB7bWFyZ2luLWJvdHRvbTogMjQwcHg7fVxuLm0tYi0yNDEge21hcmdpbi1ib3R0b206IDI0MXB4O31cbi5tLWItMjQyIHttYXJnaW4tYm90dG9tOiAyNDJweDt9XG4ubS1iLTI0MyB7bWFyZ2luLWJvdHRvbTogMjQzcHg7fVxuLm0tYi0yNDQge21hcmdpbi1ib3R0b206IDI0NHB4O31cbi5tLWItMjQ1IHttYXJnaW4tYm90dG9tOiAyNDVweDt9XG4ubS1iLTI0NiB7bWFyZ2luLWJvdHRvbTogMjQ2cHg7fVxuLm0tYi0yNDcge21hcmdpbi1ib3R0b206IDI0N3B4O31cbi5tLWItMjQ4IHttYXJnaW4tYm90dG9tOiAyNDhweDt9XG4ubS1iLTI0OSB7bWFyZ2luLWJvdHRvbTogMjQ5cHg7fVxuLm0tYi0yNTAge21hcmdpbi1ib3R0b206IDI1MHB4O31cbi5tLWwtMCB7bWFyZ2luLWxlZnQ6IDBweDt9XG4ubS1sLTEge21hcmdpbi1sZWZ0OiAxcHg7fVxuLm0tbC0yIHttYXJnaW4tbGVmdDogMnB4O31cbi5tLWwtMyB7bWFyZ2luLWxlZnQ6IDNweDt9XG4ubS1sLTQge21hcmdpbi1sZWZ0OiA0cHg7fVxuLm0tbC01IHttYXJnaW4tbGVmdDogNXB4O31cbi5tLWwtNiB7bWFyZ2luLWxlZnQ6IDZweDt9XG4ubS1sLTcge21hcmdpbi1sZWZ0OiA3cHg7fVxuLm0tbC04IHttYXJnaW4tbGVmdDogOHB4O31cbi5tLWwtOSB7bWFyZ2luLWxlZnQ6IDlweDt9XG4ubS1sLTEwIHttYXJnaW4tbGVmdDogMTBweDt9XG4ubS1sLTExIHttYXJnaW4tbGVmdDogMTFweDt9XG4ubS1sLTEyIHttYXJnaW4tbGVmdDogMTJweDt9XG4ubS1sLTEzIHttYXJnaW4tbGVmdDogMTNweDt9XG4ubS1sLTE0IHttYXJnaW4tbGVmdDogMTRweDt9XG4ubS1sLTE1IHttYXJnaW4tbGVmdDogMTVweDt9XG4ubS1sLTE2IHttYXJnaW4tbGVmdDogMTZweDt9XG4ubS1sLTE3IHttYXJnaW4tbGVmdDogMTdweDt9XG4ubS1sLTE4IHttYXJnaW4tbGVmdDogMThweDt9XG4ubS1sLTE5IHttYXJnaW4tbGVmdDogMTlweDt9XG4ubS1sLTIwIHttYXJnaW4tbGVmdDogMjBweDt9XG4ubS1sLTIxIHttYXJnaW4tbGVmdDogMjFweDt9XG4ubS1sLTIyIHttYXJnaW4tbGVmdDogMjJweDt9XG4ubS1sLTIzIHttYXJnaW4tbGVmdDogMjNweDt9XG4ubS1sLTI0IHttYXJnaW4tbGVmdDogMjRweDt9XG4ubS1sLTI1IHttYXJnaW4tbGVmdDogMjVweDt9XG4ubS1sLTI2IHttYXJnaW4tbGVmdDogMjZweDt9XG4ubS1sLTI3IHttYXJnaW4tbGVmdDogMjdweDt9XG4ubS1sLTI4IHttYXJnaW4tbGVmdDogMjhweDt9XG4ubS1sLTI5IHttYXJnaW4tbGVmdDogMjlweDt9XG4ubS1sLTMwIHttYXJnaW4tbGVmdDogMzBweDt9XG4ubS1sLTMxIHttYXJnaW4tbGVmdDogMzFweDt9XG4ubS1sLTMyIHttYXJnaW4tbGVmdDogMzJweDt9XG4ubS1sLTMzIHttYXJnaW4tbGVmdDogMzNweDt9XG4ubS1sLTM0IHttYXJnaW4tbGVmdDogMzRweDt9XG4ubS1sLTM1IHttYXJnaW4tbGVmdDogMzVweDt9XG4ubS1sLTM2IHttYXJnaW4tbGVmdDogMzZweDt9XG4ubS1sLTM3IHttYXJnaW4tbGVmdDogMzdweDt9XG4ubS1sLTM4IHttYXJnaW4tbGVmdDogMzhweDt9XG4ubS1sLTM5IHttYXJnaW4tbGVmdDogMzlweDt9XG4ubS1sLTQwIHttYXJnaW4tbGVmdDogNDBweDt9XG4ubS1sLTQxIHttYXJnaW4tbGVmdDogNDFweDt9XG4ubS1sLTQyIHttYXJnaW4tbGVmdDogNDJweDt9XG4ubS1sLTQzIHttYXJnaW4tbGVmdDogNDNweDt9XG4ubS1sLTQ0IHttYXJnaW4tbGVmdDogNDRweDt9XG4ubS1sLTQ1IHttYXJnaW4tbGVmdDogNDVweDt9XG4ubS1sLTQ2IHttYXJnaW4tbGVmdDogNDZweDt9XG4ubS1sLTQ3IHttYXJnaW4tbGVmdDogNDdweDt9XG4ubS1sLTQ4IHttYXJnaW4tbGVmdDogNDhweDt9XG4ubS1sLTQ5IHttYXJnaW4tbGVmdDogNDlweDt9XG4ubS1sLTUwIHttYXJnaW4tbGVmdDogNTBweDt9XG4ubS1sLTUxIHttYXJnaW4tbGVmdDogNTFweDt9XG4ubS1sLTUyIHttYXJnaW4tbGVmdDogNTJweDt9XG4ubS1sLTUzIHttYXJnaW4tbGVmdDogNTNweDt9XG4ubS1sLTU0IHttYXJnaW4tbGVmdDogNTRweDt9XG4ubS1sLTU1IHttYXJnaW4tbGVmdDogNTVweDt9XG4ubS1sLTU2IHttYXJnaW4tbGVmdDogNTZweDt9XG4ubS1sLTU3IHttYXJnaW4tbGVmdDogNTdweDt9XG4ubS1sLTU4IHttYXJnaW4tbGVmdDogNThweDt9XG4ubS1sLTU5IHttYXJnaW4tbGVmdDogNTlweDt9XG4ubS1sLTYwIHttYXJnaW4tbGVmdDogNjBweDt9XG4ubS1sLTYxIHttYXJnaW4tbGVmdDogNjFweDt9XG4ubS1sLTYyIHttYXJnaW4tbGVmdDogNjJweDt9XG4ubS1sLTYzIHttYXJnaW4tbGVmdDogNjNweDt9XG4ubS1sLTY0IHttYXJnaW4tbGVmdDogNjRweDt9XG4ubS1sLTY1IHttYXJnaW4tbGVmdDogNjVweDt9XG4ubS1sLTY2IHttYXJnaW4tbGVmdDogNjZweDt9XG4ubS1sLTY3IHttYXJnaW4tbGVmdDogNjdweDt9XG4ubS1sLTY4IHttYXJnaW4tbGVmdDogNjhweDt9XG4ubS1sLTY5IHttYXJnaW4tbGVmdDogNjlweDt9XG4ubS1sLTcwIHttYXJnaW4tbGVmdDogNzBweDt9XG4ubS1sLTcxIHttYXJnaW4tbGVmdDogNzFweDt9XG4ubS1sLTcyIHttYXJnaW4tbGVmdDogNzJweDt9XG4ubS1sLTczIHttYXJnaW4tbGVmdDogNzNweDt9XG4ubS1sLTc0IHttYXJnaW4tbGVmdDogNzRweDt9XG4ubS1sLTc1IHttYXJnaW4tbGVmdDogNzVweDt9XG4ubS1sLTc2IHttYXJnaW4tbGVmdDogNzZweDt9XG4ubS1sLTc3IHttYXJnaW4tbGVmdDogNzdweDt9XG4ubS1sLTc4IHttYXJnaW4tbGVmdDogNzhweDt9XG4ubS1sLTc5IHttYXJnaW4tbGVmdDogNzlweDt9XG4ubS1sLTgwIHttYXJnaW4tbGVmdDogODBweDt9XG4ubS1sLTgxIHttYXJnaW4tbGVmdDogODFweDt9XG4ubS1sLTgyIHttYXJnaW4tbGVmdDogODJweDt9XG4ubS1sLTgzIHttYXJnaW4tbGVmdDogODNweDt9XG4ubS1sLTg0IHttYXJnaW4tbGVmdDogODRweDt9XG4ubS1sLTg1IHttYXJnaW4tbGVmdDogODVweDt9XG4ubS1sLTg2IHttYXJnaW4tbGVmdDogODZweDt9XG4ubS1sLTg3IHttYXJnaW4tbGVmdDogODdweDt9XG4ubS1sLTg4IHttYXJnaW4tbGVmdDogODhweDt9XG4ubS1sLTg5IHttYXJnaW4tbGVmdDogODlweDt9XG4ubS1sLTkwIHttYXJnaW4tbGVmdDogOTBweDt9XG4ubS1sLTkxIHttYXJnaW4tbGVmdDogOTFweDt9XG4ubS1sLTkyIHttYXJnaW4tbGVmdDogOTJweDt9XG4ubS1sLTkzIHttYXJnaW4tbGVmdDogOTNweDt9XG4ubS1sLTk0IHttYXJnaW4tbGVmdDogOTRweDt9XG4ubS1sLTk1IHttYXJnaW4tbGVmdDogOTVweDt9XG4ubS1sLTk2IHttYXJnaW4tbGVmdDogOTZweDt9XG4ubS1sLTk3IHttYXJnaW4tbGVmdDogOTdweDt9XG4ubS1sLTk4IHttYXJnaW4tbGVmdDogOThweDt9XG4ubS1sLTk5IHttYXJnaW4tbGVmdDogOTlweDt9XG4ubS1sLTEwMCB7bWFyZ2luLWxlZnQ6IDEwMHB4O31cbi5tLWwtMTAxIHttYXJnaW4tbGVmdDogMTAxcHg7fVxuLm0tbC0xMDIge21hcmdpbi1sZWZ0OiAxMDJweDt9XG4ubS1sLTEwMyB7bWFyZ2luLWxlZnQ6IDEwM3B4O31cbi5tLWwtMTA0IHttYXJnaW4tbGVmdDogMTA0cHg7fVxuLm0tbC0xMDUge21hcmdpbi1sZWZ0OiAxMDVweDt9XG4ubS1sLTEwNiB7bWFyZ2luLWxlZnQ6IDEwNnB4O31cbi5tLWwtMTA3IHttYXJnaW4tbGVmdDogMTA3cHg7fVxuLm0tbC0xMDgge21hcmdpbi1sZWZ0OiAxMDhweDt9XG4ubS1sLTEwOSB7bWFyZ2luLWxlZnQ6IDEwOXB4O31cbi5tLWwtMTEwIHttYXJnaW4tbGVmdDogMTEwcHg7fVxuLm0tbC0xMTEge21hcmdpbi1sZWZ0OiAxMTFweDt9XG4ubS1sLTExMiB7bWFyZ2luLWxlZnQ6IDExMnB4O31cbi5tLWwtMTEzIHttYXJnaW4tbGVmdDogMTEzcHg7fVxuLm0tbC0xMTQge21hcmdpbi1sZWZ0OiAxMTRweDt9XG4ubS1sLTExNSB7bWFyZ2luLWxlZnQ6IDExNXB4O31cbi5tLWwtMTE2IHttYXJnaW4tbGVmdDogMTE2cHg7fVxuLm0tbC0xMTcge21hcmdpbi1sZWZ0OiAxMTdweDt9XG4ubS1sLTExOCB7bWFyZ2luLWxlZnQ6IDExOHB4O31cbi5tLWwtMTE5IHttYXJnaW4tbGVmdDogMTE5cHg7fVxuLm0tbC0xMjAge21hcmdpbi1sZWZ0OiAxMjBweDt9XG4ubS1sLTEyMSB7bWFyZ2luLWxlZnQ6IDEyMXB4O31cbi5tLWwtMTIyIHttYXJnaW4tbGVmdDogMTIycHg7fVxuLm0tbC0xMjMge21hcmdpbi1sZWZ0OiAxMjNweDt9XG4ubS1sLTEyNCB7bWFyZ2luLWxlZnQ6IDEyNHB4O31cbi5tLWwtMTI1IHttYXJnaW4tbGVmdDogMTI1cHg7fVxuLm0tbC0xMjYge21hcmdpbi1sZWZ0OiAxMjZweDt9XG4ubS1sLTEyNyB7bWFyZ2luLWxlZnQ6IDEyN3B4O31cbi5tLWwtMTI4IHttYXJnaW4tbGVmdDogMTI4cHg7fVxuLm0tbC0xMjkge21hcmdpbi1sZWZ0OiAxMjlweDt9XG4ubS1sLTEzMCB7bWFyZ2luLWxlZnQ6IDEzMHB4O31cbi5tLWwtMTMxIHttYXJnaW4tbGVmdDogMTMxcHg7fVxuLm0tbC0xMzIge21hcmdpbi1sZWZ0OiAxMzJweDt9XG4ubS1sLTEzMyB7bWFyZ2luLWxlZnQ6IDEzM3B4O31cbi5tLWwtMTM0IHttYXJnaW4tbGVmdDogMTM0cHg7fVxuLm0tbC0xMzUge21hcmdpbi1sZWZ0OiAxMzVweDt9XG4ubS1sLTEzNiB7bWFyZ2luLWxlZnQ6IDEzNnB4O31cbi5tLWwtMTM3IHttYXJnaW4tbGVmdDogMTM3cHg7fVxuLm0tbC0xMzgge21hcmdpbi1sZWZ0OiAxMzhweDt9XG4ubS1sLTEzOSB7bWFyZ2luLWxlZnQ6IDEzOXB4O31cbi5tLWwtMTQwIHttYXJnaW4tbGVmdDogMTQwcHg7fVxuLm0tbC0xNDEge21hcmdpbi1sZWZ0OiAxNDFweDt9XG4ubS1sLTE0MiB7bWFyZ2luLWxlZnQ6IDE0MnB4O31cbi5tLWwtMTQzIHttYXJnaW4tbGVmdDogMTQzcHg7fVxuLm0tbC0xNDQge21hcmdpbi1sZWZ0OiAxNDRweDt9XG4ubS1sLTE0NSB7bWFyZ2luLWxlZnQ6IDE0NXB4O31cbi5tLWwtMTQ2IHttYXJnaW4tbGVmdDogMTQ2cHg7fVxuLm0tbC0xNDcge21hcmdpbi1sZWZ0OiAxNDdweDt9XG4ubS1sLTE0OCB7bWFyZ2luLWxlZnQ6IDE0OHB4O31cbi5tLWwtMTQ5IHttYXJnaW4tbGVmdDogMTQ5cHg7fVxuLm0tbC0xNTAge21hcmdpbi1sZWZ0OiAxNTBweDt9XG4ubS1sLTE1MSB7bWFyZ2luLWxlZnQ6IDE1MXB4O31cbi5tLWwtMTUyIHttYXJnaW4tbGVmdDogMTUycHg7fVxuLm0tbC0xNTMge21hcmdpbi1sZWZ0OiAxNTNweDt9XG4ubS1sLTE1NCB7bWFyZ2luLWxlZnQ6IDE1NHB4O31cbi5tLWwtMTU1IHttYXJnaW4tbGVmdDogMTU1cHg7fVxuLm0tbC0xNTYge21hcmdpbi1sZWZ0OiAxNTZweDt9XG4ubS1sLTE1NyB7bWFyZ2luLWxlZnQ6IDE1N3B4O31cbi5tLWwtMTU4IHttYXJnaW4tbGVmdDogMTU4cHg7fVxuLm0tbC0xNTkge21hcmdpbi1sZWZ0OiAxNTlweDt9XG4ubS1sLTE2MCB7bWFyZ2luLWxlZnQ6IDE2MHB4O31cbi5tLWwtMTYxIHttYXJnaW4tbGVmdDogMTYxcHg7fVxuLm0tbC0xNjIge21hcmdpbi1sZWZ0OiAxNjJweDt9XG4ubS1sLTE2MyB7bWFyZ2luLWxlZnQ6IDE2M3B4O31cbi5tLWwtMTY0IHttYXJnaW4tbGVmdDogMTY0cHg7fVxuLm0tbC0xNjUge21hcmdpbi1sZWZ0OiAxNjVweDt9XG4ubS1sLTE2NiB7bWFyZ2luLWxlZnQ6IDE2NnB4O31cbi5tLWwtMTY3IHttYXJnaW4tbGVmdDogMTY3cHg7fVxuLm0tbC0xNjgge21hcmdpbi1sZWZ0OiAxNjhweDt9XG4ubS1sLTE2OSB7bWFyZ2luLWxlZnQ6IDE2OXB4O31cbi5tLWwtMTcwIHttYXJnaW4tbGVmdDogMTcwcHg7fVxuLm0tbC0xNzEge21hcmdpbi1sZWZ0OiAxNzFweDt9XG4ubS1sLTE3MiB7bWFyZ2luLWxlZnQ6IDE3MnB4O31cbi5tLWwtMTczIHttYXJnaW4tbGVmdDogMTczcHg7fVxuLm0tbC0xNzQge21hcmdpbi1sZWZ0OiAxNzRweDt9XG4ubS1sLTE3NSB7bWFyZ2luLWxlZnQ6IDE3NXB4O31cbi5tLWwtMTc2IHttYXJnaW4tbGVmdDogMTc2cHg7fVxuLm0tbC0xNzcge21hcmdpbi1sZWZ0OiAxNzdweDt9XG4ubS1sLTE3OCB7bWFyZ2luLWxlZnQ6IDE3OHB4O31cbi5tLWwtMTc5IHttYXJnaW4tbGVmdDogMTc5cHg7fVxuLm0tbC0xODAge21hcmdpbi1sZWZ0OiAxODBweDt9XG4ubS1sLTE4MSB7bWFyZ2luLWxlZnQ6IDE4MXB4O31cbi5tLWwtMTgyIHttYXJnaW4tbGVmdDogMTgycHg7fVxuLm0tbC0xODMge21hcmdpbi1sZWZ0OiAxODNweDt9XG4ubS1sLTE4NCB7bWFyZ2luLWxlZnQ6IDE4NHB4O31cbi5tLWwtMTg1IHttYXJnaW4tbGVmdDogMTg1cHg7fVxuLm0tbC0xODYge21hcmdpbi1sZWZ0OiAxODZweDt9XG4ubS1sLTE4NyB7bWFyZ2luLWxlZnQ6IDE4N3B4O31cbi5tLWwtMTg4IHttYXJnaW4tbGVmdDogMTg4cHg7fVxuLm0tbC0xODkge21hcmdpbi1sZWZ0OiAxODlweDt9XG4ubS1sLTE5MCB7bWFyZ2luLWxlZnQ6IDE5MHB4O31cbi5tLWwtMTkxIHttYXJnaW4tbGVmdDogMTkxcHg7fVxuLm0tbC0xOTIge21hcmdpbi1sZWZ0OiAxOTJweDt9XG4ubS1sLTE5MyB7bWFyZ2luLWxlZnQ6IDE5M3B4O31cbi5tLWwtMTk0IHttYXJnaW4tbGVmdDogMTk0cHg7fVxuLm0tbC0xOTUge21hcmdpbi1sZWZ0OiAxOTVweDt9XG4ubS1sLTE5NiB7bWFyZ2luLWxlZnQ6IDE5NnB4O31cbi5tLWwtMTk3IHttYXJnaW4tbGVmdDogMTk3cHg7fVxuLm0tbC0xOTgge21hcmdpbi1sZWZ0OiAxOThweDt9XG4ubS1sLTE5OSB7bWFyZ2luLWxlZnQ6IDE5OXB4O31cbi5tLWwtMjAwIHttYXJnaW4tbGVmdDogMjAwcHg7fVxuLm0tbC0yMDEge21hcmdpbi1sZWZ0OiAyMDFweDt9XG4ubS1sLTIwMiB7bWFyZ2luLWxlZnQ6IDIwMnB4O31cbi5tLWwtMjAzIHttYXJnaW4tbGVmdDogMjAzcHg7fVxuLm0tbC0yMDQge21hcmdpbi1sZWZ0OiAyMDRweDt9XG4ubS1sLTIwNSB7bWFyZ2luLWxlZnQ6IDIwNXB4O31cbi5tLWwtMjA2IHttYXJnaW4tbGVmdDogMjA2cHg7fVxuLm0tbC0yMDcge21hcmdpbi1sZWZ0OiAyMDdweDt9XG4ubS1sLTIwOCB7bWFyZ2luLWxlZnQ6IDIwOHB4O31cbi5tLWwtMjA5IHttYXJnaW4tbGVmdDogMjA5cHg7fVxuLm0tbC0yMTAge21hcmdpbi1sZWZ0OiAyMTBweDt9XG4ubS1sLTIxMSB7bWFyZ2luLWxlZnQ6IDIxMXB4O31cbi5tLWwtMjEyIHttYXJnaW4tbGVmdDogMjEycHg7fVxuLm0tbC0yMTMge21hcmdpbi1sZWZ0OiAyMTNweDt9XG4ubS1sLTIxNCB7bWFyZ2luLWxlZnQ6IDIxNHB4O31cbi5tLWwtMjE1IHttYXJnaW4tbGVmdDogMjE1cHg7fVxuLm0tbC0yMTYge21hcmdpbi1sZWZ0OiAyMTZweDt9XG4ubS1sLTIxNyB7bWFyZ2luLWxlZnQ6IDIxN3B4O31cbi5tLWwtMjE4IHttYXJnaW4tbGVmdDogMjE4cHg7fVxuLm0tbC0yMTkge21hcmdpbi1sZWZ0OiAyMTlweDt9XG4ubS1sLTIyMCB7bWFyZ2luLWxlZnQ6IDIyMHB4O31cbi5tLWwtMjIxIHttYXJnaW4tbGVmdDogMjIxcHg7fVxuLm0tbC0yMjIge21hcmdpbi1sZWZ0OiAyMjJweDt9XG4ubS1sLTIyMyB7bWFyZ2luLWxlZnQ6IDIyM3B4O31cbi5tLWwtMjI0IHttYXJnaW4tbGVmdDogMjI0cHg7fVxuLm0tbC0yMjUge21hcmdpbi1sZWZ0OiAyMjVweDt9XG4ubS1sLTIyNiB7bWFyZ2luLWxlZnQ6IDIyNnB4O31cbi5tLWwtMjI3IHttYXJnaW4tbGVmdDogMjI3cHg7fVxuLm0tbC0yMjgge21hcmdpbi1sZWZ0OiAyMjhweDt9XG4ubS1sLTIyOSB7bWFyZ2luLWxlZnQ6IDIyOXB4O31cbi5tLWwtMjMwIHttYXJnaW4tbGVmdDogMjMwcHg7fVxuLm0tbC0yMzEge21hcmdpbi1sZWZ0OiAyMzFweDt9XG4ubS1sLTIzMiB7bWFyZ2luLWxlZnQ6IDIzMnB4O31cbi5tLWwtMjMzIHttYXJnaW4tbGVmdDogMjMzcHg7fVxuLm0tbC0yMzQge21hcmdpbi1sZWZ0OiAyMzRweDt9XG4ubS1sLTIzNSB7bWFyZ2luLWxlZnQ6IDIzNXB4O31cbi5tLWwtMjM2IHttYXJnaW4tbGVmdDogMjM2cHg7fVxuLm0tbC0yMzcge21hcmdpbi1sZWZ0OiAyMzdweDt9XG4ubS1sLTIzOCB7bWFyZ2luLWxlZnQ6IDIzOHB4O31cbi5tLWwtMjM5IHttYXJnaW4tbGVmdDogMjM5cHg7fVxuLm0tbC0yNDAge21hcmdpbi1sZWZ0OiAyNDBweDt9XG4ubS1sLTI0MSB7bWFyZ2luLWxlZnQ6IDI0MXB4O31cbi5tLWwtMjQyIHttYXJnaW4tbGVmdDogMjQycHg7fVxuLm0tbC0yNDMge21hcmdpbi1sZWZ0OiAyNDNweDt9XG4ubS1sLTI0NCB7bWFyZ2luLWxlZnQ6IDI0NHB4O31cbi5tLWwtMjQ1IHttYXJnaW4tbGVmdDogMjQ1cHg7fVxuLm0tbC0yNDYge21hcmdpbi1sZWZ0OiAyNDZweDt9XG4ubS1sLTI0NyB7bWFyZ2luLWxlZnQ6IDI0N3B4O31cbi5tLWwtMjQ4IHttYXJnaW4tbGVmdDogMjQ4cHg7fVxuLm0tbC0yNDkge21hcmdpbi1sZWZ0OiAyNDlweDt9XG4ubS1sLTI1MCB7bWFyZ2luLWxlZnQ6IDI1MHB4O31cbi5tLXItMCB7bWFyZ2luLXJpZ2h0OiAwcHg7fVxuLm0tci0xIHttYXJnaW4tcmlnaHQ6IDFweDt9XG4ubS1yLTIge21hcmdpbi1yaWdodDogMnB4O31cbi5tLXItMyB7bWFyZ2luLXJpZ2h0OiAzcHg7fVxuLm0tci00IHttYXJnaW4tcmlnaHQ6IDRweDt9XG4ubS1yLTUge21hcmdpbi1yaWdodDogNXB4O31cbi5tLXItNiB7bWFyZ2luLXJpZ2h0OiA2cHg7fVxuLm0tci03IHttYXJnaW4tcmlnaHQ6IDdweDt9XG4ubS1yLTgge21hcmdpbi1yaWdodDogOHB4O31cbi5tLXItOSB7bWFyZ2luLXJpZ2h0OiA5cHg7fVxuLm0tci0xMCB7bWFyZ2luLXJpZ2h0OiAxMHB4O31cbi5tLXItMTEge21hcmdpbi1yaWdodDogMTFweDt9XG4ubS1yLTEyIHttYXJnaW4tcmlnaHQ6IDEycHg7fVxuLm0tci0xMyB7bWFyZ2luLXJpZ2h0OiAxM3B4O31cbi5tLXItMTQge21hcmdpbi1yaWdodDogMTRweDt9XG4ubS1yLTE1IHttYXJnaW4tcmlnaHQ6IDE1cHg7fVxuLm0tci0xNiB7bWFyZ2luLXJpZ2h0OiAxNnB4O31cbi5tLXItMTcge21hcmdpbi1yaWdodDogMTdweDt9XG4ubS1yLTE4IHttYXJnaW4tcmlnaHQ6IDE4cHg7fVxuLm0tci0xOSB7bWFyZ2luLXJpZ2h0OiAxOXB4O31cbi5tLXItMjAge21hcmdpbi1yaWdodDogMjBweDt9XG4ubS1yLTIxIHttYXJnaW4tcmlnaHQ6IDIxcHg7fVxuLm0tci0yMiB7bWFyZ2luLXJpZ2h0OiAyMnB4O31cbi5tLXItMjMge21hcmdpbi1yaWdodDogMjNweDt9XG4ubS1yLTI0IHttYXJnaW4tcmlnaHQ6IDI0cHg7fVxuLm0tci0yNSB7bWFyZ2luLXJpZ2h0OiAyNXB4O31cbi5tLXItMjYge21hcmdpbi1yaWdodDogMjZweDt9XG4ubS1yLTI3IHttYXJnaW4tcmlnaHQ6IDI3cHg7fVxuLm0tci0yOCB7bWFyZ2luLXJpZ2h0OiAyOHB4O31cbi5tLXItMjkge21hcmdpbi1yaWdodDogMjlweDt9XG4ubS1yLTMwIHttYXJnaW4tcmlnaHQ6IDMwcHg7fVxuLm0tci0zMSB7bWFyZ2luLXJpZ2h0OiAzMXB4O31cbi5tLXItMzIge21hcmdpbi1yaWdodDogMzJweDt9XG4ubS1yLTMzIHttYXJnaW4tcmlnaHQ6IDMzcHg7fVxuLm0tci0zNCB7bWFyZ2luLXJpZ2h0OiAzNHB4O31cbi5tLXItMzUge21hcmdpbi1yaWdodDogMzVweDt9XG4ubS1yLTM2IHttYXJnaW4tcmlnaHQ6IDM2cHg7fVxuLm0tci0zNyB7bWFyZ2luLXJpZ2h0OiAzN3B4O31cbi5tLXItMzgge21hcmdpbi1yaWdodDogMzhweDt9XG4ubS1yLTM5IHttYXJnaW4tcmlnaHQ6IDM5cHg7fVxuLm0tci00MCB7bWFyZ2luLXJpZ2h0OiA0MHB4O31cbi5tLXItNDEge21hcmdpbi1yaWdodDogNDFweDt9XG4ubS1yLTQyIHttYXJnaW4tcmlnaHQ6IDQycHg7fVxuLm0tci00MyB7bWFyZ2luLXJpZ2h0OiA0M3B4O31cbi5tLXItNDQge21hcmdpbi1yaWdodDogNDRweDt9XG4ubS1yLTQ1IHttYXJnaW4tcmlnaHQ6IDQ1cHg7fVxuLm0tci00NiB7bWFyZ2luLXJpZ2h0OiA0NnB4O31cbi5tLXItNDcge21hcmdpbi1yaWdodDogNDdweDt9XG4ubS1yLTQ4IHttYXJnaW4tcmlnaHQ6IDQ4cHg7fVxuLm0tci00OSB7bWFyZ2luLXJpZ2h0OiA0OXB4O31cbi5tLXItNTAge21hcmdpbi1yaWdodDogNTBweDt9XG4ubS1yLTUxIHttYXJnaW4tcmlnaHQ6IDUxcHg7fVxuLm0tci01MiB7bWFyZ2luLXJpZ2h0OiA1MnB4O31cbi5tLXItNTMge21hcmdpbi1yaWdodDogNTNweDt9XG4ubS1yLTU0IHttYXJnaW4tcmlnaHQ6IDU0cHg7fVxuLm0tci01NSB7bWFyZ2luLXJpZ2h0OiA1NXB4O31cbi5tLXItNTYge21hcmdpbi1yaWdodDogNTZweDt9XG4ubS1yLTU3IHttYXJnaW4tcmlnaHQ6IDU3cHg7fVxuLm0tci01OCB7bWFyZ2luLXJpZ2h0OiA1OHB4O31cbi5tLXItNTkge21hcmdpbi1yaWdodDogNTlweDt9XG4ubS1yLTYwIHttYXJnaW4tcmlnaHQ6IDYwcHg7fVxuLm0tci02MSB7bWFyZ2luLXJpZ2h0OiA2MXB4O31cbi5tLXItNjIge21hcmdpbi1yaWdodDogNjJweDt9XG4ubS1yLTYzIHttYXJnaW4tcmlnaHQ6IDYzcHg7fVxuLm0tci02NCB7bWFyZ2luLXJpZ2h0OiA2NHB4O31cbi5tLXItNjUge21hcmdpbi1yaWdodDogNjVweDt9XG4ubS1yLTY2IHttYXJnaW4tcmlnaHQ6IDY2cHg7fVxuLm0tci02NyB7bWFyZ2luLXJpZ2h0OiA2N3B4O31cbi5tLXItNjgge21hcmdpbi1yaWdodDogNjhweDt9XG4ubS1yLTY5IHttYXJnaW4tcmlnaHQ6IDY5cHg7fVxuLm0tci03MCB7bWFyZ2luLXJpZ2h0OiA3MHB4O31cbi5tLXItNzEge21hcmdpbi1yaWdodDogNzFweDt9XG4ubS1yLTcyIHttYXJnaW4tcmlnaHQ6IDcycHg7fVxuLm0tci03MyB7bWFyZ2luLXJpZ2h0OiA3M3B4O31cbi5tLXItNzQge21hcmdpbi1yaWdodDogNzRweDt9XG4ubS1yLTc1IHttYXJnaW4tcmlnaHQ6IDc1cHg7fVxuLm0tci03NiB7bWFyZ2luLXJpZ2h0OiA3NnB4O31cbi5tLXItNzcge21hcmdpbi1yaWdodDogNzdweDt9XG4ubS1yLTc4IHttYXJnaW4tcmlnaHQ6IDc4cHg7fVxuLm0tci03OSB7bWFyZ2luLXJpZ2h0OiA3OXB4O31cbi5tLXItODAge21hcmdpbi1yaWdodDogODBweDt9XG4ubS1yLTgxIHttYXJnaW4tcmlnaHQ6IDgxcHg7fVxuLm0tci04MiB7bWFyZ2luLXJpZ2h0OiA4MnB4O31cbi5tLXItODMge21hcmdpbi1yaWdodDogODNweDt9XG4ubS1yLTg0IHttYXJnaW4tcmlnaHQ6IDg0cHg7fVxuLm0tci04NSB7bWFyZ2luLXJpZ2h0OiA4NXB4O31cbi5tLXItODYge21hcmdpbi1yaWdodDogODZweDt9XG4ubS1yLTg3IHttYXJnaW4tcmlnaHQ6IDg3cHg7fVxuLm0tci04OCB7bWFyZ2luLXJpZ2h0OiA4OHB4O31cbi5tLXItODkge21hcmdpbi1yaWdodDogODlweDt9XG4ubS1yLTkwIHttYXJnaW4tcmlnaHQ6IDkwcHg7fVxuLm0tci05MSB7bWFyZ2luLXJpZ2h0OiA5MXB4O31cbi5tLXItOTIge21hcmdpbi1yaWdodDogOTJweDt9XG4ubS1yLTkzIHttYXJnaW4tcmlnaHQ6IDkzcHg7fVxuLm0tci05NCB7bWFyZ2luLXJpZ2h0OiA5NHB4O31cbi5tLXItOTUge21hcmdpbi1yaWdodDogOTVweDt9XG4ubS1yLTk2IHttYXJnaW4tcmlnaHQ6IDk2cHg7fVxuLm0tci05NyB7bWFyZ2luLXJpZ2h0OiA5N3B4O31cbi5tLXItOTgge21hcmdpbi1yaWdodDogOThweDt9XG4ubS1yLTk5IHttYXJnaW4tcmlnaHQ6IDk5cHg7fVxuLm0tci0xMDAge21hcmdpbi1yaWdodDogMTAwcHg7fVxuLm0tci0xMDEge21hcmdpbi1yaWdodDogMTAxcHg7fVxuLm0tci0xMDIge21hcmdpbi1yaWdodDogMTAycHg7fVxuLm0tci0xMDMge21hcmdpbi1yaWdodDogMTAzcHg7fVxuLm0tci0xMDQge21hcmdpbi1yaWdodDogMTA0cHg7fVxuLm0tci0xMDUge21hcmdpbi1yaWdodDogMTA1cHg7fVxuLm0tci0xMDYge21hcmdpbi1yaWdodDogMTA2cHg7fVxuLm0tci0xMDcge21hcmdpbi1yaWdodDogMTA3cHg7fVxuLm0tci0xMDgge21hcmdpbi1yaWdodDogMTA4cHg7fVxuLm0tci0xMDkge21hcmdpbi1yaWdodDogMTA5cHg7fVxuLm0tci0xMTAge21hcmdpbi1yaWdodDogMTEwcHg7fVxuLm0tci0xMTEge21hcmdpbi1yaWdodDogMTExcHg7fVxuLm0tci0xMTIge21hcmdpbi1yaWdodDogMTEycHg7fVxuLm0tci0xMTMge21hcmdpbi1yaWdodDogMTEzcHg7fVxuLm0tci0xMTQge21hcmdpbi1yaWdodDogMTE0cHg7fVxuLm0tci0xMTUge21hcmdpbi1yaWdodDogMTE1cHg7fVxuLm0tci0xMTYge21hcmdpbi1yaWdodDogMTE2cHg7fVxuLm0tci0xMTcge21hcmdpbi1yaWdodDogMTE3cHg7fVxuLm0tci0xMTgge21hcmdpbi1yaWdodDogMTE4cHg7fVxuLm0tci0xMTkge21hcmdpbi1yaWdodDogMTE5cHg7fVxuLm0tci0xMjAge21hcmdpbi1yaWdodDogMTIwcHg7fVxuLm0tci0xMjEge21hcmdpbi1yaWdodDogMTIxcHg7fVxuLm0tci0xMjIge21hcmdpbi1yaWdodDogMTIycHg7fVxuLm0tci0xMjMge21hcmdpbi1yaWdodDogMTIzcHg7fVxuLm0tci0xMjQge21hcmdpbi1yaWdodDogMTI0cHg7fVxuLm0tci0xMjUge21hcmdpbi1yaWdodDogMTI1cHg7fVxuLm0tci0xMjYge21hcmdpbi1yaWdodDogMTI2cHg7fVxuLm0tci0xMjcge21hcmdpbi1yaWdodDogMTI3cHg7fVxuLm0tci0xMjgge21hcmdpbi1yaWdodDogMTI4cHg7fVxuLm0tci0xMjkge21hcmdpbi1yaWdodDogMTI5cHg7fVxuLm0tci0xMzAge21hcmdpbi1yaWdodDogMTMwcHg7fVxuLm0tci0xMzEge21hcmdpbi1yaWdodDogMTMxcHg7fVxuLm0tci0xMzIge21hcmdpbi1yaWdodDogMTMycHg7fVxuLm0tci0xMzMge21hcmdpbi1yaWdodDogMTMzcHg7fVxuLm0tci0xMzQge21hcmdpbi1yaWdodDogMTM0cHg7fVxuLm0tci0xMzUge21hcmdpbi1yaWdodDogMTM1cHg7fVxuLm0tci0xMzYge21hcmdpbi1yaWdodDogMTM2cHg7fVxuLm0tci0xMzcge21hcmdpbi1yaWdodDogMTM3cHg7fVxuLm0tci0xMzgge21hcmdpbi1yaWdodDogMTM4cHg7fVxuLm0tci0xMzkge21hcmdpbi1yaWdodDogMTM5cHg7fVxuLm0tci0xNDAge21hcmdpbi1yaWdodDogMTQwcHg7fVxuLm0tci0xNDEge21hcmdpbi1yaWdodDogMTQxcHg7fVxuLm0tci0xNDIge21hcmdpbi1yaWdodDogMTQycHg7fVxuLm0tci0xNDMge21hcmdpbi1yaWdodDogMTQzcHg7fVxuLm0tci0xNDQge21hcmdpbi1yaWdodDogMTQ0cHg7fVxuLm0tci0xNDUge21hcmdpbi1yaWdodDogMTQ1cHg7fVxuLm0tci0xNDYge21hcmdpbi1yaWdodDogMTQ2cHg7fVxuLm0tci0xNDcge21hcmdpbi1yaWdodDogMTQ3cHg7fVxuLm0tci0xNDgge21hcmdpbi1yaWdodDogMTQ4cHg7fVxuLm0tci0xNDkge21hcmdpbi1yaWdodDogMTQ5cHg7fVxuLm0tci0xNTAge21hcmdpbi1yaWdodDogMTUwcHg7fVxuLm0tci0xNTEge21hcmdpbi1yaWdodDogMTUxcHg7fVxuLm0tci0xNTIge21hcmdpbi1yaWdodDogMTUycHg7fVxuLm0tci0xNTMge21hcmdpbi1yaWdodDogMTUzcHg7fVxuLm0tci0xNTQge21hcmdpbi1yaWdodDogMTU0cHg7fVxuLm0tci0xNTUge21hcmdpbi1yaWdodDogMTU1cHg7fVxuLm0tci0xNTYge21hcmdpbi1yaWdodDogMTU2cHg7fVxuLm0tci0xNTcge21hcmdpbi1yaWdodDogMTU3cHg7fVxuLm0tci0xNTgge21hcmdpbi1yaWdodDogMTU4cHg7fVxuLm0tci0xNTkge21hcmdpbi1yaWdodDogMTU5cHg7fVxuLm0tci0xNjAge21hcmdpbi1yaWdodDogMTYwcHg7fVxuLm0tci0xNjEge21hcmdpbi1yaWdodDogMTYxcHg7fVxuLm0tci0xNjIge21hcmdpbi1yaWdodDogMTYycHg7fVxuLm0tci0xNjMge21hcmdpbi1yaWdodDogMTYzcHg7fVxuLm0tci0xNjQge21hcmdpbi1yaWdodDogMTY0cHg7fVxuLm0tci0xNjUge21hcmdpbi1yaWdodDogMTY1cHg7fVxuLm0tci0xNjYge21hcmdpbi1yaWdodDogMTY2cHg7fVxuLm0tci0xNjcge21hcmdpbi1yaWdodDogMTY3cHg7fVxuLm0tci0xNjgge21hcmdpbi1yaWdodDogMTY4cHg7fVxuLm0tci0xNjkge21hcmdpbi1yaWdodDogMTY5cHg7fVxuLm0tci0xNzAge21hcmdpbi1yaWdodDogMTcwcHg7fVxuLm0tci0xNzEge21hcmdpbi1yaWdodDogMTcxcHg7fVxuLm0tci0xNzIge21hcmdpbi1yaWdodDogMTcycHg7fVxuLm0tci0xNzMge21hcmdpbi1yaWdodDogMTczcHg7fVxuLm0tci0xNzQge21hcmdpbi1yaWdodDogMTc0cHg7fVxuLm0tci0xNzUge21hcmdpbi1yaWdodDogMTc1cHg7fVxuLm0tci0xNzYge21hcmdpbi1yaWdodDogMTc2cHg7fVxuLm0tci0xNzcge21hcmdpbi1yaWdodDogMTc3cHg7fVxuLm0tci0xNzgge21hcmdpbi1yaWdodDogMTc4cHg7fVxuLm0tci0xNzkge21hcmdpbi1yaWdodDogMTc5cHg7fVxuLm0tci0xODAge21hcmdpbi1yaWdodDogMTgwcHg7fVxuLm0tci0xODEge21hcmdpbi1yaWdodDogMTgxcHg7fVxuLm0tci0xODIge21hcmdpbi1yaWdodDogMTgycHg7fVxuLm0tci0xODMge21hcmdpbi1yaWdodDogMTgzcHg7fVxuLm0tci0xODQge21hcmdpbi1yaWdodDogMTg0cHg7fVxuLm0tci0xODUge21hcmdpbi1yaWdodDogMTg1cHg7fVxuLm0tci0xODYge21hcmdpbi1yaWdodDogMTg2cHg7fVxuLm0tci0xODcge21hcmdpbi1yaWdodDogMTg3cHg7fVxuLm0tci0xODgge21hcmdpbi1yaWdodDogMTg4cHg7fVxuLm0tci0xODkge21hcmdpbi1yaWdodDogMTg5cHg7fVxuLm0tci0xOTAge21hcmdpbi1yaWdodDogMTkwcHg7fVxuLm0tci0xOTEge21hcmdpbi1yaWdodDogMTkxcHg7fVxuLm0tci0xOTIge21hcmdpbi1yaWdodDogMTkycHg7fVxuLm0tci0xOTMge21hcmdpbi1yaWdodDogMTkzcHg7fVxuLm0tci0xOTQge21hcmdpbi1yaWdodDogMTk0cHg7fVxuLm0tci0xOTUge21hcmdpbi1yaWdodDogMTk1cHg7fVxuLm0tci0xOTYge21hcmdpbi1yaWdodDogMTk2cHg7fVxuLm0tci0xOTcge21hcmdpbi1yaWdodDogMTk3cHg7fVxuLm0tci0xOTgge21hcmdpbi1yaWdodDogMTk4cHg7fVxuLm0tci0xOTkge21hcmdpbi1yaWdodDogMTk5cHg7fVxuLm0tci0yMDAge21hcmdpbi1yaWdodDogMjAwcHg7fVxuLm0tci0yMDEge21hcmdpbi1yaWdodDogMjAxcHg7fVxuLm0tci0yMDIge21hcmdpbi1yaWdodDogMjAycHg7fVxuLm0tci0yMDMge21hcmdpbi1yaWdodDogMjAzcHg7fVxuLm0tci0yMDQge21hcmdpbi1yaWdodDogMjA0cHg7fVxuLm0tci0yMDUge21hcmdpbi1yaWdodDogMjA1cHg7fVxuLm0tci0yMDYge21hcmdpbi1yaWdodDogMjA2cHg7fVxuLm0tci0yMDcge21hcmdpbi1yaWdodDogMjA3cHg7fVxuLm0tci0yMDgge21hcmdpbi1yaWdodDogMjA4cHg7fVxuLm0tci0yMDkge21hcmdpbi1yaWdodDogMjA5cHg7fVxuLm0tci0yMTAge21hcmdpbi1yaWdodDogMjEwcHg7fVxuLm0tci0yMTEge21hcmdpbi1yaWdodDogMjExcHg7fVxuLm0tci0yMTIge21hcmdpbi1yaWdodDogMjEycHg7fVxuLm0tci0yMTMge21hcmdpbi1yaWdodDogMjEzcHg7fVxuLm0tci0yMTQge21hcmdpbi1yaWdodDogMjE0cHg7fVxuLm0tci0yMTUge21hcmdpbi1yaWdodDogMjE1cHg7fVxuLm0tci0yMTYge21hcmdpbi1yaWdodDogMjE2cHg7fVxuLm0tci0yMTcge21hcmdpbi1yaWdodDogMjE3cHg7fVxuLm0tci0yMTgge21hcmdpbi1yaWdodDogMjE4cHg7fVxuLm0tci0yMTkge21hcmdpbi1yaWdodDogMjE5cHg7fVxuLm0tci0yMjAge21hcmdpbi1yaWdodDogMjIwcHg7fVxuLm0tci0yMjEge21hcmdpbi1yaWdodDogMjIxcHg7fVxuLm0tci0yMjIge21hcmdpbi1yaWdodDogMjIycHg7fVxuLm0tci0yMjMge21hcmdpbi1yaWdodDogMjIzcHg7fVxuLm0tci0yMjQge21hcmdpbi1yaWdodDogMjI0cHg7fVxuLm0tci0yMjUge21hcmdpbi1yaWdodDogMjI1cHg7fVxuLm0tci0yMjYge21hcmdpbi1yaWdodDogMjI2cHg7fVxuLm0tci0yMjcge21hcmdpbi1yaWdodDogMjI3cHg7fVxuLm0tci0yMjgge21hcmdpbi1yaWdodDogMjI4cHg7fVxuLm0tci0yMjkge21hcmdpbi1yaWdodDogMjI5cHg7fVxuLm0tci0yMzAge21hcmdpbi1yaWdodDogMjMwcHg7fVxuLm0tci0yMzEge21hcmdpbi1yaWdodDogMjMxcHg7fVxuLm0tci0yMzIge21hcmdpbi1yaWdodDogMjMycHg7fVxuLm0tci0yMzMge21hcmdpbi1yaWdodDogMjMzcHg7fVxuLm0tci0yMzQge21hcmdpbi1yaWdodDogMjM0cHg7fVxuLm0tci0yMzUge21hcmdpbi1yaWdodDogMjM1cHg7fVxuLm0tci0yMzYge21hcmdpbi1yaWdodDogMjM2cHg7fVxuLm0tci0yMzcge21hcmdpbi1yaWdodDogMjM3cHg7fVxuLm0tci0yMzgge21hcmdpbi1yaWdodDogMjM4cHg7fVxuLm0tci0yMzkge21hcmdpbi1yaWdodDogMjM5cHg7fVxuLm0tci0yNDAge21hcmdpbi1yaWdodDogMjQwcHg7fVxuLm0tci0yNDEge21hcmdpbi1yaWdodDogMjQxcHg7fVxuLm0tci0yNDIge21hcmdpbi1yaWdodDogMjQycHg7fVxuLm0tci0yNDMge21hcmdpbi1yaWdodDogMjQzcHg7fVxuLm0tci0yNDQge21hcmdpbi1yaWdodDogMjQ0cHg7fVxuLm0tci0yNDUge21hcmdpbi1yaWdodDogMjQ1cHg7fVxuLm0tci0yNDYge21hcmdpbi1yaWdodDogMjQ2cHg7fVxuLm0tci0yNDcge21hcmdpbi1yaWdodDogMjQ3cHg7fVxuLm0tci0yNDgge21hcmdpbi1yaWdodDogMjQ4cHg7fVxuLm0tci0yNDkge21hcmdpbi1yaWdodDogMjQ5cHg7fVxuLm0tci0yNTAge21hcmdpbi1yaWdodDogMjUwcHg7fVxuLm0tbC1yLWF1dG8ge21hcmdpbi1sZWZ0OiBhdXRvO1x0bWFyZ2luLXJpZ2h0OiBhdXRvO31cbi5tLWwtYXV0byB7bWFyZ2luLWxlZnQ6IGF1dG87fVxuLm0tci1hdXRvIHttYXJnaW4tcmlnaHQ6IGF1dG87fVxuXG5cblxuLypbIFRFWFQgXVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi50ZXh0LXdoaXRlIHtjb2xvcjogd2hpdGU7fVxuLnRleHQtYmxhY2sge2NvbG9yOiBibGFjazt9XG5cbi50ZXh0LWhvdi13aGl0ZTpob3ZlciB7Y29sb3I6IHdoaXRlO31cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4udGV4dC11cCB7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTt9XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLnRleHQtY2VudGVyIHt0ZXh0LWFsaWduOiBjZW50ZXI7fVxuLnRleHQtbGVmdCB7dGV4dC1hbGlnbjogbGVmdDt9XG4udGV4dC1yaWdodCB7dGV4dC1hbGlnbjogcmlnaHQ7fVxuLnRleHQtbWlkZGxlIHt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO31cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4ubGgtMS0wIHtsaW5lLWhlaWdodDogMS4wO31cbi5saC0xLTEge2xpbmUtaGVpZ2h0OiAxLjE7fVxuLmxoLTEtMiB7bGluZS1oZWlnaHQ6IDEuMjt9XG4ubGgtMS0zIHtsaW5lLWhlaWdodDogMS4zO31cbi5saC0xLTQge2xpbmUtaGVpZ2h0OiAxLjQ7fVxuLmxoLTEtNSB7bGluZS1oZWlnaHQ6IDEuNTt9XG4ubGgtMS02IHtsaW5lLWhlaWdodDogMS42O31cbi5saC0xLTcge2xpbmUtaGVpZ2h0OiAxLjc7fVxuLmxoLTEtOCB7bGluZS1oZWlnaHQ6IDEuODt9XG4ubGgtMS05IHtsaW5lLWhlaWdodDogMS45O31cbi5saC0yLTAge2xpbmUtaGVpZ2h0OiAyLjA7fVxuLmxoLTItMSB7bGluZS1oZWlnaHQ6IDIuMTt9XG4ubGgtMi0yIHtsaW5lLWhlaWdodDogMi4yO31cbi5saC0yLTMge2xpbmUtaGVpZ2h0OiAyLjM7fVxuLmxoLTItNCB7bGluZS1oZWlnaHQ6IDIuNDt9XG4ubGgtMi01IHtsaW5lLWhlaWdodDogMi41O31cbi5saC0yLTYge2xpbmUtaGVpZ2h0OiAyLjY7fVxuLmxoLTItNyB7bGluZS1oZWlnaHQ6IDIuNzt9XG4ubGgtMi04IHtsaW5lLWhlaWdodDogMi44O31cbi5saC0yLTkge2xpbmUtaGVpZ2h0OiAyLjk7fVxuXG5cblxuXG5cbi8qWyBTSEFQRSBdXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuKi9cblxuLypbIERpc3BsYXkgXVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4uZGlzLW5vbmUge2Rpc3BsYXk6IG5vbmU7fVxuLmRpcy1ibG9jayB7ZGlzcGxheTogYmxvY2s7fVxuLmRpcy1pbmxpbmUge2Rpc3BsYXk6IGlubGluZTt9XG4uZGlzLWlubGluZS1ibG9jayB7ZGlzcGxheTogaW5saW5lLWJsb2NrO31cbi5kaXMtZmxleCB7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdGRpc3BsYXk6IC1tb3otYm94O1xuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcblx0ZGlzcGxheTogZmxleDtcbn1cblxuLypbIFBvc2l0aW9uIF1cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuLnBvcy1yZWxhdGl2ZSB7cG9zaXRpb246IHJlbGF0aXZlO31cbi5wb3MtYWJzb2x1dGUge3Bvc2l0aW9uOiBhYnNvbHV0ZTt9XG4ucG9zLWZpeGVkIHtwb3NpdGlvbjogZml4ZWQ7fVxuXG4vKlsgZmxvYXQgXVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4uZmxvYXQtbCB7ZmxvYXQ6IGxlZnQ7fVxuLmZsb2F0LXIge2Zsb2F0OiByaWdodDt9XG5cblxuLypbIFdpZHRoICYgSGVpZ2h0IF1cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuLnNpemVmdWxsIHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcbn1cbi53LWZ1bGwge3dpZHRoOiAxMDAlO31cbi5oLWZ1bGwge2hlaWdodDogMTAwJTt9XG4ubWF4LXctZnVsbCB7bWF4LXdpZHRoOiAxMDAlO31cbi5tYXgtaC1mdWxsIHttYXgtaGVpZ2h0OiAxMDAlO31cbi5taW4tdy1mdWxsIHttaW4td2lkdGg6IDEwMCU7fVxuLm1pbi1oLWZ1bGwge21pbi1oZWlnaHQ6IDEwMCU7fVxuXG4vKlsgVG9wIEJvdHRvbSBMZWZ0IFJpZ2h0IF1cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuLnRvcC0wIHt0b3A6IDA7fVxuLmJvdHRvbS0wIHtib3R0b206IDA7fVxuLmxlZnQtMCB7bGVmdDogMDt9XG4ucmlnaHQtMCB7cmlnaHQ6IDA7fVxuXG4udG9wLWF1dG8ge3RvcDogYXV0bzt9XG4uYm90dG9tLWF1dG8ge2JvdHRvbTogYXV0bzt9XG4ubGVmdC1hdXRvIHtsZWZ0OiBhdXRvO31cbi5yaWdodC1hdXRvIHtyaWdodDogYXV0bzt9XG5cblxuLypbIE9wYWNpdHkgXVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4ub3AtMC0wIHtvcGFjaXR5OiAwO31cbi5vcC0wLTEge29wYWNpdHk6IDAuMTt9XG4ub3AtMC0yIHtvcGFjaXR5OiAwLjI7fVxuLm9wLTAtMyB7b3BhY2l0eTogMC4zO31cbi5vcC0wLTQge29wYWNpdHk6IDAuNDt9XG4ub3AtMC01IHtvcGFjaXR5OiAwLjU7fVxuLm9wLTAtNiB7b3BhY2l0eTogMC42O31cbi5vcC0wLTcge29wYWNpdHk6IDAuNzt9XG4ub3AtMC04IHtvcGFjaXR5OiAwLjg7fVxuLm9wLTAtOSB7b3BhY2l0eTogMC45O31cbi5vcC0xLTAge29wYWNpdHk6IDE7fVxuXG4vKlsgQmFja2dyb3VuZCBdXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbi5iZ3doaXRlIHtiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTt9XG4uYmdibGFjayB7YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7fVxuXG5cblxuLypbIFdyYXAgUGljdHVyZSBdXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbi53cmFwLXBpYy13IGltZyB7d2lkdGg6IDEwMCU7fVxuLndyYXAtcGljLW1heC13IGltZyB7bWF4LXdpZHRoOiAxMDAlO31cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4ud3JhcC1waWMtaCBpbWcge2hlaWdodDogMTAwJTt9XG4ud3JhcC1waWMtbWF4LWggaW1nIHttYXgtaGVpZ2h0OiAxMDAlO31cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4ud3JhcC1waWMtY2lyIHtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuLndyYXAtcGljLWNpciBpbWcge1xuXHR3aWR0aDogMTAwJTtcbn1cblxuXG5cbi8qWyBIb3ZlciBdXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbi5ob3YtcG9pbnRlcjpob3ZlciB7Y3Vyc29yOiBwb2ludGVyO31cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uaG92LWltZy16b29tIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG4uaG92LWltZy16b29tIGltZ3tcblx0d2lkdGg6IDEwMCU7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNnM7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNnM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC42cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42cztcbn1cbi5ob3YtaW1nLXpvb206aG92ZXIgaW1nIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIFx0LW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIFx0LW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgXHQtby10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG5cdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuXG5cbi8qWyAgXVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4uYm8tY2lyIHtib3JkZXItcmFkaXVzOiA1MCU7fVxuXG4ub2YtaGlkZGVuIHtvdmVyZmxvdzogaGlkZGVuO31cblxuLnZpc2libGUtZmFsc2Uge3Zpc2liaWxpdHk6IGhpZGRlbjt9XG4udmlzaWJsZS10cnVlIHt2aXNpYmlsaXR5OiB2aXNpYmxlO31cblxuXG5cblxuLypbIFRyYW5zaXRpb24gXVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4udHJhbnMtMC0xIHtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xcztcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4xcztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjFzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzO1xufVxuLnRyYW5zLTAtMiB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi50cmFucy0wLTMge1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4udHJhbnMtMC00IHtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuLnRyYW5zLTAtNSB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi50cmFucy0wLTYge1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjZzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjZzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNnM7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XG59XG4udHJhbnMtMC05IHtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC45cztcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC45cztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjlzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjlzO1xufVxuLnRyYW5zLTEtMCB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDFzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAxcztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAxcztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XG59XG5cblxuXG4vKlsgTGF5b3V0IF1cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4qL1xuXG4vKlsgRmxleCBdXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLmZsZXgtdyB7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdGRpc3BsYXk6IC1tb3otYm94O1xuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcblx0ZGlzcGxheTogZmxleDtcblx0LXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG5cdC1tb3otZmxleC13cmFwOiB3cmFwO1xuXHQtbXMtZmxleC13cmFwOiB3cmFwO1xuXHQtby1mbGV4LXdyYXA6IHdyYXA7XG5cdGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uZmxleC1sIHtcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcblx0ZGlzcGxheTogLW1vei1ib3g7XG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5mbGV4LXIge1xuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuXHRkaXNwbGF5OiAtbW96LWJveDtcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5mbGV4LWMge1xuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuXHRkaXNwbGF5OiAtbW96LWJveDtcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZmxleC1zYSB7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdGRpc3BsYXk6IC1tb3otYm94O1xuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5mbGV4LXNiIHtcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcblx0ZGlzcGxheTogLW1vei1ib3g7XG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLmZsZXgtdCB7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdGRpc3BsYXk6IC1tb3otYm94O1xuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcblx0ZGlzcGxheTogZmxleDtcblx0LW1zLWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmZsZXgtYiB7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdGRpc3BsYXk6IC1tb3otYm94O1xuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcblx0ZGlzcGxheTogZmxleDtcblx0LW1zLWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uZmxleC1tIHtcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcblx0ZGlzcGxheTogLW1vei1ib3g7XG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHQtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZsZXgtc3RyIHtcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcblx0ZGlzcGxheTogLW1vei1ib3g7XG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHQtbXMtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi5mbGV4LXJvdyB7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdGRpc3BsYXk6IC1tb3otYm94O1xuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcblx0ZGlzcGxheTogZmxleDtcblx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuXHQtbW96LWZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuXHQtby1mbGV4LWRpcmVjdGlvbjogcm93O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZmxleC1yb3ctcmV2IHtcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcblx0ZGlzcGxheTogLW1vei1ib3g7XG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcblx0LW1vei1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG5cdC1tcy1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG5cdC1vLWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcblx0ZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG4uZmxleC1jb2wge1xuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuXHRkaXNwbGF5OiAtbW96LWJveDtcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0LW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0LW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZsZXgtY29sLXJldiB7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdGRpc3BsYXk6IC1tb3otYm94O1xuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcblx0ZGlzcGxheTogZmxleDtcblx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cdC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuXHQtby1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uZmxleC1jLW0ge1xuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuXHRkaXNwbGF5OiAtbW96LWJveDtcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHQtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZsZXgtYy10IHtcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcblx0ZGlzcGxheTogLW1vei1ib3g7XG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0LW1zLWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmZsZXgtYy1iIHtcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcblx0ZGlzcGxheTogLW1vei1ib3g7XG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0LW1zLWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uZmxleC1jLXN0ciB7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdGRpc3BsYXk6IC1tb3otYm94O1xuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdC1tcy1hbGlnbi1pdGVtczogc3RyZXRjaDtcblx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbi5mbGV4LWwtbSB7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdGRpc3BsYXk6IC1tb3otYm94O1xuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHQtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZsZXgtci1tIHtcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcblx0ZGlzcGxheTogLW1vei1ib3g7XG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHQtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZsZXgtc2EtbSB7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdGRpc3BsYXk6IC1tb3otYm94O1xuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmxleC1zYi1tIHtcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcblx0ZGlzcGxheTogLW1vei1ib3g7XG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi5mbGV4LWNvbC1sIHtcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcblx0ZGlzcGxheTogLW1vei1ib3g7XG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdC1vLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdC1tcy1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5mbGV4LWNvbC1yIHtcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcblx0ZGlzcGxheTogLW1vei1ib3g7XG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdC1vLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdC1tcy1hbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLmZsZXgtY29sLWMge1xuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuXHRkaXNwbGF5OiAtbW96LWJveDtcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0LW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0LW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0LW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mbGV4LWNvbC1sLW0ge1xuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuXHRkaXNwbGF5OiAtbW96LWJveDtcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0LW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0LW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0LW1zLWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mbGV4LWNvbC1yLW0ge1xuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuXHRkaXNwbGF5OiAtbW96LWJveDtcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0LW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0LW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0LW1zLWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZsZXgtY29sLWMtbSB7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdGRpc3BsYXk6IC1tb3otYm94O1xuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcblx0ZGlzcGxheTogZmxleDtcblx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHQtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHQtby1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHQtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mbGV4LWNvbC1zdHIge1xuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuXHRkaXNwbGF5OiAtbW96LWJveDtcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0LW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0LW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0LW1zLWFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cblxuLmZsZXgtY29sLXNiIHtcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcblx0ZGlzcGxheTogLW1vei1ib3g7XG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdC1vLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uZmxleC1jb2wtcmV2LWwge1xuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuXHRkaXNwbGF5OiAtbW96LWJveDtcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuXHQtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblx0LW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cdC1tcy1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5mbGV4LWNvbC1yZXYtciB7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdGRpc3BsYXk6IC1tb3otYm94O1xuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcblx0ZGlzcGxheTogZmxleDtcblx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cdC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuXHQtby1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblx0LW1zLWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uZmxleC1jb2wtcmV2LWMge1xuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuXHRkaXNwbGF5OiAtbW96LWJveDtcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuXHQtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblx0LW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cdC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmxleC1jb2wtcmV2LXN0ciB7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdGRpc3BsYXk6IC1tb3otYm94O1xuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcblx0ZGlzcGxheTogZmxleDtcblx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cdC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuXHQtby1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblx0LW1zLWFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cblxuXG4vKlsgQWJzb2x1dGUgXVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4uYWItYy1tIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDUwJTtcblx0bGVmdDogNTAlO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBcdC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIFx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBcdC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmFiLWMtdCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwcHg7XG5cdGxlZnQ6IDUwJTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIFx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIFx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgXHQtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLmFiLWMtYiB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAwcHg7XG5cdGxlZnQ6IDUwJTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIFx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIFx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgXHQtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLmFiLWwtbSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogMHB4O1xuXHR0b3A6IDUwJTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIFx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIFx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgXHQtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmFiLXItbSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cmlnaHQ6IDBweDtcblx0dG9wOiA1MCU7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBcdC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIFx0LW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5hYi10LWwge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDBweDtcblx0dG9wOiAwcHg7XG59XG5cbi5hYi10LXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHJpZ2h0OiAwcHg7XG5cdHRvcDogMHB4O1xufVxuXG4uYWItYi1sIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwcHg7XG5cdGJvdHRvbTogMHB4O1xufVxuXG4uYWItYi1yIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRyaWdodDogMHB4O1xuXHRib3R0b206IDBweDtcbn1cblxuXG5cblxuXG5cblxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css', './util.css']
            }]
    }], function () { return [{ type: angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["SocialAuthService"] }, { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }]; }, { sendLoginData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map