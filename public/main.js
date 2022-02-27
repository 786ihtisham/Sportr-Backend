(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DELL PC\WebstormProjects\Chrome-Extension\src\main.ts */"zUnb");


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
        this.dMode = false;
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
            if (!this.dMode) {
                appBody.classList.add('darkmode');
            }
            else {
                appBody.classList.remove('darkmode');
            }
            this.dMode = !this.dMode;
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
    } }, inputs: { loginData: "loginData" }, outputs: { loginManage: "loginManage", favoriteArticle: "favoriteArticle", newsApi: "newsApi" }, decls: 193, vars: 4, consts: [["id", "sidebar", 1, "sidebar"], [1, "sidebar_content"], [1, "spaces-bar"], [1, "spaces-bar-content"], [1, "sidebar-top"], [1, "toolnew"], ["id", "home", "flow", "right", "tooltip", "Home", 1, "sidebar_link"], ["data-tab", "tab-1", "href", "#tab1", 3, "click"], [1, "sidebar_content_col"], [1, "sidebar_content_col_inner", "sidebar_content_col_inner_1"], ["src", "assets/images/logoill.png", "alt", "", 1, "logo"], ["id", "#", "onclick", "menu()", 1, "group_list_style"], ["data-tab", "tab-1", "href", "#tab1", "flow", "right", "tooltip", "Feed", 1, "sidebar_link"], [1, "material-icons"], [1, "sidebar-body"], ["id", "SaveArticle", 1, "group_list_style"], ["data-tab", "tab-1", "href", "#tab1", "flow", "right", "tooltip", "Saved Items", 1, "sidebar_link", 3, "click"], [1, "position-relative", "group_list_style"], ["data-tab", "tab", "href", "#tab15", "onclick", "Notificationopen()", "flow", "right", "tooltip", "Notifications", 1, "sidebar_link"], ["id", "dark-mode-toggle", 1, "dark-mode-toggle", "group_list_style"], ["data-tab", "#", "href", "#tab1", "onclick", "myFunction();", "flow", "right", "tooltip", "Switch lighting Mode", 1, "sidebar_link"], [1, "material-icons-outlined", 3, "click"], [1, "sidebar-bottom"], ["data-tab", "tab", "href", "#tab13", "flow", "right", "tooltip", "Profile", "onclick", "Settingsopen()", 1, "sidebar_link"], ["href", "#", 1, "btn-custom", "profile", "align"], [3, "src"], ["id", "Notification", 1, "Notification_sidebar"], [1, "Notification_content"], [1, "noti-title"], [1, "float-right"], ["href", "javascript: void(0);"], [1, "scrolllist"], [1, "notify-item"], [1, "notify-icon", "bg-primary"], [1, "notify-details"], [1, "msg-time"], ["ng-if", "notification.cta", "ng-click", "logNotificationCta(notification, $event)", 1, "cta"], ["href", "", "ng-click", "::shareAfterLogin('twitter')", 1, "twitter"], ["href", "", "ng-click", "::shareAfterLogin('facebook')", 1, "facebook"], [1, "notify-icon"], ["src", "assets/images/profilenoti.png", "alt", "", 1, "img-fluid", "rounded-circle"], [1, "user-msg"], [1, "d", "notify-item"], [1, "notify-icon", "bg-info"], ["src", "https://yt3.ggpht.com/ytc/AAUvwngHSD7Xxh5h1yH1RAJfpTIHujIEYI3eyncOB5fwyA=s88-c-k-c0x00ffffff-no-rj", "alt", "", 1, "img-fluid", "rounded-circle"], ["href", "javascript:void(0);", 1, "text-center", "notify-item", "notify-all"], ["id", "Settings", 1, "settings_sidebar"], [1, "Settingsmenu_content"], [1, "menu-section-body"], [1, "sidebartiltle"], [1, "group-settings"], [1, "rowinfo", "checkboxrow"], [1, "icon"], ["src", "assets/images/fullload.png", "alt", "", 1, "img-responsive"], ["type", "checkbox", 1, "settingtoggle"], ["src", "assets/images/mostvisited.png", "alt", "", 1, "img-responsive"], ["onclick", "openNew()", 1, "position-relative", "group_list_style"], ["data-tab", "ta", "href", "#b1", 1, "linkhover"], [1, "rowinfo"], [1, "align"], ["src", "assets/images/Explore.png", 1, "img-responsive"], ["src", "assets/images/arrow.png", 1, "arrowright"], ["src", "assets/images/Doante.png", 1, "img-responsive"], ["src", "assets/images/Plusinvite.png", 1, "img-responsive"], ["src", "assets/images/arrow.png", "alt", "", 1, "arrowright"], ["src", "assets/images/feedback.png", 1, "img-responsive"], ["data-tab", "ta", "onclick", "subitweb()", 1, "linkhover"], ["src", "assets/images/Suggest.png", 1, "img-responsive"], [1, "group-settings", "links"], ["href", "http://www.Sportr.io/about/bug"], ["href", "https://www.Sportr.io/privacy"], ["href", "https://www.Sportr.io/terms"], [1, "menu-section-footer", "userinfo"], ["alt", "", 1, "profilesettings", 3, "src"], [1, "logout", "hoverbutton", 3, "click"]], template: function SideBarComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h4", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 50);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h4", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "What's new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h4", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "How you can halp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Doante");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Invite friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Give us feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Suggest a link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "h4", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Report a bug");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Terms of Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideBarComponent_Template_button_click_191_listener() { return ctx.signOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.loginData.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.loginData.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.loginData.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("via ", ctx.loginData.provider, "");
    } }, styles: [".profile-setting-close[_ngcontent-%COMP%]{\r\n  width: 17px;\r\n  float: right;\r\n  margin-top: -17px;\r\n  margin-right: 11px;\r\n}\r\n\r\n.settings_sidebar[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n}\r\n\r\n.iframe[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 2%;\r\n  right: 0%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLXNldHRpbmctY2xvc2V7XHJcbiAgd2lkdGg6IDE3cHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gIG1hcmdpbi1yaWdodDogMTFweDtcclxufVxyXG5cclxuLnNldHRpbmdzX3NpZGViYXJ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5pZnJhbWV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMiU7XHJcbiAgcmlnaHQ6IDAlO1xyXG59XHJcblxyXG4iXX0= */"] });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_180_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const topsite_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.removeTopSites(topsite_r6._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topsite_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://www.google.com/s2/favicons?domain=", topsite_r6.url, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://www.google.com/s2/favicons?domain=", topsite_r9.url, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
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
    } }, decls: 200, vars: 17, consts: [[1, "header", "top-nav"], [1, "inner-content", 2, "z-index", "1"], [1, "pull-left", "nav-icon"], [1, "googleapps_icon"], ["flow", "down", "tooltip", "Google Apps", 1, "btn", "btn-custom", "GoogleApps", "align", 3, "click"], ["src", "assets/images/googleappsoff.svg", "alt", "googleappsoff"], ["id", "clickImage", "src", "assets/images/googleappson.svg", "alt", "googleappson", 1, "img-top"], [1, "search-container"], ["id", "searchForm", 1, "ng-pristine", "ng-valid", "ng-valid-maxlength", 3, "ngSubmit"], [1, "input"], [1, "material-icons"], ["maxlength", "50", "type", "text", "placeholder", "Search Google", "tabindex", "2", "lookahead", "", "autocomplete", "off", 1, "searchBar"], ["google", ""], [1, "pull-right", "top-logo"], [1, "socials-icon"], ["flow", "down", "tooltip", "Add shortcuts"], [3, "click"], ["width", "11", "height", "10", "viewBox", "0 0 11 10", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "transparent-background"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.16379 0.353027H4.83615V4.33573L0.853149 4.33573L0.853149 5.66337H4.83615V9.6465H6.16379V5.66337H10.1466V4.33573L6.16379 4.33573V0.353027Z", "fill", "#202124"], ["data-toggle", "tooltip", "flow", "down", 4, "ngFor", "ngForOf"], ["id", "googleapps", 1, "sidebar_google", 3, "ngClass"], [1, "sidebar_google_content"], [1, "GoogleAppsList"], ["id", "googleUl"], [1, "ligoogle"], ["href", "https://myaccount.google.com", "target", "_blank", 1, "sidebar_applink"], [1, "dsds"], ["src", "assets/images/Googleapps/Account.png"], [1, "sada"], ["href", "https://www.google.com", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Search.png"], ["href", "https://drive.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/drive.png"], ["href", "https://mail.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/gmail.png"], ["href", "https://calendar.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Calender.png"], ["href", "https://maps.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Maps.png"], ["href", "https://Translate.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Translate.png"], ["href", "https://www.youtube.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Youtube.png"], ["href", "https://Earth.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Earth.png"], ["href", "https://Photos.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Photos.png"], ["jsname", "hgDUwe", 1, "dGrefb"], ["href", "https://sheets.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/sheets.png"], ["href", "https://docs.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/docs.png"], ["href", "https://Slides.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Slides.png"], ["href", "https://Blogger.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Blogger.png"], ["href", "https://Hangout.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Hangout.png"], ["href", "https://Mybusiness.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/My business.png"], ["href", "https://classroom.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/classroom.png"], ["href", "https://Keep.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Keep.png"], ["href", "https://Jamboard.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Jamboard.png"], ["href", "https://www.google.co.il/save", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Collections.png"], ["href", "https://artsandculture.google.com/", "target", "_blank", 1, "sidebar_applink"], ["src", "assets/images/Googleapps/Arts and culture.png"], ["id", "bookmark_modal_1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", "aria-hidden", "true", 1, "fade", "book_modal_block", 3, "ngClass"], [1, "sourceForm", "bookmark-modal", "new-source"], ["id", "bookmark_modalCustome", 1, "modal__background"], [1, "modal__container", "shadow2"], [1, "btn-icon", "modal__close-btn", 3, "click"], ["version", "1.1", "viewBox", "0 0 24 24", 1, "svg-icon", "svg-fill"], ["pid", "0", "d", "M12 9.44l3.91-3.91a1.81 1.81 0 012.56 2.56L14.56 12l3.91 3.91a1.81 1.81 0 01-2.56 2.56L12 14.56l-3.91 3.91a1.81 1.81 0 11-2.56-2.56L9.44 12 5.53 8.09a1.81 1.81 0 112.56-2.56L12 9.44z", "_fill", "#FFF", "fill-rule", "evenodd"], [1, "new-source__header"], [2, "color", "red", 3, "ngClass"], [1, "text-field"], [1, "text-field__box", "field", "active", 3, "ngClass"], [1, "text-field__input-container"], [1, "text-field__label", "micro2", 2, "display", "none"], ["required", "required", "type", "url", "name", "url", "placeholder", "Please Enter Https Url", "aria-label", "Source url", "autofocus", "autofocus", 1, "text-field__input", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "text-field__right-slot", "btn", "btn-invert", 3, "click"], [1, "text-field__hint", "micsro2"], [1, "topsites-container"], [1, "new-source__footer", "no-padding"], ["class", "radio", 4, "ngFor", "ngForOf"], [1, "btn", "btn-big", "btn-invert", "new-source__confirm"], ["id", "quickAccess", 1, "navbar-custom"], [1, "ng-pristine", "ng-valid", "ng-valid-maxlength", 3, "ngSubmit"], ["search", ""], [1, "social_drop_min"], [1, "social_header"], [1, "social_icon"], ["flow", "down", "tooltip", "Add shortcuts", 1, "social-icons-custom"], ["width", "20", "height", "20", "viewBox", "0 0 11 10", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "transparent-background"], ["class", "btn btn-custom social-icons-custom", "data-toggle", "tooltip", 4, "ngFor", "ngForOf"], ["data-toggle", "tooltip", "flow", "down"], [3, "href"], [1, "transparent-background", 3, "src"], [1, "radio"], [1, "radio-item"], [3, "src"], [1, "webAddress", "websiteLink"], [1, "btn-icon", "modal__close-btn", "chromeTopSitesCrossButton", 3, "click"], ["data-toggle", "tooltip", 1, "btn", "btn-custom", "social-icons-custom"], [1, "", 3, "src"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_4_listener() { return ctx.manageGoogleBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NavBarComponent_Template_form_ngSubmit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return ctx.openGoogle(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](180, NavBarComponent_div_180_Template, 8, 2, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "button", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "section", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "form", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NavBarComponent_Template_form_ngSubmit_185_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](190); return ctx.openGoogle(_r3.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "input", 11, 92);
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".chromeTopSitesCrossButton[_ngcontent-%COMP%]{\r\n  height: 21px;\r\n  width: 43px;\r\n  overflow: hidden;\r\n  border: none;\r\n  margin-top: -8px\r\n}\r\n.websiteLink[_ngcontent-%COMP%]{\r\n  margin-right: 65px;\r\n}\r\n.topsites-container[_ngcontent-%COMP%]{\r\n  height: 330px;\r\n  width: 500px;\r\n}\r\n.transparent-background[_ngcontent-%COMP%]{\r\n  background-color: transparent;\r\n}\r\n.d-block[_ngcontent-%COMP%]{\r\n  display: block ;\r\n}\r\n.red-border[_ngcontent-%COMP%]  {\r\n border: 2px solid red;\r\n}\r\n.display-none[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.navbar-custom[_ngcontent-%COMP%]{\r\n  width: 83% !important;\r\n  position: relative !important;\r\n  top: 136px;\r\n  margin: auto;\r\n  z-index: 5;\r\n}\r\n.custom-sties[_ngcontent-%COMP%]{\r\n  width: 84% !important;\r\n  margin: auto;\r\n  position: relative !important;\r\n  top: 97px\r\n}\r\n.social-icons-custom[_ngcontent-%COMP%]{\r\n  background: white;\r\n  border-radius: 16px;\r\n  padding: 5px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1o7QUFDRjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtDQUNDLHFCQUFxQjtBQUN0QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixZQUFZO0VBQ1osVUFBVTtBQUNaO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QjtBQUNGO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaHJvbWVUb3BTaXRlc0Nyb3NzQnV0dG9ue1xyXG4gIGhlaWdodDogMjFweDtcclxuICB3aWR0aDogNDNweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW4tdG9wOiAtOHB4XHJcbn1cclxuLndlYnNpdGVMaW5re1xyXG4gIG1hcmdpbi1yaWdodDogNjVweDtcclxufVxyXG4udG9wc2l0ZXMtY29udGFpbmVye1xyXG4gIGhlaWdodDogMzMwcHg7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG59XHJcbi50cmFuc3BhcmVudC1iYWNrZ3JvdW5ke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5kLWJsb2Nre1xyXG4gIGRpc3BsYXk6IGJsb2NrIDtcclxufVxyXG4ucmVkLWJvcmRlciAge1xyXG4gYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG59XHJcbi5kaXNwbGF5LW5vbmV7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubmF2YmFyLWN1c3RvbXtcclxuICB3aWR0aDogODMlICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAxMzZweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgei1pbmRleDogNTtcclxufVxyXG4uY3VzdG9tLXN0aWVze1xyXG4gIHdpZHRoOiA4NCUgIWltcG9ydGFudDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiA5N3B4XHJcbn1cclxuLnNvY2lhbC1pY29ucy1jdXN0b217XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBwYWRkaW5nOiA1cHhcclxufVxyXG4iXX0= */"] });
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
        // baseUrl:String = "http://localhost:8000/api";
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sports-ads");
} }
function AppComponent_div_1_app_favorite_article_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-favorite-article");
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-side-bar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loginManage", function AppComponent_div_1_Template_app_side_bar_loginManage_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.loginManage($event); })("favoriteArticle", function AppComponent_div_1_Template_app_side_bar_favoriteArticle_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.favoriteArticle($event); })("newsApi", function AppComponent_div_1_Template_app_side_bar_newsApi_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.newsApiManage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-nav-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_1_app_sports_ads_3_Template, 1, 0, "app-sports-ads", 1);
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
        this.scrollEffect = true;
        this.fFilter = false;
        this.sendLoginData = (data) => {
            this.loginData = data;
            this.isLogin = true;
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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [[3, "sendLoginData", 4, "ngIf"], [4, "ngIf"], [3, "sendLoginData"], [3, "loginData", "loginManage", "favoriteArticle", "newsApi"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_login_0_Template, 1, 0, "app-login", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 5, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogin);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_4__["SideBarComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"], _sports_ads_sports_ads_component__WEBPACK_IMPORTED_MODULE_6__["SportsAdsComponent"], _favorite_article_favorite_article_component__WEBPACK_IMPORTED_MODULE_7__["FavoriteArticleComponent"]], styles: [".side-bar[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n.headline-row[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  display: inline-block;\r\n}\r\n.update-design[_ngcontent-%COMP%]{\r\n  width: 80%;\r\n  margin-left: 237px;\r\n}\r\n.display-none[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGUtYmFyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmhlYWRsaW5lLXJvd3tcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnVwZGF0ZS1kZXNpZ257XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW4tbGVmdDogMjM3cHg7XHJcbn1cclxuLmRpc3BsYXktbm9uZXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4iXX0= */"] });
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
function FavoriteArticleComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoriteArticleComponent_div_7_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const article_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.addVisitor(article_r1._id, article_r1.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoriteArticleComponent_div_7_Template_img_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const article_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.applySourceFilter(article_r1.source); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoriteArticleComponent_div_7_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const article_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.addUpvote(article_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoriteArticleComponent_div_7_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const article_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.hideArticle(article_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Hide post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoriteArticleComponent_div_7_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const article_r1 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.hideArticle(article_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Broken link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoriteArticleComponent_div_7_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const article_r1 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.hideArticle(article_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Report NSFW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoriteArticleComponent_div_7_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const article_r1 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.removeFavorite(article_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Remove Favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "i", 31);
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
        this.removeFavorite = (articleId) => {
            let a = [];
            for (let i = 0; i < this.articles.length; i++) {
                if (articleId != this.articles[i]._id)
                    a.push(this.articles[i]);
            }
            this.articles = [];
            this.articles = a;
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
FavoriteArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavoriteArticleComponent, selectors: [["app-favorite-article"]], decls: 8, vars: 5, consts: [[1, "iframe-mainContainer", 3, "ngClass"], [1, "closeButton", 3, "click"], ["src", "assets/images/cross.png", "width", "20px"], [1, ""], ["id", "iframVideo1", "width", "500", "height", "300", "frameborder", "0", "allowfullscreen", "", 1, "embed-responsive-item", 3, "src"], [1, "small_desk"], ["class", "margin-top", 4, "ngFor", "ngForOf"], [1, "margin-top"], [1, "tile-post"], [1, "hover-options"], ["ng-click", "::openSharer($event, 'share', item)", "flow", "left", "tooltip", "Share", 1, "Share-icon"], [1, "post-link", 3, "click"], [1, "post-photo", "video-photo"], [1, "source-logo"], [1, "image-source", 3, "src", "click"], [3, "ngClass"], [1, "image_url", 3, "src"], [1, "postInfo", "videoinfo"], [1, "title"], [1, "created"], [1, "post-meta"], [1, "left-pull"], ["flow", "up", "tooltip", "Upvote", 1, "btn", "btn-menu", "upvote", 3, "click"], ["version", "1.1", "viewBox", "0 0 24 24", 1, "svg-icon", "svg-fill"], ["pid", "0", "d", "M13.162 3.813a2 2 0 01.465.465l6.674 9.343a1 1 0 01-1.102 1.539l-4.032-1.21a1 1 0 00-1.277.816l-.767 5.375a1 1 0 01-.99.859h-.266a1 1 0 01-.99-.859l-.767-5.375a1 1 0 00-1.278-.816l-4.031 1.21a1 1 0 01-1.102-1.54l6.674-9.342a2 2 0 012.79-.465z", "_fill", "#fff", "fill-rule", "evenodd"], [1, "btn-group", "dropup", "btn-g-height"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle", "btn-g-height"], ["tooltip", "More options", "flow", "up", 1, "material-icons", "icon-menu"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "more-open", 3, "id"], [1, "dropdown-item", 3, "click"], ["flow", "up", "tooltip", "View", "ng-if", "::item.clicks > 0", 1, "click-count"], [1, "material-icons"]], template: function FavoriteArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoriteArticleComponent_Template_button_click_1_listener() { return ctx.closeIframe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "iframe", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FavoriteArticleComponent_div_7_Template, 41, 12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx.activeIframe));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.youtubeVideo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".small_desk[_ngcontent-%COMP%]{\r\n  width: 75%;\r\n  margin-left:  216px;\r\n}\r\n.margin-top[_ngcontent-%COMP%]{\r\n  margin-top: 98px;\r\n}\r\n.btn-g-height[_ngcontent-%COMP%]{\r\n  width: 31px;\r\n  height: 24px\r\n}\r\n.display-none[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.iframe-mainContainer[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  right: 1%;\r\n  bottom: 10%;\r\n  z-index: 20\r\n}\r\n.closeButton[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  right: 1%;\r\n  background-color: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  z-index: 74;\r\n  margin-top: -26px;\r\n  border-radius: 4px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGUtYXJ0aWNsZS9mYXZvcml0ZS1hcnRpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7RUFDWDtBQUNGO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYO0FBQ0Y7QUFDQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9mYXZvcml0ZS1hcnRpY2xlL2Zhdm9yaXRlLWFydGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbWFsbF9kZXNre1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luLWxlZnQ6ICAyMTZweDtcclxufVxyXG4ubWFyZ2luLXRvcHtcclxuICBtYXJnaW4tdG9wOiA5OHB4O1xyXG59XHJcblxyXG4uYnRuLWctaGVpZ2h0e1xyXG4gIHdpZHRoOiAzMXB4O1xyXG4gIGhlaWdodDogMjRweFxyXG59XHJcbi5kaXNwbGF5LW5vbmV7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uaWZyYW1lLW1haW5Db250YWluZXJ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAxJTtcclxuICBib3R0b206IDEwJTtcclxuICB6LWluZGV4OiAyMFxyXG59XHJcbi5jbG9zZUJ1dHRvbntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDElO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgei1pbmRleDogNzQ7XHJcbiAgbWFyZ2luLXRvcDogLTI2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4iXX0= */"] });
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






function SportsAdsComponent_li_298_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_li_298_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const article_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.applySourceFilter(article_r4.source); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r4.source);
} }
const _c0 = function (a0) { return { "player-image": a0 }; };
const _c1 = function (a0) { return { "videoinfo": a0 }; };
function SportsAdsComponent_div_325_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_325_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const article_r8 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.addFavoriteArticle(article_r8._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_325_Template_img_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const article_r8 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.applySourceFilter1(article_r8.source); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_325_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const article_r8 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.addVisitor(article_r8._id, article_r8.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_325_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const article_r8 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.addUpvote(article_r8._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_325_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const article_r8 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.hideArticle(article_r8._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Hide post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_325_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const article_r8 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.hideArticle(article_r8._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Broken link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_div_325_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const article_r8 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.hideArticle(article_r8._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Report NSFW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://www.google.com/s2/favicons?domain=", article_r8.link, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, article_r8.playerVideo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", article_r8.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, article_r8.playerVideo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 9, article_r8.published_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r8.upvote);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r8.visitor);
} }
function SportsAdsComponent_li_393_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_li_393_Template_i_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const s_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.userCrossSource(s_r18.source); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r18 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://www.google.com/s2/favicons?domain=", ctx_r2.getValue(s_r18.source), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r18.source);
} }
function SportsAdsComponent_li_399_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_li_399_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const s_r21 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.applySourceFilter(s_r21.source); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r21 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://www.google.com/s2/favicons?domain=", ctx_r3.getValue(s_r21.source), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r21.source);
} }
const _c2 = function (a0) { return { "display-none": a0 }; };
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
        this.activate = false;
        this.filter = false;
        this.loadedAll = true;
        this.activeIframe = true;
        this.getArticle = () => {
            this.articleService.getArticles(localStorage.getItem("userId")).subscribe(data => {
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
                    if (data.data.length < 30) {
                        this.loadedAll = true;
                    }
                    else {
                        this.loadedAll = false;
                    }
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
        this.addFavoriteArticle = (id) => {
            this.articleService.addFavoriteArticle(id, localStorage.getItem("userId"));
            document.getElementById('successContainer').classList.remove('display-none');
            setTimeout(function () {
                document.getElementById('successContainer').classList.add('display-none');
            }, 3000);
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
        if ((window.innerHeight + window.scrollY + 50) >= document.body.offsetHeight) {
            if (!this.loadedAll) {
                if (this.articles.length > 0) {
                    document.getElementById("loadingIcons").classList.remove('display-none');
                    setTimeout(function () {
                        document.getElementById("loadingIcons").classList.add('display-none');
                    }, 600);
                    this.articleService.paginatePage();
                    if (this.getArticlesFlag)
                        this.getArticle();
                    if (this.getUpvoteFlag)
                        this.getUpvoteArticles();
                    if (this.getViewedFlag)
                        this.getViewedArticles();
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
SportsAdsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SportsAdsComponent, selectors: [["app-sports-ads"]], inputs: { favoriteArticle: "favoriteArticle", newsApi: "newsApi" }, decls: 402, vars: 72, consts: [["id", "successContainer", 1, "success-container", "display-none"], [1, "iframe-mainContainer", 3, "ngClass"], [1, "closeButton", 3, "click"], ["src", "assets/images/cross.png", "width", "20px"], [1, ""], ["id", "iframVideo", "width", "500", "height", "300", "frameborder", "0", "allowfullscreen", "", 1, "embed-responsive-item", 3, "src"], [1, "manager2_container"], [1, "manager2_container-inner"], [1, "cu-dashboard"], [1, "seemore-scroll"], ["id", "see_more", 1, "see_more", 3, "click"], ["id", "featured-feed-menu", 1, "dashboard_body"], [1, "home-title"], [1, "mostVisitedContainer"], [1, "aboveTheFold", 3, "ngClass"], [1, "article"], [1, "tile-post"], [1, "hover-options"], ["flow", "left", "tooltip", "Share", 1, "Share-icon"], [1, "post-link", 3, "click"], [1, "post-photo"], [1, "hot-article-badge"], ["src", "assets/images/very-hot.svg", 1, "image-source"], [3, "ngClass"], [1, "image_url", "footer-pan", 3, "src"], [1, "postInfo"], [1, "title"], ["ng-bind", "::item.source.title", 1, "source"], [1, "post-meta"], [1, "left-pull"], ["tooltip", "Save item", 1, "book-save", "btn", "btn-custom", "transparent"], ["aria-hidden", "true", 1, "fa", "fa-bookmark", 3, "click"], [1, "btn-group", "dropup", "btn-g-height"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["tooltip", "More options", "flow", "up", 1, "material-icons", "icon-menu"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], ["tooltip", "View", "flow", "up", "ng-if", "::item.clicks > 0", 1, "click-count"], [1, "material-icons"], ["flow", "left", "title", "", "tooltip", "Share", 1, "Share-icon"], ["data-custom-class", "tooltip-primary", "title", "", "tooltip", "Save item", 1, "book-save", "btn", "btn-custom", "transparent"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "more-open"], ["flow", "left", "tooltip", "Save item", 1, "book-save", "btn", "btn-custom", "transparent"], ["tooltip", "More options", "flow", "up", "flow", "up", 1, "material-icons", "icon-menu"], ["id", "feed-menu", 1, "dashboard_body", "content-tab"], [1, "headline"], [1, "headline-row", 3, "ngClass"], [1, "SearchResultsHeadings__ResultCountText"], [1, "right-pull"], [1, "sortBy"], [1, "filterCustomParagraph"], ["tabindex", "0", 1, "nice-select", "custom-t", "right", "filtersCustom"], [1, "current"], [1, "list"], [1, "option", 3, "click"], ["onclick", "openfilter()", "href", "#", 1, "filter-btn", "outlined", "filters-toggle-btn"], ["src", "assets/images/filtertr.png"], ["title", "Filters", 1, "label"], ["id", "filter", 1, "display-filter", 3, "ngClass"], [1, "filter"], [1, "select-box"], ["tabindex", "0", 1, "nice-select", "custom-t", "right"], [1, "option", "selected", 3, "click"], ["class", "option", 3, "click", 4, "ngFor", "ngForOf"], [1, "mb-5", 3, "ngClass"], [3, "src"], [1, "displayInline"], [1, "backButton"], ["src", "assets/images/back.png", 1, "backImage"], [3, "click"], ["id", "small_desk", 1, "small_desk"], [4, "ngFor", "ngForOf"], ["id", "videoplay", 1, "step-welcome"], [1, "video-overlay"], [1, "video-container"], ["src", "images/y2mate.com - Muzli 2_dYSIZ13yS64_1080p copy 2.mp4", "loop", "", "controls", "", 1, "video-screen"], ["tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", "onclick", "closevideo()", "aria-hidden", "true", 1, "background-popup"], ["id", "bookmark_modal_1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", "aria-hidden", "true", 1, "modal", "fade", "book_modal_block"], ["open", "", 1, "sourceForm", "bookmark-modal", "new-source"], [1, "modal__background"], [1, "modal__container", "shadow2"], ["data-dismiss", "modal", 1, "btn-icon", "modal__close-btn"], ["version", "1.1", "viewBox", "0 0 24 24", 1, "svg-icon", "svg-fill"], ["pid", "0", "d", "M12 9.44l3.91-3.91a1.81 1.81 0 012.56 2.56L14.56 12l3.91 3.91a1.81 1.81 0 01-2.56 2.56L12 14.56l-3.91 3.91a1.81 1.81 0 11-2.56-2.56L9.44 12 5.53 8.09a1.81 1.81 0 112.56-2.56L12 9.44z", "_fill", "#FFF", "fill-rule", "evenodd"], [1, "new-source__header"], [1, "text-field"], [1, "text-field__box", "field", "active"], [1, "text-field__input-container"], [1, "text-field__label", "micro2", 2, "display", "none"], ["required", "required", "type", "url", "placeholder", "Paste url", "aria-label", "Source url", "autofocus", "autofocus", 1, "text-field__input"], ["type", "submit", 1, "text-field__right-slot", "btn", "btn-invert"], [1, "text-field__hint", "micro2"], [1, "new-source__footer", "no-padding"], [1, "radio"], [1, "radio-item"], ["src", "images/Whatapp.png"], [1, "webAddress"], ["src", "images/Amazon seller.png"], ["src", "images/Facebook.png"], ["src", "images/Amazon.png"], ["src", "images/gmail.png"], ["src", "images/Shopify.png"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], [1, "btn", "btn-big", "btn-invert", "new-source__confirm"], ["id", "feed", 1, "feed_sidebar"], [1, "Settingsmenu_content", "feedmenu_content"], [1, "fevoriteSources"], [1, "titleRow"], [1, "sidebartiltle"], [1, "sourceNumber"], ["class", "position-relative group_list selector", "tooltip", "View source", 4, "ngFor", "ngForOf"], [1, "line-break"], [1, "moreSources"], ["id", "loadingIcons", 1, "loadingIcons", "display-none"], ["src", "https://i.gifer.com/ZZ5H.gif", 1, "loadingIconsImage"], ["flow", "left", "tooltip", "Save for later", 1, "Bookmark-icon", 3, "click"], ["ng-click", "::openSharer($event, 'share', item)", "flow", "left", "tooltip", "Share", 1, "Share-icon"], ["tooltip", "Source", "flow", "up", 1, "source-logo"], [1, "image-source", 3, "src", "click"], ["target", "_blank", 1, "post-link", 3, "click"], [1, "post-photo", "video-photo"], [1, "image_url", 3, "src"], [1, "postInfo", 3, "ngClass"], [1, "created"], ["tooltip", "Upvote", 1, "btn", "btn-menu", "upvote", 3, "click"], ["pid", "0", "d", "M13.162 3.813a2 2 0 01.465.465l6.674 9.343a1 1 0 01-1.102 1.539l-4.032-1.21a1 1 0 00-1.277.816l-.767 5.375a1 1 0 01-.99.859h-.266a1 1 0 01-.99-.859l-.767-5.375a1 1 0 00-1.278-.816l-4.031 1.21a1 1 0 01-1.102-1.54l6.674-9.342a2 2 0 012.79-.465z", "_fill", "#fff", "fill-rule", "evenodd"], [1, "btn-group", "dropup"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle", "btn-g-height"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "more-open", 3, "id"], [1, "dropdown-item", 3, "click"], ["tooltip", "View source", 1, "position-relative", "group_list", "selector"], ["data-tab", "ta", "href", "#b1", 1, "linkhover"], [1, "rowinfo"], [1, "align"], [1, "material-icons", "remove", 3, "click"], ["data-tab", "ta", 1, "linkhover", 3, "click"], ["alt", "", 1, "fevorite-image", "website", 3, "src"]], template: function SportsAdsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Article Save for later Succussfully.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_button_click_4_listener() { return ctx.closeIframe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "iframe", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_a_click_12_listener() { return ctx.showSeeMore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "See more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_a_click_22_listener() { return ctx.addVisitor(ctx.bannerArticles[0]._id, ctx.bannerArticles[0].link); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_i_click_36_listener() { return ctx.addFavoriteArticle(ctx.bannerArticles[0]._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "more_horiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Hide post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Broken link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Report NSFW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_a_click_57_listener() { return ctx.addVisitor(ctx.bannerArticles[1]._id, ctx.bannerArticles[1].link); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_i_click_71_listener() { return ctx.addFavoriteArticle(ctx.bannerArticles[1]._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "more_horiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Hide post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Broken link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Report NSFW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_a_click_92_listener() { return ctx.addVisitor(ctx.bannerArticles[2]._id, ctx.bannerArticles[2].link); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_i_click_106_listener() { return ctx.addFavoriteArticle(ctx.bannerArticles[2]._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "more_horiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Hide post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Broken link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Report NSFW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_a_click_127_listener() { return ctx.addVisitor(ctx.bannerArticles[3]._id, ctx.bannerArticles[3].link); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_i_click_141_listener() { return ctx.addFavoriteArticle(ctx.bannerArticles[3]._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "more_horiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Hide post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Broken link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Report NSFW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_a_click_162_listener() { return ctx.addVisitor(ctx.bannerArticles[4]._id, ctx.bannerArticles[4].link); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_i_click_176_listener() { return ctx.addFavoriteArticle(ctx.bannerArticles[4]._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "more_horiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Hide post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Broken link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Report NSFW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_a_click_197_listener() { return ctx.addVisitor(ctx.bannerArticles[5]._id, ctx.bannerArticles[5].link); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_i_click_211_listener() { return ctx.addFavoriteArticle(ctx.bannerArticles[5]._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "more_horiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Hide post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Broken link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Report NSFW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_a_click_232_listener() { return ctx.addVisitor(ctx.bannerArticles[6]._id, ctx.bannerArticles[6].link); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_i_click_246_listener() { return ctx.addFavoriteArticle(ctx.bannerArticles[6]._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "more_horiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Hide post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Broken link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Report NSFW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Article's that match your search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "h4", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "720 article's are available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Sort by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Most Popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "ul", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_li_click_279_listener() { return ctx.mostUpvoteArticles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "Most upvote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_li_click_281_listener() { return ctx.mostViewedArticles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Most Viewed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_li_click_283_listener() { return ctx.mostRecentArticles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Most Recent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "ul", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "li", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "All websites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "ul", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "li", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_li_click_296_listener() { return ctx.applySourceFilter(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "All websites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](298, SportsAdsComponent_li_298_Template, 2, 1, "li", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "li", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "All sports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "ul", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "li", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_li_click_304_listener() { return ctx.applyFilter(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "All sports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_li_click_306_listener() { return ctx.applyFilter("baseball"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Baseball");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_li_click_308_listener() { return ctx.applyFilter("soccer"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Soccer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_li_click_310_listener() { return ctx.applyFilter("basketball"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Basketball");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_li_click_312_listener() { return ctx.applyFilter("tennis"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "Tennis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_li_click_314_listener() { return ctx.applyFilter("football"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Football");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "h5", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsAdsComponent_Template_a_click_322_listener() { return ctx.closeFilterArticles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](325, SportsAdsComponent_div_325_Template, 41, 15, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "video", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "dialog", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](333, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "button", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "svg", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Edit shortcut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, " Want to add new shortcut? Insert its link below to add it to your quick access row. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Source url");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](349, "input", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "button", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](352, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](356, "img", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "span", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "https://web.whatsapp.com/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "img", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "span", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "https://sellercentral.amazon.com/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "img", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "span", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "https://www.facebook.com/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](368, "img", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "span", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "https://www.amazon.com/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "img", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "span", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "https://mail.google.com/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](377, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "span", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "https://www.shopify.com/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "button", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "button", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "ul", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "h4", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "span", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, " sources selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](393, SportsAdsComponent_li_393_Template, 9, 2, "li", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](394, "span", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "ul", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "h4", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "More sources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](399, SportsAdsComponent_li_399_Template, 7, 2, "li", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](401, "img", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c2, ctx.activeIframe));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.youtubeVideo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](50, _c2, ctx.filterFlags));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](52, _c0, ctx.bannerArticles[0].playerVideo));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.bannerArticles[0].image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bannerArticles[0].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bannerArticles[0].source);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bannerArticles[0].visitor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](54, _c0, ctx.bannerArticles[1].playerVideo));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.bannerArticles[1].image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bannerArticles[1].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bannerArticles[1].source);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bannerArticles[1].visitor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](56, _c0, ctx.bannerArticles[2].playerVideo));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.bannerArticles[2].image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bannerArticles[2].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bannerArticles[2].source);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bannerArticles[2].visitor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](58, _c0, ctx.bannerArticles[3].playerVideo));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.bannerArticles[3].image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bannerArticles[3].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bannerArticles[3].source);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bannerArticles[3].visitor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](60, _c0, ctx.bannerArticles[4].playerVideo));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.bannerArticles[4].image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bannerArticles[4].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bannerArticles[4].source);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bannerArticles[4].visitor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](62, _c0, ctx.bannerArticles[5].playerVideo));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.bannerArticles[5].image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bannerArticles[5].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bannerArticles[5].source);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bannerArticles[5].visitor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](64, _c0, ctx.bannerArticles[6].playerVideo));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.bannerArticles[6].image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bannerArticles[6].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bannerArticles[6].source);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bannerArticles[6].visitor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](66, _c2, ctx.filterFlags));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](68, _c2, ctx.filterFlags));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.totalSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](70, _c2, !ctx.filterFlags));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://www.google.com/s2/favicons?domain=", ctx.filterLink, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.filterTag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedSources.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedSources);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.unSelectedSources);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".display-none[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.success-container[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  right: 0px;\r\n  z-index: 13;\r\n  top: 15%;\r\n  background-color: green;\r\n  padding: 14px\r\n}\r\n.displayInline[_ngcontent-%COMP%]{\r\n  display: inline;\r\n  margin-left: 10px;\r\n}\r\n.success-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  font-size: 19px;\r\n  color: white;\r\n  background-color: transparent;\r\n}\r\n.backImage[_ngcontent-%COMP%]{\r\n  width: 20px;\r\n  margin-right: 4px;\r\n  margin-top: -2px;\r\n}\r\n.iframe-mainContainer[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  right: 1%;\r\n  bottom: 10%;\r\n  z-index: 20\r\n\r\n}\r\n.backButton[_ngcontent-%COMP%]{\r\n  float: right;\r\n  cursor: pointer;\r\n  color: darkblue;\r\n}\r\n.iframe[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  z-index: 1;\r\n  bottom: 0;\r\n  right: 0%;\r\n}\r\n.transparent-background[_ngcontent-%COMP%]{\r\n  background-color: transparent;\r\n}\r\n.dropdown-menu[_ngcontent-%COMP%]{\r\n  z-index: 20;\r\n  margin-top: -10px\r\n}\r\n.closeButton[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  right: 1%;\r\n  background-color: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  z-index: 74;\r\n  margin-top: -26px;\r\n  border-radius: 4px;\r\n}\r\n.closeButton[_ngcontent-%COMP%]:hover{\r\n  background-color: white;\r\n}\r\n.source-logo[_ngcontent-%COMP%]{\r\n  position: absolute !important;\r\n}\r\n.btn-g-height[_ngcontent-%COMP%]{\r\n  width: 31px;\r\n  height: 24px\r\n}\r\n.loadingIcons[_ngcontent-%COMP%]{\r\n  position:fixed;\r\n  bottom: 1%;\r\n  left: 43%;\r\n  width: 70px;\r\n  height: 70px;\r\n}\r\n.loadingIconsImage[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.filtersCustom[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  top: 15px;\r\n  left: 18px;\r\n  background-color: #f3f4f4;\r\n}\r\n.filterCustomParagraph[_ngcontent-%COMP%]{\r\n  width: 76px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BvcnRzLWFkcy9zcG9ydHMtYWRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsV0FBVztFQUNYLFFBQVE7RUFDUix1QkFBdUI7RUFDdkI7QUFDRjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFdBQVc7RUFDWDs7QUFFRjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxTQUFTO0FBQ1g7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsV0FBVztFQUNYO0FBQ0Y7QUFDQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxXQUFXO0VBQ1g7QUFDRjtBQUNBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9zcG9ydHMtYWRzL3Nwb3J0cy1hZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5LW5vbmV7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uc3VjY2Vzcy1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgei1pbmRleDogMTM7XHJcbiAgdG9wOiAxNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgcGFkZGluZzogMTRweFxyXG59XHJcblxyXG4uZGlzcGxheUlubGluZXtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLnN1Y2Nlc3MtY29udGFpbmVyIGgze1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmJhY2tJbWFnZXtcclxuICB3aWR0aDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICBtYXJnaW4tdG9wOiAtMnB4O1xyXG59XHJcbi5pZnJhbWUtbWFpbkNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDElO1xyXG4gIGJvdHRvbTogMTAlO1xyXG4gIHotaW5kZXg6IDIwXHJcblxyXG59XHJcbi5iYWNrQnV0dG9ue1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IGRhcmtibHVlO1xyXG59XHJcbi5pZnJhbWV7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwJTtcclxufVxyXG5cclxuLnRyYW5zcGFyZW50LWJhY2tncm91bmR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnV7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHhcclxufVxyXG4uY2xvc2VCdXR0b257XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAxJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDc0O1xyXG4gIG1hcmdpbi10b3A6IC0yNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uY2xvc2VCdXR0b246aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zb3VyY2UtbG9nb3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxufVxyXG4uYnRuLWctaGVpZ2h0e1xyXG4gIHdpZHRoOiAzMXB4O1xyXG4gIGhlaWdodDogMjRweFxyXG59XHJcbi5sb2FkaW5nSWNvbnN7XHJcbiAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgYm90dG9tOiAxJTtcclxuICBsZWZ0OiA0MyU7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG59XHJcbi5sb2FkaW5nSWNvbnNJbWFnZXtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmZpbHRlcnNDdXN0b217XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMTVweDtcclxuICBsZWZ0OiAxOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjQ7XHJcbn1cclxuLmZpbHRlckN1c3RvbVBhcmFncmFwaHtcclxuICB3aWR0aDogNzZweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SportsAdsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sports-ads',
                templateUrl: './sports-ads.component.html',
                styleUrls: ['./sports-ads.component.css']
            }]
    }], function () { return [{ type: _article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, { favoriteArticle: [{
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
        // baseUrl:String = "http://localhost:8000/api";
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
        this.http.post(this.baseUrl + "/article/favorite-article", { userId: user_Id, article: id }).toPromise().then((data) => {
        });
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], styles: ["body[_ngcontent-%COMP%] {\r\n  font-family: \"Open Sans\", sans-serif;\r\n  font-weight: 400;\r\n  font-size: 13px;\r\n  color: #18191b;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  -webkit-transition: background-color .2s;\r\n  -webkit-font-smoothing: antialiased\r\n}\r\n\r\n.transparent-background[_ngcontent-%COMP%]{\r\n  background-color: transparent;\r\n}\r\n\r\n.modal.in[_ngcontent-%COMP%] {\r\n  background-color: rgba(222, 232, 253, 0.95);\r\n}\r\n\r\n.modal-open[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%], div#SignIn_modal[_ngcontent-%COMP%], .login-modal.in#SignIn_modal[_ngcontent-%COMP%] {\r\n  z-index: 999999\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background-color: #fff;\r\n  border-radius: 6px;\r\n  box-shadow: 0 5px 15px rgba(0,0,0,.25);\r\n}\r\n\r\n.modal-dialog[_ngcontent-%COMP%] {\r\n  position:absolute;\r\n  top:50% !important;\r\n  left: 50%;\r\n  transform: translateX(-50%) translateY(-50%) !important;\r\n  -ms-transform: translateX(-50%) translateY(-50%) !important;\r\n  -webkit-transform: translateX(-50%) translateY(-50%) !important;\r\n  margin: 0 auto;\r\n  width: 420px;\r\n}\r\n\r\n.login-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 40px 0 0 0;\r\n  background-color: white;\r\n}\r\n\r\n.continueMail[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n\r\n.white-background[_ngcontent-%COMP%]{\r\n  background: white\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\r\n  height: auto;\r\n  margin: 0 0 30px 0;\r\n}\r\n\r\n.login-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\r\n  max-width: 320px;\r\n  width: 100%\r\n}\r\n\r\n.control-group.social-login[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  display: block;\r\n}\r\n\r\n.facebook-signing-button[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  background: #4267b2;\r\n  border: 1px solid #4267b2;\r\n  border-radius: 4px;\r\n  padding: 0 30px 0 16px;\r\n  width: 100%;\r\n  margin: 0 0 10px 0;\r\n  height: 50px;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.google-signing-button[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  background: #6bb0c5;\r\n  border: 1px solid #6bb0c5;\r\n  border-radius: 4px;\r\n  padding: 0 30px 0 16px;\r\n  width: 100%;\r\n  height: 50px;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.fit-icon[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  background: 0 0;\r\n  border: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.fit-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  height: 20px !important;\r\n}\r\n\r\n.social-ssn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  padding: 0;\r\n  text-align: center;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  height: 65px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 25px 0 0;\r\n  float: right\r\n}\r\n\r\n.social-login[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  margin: 20px 0;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\r\n  height: auto!important;\r\n  margin: 0 auto!important\r\n}\r\n\r\n.login-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .control-group[_ngcontent-%COMP%]   input.btn[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  border: 1px solid #4789ff;\r\n  height: 50px;\r\n  color: #4789ff;\r\n  text-align: center;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  transition: 200ms ease-in-out;\r\n}\r\n\r\n.login-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .control-group[_ngcontent-%COMP%]   input.btn[_ngcontent-%COMP%]:hover {\r\n  background: #4789ff;\r\n  color: #fff;\r\n  border: 1px solid #4789ff\r\n}\r\n\r\n.seprater-or[_ngcontent-%COMP%] {\r\n  padding: 5px 15px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  display: inline-block;\r\n  background: #fff;\r\n  position: relative;\r\n  font-size: 14px;\r\n  color: #8f9eb1\r\n}\r\n\r\n.seprater-or[_ngcontent-%COMP%]::after {\r\n  position: absolute;\r\n  content: \"\";\r\n  width: 100px;\r\n  height: 1px;\r\n  top: 50%;\r\n  background: #ebeff5;\r\n  transform: translateY(-50%);\r\n  left: auto;\r\n  right: 100%;\r\n  margin: 0 auto\r\n}\r\n\r\n.seprater-or[_ngcontent-%COMP%]::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  width: 100px;\r\n  height: 1px;\r\n  top: 50%;\r\n  background: #ebeff5;\r\n  transform: translateY(-50%);\r\n  left: 100%;\r\n  right: auto\r\n}\r\n\r\n.signup-txt[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  color: #91a1b3;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-weight: 500;\r\n  letter-spacing: .3px;\r\n  line-height: 20px;\r\n  margin: 20px 0 20px 0;\r\n}\r\n\r\n.signup-txt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #1b8df1;\r\n  cursor: pointer;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n  margin: 30px auto\r\n}\r\n\r\n.modal-backdrop.fade.in[_ngcontent-%COMP%] {\r\n  z-index: 99999\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7O0VBRUU7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULHVEQUF1RDtFQUN2RCwyREFBMkQ7RUFDM0QsK0RBQStEO0VBQy9ELGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0U7QUFDRjs7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUdiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBR2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1g7QUFDRjs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFFBQVE7RUFDUixtQkFBbUI7RUFLbkIsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixXQUFXO0VBQ1g7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxRQUFRO0VBQ1IsbUJBQW1CO0VBS25CLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1Y7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLFlBQVk7RUFDWjtBQUNGOztBQUdBO0VBQ0U7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjMTgxOTFiO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnM7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWRcclxufVxyXG5cclxuLnRyYW5zcGFyZW50LWJhY2tncm91bmR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLm1vZGFsLmluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMiwgMjMyLCAyNTMsIDAuOTUpO1xyXG59XHJcblxyXG4ubW9kYWwtb3BlbiAubW9kYWwsXHJcbmRpdiNTaWduSW5fbW9kYWwsLmxvZ2luLW1vZGFsLmluI1NpZ25Jbl9tb2RhbCB7XHJcbiAgei1pbmRleDogOTk5OTk5XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsMCwwLC4yNSk7XHJcbn1cclxuXHJcbi5tb2RhbC1kaWFsb2cge1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHRvcDo1MCUgIWltcG9ydGFudDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgIWltcG9ydGFudDtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgIWltcG9ydGFudDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDQyMHB4O1xyXG59XHJcblxyXG4ubG9naW4tbW9kYWwgLm1vZGFsLWJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDQwcHggMCAwIDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmNvbnRpbnVlTWFpbHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ud2hpdGUtYmFja2dyb3VuZHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZVxyXG59XHJcbi5tb2RhbC1ib2R5IC5sb2dvIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAwIDAgMzBweCAwO1xyXG59XHJcblxyXG4ubG9naW4tbW9kYWwgLm1vZGFsLWJvZHkgLmxvZ2luLWZvcm0ge1xyXG4gIG1heC13aWR0aDogMzIwcHg7XHJcbiAgd2lkdGg6IDEwMCVcclxufVxyXG5cclxuLmNvbnRyb2wtZ3JvdXAuc29jaWFsLWxvZ2luIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5mYWNlYm9vay1zaWduaW5nLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICM0MjY3YjI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzQyNjdiMjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogMCAzMHB4IDAgMTZweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgMCAxMHB4IDA7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZ29vZ2xlLXNpZ25pbmctYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzZiYjBjNTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNmJiMGM1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiAwIDMwcHggMCAxNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZpdC1pY29uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogMCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uZml0LWljb24gaW1ne1xyXG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5zb2NpYWwtc3NuIHAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgaGVpZ2h0OiA2NXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgMjVweCAwIDA7XHJcbiAgZmxvYXQ6IHJpZ2h0XHJcbn1cclxuXHJcbi5zb2NpYWwtbG9naW4gc3BhbiB7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbmhlYWRlciAubW9kYWwtYm9keSAubG9nbyB7XHJcbiAgaGVpZ2h0OiBhdXRvIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgYXV0byFpbXBvcnRhbnRcclxufVxyXG5cclxuLmxvZ2luLW1vZGFsIC5tb2RhbC1ib2R5IC5jb250cm9sLWdyb3VwIGlucHV0LmJ0biB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNDc4OWZmO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBjb2xvcjogIzQ3ODlmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5sb2dpbi1tb2RhbCAubW9kYWwtYm9keSAuY29udHJvbC1ncm91cCBpbnB1dC5idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM0Nzg5ZmY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ3ODlmZlxyXG59XHJcblxyXG5cclxuLnNlcHJhdGVyLW9yIHtcclxuICBwYWRkaW5nOiA1cHggMTVweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzhmOWViMVxyXG59XHJcblxyXG4uc2VwcmF0ZXItb3I6OmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogI2ViZWZmNTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgbGVmdDogYXV0bztcclxuICByaWdodDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0b1xyXG59XHJcblxyXG4uc2VwcmF0ZXItb3I6OmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICNlYmVmZjU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGxlZnQ6IDEwMCU7XHJcbiAgcmlnaHQ6IGF1dG9cclxufVxyXG5cclxuLnNpZ251cC10eHQge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogIzkxYTFiMztcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogLjNweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBtYXJnaW46IDIwcHggMCAyMHB4IDA7XHJcbn1cclxuXHJcbi5zaWdudXAtdHh0IHNwYW4ge1xyXG4gIGNvbG9yOiAjMWI4ZGYxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbmhlYWRlciAubW9kYWwtZGlhbG9nIHtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG9cclxufVxyXG5cclxuXHJcbi5tb2RhbC1iYWNrZHJvcC5mYWRlLmluIHtcclxuICB6LWluZGV4OiA5OTk5OVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */", ".fs-1[_ngcontent-%COMP%] {font-size: 1px;}\r\n.fs-2[_ngcontent-%COMP%] {font-size: 2px;}\r\n.fs-3[_ngcontent-%COMP%] {font-size: 3px;}\r\n.fs-4[_ngcontent-%COMP%] {font-size: 4px;}\r\n.fs-5[_ngcontent-%COMP%] {font-size: 5px;}\r\n.fs-6[_ngcontent-%COMP%] {font-size: 6px;}\r\n.fs-7[_ngcontent-%COMP%] {font-size: 7px;}\r\n.fs-8[_ngcontent-%COMP%] {font-size: 8px;}\r\n.fs-9[_ngcontent-%COMP%] {font-size: 9px;}\r\n.fs-10[_ngcontent-%COMP%] {font-size: 10px;}\r\n.fs-11[_ngcontent-%COMP%] {font-size: 11px;}\r\n.fs-12[_ngcontent-%COMP%] {font-size: 12px;}\r\n.fs-13[_ngcontent-%COMP%] {font-size: 13px;}\r\n.fs-14[_ngcontent-%COMP%] {font-size: 14px;}\r\n.fs-15[_ngcontent-%COMP%] {font-size: 15px;}\r\n.fs-16[_ngcontent-%COMP%] {font-size: 16px;}\r\n.fs-17[_ngcontent-%COMP%] {font-size: 17px;}\r\n.fs-18[_ngcontent-%COMP%] {font-size: 18px;}\r\n.fs-19[_ngcontent-%COMP%] {font-size: 19px;}\r\n.fs-20[_ngcontent-%COMP%] {font-size: 20px;}\r\n.fs-21[_ngcontent-%COMP%] {font-size: 21px;}\r\n.fs-22[_ngcontent-%COMP%] {font-size: 22px;}\r\n.fs-23[_ngcontent-%COMP%] {font-size: 23px;}\r\n.fs-24[_ngcontent-%COMP%] {font-size: 24px;}\r\n.fs-25[_ngcontent-%COMP%] {font-size: 25px;}\r\n.fs-26[_ngcontent-%COMP%] {font-size: 26px;}\r\n.fs-27[_ngcontent-%COMP%] {font-size: 27px;}\r\n.fs-28[_ngcontent-%COMP%] {font-size: 28px;}\r\n.fs-29[_ngcontent-%COMP%] {font-size: 29px;}\r\n.fs-30[_ngcontent-%COMP%] {font-size: 30px;}\r\n.fs-31[_ngcontent-%COMP%] {font-size: 31px;}\r\n.fs-32[_ngcontent-%COMP%] {font-size: 32px;}\r\n.fs-33[_ngcontent-%COMP%] {font-size: 33px;}\r\n.fs-34[_ngcontent-%COMP%] {font-size: 34px;}\r\n.fs-35[_ngcontent-%COMP%] {font-size: 35px;}\r\n.fs-36[_ngcontent-%COMP%] {font-size: 36px;}\r\n.fs-37[_ngcontent-%COMP%] {font-size: 37px;}\r\n.fs-38[_ngcontent-%COMP%] {font-size: 38px;}\r\n.fs-39[_ngcontent-%COMP%] {font-size: 39px;}\r\n.fs-40[_ngcontent-%COMP%] {font-size: 40px;}\r\n.fs-41[_ngcontent-%COMP%] {font-size: 41px;}\r\n.fs-42[_ngcontent-%COMP%] {font-size: 42px;}\r\n.fs-43[_ngcontent-%COMP%] {font-size: 43px;}\r\n.fs-44[_ngcontent-%COMP%] {font-size: 44px;}\r\n.fs-45[_ngcontent-%COMP%] {font-size: 45px;}\r\n.fs-46[_ngcontent-%COMP%] {font-size: 46px;}\r\n.fs-47[_ngcontent-%COMP%] {font-size: 47px;}\r\n.fs-48[_ngcontent-%COMP%] {font-size: 48px;}\r\n.fs-49[_ngcontent-%COMP%] {font-size: 49px;}\r\n.fs-50[_ngcontent-%COMP%] {font-size: 50px;}\r\n.fs-51[_ngcontent-%COMP%] {font-size: 51px;}\r\n.fs-52[_ngcontent-%COMP%] {font-size: 52px;}\r\n.fs-53[_ngcontent-%COMP%] {font-size: 53px;}\r\n.fs-54[_ngcontent-%COMP%] {font-size: 54px;}\r\n.fs-55[_ngcontent-%COMP%] {font-size: 55px;}\r\n.fs-56[_ngcontent-%COMP%] {font-size: 56px;}\r\n.fs-57[_ngcontent-%COMP%] {font-size: 57px;}\r\n.fs-58[_ngcontent-%COMP%] {font-size: 58px;}\r\n.fs-59[_ngcontent-%COMP%] {font-size: 59px;}\r\n.fs-60[_ngcontent-%COMP%] {font-size: 60px;}\r\n.fs-61[_ngcontent-%COMP%] {font-size: 61px;}\r\n.fs-62[_ngcontent-%COMP%] {font-size: 62px;}\r\n.fs-63[_ngcontent-%COMP%] {font-size: 63px;}\r\n.fs-64[_ngcontent-%COMP%] {font-size: 64px;}\r\n.fs-65[_ngcontent-%COMP%] {font-size: 65px;}\r\n.fs-66[_ngcontent-%COMP%] {font-size: 66px;}\r\n.fs-67[_ngcontent-%COMP%] {font-size: 67px;}\r\n.fs-68[_ngcontent-%COMP%] {font-size: 68px;}\r\n.fs-69[_ngcontent-%COMP%] {font-size: 69px;}\r\n.fs-70[_ngcontent-%COMP%] {font-size: 70px;}\r\n.fs-71[_ngcontent-%COMP%] {font-size: 71px;}\r\n.fs-72[_ngcontent-%COMP%] {font-size: 72px;}\r\n.fs-73[_ngcontent-%COMP%] {font-size: 73px;}\r\n.fs-74[_ngcontent-%COMP%] {font-size: 74px;}\r\n.fs-75[_ngcontent-%COMP%] {font-size: 75px;}\r\n.fs-76[_ngcontent-%COMP%] {font-size: 76px;}\r\n.fs-77[_ngcontent-%COMP%] {font-size: 77px;}\r\n.fs-78[_ngcontent-%COMP%] {font-size: 78px;}\r\n.fs-79[_ngcontent-%COMP%] {font-size: 79px;}\r\n.fs-80[_ngcontent-%COMP%] {font-size: 80px;}\r\n.fs-81[_ngcontent-%COMP%] {font-size: 81px;}\r\n.fs-82[_ngcontent-%COMP%] {font-size: 82px;}\r\n.fs-83[_ngcontent-%COMP%] {font-size: 83px;}\r\n.fs-84[_ngcontent-%COMP%] {font-size: 84px;}\r\n.fs-85[_ngcontent-%COMP%] {font-size: 85px;}\r\n.fs-86[_ngcontent-%COMP%] {font-size: 86px;}\r\n.fs-87[_ngcontent-%COMP%] {font-size: 87px;}\r\n.fs-88[_ngcontent-%COMP%] {font-size: 88px;}\r\n.fs-89[_ngcontent-%COMP%] {font-size: 89px;}\r\n.fs-90[_ngcontent-%COMP%] {font-size: 90px;}\r\n.fs-91[_ngcontent-%COMP%] {font-size: 91px;}\r\n.fs-92[_ngcontent-%COMP%] {font-size: 92px;}\r\n.fs-93[_ngcontent-%COMP%] {font-size: 93px;}\r\n.fs-94[_ngcontent-%COMP%] {font-size: 94px;}\r\n.fs-95[_ngcontent-%COMP%] {font-size: 95px;}\r\n.fs-96[_ngcontent-%COMP%] {font-size: 96px;}\r\n.fs-97[_ngcontent-%COMP%] {font-size: 97px;}\r\n.fs-98[_ngcontent-%COMP%] {font-size: 98px;}\r\n.fs-99[_ngcontent-%COMP%] {font-size: 99px;}\r\n.fs-100[_ngcontent-%COMP%] {font-size: 100px;}\r\n.fs-101[_ngcontent-%COMP%] {font-size: 101px;}\r\n.fs-102[_ngcontent-%COMP%] {font-size: 102px;}\r\n.fs-103[_ngcontent-%COMP%] {font-size: 103px;}\r\n.fs-104[_ngcontent-%COMP%] {font-size: 104px;}\r\n.fs-105[_ngcontent-%COMP%] {font-size: 105px;}\r\n.fs-106[_ngcontent-%COMP%] {font-size: 106px;}\r\n.fs-107[_ngcontent-%COMP%] {font-size: 107px;}\r\n.fs-108[_ngcontent-%COMP%] {font-size: 108px;}\r\n.fs-109[_ngcontent-%COMP%] {font-size: 109px;}\r\n.fs-110[_ngcontent-%COMP%] {font-size: 110px;}\r\n.fs-111[_ngcontent-%COMP%] {font-size: 111px;}\r\n.fs-112[_ngcontent-%COMP%] {font-size: 112px;}\r\n.fs-113[_ngcontent-%COMP%] {font-size: 113px;}\r\n.fs-114[_ngcontent-%COMP%] {font-size: 114px;}\r\n.fs-115[_ngcontent-%COMP%] {font-size: 115px;}\r\n.fs-116[_ngcontent-%COMP%] {font-size: 116px;}\r\n.fs-117[_ngcontent-%COMP%] {font-size: 117px;}\r\n.fs-118[_ngcontent-%COMP%] {font-size: 118px;}\r\n.fs-119[_ngcontent-%COMP%] {font-size: 119px;}\r\n.fs-120[_ngcontent-%COMP%] {font-size: 120px;}\r\n.fs-121[_ngcontent-%COMP%] {font-size: 121px;}\r\n.fs-122[_ngcontent-%COMP%] {font-size: 122px;}\r\n.fs-123[_ngcontent-%COMP%] {font-size: 123px;}\r\n.fs-124[_ngcontent-%COMP%] {font-size: 124px;}\r\n.fs-125[_ngcontent-%COMP%] {font-size: 125px;}\r\n.fs-126[_ngcontent-%COMP%] {font-size: 126px;}\r\n.fs-127[_ngcontent-%COMP%] {font-size: 127px;}\r\n.fs-128[_ngcontent-%COMP%] {font-size: 128px;}\r\n.fs-129[_ngcontent-%COMP%] {font-size: 129px;}\r\n.fs-130[_ngcontent-%COMP%] {font-size: 130px;}\r\n.fs-131[_ngcontent-%COMP%] {font-size: 131px;}\r\n.fs-132[_ngcontent-%COMP%] {font-size: 132px;}\r\n.fs-133[_ngcontent-%COMP%] {font-size: 133px;}\r\n.fs-134[_ngcontent-%COMP%] {font-size: 134px;}\r\n.fs-135[_ngcontent-%COMP%] {font-size: 135px;}\r\n.fs-136[_ngcontent-%COMP%] {font-size: 136px;}\r\n.fs-137[_ngcontent-%COMP%] {font-size: 137px;}\r\n.fs-138[_ngcontent-%COMP%] {font-size: 138px;}\r\n.fs-139[_ngcontent-%COMP%] {font-size: 139px;}\r\n.fs-140[_ngcontent-%COMP%] {font-size: 140px;}\r\n.fs-141[_ngcontent-%COMP%] {font-size: 141px;}\r\n.fs-142[_ngcontent-%COMP%] {font-size: 142px;}\r\n.fs-143[_ngcontent-%COMP%] {font-size: 143px;}\r\n.fs-144[_ngcontent-%COMP%] {font-size: 144px;}\r\n.fs-145[_ngcontent-%COMP%] {font-size: 145px;}\r\n.fs-146[_ngcontent-%COMP%] {font-size: 146px;}\r\n.fs-147[_ngcontent-%COMP%] {font-size: 147px;}\r\n.fs-148[_ngcontent-%COMP%] {font-size: 148px;}\r\n.fs-149[_ngcontent-%COMP%] {font-size: 149px;}\r\n.fs-150[_ngcontent-%COMP%] {font-size: 150px;}\r\n.fs-151[_ngcontent-%COMP%] {font-size: 151px;}\r\n.fs-152[_ngcontent-%COMP%] {font-size: 152px;}\r\n.fs-153[_ngcontent-%COMP%] {font-size: 153px;}\r\n.fs-154[_ngcontent-%COMP%] {font-size: 154px;}\r\n.fs-155[_ngcontent-%COMP%] {font-size: 155px;}\r\n.fs-156[_ngcontent-%COMP%] {font-size: 156px;}\r\n.fs-157[_ngcontent-%COMP%] {font-size: 157px;}\r\n.fs-158[_ngcontent-%COMP%] {font-size: 158px;}\r\n.fs-159[_ngcontent-%COMP%] {font-size: 159px;}\r\n.fs-160[_ngcontent-%COMP%] {font-size: 160px;}\r\n.fs-161[_ngcontent-%COMP%] {font-size: 161px;}\r\n.fs-162[_ngcontent-%COMP%] {font-size: 162px;}\r\n.fs-163[_ngcontent-%COMP%] {font-size: 163px;}\r\n.fs-164[_ngcontent-%COMP%] {font-size: 164px;}\r\n.fs-165[_ngcontent-%COMP%] {font-size: 165px;}\r\n.fs-166[_ngcontent-%COMP%] {font-size: 166px;}\r\n.fs-167[_ngcontent-%COMP%] {font-size: 167px;}\r\n.fs-168[_ngcontent-%COMP%] {font-size: 168px;}\r\n.fs-169[_ngcontent-%COMP%] {font-size: 169px;}\r\n.fs-170[_ngcontent-%COMP%] {font-size: 170px;}\r\n.fs-171[_ngcontent-%COMP%] {font-size: 171px;}\r\n.fs-172[_ngcontent-%COMP%] {font-size: 172px;}\r\n.fs-173[_ngcontent-%COMP%] {font-size: 173px;}\r\n.fs-174[_ngcontent-%COMP%] {font-size: 174px;}\r\n.fs-175[_ngcontent-%COMP%] {font-size: 175px;}\r\n.fs-176[_ngcontent-%COMP%] {font-size: 176px;}\r\n.fs-177[_ngcontent-%COMP%] {font-size: 177px;}\r\n.fs-178[_ngcontent-%COMP%] {font-size: 178px;}\r\n.fs-179[_ngcontent-%COMP%] {font-size: 179px;}\r\n.fs-180[_ngcontent-%COMP%] {font-size: 180px;}\r\n.fs-181[_ngcontent-%COMP%] {font-size: 181px;}\r\n.fs-182[_ngcontent-%COMP%] {font-size: 182px;}\r\n.fs-183[_ngcontent-%COMP%] {font-size: 183px;}\r\n.fs-184[_ngcontent-%COMP%] {font-size: 184px;}\r\n.fs-185[_ngcontent-%COMP%] {font-size: 185px;}\r\n.fs-186[_ngcontent-%COMP%] {font-size: 186px;}\r\n.fs-187[_ngcontent-%COMP%] {font-size: 187px;}\r\n.fs-188[_ngcontent-%COMP%] {font-size: 188px;}\r\n.fs-189[_ngcontent-%COMP%] {font-size: 189px;}\r\n.fs-190[_ngcontent-%COMP%] {font-size: 190px;}\r\n.fs-191[_ngcontent-%COMP%] {font-size: 191px;}\r\n.fs-192[_ngcontent-%COMP%] {font-size: 192px;}\r\n.fs-193[_ngcontent-%COMP%] {font-size: 193px;}\r\n.fs-194[_ngcontent-%COMP%] {font-size: 194px;}\r\n.fs-195[_ngcontent-%COMP%] {font-size: 195px;}\r\n.fs-196[_ngcontent-%COMP%] {font-size: 196px;}\r\n.fs-197[_ngcontent-%COMP%] {font-size: 197px;}\r\n.fs-198[_ngcontent-%COMP%] {font-size: 198px;}\r\n.fs-199[_ngcontent-%COMP%] {font-size: 199px;}\r\n.fs-200[_ngcontent-%COMP%] {font-size: 200px;}\r\n\r\n.p-t-0[_ngcontent-%COMP%] {padding-top: 0px;}\r\n.p-t-1[_ngcontent-%COMP%] {padding-top: 1px;}\r\n.p-t-2[_ngcontent-%COMP%] {padding-top: 2px;}\r\n.p-t-3[_ngcontent-%COMP%] {padding-top: 3px;}\r\n.p-t-4[_ngcontent-%COMP%] {padding-top: 4px;}\r\n.p-t-5[_ngcontent-%COMP%] {padding-top: 5px;}\r\n.p-t-6[_ngcontent-%COMP%] {padding-top: 6px;}\r\n.p-t-7[_ngcontent-%COMP%] {padding-top: 7px;}\r\n.p-t-8[_ngcontent-%COMP%] {padding-top: 8px;}\r\n.p-t-9[_ngcontent-%COMP%] {padding-top: 9px;}\r\n.p-t-10[_ngcontent-%COMP%] {padding-top: 10px;}\r\n.p-t-11[_ngcontent-%COMP%] {padding-top: 11px;}\r\n.p-t-12[_ngcontent-%COMP%] {padding-top: 12px;}\r\n.p-t-13[_ngcontent-%COMP%] {padding-top: 13px;}\r\n.p-t-14[_ngcontent-%COMP%] {padding-top: 14px;}\r\n.p-t-15[_ngcontent-%COMP%] {padding-top: 15px;}\r\n.p-t-16[_ngcontent-%COMP%] {padding-top: 16px;}\r\n.p-t-17[_ngcontent-%COMP%] {padding-top: 17px;}\r\n.p-t-18[_ngcontent-%COMP%] {padding-top: 18px;}\r\n.p-t-19[_ngcontent-%COMP%] {padding-top: 19px;}\r\n.p-t-20[_ngcontent-%COMP%] {padding-top: 20px;}\r\n.p-t-21[_ngcontent-%COMP%] {padding-top: 21px;}\r\n.p-t-22[_ngcontent-%COMP%] {padding-top: 22px;}\r\n.p-t-23[_ngcontent-%COMP%] {padding-top: 23px;}\r\n.p-t-24[_ngcontent-%COMP%] {padding-top: 24px;}\r\n.p-t-25[_ngcontent-%COMP%] {padding-top: 25px;}\r\n.p-t-26[_ngcontent-%COMP%] {padding-top: 26px;}\r\n.p-t-27[_ngcontent-%COMP%] {padding-top: 27px;}\r\n.p-t-28[_ngcontent-%COMP%] {padding-top: 28px;}\r\n.p-t-29[_ngcontent-%COMP%] {padding-top: 29px;}\r\n.p-t-30[_ngcontent-%COMP%] {padding-top: 30px;}\r\n.p-t-31[_ngcontent-%COMP%] {padding-top: 31px;}\r\n.p-t-32[_ngcontent-%COMP%] {padding-top: 32px;}\r\n.p-t-33[_ngcontent-%COMP%] {padding-top: 33px;}\r\n.p-t-34[_ngcontent-%COMP%] {padding-top: 34px;}\r\n.p-t-35[_ngcontent-%COMP%] {padding-top: 35px;}\r\n.p-t-36[_ngcontent-%COMP%] {padding-top: 36px;}\r\n.p-t-37[_ngcontent-%COMP%] {padding-top: 37px;}\r\n.p-t-38[_ngcontent-%COMP%] {padding-top: 38px;}\r\n.p-t-39[_ngcontent-%COMP%] {padding-top: 39px;}\r\n.p-t-40[_ngcontent-%COMP%] {padding-top: 40px;}\r\n.p-t-41[_ngcontent-%COMP%] {padding-top: 41px;}\r\n.p-t-42[_ngcontent-%COMP%] {padding-top: 42px;}\r\n.p-t-43[_ngcontent-%COMP%] {padding-top: 43px;}\r\n.p-t-44[_ngcontent-%COMP%] {padding-top: 44px;}\r\n.p-t-45[_ngcontent-%COMP%] {padding-top: 45px;}\r\n.p-t-46[_ngcontent-%COMP%] {padding-top: 46px;}\r\n.p-t-47[_ngcontent-%COMP%] {padding-top: 47px;}\r\n.p-t-48[_ngcontent-%COMP%] {padding-top: 48px;}\r\n.p-t-49[_ngcontent-%COMP%] {padding-top: 49px;}\r\n.p-t-50[_ngcontent-%COMP%] {padding-top: 50px;}\r\n.p-t-51[_ngcontent-%COMP%] {padding-top: 51px;}\r\n.p-t-52[_ngcontent-%COMP%] {padding-top: 52px;}\r\n.p-t-53[_ngcontent-%COMP%] {padding-top: 53px;}\r\n.p-t-54[_ngcontent-%COMP%] {padding-top: 54px;}\r\n.p-t-55[_ngcontent-%COMP%] {padding-top: 55px;}\r\n.p-t-56[_ngcontent-%COMP%] {padding-top: 56px;}\r\n.p-t-57[_ngcontent-%COMP%] {padding-top: 57px;}\r\n.p-t-58[_ngcontent-%COMP%] {padding-top: 58px;}\r\n.p-t-59[_ngcontent-%COMP%] {padding-top: 59px;}\r\n.p-t-60[_ngcontent-%COMP%] {padding-top: 60px;}\r\n.p-t-61[_ngcontent-%COMP%] {padding-top: 61px;}\r\n.p-t-62[_ngcontent-%COMP%] {padding-top: 62px;}\r\n.p-t-63[_ngcontent-%COMP%] {padding-top: 63px;}\r\n.p-t-64[_ngcontent-%COMP%] {padding-top: 64px;}\r\n.p-t-65[_ngcontent-%COMP%] {padding-top: 65px;}\r\n.p-t-66[_ngcontent-%COMP%] {padding-top: 66px;}\r\n.p-t-67[_ngcontent-%COMP%] {padding-top: 67px;}\r\n.p-t-68[_ngcontent-%COMP%] {padding-top: 68px;}\r\n.p-t-69[_ngcontent-%COMP%] {padding-top: 69px;}\r\n.p-t-70[_ngcontent-%COMP%] {padding-top: 70px;}\r\n.p-t-71[_ngcontent-%COMP%] {padding-top: 71px;}\r\n.p-t-72[_ngcontent-%COMP%] {padding-top: 72px;}\r\n.p-t-73[_ngcontent-%COMP%] {padding-top: 73px;}\r\n.p-t-74[_ngcontent-%COMP%] {padding-top: 74px;}\r\n.p-t-75[_ngcontent-%COMP%] {padding-top: 75px;}\r\n.p-t-76[_ngcontent-%COMP%] {padding-top: 76px;}\r\n.p-t-77[_ngcontent-%COMP%] {padding-top: 77px;}\r\n.p-t-78[_ngcontent-%COMP%] {padding-top: 78px;}\r\n.p-t-79[_ngcontent-%COMP%] {padding-top: 79px;}\r\n.p-t-80[_ngcontent-%COMP%] {padding-top: 80px;}\r\n.p-t-81[_ngcontent-%COMP%] {padding-top: 81px;}\r\n.p-t-82[_ngcontent-%COMP%] {padding-top: 82px;}\r\n.p-t-83[_ngcontent-%COMP%] {padding-top: 83px;}\r\n.p-t-84[_ngcontent-%COMP%] {padding-top: 84px;}\r\n.p-t-85[_ngcontent-%COMP%] {padding-top: 85px;}\r\n.p-t-86[_ngcontent-%COMP%] {padding-top: 86px;}\r\n.p-t-87[_ngcontent-%COMP%] {padding-top: 87px;}\r\n.p-t-88[_ngcontent-%COMP%] {padding-top: 88px;}\r\n.p-t-89[_ngcontent-%COMP%] {padding-top: 89px;}\r\n.p-t-90[_ngcontent-%COMP%] {padding-top: 90px;}\r\n.p-t-91[_ngcontent-%COMP%] {padding-top: 91px;}\r\n.p-t-92[_ngcontent-%COMP%] {padding-top: 92px;}\r\n.p-t-93[_ngcontent-%COMP%] {padding-top: 93px;}\r\n.p-t-94[_ngcontent-%COMP%] {padding-top: 94px;}\r\n.p-t-95[_ngcontent-%COMP%] {padding-top: 95px;}\r\n.p-t-96[_ngcontent-%COMP%] {padding-top: 96px;}\r\n.p-t-97[_ngcontent-%COMP%] {padding-top: 97px;}\r\n.p-t-98[_ngcontent-%COMP%] {padding-top: 98px;}\r\n.p-t-99[_ngcontent-%COMP%] {padding-top: 99px;}\r\n.p-t-100[_ngcontent-%COMP%] {padding-top: 100px;}\r\n.p-t-101[_ngcontent-%COMP%] {padding-top: 101px;}\r\n.p-t-102[_ngcontent-%COMP%] {padding-top: 102px;}\r\n.p-t-103[_ngcontent-%COMP%] {padding-top: 103px;}\r\n.p-t-104[_ngcontent-%COMP%] {padding-top: 104px;}\r\n.p-t-105[_ngcontent-%COMP%] {padding-top: 105px;}\r\n.p-t-106[_ngcontent-%COMP%] {padding-top: 106px;}\r\n.p-t-107[_ngcontent-%COMP%] {padding-top: 107px;}\r\n.p-t-108[_ngcontent-%COMP%] {padding-top: 108px;}\r\n.p-t-109[_ngcontent-%COMP%] {padding-top: 109px;}\r\n.p-t-110[_ngcontent-%COMP%] {padding-top: 110px;}\r\n.p-t-111[_ngcontent-%COMP%] {padding-top: 111px;}\r\n.p-t-112[_ngcontent-%COMP%] {padding-top: 112px;}\r\n.p-t-113[_ngcontent-%COMP%] {padding-top: 113px;}\r\n.p-t-114[_ngcontent-%COMP%] {padding-top: 114px;}\r\n.p-t-115[_ngcontent-%COMP%] {padding-top: 115px;}\r\n.p-t-116[_ngcontent-%COMP%] {padding-top: 116px;}\r\n.p-t-117[_ngcontent-%COMP%] {padding-top: 117px;}\r\n.p-t-118[_ngcontent-%COMP%] {padding-top: 118px;}\r\n.p-t-119[_ngcontent-%COMP%] {padding-top: 119px;}\r\n.p-t-120[_ngcontent-%COMP%] {padding-top: 120px;}\r\n.p-t-121[_ngcontent-%COMP%] {padding-top: 121px;}\r\n.p-t-122[_ngcontent-%COMP%] {padding-top: 122px;}\r\n.p-t-123[_ngcontent-%COMP%] {padding-top: 123px;}\r\n.p-t-124[_ngcontent-%COMP%] {padding-top: 124px;}\r\n.p-t-125[_ngcontent-%COMP%] {padding-top: 125px;}\r\n.p-t-126[_ngcontent-%COMP%] {padding-top: 126px;}\r\n.p-t-127[_ngcontent-%COMP%] {padding-top: 127px;}\r\n.p-t-128[_ngcontent-%COMP%] {padding-top: 128px;}\r\n.p-t-129[_ngcontent-%COMP%] {padding-top: 129px;}\r\n.p-t-130[_ngcontent-%COMP%] {padding-top: 130px;}\r\n.p-t-131[_ngcontent-%COMP%] {padding-top: 131px;}\r\n.p-t-132[_ngcontent-%COMP%] {padding-top: 132px;}\r\n.p-t-133[_ngcontent-%COMP%] {padding-top: 133px;}\r\n.p-t-134[_ngcontent-%COMP%] {padding-top: 134px;}\r\n.p-t-135[_ngcontent-%COMP%] {padding-top: 135px;}\r\n.p-t-136[_ngcontent-%COMP%] {padding-top: 136px;}\r\n.p-t-137[_ngcontent-%COMP%] {padding-top: 137px;}\r\n.p-t-138[_ngcontent-%COMP%] {padding-top: 138px;}\r\n.p-t-139[_ngcontent-%COMP%] {padding-top: 139px;}\r\n.p-t-140[_ngcontent-%COMP%] {padding-top: 140px;}\r\n.p-t-141[_ngcontent-%COMP%] {padding-top: 141px;}\r\n.p-t-142[_ngcontent-%COMP%] {padding-top: 142px;}\r\n.p-t-143[_ngcontent-%COMP%] {padding-top: 143px;}\r\n.p-t-144[_ngcontent-%COMP%] {padding-top: 144px;}\r\n.p-t-145[_ngcontent-%COMP%] {padding-top: 145px;}\r\n.p-t-146[_ngcontent-%COMP%] {padding-top: 146px;}\r\n.p-t-147[_ngcontent-%COMP%] {padding-top: 147px;}\r\n.p-t-148[_ngcontent-%COMP%] {padding-top: 148px;}\r\n.p-t-149[_ngcontent-%COMP%] {padding-top: 149px;}\r\n.p-t-150[_ngcontent-%COMP%] {padding-top: 150px;}\r\n.p-t-151[_ngcontent-%COMP%] {padding-top: 151px;}\r\n.p-t-152[_ngcontent-%COMP%] {padding-top: 152px;}\r\n.p-t-153[_ngcontent-%COMP%] {padding-top: 153px;}\r\n.p-t-154[_ngcontent-%COMP%] {padding-top: 154px;}\r\n.p-t-155[_ngcontent-%COMP%] {padding-top: 155px;}\r\n.p-t-156[_ngcontent-%COMP%] {padding-top: 156px;}\r\n.p-t-157[_ngcontent-%COMP%] {padding-top: 157px;}\r\n.p-t-158[_ngcontent-%COMP%] {padding-top: 158px;}\r\n.p-t-159[_ngcontent-%COMP%] {padding-top: 159px;}\r\n.p-t-160[_ngcontent-%COMP%] {padding-top: 160px;}\r\n.p-t-161[_ngcontent-%COMP%] {padding-top: 161px;}\r\n.p-t-162[_ngcontent-%COMP%] {padding-top: 162px;}\r\n.p-t-163[_ngcontent-%COMP%] {padding-top: 163px;}\r\n.p-t-164[_ngcontent-%COMP%] {padding-top: 164px;}\r\n.p-t-165[_ngcontent-%COMP%] {padding-top: 165px;}\r\n.p-t-166[_ngcontent-%COMP%] {padding-top: 166px;}\r\n.p-t-167[_ngcontent-%COMP%] {padding-top: 167px;}\r\n.p-t-168[_ngcontent-%COMP%] {padding-top: 168px;}\r\n.p-t-169[_ngcontent-%COMP%] {padding-top: 169px;}\r\n.p-t-170[_ngcontent-%COMP%] {padding-top: 170px;}\r\n.p-t-171[_ngcontent-%COMP%] {padding-top: 171px;}\r\n.p-t-172[_ngcontent-%COMP%] {padding-top: 172px;}\r\n.p-t-173[_ngcontent-%COMP%] {padding-top: 173px;}\r\n.p-t-174[_ngcontent-%COMP%] {padding-top: 174px;}\r\n.p-t-175[_ngcontent-%COMP%] {padding-top: 175px;}\r\n.p-t-176[_ngcontent-%COMP%] {padding-top: 176px;}\r\n.p-t-177[_ngcontent-%COMP%] {padding-top: 177px;}\r\n.p-t-178[_ngcontent-%COMP%] {padding-top: 178px;}\r\n.p-t-179[_ngcontent-%COMP%] {padding-top: 179px;}\r\n.p-t-180[_ngcontent-%COMP%] {padding-top: 180px;}\r\n.p-t-181[_ngcontent-%COMP%] {padding-top: 181px;}\r\n.p-t-182[_ngcontent-%COMP%] {padding-top: 182px;}\r\n.p-t-183[_ngcontent-%COMP%] {padding-top: 183px;}\r\n.p-t-184[_ngcontent-%COMP%] {padding-top: 184px;}\r\n.p-t-185[_ngcontent-%COMP%] {padding-top: 185px;}\r\n.p-t-186[_ngcontent-%COMP%] {padding-top: 186px;}\r\n.p-t-187[_ngcontent-%COMP%] {padding-top: 187px;}\r\n.p-t-188[_ngcontent-%COMP%] {padding-top: 188px;}\r\n.p-t-189[_ngcontent-%COMP%] {padding-top: 189px;}\r\n.p-t-190[_ngcontent-%COMP%] {padding-top: 190px;}\r\n.p-t-191[_ngcontent-%COMP%] {padding-top: 191px;}\r\n.p-t-192[_ngcontent-%COMP%] {padding-top: 192px;}\r\n.p-t-193[_ngcontent-%COMP%] {padding-top: 193px;}\r\n.p-t-194[_ngcontent-%COMP%] {padding-top: 194px;}\r\n.p-t-195[_ngcontent-%COMP%] {padding-top: 195px;}\r\n.p-t-196[_ngcontent-%COMP%] {padding-top: 196px;}\r\n.p-t-197[_ngcontent-%COMP%] {padding-top: 197px;}\r\n.p-t-198[_ngcontent-%COMP%] {padding-top: 198px;}\r\n.p-t-199[_ngcontent-%COMP%] {padding-top: 199px;}\r\n.p-t-200[_ngcontent-%COMP%] {padding-top: 200px;}\r\n.p-t-201[_ngcontent-%COMP%] {padding-top: 201px;}\r\n.p-t-202[_ngcontent-%COMP%] {padding-top: 202px;}\r\n.p-t-203[_ngcontent-%COMP%] {padding-top: 203px;}\r\n.p-t-204[_ngcontent-%COMP%] {padding-top: 204px;}\r\n.p-t-205[_ngcontent-%COMP%] {padding-top: 205px;}\r\n.p-t-206[_ngcontent-%COMP%] {padding-top: 206px;}\r\n.p-t-207[_ngcontent-%COMP%] {padding-top: 207px;}\r\n.p-t-208[_ngcontent-%COMP%] {padding-top: 208px;}\r\n.p-t-209[_ngcontent-%COMP%] {padding-top: 209px;}\r\n.p-t-210[_ngcontent-%COMP%] {padding-top: 210px;}\r\n.p-t-211[_ngcontent-%COMP%] {padding-top: 211px;}\r\n.p-t-212[_ngcontent-%COMP%] {padding-top: 212px;}\r\n.p-t-213[_ngcontent-%COMP%] {padding-top: 213px;}\r\n.p-t-214[_ngcontent-%COMP%] {padding-top: 214px;}\r\n.p-t-215[_ngcontent-%COMP%] {padding-top: 215px;}\r\n.p-t-216[_ngcontent-%COMP%] {padding-top: 216px;}\r\n.p-t-217[_ngcontent-%COMP%] {padding-top: 217px;}\r\n.p-t-218[_ngcontent-%COMP%] {padding-top: 218px;}\r\n.p-t-219[_ngcontent-%COMP%] {padding-top: 219px;}\r\n.p-t-220[_ngcontent-%COMP%] {padding-top: 220px;}\r\n.p-t-221[_ngcontent-%COMP%] {padding-top: 221px;}\r\n.p-t-222[_ngcontent-%COMP%] {padding-top: 222px;}\r\n.p-t-223[_ngcontent-%COMP%] {padding-top: 223px;}\r\n.p-t-224[_ngcontent-%COMP%] {padding-top: 224px;}\r\n.p-t-225[_ngcontent-%COMP%] {padding-top: 225px;}\r\n.p-t-226[_ngcontent-%COMP%] {padding-top: 226px;}\r\n.p-t-227[_ngcontent-%COMP%] {padding-top: 227px;}\r\n.p-t-228[_ngcontent-%COMP%] {padding-top: 228px;}\r\n.p-t-229[_ngcontent-%COMP%] {padding-top: 229px;}\r\n.p-t-230[_ngcontent-%COMP%] {padding-top: 230px;}\r\n.p-t-231[_ngcontent-%COMP%] {padding-top: 231px;}\r\n.p-t-232[_ngcontent-%COMP%] {padding-top: 232px;}\r\n.p-t-233[_ngcontent-%COMP%] {padding-top: 233px;}\r\n.p-t-234[_ngcontent-%COMP%] {padding-top: 234px;}\r\n.p-t-235[_ngcontent-%COMP%] {padding-top: 235px;}\r\n.p-t-236[_ngcontent-%COMP%] {padding-top: 236px;}\r\n.p-t-237[_ngcontent-%COMP%] {padding-top: 237px;}\r\n.p-t-238[_ngcontent-%COMP%] {padding-top: 238px;}\r\n.p-t-239[_ngcontent-%COMP%] {padding-top: 239px;}\r\n.p-t-240[_ngcontent-%COMP%] {padding-top: 240px;}\r\n.p-t-241[_ngcontent-%COMP%] {padding-top: 241px;}\r\n.p-t-242[_ngcontent-%COMP%] {padding-top: 242px;}\r\n.p-t-243[_ngcontent-%COMP%] {padding-top: 243px;}\r\n.p-t-244[_ngcontent-%COMP%] {padding-top: 244px;}\r\n.p-t-245[_ngcontent-%COMP%] {padding-top: 245px;}\r\n.p-t-246[_ngcontent-%COMP%] {padding-top: 246px;}\r\n.p-t-247[_ngcontent-%COMP%] {padding-top: 247px;}\r\n.p-t-248[_ngcontent-%COMP%] {padding-top: 248px;}\r\n.p-t-249[_ngcontent-%COMP%] {padding-top: 249px;}\r\n.p-t-250[_ngcontent-%COMP%] {padding-top: 250px;}\r\n.p-b-0[_ngcontent-%COMP%] {padding-bottom: 0px;}\r\n.p-b-1[_ngcontent-%COMP%] {padding-bottom: 1px;}\r\n.p-b-2[_ngcontent-%COMP%] {padding-bottom: 2px;}\r\n.p-b-3[_ngcontent-%COMP%] {padding-bottom: 3px;}\r\n.p-b-4[_ngcontent-%COMP%] {padding-bottom: 4px;}\r\n.p-b-5[_ngcontent-%COMP%] {padding-bottom: 5px;}\r\n.p-b-6[_ngcontent-%COMP%] {padding-bottom: 6px;}\r\n.p-b-7[_ngcontent-%COMP%] {padding-bottom: 7px;}\r\n.p-b-8[_ngcontent-%COMP%] {padding-bottom: 8px;}\r\n.p-b-9[_ngcontent-%COMP%] {padding-bottom: 9px;}\r\n.p-b-10[_ngcontent-%COMP%] {padding-bottom: 10px;}\r\n.p-b-11[_ngcontent-%COMP%] {padding-bottom: 11px;}\r\n.p-b-12[_ngcontent-%COMP%] {padding-bottom: 12px;}\r\n.p-b-13[_ngcontent-%COMP%] {padding-bottom: 13px;}\r\n.p-b-14[_ngcontent-%COMP%] {padding-bottom: 14px;}\r\n.p-b-15[_ngcontent-%COMP%] {padding-bottom: 15px;}\r\n.p-b-16[_ngcontent-%COMP%] {padding-bottom: 16px;}\r\n.p-b-17[_ngcontent-%COMP%] {padding-bottom: 17px;}\r\n.p-b-18[_ngcontent-%COMP%] {padding-bottom: 18px;}\r\n.p-b-19[_ngcontent-%COMP%] {padding-bottom: 19px;}\r\n.p-b-20[_ngcontent-%COMP%] {padding-bottom: 20px;}\r\n.p-b-21[_ngcontent-%COMP%] {padding-bottom: 21px;}\r\n.p-b-22[_ngcontent-%COMP%] {padding-bottom: 22px;}\r\n.p-b-23[_ngcontent-%COMP%] {padding-bottom: 23px;}\r\n.p-b-24[_ngcontent-%COMP%] {padding-bottom: 24px;}\r\n.p-b-25[_ngcontent-%COMP%] {padding-bottom: 25px;}\r\n.p-b-26[_ngcontent-%COMP%] {padding-bottom: 26px;}\r\n.p-b-27[_ngcontent-%COMP%] {padding-bottom: 27px;}\r\n.p-b-28[_ngcontent-%COMP%] {padding-bottom: 28px;}\r\n.p-b-29[_ngcontent-%COMP%] {padding-bottom: 29px;}\r\n.p-b-30[_ngcontent-%COMP%] {padding-bottom: 30px;}\r\n.p-b-31[_ngcontent-%COMP%] {padding-bottom: 31px;}\r\n.p-b-32[_ngcontent-%COMP%] {padding-bottom: 32px;}\r\n.p-b-33[_ngcontent-%COMP%] {padding-bottom: 33px;}\r\n.p-b-34[_ngcontent-%COMP%] {padding-bottom: 34px;}\r\n.p-b-35[_ngcontent-%COMP%] {padding-bottom: 35px;}\r\n.p-b-36[_ngcontent-%COMP%] {padding-bottom: 36px;}\r\n.p-b-37[_ngcontent-%COMP%] {padding-bottom: 37px;}\r\n.p-b-38[_ngcontent-%COMP%] {padding-bottom: 38px;}\r\n.p-b-39[_ngcontent-%COMP%] {padding-bottom: 39px;}\r\n.p-b-40[_ngcontent-%COMP%] {padding-bottom: 40px;}\r\n.p-b-41[_ngcontent-%COMP%] {padding-bottom: 41px;}\r\n.p-b-42[_ngcontent-%COMP%] {padding-bottom: 42px;}\r\n.p-b-43[_ngcontent-%COMP%] {padding-bottom: 43px;}\r\n.p-b-44[_ngcontent-%COMP%] {padding-bottom: 44px;}\r\n.p-b-45[_ngcontent-%COMP%] {padding-bottom: 45px;}\r\n.p-b-46[_ngcontent-%COMP%] {padding-bottom: 46px;}\r\n.p-b-47[_ngcontent-%COMP%] {padding-bottom: 47px;}\r\n.p-b-48[_ngcontent-%COMP%] {padding-bottom: 48px;}\r\n.p-b-49[_ngcontent-%COMP%] {padding-bottom: 49px;}\r\n.p-b-50[_ngcontent-%COMP%] {padding-bottom: 50px;}\r\n.p-b-51[_ngcontent-%COMP%] {padding-bottom: 51px;}\r\n.p-b-52[_ngcontent-%COMP%] {padding-bottom: 52px;}\r\n.p-b-53[_ngcontent-%COMP%] {padding-bottom: 53px;}\r\n.p-b-54[_ngcontent-%COMP%] {padding-bottom: 54px;}\r\n.p-b-55[_ngcontent-%COMP%] {padding-bottom: 55px;}\r\n.p-b-56[_ngcontent-%COMP%] {padding-bottom: 56px;}\r\n.p-b-57[_ngcontent-%COMP%] {padding-bottom: 57px;}\r\n.p-b-58[_ngcontent-%COMP%] {padding-bottom: 58px;}\r\n.p-b-59[_ngcontent-%COMP%] {padding-bottom: 59px;}\r\n.p-b-60[_ngcontent-%COMP%] {padding-bottom: 60px;}\r\n.p-b-61[_ngcontent-%COMP%] {padding-bottom: 61px;}\r\n.p-b-62[_ngcontent-%COMP%] {padding-bottom: 62px;}\r\n.p-b-63[_ngcontent-%COMP%] {padding-bottom: 63px;}\r\n.p-b-64[_ngcontent-%COMP%] {padding-bottom: 64px;}\r\n.p-b-65[_ngcontent-%COMP%] {padding-bottom: 65px;}\r\n.p-b-66[_ngcontent-%COMP%] {padding-bottom: 66px;}\r\n.p-b-67[_ngcontent-%COMP%] {padding-bottom: 67px;}\r\n.p-b-68[_ngcontent-%COMP%] {padding-bottom: 68px;}\r\n.p-b-69[_ngcontent-%COMP%] {padding-bottom: 69px;}\r\n.p-b-70[_ngcontent-%COMP%] {padding-bottom: 70px;}\r\n.p-b-71[_ngcontent-%COMP%] {padding-bottom: 71px;}\r\n.p-b-72[_ngcontent-%COMP%] {padding-bottom: 72px;}\r\n.p-b-73[_ngcontent-%COMP%] {padding-bottom: 73px;}\r\n.p-b-74[_ngcontent-%COMP%] {padding-bottom: 74px;}\r\n.p-b-75[_ngcontent-%COMP%] {padding-bottom: 75px;}\r\n.p-b-76[_ngcontent-%COMP%] {padding-bottom: 76px;}\r\n.p-b-77[_ngcontent-%COMP%] {padding-bottom: 77px;}\r\n.p-b-78[_ngcontent-%COMP%] {padding-bottom: 78px;}\r\n.p-b-79[_ngcontent-%COMP%] {padding-bottom: 79px;}\r\n.p-b-80[_ngcontent-%COMP%] {padding-bottom: 80px;}\r\n.p-b-81[_ngcontent-%COMP%] {padding-bottom: 81px;}\r\n.p-b-82[_ngcontent-%COMP%] {padding-bottom: 82px;}\r\n.p-b-83[_ngcontent-%COMP%] {padding-bottom: 83px;}\r\n.p-b-84[_ngcontent-%COMP%] {padding-bottom: 84px;}\r\n.p-b-85[_ngcontent-%COMP%] {padding-bottom: 85px;}\r\n.p-b-86[_ngcontent-%COMP%] {padding-bottom: 86px;}\r\n.p-b-87[_ngcontent-%COMP%] {padding-bottom: 87px;}\r\n.p-b-88[_ngcontent-%COMP%] {padding-bottom: 88px;}\r\n.p-b-89[_ngcontent-%COMP%] {padding-bottom: 89px;}\r\n.p-b-90[_ngcontent-%COMP%] {padding-bottom: 90px;}\r\n.p-b-91[_ngcontent-%COMP%] {padding-bottom: 91px;}\r\n.p-b-92[_ngcontent-%COMP%] {padding-bottom: 92px;}\r\n.p-b-93[_ngcontent-%COMP%] {padding-bottom: 93px;}\r\n.p-b-94[_ngcontent-%COMP%] {padding-bottom: 94px;}\r\n.p-b-95[_ngcontent-%COMP%] {padding-bottom: 95px;}\r\n.p-b-96[_ngcontent-%COMP%] {padding-bottom: 96px;}\r\n.p-b-97[_ngcontent-%COMP%] {padding-bottom: 97px;}\r\n.p-b-98[_ngcontent-%COMP%] {padding-bottom: 98px;}\r\n.p-b-99[_ngcontent-%COMP%] {padding-bottom: 99px;}\r\n.p-b-100[_ngcontent-%COMP%] {padding-bottom: 100px;}\r\n.p-b-101[_ngcontent-%COMP%] {padding-bottom: 101px;}\r\n.p-b-102[_ngcontent-%COMP%] {padding-bottom: 102px;}\r\n.p-b-103[_ngcontent-%COMP%] {padding-bottom: 103px;}\r\n.p-b-104[_ngcontent-%COMP%] {padding-bottom: 104px;}\r\n.p-b-105[_ngcontent-%COMP%] {padding-bottom: 105px;}\r\n.p-b-106[_ngcontent-%COMP%] {padding-bottom: 106px;}\r\n.p-b-107[_ngcontent-%COMP%] {padding-bottom: 107px;}\r\n.p-b-108[_ngcontent-%COMP%] {padding-bottom: 108px;}\r\n.p-b-109[_ngcontent-%COMP%] {padding-bottom: 109px;}\r\n.p-b-110[_ngcontent-%COMP%] {padding-bottom: 110px;}\r\n.p-b-111[_ngcontent-%COMP%] {padding-bottom: 111px;}\r\n.p-b-112[_ngcontent-%COMP%] {padding-bottom: 112px;}\r\n.p-b-113[_ngcontent-%COMP%] {padding-bottom: 113px;}\r\n.p-b-114[_ngcontent-%COMP%] {padding-bottom: 114px;}\r\n.p-b-115[_ngcontent-%COMP%] {padding-bottom: 115px;}\r\n.p-b-116[_ngcontent-%COMP%] {padding-bottom: 116px;}\r\n.p-b-117[_ngcontent-%COMP%] {padding-bottom: 117px;}\r\n.p-b-118[_ngcontent-%COMP%] {padding-bottom: 118px;}\r\n.p-b-119[_ngcontent-%COMP%] {padding-bottom: 119px;}\r\n.p-b-120[_ngcontent-%COMP%] {padding-bottom: 120px;}\r\n.p-b-121[_ngcontent-%COMP%] {padding-bottom: 121px;}\r\n.p-b-122[_ngcontent-%COMP%] {padding-bottom: 122px;}\r\n.p-b-123[_ngcontent-%COMP%] {padding-bottom: 123px;}\r\n.p-b-124[_ngcontent-%COMP%] {padding-bottom: 124px;}\r\n.p-b-125[_ngcontent-%COMP%] {padding-bottom: 125px;}\r\n.p-b-126[_ngcontent-%COMP%] {padding-bottom: 126px;}\r\n.p-b-127[_ngcontent-%COMP%] {padding-bottom: 127px;}\r\n.p-b-128[_ngcontent-%COMP%] {padding-bottom: 128px;}\r\n.p-b-129[_ngcontent-%COMP%] {padding-bottom: 129px;}\r\n.p-b-130[_ngcontent-%COMP%] {padding-bottom: 130px;}\r\n.p-b-131[_ngcontent-%COMP%] {padding-bottom: 131px;}\r\n.p-b-132[_ngcontent-%COMP%] {padding-bottom: 132px;}\r\n.p-b-133[_ngcontent-%COMP%] {padding-bottom: 133px;}\r\n.p-b-134[_ngcontent-%COMP%] {padding-bottom: 134px;}\r\n.p-b-135[_ngcontent-%COMP%] {padding-bottom: 135px;}\r\n.p-b-136[_ngcontent-%COMP%] {padding-bottom: 136px;}\r\n.p-b-137[_ngcontent-%COMP%] {padding-bottom: 137px;}\r\n.p-b-138[_ngcontent-%COMP%] {padding-bottom: 138px;}\r\n.p-b-139[_ngcontent-%COMP%] {padding-bottom: 139px;}\r\n.p-b-140[_ngcontent-%COMP%] {padding-bottom: 140px;}\r\n.p-b-141[_ngcontent-%COMP%] {padding-bottom: 141px;}\r\n.p-b-142[_ngcontent-%COMP%] {padding-bottom: 142px;}\r\n.p-b-143[_ngcontent-%COMP%] {padding-bottom: 143px;}\r\n.p-b-144[_ngcontent-%COMP%] {padding-bottom: 144px;}\r\n.p-b-145[_ngcontent-%COMP%] {padding-bottom: 145px;}\r\n.p-b-146[_ngcontent-%COMP%] {padding-bottom: 146px;}\r\n.p-b-147[_ngcontent-%COMP%] {padding-bottom: 147px;}\r\n.p-b-148[_ngcontent-%COMP%] {padding-bottom: 148px;}\r\n.p-b-149[_ngcontent-%COMP%] {padding-bottom: 149px;}\r\n.p-b-150[_ngcontent-%COMP%] {padding-bottom: 150px;}\r\n.p-b-151[_ngcontent-%COMP%] {padding-bottom: 151px;}\r\n.p-b-152[_ngcontent-%COMP%] {padding-bottom: 152px;}\r\n.p-b-153[_ngcontent-%COMP%] {padding-bottom: 153px;}\r\n.p-b-154[_ngcontent-%COMP%] {padding-bottom: 154px;}\r\n.p-b-155[_ngcontent-%COMP%] {padding-bottom: 155px;}\r\n.p-b-156[_ngcontent-%COMP%] {padding-bottom: 156px;}\r\n.p-b-157[_ngcontent-%COMP%] {padding-bottom: 157px;}\r\n.p-b-158[_ngcontent-%COMP%] {padding-bottom: 158px;}\r\n.p-b-159[_ngcontent-%COMP%] {padding-bottom: 159px;}\r\n.p-b-160[_ngcontent-%COMP%] {padding-bottom: 160px;}\r\n.p-b-161[_ngcontent-%COMP%] {padding-bottom: 161px;}\r\n.p-b-162[_ngcontent-%COMP%] {padding-bottom: 162px;}\r\n.p-b-163[_ngcontent-%COMP%] {padding-bottom: 163px;}\r\n.p-b-164[_ngcontent-%COMP%] {padding-bottom: 164px;}\r\n.p-b-165[_ngcontent-%COMP%] {padding-bottom: 165px;}\r\n.p-b-166[_ngcontent-%COMP%] {padding-bottom: 166px;}\r\n.p-b-167[_ngcontent-%COMP%] {padding-bottom: 167px;}\r\n.p-b-168[_ngcontent-%COMP%] {padding-bottom: 168px;}\r\n.p-b-169[_ngcontent-%COMP%] {padding-bottom: 169px;}\r\n.p-b-170[_ngcontent-%COMP%] {padding-bottom: 170px;}\r\n.p-b-171[_ngcontent-%COMP%] {padding-bottom: 171px;}\r\n.p-b-172[_ngcontent-%COMP%] {padding-bottom: 172px;}\r\n.p-b-173[_ngcontent-%COMP%] {padding-bottom: 173px;}\r\n.p-b-174[_ngcontent-%COMP%] {padding-bottom: 174px;}\r\n.p-b-175[_ngcontent-%COMP%] {padding-bottom: 175px;}\r\n.p-b-176[_ngcontent-%COMP%] {padding-bottom: 176px;}\r\n.p-b-177[_ngcontent-%COMP%] {padding-bottom: 177px;}\r\n.p-b-178[_ngcontent-%COMP%] {padding-bottom: 178px;}\r\n.p-b-179[_ngcontent-%COMP%] {padding-bottom: 179px;}\r\n.p-b-180[_ngcontent-%COMP%] {padding-bottom: 180px;}\r\n.p-b-181[_ngcontent-%COMP%] {padding-bottom: 181px;}\r\n.p-b-182[_ngcontent-%COMP%] {padding-bottom: 182px;}\r\n.p-b-183[_ngcontent-%COMP%] {padding-bottom: 183px;}\r\n.p-b-184[_ngcontent-%COMP%] {padding-bottom: 184px;}\r\n.p-b-185[_ngcontent-%COMP%] {padding-bottom: 185px;}\r\n.p-b-186[_ngcontent-%COMP%] {padding-bottom: 186px;}\r\n.p-b-187[_ngcontent-%COMP%] {padding-bottom: 187px;}\r\n.p-b-188[_ngcontent-%COMP%] {padding-bottom: 188px;}\r\n.p-b-189[_ngcontent-%COMP%] {padding-bottom: 189px;}\r\n.p-b-190[_ngcontent-%COMP%] {padding-bottom: 190px;}\r\n.p-b-191[_ngcontent-%COMP%] {padding-bottom: 191px;}\r\n.p-b-192[_ngcontent-%COMP%] {padding-bottom: 192px;}\r\n.p-b-193[_ngcontent-%COMP%] {padding-bottom: 193px;}\r\n.p-b-194[_ngcontent-%COMP%] {padding-bottom: 194px;}\r\n.p-b-195[_ngcontent-%COMP%] {padding-bottom: 195px;}\r\n.p-b-196[_ngcontent-%COMP%] {padding-bottom: 196px;}\r\n.p-b-197[_ngcontent-%COMP%] {padding-bottom: 197px;}\r\n.p-b-198[_ngcontent-%COMP%] {padding-bottom: 198px;}\r\n.p-b-199[_ngcontent-%COMP%] {padding-bottom: 199px;}\r\n.p-b-200[_ngcontent-%COMP%] {padding-bottom: 200px;}\r\n.p-b-201[_ngcontent-%COMP%] {padding-bottom: 201px;}\r\n.p-b-202[_ngcontent-%COMP%] {padding-bottom: 202px;}\r\n.p-b-203[_ngcontent-%COMP%] {padding-bottom: 203px;}\r\n.p-b-204[_ngcontent-%COMP%] {padding-bottom: 204px;}\r\n.p-b-205[_ngcontent-%COMP%] {padding-bottom: 205px;}\r\n.p-b-206[_ngcontent-%COMP%] {padding-bottom: 206px;}\r\n.p-b-207[_ngcontent-%COMP%] {padding-bottom: 207px;}\r\n.p-b-208[_ngcontent-%COMP%] {padding-bottom: 208px;}\r\n.p-b-209[_ngcontent-%COMP%] {padding-bottom: 209px;}\r\n.p-b-210[_ngcontent-%COMP%] {padding-bottom: 210px;}\r\n.p-b-211[_ngcontent-%COMP%] {padding-bottom: 211px;}\r\n.p-b-212[_ngcontent-%COMP%] {padding-bottom: 212px;}\r\n.p-b-213[_ngcontent-%COMP%] {padding-bottom: 213px;}\r\n.p-b-214[_ngcontent-%COMP%] {padding-bottom: 214px;}\r\n.p-b-215[_ngcontent-%COMP%] {padding-bottom: 215px;}\r\n.p-b-216[_ngcontent-%COMP%] {padding-bottom: 216px;}\r\n.p-b-217[_ngcontent-%COMP%] {padding-bottom: 217px;}\r\n.p-b-218[_ngcontent-%COMP%] {padding-bottom: 218px;}\r\n.p-b-219[_ngcontent-%COMP%] {padding-bottom: 219px;}\r\n.p-b-220[_ngcontent-%COMP%] {padding-bottom: 220px;}\r\n.p-b-221[_ngcontent-%COMP%] {padding-bottom: 221px;}\r\n.p-b-222[_ngcontent-%COMP%] {padding-bottom: 222px;}\r\n.p-b-223[_ngcontent-%COMP%] {padding-bottom: 223px;}\r\n.p-b-224[_ngcontent-%COMP%] {padding-bottom: 224px;}\r\n.p-b-225[_ngcontent-%COMP%] {padding-bottom: 225px;}\r\n.p-b-226[_ngcontent-%COMP%] {padding-bottom: 226px;}\r\n.p-b-227[_ngcontent-%COMP%] {padding-bottom: 227px;}\r\n.p-b-228[_ngcontent-%COMP%] {padding-bottom: 228px;}\r\n.p-b-229[_ngcontent-%COMP%] {padding-bottom: 229px;}\r\n.p-b-230[_ngcontent-%COMP%] {padding-bottom: 230px;}\r\n.p-b-231[_ngcontent-%COMP%] {padding-bottom: 231px;}\r\n.p-b-232[_ngcontent-%COMP%] {padding-bottom: 232px;}\r\n.p-b-233[_ngcontent-%COMP%] {padding-bottom: 233px;}\r\n.p-b-234[_ngcontent-%COMP%] {padding-bottom: 234px;}\r\n.p-b-235[_ngcontent-%COMP%] {padding-bottom: 235px;}\r\n.p-b-236[_ngcontent-%COMP%] {padding-bottom: 236px;}\r\n.p-b-237[_ngcontent-%COMP%] {padding-bottom: 237px;}\r\n.p-b-238[_ngcontent-%COMP%] {padding-bottom: 238px;}\r\n.p-b-239[_ngcontent-%COMP%] {padding-bottom: 239px;}\r\n.p-b-240[_ngcontent-%COMP%] {padding-bottom: 240px;}\r\n.p-b-241[_ngcontent-%COMP%] {padding-bottom: 241px;}\r\n.p-b-242[_ngcontent-%COMP%] {padding-bottom: 242px;}\r\n.p-b-243[_ngcontent-%COMP%] {padding-bottom: 243px;}\r\n.p-b-244[_ngcontent-%COMP%] {padding-bottom: 244px;}\r\n.p-b-245[_ngcontent-%COMP%] {padding-bottom: 245px;}\r\n.p-b-246[_ngcontent-%COMP%] {padding-bottom: 246px;}\r\n.p-b-247[_ngcontent-%COMP%] {padding-bottom: 247px;}\r\n.p-b-248[_ngcontent-%COMP%] {padding-bottom: 248px;}\r\n.p-b-249[_ngcontent-%COMP%] {padding-bottom: 249px;}\r\n.p-b-250[_ngcontent-%COMP%] {padding-bottom: 250px;}\r\n.p-l-0[_ngcontent-%COMP%] {padding-left: 0px;}\r\n.p-l-1[_ngcontent-%COMP%] {padding-left: 1px;}\r\n.p-l-2[_ngcontent-%COMP%] {padding-left: 2px;}\r\n.p-l-3[_ngcontent-%COMP%] {padding-left: 3px;}\r\n.p-l-4[_ngcontent-%COMP%] {padding-left: 4px;}\r\n.p-l-5[_ngcontent-%COMP%] {padding-left: 5px;}\r\n.p-l-6[_ngcontent-%COMP%] {padding-left: 6px;}\r\n.p-l-7[_ngcontent-%COMP%] {padding-left: 7px;}\r\n.p-l-8[_ngcontent-%COMP%] {padding-left: 8px;}\r\n.p-l-9[_ngcontent-%COMP%] {padding-left: 9px;}\r\n.p-l-10[_ngcontent-%COMP%] {padding-left: 10px;}\r\n.p-l-11[_ngcontent-%COMP%] {padding-left: 11px;}\r\n.p-l-12[_ngcontent-%COMP%] {padding-left: 12px;}\r\n.p-l-13[_ngcontent-%COMP%] {padding-left: 13px;}\r\n.p-l-14[_ngcontent-%COMP%] {padding-left: 14px;}\r\n.p-l-15[_ngcontent-%COMP%] {padding-left: 15px;}\r\n.p-l-16[_ngcontent-%COMP%] {padding-left: 16px;}\r\n.p-l-17[_ngcontent-%COMP%] {padding-left: 17px;}\r\n.p-l-18[_ngcontent-%COMP%] {padding-left: 18px;}\r\n.p-l-19[_ngcontent-%COMP%] {padding-left: 19px;}\r\n.p-l-20[_ngcontent-%COMP%] {padding-left: 20px;}\r\n.p-l-21[_ngcontent-%COMP%] {padding-left: 21px;}\r\n.p-l-22[_ngcontent-%COMP%] {padding-left: 22px;}\r\n.p-l-23[_ngcontent-%COMP%] {padding-left: 23px;}\r\n.p-l-24[_ngcontent-%COMP%] {padding-left: 24px;}\r\n.p-l-25[_ngcontent-%COMP%] {padding-left: 25px;}\r\n.p-l-26[_ngcontent-%COMP%] {padding-left: 26px;}\r\n.p-l-27[_ngcontent-%COMP%] {padding-left: 27px;}\r\n.p-l-28[_ngcontent-%COMP%] {padding-left: 28px;}\r\n.p-l-29[_ngcontent-%COMP%] {padding-left: 29px;}\r\n.p-l-30[_ngcontent-%COMP%] {padding-left: 30px;}\r\n.p-l-31[_ngcontent-%COMP%] {padding-left: 31px;}\r\n.p-l-32[_ngcontent-%COMP%] {padding-left: 32px;}\r\n.p-l-33[_ngcontent-%COMP%] {padding-left: 33px;}\r\n.p-l-34[_ngcontent-%COMP%] {padding-left: 34px;}\r\n.p-l-35[_ngcontent-%COMP%] {padding-left: 35px;}\r\n.p-l-36[_ngcontent-%COMP%] {padding-left: 36px;}\r\n.p-l-37[_ngcontent-%COMP%] {padding-left: 37px;}\r\n.p-l-38[_ngcontent-%COMP%] {padding-left: 38px;}\r\n.p-l-39[_ngcontent-%COMP%] {padding-left: 39px;}\r\n.p-l-40[_ngcontent-%COMP%] {padding-left: 40px;}\r\n.p-l-41[_ngcontent-%COMP%] {padding-left: 41px;}\r\n.p-l-42[_ngcontent-%COMP%] {padding-left: 42px;}\r\n.p-l-43[_ngcontent-%COMP%] {padding-left: 43px;}\r\n.p-l-44[_ngcontent-%COMP%] {padding-left: 44px;}\r\n.p-l-45[_ngcontent-%COMP%] {padding-left: 45px;}\r\n.p-l-46[_ngcontent-%COMP%] {padding-left: 46px;}\r\n.p-l-47[_ngcontent-%COMP%] {padding-left: 47px;}\r\n.p-l-48[_ngcontent-%COMP%] {padding-left: 48px;}\r\n.p-l-49[_ngcontent-%COMP%] {padding-left: 49px;}\r\n.p-l-50[_ngcontent-%COMP%] {padding-left: 50px;}\r\n.p-l-51[_ngcontent-%COMP%] {padding-left: 51px;}\r\n.p-l-52[_ngcontent-%COMP%] {padding-left: 52px;}\r\n.p-l-53[_ngcontent-%COMP%] {padding-left: 53px;}\r\n.p-l-54[_ngcontent-%COMP%] {padding-left: 54px;}\r\n.p-l-55[_ngcontent-%COMP%] {padding-left: 55px;}\r\n.p-l-56[_ngcontent-%COMP%] {padding-left: 56px;}\r\n.p-l-57[_ngcontent-%COMP%] {padding-left: 57px;}\r\n.p-l-58[_ngcontent-%COMP%] {padding-left: 58px;}\r\n.p-l-59[_ngcontent-%COMP%] {padding-left: 59px;}\r\n.p-l-60[_ngcontent-%COMP%] {padding-left: 60px;}\r\n.p-l-61[_ngcontent-%COMP%] {padding-left: 61px;}\r\n.p-l-62[_ngcontent-%COMP%] {padding-left: 62px;}\r\n.p-l-63[_ngcontent-%COMP%] {padding-left: 63px;}\r\n.p-l-64[_ngcontent-%COMP%] {padding-left: 64px;}\r\n.p-l-65[_ngcontent-%COMP%] {padding-left: 65px;}\r\n.p-l-66[_ngcontent-%COMP%] {padding-left: 66px;}\r\n.p-l-67[_ngcontent-%COMP%] {padding-left: 67px;}\r\n.p-l-68[_ngcontent-%COMP%] {padding-left: 68px;}\r\n.p-l-69[_ngcontent-%COMP%] {padding-left: 69px;}\r\n.p-l-70[_ngcontent-%COMP%] {padding-left: 70px;}\r\n.p-l-71[_ngcontent-%COMP%] {padding-left: 71px;}\r\n.p-l-72[_ngcontent-%COMP%] {padding-left: 72px;}\r\n.p-l-73[_ngcontent-%COMP%] {padding-left: 73px;}\r\n.p-l-74[_ngcontent-%COMP%] {padding-left: 74px;}\r\n.p-l-75[_ngcontent-%COMP%] {padding-left: 75px;}\r\n.p-l-76[_ngcontent-%COMP%] {padding-left: 76px;}\r\n.p-l-77[_ngcontent-%COMP%] {padding-left: 77px;}\r\n.p-l-78[_ngcontent-%COMP%] {padding-left: 78px;}\r\n.p-l-79[_ngcontent-%COMP%] {padding-left: 79px;}\r\n.p-l-80[_ngcontent-%COMP%] {padding-left: 80px;}\r\n.p-l-81[_ngcontent-%COMP%] {padding-left: 81px;}\r\n.p-l-82[_ngcontent-%COMP%] {padding-left: 82px;}\r\n.p-l-83[_ngcontent-%COMP%] {padding-left: 83px;}\r\n.p-l-84[_ngcontent-%COMP%] {padding-left: 84px;}\r\n.p-l-85[_ngcontent-%COMP%] {padding-left: 85px;}\r\n.p-l-86[_ngcontent-%COMP%] {padding-left: 86px;}\r\n.p-l-87[_ngcontent-%COMP%] {padding-left: 87px;}\r\n.p-l-88[_ngcontent-%COMP%] {padding-left: 88px;}\r\n.p-l-89[_ngcontent-%COMP%] {padding-left: 89px;}\r\n.p-l-90[_ngcontent-%COMP%] {padding-left: 90px;}\r\n.p-l-91[_ngcontent-%COMP%] {padding-left: 91px;}\r\n.p-l-92[_ngcontent-%COMP%] {padding-left: 92px;}\r\n.p-l-93[_ngcontent-%COMP%] {padding-left: 93px;}\r\n.p-l-94[_ngcontent-%COMP%] {padding-left: 94px;}\r\n.p-l-95[_ngcontent-%COMP%] {padding-left: 95px;}\r\n.p-l-96[_ngcontent-%COMP%] {padding-left: 96px;}\r\n.p-l-97[_ngcontent-%COMP%] {padding-left: 97px;}\r\n.p-l-98[_ngcontent-%COMP%] {padding-left: 98px;}\r\n.p-l-99[_ngcontent-%COMP%] {padding-left: 99px;}\r\n.p-l-100[_ngcontent-%COMP%] {padding-left: 100px;}\r\n.p-l-101[_ngcontent-%COMP%] {padding-left: 101px;}\r\n.p-l-102[_ngcontent-%COMP%] {padding-left: 102px;}\r\n.p-l-103[_ngcontent-%COMP%] {padding-left: 103px;}\r\n.p-l-104[_ngcontent-%COMP%] {padding-left: 104px;}\r\n.p-l-105[_ngcontent-%COMP%] {padding-left: 105px;}\r\n.p-l-106[_ngcontent-%COMP%] {padding-left: 106px;}\r\n.p-l-107[_ngcontent-%COMP%] {padding-left: 107px;}\r\n.p-l-108[_ngcontent-%COMP%] {padding-left: 108px;}\r\n.p-l-109[_ngcontent-%COMP%] {padding-left: 109px;}\r\n.p-l-110[_ngcontent-%COMP%] {padding-left: 110px;}\r\n.p-l-111[_ngcontent-%COMP%] {padding-left: 111px;}\r\n.p-l-112[_ngcontent-%COMP%] {padding-left: 112px;}\r\n.p-l-113[_ngcontent-%COMP%] {padding-left: 113px;}\r\n.p-l-114[_ngcontent-%COMP%] {padding-left: 114px;}\r\n.p-l-115[_ngcontent-%COMP%] {padding-left: 115px;}\r\n.p-l-116[_ngcontent-%COMP%] {padding-left: 116px;}\r\n.p-l-117[_ngcontent-%COMP%] {padding-left: 117px;}\r\n.p-l-118[_ngcontent-%COMP%] {padding-left: 118px;}\r\n.p-l-119[_ngcontent-%COMP%] {padding-left: 119px;}\r\n.p-l-120[_ngcontent-%COMP%] {padding-left: 120px;}\r\n.p-l-121[_ngcontent-%COMP%] {padding-left: 121px;}\r\n.p-l-122[_ngcontent-%COMP%] {padding-left: 122px;}\r\n.p-l-123[_ngcontent-%COMP%] {padding-left: 123px;}\r\n.p-l-124[_ngcontent-%COMP%] {padding-left: 124px;}\r\n.p-l-125[_ngcontent-%COMP%] {padding-left: 125px;}\r\n.p-l-126[_ngcontent-%COMP%] {padding-left: 126px;}\r\n.p-l-127[_ngcontent-%COMP%] {padding-left: 127px;}\r\n.p-l-128[_ngcontent-%COMP%] {padding-left: 128px;}\r\n.p-l-129[_ngcontent-%COMP%] {padding-left: 129px;}\r\n.p-l-130[_ngcontent-%COMP%] {padding-left: 130px;}\r\n.p-l-131[_ngcontent-%COMP%] {padding-left: 131px;}\r\n.p-l-132[_ngcontent-%COMP%] {padding-left: 132px;}\r\n.p-l-133[_ngcontent-%COMP%] {padding-left: 133px;}\r\n.p-l-134[_ngcontent-%COMP%] {padding-left: 134px;}\r\n.p-l-135[_ngcontent-%COMP%] {padding-left: 135px;}\r\n.p-l-136[_ngcontent-%COMP%] {padding-left: 136px;}\r\n.p-l-137[_ngcontent-%COMP%] {padding-left: 137px;}\r\n.p-l-138[_ngcontent-%COMP%] {padding-left: 138px;}\r\n.p-l-139[_ngcontent-%COMP%] {padding-left: 139px;}\r\n.p-l-140[_ngcontent-%COMP%] {padding-left: 140px;}\r\n.p-l-141[_ngcontent-%COMP%] {padding-left: 141px;}\r\n.p-l-142[_ngcontent-%COMP%] {padding-left: 142px;}\r\n.p-l-143[_ngcontent-%COMP%] {padding-left: 143px;}\r\n.p-l-144[_ngcontent-%COMP%] {padding-left: 144px;}\r\n.p-l-145[_ngcontent-%COMP%] {padding-left: 145px;}\r\n.p-l-146[_ngcontent-%COMP%] {padding-left: 146px;}\r\n.p-l-147[_ngcontent-%COMP%] {padding-left: 147px;}\r\n.p-l-148[_ngcontent-%COMP%] {padding-left: 148px;}\r\n.p-l-149[_ngcontent-%COMP%] {padding-left: 149px;}\r\n.p-l-150[_ngcontent-%COMP%] {padding-left: 150px;}\r\n.p-l-151[_ngcontent-%COMP%] {padding-left: 151px;}\r\n.p-l-152[_ngcontent-%COMP%] {padding-left: 152px;}\r\n.p-l-153[_ngcontent-%COMP%] {padding-left: 153px;}\r\n.p-l-154[_ngcontent-%COMP%] {padding-left: 154px;}\r\n.p-l-155[_ngcontent-%COMP%] {padding-left: 155px;}\r\n.p-l-156[_ngcontent-%COMP%] {padding-left: 156px;}\r\n.p-l-157[_ngcontent-%COMP%] {padding-left: 157px;}\r\n.p-l-158[_ngcontent-%COMP%] {padding-left: 158px;}\r\n.p-l-159[_ngcontent-%COMP%] {padding-left: 159px;}\r\n.p-l-160[_ngcontent-%COMP%] {padding-left: 160px;}\r\n.p-l-161[_ngcontent-%COMP%] {padding-left: 161px;}\r\n.p-l-162[_ngcontent-%COMP%] {padding-left: 162px;}\r\n.p-l-163[_ngcontent-%COMP%] {padding-left: 163px;}\r\n.p-l-164[_ngcontent-%COMP%] {padding-left: 164px;}\r\n.p-l-165[_ngcontent-%COMP%] {padding-left: 165px;}\r\n.p-l-166[_ngcontent-%COMP%] {padding-left: 166px;}\r\n.p-l-167[_ngcontent-%COMP%] {padding-left: 167px;}\r\n.p-l-168[_ngcontent-%COMP%] {padding-left: 168px;}\r\n.p-l-169[_ngcontent-%COMP%] {padding-left: 169px;}\r\n.p-l-170[_ngcontent-%COMP%] {padding-left: 170px;}\r\n.p-l-171[_ngcontent-%COMP%] {padding-left: 171px;}\r\n.p-l-172[_ngcontent-%COMP%] {padding-left: 172px;}\r\n.p-l-173[_ngcontent-%COMP%] {padding-left: 173px;}\r\n.p-l-174[_ngcontent-%COMP%] {padding-left: 174px;}\r\n.p-l-175[_ngcontent-%COMP%] {padding-left: 175px;}\r\n.p-l-176[_ngcontent-%COMP%] {padding-left: 176px;}\r\n.p-l-177[_ngcontent-%COMP%] {padding-left: 177px;}\r\n.p-l-178[_ngcontent-%COMP%] {padding-left: 178px;}\r\n.p-l-179[_ngcontent-%COMP%] {padding-left: 179px;}\r\n.p-l-180[_ngcontent-%COMP%] {padding-left: 180px;}\r\n.p-l-181[_ngcontent-%COMP%] {padding-left: 181px;}\r\n.p-l-182[_ngcontent-%COMP%] {padding-left: 182px;}\r\n.p-l-183[_ngcontent-%COMP%] {padding-left: 183px;}\r\n.p-l-184[_ngcontent-%COMP%] {padding-left: 184px;}\r\n.p-l-185[_ngcontent-%COMP%] {padding-left: 185px;}\r\n.p-l-186[_ngcontent-%COMP%] {padding-left: 186px;}\r\n.p-l-187[_ngcontent-%COMP%] {padding-left: 187px;}\r\n.p-l-188[_ngcontent-%COMP%] {padding-left: 188px;}\r\n.p-l-189[_ngcontent-%COMP%] {padding-left: 189px;}\r\n.p-l-190[_ngcontent-%COMP%] {padding-left: 190px;}\r\n.p-l-191[_ngcontent-%COMP%] {padding-left: 191px;}\r\n.p-l-192[_ngcontent-%COMP%] {padding-left: 192px;}\r\n.p-l-193[_ngcontent-%COMP%] {padding-left: 193px;}\r\n.p-l-194[_ngcontent-%COMP%] {padding-left: 194px;}\r\n.p-l-195[_ngcontent-%COMP%] {padding-left: 195px;}\r\n.p-l-196[_ngcontent-%COMP%] {padding-left: 196px;}\r\n.p-l-197[_ngcontent-%COMP%] {padding-left: 197px;}\r\n.p-l-198[_ngcontent-%COMP%] {padding-left: 198px;}\r\n.p-l-199[_ngcontent-%COMP%] {padding-left: 199px;}\r\n.p-l-200[_ngcontent-%COMP%] {padding-left: 200px;}\r\n.p-l-201[_ngcontent-%COMP%] {padding-left: 201px;}\r\n.p-l-202[_ngcontent-%COMP%] {padding-left: 202px;}\r\n.p-l-203[_ngcontent-%COMP%] {padding-left: 203px;}\r\n.p-l-204[_ngcontent-%COMP%] {padding-left: 204px;}\r\n.p-l-205[_ngcontent-%COMP%] {padding-left: 205px;}\r\n.p-l-206[_ngcontent-%COMP%] {padding-left: 206px;}\r\n.p-l-207[_ngcontent-%COMP%] {padding-left: 207px;}\r\n.p-l-208[_ngcontent-%COMP%] {padding-left: 208px;}\r\n.p-l-209[_ngcontent-%COMP%] {padding-left: 209px;}\r\n.p-l-210[_ngcontent-%COMP%] {padding-left: 210px;}\r\n.p-l-211[_ngcontent-%COMP%] {padding-left: 211px;}\r\n.p-l-212[_ngcontent-%COMP%] {padding-left: 212px;}\r\n.p-l-213[_ngcontent-%COMP%] {padding-left: 213px;}\r\n.p-l-214[_ngcontent-%COMP%] {padding-left: 214px;}\r\n.p-l-215[_ngcontent-%COMP%] {padding-left: 215px;}\r\n.p-l-216[_ngcontent-%COMP%] {padding-left: 216px;}\r\n.p-l-217[_ngcontent-%COMP%] {padding-left: 217px;}\r\n.p-l-218[_ngcontent-%COMP%] {padding-left: 218px;}\r\n.p-l-219[_ngcontent-%COMP%] {padding-left: 219px;}\r\n.p-l-220[_ngcontent-%COMP%] {padding-left: 220px;}\r\n.p-l-221[_ngcontent-%COMP%] {padding-left: 221px;}\r\n.p-l-222[_ngcontent-%COMP%] {padding-left: 222px;}\r\n.p-l-223[_ngcontent-%COMP%] {padding-left: 223px;}\r\n.p-l-224[_ngcontent-%COMP%] {padding-left: 224px;}\r\n.p-l-225[_ngcontent-%COMP%] {padding-left: 225px;}\r\n.p-l-226[_ngcontent-%COMP%] {padding-left: 226px;}\r\n.p-l-227[_ngcontent-%COMP%] {padding-left: 227px;}\r\n.p-l-228[_ngcontent-%COMP%] {padding-left: 228px;}\r\n.p-l-229[_ngcontent-%COMP%] {padding-left: 229px;}\r\n.p-l-230[_ngcontent-%COMP%] {padding-left: 230px;}\r\n.p-l-231[_ngcontent-%COMP%] {padding-left: 231px;}\r\n.p-l-232[_ngcontent-%COMP%] {padding-left: 232px;}\r\n.p-l-233[_ngcontent-%COMP%] {padding-left: 233px;}\r\n.p-l-234[_ngcontent-%COMP%] {padding-left: 234px;}\r\n.p-l-235[_ngcontent-%COMP%] {padding-left: 235px;}\r\n.p-l-236[_ngcontent-%COMP%] {padding-left: 236px;}\r\n.p-l-237[_ngcontent-%COMP%] {padding-left: 237px;}\r\n.p-l-238[_ngcontent-%COMP%] {padding-left: 238px;}\r\n.p-l-239[_ngcontent-%COMP%] {padding-left: 239px;}\r\n.p-l-240[_ngcontent-%COMP%] {padding-left: 240px;}\r\n.p-l-241[_ngcontent-%COMP%] {padding-left: 241px;}\r\n.p-l-242[_ngcontent-%COMP%] {padding-left: 242px;}\r\n.p-l-243[_ngcontent-%COMP%] {padding-left: 243px;}\r\n.p-l-244[_ngcontent-%COMP%] {padding-left: 244px;}\r\n.p-l-245[_ngcontent-%COMP%] {padding-left: 245px;}\r\n.p-l-246[_ngcontent-%COMP%] {padding-left: 246px;}\r\n.p-l-247[_ngcontent-%COMP%] {padding-left: 247px;}\r\n.p-l-248[_ngcontent-%COMP%] {padding-left: 248px;}\r\n.p-l-249[_ngcontent-%COMP%] {padding-left: 249px;}\r\n.p-l-250[_ngcontent-%COMP%] {padding-left: 250px;}\r\n.p-r-0[_ngcontent-%COMP%] {padding-right: 0px;}\r\n.p-r-1[_ngcontent-%COMP%] {padding-right: 1px;}\r\n.p-r-2[_ngcontent-%COMP%] {padding-right: 2px;}\r\n.p-r-3[_ngcontent-%COMP%] {padding-right: 3px;}\r\n.p-r-4[_ngcontent-%COMP%] {padding-right: 4px;}\r\n.p-r-5[_ngcontent-%COMP%] {padding-right: 5px;}\r\n.p-r-6[_ngcontent-%COMP%] {padding-right: 6px;}\r\n.p-r-7[_ngcontent-%COMP%] {padding-right: 7px;}\r\n.p-r-8[_ngcontent-%COMP%] {padding-right: 8px;}\r\n.p-r-9[_ngcontent-%COMP%] {padding-right: 9px;}\r\n.p-r-10[_ngcontent-%COMP%] {padding-right: 10px;}\r\n.p-r-11[_ngcontent-%COMP%] {padding-right: 11px;}\r\n.p-r-12[_ngcontent-%COMP%] {padding-right: 12px;}\r\n.p-r-13[_ngcontent-%COMP%] {padding-right: 13px;}\r\n.p-r-14[_ngcontent-%COMP%] {padding-right: 14px;}\r\n.p-r-15[_ngcontent-%COMP%] {padding-right: 15px;}\r\n.p-r-16[_ngcontent-%COMP%] {padding-right: 16px;}\r\n.p-r-17[_ngcontent-%COMP%] {padding-right: 17px;}\r\n.p-r-18[_ngcontent-%COMP%] {padding-right: 18px;}\r\n.p-r-19[_ngcontent-%COMP%] {padding-right: 19px;}\r\n.p-r-20[_ngcontent-%COMP%] {padding-right: 20px;}\r\n.p-r-21[_ngcontent-%COMP%] {padding-right: 21px;}\r\n.p-r-22[_ngcontent-%COMP%] {padding-right: 22px;}\r\n.p-r-23[_ngcontent-%COMP%] {padding-right: 23px;}\r\n.p-r-24[_ngcontent-%COMP%] {padding-right: 24px;}\r\n.p-r-25[_ngcontent-%COMP%] {padding-right: 25px;}\r\n.p-r-26[_ngcontent-%COMP%] {padding-right: 26px;}\r\n.p-r-27[_ngcontent-%COMP%] {padding-right: 27px;}\r\n.p-r-28[_ngcontent-%COMP%] {padding-right: 28px;}\r\n.p-r-29[_ngcontent-%COMP%] {padding-right: 29px;}\r\n.p-r-30[_ngcontent-%COMP%] {padding-right: 30px;}\r\n.p-r-31[_ngcontent-%COMP%] {padding-right: 31px;}\r\n.p-r-32[_ngcontent-%COMP%] {padding-right: 32px;}\r\n.p-r-33[_ngcontent-%COMP%] {padding-right: 33px;}\r\n.p-r-34[_ngcontent-%COMP%] {padding-right: 34px;}\r\n.p-r-35[_ngcontent-%COMP%] {padding-right: 35px;}\r\n.p-r-36[_ngcontent-%COMP%] {padding-right: 36px;}\r\n.p-r-37[_ngcontent-%COMP%] {padding-right: 37px;}\r\n.p-r-38[_ngcontent-%COMP%] {padding-right: 38px;}\r\n.p-r-39[_ngcontent-%COMP%] {padding-right: 39px;}\r\n.p-r-40[_ngcontent-%COMP%] {padding-right: 40px;}\r\n.p-r-41[_ngcontent-%COMP%] {padding-right: 41px;}\r\n.p-r-42[_ngcontent-%COMP%] {padding-right: 42px;}\r\n.p-r-43[_ngcontent-%COMP%] {padding-right: 43px;}\r\n.p-r-44[_ngcontent-%COMP%] {padding-right: 44px;}\r\n.p-r-45[_ngcontent-%COMP%] {padding-right: 45px;}\r\n.p-r-46[_ngcontent-%COMP%] {padding-right: 46px;}\r\n.p-r-47[_ngcontent-%COMP%] {padding-right: 47px;}\r\n.p-r-48[_ngcontent-%COMP%] {padding-right: 48px;}\r\n.p-r-49[_ngcontent-%COMP%] {padding-right: 49px;}\r\n.p-r-50[_ngcontent-%COMP%] {padding-right: 50px;}\r\n.p-r-51[_ngcontent-%COMP%] {padding-right: 51px;}\r\n.p-r-52[_ngcontent-%COMP%] {padding-right: 52px;}\r\n.p-r-53[_ngcontent-%COMP%] {padding-right: 53px;}\r\n.p-r-54[_ngcontent-%COMP%] {padding-right: 54px;}\r\n.p-r-55[_ngcontent-%COMP%] {padding-right: 55px;}\r\n.p-r-56[_ngcontent-%COMP%] {padding-right: 56px;}\r\n.p-r-57[_ngcontent-%COMP%] {padding-right: 57px;}\r\n.p-r-58[_ngcontent-%COMP%] {padding-right: 58px;}\r\n.p-r-59[_ngcontent-%COMP%] {padding-right: 59px;}\r\n.p-r-60[_ngcontent-%COMP%] {padding-right: 60px;}\r\n.p-r-61[_ngcontent-%COMP%] {padding-right: 61px;}\r\n.p-r-62[_ngcontent-%COMP%] {padding-right: 62px;}\r\n.p-r-63[_ngcontent-%COMP%] {padding-right: 63px;}\r\n.p-r-64[_ngcontent-%COMP%] {padding-right: 64px;}\r\n.p-r-65[_ngcontent-%COMP%] {padding-right: 65px;}\r\n.p-r-66[_ngcontent-%COMP%] {padding-right: 66px;}\r\n.p-r-67[_ngcontent-%COMP%] {padding-right: 67px;}\r\n.p-r-68[_ngcontent-%COMP%] {padding-right: 68px;}\r\n.p-r-69[_ngcontent-%COMP%] {padding-right: 69px;}\r\n.p-r-70[_ngcontent-%COMP%] {padding-right: 70px;}\r\n.p-r-71[_ngcontent-%COMP%] {padding-right: 71px;}\r\n.p-r-72[_ngcontent-%COMP%] {padding-right: 72px;}\r\n.p-r-73[_ngcontent-%COMP%] {padding-right: 73px;}\r\n.p-r-74[_ngcontent-%COMP%] {padding-right: 74px;}\r\n.p-r-75[_ngcontent-%COMP%] {padding-right: 75px;}\r\n.p-r-76[_ngcontent-%COMP%] {padding-right: 76px;}\r\n.p-r-77[_ngcontent-%COMP%] {padding-right: 77px;}\r\n.p-r-78[_ngcontent-%COMP%] {padding-right: 78px;}\r\n.p-r-79[_ngcontent-%COMP%] {padding-right: 79px;}\r\n.p-r-80[_ngcontent-%COMP%] {padding-right: 80px;}\r\n.p-r-81[_ngcontent-%COMP%] {padding-right: 81px;}\r\n.p-r-82[_ngcontent-%COMP%] {padding-right: 82px;}\r\n.p-r-83[_ngcontent-%COMP%] {padding-right: 83px;}\r\n.p-r-84[_ngcontent-%COMP%] {padding-right: 84px;}\r\n.p-r-85[_ngcontent-%COMP%] {padding-right: 85px;}\r\n.p-r-86[_ngcontent-%COMP%] {padding-right: 86px;}\r\n.p-r-87[_ngcontent-%COMP%] {padding-right: 87px;}\r\n.p-r-88[_ngcontent-%COMP%] {padding-right: 88px;}\r\n.p-r-89[_ngcontent-%COMP%] {padding-right: 89px;}\r\n.p-r-90[_ngcontent-%COMP%] {padding-right: 90px;}\r\n.p-r-91[_ngcontent-%COMP%] {padding-right: 91px;}\r\n.p-r-92[_ngcontent-%COMP%] {padding-right: 92px;}\r\n.p-r-93[_ngcontent-%COMP%] {padding-right: 93px;}\r\n.p-r-94[_ngcontent-%COMP%] {padding-right: 94px;}\r\n.p-r-95[_ngcontent-%COMP%] {padding-right: 95px;}\r\n.p-r-96[_ngcontent-%COMP%] {padding-right: 96px;}\r\n.p-r-97[_ngcontent-%COMP%] {padding-right: 97px;}\r\n.p-r-98[_ngcontent-%COMP%] {padding-right: 98px;}\r\n.p-r-99[_ngcontent-%COMP%] {padding-right: 99px;}\r\n.p-r-100[_ngcontent-%COMP%] {padding-right: 100px;}\r\n.p-r-101[_ngcontent-%COMP%] {padding-right: 101px;}\r\n.p-r-102[_ngcontent-%COMP%] {padding-right: 102px;}\r\n.p-r-103[_ngcontent-%COMP%] {padding-right: 103px;}\r\n.p-r-104[_ngcontent-%COMP%] {padding-right: 104px;}\r\n.p-r-105[_ngcontent-%COMP%] {padding-right: 105px;}\r\n.p-r-106[_ngcontent-%COMP%] {padding-right: 106px;}\r\n.p-r-107[_ngcontent-%COMP%] {padding-right: 107px;}\r\n.p-r-108[_ngcontent-%COMP%] {padding-right: 108px;}\r\n.p-r-109[_ngcontent-%COMP%] {padding-right: 109px;}\r\n.p-r-110[_ngcontent-%COMP%] {padding-right: 110px;}\r\n.p-r-111[_ngcontent-%COMP%] {padding-right: 111px;}\r\n.p-r-112[_ngcontent-%COMP%] {padding-right: 112px;}\r\n.p-r-113[_ngcontent-%COMP%] {padding-right: 113px;}\r\n.p-r-114[_ngcontent-%COMP%] {padding-right: 114px;}\r\n.p-r-115[_ngcontent-%COMP%] {padding-right: 115px;}\r\n.p-r-116[_ngcontent-%COMP%] {padding-right: 116px;}\r\n.p-r-117[_ngcontent-%COMP%] {padding-right: 117px;}\r\n.p-r-118[_ngcontent-%COMP%] {padding-right: 118px;}\r\n.p-r-119[_ngcontent-%COMP%] {padding-right: 119px;}\r\n.p-r-120[_ngcontent-%COMP%] {padding-right: 120px;}\r\n.p-r-121[_ngcontent-%COMP%] {padding-right: 121px;}\r\n.p-r-122[_ngcontent-%COMP%] {padding-right: 122px;}\r\n.p-r-123[_ngcontent-%COMP%] {padding-right: 123px;}\r\n.p-r-124[_ngcontent-%COMP%] {padding-right: 124px;}\r\n.p-r-125[_ngcontent-%COMP%] {padding-right: 125px;}\r\n.p-r-126[_ngcontent-%COMP%] {padding-right: 126px;}\r\n.p-r-127[_ngcontent-%COMP%] {padding-right: 127px;}\r\n.p-r-128[_ngcontent-%COMP%] {padding-right: 128px;}\r\n.p-r-129[_ngcontent-%COMP%] {padding-right: 129px;}\r\n.p-r-130[_ngcontent-%COMP%] {padding-right: 130px;}\r\n.p-r-131[_ngcontent-%COMP%] {padding-right: 131px;}\r\n.p-r-132[_ngcontent-%COMP%] {padding-right: 132px;}\r\n.p-r-133[_ngcontent-%COMP%] {padding-right: 133px;}\r\n.p-r-134[_ngcontent-%COMP%] {padding-right: 134px;}\r\n.p-r-135[_ngcontent-%COMP%] {padding-right: 135px;}\r\n.p-r-136[_ngcontent-%COMP%] {padding-right: 136px;}\r\n.p-r-137[_ngcontent-%COMP%] {padding-right: 137px;}\r\n.p-r-138[_ngcontent-%COMP%] {padding-right: 138px;}\r\n.p-r-139[_ngcontent-%COMP%] {padding-right: 139px;}\r\n.p-r-140[_ngcontent-%COMP%] {padding-right: 140px;}\r\n.p-r-141[_ngcontent-%COMP%] {padding-right: 141px;}\r\n.p-r-142[_ngcontent-%COMP%] {padding-right: 142px;}\r\n.p-r-143[_ngcontent-%COMP%] {padding-right: 143px;}\r\n.p-r-144[_ngcontent-%COMP%] {padding-right: 144px;}\r\n.p-r-145[_ngcontent-%COMP%] {padding-right: 145px;}\r\n.p-r-146[_ngcontent-%COMP%] {padding-right: 146px;}\r\n.p-r-147[_ngcontent-%COMP%] {padding-right: 147px;}\r\n.p-r-148[_ngcontent-%COMP%] {padding-right: 148px;}\r\n.p-r-149[_ngcontent-%COMP%] {padding-right: 149px;}\r\n.p-r-150[_ngcontent-%COMP%] {padding-right: 150px;}\r\n.p-r-151[_ngcontent-%COMP%] {padding-right: 151px;}\r\n.p-r-152[_ngcontent-%COMP%] {padding-right: 152px;}\r\n.p-r-153[_ngcontent-%COMP%] {padding-right: 153px;}\r\n.p-r-154[_ngcontent-%COMP%] {padding-right: 154px;}\r\n.p-r-155[_ngcontent-%COMP%] {padding-right: 155px;}\r\n.p-r-156[_ngcontent-%COMP%] {padding-right: 156px;}\r\n.p-r-157[_ngcontent-%COMP%] {padding-right: 157px;}\r\n.p-r-158[_ngcontent-%COMP%] {padding-right: 158px;}\r\n.p-r-159[_ngcontent-%COMP%] {padding-right: 159px;}\r\n.p-r-160[_ngcontent-%COMP%] {padding-right: 160px;}\r\n.p-r-161[_ngcontent-%COMP%] {padding-right: 161px;}\r\n.p-r-162[_ngcontent-%COMP%] {padding-right: 162px;}\r\n.p-r-163[_ngcontent-%COMP%] {padding-right: 163px;}\r\n.p-r-164[_ngcontent-%COMP%] {padding-right: 164px;}\r\n.p-r-165[_ngcontent-%COMP%] {padding-right: 165px;}\r\n.p-r-166[_ngcontent-%COMP%] {padding-right: 166px;}\r\n.p-r-167[_ngcontent-%COMP%] {padding-right: 167px;}\r\n.p-r-168[_ngcontent-%COMP%] {padding-right: 168px;}\r\n.p-r-169[_ngcontent-%COMP%] {padding-right: 169px;}\r\n.p-r-170[_ngcontent-%COMP%] {padding-right: 170px;}\r\n.p-r-171[_ngcontent-%COMP%] {padding-right: 171px;}\r\n.p-r-172[_ngcontent-%COMP%] {padding-right: 172px;}\r\n.p-r-173[_ngcontent-%COMP%] {padding-right: 173px;}\r\n.p-r-174[_ngcontent-%COMP%] {padding-right: 174px;}\r\n.p-r-175[_ngcontent-%COMP%] {padding-right: 175px;}\r\n.p-r-176[_ngcontent-%COMP%] {padding-right: 176px;}\r\n.p-r-177[_ngcontent-%COMP%] {padding-right: 177px;}\r\n.p-r-178[_ngcontent-%COMP%] {padding-right: 178px;}\r\n.p-r-179[_ngcontent-%COMP%] {padding-right: 179px;}\r\n.p-r-180[_ngcontent-%COMP%] {padding-right: 180px;}\r\n.p-r-181[_ngcontent-%COMP%] {padding-right: 181px;}\r\n.p-r-182[_ngcontent-%COMP%] {padding-right: 182px;}\r\n.p-r-183[_ngcontent-%COMP%] {padding-right: 183px;}\r\n.p-r-184[_ngcontent-%COMP%] {padding-right: 184px;}\r\n.p-r-185[_ngcontent-%COMP%] {padding-right: 185px;}\r\n.p-r-186[_ngcontent-%COMP%] {padding-right: 186px;}\r\n.p-r-187[_ngcontent-%COMP%] {padding-right: 187px;}\r\n.p-r-188[_ngcontent-%COMP%] {padding-right: 188px;}\r\n.p-r-189[_ngcontent-%COMP%] {padding-right: 189px;}\r\n.p-r-190[_ngcontent-%COMP%] {padding-right: 190px;}\r\n.p-r-191[_ngcontent-%COMP%] {padding-right: 191px;}\r\n.p-r-192[_ngcontent-%COMP%] {padding-right: 192px;}\r\n.p-r-193[_ngcontent-%COMP%] {padding-right: 193px;}\r\n.p-r-194[_ngcontent-%COMP%] {padding-right: 194px;}\r\n.p-r-195[_ngcontent-%COMP%] {padding-right: 195px;}\r\n.p-r-196[_ngcontent-%COMP%] {padding-right: 196px;}\r\n.p-r-197[_ngcontent-%COMP%] {padding-right: 197px;}\r\n.p-r-198[_ngcontent-%COMP%] {padding-right: 198px;}\r\n.p-r-199[_ngcontent-%COMP%] {padding-right: 199px;}\r\n.p-r-200[_ngcontent-%COMP%] {padding-right: 200px;}\r\n.p-r-201[_ngcontent-%COMP%] {padding-right: 201px;}\r\n.p-r-202[_ngcontent-%COMP%] {padding-right: 202px;}\r\n.p-r-203[_ngcontent-%COMP%] {padding-right: 203px;}\r\n.p-r-204[_ngcontent-%COMP%] {padding-right: 204px;}\r\n.p-r-205[_ngcontent-%COMP%] {padding-right: 205px;}\r\n.p-r-206[_ngcontent-%COMP%] {padding-right: 206px;}\r\n.p-r-207[_ngcontent-%COMP%] {padding-right: 207px;}\r\n.p-r-208[_ngcontent-%COMP%] {padding-right: 208px;}\r\n.p-r-209[_ngcontent-%COMP%] {padding-right: 209px;}\r\n.p-r-210[_ngcontent-%COMP%] {padding-right: 210px;}\r\n.p-r-211[_ngcontent-%COMP%] {padding-right: 211px;}\r\n.p-r-212[_ngcontent-%COMP%] {padding-right: 212px;}\r\n.p-r-213[_ngcontent-%COMP%] {padding-right: 213px;}\r\n.p-r-214[_ngcontent-%COMP%] {padding-right: 214px;}\r\n.p-r-215[_ngcontent-%COMP%] {padding-right: 215px;}\r\n.p-r-216[_ngcontent-%COMP%] {padding-right: 216px;}\r\n.p-r-217[_ngcontent-%COMP%] {padding-right: 217px;}\r\n.p-r-218[_ngcontent-%COMP%] {padding-right: 218px;}\r\n.p-r-219[_ngcontent-%COMP%] {padding-right: 219px;}\r\n.p-r-220[_ngcontent-%COMP%] {padding-right: 220px;}\r\n.p-r-221[_ngcontent-%COMP%] {padding-right: 221px;}\r\n.p-r-222[_ngcontent-%COMP%] {padding-right: 222px;}\r\n.p-r-223[_ngcontent-%COMP%] {padding-right: 223px;}\r\n.p-r-224[_ngcontent-%COMP%] {padding-right: 224px;}\r\n.p-r-225[_ngcontent-%COMP%] {padding-right: 225px;}\r\n.p-r-226[_ngcontent-%COMP%] {padding-right: 226px;}\r\n.p-r-227[_ngcontent-%COMP%] {padding-right: 227px;}\r\n.p-r-228[_ngcontent-%COMP%] {padding-right: 228px;}\r\n.p-r-229[_ngcontent-%COMP%] {padding-right: 229px;}\r\n.p-r-230[_ngcontent-%COMP%] {padding-right: 230px;}\r\n.p-r-231[_ngcontent-%COMP%] {padding-right: 231px;}\r\n.p-r-232[_ngcontent-%COMP%] {padding-right: 232px;}\r\n.p-r-233[_ngcontent-%COMP%] {padding-right: 233px;}\r\n.p-r-234[_ngcontent-%COMP%] {padding-right: 234px;}\r\n.p-r-235[_ngcontent-%COMP%] {padding-right: 235px;}\r\n.p-r-236[_ngcontent-%COMP%] {padding-right: 236px;}\r\n.p-r-237[_ngcontent-%COMP%] {padding-right: 237px;}\r\n.p-r-238[_ngcontent-%COMP%] {padding-right: 238px;}\r\n.p-r-239[_ngcontent-%COMP%] {padding-right: 239px;}\r\n.p-r-240[_ngcontent-%COMP%] {padding-right: 240px;}\r\n.p-r-241[_ngcontent-%COMP%] {padding-right: 241px;}\r\n.p-r-242[_ngcontent-%COMP%] {padding-right: 242px;}\r\n.p-r-243[_ngcontent-%COMP%] {padding-right: 243px;}\r\n.p-r-244[_ngcontent-%COMP%] {padding-right: 244px;}\r\n.p-r-245[_ngcontent-%COMP%] {padding-right: 245px;}\r\n.p-r-246[_ngcontent-%COMP%] {padding-right: 246px;}\r\n.p-r-247[_ngcontent-%COMP%] {padding-right: 247px;}\r\n.p-r-248[_ngcontent-%COMP%] {padding-right: 248px;}\r\n.p-r-249[_ngcontent-%COMP%] {padding-right: 249px;}\r\n.p-r-250[_ngcontent-%COMP%] {padding-right: 250px;}\r\n\r\n.m-t-0[_ngcontent-%COMP%] {margin-top: 0px;}\r\n.m-t-1[_ngcontent-%COMP%] {margin-top: 1px;}\r\n.m-t-2[_ngcontent-%COMP%] {margin-top: 2px;}\r\n.m-t-3[_ngcontent-%COMP%] {margin-top: 3px;}\r\n.m-t-4[_ngcontent-%COMP%] {margin-top: 4px;}\r\n.m-t-5[_ngcontent-%COMP%] {margin-top: 5px;}\r\n.m-t-6[_ngcontent-%COMP%] {margin-top: 6px;}\r\n.m-t-7[_ngcontent-%COMP%] {margin-top: 7px;}\r\n.m-t-8[_ngcontent-%COMP%] {margin-top: 8px;}\r\n.m-t-9[_ngcontent-%COMP%] {margin-top: 9px;}\r\n.m-t-10[_ngcontent-%COMP%] {margin-top: 10px;}\r\n.m-t-11[_ngcontent-%COMP%] {margin-top: 11px;}\r\n.m-t-12[_ngcontent-%COMP%] {margin-top: 12px;}\r\n.m-t-13[_ngcontent-%COMP%] {margin-top: 13px;}\r\n.m-t-14[_ngcontent-%COMP%] {margin-top: 14px;}\r\n.m-t-15[_ngcontent-%COMP%] {margin-top: 15px;}\r\n.m-t-16[_ngcontent-%COMP%] {margin-top: 16px;}\r\n.m-t-17[_ngcontent-%COMP%] {margin-top: 17px;}\r\n.m-t-18[_ngcontent-%COMP%] {margin-top: 18px;}\r\n.m-t-19[_ngcontent-%COMP%] {margin-top: 19px;}\r\n.m-t-20[_ngcontent-%COMP%] {margin-top: 20px;}\r\n.m-t-21[_ngcontent-%COMP%] {margin-top: 21px;}\r\n.m-t-22[_ngcontent-%COMP%] {margin-top: 22px;}\r\n.m-t-23[_ngcontent-%COMP%] {margin-top: 23px;}\r\n.m-t-24[_ngcontent-%COMP%] {margin-top: 24px;}\r\n.m-t-25[_ngcontent-%COMP%] {margin-top: 25px;}\r\n.m-t-26[_ngcontent-%COMP%] {margin-top: 26px;}\r\n.m-t-27[_ngcontent-%COMP%] {margin-top: 27px;}\r\n.m-t-28[_ngcontent-%COMP%] {margin-top: 28px;}\r\n.m-t-29[_ngcontent-%COMP%] {margin-top: 29px;}\r\n.m-t-30[_ngcontent-%COMP%] {margin-top: 30px;}\r\n.m-t-31[_ngcontent-%COMP%] {margin-top: 31px;}\r\n.m-t-32[_ngcontent-%COMP%] {margin-top: 32px;}\r\n.m-t-33[_ngcontent-%COMP%] {margin-top: 33px;}\r\n.m-t-34[_ngcontent-%COMP%] {margin-top: 34px;}\r\n.m-t-35[_ngcontent-%COMP%] {margin-top: 35px;}\r\n.m-t-36[_ngcontent-%COMP%] {margin-top: 36px;}\r\n.m-t-37[_ngcontent-%COMP%] {margin-top: 37px;}\r\n.m-t-38[_ngcontent-%COMP%] {margin-top: 38px;}\r\n.m-t-39[_ngcontent-%COMP%] {margin-top: 39px;}\r\n.m-t-40[_ngcontent-%COMP%] {margin-top: 40px;}\r\n.m-t-41[_ngcontent-%COMP%] {margin-top: 41px;}\r\n.m-t-42[_ngcontent-%COMP%] {margin-top: 42px;}\r\n.m-t-43[_ngcontent-%COMP%] {margin-top: 43px;}\r\n.m-t-44[_ngcontent-%COMP%] {margin-top: 44px;}\r\n.m-t-45[_ngcontent-%COMP%] {margin-top: 45px;}\r\n.m-t-46[_ngcontent-%COMP%] {margin-top: 46px;}\r\n.m-t-47[_ngcontent-%COMP%] {margin-top: 47px;}\r\n.m-t-48[_ngcontent-%COMP%] {margin-top: 48px;}\r\n.m-t-49[_ngcontent-%COMP%] {margin-top: 49px;}\r\n.m-t-50[_ngcontent-%COMP%] {margin-top: 50px;}\r\n.m-t-51[_ngcontent-%COMP%] {margin-top: 51px;}\r\n.m-t-52[_ngcontent-%COMP%] {margin-top: 52px;}\r\n.m-t-53[_ngcontent-%COMP%] {margin-top: 53px;}\r\n.m-t-54[_ngcontent-%COMP%] {margin-top: 54px;}\r\n.m-t-55[_ngcontent-%COMP%] {margin-top: 55px;}\r\n.m-t-56[_ngcontent-%COMP%] {margin-top: 56px;}\r\n.m-t-57[_ngcontent-%COMP%] {margin-top: 57px;}\r\n.m-t-58[_ngcontent-%COMP%] {margin-top: 58px;}\r\n.m-t-59[_ngcontent-%COMP%] {margin-top: 59px;}\r\n.m-t-60[_ngcontent-%COMP%] {margin-top: 60px;}\r\n.m-t-61[_ngcontent-%COMP%] {margin-top: 61px;}\r\n.m-t-62[_ngcontent-%COMP%] {margin-top: 62px;}\r\n.m-t-63[_ngcontent-%COMP%] {margin-top: 63px;}\r\n.m-t-64[_ngcontent-%COMP%] {margin-top: 64px;}\r\n.m-t-65[_ngcontent-%COMP%] {margin-top: 65px;}\r\n.m-t-66[_ngcontent-%COMP%] {margin-top: 66px;}\r\n.m-t-67[_ngcontent-%COMP%] {margin-top: 67px;}\r\n.m-t-68[_ngcontent-%COMP%] {margin-top: 68px;}\r\n.m-t-69[_ngcontent-%COMP%] {margin-top: 69px;}\r\n.m-t-70[_ngcontent-%COMP%] {margin-top: 70px;}\r\n.m-t-71[_ngcontent-%COMP%] {margin-top: 71px;}\r\n.m-t-72[_ngcontent-%COMP%] {margin-top: 72px;}\r\n.m-t-73[_ngcontent-%COMP%] {margin-top: 73px;}\r\n.m-t-74[_ngcontent-%COMP%] {margin-top: 74px;}\r\n.m-t-75[_ngcontent-%COMP%] {margin-top: 75px;}\r\n.m-t-76[_ngcontent-%COMP%] {margin-top: 76px;}\r\n.m-t-77[_ngcontent-%COMP%] {margin-top: 77px;}\r\n.m-t-78[_ngcontent-%COMP%] {margin-top: 78px;}\r\n.m-t-79[_ngcontent-%COMP%] {margin-top: 79px;}\r\n.m-t-80[_ngcontent-%COMP%] {margin-top: 80px;}\r\n.m-t-81[_ngcontent-%COMP%] {margin-top: 81px;}\r\n.m-t-82[_ngcontent-%COMP%] {margin-top: 82px;}\r\n.m-t-83[_ngcontent-%COMP%] {margin-top: 83px;}\r\n.m-t-84[_ngcontent-%COMP%] {margin-top: 84px;}\r\n.m-t-85[_ngcontent-%COMP%] {margin-top: 85px;}\r\n.m-t-86[_ngcontent-%COMP%] {margin-top: 86px;}\r\n.m-t-87[_ngcontent-%COMP%] {margin-top: 87px;}\r\n.m-t-88[_ngcontent-%COMP%] {margin-top: 88px;}\r\n.m-t-89[_ngcontent-%COMP%] {margin-top: 89px;}\r\n.m-t-90[_ngcontent-%COMP%] {margin-top: 90px;}\r\n.m-t-91[_ngcontent-%COMP%] {margin-top: 91px;}\r\n.m-t-92[_ngcontent-%COMP%] {margin-top: 92px;}\r\n.m-t-93[_ngcontent-%COMP%] {margin-top: 93px;}\r\n.m-t-94[_ngcontent-%COMP%] {margin-top: 94px;}\r\n.m-t-95[_ngcontent-%COMP%] {margin-top: 95px;}\r\n.m-t-96[_ngcontent-%COMP%] {margin-top: 96px;}\r\n.m-t-97[_ngcontent-%COMP%] {margin-top: 97px;}\r\n.m-t-98[_ngcontent-%COMP%] {margin-top: 98px;}\r\n.m-t-99[_ngcontent-%COMP%] {margin-top: 99px;}\r\n.m-t-100[_ngcontent-%COMP%] {margin-top: 100px;}\r\n.m-t-101[_ngcontent-%COMP%] {margin-top: 101px;}\r\n.m-t-102[_ngcontent-%COMP%] {margin-top: 102px;}\r\n.m-t-103[_ngcontent-%COMP%] {margin-top: 103px;}\r\n.m-t-104[_ngcontent-%COMP%] {margin-top: 104px;}\r\n.m-t-105[_ngcontent-%COMP%] {margin-top: 105px;}\r\n.m-t-106[_ngcontent-%COMP%] {margin-top: 106px;}\r\n.m-t-107[_ngcontent-%COMP%] {margin-top: 107px;}\r\n.m-t-108[_ngcontent-%COMP%] {margin-top: 108px;}\r\n.m-t-109[_ngcontent-%COMP%] {margin-top: 109px;}\r\n.m-t-110[_ngcontent-%COMP%] {margin-top: 110px;}\r\n.m-t-111[_ngcontent-%COMP%] {margin-top: 111px;}\r\n.m-t-112[_ngcontent-%COMP%] {margin-top: 112px;}\r\n.m-t-113[_ngcontent-%COMP%] {margin-top: 113px;}\r\n.m-t-114[_ngcontent-%COMP%] {margin-top: 114px;}\r\n.m-t-115[_ngcontent-%COMP%] {margin-top: 115px;}\r\n.m-t-116[_ngcontent-%COMP%] {margin-top: 116px;}\r\n.m-t-117[_ngcontent-%COMP%] {margin-top: 117px;}\r\n.m-t-118[_ngcontent-%COMP%] {margin-top: 118px;}\r\n.m-t-119[_ngcontent-%COMP%] {margin-top: 119px;}\r\n.m-t-120[_ngcontent-%COMP%] {margin-top: 120px;}\r\n.m-t-121[_ngcontent-%COMP%] {margin-top: 121px;}\r\n.m-t-122[_ngcontent-%COMP%] {margin-top: 122px;}\r\n.m-t-123[_ngcontent-%COMP%] {margin-top: 123px;}\r\n.m-t-124[_ngcontent-%COMP%] {margin-top: 124px;}\r\n.m-t-125[_ngcontent-%COMP%] {margin-top: 125px;}\r\n.m-t-126[_ngcontent-%COMP%] {margin-top: 126px;}\r\n.m-t-127[_ngcontent-%COMP%] {margin-top: 127px;}\r\n.m-t-128[_ngcontent-%COMP%] {margin-top: 128px;}\r\n.m-t-129[_ngcontent-%COMP%] {margin-top: 129px;}\r\n.m-t-130[_ngcontent-%COMP%] {margin-top: 130px;}\r\n.m-t-131[_ngcontent-%COMP%] {margin-top: 131px;}\r\n.m-t-132[_ngcontent-%COMP%] {margin-top: 132px;}\r\n.m-t-133[_ngcontent-%COMP%] {margin-top: 133px;}\r\n.m-t-134[_ngcontent-%COMP%] {margin-top: 134px;}\r\n.m-t-135[_ngcontent-%COMP%] {margin-top: 135px;}\r\n.m-t-136[_ngcontent-%COMP%] {margin-top: 136px;}\r\n.m-t-137[_ngcontent-%COMP%] {margin-top: 137px;}\r\n.m-t-138[_ngcontent-%COMP%] {margin-top: 138px;}\r\n.m-t-139[_ngcontent-%COMP%] {margin-top: 139px;}\r\n.m-t-140[_ngcontent-%COMP%] {margin-top: 140px;}\r\n.m-t-141[_ngcontent-%COMP%] {margin-top: 141px;}\r\n.m-t-142[_ngcontent-%COMP%] {margin-top: 142px;}\r\n.m-t-143[_ngcontent-%COMP%] {margin-top: 143px;}\r\n.m-t-144[_ngcontent-%COMP%] {margin-top: 144px;}\r\n.m-t-145[_ngcontent-%COMP%] {margin-top: 145px;}\r\n.m-t-146[_ngcontent-%COMP%] {margin-top: 146px;}\r\n.m-t-147[_ngcontent-%COMP%] {margin-top: 147px;}\r\n.m-t-148[_ngcontent-%COMP%] {margin-top: 148px;}\r\n.m-t-149[_ngcontent-%COMP%] {margin-top: 149px;}\r\n.m-t-150[_ngcontent-%COMP%] {margin-top: 150px;}\r\n.m-t-151[_ngcontent-%COMP%] {margin-top: 151px;}\r\n.m-t-152[_ngcontent-%COMP%] {margin-top: 152px;}\r\n.m-t-153[_ngcontent-%COMP%] {margin-top: 153px;}\r\n.m-t-154[_ngcontent-%COMP%] {margin-top: 154px;}\r\n.m-t-155[_ngcontent-%COMP%] {margin-top: 155px;}\r\n.m-t-156[_ngcontent-%COMP%] {margin-top: 156px;}\r\n.m-t-157[_ngcontent-%COMP%] {margin-top: 157px;}\r\n.m-t-158[_ngcontent-%COMP%] {margin-top: 158px;}\r\n.m-t-159[_ngcontent-%COMP%] {margin-top: 159px;}\r\n.m-t-160[_ngcontent-%COMP%] {margin-top: 160px;}\r\n.m-t-161[_ngcontent-%COMP%] {margin-top: 161px;}\r\n.m-t-162[_ngcontent-%COMP%] {margin-top: 162px;}\r\n.m-t-163[_ngcontent-%COMP%] {margin-top: 163px;}\r\n.m-t-164[_ngcontent-%COMP%] {margin-top: 164px;}\r\n.m-t-165[_ngcontent-%COMP%] {margin-top: 165px;}\r\n.m-t-166[_ngcontent-%COMP%] {margin-top: 166px;}\r\n.m-t-167[_ngcontent-%COMP%] {margin-top: 167px;}\r\n.m-t-168[_ngcontent-%COMP%] {margin-top: 168px;}\r\n.m-t-169[_ngcontent-%COMP%] {margin-top: 169px;}\r\n.m-t-170[_ngcontent-%COMP%] {margin-top: 170px;}\r\n.m-t-171[_ngcontent-%COMP%] {margin-top: 171px;}\r\n.m-t-172[_ngcontent-%COMP%] {margin-top: 172px;}\r\n.m-t-173[_ngcontent-%COMP%] {margin-top: 173px;}\r\n.m-t-174[_ngcontent-%COMP%] {margin-top: 174px;}\r\n.m-t-175[_ngcontent-%COMP%] {margin-top: 175px;}\r\n.m-t-176[_ngcontent-%COMP%] {margin-top: 176px;}\r\n.m-t-177[_ngcontent-%COMP%] {margin-top: 177px;}\r\n.m-t-178[_ngcontent-%COMP%] {margin-top: 178px;}\r\n.m-t-179[_ngcontent-%COMP%] {margin-top: 179px;}\r\n.m-t-180[_ngcontent-%COMP%] {margin-top: 180px;}\r\n.m-t-181[_ngcontent-%COMP%] {margin-top: 181px;}\r\n.m-t-182[_ngcontent-%COMP%] {margin-top: 182px;}\r\n.m-t-183[_ngcontent-%COMP%] {margin-top: 183px;}\r\n.m-t-184[_ngcontent-%COMP%] {margin-top: 184px;}\r\n.m-t-185[_ngcontent-%COMP%] {margin-top: 185px;}\r\n.m-t-186[_ngcontent-%COMP%] {margin-top: 186px;}\r\n.m-t-187[_ngcontent-%COMP%] {margin-top: 187px;}\r\n.m-t-188[_ngcontent-%COMP%] {margin-top: 188px;}\r\n.m-t-189[_ngcontent-%COMP%] {margin-top: 189px;}\r\n.m-t-190[_ngcontent-%COMP%] {margin-top: 190px;}\r\n.m-t-191[_ngcontent-%COMP%] {margin-top: 191px;}\r\n.m-t-192[_ngcontent-%COMP%] {margin-top: 192px;}\r\n.m-t-193[_ngcontent-%COMP%] {margin-top: 193px;}\r\n.m-t-194[_ngcontent-%COMP%] {margin-top: 194px;}\r\n.m-t-195[_ngcontent-%COMP%] {margin-top: 195px;}\r\n.m-t-196[_ngcontent-%COMP%] {margin-top: 196px;}\r\n.m-t-197[_ngcontent-%COMP%] {margin-top: 197px;}\r\n.m-t-198[_ngcontent-%COMP%] {margin-top: 198px;}\r\n.m-t-199[_ngcontent-%COMP%] {margin-top: 199px;}\r\n.m-t-200[_ngcontent-%COMP%] {margin-top: 200px;}\r\n.m-t-201[_ngcontent-%COMP%] {margin-top: 201px;}\r\n.m-t-202[_ngcontent-%COMP%] {margin-top: 202px;}\r\n.m-t-203[_ngcontent-%COMP%] {margin-top: 203px;}\r\n.m-t-204[_ngcontent-%COMP%] {margin-top: 204px;}\r\n.m-t-205[_ngcontent-%COMP%] {margin-top: 205px;}\r\n.m-t-206[_ngcontent-%COMP%] {margin-top: 206px;}\r\n.m-t-207[_ngcontent-%COMP%] {margin-top: 207px;}\r\n.m-t-208[_ngcontent-%COMP%] {margin-top: 208px;}\r\n.m-t-209[_ngcontent-%COMP%] {margin-top: 209px;}\r\n.m-t-210[_ngcontent-%COMP%] {margin-top: 210px;}\r\n.m-t-211[_ngcontent-%COMP%] {margin-top: 211px;}\r\n.m-t-212[_ngcontent-%COMP%] {margin-top: 212px;}\r\n.m-t-213[_ngcontent-%COMP%] {margin-top: 213px;}\r\n.m-t-214[_ngcontent-%COMP%] {margin-top: 214px;}\r\n.m-t-215[_ngcontent-%COMP%] {margin-top: 215px;}\r\n.m-t-216[_ngcontent-%COMP%] {margin-top: 216px;}\r\n.m-t-217[_ngcontent-%COMP%] {margin-top: 217px;}\r\n.m-t-218[_ngcontent-%COMP%] {margin-top: 218px;}\r\n.m-t-219[_ngcontent-%COMP%] {margin-top: 219px;}\r\n.m-t-220[_ngcontent-%COMP%] {margin-top: 220px;}\r\n.m-t-221[_ngcontent-%COMP%] {margin-top: 221px;}\r\n.m-t-222[_ngcontent-%COMP%] {margin-top: 222px;}\r\n.m-t-223[_ngcontent-%COMP%] {margin-top: 223px;}\r\n.m-t-224[_ngcontent-%COMP%] {margin-top: 224px;}\r\n.m-t-225[_ngcontent-%COMP%] {margin-top: 225px;}\r\n.m-t-226[_ngcontent-%COMP%] {margin-top: 226px;}\r\n.m-t-227[_ngcontent-%COMP%] {margin-top: 227px;}\r\n.m-t-228[_ngcontent-%COMP%] {margin-top: 228px;}\r\n.m-t-229[_ngcontent-%COMP%] {margin-top: 229px;}\r\n.m-t-230[_ngcontent-%COMP%] {margin-top: 230px;}\r\n.m-t-231[_ngcontent-%COMP%] {margin-top: 231px;}\r\n.m-t-232[_ngcontent-%COMP%] {margin-top: 232px;}\r\n.m-t-233[_ngcontent-%COMP%] {margin-top: 233px;}\r\n.m-t-234[_ngcontent-%COMP%] {margin-top: 234px;}\r\n.m-t-235[_ngcontent-%COMP%] {margin-top: 235px;}\r\n.m-t-236[_ngcontent-%COMP%] {margin-top: 236px;}\r\n.m-t-237[_ngcontent-%COMP%] {margin-top: 237px;}\r\n.m-t-238[_ngcontent-%COMP%] {margin-top: 238px;}\r\n.m-t-239[_ngcontent-%COMP%] {margin-top: 239px;}\r\n.m-t-240[_ngcontent-%COMP%] {margin-top: 240px;}\r\n.m-t-241[_ngcontent-%COMP%] {margin-top: 241px;}\r\n.m-t-242[_ngcontent-%COMP%] {margin-top: 242px;}\r\n.m-t-243[_ngcontent-%COMP%] {margin-top: 243px;}\r\n.m-t-244[_ngcontent-%COMP%] {margin-top: 244px;}\r\n.m-t-245[_ngcontent-%COMP%] {margin-top: 245px;}\r\n.m-t-246[_ngcontent-%COMP%] {margin-top: 246px;}\r\n.m-t-247[_ngcontent-%COMP%] {margin-top: 247px;}\r\n.m-t-248[_ngcontent-%COMP%] {margin-top: 248px;}\r\n.m-t-249[_ngcontent-%COMP%] {margin-top: 249px;}\r\n.m-t-250[_ngcontent-%COMP%] {margin-top: 250px;}\r\n.m-b-0[_ngcontent-%COMP%] {margin-bottom: 0px;}\r\n.m-b-1[_ngcontent-%COMP%] {margin-bottom: 1px;}\r\n.m-b-2[_ngcontent-%COMP%] {margin-bottom: 2px;}\r\n.m-b-3[_ngcontent-%COMP%] {margin-bottom: 3px;}\r\n.m-b-4[_ngcontent-%COMP%] {margin-bottom: 4px;}\r\n.m-b-5[_ngcontent-%COMP%] {margin-bottom: 5px;}\r\n.m-b-6[_ngcontent-%COMP%] {margin-bottom: 6px;}\r\n.m-b-7[_ngcontent-%COMP%] {margin-bottom: 7px;}\r\n.m-b-8[_ngcontent-%COMP%] {margin-bottom: 8px;}\r\n.m-b-9[_ngcontent-%COMP%] {margin-bottom: 9px;}\r\n.m-b-10[_ngcontent-%COMP%] {margin-bottom: 10px;}\r\n.m-b-11[_ngcontent-%COMP%] {margin-bottom: 11px;}\r\n.m-b-12[_ngcontent-%COMP%] {margin-bottom: 12px;}\r\n.m-b-13[_ngcontent-%COMP%] {margin-bottom: 13px;}\r\n.m-b-14[_ngcontent-%COMP%] {margin-bottom: 14px;}\r\n.m-b-15[_ngcontent-%COMP%] {margin-bottom: 15px;}\r\n.m-b-16[_ngcontent-%COMP%] {margin-bottom: 16px;}\r\n.m-b-17[_ngcontent-%COMP%] {margin-bottom: 17px;}\r\n.m-b-18[_ngcontent-%COMP%] {margin-bottom: 18px;}\r\n.m-b-19[_ngcontent-%COMP%] {margin-bottom: 19px;}\r\n.m-b-20[_ngcontent-%COMP%] {margin-bottom: 20px;}\r\n.m-b-21[_ngcontent-%COMP%] {margin-bottom: 21px;}\r\n.m-b-22[_ngcontent-%COMP%] {margin-bottom: 22px;}\r\n.m-b-23[_ngcontent-%COMP%] {margin-bottom: 23px;}\r\n.m-b-24[_ngcontent-%COMP%] {margin-bottom: 24px;}\r\n.m-b-25[_ngcontent-%COMP%] {margin-bottom: 25px;}\r\n.m-b-26[_ngcontent-%COMP%] {margin-bottom: 26px;}\r\n.m-b-27[_ngcontent-%COMP%] {margin-bottom: 27px;}\r\n.m-b-28[_ngcontent-%COMP%] {margin-bottom: 28px;}\r\n.m-b-29[_ngcontent-%COMP%] {margin-bottom: 29px;}\r\n.m-b-30[_ngcontent-%COMP%] {margin-bottom: 30px;}\r\n.m-b-31[_ngcontent-%COMP%] {margin-bottom: 31px;}\r\n.m-b-32[_ngcontent-%COMP%] {margin-bottom: 32px;}\r\n.m-b-33[_ngcontent-%COMP%] {margin-bottom: 33px;}\r\n.m-b-34[_ngcontent-%COMP%] {margin-bottom: 34px;}\r\n.m-b-35[_ngcontent-%COMP%] {margin-bottom: 35px;}\r\n.m-b-36[_ngcontent-%COMP%] {margin-bottom: 36px;}\r\n.m-b-37[_ngcontent-%COMP%] {margin-bottom: 37px;}\r\n.m-b-38[_ngcontent-%COMP%] {margin-bottom: 38px;}\r\n.m-b-39[_ngcontent-%COMP%] {margin-bottom: 39px;}\r\n.m-b-40[_ngcontent-%COMP%] {margin-bottom: 40px;}\r\n.m-b-41[_ngcontent-%COMP%] {margin-bottom: 41px;}\r\n.m-b-42[_ngcontent-%COMP%] {margin-bottom: 42px;}\r\n.m-b-43[_ngcontent-%COMP%] {margin-bottom: 43px;}\r\n.m-b-44[_ngcontent-%COMP%] {margin-bottom: 44px;}\r\n.m-b-45[_ngcontent-%COMP%] {margin-bottom: 45px;}\r\n.m-b-46[_ngcontent-%COMP%] {margin-bottom: 46px;}\r\n.m-b-47[_ngcontent-%COMP%] {margin-bottom: 47px;}\r\n.m-b-48[_ngcontent-%COMP%] {margin-bottom: 48px;}\r\n.m-b-49[_ngcontent-%COMP%] {margin-bottom: 49px;}\r\n.m-b-50[_ngcontent-%COMP%] {margin-bottom: 50px;}\r\n.m-b-51[_ngcontent-%COMP%] {margin-bottom: 51px;}\r\n.m-b-52[_ngcontent-%COMP%] {margin-bottom: 52px;}\r\n.m-b-53[_ngcontent-%COMP%] {margin-bottom: 53px;}\r\n.m-b-54[_ngcontent-%COMP%] {margin-bottom: 54px;}\r\n.m-b-55[_ngcontent-%COMP%] {margin-bottom: 55px;}\r\n.m-b-56[_ngcontent-%COMP%] {margin-bottom: 56px;}\r\n.m-b-57[_ngcontent-%COMP%] {margin-bottom: 57px;}\r\n.m-b-58[_ngcontent-%COMP%] {margin-bottom: 58px;}\r\n.m-b-59[_ngcontent-%COMP%] {margin-bottom: 59px;}\r\n.m-b-60[_ngcontent-%COMP%] {margin-bottom: 60px;}\r\n.m-b-61[_ngcontent-%COMP%] {margin-bottom: 61px;}\r\n.m-b-62[_ngcontent-%COMP%] {margin-bottom: 62px;}\r\n.m-b-63[_ngcontent-%COMP%] {margin-bottom: 63px;}\r\n.m-b-64[_ngcontent-%COMP%] {margin-bottom: 64px;}\r\n.m-b-65[_ngcontent-%COMP%] {margin-bottom: 65px;}\r\n.m-b-66[_ngcontent-%COMP%] {margin-bottom: 66px;}\r\n.m-b-67[_ngcontent-%COMP%] {margin-bottom: 67px;}\r\n.m-b-68[_ngcontent-%COMP%] {margin-bottom: 68px;}\r\n.m-b-69[_ngcontent-%COMP%] {margin-bottom: 69px;}\r\n.m-b-70[_ngcontent-%COMP%] {margin-bottom: 70px;}\r\n.m-b-71[_ngcontent-%COMP%] {margin-bottom: 71px;}\r\n.m-b-72[_ngcontent-%COMP%] {margin-bottom: 72px;}\r\n.m-b-73[_ngcontent-%COMP%] {margin-bottom: 73px;}\r\n.m-b-74[_ngcontent-%COMP%] {margin-bottom: 74px;}\r\n.m-b-75[_ngcontent-%COMP%] {margin-bottom: 75px;}\r\n.m-b-76[_ngcontent-%COMP%] {margin-bottom: 76px;}\r\n.m-b-77[_ngcontent-%COMP%] {margin-bottom: 77px;}\r\n.m-b-78[_ngcontent-%COMP%] {margin-bottom: 78px;}\r\n.m-b-79[_ngcontent-%COMP%] {margin-bottom: 79px;}\r\n.m-b-80[_ngcontent-%COMP%] {margin-bottom: 80px;}\r\n.m-b-81[_ngcontent-%COMP%] {margin-bottom: 81px;}\r\n.m-b-82[_ngcontent-%COMP%] {margin-bottom: 82px;}\r\n.m-b-83[_ngcontent-%COMP%] {margin-bottom: 83px;}\r\n.m-b-84[_ngcontent-%COMP%] {margin-bottom: 84px;}\r\n.m-b-85[_ngcontent-%COMP%] {margin-bottom: 85px;}\r\n.m-b-86[_ngcontent-%COMP%] {margin-bottom: 86px;}\r\n.m-b-87[_ngcontent-%COMP%] {margin-bottom: 87px;}\r\n.m-b-88[_ngcontent-%COMP%] {margin-bottom: 88px;}\r\n.m-b-89[_ngcontent-%COMP%] {margin-bottom: 89px;}\r\n.m-b-90[_ngcontent-%COMP%] {margin-bottom: 90px;}\r\n.m-b-91[_ngcontent-%COMP%] {margin-bottom: 91px;}\r\n.m-b-92[_ngcontent-%COMP%] {margin-bottom: 92px;}\r\n.m-b-93[_ngcontent-%COMP%] {margin-bottom: 93px;}\r\n.m-b-94[_ngcontent-%COMP%] {margin-bottom: 94px;}\r\n.m-b-95[_ngcontent-%COMP%] {margin-bottom: 95px;}\r\n.m-b-96[_ngcontent-%COMP%] {margin-bottom: 96px;}\r\n.m-b-97[_ngcontent-%COMP%] {margin-bottom: 97px;}\r\n.m-b-98[_ngcontent-%COMP%] {margin-bottom: 98px;}\r\n.m-b-99[_ngcontent-%COMP%] {margin-bottom: 99px;}\r\n.m-b-100[_ngcontent-%COMP%] {margin-bottom: 100px;}\r\n.m-b-101[_ngcontent-%COMP%] {margin-bottom: 101px;}\r\n.m-b-102[_ngcontent-%COMP%] {margin-bottom: 102px;}\r\n.m-b-103[_ngcontent-%COMP%] {margin-bottom: 103px;}\r\n.m-b-104[_ngcontent-%COMP%] {margin-bottom: 104px;}\r\n.m-b-105[_ngcontent-%COMP%] {margin-bottom: 105px;}\r\n.m-b-106[_ngcontent-%COMP%] {margin-bottom: 106px;}\r\n.m-b-107[_ngcontent-%COMP%] {margin-bottom: 107px;}\r\n.m-b-108[_ngcontent-%COMP%] {margin-bottom: 108px;}\r\n.m-b-109[_ngcontent-%COMP%] {margin-bottom: 109px;}\r\n.m-b-110[_ngcontent-%COMP%] {margin-bottom: 110px;}\r\n.m-b-111[_ngcontent-%COMP%] {margin-bottom: 111px;}\r\n.m-b-112[_ngcontent-%COMP%] {margin-bottom: 112px;}\r\n.m-b-113[_ngcontent-%COMP%] {margin-bottom: 113px;}\r\n.m-b-114[_ngcontent-%COMP%] {margin-bottom: 114px;}\r\n.m-b-115[_ngcontent-%COMP%] {margin-bottom: 115px;}\r\n.m-b-116[_ngcontent-%COMP%] {margin-bottom: 116px;}\r\n.m-b-117[_ngcontent-%COMP%] {margin-bottom: 117px;}\r\n.m-b-118[_ngcontent-%COMP%] {margin-bottom: 118px;}\r\n.m-b-119[_ngcontent-%COMP%] {margin-bottom: 119px;}\r\n.m-b-120[_ngcontent-%COMP%] {margin-bottom: 120px;}\r\n.m-b-121[_ngcontent-%COMP%] {margin-bottom: 121px;}\r\n.m-b-122[_ngcontent-%COMP%] {margin-bottom: 122px;}\r\n.m-b-123[_ngcontent-%COMP%] {margin-bottom: 123px;}\r\n.m-b-124[_ngcontent-%COMP%] {margin-bottom: 124px;}\r\n.m-b-125[_ngcontent-%COMP%] {margin-bottom: 125px;}\r\n.m-b-126[_ngcontent-%COMP%] {margin-bottom: 126px;}\r\n.m-b-127[_ngcontent-%COMP%] {margin-bottom: 127px;}\r\n.m-b-128[_ngcontent-%COMP%] {margin-bottom: 128px;}\r\n.m-b-129[_ngcontent-%COMP%] {margin-bottom: 129px;}\r\n.m-b-130[_ngcontent-%COMP%] {margin-bottom: 130px;}\r\n.m-b-131[_ngcontent-%COMP%] {margin-bottom: 131px;}\r\n.m-b-132[_ngcontent-%COMP%] {margin-bottom: 132px;}\r\n.m-b-133[_ngcontent-%COMP%] {margin-bottom: 133px;}\r\n.m-b-134[_ngcontent-%COMP%] {margin-bottom: 134px;}\r\n.m-b-135[_ngcontent-%COMP%] {margin-bottom: 135px;}\r\n.m-b-136[_ngcontent-%COMP%] {margin-bottom: 136px;}\r\n.m-b-137[_ngcontent-%COMP%] {margin-bottom: 137px;}\r\n.m-b-138[_ngcontent-%COMP%] {margin-bottom: 138px;}\r\n.m-b-139[_ngcontent-%COMP%] {margin-bottom: 139px;}\r\n.m-b-140[_ngcontent-%COMP%] {margin-bottom: 140px;}\r\n.m-b-141[_ngcontent-%COMP%] {margin-bottom: 141px;}\r\n.m-b-142[_ngcontent-%COMP%] {margin-bottom: 142px;}\r\n.m-b-143[_ngcontent-%COMP%] {margin-bottom: 143px;}\r\n.m-b-144[_ngcontent-%COMP%] {margin-bottom: 144px;}\r\n.m-b-145[_ngcontent-%COMP%] {margin-bottom: 145px;}\r\n.m-b-146[_ngcontent-%COMP%] {margin-bottom: 146px;}\r\n.m-b-147[_ngcontent-%COMP%] {margin-bottom: 147px;}\r\n.m-b-148[_ngcontent-%COMP%] {margin-bottom: 148px;}\r\n.m-b-149[_ngcontent-%COMP%] {margin-bottom: 149px;}\r\n.m-b-150[_ngcontent-%COMP%] {margin-bottom: 150px;}\r\n.m-b-151[_ngcontent-%COMP%] {margin-bottom: 151px;}\r\n.m-b-152[_ngcontent-%COMP%] {margin-bottom: 152px;}\r\n.m-b-153[_ngcontent-%COMP%] {margin-bottom: 153px;}\r\n.m-b-154[_ngcontent-%COMP%] {margin-bottom: 154px;}\r\n.m-b-155[_ngcontent-%COMP%] {margin-bottom: 155px;}\r\n.m-b-156[_ngcontent-%COMP%] {margin-bottom: 156px;}\r\n.m-b-157[_ngcontent-%COMP%] {margin-bottom: 157px;}\r\n.m-b-158[_ngcontent-%COMP%] {margin-bottom: 158px;}\r\n.m-b-159[_ngcontent-%COMP%] {margin-bottom: 159px;}\r\n.m-b-160[_ngcontent-%COMP%] {margin-bottom: 160px;}\r\n.m-b-161[_ngcontent-%COMP%] {margin-bottom: 161px;}\r\n.m-b-162[_ngcontent-%COMP%] {margin-bottom: 162px;}\r\n.m-b-163[_ngcontent-%COMP%] {margin-bottom: 163px;}\r\n.m-b-164[_ngcontent-%COMP%] {margin-bottom: 164px;}\r\n.m-b-165[_ngcontent-%COMP%] {margin-bottom: 165px;}\r\n.m-b-166[_ngcontent-%COMP%] {margin-bottom: 166px;}\r\n.m-b-167[_ngcontent-%COMP%] {margin-bottom: 167px;}\r\n.m-b-168[_ngcontent-%COMP%] {margin-bottom: 168px;}\r\n.m-b-169[_ngcontent-%COMP%] {margin-bottom: 169px;}\r\n.m-b-170[_ngcontent-%COMP%] {margin-bottom: 170px;}\r\n.m-b-171[_ngcontent-%COMP%] {margin-bottom: 171px;}\r\n.m-b-172[_ngcontent-%COMP%] {margin-bottom: 172px;}\r\n.m-b-173[_ngcontent-%COMP%] {margin-bottom: 173px;}\r\n.m-b-174[_ngcontent-%COMP%] {margin-bottom: 174px;}\r\n.m-b-175[_ngcontent-%COMP%] {margin-bottom: 175px;}\r\n.m-b-176[_ngcontent-%COMP%] {margin-bottom: 176px;}\r\n.m-b-177[_ngcontent-%COMP%] {margin-bottom: 177px;}\r\n.m-b-178[_ngcontent-%COMP%] {margin-bottom: 178px;}\r\n.m-b-179[_ngcontent-%COMP%] {margin-bottom: 179px;}\r\n.m-b-180[_ngcontent-%COMP%] {margin-bottom: 180px;}\r\n.m-b-181[_ngcontent-%COMP%] {margin-bottom: 181px;}\r\n.m-b-182[_ngcontent-%COMP%] {margin-bottom: 182px;}\r\n.m-b-183[_ngcontent-%COMP%] {margin-bottom: 183px;}\r\n.m-b-184[_ngcontent-%COMP%] {margin-bottom: 184px;}\r\n.m-b-185[_ngcontent-%COMP%] {margin-bottom: 185px;}\r\n.m-b-186[_ngcontent-%COMP%] {margin-bottom: 186px;}\r\n.m-b-187[_ngcontent-%COMP%] {margin-bottom: 187px;}\r\n.m-b-188[_ngcontent-%COMP%] {margin-bottom: 188px;}\r\n.m-b-189[_ngcontent-%COMP%] {margin-bottom: 189px;}\r\n.m-b-190[_ngcontent-%COMP%] {margin-bottom: 190px;}\r\n.m-b-191[_ngcontent-%COMP%] {margin-bottom: 191px;}\r\n.m-b-192[_ngcontent-%COMP%] {margin-bottom: 192px;}\r\n.m-b-193[_ngcontent-%COMP%] {margin-bottom: 193px;}\r\n.m-b-194[_ngcontent-%COMP%] {margin-bottom: 194px;}\r\n.m-b-195[_ngcontent-%COMP%] {margin-bottom: 195px;}\r\n.m-b-196[_ngcontent-%COMP%] {margin-bottom: 196px;}\r\n.m-b-197[_ngcontent-%COMP%] {margin-bottom: 197px;}\r\n.m-b-198[_ngcontent-%COMP%] {margin-bottom: 198px;}\r\n.m-b-199[_ngcontent-%COMP%] {margin-bottom: 199px;}\r\n.m-b-200[_ngcontent-%COMP%] {margin-bottom: 200px;}\r\n.m-b-201[_ngcontent-%COMP%] {margin-bottom: 201px;}\r\n.m-b-202[_ngcontent-%COMP%] {margin-bottom: 202px;}\r\n.m-b-203[_ngcontent-%COMP%] {margin-bottom: 203px;}\r\n.m-b-204[_ngcontent-%COMP%] {margin-bottom: 204px;}\r\n.m-b-205[_ngcontent-%COMP%] {margin-bottom: 205px;}\r\n.m-b-206[_ngcontent-%COMP%] {margin-bottom: 206px;}\r\n.m-b-207[_ngcontent-%COMP%] {margin-bottom: 207px;}\r\n.m-b-208[_ngcontent-%COMP%] {margin-bottom: 208px;}\r\n.m-b-209[_ngcontent-%COMP%] {margin-bottom: 209px;}\r\n.m-b-210[_ngcontent-%COMP%] {margin-bottom: 210px;}\r\n.m-b-211[_ngcontent-%COMP%] {margin-bottom: 211px;}\r\n.m-b-212[_ngcontent-%COMP%] {margin-bottom: 212px;}\r\n.m-b-213[_ngcontent-%COMP%] {margin-bottom: 213px;}\r\n.m-b-214[_ngcontent-%COMP%] {margin-bottom: 214px;}\r\n.m-b-215[_ngcontent-%COMP%] {margin-bottom: 215px;}\r\n.m-b-216[_ngcontent-%COMP%] {margin-bottom: 216px;}\r\n.m-b-217[_ngcontent-%COMP%] {margin-bottom: 217px;}\r\n.m-b-218[_ngcontent-%COMP%] {margin-bottom: 218px;}\r\n.m-b-219[_ngcontent-%COMP%] {margin-bottom: 219px;}\r\n.m-b-220[_ngcontent-%COMP%] {margin-bottom: 220px;}\r\n.m-b-221[_ngcontent-%COMP%] {margin-bottom: 221px;}\r\n.m-b-222[_ngcontent-%COMP%] {margin-bottom: 222px;}\r\n.m-b-223[_ngcontent-%COMP%] {margin-bottom: 223px;}\r\n.m-b-224[_ngcontent-%COMP%] {margin-bottom: 224px;}\r\n.m-b-225[_ngcontent-%COMP%] {margin-bottom: 225px;}\r\n.m-b-226[_ngcontent-%COMP%] {margin-bottom: 226px;}\r\n.m-b-227[_ngcontent-%COMP%] {margin-bottom: 227px;}\r\n.m-b-228[_ngcontent-%COMP%] {margin-bottom: 228px;}\r\n.m-b-229[_ngcontent-%COMP%] {margin-bottom: 229px;}\r\n.m-b-230[_ngcontent-%COMP%] {margin-bottom: 230px;}\r\n.m-b-231[_ngcontent-%COMP%] {margin-bottom: 231px;}\r\n.m-b-232[_ngcontent-%COMP%] {margin-bottom: 232px;}\r\n.m-b-233[_ngcontent-%COMP%] {margin-bottom: 233px;}\r\n.m-b-234[_ngcontent-%COMP%] {margin-bottom: 234px;}\r\n.m-b-235[_ngcontent-%COMP%] {margin-bottom: 235px;}\r\n.m-b-236[_ngcontent-%COMP%] {margin-bottom: 236px;}\r\n.m-b-237[_ngcontent-%COMP%] {margin-bottom: 237px;}\r\n.m-b-238[_ngcontent-%COMP%] {margin-bottom: 238px;}\r\n.m-b-239[_ngcontent-%COMP%] {margin-bottom: 239px;}\r\n.m-b-240[_ngcontent-%COMP%] {margin-bottom: 240px;}\r\n.m-b-241[_ngcontent-%COMP%] {margin-bottom: 241px;}\r\n.m-b-242[_ngcontent-%COMP%] {margin-bottom: 242px;}\r\n.m-b-243[_ngcontent-%COMP%] {margin-bottom: 243px;}\r\n.m-b-244[_ngcontent-%COMP%] {margin-bottom: 244px;}\r\n.m-b-245[_ngcontent-%COMP%] {margin-bottom: 245px;}\r\n.m-b-246[_ngcontent-%COMP%] {margin-bottom: 246px;}\r\n.m-b-247[_ngcontent-%COMP%] {margin-bottom: 247px;}\r\n.m-b-248[_ngcontent-%COMP%] {margin-bottom: 248px;}\r\n.m-b-249[_ngcontent-%COMP%] {margin-bottom: 249px;}\r\n.m-b-250[_ngcontent-%COMP%] {margin-bottom: 250px;}\r\n.m-l-0[_ngcontent-%COMP%] {margin-left: 0px;}\r\n.m-l-1[_ngcontent-%COMP%] {margin-left: 1px;}\r\n.m-l-2[_ngcontent-%COMP%] {margin-left: 2px;}\r\n.m-l-3[_ngcontent-%COMP%] {margin-left: 3px;}\r\n.m-l-4[_ngcontent-%COMP%] {margin-left: 4px;}\r\n.m-l-5[_ngcontent-%COMP%] {margin-left: 5px;}\r\n.m-l-6[_ngcontent-%COMP%] {margin-left: 6px;}\r\n.m-l-7[_ngcontent-%COMP%] {margin-left: 7px;}\r\n.m-l-8[_ngcontent-%COMP%] {margin-left: 8px;}\r\n.m-l-9[_ngcontent-%COMP%] {margin-left: 9px;}\r\n.m-l-10[_ngcontent-%COMP%] {margin-left: 10px;}\r\n.m-l-11[_ngcontent-%COMP%] {margin-left: 11px;}\r\n.m-l-12[_ngcontent-%COMP%] {margin-left: 12px;}\r\n.m-l-13[_ngcontent-%COMP%] {margin-left: 13px;}\r\n.m-l-14[_ngcontent-%COMP%] {margin-left: 14px;}\r\n.m-l-15[_ngcontent-%COMP%] {margin-left: 15px;}\r\n.m-l-16[_ngcontent-%COMP%] {margin-left: 16px;}\r\n.m-l-17[_ngcontent-%COMP%] {margin-left: 17px;}\r\n.m-l-18[_ngcontent-%COMP%] {margin-left: 18px;}\r\n.m-l-19[_ngcontent-%COMP%] {margin-left: 19px;}\r\n.m-l-20[_ngcontent-%COMP%] {margin-left: 20px;}\r\n.m-l-21[_ngcontent-%COMP%] {margin-left: 21px;}\r\n.m-l-22[_ngcontent-%COMP%] {margin-left: 22px;}\r\n.m-l-23[_ngcontent-%COMP%] {margin-left: 23px;}\r\n.m-l-24[_ngcontent-%COMP%] {margin-left: 24px;}\r\n.m-l-25[_ngcontent-%COMP%] {margin-left: 25px;}\r\n.m-l-26[_ngcontent-%COMP%] {margin-left: 26px;}\r\n.m-l-27[_ngcontent-%COMP%] {margin-left: 27px;}\r\n.m-l-28[_ngcontent-%COMP%] {margin-left: 28px;}\r\n.m-l-29[_ngcontent-%COMP%] {margin-left: 29px;}\r\n.m-l-30[_ngcontent-%COMP%] {margin-left: 30px;}\r\n.m-l-31[_ngcontent-%COMP%] {margin-left: 31px;}\r\n.m-l-32[_ngcontent-%COMP%] {margin-left: 32px;}\r\n.m-l-33[_ngcontent-%COMP%] {margin-left: 33px;}\r\n.m-l-34[_ngcontent-%COMP%] {margin-left: 34px;}\r\n.m-l-35[_ngcontent-%COMP%] {margin-left: 35px;}\r\n.m-l-36[_ngcontent-%COMP%] {margin-left: 36px;}\r\n.m-l-37[_ngcontent-%COMP%] {margin-left: 37px;}\r\n.m-l-38[_ngcontent-%COMP%] {margin-left: 38px;}\r\n.m-l-39[_ngcontent-%COMP%] {margin-left: 39px;}\r\n.m-l-40[_ngcontent-%COMP%] {margin-left: 40px;}\r\n.m-l-41[_ngcontent-%COMP%] {margin-left: 41px;}\r\n.m-l-42[_ngcontent-%COMP%] {margin-left: 42px;}\r\n.m-l-43[_ngcontent-%COMP%] {margin-left: 43px;}\r\n.m-l-44[_ngcontent-%COMP%] {margin-left: 44px;}\r\n.m-l-45[_ngcontent-%COMP%] {margin-left: 45px;}\r\n.m-l-46[_ngcontent-%COMP%] {margin-left: 46px;}\r\n.m-l-47[_ngcontent-%COMP%] {margin-left: 47px;}\r\n.m-l-48[_ngcontent-%COMP%] {margin-left: 48px;}\r\n.m-l-49[_ngcontent-%COMP%] {margin-left: 49px;}\r\n.m-l-50[_ngcontent-%COMP%] {margin-left: 50px;}\r\n.m-l-51[_ngcontent-%COMP%] {margin-left: 51px;}\r\n.m-l-52[_ngcontent-%COMP%] {margin-left: 52px;}\r\n.m-l-53[_ngcontent-%COMP%] {margin-left: 53px;}\r\n.m-l-54[_ngcontent-%COMP%] {margin-left: 54px;}\r\n.m-l-55[_ngcontent-%COMP%] {margin-left: 55px;}\r\n.m-l-56[_ngcontent-%COMP%] {margin-left: 56px;}\r\n.m-l-57[_ngcontent-%COMP%] {margin-left: 57px;}\r\n.m-l-58[_ngcontent-%COMP%] {margin-left: 58px;}\r\n.m-l-59[_ngcontent-%COMP%] {margin-left: 59px;}\r\n.m-l-60[_ngcontent-%COMP%] {margin-left: 60px;}\r\n.m-l-61[_ngcontent-%COMP%] {margin-left: 61px;}\r\n.m-l-62[_ngcontent-%COMP%] {margin-left: 62px;}\r\n.m-l-63[_ngcontent-%COMP%] {margin-left: 63px;}\r\n.m-l-64[_ngcontent-%COMP%] {margin-left: 64px;}\r\n.m-l-65[_ngcontent-%COMP%] {margin-left: 65px;}\r\n.m-l-66[_ngcontent-%COMP%] {margin-left: 66px;}\r\n.m-l-67[_ngcontent-%COMP%] {margin-left: 67px;}\r\n.m-l-68[_ngcontent-%COMP%] {margin-left: 68px;}\r\n.m-l-69[_ngcontent-%COMP%] {margin-left: 69px;}\r\n.m-l-70[_ngcontent-%COMP%] {margin-left: 70px;}\r\n.m-l-71[_ngcontent-%COMP%] {margin-left: 71px;}\r\n.m-l-72[_ngcontent-%COMP%] {margin-left: 72px;}\r\n.m-l-73[_ngcontent-%COMP%] {margin-left: 73px;}\r\n.m-l-74[_ngcontent-%COMP%] {margin-left: 74px;}\r\n.m-l-75[_ngcontent-%COMP%] {margin-left: 75px;}\r\n.m-l-76[_ngcontent-%COMP%] {margin-left: 76px;}\r\n.m-l-77[_ngcontent-%COMP%] {margin-left: 77px;}\r\n.m-l-78[_ngcontent-%COMP%] {margin-left: 78px;}\r\n.m-l-79[_ngcontent-%COMP%] {margin-left: 79px;}\r\n.m-l-80[_ngcontent-%COMP%] {margin-left: 80px;}\r\n.m-l-81[_ngcontent-%COMP%] {margin-left: 81px;}\r\n.m-l-82[_ngcontent-%COMP%] {margin-left: 82px;}\r\n.m-l-83[_ngcontent-%COMP%] {margin-left: 83px;}\r\n.m-l-84[_ngcontent-%COMP%] {margin-left: 84px;}\r\n.m-l-85[_ngcontent-%COMP%] {margin-left: 85px;}\r\n.m-l-86[_ngcontent-%COMP%] {margin-left: 86px;}\r\n.m-l-87[_ngcontent-%COMP%] {margin-left: 87px;}\r\n.m-l-88[_ngcontent-%COMP%] {margin-left: 88px;}\r\n.m-l-89[_ngcontent-%COMP%] {margin-left: 89px;}\r\n.m-l-90[_ngcontent-%COMP%] {margin-left: 90px;}\r\n.m-l-91[_ngcontent-%COMP%] {margin-left: 91px;}\r\n.m-l-92[_ngcontent-%COMP%] {margin-left: 92px;}\r\n.m-l-93[_ngcontent-%COMP%] {margin-left: 93px;}\r\n.m-l-94[_ngcontent-%COMP%] {margin-left: 94px;}\r\n.m-l-95[_ngcontent-%COMP%] {margin-left: 95px;}\r\n.m-l-96[_ngcontent-%COMP%] {margin-left: 96px;}\r\n.m-l-97[_ngcontent-%COMP%] {margin-left: 97px;}\r\n.m-l-98[_ngcontent-%COMP%] {margin-left: 98px;}\r\n.m-l-99[_ngcontent-%COMP%] {margin-left: 99px;}\r\n.m-l-100[_ngcontent-%COMP%] {margin-left: 100px;}\r\n.m-l-101[_ngcontent-%COMP%] {margin-left: 101px;}\r\n.m-l-102[_ngcontent-%COMP%] {margin-left: 102px;}\r\n.m-l-103[_ngcontent-%COMP%] {margin-left: 103px;}\r\n.m-l-104[_ngcontent-%COMP%] {margin-left: 104px;}\r\n.m-l-105[_ngcontent-%COMP%] {margin-left: 105px;}\r\n.m-l-106[_ngcontent-%COMP%] {margin-left: 106px;}\r\n.m-l-107[_ngcontent-%COMP%] {margin-left: 107px;}\r\n.m-l-108[_ngcontent-%COMP%] {margin-left: 108px;}\r\n.m-l-109[_ngcontent-%COMP%] {margin-left: 109px;}\r\n.m-l-110[_ngcontent-%COMP%] {margin-left: 110px;}\r\n.m-l-111[_ngcontent-%COMP%] {margin-left: 111px;}\r\n.m-l-112[_ngcontent-%COMP%] {margin-left: 112px;}\r\n.m-l-113[_ngcontent-%COMP%] {margin-left: 113px;}\r\n.m-l-114[_ngcontent-%COMP%] {margin-left: 114px;}\r\n.m-l-115[_ngcontent-%COMP%] {margin-left: 115px;}\r\n.m-l-116[_ngcontent-%COMP%] {margin-left: 116px;}\r\n.m-l-117[_ngcontent-%COMP%] {margin-left: 117px;}\r\n.m-l-118[_ngcontent-%COMP%] {margin-left: 118px;}\r\n.m-l-119[_ngcontent-%COMP%] {margin-left: 119px;}\r\n.m-l-120[_ngcontent-%COMP%] {margin-left: 120px;}\r\n.m-l-121[_ngcontent-%COMP%] {margin-left: 121px;}\r\n.m-l-122[_ngcontent-%COMP%] {margin-left: 122px;}\r\n.m-l-123[_ngcontent-%COMP%] {margin-left: 123px;}\r\n.m-l-124[_ngcontent-%COMP%] {margin-left: 124px;}\r\n.m-l-125[_ngcontent-%COMP%] {margin-left: 125px;}\r\n.m-l-126[_ngcontent-%COMP%] {margin-left: 126px;}\r\n.m-l-127[_ngcontent-%COMP%] {margin-left: 127px;}\r\n.m-l-128[_ngcontent-%COMP%] {margin-left: 128px;}\r\n.m-l-129[_ngcontent-%COMP%] {margin-left: 129px;}\r\n.m-l-130[_ngcontent-%COMP%] {margin-left: 130px;}\r\n.m-l-131[_ngcontent-%COMP%] {margin-left: 131px;}\r\n.m-l-132[_ngcontent-%COMP%] {margin-left: 132px;}\r\n.m-l-133[_ngcontent-%COMP%] {margin-left: 133px;}\r\n.m-l-134[_ngcontent-%COMP%] {margin-left: 134px;}\r\n.m-l-135[_ngcontent-%COMP%] {margin-left: 135px;}\r\n.m-l-136[_ngcontent-%COMP%] {margin-left: 136px;}\r\n.m-l-137[_ngcontent-%COMP%] {margin-left: 137px;}\r\n.m-l-138[_ngcontent-%COMP%] {margin-left: 138px;}\r\n.m-l-139[_ngcontent-%COMP%] {margin-left: 139px;}\r\n.m-l-140[_ngcontent-%COMP%] {margin-left: 140px;}\r\n.m-l-141[_ngcontent-%COMP%] {margin-left: 141px;}\r\n.m-l-142[_ngcontent-%COMP%] {margin-left: 142px;}\r\n.m-l-143[_ngcontent-%COMP%] {margin-left: 143px;}\r\n.m-l-144[_ngcontent-%COMP%] {margin-left: 144px;}\r\n.m-l-145[_ngcontent-%COMP%] {margin-left: 145px;}\r\n.m-l-146[_ngcontent-%COMP%] {margin-left: 146px;}\r\n.m-l-147[_ngcontent-%COMP%] {margin-left: 147px;}\r\n.m-l-148[_ngcontent-%COMP%] {margin-left: 148px;}\r\n.m-l-149[_ngcontent-%COMP%] {margin-left: 149px;}\r\n.m-l-150[_ngcontent-%COMP%] {margin-left: 150px;}\r\n.m-l-151[_ngcontent-%COMP%] {margin-left: 151px;}\r\n.m-l-152[_ngcontent-%COMP%] {margin-left: 152px;}\r\n.m-l-153[_ngcontent-%COMP%] {margin-left: 153px;}\r\n.m-l-154[_ngcontent-%COMP%] {margin-left: 154px;}\r\n.m-l-155[_ngcontent-%COMP%] {margin-left: 155px;}\r\n.m-l-156[_ngcontent-%COMP%] {margin-left: 156px;}\r\n.m-l-157[_ngcontent-%COMP%] {margin-left: 157px;}\r\n.m-l-158[_ngcontent-%COMP%] {margin-left: 158px;}\r\n.m-l-159[_ngcontent-%COMP%] {margin-left: 159px;}\r\n.m-l-160[_ngcontent-%COMP%] {margin-left: 160px;}\r\n.m-l-161[_ngcontent-%COMP%] {margin-left: 161px;}\r\n.m-l-162[_ngcontent-%COMP%] {margin-left: 162px;}\r\n.m-l-163[_ngcontent-%COMP%] {margin-left: 163px;}\r\n.m-l-164[_ngcontent-%COMP%] {margin-left: 164px;}\r\n.m-l-165[_ngcontent-%COMP%] {margin-left: 165px;}\r\n.m-l-166[_ngcontent-%COMP%] {margin-left: 166px;}\r\n.m-l-167[_ngcontent-%COMP%] {margin-left: 167px;}\r\n.m-l-168[_ngcontent-%COMP%] {margin-left: 168px;}\r\n.m-l-169[_ngcontent-%COMP%] {margin-left: 169px;}\r\n.m-l-170[_ngcontent-%COMP%] {margin-left: 170px;}\r\n.m-l-171[_ngcontent-%COMP%] {margin-left: 171px;}\r\n.m-l-172[_ngcontent-%COMP%] {margin-left: 172px;}\r\n.m-l-173[_ngcontent-%COMP%] {margin-left: 173px;}\r\n.m-l-174[_ngcontent-%COMP%] {margin-left: 174px;}\r\n.m-l-175[_ngcontent-%COMP%] {margin-left: 175px;}\r\n.m-l-176[_ngcontent-%COMP%] {margin-left: 176px;}\r\n.m-l-177[_ngcontent-%COMP%] {margin-left: 177px;}\r\n.m-l-178[_ngcontent-%COMP%] {margin-left: 178px;}\r\n.m-l-179[_ngcontent-%COMP%] {margin-left: 179px;}\r\n.m-l-180[_ngcontent-%COMP%] {margin-left: 180px;}\r\n.m-l-181[_ngcontent-%COMP%] {margin-left: 181px;}\r\n.m-l-182[_ngcontent-%COMP%] {margin-left: 182px;}\r\n.m-l-183[_ngcontent-%COMP%] {margin-left: 183px;}\r\n.m-l-184[_ngcontent-%COMP%] {margin-left: 184px;}\r\n.m-l-185[_ngcontent-%COMP%] {margin-left: 185px;}\r\n.m-l-186[_ngcontent-%COMP%] {margin-left: 186px;}\r\n.m-l-187[_ngcontent-%COMP%] {margin-left: 187px;}\r\n.m-l-188[_ngcontent-%COMP%] {margin-left: 188px;}\r\n.m-l-189[_ngcontent-%COMP%] {margin-left: 189px;}\r\n.m-l-190[_ngcontent-%COMP%] {margin-left: 190px;}\r\n.m-l-191[_ngcontent-%COMP%] {margin-left: 191px;}\r\n.m-l-192[_ngcontent-%COMP%] {margin-left: 192px;}\r\n.m-l-193[_ngcontent-%COMP%] {margin-left: 193px;}\r\n.m-l-194[_ngcontent-%COMP%] {margin-left: 194px;}\r\n.m-l-195[_ngcontent-%COMP%] {margin-left: 195px;}\r\n.m-l-196[_ngcontent-%COMP%] {margin-left: 196px;}\r\n.m-l-197[_ngcontent-%COMP%] {margin-left: 197px;}\r\n.m-l-198[_ngcontent-%COMP%] {margin-left: 198px;}\r\n.m-l-199[_ngcontent-%COMP%] {margin-left: 199px;}\r\n.m-l-200[_ngcontent-%COMP%] {margin-left: 200px;}\r\n.m-l-201[_ngcontent-%COMP%] {margin-left: 201px;}\r\n.m-l-202[_ngcontent-%COMP%] {margin-left: 202px;}\r\n.m-l-203[_ngcontent-%COMP%] {margin-left: 203px;}\r\n.m-l-204[_ngcontent-%COMP%] {margin-left: 204px;}\r\n.m-l-205[_ngcontent-%COMP%] {margin-left: 205px;}\r\n.m-l-206[_ngcontent-%COMP%] {margin-left: 206px;}\r\n.m-l-207[_ngcontent-%COMP%] {margin-left: 207px;}\r\n.m-l-208[_ngcontent-%COMP%] {margin-left: 208px;}\r\n.m-l-209[_ngcontent-%COMP%] {margin-left: 209px;}\r\n.m-l-210[_ngcontent-%COMP%] {margin-left: 210px;}\r\n.m-l-211[_ngcontent-%COMP%] {margin-left: 211px;}\r\n.m-l-212[_ngcontent-%COMP%] {margin-left: 212px;}\r\n.m-l-213[_ngcontent-%COMP%] {margin-left: 213px;}\r\n.m-l-214[_ngcontent-%COMP%] {margin-left: 214px;}\r\n.m-l-215[_ngcontent-%COMP%] {margin-left: 215px;}\r\n.m-l-216[_ngcontent-%COMP%] {margin-left: 216px;}\r\n.m-l-217[_ngcontent-%COMP%] {margin-left: 217px;}\r\n.m-l-218[_ngcontent-%COMP%] {margin-left: 218px;}\r\n.m-l-219[_ngcontent-%COMP%] {margin-left: 219px;}\r\n.m-l-220[_ngcontent-%COMP%] {margin-left: 220px;}\r\n.m-l-221[_ngcontent-%COMP%] {margin-left: 221px;}\r\n.m-l-222[_ngcontent-%COMP%] {margin-left: 222px;}\r\n.m-l-223[_ngcontent-%COMP%] {margin-left: 223px;}\r\n.m-l-224[_ngcontent-%COMP%] {margin-left: 224px;}\r\n.m-l-225[_ngcontent-%COMP%] {margin-left: 225px;}\r\n.m-l-226[_ngcontent-%COMP%] {margin-left: 226px;}\r\n.m-l-227[_ngcontent-%COMP%] {margin-left: 227px;}\r\n.m-l-228[_ngcontent-%COMP%] {margin-left: 228px;}\r\n.m-l-229[_ngcontent-%COMP%] {margin-left: 229px;}\r\n.m-l-230[_ngcontent-%COMP%] {margin-left: 230px;}\r\n.m-l-231[_ngcontent-%COMP%] {margin-left: 231px;}\r\n.m-l-232[_ngcontent-%COMP%] {margin-left: 232px;}\r\n.m-l-233[_ngcontent-%COMP%] {margin-left: 233px;}\r\n.m-l-234[_ngcontent-%COMP%] {margin-left: 234px;}\r\n.m-l-235[_ngcontent-%COMP%] {margin-left: 235px;}\r\n.m-l-236[_ngcontent-%COMP%] {margin-left: 236px;}\r\n.m-l-237[_ngcontent-%COMP%] {margin-left: 237px;}\r\n.m-l-238[_ngcontent-%COMP%] {margin-left: 238px;}\r\n.m-l-239[_ngcontent-%COMP%] {margin-left: 239px;}\r\n.m-l-240[_ngcontent-%COMP%] {margin-left: 240px;}\r\n.m-l-241[_ngcontent-%COMP%] {margin-left: 241px;}\r\n.m-l-242[_ngcontent-%COMP%] {margin-left: 242px;}\r\n.m-l-243[_ngcontent-%COMP%] {margin-left: 243px;}\r\n.m-l-244[_ngcontent-%COMP%] {margin-left: 244px;}\r\n.m-l-245[_ngcontent-%COMP%] {margin-left: 245px;}\r\n.m-l-246[_ngcontent-%COMP%] {margin-left: 246px;}\r\n.m-l-247[_ngcontent-%COMP%] {margin-left: 247px;}\r\n.m-l-248[_ngcontent-%COMP%] {margin-left: 248px;}\r\n.m-l-249[_ngcontent-%COMP%] {margin-left: 249px;}\r\n.m-l-250[_ngcontent-%COMP%] {margin-left: 250px;}\r\n.m-r-0[_ngcontent-%COMP%] {margin-right: 0px;}\r\n.m-r-1[_ngcontent-%COMP%] {margin-right: 1px;}\r\n.m-r-2[_ngcontent-%COMP%] {margin-right: 2px;}\r\n.m-r-3[_ngcontent-%COMP%] {margin-right: 3px;}\r\n.m-r-4[_ngcontent-%COMP%] {margin-right: 4px;}\r\n.m-r-5[_ngcontent-%COMP%] {margin-right: 5px;}\r\n.m-r-6[_ngcontent-%COMP%] {margin-right: 6px;}\r\n.m-r-7[_ngcontent-%COMP%] {margin-right: 7px;}\r\n.m-r-8[_ngcontent-%COMP%] {margin-right: 8px;}\r\n.m-r-9[_ngcontent-%COMP%] {margin-right: 9px;}\r\n.m-r-10[_ngcontent-%COMP%] {margin-right: 10px;}\r\n.m-r-11[_ngcontent-%COMP%] {margin-right: 11px;}\r\n.m-r-12[_ngcontent-%COMP%] {margin-right: 12px;}\r\n.m-r-13[_ngcontent-%COMP%] {margin-right: 13px;}\r\n.m-r-14[_ngcontent-%COMP%] {margin-right: 14px;}\r\n.m-r-15[_ngcontent-%COMP%] {margin-right: 15px;}\r\n.m-r-16[_ngcontent-%COMP%] {margin-right: 16px;}\r\n.m-r-17[_ngcontent-%COMP%] {margin-right: 17px;}\r\n.m-r-18[_ngcontent-%COMP%] {margin-right: 18px;}\r\n.m-r-19[_ngcontent-%COMP%] {margin-right: 19px;}\r\n.m-r-20[_ngcontent-%COMP%] {margin-right: 20px;}\r\n.m-r-21[_ngcontent-%COMP%] {margin-right: 21px;}\r\n.m-r-22[_ngcontent-%COMP%] {margin-right: 22px;}\r\n.m-r-23[_ngcontent-%COMP%] {margin-right: 23px;}\r\n.m-r-24[_ngcontent-%COMP%] {margin-right: 24px;}\r\n.m-r-25[_ngcontent-%COMP%] {margin-right: 25px;}\r\n.m-r-26[_ngcontent-%COMP%] {margin-right: 26px;}\r\n.m-r-27[_ngcontent-%COMP%] {margin-right: 27px;}\r\n.m-r-28[_ngcontent-%COMP%] {margin-right: 28px;}\r\n.m-r-29[_ngcontent-%COMP%] {margin-right: 29px;}\r\n.m-r-30[_ngcontent-%COMP%] {margin-right: 30px;}\r\n.m-r-31[_ngcontent-%COMP%] {margin-right: 31px;}\r\n.m-r-32[_ngcontent-%COMP%] {margin-right: 32px;}\r\n.m-r-33[_ngcontent-%COMP%] {margin-right: 33px;}\r\n.m-r-34[_ngcontent-%COMP%] {margin-right: 34px;}\r\n.m-r-35[_ngcontent-%COMP%] {margin-right: 35px;}\r\n.m-r-36[_ngcontent-%COMP%] {margin-right: 36px;}\r\n.m-r-37[_ngcontent-%COMP%] {margin-right: 37px;}\r\n.m-r-38[_ngcontent-%COMP%] {margin-right: 38px;}\r\n.m-r-39[_ngcontent-%COMP%] {margin-right: 39px;}\r\n.m-r-40[_ngcontent-%COMP%] {margin-right: 40px;}\r\n.m-r-41[_ngcontent-%COMP%] {margin-right: 41px;}\r\n.m-r-42[_ngcontent-%COMP%] {margin-right: 42px;}\r\n.m-r-43[_ngcontent-%COMP%] {margin-right: 43px;}\r\n.m-r-44[_ngcontent-%COMP%] {margin-right: 44px;}\r\n.m-r-45[_ngcontent-%COMP%] {margin-right: 45px;}\r\n.m-r-46[_ngcontent-%COMP%] {margin-right: 46px;}\r\n.m-r-47[_ngcontent-%COMP%] {margin-right: 47px;}\r\n.m-r-48[_ngcontent-%COMP%] {margin-right: 48px;}\r\n.m-r-49[_ngcontent-%COMP%] {margin-right: 49px;}\r\n.m-r-50[_ngcontent-%COMP%] {margin-right: 50px;}\r\n.m-r-51[_ngcontent-%COMP%] {margin-right: 51px;}\r\n.m-r-52[_ngcontent-%COMP%] {margin-right: 52px;}\r\n.m-r-53[_ngcontent-%COMP%] {margin-right: 53px;}\r\n.m-r-54[_ngcontent-%COMP%] {margin-right: 54px;}\r\n.m-r-55[_ngcontent-%COMP%] {margin-right: 55px;}\r\n.m-r-56[_ngcontent-%COMP%] {margin-right: 56px;}\r\n.m-r-57[_ngcontent-%COMP%] {margin-right: 57px;}\r\n.m-r-58[_ngcontent-%COMP%] {margin-right: 58px;}\r\n.m-r-59[_ngcontent-%COMP%] {margin-right: 59px;}\r\n.m-r-60[_ngcontent-%COMP%] {margin-right: 60px;}\r\n.m-r-61[_ngcontent-%COMP%] {margin-right: 61px;}\r\n.m-r-62[_ngcontent-%COMP%] {margin-right: 62px;}\r\n.m-r-63[_ngcontent-%COMP%] {margin-right: 63px;}\r\n.m-r-64[_ngcontent-%COMP%] {margin-right: 64px;}\r\n.m-r-65[_ngcontent-%COMP%] {margin-right: 65px;}\r\n.m-r-66[_ngcontent-%COMP%] {margin-right: 66px;}\r\n.m-r-67[_ngcontent-%COMP%] {margin-right: 67px;}\r\n.m-r-68[_ngcontent-%COMP%] {margin-right: 68px;}\r\n.m-r-69[_ngcontent-%COMP%] {margin-right: 69px;}\r\n.m-r-70[_ngcontent-%COMP%] {margin-right: 70px;}\r\n.m-r-71[_ngcontent-%COMP%] {margin-right: 71px;}\r\n.m-r-72[_ngcontent-%COMP%] {margin-right: 72px;}\r\n.m-r-73[_ngcontent-%COMP%] {margin-right: 73px;}\r\n.m-r-74[_ngcontent-%COMP%] {margin-right: 74px;}\r\n.m-r-75[_ngcontent-%COMP%] {margin-right: 75px;}\r\n.m-r-76[_ngcontent-%COMP%] {margin-right: 76px;}\r\n.m-r-77[_ngcontent-%COMP%] {margin-right: 77px;}\r\n.m-r-78[_ngcontent-%COMP%] {margin-right: 78px;}\r\n.m-r-79[_ngcontent-%COMP%] {margin-right: 79px;}\r\n.m-r-80[_ngcontent-%COMP%] {margin-right: 80px;}\r\n.m-r-81[_ngcontent-%COMP%] {margin-right: 81px;}\r\n.m-r-82[_ngcontent-%COMP%] {margin-right: 82px;}\r\n.m-r-83[_ngcontent-%COMP%] {margin-right: 83px;}\r\n.m-r-84[_ngcontent-%COMP%] {margin-right: 84px;}\r\n.m-r-85[_ngcontent-%COMP%] {margin-right: 85px;}\r\n.m-r-86[_ngcontent-%COMP%] {margin-right: 86px;}\r\n.m-r-87[_ngcontent-%COMP%] {margin-right: 87px;}\r\n.m-r-88[_ngcontent-%COMP%] {margin-right: 88px;}\r\n.m-r-89[_ngcontent-%COMP%] {margin-right: 89px;}\r\n.m-r-90[_ngcontent-%COMP%] {margin-right: 90px;}\r\n.m-r-91[_ngcontent-%COMP%] {margin-right: 91px;}\r\n.m-r-92[_ngcontent-%COMP%] {margin-right: 92px;}\r\n.m-r-93[_ngcontent-%COMP%] {margin-right: 93px;}\r\n.m-r-94[_ngcontent-%COMP%] {margin-right: 94px;}\r\n.m-r-95[_ngcontent-%COMP%] {margin-right: 95px;}\r\n.m-r-96[_ngcontent-%COMP%] {margin-right: 96px;}\r\n.m-r-97[_ngcontent-%COMP%] {margin-right: 97px;}\r\n.m-r-98[_ngcontent-%COMP%] {margin-right: 98px;}\r\n.m-r-99[_ngcontent-%COMP%] {margin-right: 99px;}\r\n.m-r-100[_ngcontent-%COMP%] {margin-right: 100px;}\r\n.m-r-101[_ngcontent-%COMP%] {margin-right: 101px;}\r\n.m-r-102[_ngcontent-%COMP%] {margin-right: 102px;}\r\n.m-r-103[_ngcontent-%COMP%] {margin-right: 103px;}\r\n.m-r-104[_ngcontent-%COMP%] {margin-right: 104px;}\r\n.m-r-105[_ngcontent-%COMP%] {margin-right: 105px;}\r\n.m-r-106[_ngcontent-%COMP%] {margin-right: 106px;}\r\n.m-r-107[_ngcontent-%COMP%] {margin-right: 107px;}\r\n.m-r-108[_ngcontent-%COMP%] {margin-right: 108px;}\r\n.m-r-109[_ngcontent-%COMP%] {margin-right: 109px;}\r\n.m-r-110[_ngcontent-%COMP%] {margin-right: 110px;}\r\n.m-r-111[_ngcontent-%COMP%] {margin-right: 111px;}\r\n.m-r-112[_ngcontent-%COMP%] {margin-right: 112px;}\r\n.m-r-113[_ngcontent-%COMP%] {margin-right: 113px;}\r\n.m-r-114[_ngcontent-%COMP%] {margin-right: 114px;}\r\n.m-r-115[_ngcontent-%COMP%] {margin-right: 115px;}\r\n.m-r-116[_ngcontent-%COMP%] {margin-right: 116px;}\r\n.m-r-117[_ngcontent-%COMP%] {margin-right: 117px;}\r\n.m-r-118[_ngcontent-%COMP%] {margin-right: 118px;}\r\n.m-r-119[_ngcontent-%COMP%] {margin-right: 119px;}\r\n.m-r-120[_ngcontent-%COMP%] {margin-right: 120px;}\r\n.m-r-121[_ngcontent-%COMP%] {margin-right: 121px;}\r\n.m-r-122[_ngcontent-%COMP%] {margin-right: 122px;}\r\n.m-r-123[_ngcontent-%COMP%] {margin-right: 123px;}\r\n.m-r-124[_ngcontent-%COMP%] {margin-right: 124px;}\r\n.m-r-125[_ngcontent-%COMP%] {margin-right: 125px;}\r\n.m-r-126[_ngcontent-%COMP%] {margin-right: 126px;}\r\n.m-r-127[_ngcontent-%COMP%] {margin-right: 127px;}\r\n.m-r-128[_ngcontent-%COMP%] {margin-right: 128px;}\r\n.m-r-129[_ngcontent-%COMP%] {margin-right: 129px;}\r\n.m-r-130[_ngcontent-%COMP%] {margin-right: 130px;}\r\n.m-r-131[_ngcontent-%COMP%] {margin-right: 131px;}\r\n.m-r-132[_ngcontent-%COMP%] {margin-right: 132px;}\r\n.m-r-133[_ngcontent-%COMP%] {margin-right: 133px;}\r\n.m-r-134[_ngcontent-%COMP%] {margin-right: 134px;}\r\n.m-r-135[_ngcontent-%COMP%] {margin-right: 135px;}\r\n.m-r-136[_ngcontent-%COMP%] {margin-right: 136px;}\r\n.m-r-137[_ngcontent-%COMP%] {margin-right: 137px;}\r\n.m-r-138[_ngcontent-%COMP%] {margin-right: 138px;}\r\n.m-r-139[_ngcontent-%COMP%] {margin-right: 139px;}\r\n.m-r-140[_ngcontent-%COMP%] {margin-right: 140px;}\r\n.m-r-141[_ngcontent-%COMP%] {margin-right: 141px;}\r\n.m-r-142[_ngcontent-%COMP%] {margin-right: 142px;}\r\n.m-r-143[_ngcontent-%COMP%] {margin-right: 143px;}\r\n.m-r-144[_ngcontent-%COMP%] {margin-right: 144px;}\r\n.m-r-145[_ngcontent-%COMP%] {margin-right: 145px;}\r\n.m-r-146[_ngcontent-%COMP%] {margin-right: 146px;}\r\n.m-r-147[_ngcontent-%COMP%] {margin-right: 147px;}\r\n.m-r-148[_ngcontent-%COMP%] {margin-right: 148px;}\r\n.m-r-149[_ngcontent-%COMP%] {margin-right: 149px;}\r\n.m-r-150[_ngcontent-%COMP%] {margin-right: 150px;}\r\n.m-r-151[_ngcontent-%COMP%] {margin-right: 151px;}\r\n.m-r-152[_ngcontent-%COMP%] {margin-right: 152px;}\r\n.m-r-153[_ngcontent-%COMP%] {margin-right: 153px;}\r\n.m-r-154[_ngcontent-%COMP%] {margin-right: 154px;}\r\n.m-r-155[_ngcontent-%COMP%] {margin-right: 155px;}\r\n.m-r-156[_ngcontent-%COMP%] {margin-right: 156px;}\r\n.m-r-157[_ngcontent-%COMP%] {margin-right: 157px;}\r\n.m-r-158[_ngcontent-%COMP%] {margin-right: 158px;}\r\n.m-r-159[_ngcontent-%COMP%] {margin-right: 159px;}\r\n.m-r-160[_ngcontent-%COMP%] {margin-right: 160px;}\r\n.m-r-161[_ngcontent-%COMP%] {margin-right: 161px;}\r\n.m-r-162[_ngcontent-%COMP%] {margin-right: 162px;}\r\n.m-r-163[_ngcontent-%COMP%] {margin-right: 163px;}\r\n.m-r-164[_ngcontent-%COMP%] {margin-right: 164px;}\r\n.m-r-165[_ngcontent-%COMP%] {margin-right: 165px;}\r\n.m-r-166[_ngcontent-%COMP%] {margin-right: 166px;}\r\n.m-r-167[_ngcontent-%COMP%] {margin-right: 167px;}\r\n.m-r-168[_ngcontent-%COMP%] {margin-right: 168px;}\r\n.m-r-169[_ngcontent-%COMP%] {margin-right: 169px;}\r\n.m-r-170[_ngcontent-%COMP%] {margin-right: 170px;}\r\n.m-r-171[_ngcontent-%COMP%] {margin-right: 171px;}\r\n.m-r-172[_ngcontent-%COMP%] {margin-right: 172px;}\r\n.m-r-173[_ngcontent-%COMP%] {margin-right: 173px;}\r\n.m-r-174[_ngcontent-%COMP%] {margin-right: 174px;}\r\n.m-r-175[_ngcontent-%COMP%] {margin-right: 175px;}\r\n.m-r-176[_ngcontent-%COMP%] {margin-right: 176px;}\r\n.m-r-177[_ngcontent-%COMP%] {margin-right: 177px;}\r\n.m-r-178[_ngcontent-%COMP%] {margin-right: 178px;}\r\n.m-r-179[_ngcontent-%COMP%] {margin-right: 179px;}\r\n.m-r-180[_ngcontent-%COMP%] {margin-right: 180px;}\r\n.m-r-181[_ngcontent-%COMP%] {margin-right: 181px;}\r\n.m-r-182[_ngcontent-%COMP%] {margin-right: 182px;}\r\n.m-r-183[_ngcontent-%COMP%] {margin-right: 183px;}\r\n.m-r-184[_ngcontent-%COMP%] {margin-right: 184px;}\r\n.m-r-185[_ngcontent-%COMP%] {margin-right: 185px;}\r\n.m-r-186[_ngcontent-%COMP%] {margin-right: 186px;}\r\n.m-r-187[_ngcontent-%COMP%] {margin-right: 187px;}\r\n.m-r-188[_ngcontent-%COMP%] {margin-right: 188px;}\r\n.m-r-189[_ngcontent-%COMP%] {margin-right: 189px;}\r\n.m-r-190[_ngcontent-%COMP%] {margin-right: 190px;}\r\n.m-r-191[_ngcontent-%COMP%] {margin-right: 191px;}\r\n.m-r-192[_ngcontent-%COMP%] {margin-right: 192px;}\r\n.m-r-193[_ngcontent-%COMP%] {margin-right: 193px;}\r\n.m-r-194[_ngcontent-%COMP%] {margin-right: 194px;}\r\n.m-r-195[_ngcontent-%COMP%] {margin-right: 195px;}\r\n.m-r-196[_ngcontent-%COMP%] {margin-right: 196px;}\r\n.m-r-197[_ngcontent-%COMP%] {margin-right: 197px;}\r\n.m-r-198[_ngcontent-%COMP%] {margin-right: 198px;}\r\n.m-r-199[_ngcontent-%COMP%] {margin-right: 199px;}\r\n.m-r-200[_ngcontent-%COMP%] {margin-right: 200px;}\r\n.m-r-201[_ngcontent-%COMP%] {margin-right: 201px;}\r\n.m-r-202[_ngcontent-%COMP%] {margin-right: 202px;}\r\n.m-r-203[_ngcontent-%COMP%] {margin-right: 203px;}\r\n.m-r-204[_ngcontent-%COMP%] {margin-right: 204px;}\r\n.m-r-205[_ngcontent-%COMP%] {margin-right: 205px;}\r\n.m-r-206[_ngcontent-%COMP%] {margin-right: 206px;}\r\n.m-r-207[_ngcontent-%COMP%] {margin-right: 207px;}\r\n.m-r-208[_ngcontent-%COMP%] {margin-right: 208px;}\r\n.m-r-209[_ngcontent-%COMP%] {margin-right: 209px;}\r\n.m-r-210[_ngcontent-%COMP%] {margin-right: 210px;}\r\n.m-r-211[_ngcontent-%COMP%] {margin-right: 211px;}\r\n.m-r-212[_ngcontent-%COMP%] {margin-right: 212px;}\r\n.m-r-213[_ngcontent-%COMP%] {margin-right: 213px;}\r\n.m-r-214[_ngcontent-%COMP%] {margin-right: 214px;}\r\n.m-r-215[_ngcontent-%COMP%] {margin-right: 215px;}\r\n.m-r-216[_ngcontent-%COMP%] {margin-right: 216px;}\r\n.m-r-217[_ngcontent-%COMP%] {margin-right: 217px;}\r\n.m-r-218[_ngcontent-%COMP%] {margin-right: 218px;}\r\n.m-r-219[_ngcontent-%COMP%] {margin-right: 219px;}\r\n.m-r-220[_ngcontent-%COMP%] {margin-right: 220px;}\r\n.m-r-221[_ngcontent-%COMP%] {margin-right: 221px;}\r\n.m-r-222[_ngcontent-%COMP%] {margin-right: 222px;}\r\n.m-r-223[_ngcontent-%COMP%] {margin-right: 223px;}\r\n.m-r-224[_ngcontent-%COMP%] {margin-right: 224px;}\r\n.m-r-225[_ngcontent-%COMP%] {margin-right: 225px;}\r\n.m-r-226[_ngcontent-%COMP%] {margin-right: 226px;}\r\n.m-r-227[_ngcontent-%COMP%] {margin-right: 227px;}\r\n.m-r-228[_ngcontent-%COMP%] {margin-right: 228px;}\r\n.m-r-229[_ngcontent-%COMP%] {margin-right: 229px;}\r\n.m-r-230[_ngcontent-%COMP%] {margin-right: 230px;}\r\n.m-r-231[_ngcontent-%COMP%] {margin-right: 231px;}\r\n.m-r-232[_ngcontent-%COMP%] {margin-right: 232px;}\r\n.m-r-233[_ngcontent-%COMP%] {margin-right: 233px;}\r\n.m-r-234[_ngcontent-%COMP%] {margin-right: 234px;}\r\n.m-r-235[_ngcontent-%COMP%] {margin-right: 235px;}\r\n.m-r-236[_ngcontent-%COMP%] {margin-right: 236px;}\r\n.m-r-237[_ngcontent-%COMP%] {margin-right: 237px;}\r\n.m-r-238[_ngcontent-%COMP%] {margin-right: 238px;}\r\n.m-r-239[_ngcontent-%COMP%] {margin-right: 239px;}\r\n.m-r-240[_ngcontent-%COMP%] {margin-right: 240px;}\r\n.m-r-241[_ngcontent-%COMP%] {margin-right: 241px;}\r\n.m-r-242[_ngcontent-%COMP%] {margin-right: 242px;}\r\n.m-r-243[_ngcontent-%COMP%] {margin-right: 243px;}\r\n.m-r-244[_ngcontent-%COMP%] {margin-right: 244px;}\r\n.m-r-245[_ngcontent-%COMP%] {margin-right: 245px;}\r\n.m-r-246[_ngcontent-%COMP%] {margin-right: 246px;}\r\n.m-r-247[_ngcontent-%COMP%] {margin-right: 247px;}\r\n.m-r-248[_ngcontent-%COMP%] {margin-right: 248px;}\r\n.m-r-249[_ngcontent-%COMP%] {margin-right: 249px;}\r\n.m-r-250[_ngcontent-%COMP%] {margin-right: 250px;}\r\n.m-l-r-auto[_ngcontent-%COMP%] {margin-left: auto;\tmargin-right: auto;}\r\n.m-l-auto[_ngcontent-%COMP%] {margin-left: auto;}\r\n.m-r-auto[_ngcontent-%COMP%] {margin-right: auto;}\r\n\r\n\r\n.text-white[_ngcontent-%COMP%] {color: white;}\r\n.text-black[_ngcontent-%COMP%] {color: black;}\r\n.text-hov-white[_ngcontent-%COMP%]:hover {color: white;}\r\n\r\n.text-up[_ngcontent-%COMP%] {text-transform: uppercase;}\r\n\r\n.text-center[_ngcontent-%COMP%] {text-align: center;}\r\n.text-left[_ngcontent-%COMP%] {text-align: left;}\r\n.text-right[_ngcontent-%COMP%] {text-align: right;}\r\n.text-middle[_ngcontent-%COMP%] {vertical-align: middle;}\r\n\r\n.lh-1-0[_ngcontent-%COMP%] {line-height: 1.0;}\r\n.lh-1-1[_ngcontent-%COMP%] {line-height: 1.1;}\r\n.lh-1-2[_ngcontent-%COMP%] {line-height: 1.2;}\r\n.lh-1-3[_ngcontent-%COMP%] {line-height: 1.3;}\r\n.lh-1-4[_ngcontent-%COMP%] {line-height: 1.4;}\r\n.lh-1-5[_ngcontent-%COMP%] {line-height: 1.5;}\r\n.lh-1-6[_ngcontent-%COMP%] {line-height: 1.6;}\r\n.lh-1-7[_ngcontent-%COMP%] {line-height: 1.7;}\r\n.lh-1-8[_ngcontent-%COMP%] {line-height: 1.8;}\r\n.lh-1-9[_ngcontent-%COMP%] {line-height: 1.9;}\r\n.lh-2-0[_ngcontent-%COMP%] {line-height: 2.0;}\r\n.lh-2-1[_ngcontent-%COMP%] {line-height: 2.1;}\r\n.lh-2-2[_ngcontent-%COMP%] {line-height: 2.2;}\r\n.lh-2-3[_ngcontent-%COMP%] {line-height: 2.3;}\r\n.lh-2-4[_ngcontent-%COMP%] {line-height: 2.4;}\r\n.lh-2-5[_ngcontent-%COMP%] {line-height: 2.5;}\r\n.lh-2-6[_ngcontent-%COMP%] {line-height: 2.6;}\r\n.lh-2-7[_ngcontent-%COMP%] {line-height: 2.7;}\r\n.lh-2-8[_ngcontent-%COMP%] {line-height: 2.8;}\r\n.lh-2-9[_ngcontent-%COMP%] {line-height: 2.9;}\r\n\r\n\r\n.dis-none[_ngcontent-%COMP%] {display: none;}\r\n.dis-block[_ngcontent-%COMP%] {display: block;}\r\n.dis-inline[_ngcontent-%COMP%] {display: inline;}\r\n.dis-inline-block[_ngcontent-%COMP%] {display: inline-block;}\r\n.dis-flex[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n}\r\n\r\n.pos-relative[_ngcontent-%COMP%] {position: relative;}\r\n.pos-absolute[_ngcontent-%COMP%] {position: absolute;}\r\n.pos-fixed[_ngcontent-%COMP%] {position: fixed;}\r\n\r\n.float-l[_ngcontent-%COMP%] {float: left;}\r\n.float-r[_ngcontent-%COMP%] {float: right;}\r\n\r\n.sizefull[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n.w-full[_ngcontent-%COMP%] {width: 100%;}\r\n.h-full[_ngcontent-%COMP%] {height: 100%;}\r\n.max-w-full[_ngcontent-%COMP%] {max-width: 100%;}\r\n.max-h-full[_ngcontent-%COMP%] {max-height: 100%;}\r\n.min-w-full[_ngcontent-%COMP%] {min-width: 100%;}\r\n.min-h-full[_ngcontent-%COMP%] {min-height: 100%;}\r\n\r\n.top-0[_ngcontent-%COMP%] {top: 0;}\r\n.bottom-0[_ngcontent-%COMP%] {bottom: 0;}\r\n.left-0[_ngcontent-%COMP%] {left: 0;}\r\n.right-0[_ngcontent-%COMP%] {right: 0;}\r\n.top-auto[_ngcontent-%COMP%] {top: auto;}\r\n.bottom-auto[_ngcontent-%COMP%] {bottom: auto;}\r\n.left-auto[_ngcontent-%COMP%] {left: auto;}\r\n.right-auto[_ngcontent-%COMP%] {right: auto;}\r\n\r\n.op-0-0[_ngcontent-%COMP%] {opacity: 0;}\r\n.op-0-1[_ngcontent-%COMP%] {opacity: 0.1;}\r\n.op-0-2[_ngcontent-%COMP%] {opacity: 0.2;}\r\n.op-0-3[_ngcontent-%COMP%] {opacity: 0.3;}\r\n.op-0-4[_ngcontent-%COMP%] {opacity: 0.4;}\r\n.op-0-5[_ngcontent-%COMP%] {opacity: 0.5;}\r\n.op-0-6[_ngcontent-%COMP%] {opacity: 0.6;}\r\n.op-0-7[_ngcontent-%COMP%] {opacity: 0.7;}\r\n.op-0-8[_ngcontent-%COMP%] {opacity: 0.8;}\r\n.op-0-9[_ngcontent-%COMP%] {opacity: 0.9;}\r\n.op-1-0[_ngcontent-%COMP%] {opacity: 1;}\r\n\r\n.bgwhite[_ngcontent-%COMP%] {background-color: white;}\r\n.bgblack[_ngcontent-%COMP%] {background-color: black;}\r\n\r\n.wrap-pic-w[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {width: 100%;}\r\n.wrap-pic-max-w[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {max-width: 100%;}\r\n\r\n.wrap-pic-h[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {height: 100%;}\r\n.wrap-pic-max-h[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {max-height: 100%;}\r\n\r\n.wrap-pic-cir[_ngcontent-%COMP%] {\r\n\tborder-radius: 50%;\r\n\toverflow: hidden;\r\n}\r\n.wrap-pic-cir[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n}\r\n\r\n.hov-pointer[_ngcontent-%COMP%]:hover {cursor: pointer;}\r\n\r\n.hov-img-zoom[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n\toverflow: hidden;\r\n}\r\n.hov-img-zoom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n transition: all 0.6s;\r\n}\r\n.hov-img-zoom[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\n\ttransform: scale(1.1);\r\n}\r\n\r\n.bo-cir[_ngcontent-%COMP%] {border-radius: 50%;}\r\n.of-hidden[_ngcontent-%COMP%] {overflow: hidden;}\r\n.visible-false[_ngcontent-%COMP%] {visibility: hidden;}\r\n.visible-true[_ngcontent-%COMP%] {visibility: visible;}\r\n\r\n.trans-0-1[_ngcontent-%COMP%] {\r\n transition: all 0.1s;\r\n}\r\n.trans-0-2[_ngcontent-%COMP%] {\r\n transition: all 0.2s;\r\n}\r\n.trans-0-3[_ngcontent-%COMP%] {\r\n transition: all 0.3s;\r\n}\r\n.trans-0-4[_ngcontent-%COMP%] {\r\n transition: all 0.4s;\r\n}\r\n.trans-0-5[_ngcontent-%COMP%] {\r\n transition: all 0.5s;\r\n}\r\n.trans-0-6[_ngcontent-%COMP%] {\r\n transition: all 0.6s;\r\n}\r\n.trans-0-9[_ngcontent-%COMP%] {\r\n transition: all 0.9s;\r\n}\r\n.trans-1-0[_ngcontent-%COMP%] {\r\n transition: all 1s;\r\n}\r\n\r\n\r\n\r\n.flex-w[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-o-flex-wrap: wrap;\r\n\tflex-wrap: wrap;\r\n}\r\n\r\n.flex-l[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n}\r\n.flex-r[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n}\r\n.flex-c[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n.flex-sa[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n}\r\n.flex-sb[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.flex-t[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-ms-align-items: flex-start;\r\n\talign-items: flex-start;\r\n}\r\n.flex-b[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-ms-align-items: flex-end;\r\n\talign-items: flex-end;\r\n}\r\n.flex-m[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n}\r\n.flex-str[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-ms-align-items: stretch;\r\n\talign-items: stretch;\r\n}\r\n\r\n.flex-row[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: row;\r\n\t-o-flex-direction: row;\r\n\tflex-direction: row;\r\n}\r\n.flex-row-rev[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: row-reverse;\r\n\t-o-flex-direction: row-reverse;\r\n\tflex-direction: row-reverse;\r\n}\r\n.flex-col[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n}\r\n.flex-col-rev[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column-reverse;\r\n\t-o-flex-direction: column-reverse;\r\n\tflex-direction: column-reverse;\r\n}\r\n\r\n.flex-c-m[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n}\r\n.flex-c-t[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\t-ms-align-items: flex-start;\r\n\talign-items: flex-start;\r\n}\r\n.flex-c-b[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\t-ms-align-items: flex-end;\r\n\talign-items: flex-end;\r\n}\r\n.flex-c-str[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\t-ms-align-items: stretch;\r\n\talign-items: stretch;\r\n}\r\n.flex-l-m[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n}\r\n.flex-r-m[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n}\r\n.flex-sa-m[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n}\r\n.flex-sb-m[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n}\r\n\r\n.flex-col-l[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n\t-ms-align-items: flex-start;\r\n\talign-items: flex-start;\r\n}\r\n.flex-col-r[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n\t-ms-align-items: flex-end;\r\n\talign-items: flex-end;\r\n}\r\n.flex-col-c[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n}\r\n.flex-col-l-m[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n\t-ms-align-items: flex-start;\r\n\talign-items: flex-start;\r\n\tjustify-content: center;\r\n}\r\n.flex-col-r-m[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n\t-ms-align-items: flex-end;\r\n\talign-items: flex-end;\r\n\tjustify-content: center;\r\n}\r\n.flex-col-c-m[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n.flex-col-str[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n\t-ms-align-items: stretch;\r\n\talign-items: stretch;\r\n}\r\n.flex-col-sb[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.flex-col-rev-l[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column-reverse;\r\n\t-o-flex-direction: column-reverse;\r\n\tflex-direction: column-reverse;\r\n\t-ms-align-items: flex-start;\r\n\talign-items: flex-start;\r\n}\r\n.flex-col-rev-r[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column-reverse;\r\n\t-o-flex-direction: column-reverse;\r\n\tflex-direction: column-reverse;\r\n\t-ms-align-items: flex-end;\r\n\talign-items: flex-end;\r\n}\r\n.flex-col-rev-c[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column-reverse;\r\n\t-o-flex-direction: column-reverse;\r\n\tflex-direction: column-reverse;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n}\r\n.flex-col-rev-str[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column-reverse;\r\n\t-o-flex-direction: column-reverse;\r\n\tflex-direction: column-reverse;\r\n\t-ms-align-items: stretch;\r\n\talign-items: stretch;\r\n}\r\n\r\n.ab-c-m[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n}\r\n.ab-c-t[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\ttop: 0px;\r\n\tleft: 50%;\r\n\ttransform: translateX(-50%);\r\n}\r\n.ab-c-b[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tbottom: 0px;\r\n\tleft: 50%;\r\n\ttransform: translateX(-50%);\r\n}\r\n.ab-l-m[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tleft: 0px;\r\n\ttop: 50%;\r\n\ttransform: translateY(-50%);\r\n}\r\n.ab-r-m[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tright: 0px;\r\n\ttop: 50%;\r\n\ttransform: translateY(-50%);\r\n}\r\n.ab-t-l[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tleft: 0px;\r\n\ttop: 0px;\r\n}\r\n.ab-t-r[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tright: 0px;\r\n\ttop: 0px;\r\n}\r\n.ab-b-l[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tleft: 0px;\r\n\tbottom: 0px;\r\n}\r\n.ab-b-r[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tright: 0px;\r\n\tbottom: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vdXRpbC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUM7QUFDRCxPQUFPLGNBQWMsQ0FBQztBQUN0QixPQUFPLGNBQWMsQ0FBQztBQUN0QixPQUFPLGNBQWMsQ0FBQztBQUN0QixPQUFPLGNBQWMsQ0FBQztBQUN0QixPQUFPLGNBQWMsQ0FBQztBQUN0QixPQUFPLGNBQWMsQ0FBQztBQUN0QixPQUFPLGNBQWMsQ0FBQztBQUN0QixPQUFPLGNBQWMsQ0FBQztBQUN0QixPQUFPLGNBQWMsQ0FBQztBQUN0QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFFMUI7O0NBRUM7QUFDRCxRQUFRLGdCQUFnQixDQUFDO0FBQ3pCLFFBQVEsZ0JBQWdCLENBQUM7QUFDekIsUUFBUSxnQkFBZ0IsQ0FBQztBQUN6QixRQUFRLGdCQUFnQixDQUFDO0FBQ3pCLFFBQVEsZ0JBQWdCLENBQUM7QUFDekIsUUFBUSxnQkFBZ0IsQ0FBQztBQUN6QixRQUFRLGdCQUFnQixDQUFDO0FBQ3pCLFFBQVEsZ0JBQWdCLENBQUM7QUFDekIsUUFBUSxnQkFBZ0IsQ0FBQztBQUN6QixRQUFRLGdCQUFnQixDQUFDO0FBQ3pCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsUUFBUSxtQkFBbUIsQ0FBQztBQUM1QixRQUFRLG1CQUFtQixDQUFDO0FBQzVCLFFBQVEsbUJBQW1CLENBQUM7QUFDNUIsUUFBUSxtQkFBbUIsQ0FBQztBQUM1QixRQUFRLG1CQUFtQixDQUFDO0FBQzVCLFFBQVEsbUJBQW1CLENBQUM7QUFDNUIsUUFBUSxtQkFBbUIsQ0FBQztBQUM1QixRQUFRLG1CQUFtQixDQUFDO0FBQzVCLFFBQVEsbUJBQW1CLENBQUM7QUFDNUIsUUFBUSxtQkFBbUIsQ0FBQztBQUM1QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixTQUFTLG9CQUFvQixDQUFDO0FBQzlCLFNBQVMsb0JBQW9CLENBQUM7QUFDOUIsU0FBUyxvQkFBb0IsQ0FBQztBQUM5QixVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFVBQVUscUJBQXFCLENBQUM7QUFDaEMsVUFBVSxxQkFBcUIsQ0FBQztBQUNoQyxVQUFVLHFCQUFxQixDQUFDO0FBQ2hDLFFBQVEsaUJBQWlCLENBQUM7QUFDMUIsUUFBUSxpQkFBaUIsQ0FBQztBQUMxQixRQUFRLGlCQUFpQixDQUFDO0FBQzFCLFFBQVEsaUJBQWlCLENBQUM7QUFDMUIsUUFBUSxpQkFBaUIsQ0FBQztBQUMxQixRQUFRLGlCQUFpQixDQUFDO0FBQzFCLFFBQVEsaUJBQWlCLENBQUM7QUFDMUIsUUFBUSxpQkFBaUIsQ0FBQztBQUMxQixRQUFRLGlCQUFpQixDQUFDO0FBQzFCLFFBQVEsaUJBQWlCLENBQUM7QUFDMUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixRQUFRLGtCQUFrQixDQUFDO0FBQzNCLFFBQVEsa0JBQWtCLENBQUM7QUFDM0IsUUFBUSxrQkFBa0IsQ0FBQztBQUMzQixRQUFRLGtCQUFrQixDQUFDO0FBQzNCLFFBQVEsa0JBQWtCLENBQUM7QUFDM0IsUUFBUSxrQkFBa0IsQ0FBQztBQUMzQixRQUFRLGtCQUFrQixDQUFDO0FBQzNCLFFBQVEsa0JBQWtCLENBQUM7QUFDM0IsUUFBUSxrQkFBa0IsQ0FBQztBQUMzQixRQUFRLGtCQUFrQixDQUFDO0FBQzNCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFFL0I7O0NBRUM7QUFDRCxRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFVBQVUsaUJBQWlCLENBQUM7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQztBQUM1QixVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFFBQVEsa0JBQWtCLENBQUM7QUFDM0IsUUFBUSxrQkFBa0IsQ0FBQztBQUMzQixRQUFRLGtCQUFrQixDQUFDO0FBQzNCLFFBQVEsa0JBQWtCLENBQUM7QUFDM0IsUUFBUSxrQkFBa0IsQ0FBQztBQUMzQixRQUFRLGtCQUFrQixDQUFDO0FBQzNCLFFBQVEsa0JBQWtCLENBQUM7QUFDM0IsUUFBUSxrQkFBa0IsQ0FBQztBQUMzQixRQUFRLGtCQUFrQixDQUFDO0FBQzNCLFFBQVEsa0JBQWtCLENBQUM7QUFDM0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixTQUFTLG1CQUFtQixDQUFDO0FBQzdCLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixVQUFVLG9CQUFvQixDQUFDO0FBQy9CLFVBQVUsb0JBQW9CLENBQUM7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQztBQUMvQixRQUFRLGdCQUFnQixDQUFDO0FBQ3pCLFFBQVEsZ0JBQWdCLENBQUM7QUFDekIsUUFBUSxnQkFBZ0IsQ0FBQztBQUN6QixRQUFRLGdCQUFnQixDQUFDO0FBQ3pCLFFBQVEsZ0JBQWdCLENBQUM7QUFDekIsUUFBUSxnQkFBZ0IsQ0FBQztBQUN6QixRQUFRLGdCQUFnQixDQUFDO0FBQ3pCLFFBQVEsZ0JBQWdCLENBQUM7QUFDekIsUUFBUSxnQkFBZ0IsQ0FBQztBQUN6QixRQUFRLGdCQUFnQixDQUFDO0FBQ3pCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFNBQVMsaUJBQWlCLENBQUM7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQztBQUMzQixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQztBQUM3QixVQUFVLGtCQUFrQixDQUFDO0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7QUFDN0IsUUFBUSxpQkFBaUIsQ0FBQztBQUMxQixRQUFRLGlCQUFpQixDQUFDO0FBQzFCLFFBQVEsaUJBQWlCLENBQUM7QUFDMUIsUUFBUSxpQkFBaUIsQ0FBQztBQUMxQixRQUFRLGlCQUFpQixDQUFDO0FBQzFCLFFBQVEsaUJBQWlCLENBQUM7QUFDMUIsUUFBUSxpQkFBaUIsQ0FBQztBQUMxQixRQUFRLGlCQUFpQixDQUFDO0FBQzFCLFFBQVEsaUJBQWlCLENBQUM7QUFDMUIsUUFBUSxpQkFBaUIsQ0FBQztBQUMxQixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixTQUFTLGtCQUFrQixDQUFDO0FBQzVCLFNBQVMsa0JBQWtCLENBQUM7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQztBQUM1QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLFVBQVUsbUJBQW1CLENBQUM7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQztBQUM5QixVQUFVLG1CQUFtQixDQUFDO0FBQzlCLGFBQWEsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7QUFDbkQsV0FBVyxpQkFBaUIsQ0FBQztBQUM3QixXQUFXLGtCQUFrQixDQUFDO0FBSTlCOztDQUVDO0FBQ0QseUNBQXlDO0FBQ3pDLGFBQWEsWUFBWSxDQUFDO0FBQzFCLGFBQWEsWUFBWSxDQUFDO0FBRTFCLHVCQUF1QixZQUFZLENBQUM7QUFFcEMseUNBQXlDO0FBQ3pDLFVBQVUseUJBQXlCLENBQUM7QUFFcEMseUNBQXlDO0FBQ3pDLGNBQWMsa0JBQWtCLENBQUM7QUFDakMsWUFBWSxnQkFBZ0IsQ0FBQztBQUM3QixhQUFhLGlCQUFpQixDQUFDO0FBQy9CLGNBQWMsc0JBQXNCLENBQUM7QUFFckMseUNBQXlDO0FBQ3pDLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixTQUFTLGdCQUFnQixDQUFDO0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQU0xQjs7Q0FFQztBQUVEOztDQUVDO0FBQ0QsV0FBVyxhQUFhLENBQUM7QUFDekIsWUFBWSxjQUFjLENBQUM7QUFDM0IsYUFBYSxlQUFlLENBQUM7QUFDN0IsbUJBQW1CLHFCQUFxQixDQUFDO0FBQ3pDO0NBS0MsYUFBYTtBQUNkO0FBRUE7O0NBRUM7QUFDRCxlQUFlLGtCQUFrQixDQUFDO0FBQ2xDLGVBQWUsa0JBQWtCLENBQUM7QUFDbEMsWUFBWSxlQUFlLENBQUM7QUFFNUI7O0NBRUM7QUFDRCxVQUFVLFdBQVcsQ0FBQztBQUN0QixVQUFVLFlBQVksQ0FBQztBQUd2Qjs7Q0FFQztBQUNEO0NBQ0MsV0FBVztDQUNYLFlBQVk7QUFDYjtBQUNBLFNBQVMsV0FBVyxDQUFDO0FBQ3JCLFNBQVMsWUFBWSxDQUFDO0FBQ3RCLGFBQWEsZUFBZSxDQUFDO0FBQzdCLGFBQWEsZ0JBQWdCLENBQUM7QUFDOUIsYUFBYSxlQUFlLENBQUM7QUFDN0IsYUFBYSxnQkFBZ0IsQ0FBQztBQUU5Qjs7Q0FFQztBQUNELFFBQVEsTUFBTSxDQUFDO0FBQ2YsV0FBVyxTQUFTLENBQUM7QUFDckIsU0FBUyxPQUFPLENBQUM7QUFDakIsVUFBVSxRQUFRLENBQUM7QUFFbkIsV0FBVyxTQUFTLENBQUM7QUFDckIsY0FBYyxZQUFZLENBQUM7QUFDM0IsWUFBWSxVQUFVLENBQUM7QUFDdkIsYUFBYSxXQUFXLENBQUM7QUFHekI7O0NBRUM7QUFDRCxTQUFTLFVBQVUsQ0FBQztBQUNwQixTQUFTLFlBQVksQ0FBQztBQUN0QixTQUFTLFlBQVksQ0FBQztBQUN0QixTQUFTLFlBQVksQ0FBQztBQUN0QixTQUFTLFlBQVksQ0FBQztBQUN0QixTQUFTLFlBQVksQ0FBQztBQUN0QixTQUFTLFlBQVksQ0FBQztBQUN0QixTQUFTLFlBQVksQ0FBQztBQUN0QixTQUFTLFlBQVksQ0FBQztBQUN0QixTQUFTLFlBQVksQ0FBQztBQUN0QixTQUFTLFVBQVUsQ0FBQztBQUVwQjs7Q0FFQztBQUNELFVBQVUsdUJBQXVCLENBQUM7QUFDbEMsVUFBVSx1QkFBdUIsQ0FBQztBQUlsQzs7Q0FFQztBQUNELGlCQUFpQixXQUFXLENBQUM7QUFDN0IscUJBQXFCLGVBQWUsQ0FBQztBQUVyQyx5Q0FBeUM7QUFDekMsaUJBQWlCLFlBQVksQ0FBQztBQUM5QixxQkFBcUIsZ0JBQWdCLENBQUM7QUFFdEMseUNBQXlDO0FBQ3pDO0NBQ0Msa0JBQWtCO0NBQ2xCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBSUE7O0NBRUM7QUFDRCxvQkFBb0IsZUFBZSxDQUFDO0FBRXBDLHlDQUF5QztBQUN6QztDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFdBQVc7Q0FJUixvQkFBb0I7QUFDeEI7QUFDQTtDQUtDLHFCQUFxQjtBQUN0QjtBQUlBOztDQUVDO0FBQ0QsU0FBUyxrQkFBa0IsQ0FBQztBQUU1QixZQUFZLGdCQUFnQixDQUFDO0FBRTdCLGdCQUFnQixrQkFBa0IsQ0FBQztBQUNuQyxlQUFlLG1CQUFtQixDQUFDO0FBS25DOztDQUVDO0FBQ0Q7Q0FJSSxvQkFBb0I7QUFDeEI7QUFDQTtDQUlJLG9CQUFvQjtBQUN4QjtBQUNBO0NBSUksb0JBQW9CO0FBQ3hCO0FBQ0E7Q0FJSSxvQkFBb0I7QUFDeEI7QUFDQTtDQUlJLG9CQUFvQjtBQUN4QjtBQUNBO0NBSUksb0JBQW9CO0FBQ3hCO0FBQ0E7Q0FJSSxvQkFBb0I7QUFDeEI7QUFDQTtDQUlJLGtCQUFrQjtBQUN0QjtBQUlBOztDQUVDO0FBRUQ7O0NBRUM7QUFDRCx5Q0FBeUM7QUFDekM7Q0FLQyxhQUFhO0NBSWIsa0JBQWtCO0NBQ2xCLGVBQWU7QUFDaEI7QUFFQSx5Q0FBeUM7QUFDekM7Q0FLQyxhQUFhO0NBQ2IsMkJBQTJCO0FBQzVCO0FBRUE7Q0FLQyxhQUFhO0NBQ2IseUJBQXlCO0FBQzFCO0FBRUE7Q0FLQyxhQUFhO0NBQ2IsdUJBQXVCO0FBQ3hCO0FBRUE7Q0FLQyxhQUFhO0NBQ2IsNkJBQTZCO0FBQzlCO0FBRUE7Q0FLQyxhQUFhO0NBQ2IsOEJBQThCO0FBQy9CO0FBRUEseUNBQXlDO0FBQ3pDO0NBS0MsYUFBYTtDQUNiLDJCQUEyQjtDQUMzQix1QkFBdUI7QUFDeEI7QUFFQTtDQUtDLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIscUJBQXFCO0FBQ3RCO0FBRUE7Q0FLQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjtBQUVBO0NBS0MsYUFBYTtDQUNiLHdCQUF3QjtDQUN4QixvQkFBb0I7QUFDckI7QUFFQSx5Q0FBeUM7QUFDekM7Q0FLQyxhQUFhO0NBRWIsd0JBQXdCO0NBRXhCLHNCQUFzQjtDQUN0QixtQkFBbUI7QUFDcEI7QUFFQTtDQUtDLGFBQWE7Q0FFYixnQ0FBZ0M7Q0FFaEMsOEJBQThCO0NBQzlCLDJCQUEyQjtBQUM1QjtBQUVBO0NBS0MsYUFBYTtDQUViLDJCQUEyQjtDQUUzQix5QkFBeUI7Q0FDekIsc0JBQXNCO0FBQ3ZCO0FBRUE7Q0FLQyxhQUFhO0NBRWIsbUNBQW1DO0NBRW5DLGlDQUFpQztDQUNqQyw4QkFBOEI7QUFDL0I7QUFFQSx5Q0FBeUM7QUFDekM7Q0FLQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7QUFFQTtDQUtDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsMkJBQTJCO0NBQzNCLHVCQUF1QjtBQUN4QjtBQUVBO0NBS0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2Qix5QkFBeUI7Q0FDekIscUJBQXFCO0FBQ3RCO0FBRUE7Q0FLQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLHdCQUF3QjtDQUN4QixvQkFBb0I7QUFDckI7QUFFQTtDQUtDLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjtBQUVBO0NBS0MsYUFBYTtDQUNiLHlCQUF5QjtDQUN6Qix1QkFBdUI7Q0FDdkIsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FLQyxhQUFhO0NBQ2IsNkJBQTZCO0NBQzdCLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7QUFFQTtDQUtDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjtBQUVBLHlDQUF5QztBQUN6QztDQUtDLGFBQWE7Q0FFYiwyQkFBMkI7Q0FFM0IseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QiwyQkFBMkI7Q0FDM0IsdUJBQXVCO0FBQ3hCO0FBRUE7Q0FLQyxhQUFhO0NBRWIsMkJBQTJCO0NBRTNCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIseUJBQXlCO0NBQ3pCLHFCQUFxQjtBQUN0QjtBQUVBO0NBS0MsYUFBYTtDQUViLDJCQUEyQjtDQUUzQix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7QUFFQTtDQUtDLGFBQWE7Q0FFYiwyQkFBMkI7Q0FFM0IseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QiwyQkFBMkI7Q0FDM0IsdUJBQXVCO0NBQ3ZCLHVCQUF1QjtBQUN4QjtBQUVBO0NBS0MsYUFBYTtDQUViLDJCQUEyQjtDQUUzQix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLHlCQUF5QjtDQUN6QixxQkFBcUI7Q0FDckIsdUJBQXVCO0FBQ3hCO0FBRUE7Q0FLQyxhQUFhO0NBRWIsMkJBQTJCO0NBRTNCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEI7QUFFQTtDQUtDLGFBQWE7Q0FFYiwyQkFBMkI7Q0FFM0IseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0Qix3QkFBd0I7Q0FDeEIsb0JBQW9CO0FBQ3JCO0FBRUE7Q0FLQyxhQUFhO0NBRWIsMkJBQTJCO0NBRTNCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsOEJBQThCO0FBQy9CO0FBRUEseUNBQXlDO0FBQ3pDO0NBS0MsYUFBYTtDQUViLG1DQUFtQztDQUVuQyxpQ0FBaUM7Q0FDakMsOEJBQThCO0NBQzlCLDJCQUEyQjtDQUMzQix1QkFBdUI7QUFDeEI7QUFFQTtDQUtDLGFBQWE7Q0FFYixtQ0FBbUM7Q0FFbkMsaUNBQWlDO0NBQ2pDLDhCQUE4QjtDQUM5Qix5QkFBeUI7Q0FDekIscUJBQXFCO0FBQ3RCO0FBRUE7Q0FLQyxhQUFhO0NBRWIsbUNBQW1DO0NBRW5DLGlDQUFpQztDQUNqQyw4QkFBOEI7Q0FDOUIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjtBQUVBO0NBS0MsYUFBYTtDQUViLG1DQUFtQztDQUVuQyxpQ0FBaUM7Q0FDakMsOEJBQThCO0NBQzlCLHdCQUF3QjtDQUN4QixvQkFBb0I7QUFDckI7QUFHQTs7Q0FFQztBQUNEO0NBQ0Msa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixTQUFTO0NBS1QsZ0NBQWdDO0FBQ2pDO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFNBQVM7Q0FLVCwyQkFBMkI7QUFDNUI7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsU0FBUztDQUtULDJCQUEyQjtBQUM1QjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxRQUFRO0NBS1IsMkJBQTJCO0FBQzVCO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFFBQVE7Q0FLUiwyQkFBMkI7QUFDNUI7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsUUFBUTtBQUNUO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFFBQVE7QUFDVDtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxXQUFXO0FBQ1o7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsV0FBVztBQUNaIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vdXRpbC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlsgRk9OVCBTSVpFIF1cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuKi9cclxuLmZzLTEge2ZvbnQtc2l6ZTogMXB4O31cclxuLmZzLTIge2ZvbnQtc2l6ZTogMnB4O31cclxuLmZzLTMge2ZvbnQtc2l6ZTogM3B4O31cclxuLmZzLTQge2ZvbnQtc2l6ZTogNHB4O31cclxuLmZzLTUge2ZvbnQtc2l6ZTogNXB4O31cclxuLmZzLTYge2ZvbnQtc2l6ZTogNnB4O31cclxuLmZzLTcge2ZvbnQtc2l6ZTogN3B4O31cclxuLmZzLTgge2ZvbnQtc2l6ZTogOHB4O31cclxuLmZzLTkge2ZvbnQtc2l6ZTogOXB4O31cclxuLmZzLTEwIHtmb250LXNpemU6IDEwcHg7fVxyXG4uZnMtMTEge2ZvbnQtc2l6ZTogMTFweDt9XHJcbi5mcy0xMiB7Zm9udC1zaXplOiAxMnB4O31cclxuLmZzLTEzIHtmb250LXNpemU6IDEzcHg7fVxyXG4uZnMtMTQge2ZvbnQtc2l6ZTogMTRweDt9XHJcbi5mcy0xNSB7Zm9udC1zaXplOiAxNXB4O31cclxuLmZzLTE2IHtmb250LXNpemU6IDE2cHg7fVxyXG4uZnMtMTcge2ZvbnQtc2l6ZTogMTdweDt9XHJcbi5mcy0xOCB7Zm9udC1zaXplOiAxOHB4O31cclxuLmZzLTE5IHtmb250LXNpemU6IDE5cHg7fVxyXG4uZnMtMjAge2ZvbnQtc2l6ZTogMjBweDt9XHJcbi5mcy0yMSB7Zm9udC1zaXplOiAyMXB4O31cclxuLmZzLTIyIHtmb250LXNpemU6IDIycHg7fVxyXG4uZnMtMjMge2ZvbnQtc2l6ZTogMjNweDt9XHJcbi5mcy0yNCB7Zm9udC1zaXplOiAyNHB4O31cclxuLmZzLTI1IHtmb250LXNpemU6IDI1cHg7fVxyXG4uZnMtMjYge2ZvbnQtc2l6ZTogMjZweDt9XHJcbi5mcy0yNyB7Zm9udC1zaXplOiAyN3B4O31cclxuLmZzLTI4IHtmb250LXNpemU6IDI4cHg7fVxyXG4uZnMtMjkge2ZvbnQtc2l6ZTogMjlweDt9XHJcbi5mcy0zMCB7Zm9udC1zaXplOiAzMHB4O31cclxuLmZzLTMxIHtmb250LXNpemU6IDMxcHg7fVxyXG4uZnMtMzIge2ZvbnQtc2l6ZTogMzJweDt9XHJcbi5mcy0zMyB7Zm9udC1zaXplOiAzM3B4O31cclxuLmZzLTM0IHtmb250LXNpemU6IDM0cHg7fVxyXG4uZnMtMzUge2ZvbnQtc2l6ZTogMzVweDt9XHJcbi5mcy0zNiB7Zm9udC1zaXplOiAzNnB4O31cclxuLmZzLTM3IHtmb250LXNpemU6IDM3cHg7fVxyXG4uZnMtMzgge2ZvbnQtc2l6ZTogMzhweDt9XHJcbi5mcy0zOSB7Zm9udC1zaXplOiAzOXB4O31cclxuLmZzLTQwIHtmb250LXNpemU6IDQwcHg7fVxyXG4uZnMtNDEge2ZvbnQtc2l6ZTogNDFweDt9XHJcbi5mcy00MiB7Zm9udC1zaXplOiA0MnB4O31cclxuLmZzLTQzIHtmb250LXNpemU6IDQzcHg7fVxyXG4uZnMtNDQge2ZvbnQtc2l6ZTogNDRweDt9XHJcbi5mcy00NSB7Zm9udC1zaXplOiA0NXB4O31cclxuLmZzLTQ2IHtmb250LXNpemU6IDQ2cHg7fVxyXG4uZnMtNDcge2ZvbnQtc2l6ZTogNDdweDt9XHJcbi5mcy00OCB7Zm9udC1zaXplOiA0OHB4O31cclxuLmZzLTQ5IHtmb250LXNpemU6IDQ5cHg7fVxyXG4uZnMtNTAge2ZvbnQtc2l6ZTogNTBweDt9XHJcbi5mcy01MSB7Zm9udC1zaXplOiA1MXB4O31cclxuLmZzLTUyIHtmb250LXNpemU6IDUycHg7fVxyXG4uZnMtNTMge2ZvbnQtc2l6ZTogNTNweDt9XHJcbi5mcy01NCB7Zm9udC1zaXplOiA1NHB4O31cclxuLmZzLTU1IHtmb250LXNpemU6IDU1cHg7fVxyXG4uZnMtNTYge2ZvbnQtc2l6ZTogNTZweDt9XHJcbi5mcy01NyB7Zm9udC1zaXplOiA1N3B4O31cclxuLmZzLTU4IHtmb250LXNpemU6IDU4cHg7fVxyXG4uZnMtNTkge2ZvbnQtc2l6ZTogNTlweDt9XHJcbi5mcy02MCB7Zm9udC1zaXplOiA2MHB4O31cclxuLmZzLTYxIHtmb250LXNpemU6IDYxcHg7fVxyXG4uZnMtNjIge2ZvbnQtc2l6ZTogNjJweDt9XHJcbi5mcy02MyB7Zm9udC1zaXplOiA2M3B4O31cclxuLmZzLTY0IHtmb250LXNpemU6IDY0cHg7fVxyXG4uZnMtNjUge2ZvbnQtc2l6ZTogNjVweDt9XHJcbi5mcy02NiB7Zm9udC1zaXplOiA2NnB4O31cclxuLmZzLTY3IHtmb250LXNpemU6IDY3cHg7fVxyXG4uZnMtNjgge2ZvbnQtc2l6ZTogNjhweDt9XHJcbi5mcy02OSB7Zm9udC1zaXplOiA2OXB4O31cclxuLmZzLTcwIHtmb250LXNpemU6IDcwcHg7fVxyXG4uZnMtNzEge2ZvbnQtc2l6ZTogNzFweDt9XHJcbi5mcy03MiB7Zm9udC1zaXplOiA3MnB4O31cclxuLmZzLTczIHtmb250LXNpemU6IDczcHg7fVxyXG4uZnMtNzQge2ZvbnQtc2l6ZTogNzRweDt9XHJcbi5mcy03NSB7Zm9udC1zaXplOiA3NXB4O31cclxuLmZzLTc2IHtmb250LXNpemU6IDc2cHg7fVxyXG4uZnMtNzcge2ZvbnQtc2l6ZTogNzdweDt9XHJcbi5mcy03OCB7Zm9udC1zaXplOiA3OHB4O31cclxuLmZzLTc5IHtmb250LXNpemU6IDc5cHg7fVxyXG4uZnMtODAge2ZvbnQtc2l6ZTogODBweDt9XHJcbi5mcy04MSB7Zm9udC1zaXplOiA4MXB4O31cclxuLmZzLTgyIHtmb250LXNpemU6IDgycHg7fVxyXG4uZnMtODMge2ZvbnQtc2l6ZTogODNweDt9XHJcbi5mcy04NCB7Zm9udC1zaXplOiA4NHB4O31cclxuLmZzLTg1IHtmb250LXNpemU6IDg1cHg7fVxyXG4uZnMtODYge2ZvbnQtc2l6ZTogODZweDt9XHJcbi5mcy04NyB7Zm9udC1zaXplOiA4N3B4O31cclxuLmZzLTg4IHtmb250LXNpemU6IDg4cHg7fVxyXG4uZnMtODkge2ZvbnQtc2l6ZTogODlweDt9XHJcbi5mcy05MCB7Zm9udC1zaXplOiA5MHB4O31cclxuLmZzLTkxIHtmb250LXNpemU6IDkxcHg7fVxyXG4uZnMtOTIge2ZvbnQtc2l6ZTogOTJweDt9XHJcbi5mcy05MyB7Zm9udC1zaXplOiA5M3B4O31cclxuLmZzLTk0IHtmb250LXNpemU6IDk0cHg7fVxyXG4uZnMtOTUge2ZvbnQtc2l6ZTogOTVweDt9XHJcbi5mcy05NiB7Zm9udC1zaXplOiA5NnB4O31cclxuLmZzLTk3IHtmb250LXNpemU6IDk3cHg7fVxyXG4uZnMtOTgge2ZvbnQtc2l6ZTogOThweDt9XHJcbi5mcy05OSB7Zm9udC1zaXplOiA5OXB4O31cclxuLmZzLTEwMCB7Zm9udC1zaXplOiAxMDBweDt9XHJcbi5mcy0xMDEge2ZvbnQtc2l6ZTogMTAxcHg7fVxyXG4uZnMtMTAyIHtmb250LXNpemU6IDEwMnB4O31cclxuLmZzLTEwMyB7Zm9udC1zaXplOiAxMDNweDt9XHJcbi5mcy0xMDQge2ZvbnQtc2l6ZTogMTA0cHg7fVxyXG4uZnMtMTA1IHtmb250LXNpemU6IDEwNXB4O31cclxuLmZzLTEwNiB7Zm9udC1zaXplOiAxMDZweDt9XHJcbi5mcy0xMDcge2ZvbnQtc2l6ZTogMTA3cHg7fVxyXG4uZnMtMTA4IHtmb250LXNpemU6IDEwOHB4O31cclxuLmZzLTEwOSB7Zm9udC1zaXplOiAxMDlweDt9XHJcbi5mcy0xMTAge2ZvbnQtc2l6ZTogMTEwcHg7fVxyXG4uZnMtMTExIHtmb250LXNpemU6IDExMXB4O31cclxuLmZzLTExMiB7Zm9udC1zaXplOiAxMTJweDt9XHJcbi5mcy0xMTMge2ZvbnQtc2l6ZTogMTEzcHg7fVxyXG4uZnMtMTE0IHtmb250LXNpemU6IDExNHB4O31cclxuLmZzLTExNSB7Zm9udC1zaXplOiAxMTVweDt9XHJcbi5mcy0xMTYge2ZvbnQtc2l6ZTogMTE2cHg7fVxyXG4uZnMtMTE3IHtmb250LXNpemU6IDExN3B4O31cclxuLmZzLTExOCB7Zm9udC1zaXplOiAxMThweDt9XHJcbi5mcy0xMTkge2ZvbnQtc2l6ZTogMTE5cHg7fVxyXG4uZnMtMTIwIHtmb250LXNpemU6IDEyMHB4O31cclxuLmZzLTEyMSB7Zm9udC1zaXplOiAxMjFweDt9XHJcbi5mcy0xMjIge2ZvbnQtc2l6ZTogMTIycHg7fVxyXG4uZnMtMTIzIHtmb250LXNpemU6IDEyM3B4O31cclxuLmZzLTEyNCB7Zm9udC1zaXplOiAxMjRweDt9XHJcbi5mcy0xMjUge2ZvbnQtc2l6ZTogMTI1cHg7fVxyXG4uZnMtMTI2IHtmb250LXNpemU6IDEyNnB4O31cclxuLmZzLTEyNyB7Zm9udC1zaXplOiAxMjdweDt9XHJcbi5mcy0xMjgge2ZvbnQtc2l6ZTogMTI4cHg7fVxyXG4uZnMtMTI5IHtmb250LXNpemU6IDEyOXB4O31cclxuLmZzLTEzMCB7Zm9udC1zaXplOiAxMzBweDt9XHJcbi5mcy0xMzEge2ZvbnQtc2l6ZTogMTMxcHg7fVxyXG4uZnMtMTMyIHtmb250LXNpemU6IDEzMnB4O31cclxuLmZzLTEzMyB7Zm9udC1zaXplOiAxMzNweDt9XHJcbi5mcy0xMzQge2ZvbnQtc2l6ZTogMTM0cHg7fVxyXG4uZnMtMTM1IHtmb250LXNpemU6IDEzNXB4O31cclxuLmZzLTEzNiB7Zm9udC1zaXplOiAxMzZweDt9XHJcbi5mcy0xMzcge2ZvbnQtc2l6ZTogMTM3cHg7fVxyXG4uZnMtMTM4IHtmb250LXNpemU6IDEzOHB4O31cclxuLmZzLTEzOSB7Zm9udC1zaXplOiAxMzlweDt9XHJcbi5mcy0xNDAge2ZvbnQtc2l6ZTogMTQwcHg7fVxyXG4uZnMtMTQxIHtmb250LXNpemU6IDE0MXB4O31cclxuLmZzLTE0MiB7Zm9udC1zaXplOiAxNDJweDt9XHJcbi5mcy0xNDMge2ZvbnQtc2l6ZTogMTQzcHg7fVxyXG4uZnMtMTQ0IHtmb250LXNpemU6IDE0NHB4O31cclxuLmZzLTE0NSB7Zm9udC1zaXplOiAxNDVweDt9XHJcbi5mcy0xNDYge2ZvbnQtc2l6ZTogMTQ2cHg7fVxyXG4uZnMtMTQ3IHtmb250LXNpemU6IDE0N3B4O31cclxuLmZzLTE0OCB7Zm9udC1zaXplOiAxNDhweDt9XHJcbi5mcy0xNDkge2ZvbnQtc2l6ZTogMTQ5cHg7fVxyXG4uZnMtMTUwIHtmb250LXNpemU6IDE1MHB4O31cclxuLmZzLTE1MSB7Zm9udC1zaXplOiAxNTFweDt9XHJcbi5mcy0xNTIge2ZvbnQtc2l6ZTogMTUycHg7fVxyXG4uZnMtMTUzIHtmb250LXNpemU6IDE1M3B4O31cclxuLmZzLTE1NCB7Zm9udC1zaXplOiAxNTRweDt9XHJcbi5mcy0xNTUge2ZvbnQtc2l6ZTogMTU1cHg7fVxyXG4uZnMtMTU2IHtmb250LXNpemU6IDE1NnB4O31cclxuLmZzLTE1NyB7Zm9udC1zaXplOiAxNTdweDt9XHJcbi5mcy0xNTgge2ZvbnQtc2l6ZTogMTU4cHg7fVxyXG4uZnMtMTU5IHtmb250LXNpemU6IDE1OXB4O31cclxuLmZzLTE2MCB7Zm9udC1zaXplOiAxNjBweDt9XHJcbi5mcy0xNjEge2ZvbnQtc2l6ZTogMTYxcHg7fVxyXG4uZnMtMTYyIHtmb250LXNpemU6IDE2MnB4O31cclxuLmZzLTE2MyB7Zm9udC1zaXplOiAxNjNweDt9XHJcbi5mcy0xNjQge2ZvbnQtc2l6ZTogMTY0cHg7fVxyXG4uZnMtMTY1IHtmb250LXNpemU6IDE2NXB4O31cclxuLmZzLTE2NiB7Zm9udC1zaXplOiAxNjZweDt9XHJcbi5mcy0xNjcge2ZvbnQtc2l6ZTogMTY3cHg7fVxyXG4uZnMtMTY4IHtmb250LXNpemU6IDE2OHB4O31cclxuLmZzLTE2OSB7Zm9udC1zaXplOiAxNjlweDt9XHJcbi5mcy0xNzAge2ZvbnQtc2l6ZTogMTcwcHg7fVxyXG4uZnMtMTcxIHtmb250LXNpemU6IDE3MXB4O31cclxuLmZzLTE3MiB7Zm9udC1zaXplOiAxNzJweDt9XHJcbi5mcy0xNzMge2ZvbnQtc2l6ZTogMTczcHg7fVxyXG4uZnMtMTc0IHtmb250LXNpemU6IDE3NHB4O31cclxuLmZzLTE3NSB7Zm9udC1zaXplOiAxNzVweDt9XHJcbi5mcy0xNzYge2ZvbnQtc2l6ZTogMTc2cHg7fVxyXG4uZnMtMTc3IHtmb250LXNpemU6IDE3N3B4O31cclxuLmZzLTE3OCB7Zm9udC1zaXplOiAxNzhweDt9XHJcbi5mcy0xNzkge2ZvbnQtc2l6ZTogMTc5cHg7fVxyXG4uZnMtMTgwIHtmb250LXNpemU6IDE4MHB4O31cclxuLmZzLTE4MSB7Zm9udC1zaXplOiAxODFweDt9XHJcbi5mcy0xODIge2ZvbnQtc2l6ZTogMTgycHg7fVxyXG4uZnMtMTgzIHtmb250LXNpemU6IDE4M3B4O31cclxuLmZzLTE4NCB7Zm9udC1zaXplOiAxODRweDt9XHJcbi5mcy0xODUge2ZvbnQtc2l6ZTogMTg1cHg7fVxyXG4uZnMtMTg2IHtmb250LXNpemU6IDE4NnB4O31cclxuLmZzLTE4NyB7Zm9udC1zaXplOiAxODdweDt9XHJcbi5mcy0xODgge2ZvbnQtc2l6ZTogMTg4cHg7fVxyXG4uZnMtMTg5IHtmb250LXNpemU6IDE4OXB4O31cclxuLmZzLTE5MCB7Zm9udC1zaXplOiAxOTBweDt9XHJcbi5mcy0xOTEge2ZvbnQtc2l6ZTogMTkxcHg7fVxyXG4uZnMtMTkyIHtmb250LXNpemU6IDE5MnB4O31cclxuLmZzLTE5MyB7Zm9udC1zaXplOiAxOTNweDt9XHJcbi5mcy0xOTQge2ZvbnQtc2l6ZTogMTk0cHg7fVxyXG4uZnMtMTk1IHtmb250LXNpemU6IDE5NXB4O31cclxuLmZzLTE5NiB7Zm9udC1zaXplOiAxOTZweDt9XHJcbi5mcy0xOTcge2ZvbnQtc2l6ZTogMTk3cHg7fVxyXG4uZnMtMTk4IHtmb250LXNpemU6IDE5OHB4O31cclxuLmZzLTE5OSB7Zm9udC1zaXplOiAxOTlweDt9XHJcbi5mcy0yMDAge2ZvbnQtc2l6ZTogMjAwcHg7fVxyXG5cclxuLypbIFBBRERJTkcgXVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4qL1xyXG4ucC10LTAge3BhZGRpbmctdG9wOiAwcHg7fVxyXG4ucC10LTEge3BhZGRpbmctdG9wOiAxcHg7fVxyXG4ucC10LTIge3BhZGRpbmctdG9wOiAycHg7fVxyXG4ucC10LTMge3BhZGRpbmctdG9wOiAzcHg7fVxyXG4ucC10LTQge3BhZGRpbmctdG9wOiA0cHg7fVxyXG4ucC10LTUge3BhZGRpbmctdG9wOiA1cHg7fVxyXG4ucC10LTYge3BhZGRpbmctdG9wOiA2cHg7fVxyXG4ucC10LTcge3BhZGRpbmctdG9wOiA3cHg7fVxyXG4ucC10LTgge3BhZGRpbmctdG9wOiA4cHg7fVxyXG4ucC10LTkge3BhZGRpbmctdG9wOiA5cHg7fVxyXG4ucC10LTEwIHtwYWRkaW5nLXRvcDogMTBweDt9XHJcbi5wLXQtMTEge3BhZGRpbmctdG9wOiAxMXB4O31cclxuLnAtdC0xMiB7cGFkZGluZy10b3A6IDEycHg7fVxyXG4ucC10LTEzIHtwYWRkaW5nLXRvcDogMTNweDt9XHJcbi5wLXQtMTQge3BhZGRpbmctdG9wOiAxNHB4O31cclxuLnAtdC0xNSB7cGFkZGluZy10b3A6IDE1cHg7fVxyXG4ucC10LTE2IHtwYWRkaW5nLXRvcDogMTZweDt9XHJcbi5wLXQtMTcge3BhZGRpbmctdG9wOiAxN3B4O31cclxuLnAtdC0xOCB7cGFkZGluZy10b3A6IDE4cHg7fVxyXG4ucC10LTE5IHtwYWRkaW5nLXRvcDogMTlweDt9XHJcbi5wLXQtMjAge3BhZGRpbmctdG9wOiAyMHB4O31cclxuLnAtdC0yMSB7cGFkZGluZy10b3A6IDIxcHg7fVxyXG4ucC10LTIyIHtwYWRkaW5nLXRvcDogMjJweDt9XHJcbi5wLXQtMjMge3BhZGRpbmctdG9wOiAyM3B4O31cclxuLnAtdC0yNCB7cGFkZGluZy10b3A6IDI0cHg7fVxyXG4ucC10LTI1IHtwYWRkaW5nLXRvcDogMjVweDt9XHJcbi5wLXQtMjYge3BhZGRpbmctdG9wOiAyNnB4O31cclxuLnAtdC0yNyB7cGFkZGluZy10b3A6IDI3cHg7fVxyXG4ucC10LTI4IHtwYWRkaW5nLXRvcDogMjhweDt9XHJcbi5wLXQtMjkge3BhZGRpbmctdG9wOiAyOXB4O31cclxuLnAtdC0zMCB7cGFkZGluZy10b3A6IDMwcHg7fVxyXG4ucC10LTMxIHtwYWRkaW5nLXRvcDogMzFweDt9XHJcbi5wLXQtMzIge3BhZGRpbmctdG9wOiAzMnB4O31cclxuLnAtdC0zMyB7cGFkZGluZy10b3A6IDMzcHg7fVxyXG4ucC10LTM0IHtwYWRkaW5nLXRvcDogMzRweDt9XHJcbi5wLXQtMzUge3BhZGRpbmctdG9wOiAzNXB4O31cclxuLnAtdC0zNiB7cGFkZGluZy10b3A6IDM2cHg7fVxyXG4ucC10LTM3IHtwYWRkaW5nLXRvcDogMzdweDt9XHJcbi5wLXQtMzgge3BhZGRpbmctdG9wOiAzOHB4O31cclxuLnAtdC0zOSB7cGFkZGluZy10b3A6IDM5cHg7fVxyXG4ucC10LTQwIHtwYWRkaW5nLXRvcDogNDBweDt9XHJcbi5wLXQtNDEge3BhZGRpbmctdG9wOiA0MXB4O31cclxuLnAtdC00MiB7cGFkZGluZy10b3A6IDQycHg7fVxyXG4ucC10LTQzIHtwYWRkaW5nLXRvcDogNDNweDt9XHJcbi5wLXQtNDQge3BhZGRpbmctdG9wOiA0NHB4O31cclxuLnAtdC00NSB7cGFkZGluZy10b3A6IDQ1cHg7fVxyXG4ucC10LTQ2IHtwYWRkaW5nLXRvcDogNDZweDt9XHJcbi5wLXQtNDcge3BhZGRpbmctdG9wOiA0N3B4O31cclxuLnAtdC00OCB7cGFkZGluZy10b3A6IDQ4cHg7fVxyXG4ucC10LTQ5IHtwYWRkaW5nLXRvcDogNDlweDt9XHJcbi5wLXQtNTAge3BhZGRpbmctdG9wOiA1MHB4O31cclxuLnAtdC01MSB7cGFkZGluZy10b3A6IDUxcHg7fVxyXG4ucC10LTUyIHtwYWRkaW5nLXRvcDogNTJweDt9XHJcbi5wLXQtNTMge3BhZGRpbmctdG9wOiA1M3B4O31cclxuLnAtdC01NCB7cGFkZGluZy10b3A6IDU0cHg7fVxyXG4ucC10LTU1IHtwYWRkaW5nLXRvcDogNTVweDt9XHJcbi5wLXQtNTYge3BhZGRpbmctdG9wOiA1NnB4O31cclxuLnAtdC01NyB7cGFkZGluZy10b3A6IDU3cHg7fVxyXG4ucC10LTU4IHtwYWRkaW5nLXRvcDogNThweDt9XHJcbi5wLXQtNTkge3BhZGRpbmctdG9wOiA1OXB4O31cclxuLnAtdC02MCB7cGFkZGluZy10b3A6IDYwcHg7fVxyXG4ucC10LTYxIHtwYWRkaW5nLXRvcDogNjFweDt9XHJcbi5wLXQtNjIge3BhZGRpbmctdG9wOiA2MnB4O31cclxuLnAtdC02MyB7cGFkZGluZy10b3A6IDYzcHg7fVxyXG4ucC10LTY0IHtwYWRkaW5nLXRvcDogNjRweDt9XHJcbi5wLXQtNjUge3BhZGRpbmctdG9wOiA2NXB4O31cclxuLnAtdC02NiB7cGFkZGluZy10b3A6IDY2cHg7fVxyXG4ucC10LTY3IHtwYWRkaW5nLXRvcDogNjdweDt9XHJcbi5wLXQtNjgge3BhZGRpbmctdG9wOiA2OHB4O31cclxuLnAtdC02OSB7cGFkZGluZy10b3A6IDY5cHg7fVxyXG4ucC10LTcwIHtwYWRkaW5nLXRvcDogNzBweDt9XHJcbi5wLXQtNzEge3BhZGRpbmctdG9wOiA3MXB4O31cclxuLnAtdC03MiB7cGFkZGluZy10b3A6IDcycHg7fVxyXG4ucC10LTczIHtwYWRkaW5nLXRvcDogNzNweDt9XHJcbi5wLXQtNzQge3BhZGRpbmctdG9wOiA3NHB4O31cclxuLnAtdC03NSB7cGFkZGluZy10b3A6IDc1cHg7fVxyXG4ucC10LTc2IHtwYWRkaW5nLXRvcDogNzZweDt9XHJcbi5wLXQtNzcge3BhZGRpbmctdG9wOiA3N3B4O31cclxuLnAtdC03OCB7cGFkZGluZy10b3A6IDc4cHg7fVxyXG4ucC10LTc5IHtwYWRkaW5nLXRvcDogNzlweDt9XHJcbi5wLXQtODAge3BhZGRpbmctdG9wOiA4MHB4O31cclxuLnAtdC04MSB7cGFkZGluZy10b3A6IDgxcHg7fVxyXG4ucC10LTgyIHtwYWRkaW5nLXRvcDogODJweDt9XHJcbi5wLXQtODMge3BhZGRpbmctdG9wOiA4M3B4O31cclxuLnAtdC04NCB7cGFkZGluZy10b3A6IDg0cHg7fVxyXG4ucC10LTg1IHtwYWRkaW5nLXRvcDogODVweDt9XHJcbi5wLXQtODYge3BhZGRpbmctdG9wOiA4NnB4O31cclxuLnAtdC04NyB7cGFkZGluZy10b3A6IDg3cHg7fVxyXG4ucC10LTg4IHtwYWRkaW5nLXRvcDogODhweDt9XHJcbi5wLXQtODkge3BhZGRpbmctdG9wOiA4OXB4O31cclxuLnAtdC05MCB7cGFkZGluZy10b3A6IDkwcHg7fVxyXG4ucC10LTkxIHtwYWRkaW5nLXRvcDogOTFweDt9XHJcbi5wLXQtOTIge3BhZGRpbmctdG9wOiA5MnB4O31cclxuLnAtdC05MyB7cGFkZGluZy10b3A6IDkzcHg7fVxyXG4ucC10LTk0IHtwYWRkaW5nLXRvcDogOTRweDt9XHJcbi5wLXQtOTUge3BhZGRpbmctdG9wOiA5NXB4O31cclxuLnAtdC05NiB7cGFkZGluZy10b3A6IDk2cHg7fVxyXG4ucC10LTk3IHtwYWRkaW5nLXRvcDogOTdweDt9XHJcbi5wLXQtOTgge3BhZGRpbmctdG9wOiA5OHB4O31cclxuLnAtdC05OSB7cGFkZGluZy10b3A6IDk5cHg7fVxyXG4ucC10LTEwMCB7cGFkZGluZy10b3A6IDEwMHB4O31cclxuLnAtdC0xMDEge3BhZGRpbmctdG9wOiAxMDFweDt9XHJcbi5wLXQtMTAyIHtwYWRkaW5nLXRvcDogMTAycHg7fVxyXG4ucC10LTEwMyB7cGFkZGluZy10b3A6IDEwM3B4O31cclxuLnAtdC0xMDQge3BhZGRpbmctdG9wOiAxMDRweDt9XHJcbi5wLXQtMTA1IHtwYWRkaW5nLXRvcDogMTA1cHg7fVxyXG4ucC10LTEwNiB7cGFkZGluZy10b3A6IDEwNnB4O31cclxuLnAtdC0xMDcge3BhZGRpbmctdG9wOiAxMDdweDt9XHJcbi5wLXQtMTA4IHtwYWRkaW5nLXRvcDogMTA4cHg7fVxyXG4ucC10LTEwOSB7cGFkZGluZy10b3A6IDEwOXB4O31cclxuLnAtdC0xMTAge3BhZGRpbmctdG9wOiAxMTBweDt9XHJcbi5wLXQtMTExIHtwYWRkaW5nLXRvcDogMTExcHg7fVxyXG4ucC10LTExMiB7cGFkZGluZy10b3A6IDExMnB4O31cclxuLnAtdC0xMTMge3BhZGRpbmctdG9wOiAxMTNweDt9XHJcbi5wLXQtMTE0IHtwYWRkaW5nLXRvcDogMTE0cHg7fVxyXG4ucC10LTExNSB7cGFkZGluZy10b3A6IDExNXB4O31cclxuLnAtdC0xMTYge3BhZGRpbmctdG9wOiAxMTZweDt9XHJcbi5wLXQtMTE3IHtwYWRkaW5nLXRvcDogMTE3cHg7fVxyXG4ucC10LTExOCB7cGFkZGluZy10b3A6IDExOHB4O31cclxuLnAtdC0xMTkge3BhZGRpbmctdG9wOiAxMTlweDt9XHJcbi5wLXQtMTIwIHtwYWRkaW5nLXRvcDogMTIwcHg7fVxyXG4ucC10LTEyMSB7cGFkZGluZy10b3A6IDEyMXB4O31cclxuLnAtdC0xMjIge3BhZGRpbmctdG9wOiAxMjJweDt9XHJcbi5wLXQtMTIzIHtwYWRkaW5nLXRvcDogMTIzcHg7fVxyXG4ucC10LTEyNCB7cGFkZGluZy10b3A6IDEyNHB4O31cclxuLnAtdC0xMjUge3BhZGRpbmctdG9wOiAxMjVweDt9XHJcbi5wLXQtMTI2IHtwYWRkaW5nLXRvcDogMTI2cHg7fVxyXG4ucC10LTEyNyB7cGFkZGluZy10b3A6IDEyN3B4O31cclxuLnAtdC0xMjgge3BhZGRpbmctdG9wOiAxMjhweDt9XHJcbi5wLXQtMTI5IHtwYWRkaW5nLXRvcDogMTI5cHg7fVxyXG4ucC10LTEzMCB7cGFkZGluZy10b3A6IDEzMHB4O31cclxuLnAtdC0xMzEge3BhZGRpbmctdG9wOiAxMzFweDt9XHJcbi5wLXQtMTMyIHtwYWRkaW5nLXRvcDogMTMycHg7fVxyXG4ucC10LTEzMyB7cGFkZGluZy10b3A6IDEzM3B4O31cclxuLnAtdC0xMzQge3BhZGRpbmctdG9wOiAxMzRweDt9XHJcbi5wLXQtMTM1IHtwYWRkaW5nLXRvcDogMTM1cHg7fVxyXG4ucC10LTEzNiB7cGFkZGluZy10b3A6IDEzNnB4O31cclxuLnAtdC0xMzcge3BhZGRpbmctdG9wOiAxMzdweDt9XHJcbi5wLXQtMTM4IHtwYWRkaW5nLXRvcDogMTM4cHg7fVxyXG4ucC10LTEzOSB7cGFkZGluZy10b3A6IDEzOXB4O31cclxuLnAtdC0xNDAge3BhZGRpbmctdG9wOiAxNDBweDt9XHJcbi5wLXQtMTQxIHtwYWRkaW5nLXRvcDogMTQxcHg7fVxyXG4ucC10LTE0MiB7cGFkZGluZy10b3A6IDE0MnB4O31cclxuLnAtdC0xNDMge3BhZGRpbmctdG9wOiAxNDNweDt9XHJcbi5wLXQtMTQ0IHtwYWRkaW5nLXRvcDogMTQ0cHg7fVxyXG4ucC10LTE0NSB7cGFkZGluZy10b3A6IDE0NXB4O31cclxuLnAtdC0xNDYge3BhZGRpbmctdG9wOiAxNDZweDt9XHJcbi5wLXQtMTQ3IHtwYWRkaW5nLXRvcDogMTQ3cHg7fVxyXG4ucC10LTE0OCB7cGFkZGluZy10b3A6IDE0OHB4O31cclxuLnAtdC0xNDkge3BhZGRpbmctdG9wOiAxNDlweDt9XHJcbi5wLXQtMTUwIHtwYWRkaW5nLXRvcDogMTUwcHg7fVxyXG4ucC10LTE1MSB7cGFkZGluZy10b3A6IDE1MXB4O31cclxuLnAtdC0xNTIge3BhZGRpbmctdG9wOiAxNTJweDt9XHJcbi5wLXQtMTUzIHtwYWRkaW5nLXRvcDogMTUzcHg7fVxyXG4ucC10LTE1NCB7cGFkZGluZy10b3A6IDE1NHB4O31cclxuLnAtdC0xNTUge3BhZGRpbmctdG9wOiAxNTVweDt9XHJcbi5wLXQtMTU2IHtwYWRkaW5nLXRvcDogMTU2cHg7fVxyXG4ucC10LTE1NyB7cGFkZGluZy10b3A6IDE1N3B4O31cclxuLnAtdC0xNTgge3BhZGRpbmctdG9wOiAxNThweDt9XHJcbi5wLXQtMTU5IHtwYWRkaW5nLXRvcDogMTU5cHg7fVxyXG4ucC10LTE2MCB7cGFkZGluZy10b3A6IDE2MHB4O31cclxuLnAtdC0xNjEge3BhZGRpbmctdG9wOiAxNjFweDt9XHJcbi5wLXQtMTYyIHtwYWRkaW5nLXRvcDogMTYycHg7fVxyXG4ucC10LTE2MyB7cGFkZGluZy10b3A6IDE2M3B4O31cclxuLnAtdC0xNjQge3BhZGRpbmctdG9wOiAxNjRweDt9XHJcbi5wLXQtMTY1IHtwYWRkaW5nLXRvcDogMTY1cHg7fVxyXG4ucC10LTE2NiB7cGFkZGluZy10b3A6IDE2NnB4O31cclxuLnAtdC0xNjcge3BhZGRpbmctdG9wOiAxNjdweDt9XHJcbi5wLXQtMTY4IHtwYWRkaW5nLXRvcDogMTY4cHg7fVxyXG4ucC10LTE2OSB7cGFkZGluZy10b3A6IDE2OXB4O31cclxuLnAtdC0xNzAge3BhZGRpbmctdG9wOiAxNzBweDt9XHJcbi5wLXQtMTcxIHtwYWRkaW5nLXRvcDogMTcxcHg7fVxyXG4ucC10LTE3MiB7cGFkZGluZy10b3A6IDE3MnB4O31cclxuLnAtdC0xNzMge3BhZGRpbmctdG9wOiAxNzNweDt9XHJcbi5wLXQtMTc0IHtwYWRkaW5nLXRvcDogMTc0cHg7fVxyXG4ucC10LTE3NSB7cGFkZGluZy10b3A6IDE3NXB4O31cclxuLnAtdC0xNzYge3BhZGRpbmctdG9wOiAxNzZweDt9XHJcbi5wLXQtMTc3IHtwYWRkaW5nLXRvcDogMTc3cHg7fVxyXG4ucC10LTE3OCB7cGFkZGluZy10b3A6IDE3OHB4O31cclxuLnAtdC0xNzkge3BhZGRpbmctdG9wOiAxNzlweDt9XHJcbi5wLXQtMTgwIHtwYWRkaW5nLXRvcDogMTgwcHg7fVxyXG4ucC10LTE4MSB7cGFkZGluZy10b3A6IDE4MXB4O31cclxuLnAtdC0xODIge3BhZGRpbmctdG9wOiAxODJweDt9XHJcbi5wLXQtMTgzIHtwYWRkaW5nLXRvcDogMTgzcHg7fVxyXG4ucC10LTE4NCB7cGFkZGluZy10b3A6IDE4NHB4O31cclxuLnAtdC0xODUge3BhZGRpbmctdG9wOiAxODVweDt9XHJcbi5wLXQtMTg2IHtwYWRkaW5nLXRvcDogMTg2cHg7fVxyXG4ucC10LTE4NyB7cGFkZGluZy10b3A6IDE4N3B4O31cclxuLnAtdC0xODgge3BhZGRpbmctdG9wOiAxODhweDt9XHJcbi5wLXQtMTg5IHtwYWRkaW5nLXRvcDogMTg5cHg7fVxyXG4ucC10LTE5MCB7cGFkZGluZy10b3A6IDE5MHB4O31cclxuLnAtdC0xOTEge3BhZGRpbmctdG9wOiAxOTFweDt9XHJcbi5wLXQtMTkyIHtwYWRkaW5nLXRvcDogMTkycHg7fVxyXG4ucC10LTE5MyB7cGFkZGluZy10b3A6IDE5M3B4O31cclxuLnAtdC0xOTQge3BhZGRpbmctdG9wOiAxOTRweDt9XHJcbi5wLXQtMTk1IHtwYWRkaW5nLXRvcDogMTk1cHg7fVxyXG4ucC10LTE5NiB7cGFkZGluZy10b3A6IDE5NnB4O31cclxuLnAtdC0xOTcge3BhZGRpbmctdG9wOiAxOTdweDt9XHJcbi5wLXQtMTk4IHtwYWRkaW5nLXRvcDogMTk4cHg7fVxyXG4ucC10LTE5OSB7cGFkZGluZy10b3A6IDE5OXB4O31cclxuLnAtdC0yMDAge3BhZGRpbmctdG9wOiAyMDBweDt9XHJcbi5wLXQtMjAxIHtwYWRkaW5nLXRvcDogMjAxcHg7fVxyXG4ucC10LTIwMiB7cGFkZGluZy10b3A6IDIwMnB4O31cclxuLnAtdC0yMDMge3BhZGRpbmctdG9wOiAyMDNweDt9XHJcbi5wLXQtMjA0IHtwYWRkaW5nLXRvcDogMjA0cHg7fVxyXG4ucC10LTIwNSB7cGFkZGluZy10b3A6IDIwNXB4O31cclxuLnAtdC0yMDYge3BhZGRpbmctdG9wOiAyMDZweDt9XHJcbi5wLXQtMjA3IHtwYWRkaW5nLXRvcDogMjA3cHg7fVxyXG4ucC10LTIwOCB7cGFkZGluZy10b3A6IDIwOHB4O31cclxuLnAtdC0yMDkge3BhZGRpbmctdG9wOiAyMDlweDt9XHJcbi5wLXQtMjEwIHtwYWRkaW5nLXRvcDogMjEwcHg7fVxyXG4ucC10LTIxMSB7cGFkZGluZy10b3A6IDIxMXB4O31cclxuLnAtdC0yMTIge3BhZGRpbmctdG9wOiAyMTJweDt9XHJcbi5wLXQtMjEzIHtwYWRkaW5nLXRvcDogMjEzcHg7fVxyXG4ucC10LTIxNCB7cGFkZGluZy10b3A6IDIxNHB4O31cclxuLnAtdC0yMTUge3BhZGRpbmctdG9wOiAyMTVweDt9XHJcbi5wLXQtMjE2IHtwYWRkaW5nLXRvcDogMjE2cHg7fVxyXG4ucC10LTIxNyB7cGFkZGluZy10b3A6IDIxN3B4O31cclxuLnAtdC0yMTgge3BhZGRpbmctdG9wOiAyMThweDt9XHJcbi5wLXQtMjE5IHtwYWRkaW5nLXRvcDogMjE5cHg7fVxyXG4ucC10LTIyMCB7cGFkZGluZy10b3A6IDIyMHB4O31cclxuLnAtdC0yMjEge3BhZGRpbmctdG9wOiAyMjFweDt9XHJcbi5wLXQtMjIyIHtwYWRkaW5nLXRvcDogMjIycHg7fVxyXG4ucC10LTIyMyB7cGFkZGluZy10b3A6IDIyM3B4O31cclxuLnAtdC0yMjQge3BhZGRpbmctdG9wOiAyMjRweDt9XHJcbi5wLXQtMjI1IHtwYWRkaW5nLXRvcDogMjI1cHg7fVxyXG4ucC10LTIyNiB7cGFkZGluZy10b3A6IDIyNnB4O31cclxuLnAtdC0yMjcge3BhZGRpbmctdG9wOiAyMjdweDt9XHJcbi5wLXQtMjI4IHtwYWRkaW5nLXRvcDogMjI4cHg7fVxyXG4ucC10LTIyOSB7cGFkZGluZy10b3A6IDIyOXB4O31cclxuLnAtdC0yMzAge3BhZGRpbmctdG9wOiAyMzBweDt9XHJcbi5wLXQtMjMxIHtwYWRkaW5nLXRvcDogMjMxcHg7fVxyXG4ucC10LTIzMiB7cGFkZGluZy10b3A6IDIzMnB4O31cclxuLnAtdC0yMzMge3BhZGRpbmctdG9wOiAyMzNweDt9XHJcbi5wLXQtMjM0IHtwYWRkaW5nLXRvcDogMjM0cHg7fVxyXG4ucC10LTIzNSB7cGFkZGluZy10b3A6IDIzNXB4O31cclxuLnAtdC0yMzYge3BhZGRpbmctdG9wOiAyMzZweDt9XHJcbi5wLXQtMjM3IHtwYWRkaW5nLXRvcDogMjM3cHg7fVxyXG4ucC10LTIzOCB7cGFkZGluZy10b3A6IDIzOHB4O31cclxuLnAtdC0yMzkge3BhZGRpbmctdG9wOiAyMzlweDt9XHJcbi5wLXQtMjQwIHtwYWRkaW5nLXRvcDogMjQwcHg7fVxyXG4ucC10LTI0MSB7cGFkZGluZy10b3A6IDI0MXB4O31cclxuLnAtdC0yNDIge3BhZGRpbmctdG9wOiAyNDJweDt9XHJcbi5wLXQtMjQzIHtwYWRkaW5nLXRvcDogMjQzcHg7fVxyXG4ucC10LTI0NCB7cGFkZGluZy10b3A6IDI0NHB4O31cclxuLnAtdC0yNDUge3BhZGRpbmctdG9wOiAyNDVweDt9XHJcbi5wLXQtMjQ2IHtwYWRkaW5nLXRvcDogMjQ2cHg7fVxyXG4ucC10LTI0NyB7cGFkZGluZy10b3A6IDI0N3B4O31cclxuLnAtdC0yNDgge3BhZGRpbmctdG9wOiAyNDhweDt9XHJcbi5wLXQtMjQ5IHtwYWRkaW5nLXRvcDogMjQ5cHg7fVxyXG4ucC10LTI1MCB7cGFkZGluZy10b3A6IDI1MHB4O31cclxuLnAtYi0wIHtwYWRkaW5nLWJvdHRvbTogMHB4O31cclxuLnAtYi0xIHtwYWRkaW5nLWJvdHRvbTogMXB4O31cclxuLnAtYi0yIHtwYWRkaW5nLWJvdHRvbTogMnB4O31cclxuLnAtYi0zIHtwYWRkaW5nLWJvdHRvbTogM3B4O31cclxuLnAtYi00IHtwYWRkaW5nLWJvdHRvbTogNHB4O31cclxuLnAtYi01IHtwYWRkaW5nLWJvdHRvbTogNXB4O31cclxuLnAtYi02IHtwYWRkaW5nLWJvdHRvbTogNnB4O31cclxuLnAtYi03IHtwYWRkaW5nLWJvdHRvbTogN3B4O31cclxuLnAtYi04IHtwYWRkaW5nLWJvdHRvbTogOHB4O31cclxuLnAtYi05IHtwYWRkaW5nLWJvdHRvbTogOXB4O31cclxuLnAtYi0xMCB7cGFkZGluZy1ib3R0b206IDEwcHg7fVxyXG4ucC1iLTExIHtwYWRkaW5nLWJvdHRvbTogMTFweDt9XHJcbi5wLWItMTIge3BhZGRpbmctYm90dG9tOiAxMnB4O31cclxuLnAtYi0xMyB7cGFkZGluZy1ib3R0b206IDEzcHg7fVxyXG4ucC1iLTE0IHtwYWRkaW5nLWJvdHRvbTogMTRweDt9XHJcbi5wLWItMTUge3BhZGRpbmctYm90dG9tOiAxNXB4O31cclxuLnAtYi0xNiB7cGFkZGluZy1ib3R0b206IDE2cHg7fVxyXG4ucC1iLTE3IHtwYWRkaW5nLWJvdHRvbTogMTdweDt9XHJcbi5wLWItMTgge3BhZGRpbmctYm90dG9tOiAxOHB4O31cclxuLnAtYi0xOSB7cGFkZGluZy1ib3R0b206IDE5cHg7fVxyXG4ucC1iLTIwIHtwYWRkaW5nLWJvdHRvbTogMjBweDt9XHJcbi5wLWItMjEge3BhZGRpbmctYm90dG9tOiAyMXB4O31cclxuLnAtYi0yMiB7cGFkZGluZy1ib3R0b206IDIycHg7fVxyXG4ucC1iLTIzIHtwYWRkaW5nLWJvdHRvbTogMjNweDt9XHJcbi5wLWItMjQge3BhZGRpbmctYm90dG9tOiAyNHB4O31cclxuLnAtYi0yNSB7cGFkZGluZy1ib3R0b206IDI1cHg7fVxyXG4ucC1iLTI2IHtwYWRkaW5nLWJvdHRvbTogMjZweDt9XHJcbi5wLWItMjcge3BhZGRpbmctYm90dG9tOiAyN3B4O31cclxuLnAtYi0yOCB7cGFkZGluZy1ib3R0b206IDI4cHg7fVxyXG4ucC1iLTI5IHtwYWRkaW5nLWJvdHRvbTogMjlweDt9XHJcbi5wLWItMzAge3BhZGRpbmctYm90dG9tOiAzMHB4O31cclxuLnAtYi0zMSB7cGFkZGluZy1ib3R0b206IDMxcHg7fVxyXG4ucC1iLTMyIHtwYWRkaW5nLWJvdHRvbTogMzJweDt9XHJcbi5wLWItMzMge3BhZGRpbmctYm90dG9tOiAzM3B4O31cclxuLnAtYi0zNCB7cGFkZGluZy1ib3R0b206IDM0cHg7fVxyXG4ucC1iLTM1IHtwYWRkaW5nLWJvdHRvbTogMzVweDt9XHJcbi5wLWItMzYge3BhZGRpbmctYm90dG9tOiAzNnB4O31cclxuLnAtYi0zNyB7cGFkZGluZy1ib3R0b206IDM3cHg7fVxyXG4ucC1iLTM4IHtwYWRkaW5nLWJvdHRvbTogMzhweDt9XHJcbi5wLWItMzkge3BhZGRpbmctYm90dG9tOiAzOXB4O31cclxuLnAtYi00MCB7cGFkZGluZy1ib3R0b206IDQwcHg7fVxyXG4ucC1iLTQxIHtwYWRkaW5nLWJvdHRvbTogNDFweDt9XHJcbi5wLWItNDIge3BhZGRpbmctYm90dG9tOiA0MnB4O31cclxuLnAtYi00MyB7cGFkZGluZy1ib3R0b206IDQzcHg7fVxyXG4ucC1iLTQ0IHtwYWRkaW5nLWJvdHRvbTogNDRweDt9XHJcbi5wLWItNDUge3BhZGRpbmctYm90dG9tOiA0NXB4O31cclxuLnAtYi00NiB7cGFkZGluZy1ib3R0b206IDQ2cHg7fVxyXG4ucC1iLTQ3IHtwYWRkaW5nLWJvdHRvbTogNDdweDt9XHJcbi5wLWItNDgge3BhZGRpbmctYm90dG9tOiA0OHB4O31cclxuLnAtYi00OSB7cGFkZGluZy1ib3R0b206IDQ5cHg7fVxyXG4ucC1iLTUwIHtwYWRkaW5nLWJvdHRvbTogNTBweDt9XHJcbi5wLWItNTEge3BhZGRpbmctYm90dG9tOiA1MXB4O31cclxuLnAtYi01MiB7cGFkZGluZy1ib3R0b206IDUycHg7fVxyXG4ucC1iLTUzIHtwYWRkaW5nLWJvdHRvbTogNTNweDt9XHJcbi5wLWItNTQge3BhZGRpbmctYm90dG9tOiA1NHB4O31cclxuLnAtYi01NSB7cGFkZGluZy1ib3R0b206IDU1cHg7fVxyXG4ucC1iLTU2IHtwYWRkaW5nLWJvdHRvbTogNTZweDt9XHJcbi5wLWItNTcge3BhZGRpbmctYm90dG9tOiA1N3B4O31cclxuLnAtYi01OCB7cGFkZGluZy1ib3R0b206IDU4cHg7fVxyXG4ucC1iLTU5IHtwYWRkaW5nLWJvdHRvbTogNTlweDt9XHJcbi5wLWItNjAge3BhZGRpbmctYm90dG9tOiA2MHB4O31cclxuLnAtYi02MSB7cGFkZGluZy1ib3R0b206IDYxcHg7fVxyXG4ucC1iLTYyIHtwYWRkaW5nLWJvdHRvbTogNjJweDt9XHJcbi5wLWItNjMge3BhZGRpbmctYm90dG9tOiA2M3B4O31cclxuLnAtYi02NCB7cGFkZGluZy1ib3R0b206IDY0cHg7fVxyXG4ucC1iLTY1IHtwYWRkaW5nLWJvdHRvbTogNjVweDt9XHJcbi5wLWItNjYge3BhZGRpbmctYm90dG9tOiA2NnB4O31cclxuLnAtYi02NyB7cGFkZGluZy1ib3R0b206IDY3cHg7fVxyXG4ucC1iLTY4IHtwYWRkaW5nLWJvdHRvbTogNjhweDt9XHJcbi5wLWItNjkge3BhZGRpbmctYm90dG9tOiA2OXB4O31cclxuLnAtYi03MCB7cGFkZGluZy1ib3R0b206IDcwcHg7fVxyXG4ucC1iLTcxIHtwYWRkaW5nLWJvdHRvbTogNzFweDt9XHJcbi5wLWItNzIge3BhZGRpbmctYm90dG9tOiA3MnB4O31cclxuLnAtYi03MyB7cGFkZGluZy1ib3R0b206IDczcHg7fVxyXG4ucC1iLTc0IHtwYWRkaW5nLWJvdHRvbTogNzRweDt9XHJcbi5wLWItNzUge3BhZGRpbmctYm90dG9tOiA3NXB4O31cclxuLnAtYi03NiB7cGFkZGluZy1ib3R0b206IDc2cHg7fVxyXG4ucC1iLTc3IHtwYWRkaW5nLWJvdHRvbTogNzdweDt9XHJcbi5wLWItNzgge3BhZGRpbmctYm90dG9tOiA3OHB4O31cclxuLnAtYi03OSB7cGFkZGluZy1ib3R0b206IDc5cHg7fVxyXG4ucC1iLTgwIHtwYWRkaW5nLWJvdHRvbTogODBweDt9XHJcbi5wLWItODEge3BhZGRpbmctYm90dG9tOiA4MXB4O31cclxuLnAtYi04MiB7cGFkZGluZy1ib3R0b206IDgycHg7fVxyXG4ucC1iLTgzIHtwYWRkaW5nLWJvdHRvbTogODNweDt9XHJcbi5wLWItODQge3BhZGRpbmctYm90dG9tOiA4NHB4O31cclxuLnAtYi04NSB7cGFkZGluZy1ib3R0b206IDg1cHg7fVxyXG4ucC1iLTg2IHtwYWRkaW5nLWJvdHRvbTogODZweDt9XHJcbi5wLWItODcge3BhZGRpbmctYm90dG9tOiA4N3B4O31cclxuLnAtYi04OCB7cGFkZGluZy1ib3R0b206IDg4cHg7fVxyXG4ucC1iLTg5IHtwYWRkaW5nLWJvdHRvbTogODlweDt9XHJcbi5wLWItOTAge3BhZGRpbmctYm90dG9tOiA5MHB4O31cclxuLnAtYi05MSB7cGFkZGluZy1ib3R0b206IDkxcHg7fVxyXG4ucC1iLTkyIHtwYWRkaW5nLWJvdHRvbTogOTJweDt9XHJcbi5wLWItOTMge3BhZGRpbmctYm90dG9tOiA5M3B4O31cclxuLnAtYi05NCB7cGFkZGluZy1ib3R0b206IDk0cHg7fVxyXG4ucC1iLTk1IHtwYWRkaW5nLWJvdHRvbTogOTVweDt9XHJcbi5wLWItOTYge3BhZGRpbmctYm90dG9tOiA5NnB4O31cclxuLnAtYi05NyB7cGFkZGluZy1ib3R0b206IDk3cHg7fVxyXG4ucC1iLTk4IHtwYWRkaW5nLWJvdHRvbTogOThweDt9XHJcbi5wLWItOTkge3BhZGRpbmctYm90dG9tOiA5OXB4O31cclxuLnAtYi0xMDAge3BhZGRpbmctYm90dG9tOiAxMDBweDt9XHJcbi5wLWItMTAxIHtwYWRkaW5nLWJvdHRvbTogMTAxcHg7fVxyXG4ucC1iLTEwMiB7cGFkZGluZy1ib3R0b206IDEwMnB4O31cclxuLnAtYi0xMDMge3BhZGRpbmctYm90dG9tOiAxMDNweDt9XHJcbi5wLWItMTA0IHtwYWRkaW5nLWJvdHRvbTogMTA0cHg7fVxyXG4ucC1iLTEwNSB7cGFkZGluZy1ib3R0b206IDEwNXB4O31cclxuLnAtYi0xMDYge3BhZGRpbmctYm90dG9tOiAxMDZweDt9XHJcbi5wLWItMTA3IHtwYWRkaW5nLWJvdHRvbTogMTA3cHg7fVxyXG4ucC1iLTEwOCB7cGFkZGluZy1ib3R0b206IDEwOHB4O31cclxuLnAtYi0xMDkge3BhZGRpbmctYm90dG9tOiAxMDlweDt9XHJcbi5wLWItMTEwIHtwYWRkaW5nLWJvdHRvbTogMTEwcHg7fVxyXG4ucC1iLTExMSB7cGFkZGluZy1ib3R0b206IDExMXB4O31cclxuLnAtYi0xMTIge3BhZGRpbmctYm90dG9tOiAxMTJweDt9XHJcbi5wLWItMTEzIHtwYWRkaW5nLWJvdHRvbTogMTEzcHg7fVxyXG4ucC1iLTExNCB7cGFkZGluZy1ib3R0b206IDExNHB4O31cclxuLnAtYi0xMTUge3BhZGRpbmctYm90dG9tOiAxMTVweDt9XHJcbi5wLWItMTE2IHtwYWRkaW5nLWJvdHRvbTogMTE2cHg7fVxyXG4ucC1iLTExNyB7cGFkZGluZy1ib3R0b206IDExN3B4O31cclxuLnAtYi0xMTgge3BhZGRpbmctYm90dG9tOiAxMThweDt9XHJcbi5wLWItMTE5IHtwYWRkaW5nLWJvdHRvbTogMTE5cHg7fVxyXG4ucC1iLTEyMCB7cGFkZGluZy1ib3R0b206IDEyMHB4O31cclxuLnAtYi0xMjEge3BhZGRpbmctYm90dG9tOiAxMjFweDt9XHJcbi5wLWItMTIyIHtwYWRkaW5nLWJvdHRvbTogMTIycHg7fVxyXG4ucC1iLTEyMyB7cGFkZGluZy1ib3R0b206IDEyM3B4O31cclxuLnAtYi0xMjQge3BhZGRpbmctYm90dG9tOiAxMjRweDt9XHJcbi5wLWItMTI1IHtwYWRkaW5nLWJvdHRvbTogMTI1cHg7fVxyXG4ucC1iLTEyNiB7cGFkZGluZy1ib3R0b206IDEyNnB4O31cclxuLnAtYi0xMjcge3BhZGRpbmctYm90dG9tOiAxMjdweDt9XHJcbi5wLWItMTI4IHtwYWRkaW5nLWJvdHRvbTogMTI4cHg7fVxyXG4ucC1iLTEyOSB7cGFkZGluZy1ib3R0b206IDEyOXB4O31cclxuLnAtYi0xMzAge3BhZGRpbmctYm90dG9tOiAxMzBweDt9XHJcbi5wLWItMTMxIHtwYWRkaW5nLWJvdHRvbTogMTMxcHg7fVxyXG4ucC1iLTEzMiB7cGFkZGluZy1ib3R0b206IDEzMnB4O31cclxuLnAtYi0xMzMge3BhZGRpbmctYm90dG9tOiAxMzNweDt9XHJcbi5wLWItMTM0IHtwYWRkaW5nLWJvdHRvbTogMTM0cHg7fVxyXG4ucC1iLTEzNSB7cGFkZGluZy1ib3R0b206IDEzNXB4O31cclxuLnAtYi0xMzYge3BhZGRpbmctYm90dG9tOiAxMzZweDt9XHJcbi5wLWItMTM3IHtwYWRkaW5nLWJvdHRvbTogMTM3cHg7fVxyXG4ucC1iLTEzOCB7cGFkZGluZy1ib3R0b206IDEzOHB4O31cclxuLnAtYi0xMzkge3BhZGRpbmctYm90dG9tOiAxMzlweDt9XHJcbi5wLWItMTQwIHtwYWRkaW5nLWJvdHRvbTogMTQwcHg7fVxyXG4ucC1iLTE0MSB7cGFkZGluZy1ib3R0b206IDE0MXB4O31cclxuLnAtYi0xNDIge3BhZGRpbmctYm90dG9tOiAxNDJweDt9XHJcbi5wLWItMTQzIHtwYWRkaW5nLWJvdHRvbTogMTQzcHg7fVxyXG4ucC1iLTE0NCB7cGFkZGluZy1ib3R0b206IDE0NHB4O31cclxuLnAtYi0xNDUge3BhZGRpbmctYm90dG9tOiAxNDVweDt9XHJcbi5wLWItMTQ2IHtwYWRkaW5nLWJvdHRvbTogMTQ2cHg7fVxyXG4ucC1iLTE0NyB7cGFkZGluZy1ib3R0b206IDE0N3B4O31cclxuLnAtYi0xNDgge3BhZGRpbmctYm90dG9tOiAxNDhweDt9XHJcbi5wLWItMTQ5IHtwYWRkaW5nLWJvdHRvbTogMTQ5cHg7fVxyXG4ucC1iLTE1MCB7cGFkZGluZy1ib3R0b206IDE1MHB4O31cclxuLnAtYi0xNTEge3BhZGRpbmctYm90dG9tOiAxNTFweDt9XHJcbi5wLWItMTUyIHtwYWRkaW5nLWJvdHRvbTogMTUycHg7fVxyXG4ucC1iLTE1MyB7cGFkZGluZy1ib3R0b206IDE1M3B4O31cclxuLnAtYi0xNTQge3BhZGRpbmctYm90dG9tOiAxNTRweDt9XHJcbi5wLWItMTU1IHtwYWRkaW5nLWJvdHRvbTogMTU1cHg7fVxyXG4ucC1iLTE1NiB7cGFkZGluZy1ib3R0b206IDE1NnB4O31cclxuLnAtYi0xNTcge3BhZGRpbmctYm90dG9tOiAxNTdweDt9XHJcbi5wLWItMTU4IHtwYWRkaW5nLWJvdHRvbTogMTU4cHg7fVxyXG4ucC1iLTE1OSB7cGFkZGluZy1ib3R0b206IDE1OXB4O31cclxuLnAtYi0xNjAge3BhZGRpbmctYm90dG9tOiAxNjBweDt9XHJcbi5wLWItMTYxIHtwYWRkaW5nLWJvdHRvbTogMTYxcHg7fVxyXG4ucC1iLTE2MiB7cGFkZGluZy1ib3R0b206IDE2MnB4O31cclxuLnAtYi0xNjMge3BhZGRpbmctYm90dG9tOiAxNjNweDt9XHJcbi5wLWItMTY0IHtwYWRkaW5nLWJvdHRvbTogMTY0cHg7fVxyXG4ucC1iLTE2NSB7cGFkZGluZy1ib3R0b206IDE2NXB4O31cclxuLnAtYi0xNjYge3BhZGRpbmctYm90dG9tOiAxNjZweDt9XHJcbi5wLWItMTY3IHtwYWRkaW5nLWJvdHRvbTogMTY3cHg7fVxyXG4ucC1iLTE2OCB7cGFkZGluZy1ib3R0b206IDE2OHB4O31cclxuLnAtYi0xNjkge3BhZGRpbmctYm90dG9tOiAxNjlweDt9XHJcbi5wLWItMTcwIHtwYWRkaW5nLWJvdHRvbTogMTcwcHg7fVxyXG4ucC1iLTE3MSB7cGFkZGluZy1ib3R0b206IDE3MXB4O31cclxuLnAtYi0xNzIge3BhZGRpbmctYm90dG9tOiAxNzJweDt9XHJcbi5wLWItMTczIHtwYWRkaW5nLWJvdHRvbTogMTczcHg7fVxyXG4ucC1iLTE3NCB7cGFkZGluZy1ib3R0b206IDE3NHB4O31cclxuLnAtYi0xNzUge3BhZGRpbmctYm90dG9tOiAxNzVweDt9XHJcbi5wLWItMTc2IHtwYWRkaW5nLWJvdHRvbTogMTc2cHg7fVxyXG4ucC1iLTE3NyB7cGFkZGluZy1ib3R0b206IDE3N3B4O31cclxuLnAtYi0xNzgge3BhZGRpbmctYm90dG9tOiAxNzhweDt9XHJcbi5wLWItMTc5IHtwYWRkaW5nLWJvdHRvbTogMTc5cHg7fVxyXG4ucC1iLTE4MCB7cGFkZGluZy1ib3R0b206IDE4MHB4O31cclxuLnAtYi0xODEge3BhZGRpbmctYm90dG9tOiAxODFweDt9XHJcbi5wLWItMTgyIHtwYWRkaW5nLWJvdHRvbTogMTgycHg7fVxyXG4ucC1iLTE4MyB7cGFkZGluZy1ib3R0b206IDE4M3B4O31cclxuLnAtYi0xODQge3BhZGRpbmctYm90dG9tOiAxODRweDt9XHJcbi5wLWItMTg1IHtwYWRkaW5nLWJvdHRvbTogMTg1cHg7fVxyXG4ucC1iLTE4NiB7cGFkZGluZy1ib3R0b206IDE4NnB4O31cclxuLnAtYi0xODcge3BhZGRpbmctYm90dG9tOiAxODdweDt9XHJcbi5wLWItMTg4IHtwYWRkaW5nLWJvdHRvbTogMTg4cHg7fVxyXG4ucC1iLTE4OSB7cGFkZGluZy1ib3R0b206IDE4OXB4O31cclxuLnAtYi0xOTAge3BhZGRpbmctYm90dG9tOiAxOTBweDt9XHJcbi5wLWItMTkxIHtwYWRkaW5nLWJvdHRvbTogMTkxcHg7fVxyXG4ucC1iLTE5MiB7cGFkZGluZy1ib3R0b206IDE5MnB4O31cclxuLnAtYi0xOTMge3BhZGRpbmctYm90dG9tOiAxOTNweDt9XHJcbi5wLWItMTk0IHtwYWRkaW5nLWJvdHRvbTogMTk0cHg7fVxyXG4ucC1iLTE5NSB7cGFkZGluZy1ib3R0b206IDE5NXB4O31cclxuLnAtYi0xOTYge3BhZGRpbmctYm90dG9tOiAxOTZweDt9XHJcbi5wLWItMTk3IHtwYWRkaW5nLWJvdHRvbTogMTk3cHg7fVxyXG4ucC1iLTE5OCB7cGFkZGluZy1ib3R0b206IDE5OHB4O31cclxuLnAtYi0xOTkge3BhZGRpbmctYm90dG9tOiAxOTlweDt9XHJcbi5wLWItMjAwIHtwYWRkaW5nLWJvdHRvbTogMjAwcHg7fVxyXG4ucC1iLTIwMSB7cGFkZGluZy1ib3R0b206IDIwMXB4O31cclxuLnAtYi0yMDIge3BhZGRpbmctYm90dG9tOiAyMDJweDt9XHJcbi5wLWItMjAzIHtwYWRkaW5nLWJvdHRvbTogMjAzcHg7fVxyXG4ucC1iLTIwNCB7cGFkZGluZy1ib3R0b206IDIwNHB4O31cclxuLnAtYi0yMDUge3BhZGRpbmctYm90dG9tOiAyMDVweDt9XHJcbi5wLWItMjA2IHtwYWRkaW5nLWJvdHRvbTogMjA2cHg7fVxyXG4ucC1iLTIwNyB7cGFkZGluZy1ib3R0b206IDIwN3B4O31cclxuLnAtYi0yMDgge3BhZGRpbmctYm90dG9tOiAyMDhweDt9XHJcbi5wLWItMjA5IHtwYWRkaW5nLWJvdHRvbTogMjA5cHg7fVxyXG4ucC1iLTIxMCB7cGFkZGluZy1ib3R0b206IDIxMHB4O31cclxuLnAtYi0yMTEge3BhZGRpbmctYm90dG9tOiAyMTFweDt9XHJcbi5wLWItMjEyIHtwYWRkaW5nLWJvdHRvbTogMjEycHg7fVxyXG4ucC1iLTIxMyB7cGFkZGluZy1ib3R0b206IDIxM3B4O31cclxuLnAtYi0yMTQge3BhZGRpbmctYm90dG9tOiAyMTRweDt9XHJcbi5wLWItMjE1IHtwYWRkaW5nLWJvdHRvbTogMjE1cHg7fVxyXG4ucC1iLTIxNiB7cGFkZGluZy1ib3R0b206IDIxNnB4O31cclxuLnAtYi0yMTcge3BhZGRpbmctYm90dG9tOiAyMTdweDt9XHJcbi5wLWItMjE4IHtwYWRkaW5nLWJvdHRvbTogMjE4cHg7fVxyXG4ucC1iLTIxOSB7cGFkZGluZy1ib3R0b206IDIxOXB4O31cclxuLnAtYi0yMjAge3BhZGRpbmctYm90dG9tOiAyMjBweDt9XHJcbi5wLWItMjIxIHtwYWRkaW5nLWJvdHRvbTogMjIxcHg7fVxyXG4ucC1iLTIyMiB7cGFkZGluZy1ib3R0b206IDIyMnB4O31cclxuLnAtYi0yMjMge3BhZGRpbmctYm90dG9tOiAyMjNweDt9XHJcbi5wLWItMjI0IHtwYWRkaW5nLWJvdHRvbTogMjI0cHg7fVxyXG4ucC1iLTIyNSB7cGFkZGluZy1ib3R0b206IDIyNXB4O31cclxuLnAtYi0yMjYge3BhZGRpbmctYm90dG9tOiAyMjZweDt9XHJcbi5wLWItMjI3IHtwYWRkaW5nLWJvdHRvbTogMjI3cHg7fVxyXG4ucC1iLTIyOCB7cGFkZGluZy1ib3R0b206IDIyOHB4O31cclxuLnAtYi0yMjkge3BhZGRpbmctYm90dG9tOiAyMjlweDt9XHJcbi5wLWItMjMwIHtwYWRkaW5nLWJvdHRvbTogMjMwcHg7fVxyXG4ucC1iLTIzMSB7cGFkZGluZy1ib3R0b206IDIzMXB4O31cclxuLnAtYi0yMzIge3BhZGRpbmctYm90dG9tOiAyMzJweDt9XHJcbi5wLWItMjMzIHtwYWRkaW5nLWJvdHRvbTogMjMzcHg7fVxyXG4ucC1iLTIzNCB7cGFkZGluZy1ib3R0b206IDIzNHB4O31cclxuLnAtYi0yMzUge3BhZGRpbmctYm90dG9tOiAyMzVweDt9XHJcbi5wLWItMjM2IHtwYWRkaW5nLWJvdHRvbTogMjM2cHg7fVxyXG4ucC1iLTIzNyB7cGFkZGluZy1ib3R0b206IDIzN3B4O31cclxuLnAtYi0yMzgge3BhZGRpbmctYm90dG9tOiAyMzhweDt9XHJcbi5wLWItMjM5IHtwYWRkaW5nLWJvdHRvbTogMjM5cHg7fVxyXG4ucC1iLTI0MCB7cGFkZGluZy1ib3R0b206IDI0MHB4O31cclxuLnAtYi0yNDEge3BhZGRpbmctYm90dG9tOiAyNDFweDt9XHJcbi5wLWItMjQyIHtwYWRkaW5nLWJvdHRvbTogMjQycHg7fVxyXG4ucC1iLTI0MyB7cGFkZGluZy1ib3R0b206IDI0M3B4O31cclxuLnAtYi0yNDQge3BhZGRpbmctYm90dG9tOiAyNDRweDt9XHJcbi5wLWItMjQ1IHtwYWRkaW5nLWJvdHRvbTogMjQ1cHg7fVxyXG4ucC1iLTI0NiB7cGFkZGluZy1ib3R0b206IDI0NnB4O31cclxuLnAtYi0yNDcge3BhZGRpbmctYm90dG9tOiAyNDdweDt9XHJcbi5wLWItMjQ4IHtwYWRkaW5nLWJvdHRvbTogMjQ4cHg7fVxyXG4ucC1iLTI0OSB7cGFkZGluZy1ib3R0b206IDI0OXB4O31cclxuLnAtYi0yNTAge3BhZGRpbmctYm90dG9tOiAyNTBweDt9XHJcbi5wLWwtMCB7cGFkZGluZy1sZWZ0OiAwcHg7fVxyXG4ucC1sLTEge3BhZGRpbmctbGVmdDogMXB4O31cclxuLnAtbC0yIHtwYWRkaW5nLWxlZnQ6IDJweDt9XHJcbi5wLWwtMyB7cGFkZGluZy1sZWZ0OiAzcHg7fVxyXG4ucC1sLTQge3BhZGRpbmctbGVmdDogNHB4O31cclxuLnAtbC01IHtwYWRkaW5nLWxlZnQ6IDVweDt9XHJcbi5wLWwtNiB7cGFkZGluZy1sZWZ0OiA2cHg7fVxyXG4ucC1sLTcge3BhZGRpbmctbGVmdDogN3B4O31cclxuLnAtbC04IHtwYWRkaW5nLWxlZnQ6IDhweDt9XHJcbi5wLWwtOSB7cGFkZGluZy1sZWZ0OiA5cHg7fVxyXG4ucC1sLTEwIHtwYWRkaW5nLWxlZnQ6IDEwcHg7fVxyXG4ucC1sLTExIHtwYWRkaW5nLWxlZnQ6IDExcHg7fVxyXG4ucC1sLTEyIHtwYWRkaW5nLWxlZnQ6IDEycHg7fVxyXG4ucC1sLTEzIHtwYWRkaW5nLWxlZnQ6IDEzcHg7fVxyXG4ucC1sLTE0IHtwYWRkaW5nLWxlZnQ6IDE0cHg7fVxyXG4ucC1sLTE1IHtwYWRkaW5nLWxlZnQ6IDE1cHg7fVxyXG4ucC1sLTE2IHtwYWRkaW5nLWxlZnQ6IDE2cHg7fVxyXG4ucC1sLTE3IHtwYWRkaW5nLWxlZnQ6IDE3cHg7fVxyXG4ucC1sLTE4IHtwYWRkaW5nLWxlZnQ6IDE4cHg7fVxyXG4ucC1sLTE5IHtwYWRkaW5nLWxlZnQ6IDE5cHg7fVxyXG4ucC1sLTIwIHtwYWRkaW5nLWxlZnQ6IDIwcHg7fVxyXG4ucC1sLTIxIHtwYWRkaW5nLWxlZnQ6IDIxcHg7fVxyXG4ucC1sLTIyIHtwYWRkaW5nLWxlZnQ6IDIycHg7fVxyXG4ucC1sLTIzIHtwYWRkaW5nLWxlZnQ6IDIzcHg7fVxyXG4ucC1sLTI0IHtwYWRkaW5nLWxlZnQ6IDI0cHg7fVxyXG4ucC1sLTI1IHtwYWRkaW5nLWxlZnQ6IDI1cHg7fVxyXG4ucC1sLTI2IHtwYWRkaW5nLWxlZnQ6IDI2cHg7fVxyXG4ucC1sLTI3IHtwYWRkaW5nLWxlZnQ6IDI3cHg7fVxyXG4ucC1sLTI4IHtwYWRkaW5nLWxlZnQ6IDI4cHg7fVxyXG4ucC1sLTI5IHtwYWRkaW5nLWxlZnQ6IDI5cHg7fVxyXG4ucC1sLTMwIHtwYWRkaW5nLWxlZnQ6IDMwcHg7fVxyXG4ucC1sLTMxIHtwYWRkaW5nLWxlZnQ6IDMxcHg7fVxyXG4ucC1sLTMyIHtwYWRkaW5nLWxlZnQ6IDMycHg7fVxyXG4ucC1sLTMzIHtwYWRkaW5nLWxlZnQ6IDMzcHg7fVxyXG4ucC1sLTM0IHtwYWRkaW5nLWxlZnQ6IDM0cHg7fVxyXG4ucC1sLTM1IHtwYWRkaW5nLWxlZnQ6IDM1cHg7fVxyXG4ucC1sLTM2IHtwYWRkaW5nLWxlZnQ6IDM2cHg7fVxyXG4ucC1sLTM3IHtwYWRkaW5nLWxlZnQ6IDM3cHg7fVxyXG4ucC1sLTM4IHtwYWRkaW5nLWxlZnQ6IDM4cHg7fVxyXG4ucC1sLTM5IHtwYWRkaW5nLWxlZnQ6IDM5cHg7fVxyXG4ucC1sLTQwIHtwYWRkaW5nLWxlZnQ6IDQwcHg7fVxyXG4ucC1sLTQxIHtwYWRkaW5nLWxlZnQ6IDQxcHg7fVxyXG4ucC1sLTQyIHtwYWRkaW5nLWxlZnQ6IDQycHg7fVxyXG4ucC1sLTQzIHtwYWRkaW5nLWxlZnQ6IDQzcHg7fVxyXG4ucC1sLTQ0IHtwYWRkaW5nLWxlZnQ6IDQ0cHg7fVxyXG4ucC1sLTQ1IHtwYWRkaW5nLWxlZnQ6IDQ1cHg7fVxyXG4ucC1sLTQ2IHtwYWRkaW5nLWxlZnQ6IDQ2cHg7fVxyXG4ucC1sLTQ3IHtwYWRkaW5nLWxlZnQ6IDQ3cHg7fVxyXG4ucC1sLTQ4IHtwYWRkaW5nLWxlZnQ6IDQ4cHg7fVxyXG4ucC1sLTQ5IHtwYWRkaW5nLWxlZnQ6IDQ5cHg7fVxyXG4ucC1sLTUwIHtwYWRkaW5nLWxlZnQ6IDUwcHg7fVxyXG4ucC1sLTUxIHtwYWRkaW5nLWxlZnQ6IDUxcHg7fVxyXG4ucC1sLTUyIHtwYWRkaW5nLWxlZnQ6IDUycHg7fVxyXG4ucC1sLTUzIHtwYWRkaW5nLWxlZnQ6IDUzcHg7fVxyXG4ucC1sLTU0IHtwYWRkaW5nLWxlZnQ6IDU0cHg7fVxyXG4ucC1sLTU1IHtwYWRkaW5nLWxlZnQ6IDU1cHg7fVxyXG4ucC1sLTU2IHtwYWRkaW5nLWxlZnQ6IDU2cHg7fVxyXG4ucC1sLTU3IHtwYWRkaW5nLWxlZnQ6IDU3cHg7fVxyXG4ucC1sLTU4IHtwYWRkaW5nLWxlZnQ6IDU4cHg7fVxyXG4ucC1sLTU5IHtwYWRkaW5nLWxlZnQ6IDU5cHg7fVxyXG4ucC1sLTYwIHtwYWRkaW5nLWxlZnQ6IDYwcHg7fVxyXG4ucC1sLTYxIHtwYWRkaW5nLWxlZnQ6IDYxcHg7fVxyXG4ucC1sLTYyIHtwYWRkaW5nLWxlZnQ6IDYycHg7fVxyXG4ucC1sLTYzIHtwYWRkaW5nLWxlZnQ6IDYzcHg7fVxyXG4ucC1sLTY0IHtwYWRkaW5nLWxlZnQ6IDY0cHg7fVxyXG4ucC1sLTY1IHtwYWRkaW5nLWxlZnQ6IDY1cHg7fVxyXG4ucC1sLTY2IHtwYWRkaW5nLWxlZnQ6IDY2cHg7fVxyXG4ucC1sLTY3IHtwYWRkaW5nLWxlZnQ6IDY3cHg7fVxyXG4ucC1sLTY4IHtwYWRkaW5nLWxlZnQ6IDY4cHg7fVxyXG4ucC1sLTY5IHtwYWRkaW5nLWxlZnQ6IDY5cHg7fVxyXG4ucC1sLTcwIHtwYWRkaW5nLWxlZnQ6IDcwcHg7fVxyXG4ucC1sLTcxIHtwYWRkaW5nLWxlZnQ6IDcxcHg7fVxyXG4ucC1sLTcyIHtwYWRkaW5nLWxlZnQ6IDcycHg7fVxyXG4ucC1sLTczIHtwYWRkaW5nLWxlZnQ6IDczcHg7fVxyXG4ucC1sLTc0IHtwYWRkaW5nLWxlZnQ6IDc0cHg7fVxyXG4ucC1sLTc1IHtwYWRkaW5nLWxlZnQ6IDc1cHg7fVxyXG4ucC1sLTc2IHtwYWRkaW5nLWxlZnQ6IDc2cHg7fVxyXG4ucC1sLTc3IHtwYWRkaW5nLWxlZnQ6IDc3cHg7fVxyXG4ucC1sLTc4IHtwYWRkaW5nLWxlZnQ6IDc4cHg7fVxyXG4ucC1sLTc5IHtwYWRkaW5nLWxlZnQ6IDc5cHg7fVxyXG4ucC1sLTgwIHtwYWRkaW5nLWxlZnQ6IDgwcHg7fVxyXG4ucC1sLTgxIHtwYWRkaW5nLWxlZnQ6IDgxcHg7fVxyXG4ucC1sLTgyIHtwYWRkaW5nLWxlZnQ6IDgycHg7fVxyXG4ucC1sLTgzIHtwYWRkaW5nLWxlZnQ6IDgzcHg7fVxyXG4ucC1sLTg0IHtwYWRkaW5nLWxlZnQ6IDg0cHg7fVxyXG4ucC1sLTg1IHtwYWRkaW5nLWxlZnQ6IDg1cHg7fVxyXG4ucC1sLTg2IHtwYWRkaW5nLWxlZnQ6IDg2cHg7fVxyXG4ucC1sLTg3IHtwYWRkaW5nLWxlZnQ6IDg3cHg7fVxyXG4ucC1sLTg4IHtwYWRkaW5nLWxlZnQ6IDg4cHg7fVxyXG4ucC1sLTg5IHtwYWRkaW5nLWxlZnQ6IDg5cHg7fVxyXG4ucC1sLTkwIHtwYWRkaW5nLWxlZnQ6IDkwcHg7fVxyXG4ucC1sLTkxIHtwYWRkaW5nLWxlZnQ6IDkxcHg7fVxyXG4ucC1sLTkyIHtwYWRkaW5nLWxlZnQ6IDkycHg7fVxyXG4ucC1sLTkzIHtwYWRkaW5nLWxlZnQ6IDkzcHg7fVxyXG4ucC1sLTk0IHtwYWRkaW5nLWxlZnQ6IDk0cHg7fVxyXG4ucC1sLTk1IHtwYWRkaW5nLWxlZnQ6IDk1cHg7fVxyXG4ucC1sLTk2IHtwYWRkaW5nLWxlZnQ6IDk2cHg7fVxyXG4ucC1sLTk3IHtwYWRkaW5nLWxlZnQ6IDk3cHg7fVxyXG4ucC1sLTk4IHtwYWRkaW5nLWxlZnQ6IDk4cHg7fVxyXG4ucC1sLTk5IHtwYWRkaW5nLWxlZnQ6IDk5cHg7fVxyXG4ucC1sLTEwMCB7cGFkZGluZy1sZWZ0OiAxMDBweDt9XHJcbi5wLWwtMTAxIHtwYWRkaW5nLWxlZnQ6IDEwMXB4O31cclxuLnAtbC0xMDIge3BhZGRpbmctbGVmdDogMTAycHg7fVxyXG4ucC1sLTEwMyB7cGFkZGluZy1sZWZ0OiAxMDNweDt9XHJcbi5wLWwtMTA0IHtwYWRkaW5nLWxlZnQ6IDEwNHB4O31cclxuLnAtbC0xMDUge3BhZGRpbmctbGVmdDogMTA1cHg7fVxyXG4ucC1sLTEwNiB7cGFkZGluZy1sZWZ0OiAxMDZweDt9XHJcbi5wLWwtMTA3IHtwYWRkaW5nLWxlZnQ6IDEwN3B4O31cclxuLnAtbC0xMDgge3BhZGRpbmctbGVmdDogMTA4cHg7fVxyXG4ucC1sLTEwOSB7cGFkZGluZy1sZWZ0OiAxMDlweDt9XHJcbi5wLWwtMTEwIHtwYWRkaW5nLWxlZnQ6IDExMHB4O31cclxuLnAtbC0xMTEge3BhZGRpbmctbGVmdDogMTExcHg7fVxyXG4ucC1sLTExMiB7cGFkZGluZy1sZWZ0OiAxMTJweDt9XHJcbi5wLWwtMTEzIHtwYWRkaW5nLWxlZnQ6IDExM3B4O31cclxuLnAtbC0xMTQge3BhZGRpbmctbGVmdDogMTE0cHg7fVxyXG4ucC1sLTExNSB7cGFkZGluZy1sZWZ0OiAxMTVweDt9XHJcbi5wLWwtMTE2IHtwYWRkaW5nLWxlZnQ6IDExNnB4O31cclxuLnAtbC0xMTcge3BhZGRpbmctbGVmdDogMTE3cHg7fVxyXG4ucC1sLTExOCB7cGFkZGluZy1sZWZ0OiAxMThweDt9XHJcbi5wLWwtMTE5IHtwYWRkaW5nLWxlZnQ6IDExOXB4O31cclxuLnAtbC0xMjAge3BhZGRpbmctbGVmdDogMTIwcHg7fVxyXG4ucC1sLTEyMSB7cGFkZGluZy1sZWZ0OiAxMjFweDt9XHJcbi5wLWwtMTIyIHtwYWRkaW5nLWxlZnQ6IDEyMnB4O31cclxuLnAtbC0xMjMge3BhZGRpbmctbGVmdDogMTIzcHg7fVxyXG4ucC1sLTEyNCB7cGFkZGluZy1sZWZ0OiAxMjRweDt9XHJcbi5wLWwtMTI1IHtwYWRkaW5nLWxlZnQ6IDEyNXB4O31cclxuLnAtbC0xMjYge3BhZGRpbmctbGVmdDogMTI2cHg7fVxyXG4ucC1sLTEyNyB7cGFkZGluZy1sZWZ0OiAxMjdweDt9XHJcbi5wLWwtMTI4IHtwYWRkaW5nLWxlZnQ6IDEyOHB4O31cclxuLnAtbC0xMjkge3BhZGRpbmctbGVmdDogMTI5cHg7fVxyXG4ucC1sLTEzMCB7cGFkZGluZy1sZWZ0OiAxMzBweDt9XHJcbi5wLWwtMTMxIHtwYWRkaW5nLWxlZnQ6IDEzMXB4O31cclxuLnAtbC0xMzIge3BhZGRpbmctbGVmdDogMTMycHg7fVxyXG4ucC1sLTEzMyB7cGFkZGluZy1sZWZ0OiAxMzNweDt9XHJcbi5wLWwtMTM0IHtwYWRkaW5nLWxlZnQ6IDEzNHB4O31cclxuLnAtbC0xMzUge3BhZGRpbmctbGVmdDogMTM1cHg7fVxyXG4ucC1sLTEzNiB7cGFkZGluZy1sZWZ0OiAxMzZweDt9XHJcbi5wLWwtMTM3IHtwYWRkaW5nLWxlZnQ6IDEzN3B4O31cclxuLnAtbC0xMzgge3BhZGRpbmctbGVmdDogMTM4cHg7fVxyXG4ucC1sLTEzOSB7cGFkZGluZy1sZWZ0OiAxMzlweDt9XHJcbi5wLWwtMTQwIHtwYWRkaW5nLWxlZnQ6IDE0MHB4O31cclxuLnAtbC0xNDEge3BhZGRpbmctbGVmdDogMTQxcHg7fVxyXG4ucC1sLTE0MiB7cGFkZGluZy1sZWZ0OiAxNDJweDt9XHJcbi5wLWwtMTQzIHtwYWRkaW5nLWxlZnQ6IDE0M3B4O31cclxuLnAtbC0xNDQge3BhZGRpbmctbGVmdDogMTQ0cHg7fVxyXG4ucC1sLTE0NSB7cGFkZGluZy1sZWZ0OiAxNDVweDt9XHJcbi5wLWwtMTQ2IHtwYWRkaW5nLWxlZnQ6IDE0NnB4O31cclxuLnAtbC0xNDcge3BhZGRpbmctbGVmdDogMTQ3cHg7fVxyXG4ucC1sLTE0OCB7cGFkZGluZy1sZWZ0OiAxNDhweDt9XHJcbi5wLWwtMTQ5IHtwYWRkaW5nLWxlZnQ6IDE0OXB4O31cclxuLnAtbC0xNTAge3BhZGRpbmctbGVmdDogMTUwcHg7fVxyXG4ucC1sLTE1MSB7cGFkZGluZy1sZWZ0OiAxNTFweDt9XHJcbi5wLWwtMTUyIHtwYWRkaW5nLWxlZnQ6IDE1MnB4O31cclxuLnAtbC0xNTMge3BhZGRpbmctbGVmdDogMTUzcHg7fVxyXG4ucC1sLTE1NCB7cGFkZGluZy1sZWZ0OiAxNTRweDt9XHJcbi5wLWwtMTU1IHtwYWRkaW5nLWxlZnQ6IDE1NXB4O31cclxuLnAtbC0xNTYge3BhZGRpbmctbGVmdDogMTU2cHg7fVxyXG4ucC1sLTE1NyB7cGFkZGluZy1sZWZ0OiAxNTdweDt9XHJcbi5wLWwtMTU4IHtwYWRkaW5nLWxlZnQ6IDE1OHB4O31cclxuLnAtbC0xNTkge3BhZGRpbmctbGVmdDogMTU5cHg7fVxyXG4ucC1sLTE2MCB7cGFkZGluZy1sZWZ0OiAxNjBweDt9XHJcbi5wLWwtMTYxIHtwYWRkaW5nLWxlZnQ6IDE2MXB4O31cclxuLnAtbC0xNjIge3BhZGRpbmctbGVmdDogMTYycHg7fVxyXG4ucC1sLTE2MyB7cGFkZGluZy1sZWZ0OiAxNjNweDt9XHJcbi5wLWwtMTY0IHtwYWRkaW5nLWxlZnQ6IDE2NHB4O31cclxuLnAtbC0xNjUge3BhZGRpbmctbGVmdDogMTY1cHg7fVxyXG4ucC1sLTE2NiB7cGFkZGluZy1sZWZ0OiAxNjZweDt9XHJcbi5wLWwtMTY3IHtwYWRkaW5nLWxlZnQ6IDE2N3B4O31cclxuLnAtbC0xNjgge3BhZGRpbmctbGVmdDogMTY4cHg7fVxyXG4ucC1sLTE2OSB7cGFkZGluZy1sZWZ0OiAxNjlweDt9XHJcbi5wLWwtMTcwIHtwYWRkaW5nLWxlZnQ6IDE3MHB4O31cclxuLnAtbC0xNzEge3BhZGRpbmctbGVmdDogMTcxcHg7fVxyXG4ucC1sLTE3MiB7cGFkZGluZy1sZWZ0OiAxNzJweDt9XHJcbi5wLWwtMTczIHtwYWRkaW5nLWxlZnQ6IDE3M3B4O31cclxuLnAtbC0xNzQge3BhZGRpbmctbGVmdDogMTc0cHg7fVxyXG4ucC1sLTE3NSB7cGFkZGluZy1sZWZ0OiAxNzVweDt9XHJcbi5wLWwtMTc2IHtwYWRkaW5nLWxlZnQ6IDE3NnB4O31cclxuLnAtbC0xNzcge3BhZGRpbmctbGVmdDogMTc3cHg7fVxyXG4ucC1sLTE3OCB7cGFkZGluZy1sZWZ0OiAxNzhweDt9XHJcbi5wLWwtMTc5IHtwYWRkaW5nLWxlZnQ6IDE3OXB4O31cclxuLnAtbC0xODAge3BhZGRpbmctbGVmdDogMTgwcHg7fVxyXG4ucC1sLTE4MSB7cGFkZGluZy1sZWZ0OiAxODFweDt9XHJcbi5wLWwtMTgyIHtwYWRkaW5nLWxlZnQ6IDE4MnB4O31cclxuLnAtbC0xODMge3BhZGRpbmctbGVmdDogMTgzcHg7fVxyXG4ucC1sLTE4NCB7cGFkZGluZy1sZWZ0OiAxODRweDt9XHJcbi5wLWwtMTg1IHtwYWRkaW5nLWxlZnQ6IDE4NXB4O31cclxuLnAtbC0xODYge3BhZGRpbmctbGVmdDogMTg2cHg7fVxyXG4ucC1sLTE4NyB7cGFkZGluZy1sZWZ0OiAxODdweDt9XHJcbi5wLWwtMTg4IHtwYWRkaW5nLWxlZnQ6IDE4OHB4O31cclxuLnAtbC0xODkge3BhZGRpbmctbGVmdDogMTg5cHg7fVxyXG4ucC1sLTE5MCB7cGFkZGluZy1sZWZ0OiAxOTBweDt9XHJcbi5wLWwtMTkxIHtwYWRkaW5nLWxlZnQ6IDE5MXB4O31cclxuLnAtbC0xOTIge3BhZGRpbmctbGVmdDogMTkycHg7fVxyXG4ucC1sLTE5MyB7cGFkZGluZy1sZWZ0OiAxOTNweDt9XHJcbi5wLWwtMTk0IHtwYWRkaW5nLWxlZnQ6IDE5NHB4O31cclxuLnAtbC0xOTUge3BhZGRpbmctbGVmdDogMTk1cHg7fVxyXG4ucC1sLTE5NiB7cGFkZGluZy1sZWZ0OiAxOTZweDt9XHJcbi5wLWwtMTk3IHtwYWRkaW5nLWxlZnQ6IDE5N3B4O31cclxuLnAtbC0xOTgge3BhZGRpbmctbGVmdDogMTk4cHg7fVxyXG4ucC1sLTE5OSB7cGFkZGluZy1sZWZ0OiAxOTlweDt9XHJcbi5wLWwtMjAwIHtwYWRkaW5nLWxlZnQ6IDIwMHB4O31cclxuLnAtbC0yMDEge3BhZGRpbmctbGVmdDogMjAxcHg7fVxyXG4ucC1sLTIwMiB7cGFkZGluZy1sZWZ0OiAyMDJweDt9XHJcbi5wLWwtMjAzIHtwYWRkaW5nLWxlZnQ6IDIwM3B4O31cclxuLnAtbC0yMDQge3BhZGRpbmctbGVmdDogMjA0cHg7fVxyXG4ucC1sLTIwNSB7cGFkZGluZy1sZWZ0OiAyMDVweDt9XHJcbi5wLWwtMjA2IHtwYWRkaW5nLWxlZnQ6IDIwNnB4O31cclxuLnAtbC0yMDcge3BhZGRpbmctbGVmdDogMjA3cHg7fVxyXG4ucC1sLTIwOCB7cGFkZGluZy1sZWZ0OiAyMDhweDt9XHJcbi5wLWwtMjA5IHtwYWRkaW5nLWxlZnQ6IDIwOXB4O31cclxuLnAtbC0yMTAge3BhZGRpbmctbGVmdDogMjEwcHg7fVxyXG4ucC1sLTIxMSB7cGFkZGluZy1sZWZ0OiAyMTFweDt9XHJcbi5wLWwtMjEyIHtwYWRkaW5nLWxlZnQ6IDIxMnB4O31cclxuLnAtbC0yMTMge3BhZGRpbmctbGVmdDogMjEzcHg7fVxyXG4ucC1sLTIxNCB7cGFkZGluZy1sZWZ0OiAyMTRweDt9XHJcbi5wLWwtMjE1IHtwYWRkaW5nLWxlZnQ6IDIxNXB4O31cclxuLnAtbC0yMTYge3BhZGRpbmctbGVmdDogMjE2cHg7fVxyXG4ucC1sLTIxNyB7cGFkZGluZy1sZWZ0OiAyMTdweDt9XHJcbi5wLWwtMjE4IHtwYWRkaW5nLWxlZnQ6IDIxOHB4O31cclxuLnAtbC0yMTkge3BhZGRpbmctbGVmdDogMjE5cHg7fVxyXG4ucC1sLTIyMCB7cGFkZGluZy1sZWZ0OiAyMjBweDt9XHJcbi5wLWwtMjIxIHtwYWRkaW5nLWxlZnQ6IDIyMXB4O31cclxuLnAtbC0yMjIge3BhZGRpbmctbGVmdDogMjIycHg7fVxyXG4ucC1sLTIyMyB7cGFkZGluZy1sZWZ0OiAyMjNweDt9XHJcbi5wLWwtMjI0IHtwYWRkaW5nLWxlZnQ6IDIyNHB4O31cclxuLnAtbC0yMjUge3BhZGRpbmctbGVmdDogMjI1cHg7fVxyXG4ucC1sLTIyNiB7cGFkZGluZy1sZWZ0OiAyMjZweDt9XHJcbi5wLWwtMjI3IHtwYWRkaW5nLWxlZnQ6IDIyN3B4O31cclxuLnAtbC0yMjgge3BhZGRpbmctbGVmdDogMjI4cHg7fVxyXG4ucC1sLTIyOSB7cGFkZGluZy1sZWZ0OiAyMjlweDt9XHJcbi5wLWwtMjMwIHtwYWRkaW5nLWxlZnQ6IDIzMHB4O31cclxuLnAtbC0yMzEge3BhZGRpbmctbGVmdDogMjMxcHg7fVxyXG4ucC1sLTIzMiB7cGFkZGluZy1sZWZ0OiAyMzJweDt9XHJcbi5wLWwtMjMzIHtwYWRkaW5nLWxlZnQ6IDIzM3B4O31cclxuLnAtbC0yMzQge3BhZGRpbmctbGVmdDogMjM0cHg7fVxyXG4ucC1sLTIzNSB7cGFkZGluZy1sZWZ0OiAyMzVweDt9XHJcbi5wLWwtMjM2IHtwYWRkaW5nLWxlZnQ6IDIzNnB4O31cclxuLnAtbC0yMzcge3BhZGRpbmctbGVmdDogMjM3cHg7fVxyXG4ucC1sLTIzOCB7cGFkZGluZy1sZWZ0OiAyMzhweDt9XHJcbi5wLWwtMjM5IHtwYWRkaW5nLWxlZnQ6IDIzOXB4O31cclxuLnAtbC0yNDAge3BhZGRpbmctbGVmdDogMjQwcHg7fVxyXG4ucC1sLTI0MSB7cGFkZGluZy1sZWZ0OiAyNDFweDt9XHJcbi5wLWwtMjQyIHtwYWRkaW5nLWxlZnQ6IDI0MnB4O31cclxuLnAtbC0yNDMge3BhZGRpbmctbGVmdDogMjQzcHg7fVxyXG4ucC1sLTI0NCB7cGFkZGluZy1sZWZ0OiAyNDRweDt9XHJcbi5wLWwtMjQ1IHtwYWRkaW5nLWxlZnQ6IDI0NXB4O31cclxuLnAtbC0yNDYge3BhZGRpbmctbGVmdDogMjQ2cHg7fVxyXG4ucC1sLTI0NyB7cGFkZGluZy1sZWZ0OiAyNDdweDt9XHJcbi5wLWwtMjQ4IHtwYWRkaW5nLWxlZnQ6IDI0OHB4O31cclxuLnAtbC0yNDkge3BhZGRpbmctbGVmdDogMjQ5cHg7fVxyXG4ucC1sLTI1MCB7cGFkZGluZy1sZWZ0OiAyNTBweDt9XHJcbi5wLXItMCB7cGFkZGluZy1yaWdodDogMHB4O31cclxuLnAtci0xIHtwYWRkaW5nLXJpZ2h0OiAxcHg7fVxyXG4ucC1yLTIge3BhZGRpbmctcmlnaHQ6IDJweDt9XHJcbi5wLXItMyB7cGFkZGluZy1yaWdodDogM3B4O31cclxuLnAtci00IHtwYWRkaW5nLXJpZ2h0OiA0cHg7fVxyXG4ucC1yLTUge3BhZGRpbmctcmlnaHQ6IDVweDt9XHJcbi5wLXItNiB7cGFkZGluZy1yaWdodDogNnB4O31cclxuLnAtci03IHtwYWRkaW5nLXJpZ2h0OiA3cHg7fVxyXG4ucC1yLTgge3BhZGRpbmctcmlnaHQ6IDhweDt9XHJcbi5wLXItOSB7cGFkZGluZy1yaWdodDogOXB4O31cclxuLnAtci0xMCB7cGFkZGluZy1yaWdodDogMTBweDt9XHJcbi5wLXItMTEge3BhZGRpbmctcmlnaHQ6IDExcHg7fVxyXG4ucC1yLTEyIHtwYWRkaW5nLXJpZ2h0OiAxMnB4O31cclxuLnAtci0xMyB7cGFkZGluZy1yaWdodDogMTNweDt9XHJcbi5wLXItMTQge3BhZGRpbmctcmlnaHQ6IDE0cHg7fVxyXG4ucC1yLTE1IHtwYWRkaW5nLXJpZ2h0OiAxNXB4O31cclxuLnAtci0xNiB7cGFkZGluZy1yaWdodDogMTZweDt9XHJcbi5wLXItMTcge3BhZGRpbmctcmlnaHQ6IDE3cHg7fVxyXG4ucC1yLTE4IHtwYWRkaW5nLXJpZ2h0OiAxOHB4O31cclxuLnAtci0xOSB7cGFkZGluZy1yaWdodDogMTlweDt9XHJcbi5wLXItMjAge3BhZGRpbmctcmlnaHQ6IDIwcHg7fVxyXG4ucC1yLTIxIHtwYWRkaW5nLXJpZ2h0OiAyMXB4O31cclxuLnAtci0yMiB7cGFkZGluZy1yaWdodDogMjJweDt9XHJcbi5wLXItMjMge3BhZGRpbmctcmlnaHQ6IDIzcHg7fVxyXG4ucC1yLTI0IHtwYWRkaW5nLXJpZ2h0OiAyNHB4O31cclxuLnAtci0yNSB7cGFkZGluZy1yaWdodDogMjVweDt9XHJcbi5wLXItMjYge3BhZGRpbmctcmlnaHQ6IDI2cHg7fVxyXG4ucC1yLTI3IHtwYWRkaW5nLXJpZ2h0OiAyN3B4O31cclxuLnAtci0yOCB7cGFkZGluZy1yaWdodDogMjhweDt9XHJcbi5wLXItMjkge3BhZGRpbmctcmlnaHQ6IDI5cHg7fVxyXG4ucC1yLTMwIHtwYWRkaW5nLXJpZ2h0OiAzMHB4O31cclxuLnAtci0zMSB7cGFkZGluZy1yaWdodDogMzFweDt9XHJcbi5wLXItMzIge3BhZGRpbmctcmlnaHQ6IDMycHg7fVxyXG4ucC1yLTMzIHtwYWRkaW5nLXJpZ2h0OiAzM3B4O31cclxuLnAtci0zNCB7cGFkZGluZy1yaWdodDogMzRweDt9XHJcbi5wLXItMzUge3BhZGRpbmctcmlnaHQ6IDM1cHg7fVxyXG4ucC1yLTM2IHtwYWRkaW5nLXJpZ2h0OiAzNnB4O31cclxuLnAtci0zNyB7cGFkZGluZy1yaWdodDogMzdweDt9XHJcbi5wLXItMzgge3BhZGRpbmctcmlnaHQ6IDM4cHg7fVxyXG4ucC1yLTM5IHtwYWRkaW5nLXJpZ2h0OiAzOXB4O31cclxuLnAtci00MCB7cGFkZGluZy1yaWdodDogNDBweDt9XHJcbi5wLXItNDEge3BhZGRpbmctcmlnaHQ6IDQxcHg7fVxyXG4ucC1yLTQyIHtwYWRkaW5nLXJpZ2h0OiA0MnB4O31cclxuLnAtci00MyB7cGFkZGluZy1yaWdodDogNDNweDt9XHJcbi5wLXItNDQge3BhZGRpbmctcmlnaHQ6IDQ0cHg7fVxyXG4ucC1yLTQ1IHtwYWRkaW5nLXJpZ2h0OiA0NXB4O31cclxuLnAtci00NiB7cGFkZGluZy1yaWdodDogNDZweDt9XHJcbi5wLXItNDcge3BhZGRpbmctcmlnaHQ6IDQ3cHg7fVxyXG4ucC1yLTQ4IHtwYWRkaW5nLXJpZ2h0OiA0OHB4O31cclxuLnAtci00OSB7cGFkZGluZy1yaWdodDogNDlweDt9XHJcbi5wLXItNTAge3BhZGRpbmctcmlnaHQ6IDUwcHg7fVxyXG4ucC1yLTUxIHtwYWRkaW5nLXJpZ2h0OiA1MXB4O31cclxuLnAtci01MiB7cGFkZGluZy1yaWdodDogNTJweDt9XHJcbi5wLXItNTMge3BhZGRpbmctcmlnaHQ6IDUzcHg7fVxyXG4ucC1yLTU0IHtwYWRkaW5nLXJpZ2h0OiA1NHB4O31cclxuLnAtci01NSB7cGFkZGluZy1yaWdodDogNTVweDt9XHJcbi5wLXItNTYge3BhZGRpbmctcmlnaHQ6IDU2cHg7fVxyXG4ucC1yLTU3IHtwYWRkaW5nLXJpZ2h0OiA1N3B4O31cclxuLnAtci01OCB7cGFkZGluZy1yaWdodDogNThweDt9XHJcbi5wLXItNTkge3BhZGRpbmctcmlnaHQ6IDU5cHg7fVxyXG4ucC1yLTYwIHtwYWRkaW5nLXJpZ2h0OiA2MHB4O31cclxuLnAtci02MSB7cGFkZGluZy1yaWdodDogNjFweDt9XHJcbi5wLXItNjIge3BhZGRpbmctcmlnaHQ6IDYycHg7fVxyXG4ucC1yLTYzIHtwYWRkaW5nLXJpZ2h0OiA2M3B4O31cclxuLnAtci02NCB7cGFkZGluZy1yaWdodDogNjRweDt9XHJcbi5wLXItNjUge3BhZGRpbmctcmlnaHQ6IDY1cHg7fVxyXG4ucC1yLTY2IHtwYWRkaW5nLXJpZ2h0OiA2NnB4O31cclxuLnAtci02NyB7cGFkZGluZy1yaWdodDogNjdweDt9XHJcbi5wLXItNjgge3BhZGRpbmctcmlnaHQ6IDY4cHg7fVxyXG4ucC1yLTY5IHtwYWRkaW5nLXJpZ2h0OiA2OXB4O31cclxuLnAtci03MCB7cGFkZGluZy1yaWdodDogNzBweDt9XHJcbi5wLXItNzEge3BhZGRpbmctcmlnaHQ6IDcxcHg7fVxyXG4ucC1yLTcyIHtwYWRkaW5nLXJpZ2h0OiA3MnB4O31cclxuLnAtci03MyB7cGFkZGluZy1yaWdodDogNzNweDt9XHJcbi5wLXItNzQge3BhZGRpbmctcmlnaHQ6IDc0cHg7fVxyXG4ucC1yLTc1IHtwYWRkaW5nLXJpZ2h0OiA3NXB4O31cclxuLnAtci03NiB7cGFkZGluZy1yaWdodDogNzZweDt9XHJcbi5wLXItNzcge3BhZGRpbmctcmlnaHQ6IDc3cHg7fVxyXG4ucC1yLTc4IHtwYWRkaW5nLXJpZ2h0OiA3OHB4O31cclxuLnAtci03OSB7cGFkZGluZy1yaWdodDogNzlweDt9XHJcbi5wLXItODAge3BhZGRpbmctcmlnaHQ6IDgwcHg7fVxyXG4ucC1yLTgxIHtwYWRkaW5nLXJpZ2h0OiA4MXB4O31cclxuLnAtci04MiB7cGFkZGluZy1yaWdodDogODJweDt9XHJcbi5wLXItODMge3BhZGRpbmctcmlnaHQ6IDgzcHg7fVxyXG4ucC1yLTg0IHtwYWRkaW5nLXJpZ2h0OiA4NHB4O31cclxuLnAtci04NSB7cGFkZGluZy1yaWdodDogODVweDt9XHJcbi5wLXItODYge3BhZGRpbmctcmlnaHQ6IDg2cHg7fVxyXG4ucC1yLTg3IHtwYWRkaW5nLXJpZ2h0OiA4N3B4O31cclxuLnAtci04OCB7cGFkZGluZy1yaWdodDogODhweDt9XHJcbi5wLXItODkge3BhZGRpbmctcmlnaHQ6IDg5cHg7fVxyXG4ucC1yLTkwIHtwYWRkaW5nLXJpZ2h0OiA5MHB4O31cclxuLnAtci05MSB7cGFkZGluZy1yaWdodDogOTFweDt9XHJcbi5wLXItOTIge3BhZGRpbmctcmlnaHQ6IDkycHg7fVxyXG4ucC1yLTkzIHtwYWRkaW5nLXJpZ2h0OiA5M3B4O31cclxuLnAtci05NCB7cGFkZGluZy1yaWdodDogOTRweDt9XHJcbi5wLXItOTUge3BhZGRpbmctcmlnaHQ6IDk1cHg7fVxyXG4ucC1yLTk2IHtwYWRkaW5nLXJpZ2h0OiA5NnB4O31cclxuLnAtci05NyB7cGFkZGluZy1yaWdodDogOTdweDt9XHJcbi5wLXItOTgge3BhZGRpbmctcmlnaHQ6IDk4cHg7fVxyXG4ucC1yLTk5IHtwYWRkaW5nLXJpZ2h0OiA5OXB4O31cclxuLnAtci0xMDAge3BhZGRpbmctcmlnaHQ6IDEwMHB4O31cclxuLnAtci0xMDEge3BhZGRpbmctcmlnaHQ6IDEwMXB4O31cclxuLnAtci0xMDIge3BhZGRpbmctcmlnaHQ6IDEwMnB4O31cclxuLnAtci0xMDMge3BhZGRpbmctcmlnaHQ6IDEwM3B4O31cclxuLnAtci0xMDQge3BhZGRpbmctcmlnaHQ6IDEwNHB4O31cclxuLnAtci0xMDUge3BhZGRpbmctcmlnaHQ6IDEwNXB4O31cclxuLnAtci0xMDYge3BhZGRpbmctcmlnaHQ6IDEwNnB4O31cclxuLnAtci0xMDcge3BhZGRpbmctcmlnaHQ6IDEwN3B4O31cclxuLnAtci0xMDgge3BhZGRpbmctcmlnaHQ6IDEwOHB4O31cclxuLnAtci0xMDkge3BhZGRpbmctcmlnaHQ6IDEwOXB4O31cclxuLnAtci0xMTAge3BhZGRpbmctcmlnaHQ6IDExMHB4O31cclxuLnAtci0xMTEge3BhZGRpbmctcmlnaHQ6IDExMXB4O31cclxuLnAtci0xMTIge3BhZGRpbmctcmlnaHQ6IDExMnB4O31cclxuLnAtci0xMTMge3BhZGRpbmctcmlnaHQ6IDExM3B4O31cclxuLnAtci0xMTQge3BhZGRpbmctcmlnaHQ6IDExNHB4O31cclxuLnAtci0xMTUge3BhZGRpbmctcmlnaHQ6IDExNXB4O31cclxuLnAtci0xMTYge3BhZGRpbmctcmlnaHQ6IDExNnB4O31cclxuLnAtci0xMTcge3BhZGRpbmctcmlnaHQ6IDExN3B4O31cclxuLnAtci0xMTgge3BhZGRpbmctcmlnaHQ6IDExOHB4O31cclxuLnAtci0xMTkge3BhZGRpbmctcmlnaHQ6IDExOXB4O31cclxuLnAtci0xMjAge3BhZGRpbmctcmlnaHQ6IDEyMHB4O31cclxuLnAtci0xMjEge3BhZGRpbmctcmlnaHQ6IDEyMXB4O31cclxuLnAtci0xMjIge3BhZGRpbmctcmlnaHQ6IDEyMnB4O31cclxuLnAtci0xMjMge3BhZGRpbmctcmlnaHQ6IDEyM3B4O31cclxuLnAtci0xMjQge3BhZGRpbmctcmlnaHQ6IDEyNHB4O31cclxuLnAtci0xMjUge3BhZGRpbmctcmlnaHQ6IDEyNXB4O31cclxuLnAtci0xMjYge3BhZGRpbmctcmlnaHQ6IDEyNnB4O31cclxuLnAtci0xMjcge3BhZGRpbmctcmlnaHQ6IDEyN3B4O31cclxuLnAtci0xMjgge3BhZGRpbmctcmlnaHQ6IDEyOHB4O31cclxuLnAtci0xMjkge3BhZGRpbmctcmlnaHQ6IDEyOXB4O31cclxuLnAtci0xMzAge3BhZGRpbmctcmlnaHQ6IDEzMHB4O31cclxuLnAtci0xMzEge3BhZGRpbmctcmlnaHQ6IDEzMXB4O31cclxuLnAtci0xMzIge3BhZGRpbmctcmlnaHQ6IDEzMnB4O31cclxuLnAtci0xMzMge3BhZGRpbmctcmlnaHQ6IDEzM3B4O31cclxuLnAtci0xMzQge3BhZGRpbmctcmlnaHQ6IDEzNHB4O31cclxuLnAtci0xMzUge3BhZGRpbmctcmlnaHQ6IDEzNXB4O31cclxuLnAtci0xMzYge3BhZGRpbmctcmlnaHQ6IDEzNnB4O31cclxuLnAtci0xMzcge3BhZGRpbmctcmlnaHQ6IDEzN3B4O31cclxuLnAtci0xMzgge3BhZGRpbmctcmlnaHQ6IDEzOHB4O31cclxuLnAtci0xMzkge3BhZGRpbmctcmlnaHQ6IDEzOXB4O31cclxuLnAtci0xNDAge3BhZGRpbmctcmlnaHQ6IDE0MHB4O31cclxuLnAtci0xNDEge3BhZGRpbmctcmlnaHQ6IDE0MXB4O31cclxuLnAtci0xNDIge3BhZGRpbmctcmlnaHQ6IDE0MnB4O31cclxuLnAtci0xNDMge3BhZGRpbmctcmlnaHQ6IDE0M3B4O31cclxuLnAtci0xNDQge3BhZGRpbmctcmlnaHQ6IDE0NHB4O31cclxuLnAtci0xNDUge3BhZGRpbmctcmlnaHQ6IDE0NXB4O31cclxuLnAtci0xNDYge3BhZGRpbmctcmlnaHQ6IDE0NnB4O31cclxuLnAtci0xNDcge3BhZGRpbmctcmlnaHQ6IDE0N3B4O31cclxuLnAtci0xNDgge3BhZGRpbmctcmlnaHQ6IDE0OHB4O31cclxuLnAtci0xNDkge3BhZGRpbmctcmlnaHQ6IDE0OXB4O31cclxuLnAtci0xNTAge3BhZGRpbmctcmlnaHQ6IDE1MHB4O31cclxuLnAtci0xNTEge3BhZGRpbmctcmlnaHQ6IDE1MXB4O31cclxuLnAtci0xNTIge3BhZGRpbmctcmlnaHQ6IDE1MnB4O31cclxuLnAtci0xNTMge3BhZGRpbmctcmlnaHQ6IDE1M3B4O31cclxuLnAtci0xNTQge3BhZGRpbmctcmlnaHQ6IDE1NHB4O31cclxuLnAtci0xNTUge3BhZGRpbmctcmlnaHQ6IDE1NXB4O31cclxuLnAtci0xNTYge3BhZGRpbmctcmlnaHQ6IDE1NnB4O31cclxuLnAtci0xNTcge3BhZGRpbmctcmlnaHQ6IDE1N3B4O31cclxuLnAtci0xNTgge3BhZGRpbmctcmlnaHQ6IDE1OHB4O31cclxuLnAtci0xNTkge3BhZGRpbmctcmlnaHQ6IDE1OXB4O31cclxuLnAtci0xNjAge3BhZGRpbmctcmlnaHQ6IDE2MHB4O31cclxuLnAtci0xNjEge3BhZGRpbmctcmlnaHQ6IDE2MXB4O31cclxuLnAtci0xNjIge3BhZGRpbmctcmlnaHQ6IDE2MnB4O31cclxuLnAtci0xNjMge3BhZGRpbmctcmlnaHQ6IDE2M3B4O31cclxuLnAtci0xNjQge3BhZGRpbmctcmlnaHQ6IDE2NHB4O31cclxuLnAtci0xNjUge3BhZGRpbmctcmlnaHQ6IDE2NXB4O31cclxuLnAtci0xNjYge3BhZGRpbmctcmlnaHQ6IDE2NnB4O31cclxuLnAtci0xNjcge3BhZGRpbmctcmlnaHQ6IDE2N3B4O31cclxuLnAtci0xNjgge3BhZGRpbmctcmlnaHQ6IDE2OHB4O31cclxuLnAtci0xNjkge3BhZGRpbmctcmlnaHQ6IDE2OXB4O31cclxuLnAtci0xNzAge3BhZGRpbmctcmlnaHQ6IDE3MHB4O31cclxuLnAtci0xNzEge3BhZGRpbmctcmlnaHQ6IDE3MXB4O31cclxuLnAtci0xNzIge3BhZGRpbmctcmlnaHQ6IDE3MnB4O31cclxuLnAtci0xNzMge3BhZGRpbmctcmlnaHQ6IDE3M3B4O31cclxuLnAtci0xNzQge3BhZGRpbmctcmlnaHQ6IDE3NHB4O31cclxuLnAtci0xNzUge3BhZGRpbmctcmlnaHQ6IDE3NXB4O31cclxuLnAtci0xNzYge3BhZGRpbmctcmlnaHQ6IDE3NnB4O31cclxuLnAtci0xNzcge3BhZGRpbmctcmlnaHQ6IDE3N3B4O31cclxuLnAtci0xNzgge3BhZGRpbmctcmlnaHQ6IDE3OHB4O31cclxuLnAtci0xNzkge3BhZGRpbmctcmlnaHQ6IDE3OXB4O31cclxuLnAtci0xODAge3BhZGRpbmctcmlnaHQ6IDE4MHB4O31cclxuLnAtci0xODEge3BhZGRpbmctcmlnaHQ6IDE4MXB4O31cclxuLnAtci0xODIge3BhZGRpbmctcmlnaHQ6IDE4MnB4O31cclxuLnAtci0xODMge3BhZGRpbmctcmlnaHQ6IDE4M3B4O31cclxuLnAtci0xODQge3BhZGRpbmctcmlnaHQ6IDE4NHB4O31cclxuLnAtci0xODUge3BhZGRpbmctcmlnaHQ6IDE4NXB4O31cclxuLnAtci0xODYge3BhZGRpbmctcmlnaHQ6IDE4NnB4O31cclxuLnAtci0xODcge3BhZGRpbmctcmlnaHQ6IDE4N3B4O31cclxuLnAtci0xODgge3BhZGRpbmctcmlnaHQ6IDE4OHB4O31cclxuLnAtci0xODkge3BhZGRpbmctcmlnaHQ6IDE4OXB4O31cclxuLnAtci0xOTAge3BhZGRpbmctcmlnaHQ6IDE5MHB4O31cclxuLnAtci0xOTEge3BhZGRpbmctcmlnaHQ6IDE5MXB4O31cclxuLnAtci0xOTIge3BhZGRpbmctcmlnaHQ6IDE5MnB4O31cclxuLnAtci0xOTMge3BhZGRpbmctcmlnaHQ6IDE5M3B4O31cclxuLnAtci0xOTQge3BhZGRpbmctcmlnaHQ6IDE5NHB4O31cclxuLnAtci0xOTUge3BhZGRpbmctcmlnaHQ6IDE5NXB4O31cclxuLnAtci0xOTYge3BhZGRpbmctcmlnaHQ6IDE5NnB4O31cclxuLnAtci0xOTcge3BhZGRpbmctcmlnaHQ6IDE5N3B4O31cclxuLnAtci0xOTgge3BhZGRpbmctcmlnaHQ6IDE5OHB4O31cclxuLnAtci0xOTkge3BhZGRpbmctcmlnaHQ6IDE5OXB4O31cclxuLnAtci0yMDAge3BhZGRpbmctcmlnaHQ6IDIwMHB4O31cclxuLnAtci0yMDEge3BhZGRpbmctcmlnaHQ6IDIwMXB4O31cclxuLnAtci0yMDIge3BhZGRpbmctcmlnaHQ6IDIwMnB4O31cclxuLnAtci0yMDMge3BhZGRpbmctcmlnaHQ6IDIwM3B4O31cclxuLnAtci0yMDQge3BhZGRpbmctcmlnaHQ6IDIwNHB4O31cclxuLnAtci0yMDUge3BhZGRpbmctcmlnaHQ6IDIwNXB4O31cclxuLnAtci0yMDYge3BhZGRpbmctcmlnaHQ6IDIwNnB4O31cclxuLnAtci0yMDcge3BhZGRpbmctcmlnaHQ6IDIwN3B4O31cclxuLnAtci0yMDgge3BhZGRpbmctcmlnaHQ6IDIwOHB4O31cclxuLnAtci0yMDkge3BhZGRpbmctcmlnaHQ6IDIwOXB4O31cclxuLnAtci0yMTAge3BhZGRpbmctcmlnaHQ6IDIxMHB4O31cclxuLnAtci0yMTEge3BhZGRpbmctcmlnaHQ6IDIxMXB4O31cclxuLnAtci0yMTIge3BhZGRpbmctcmlnaHQ6IDIxMnB4O31cclxuLnAtci0yMTMge3BhZGRpbmctcmlnaHQ6IDIxM3B4O31cclxuLnAtci0yMTQge3BhZGRpbmctcmlnaHQ6IDIxNHB4O31cclxuLnAtci0yMTUge3BhZGRpbmctcmlnaHQ6IDIxNXB4O31cclxuLnAtci0yMTYge3BhZGRpbmctcmlnaHQ6IDIxNnB4O31cclxuLnAtci0yMTcge3BhZGRpbmctcmlnaHQ6IDIxN3B4O31cclxuLnAtci0yMTgge3BhZGRpbmctcmlnaHQ6IDIxOHB4O31cclxuLnAtci0yMTkge3BhZGRpbmctcmlnaHQ6IDIxOXB4O31cclxuLnAtci0yMjAge3BhZGRpbmctcmlnaHQ6IDIyMHB4O31cclxuLnAtci0yMjEge3BhZGRpbmctcmlnaHQ6IDIyMXB4O31cclxuLnAtci0yMjIge3BhZGRpbmctcmlnaHQ6IDIyMnB4O31cclxuLnAtci0yMjMge3BhZGRpbmctcmlnaHQ6IDIyM3B4O31cclxuLnAtci0yMjQge3BhZGRpbmctcmlnaHQ6IDIyNHB4O31cclxuLnAtci0yMjUge3BhZGRpbmctcmlnaHQ6IDIyNXB4O31cclxuLnAtci0yMjYge3BhZGRpbmctcmlnaHQ6IDIyNnB4O31cclxuLnAtci0yMjcge3BhZGRpbmctcmlnaHQ6IDIyN3B4O31cclxuLnAtci0yMjgge3BhZGRpbmctcmlnaHQ6IDIyOHB4O31cclxuLnAtci0yMjkge3BhZGRpbmctcmlnaHQ6IDIyOXB4O31cclxuLnAtci0yMzAge3BhZGRpbmctcmlnaHQ6IDIzMHB4O31cclxuLnAtci0yMzEge3BhZGRpbmctcmlnaHQ6IDIzMXB4O31cclxuLnAtci0yMzIge3BhZGRpbmctcmlnaHQ6IDIzMnB4O31cclxuLnAtci0yMzMge3BhZGRpbmctcmlnaHQ6IDIzM3B4O31cclxuLnAtci0yMzQge3BhZGRpbmctcmlnaHQ6IDIzNHB4O31cclxuLnAtci0yMzUge3BhZGRpbmctcmlnaHQ6IDIzNXB4O31cclxuLnAtci0yMzYge3BhZGRpbmctcmlnaHQ6IDIzNnB4O31cclxuLnAtci0yMzcge3BhZGRpbmctcmlnaHQ6IDIzN3B4O31cclxuLnAtci0yMzgge3BhZGRpbmctcmlnaHQ6IDIzOHB4O31cclxuLnAtci0yMzkge3BhZGRpbmctcmlnaHQ6IDIzOXB4O31cclxuLnAtci0yNDAge3BhZGRpbmctcmlnaHQ6IDI0MHB4O31cclxuLnAtci0yNDEge3BhZGRpbmctcmlnaHQ6IDI0MXB4O31cclxuLnAtci0yNDIge3BhZGRpbmctcmlnaHQ6IDI0MnB4O31cclxuLnAtci0yNDMge3BhZGRpbmctcmlnaHQ6IDI0M3B4O31cclxuLnAtci0yNDQge3BhZGRpbmctcmlnaHQ6IDI0NHB4O31cclxuLnAtci0yNDUge3BhZGRpbmctcmlnaHQ6IDI0NXB4O31cclxuLnAtci0yNDYge3BhZGRpbmctcmlnaHQ6IDI0NnB4O31cclxuLnAtci0yNDcge3BhZGRpbmctcmlnaHQ6IDI0N3B4O31cclxuLnAtci0yNDgge3BhZGRpbmctcmlnaHQ6IDI0OHB4O31cclxuLnAtci0yNDkge3BhZGRpbmctcmlnaHQ6IDI0OXB4O31cclxuLnAtci0yNTAge3BhZGRpbmctcmlnaHQ6IDI1MHB4O31cclxuXHJcbi8qWyBNQVJHSU4gXVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4qL1xyXG4ubS10LTAge21hcmdpbi10b3A6IDBweDt9XHJcbi5tLXQtMSB7bWFyZ2luLXRvcDogMXB4O31cclxuLm0tdC0yIHttYXJnaW4tdG9wOiAycHg7fVxyXG4ubS10LTMge21hcmdpbi10b3A6IDNweDt9XHJcbi5tLXQtNCB7bWFyZ2luLXRvcDogNHB4O31cclxuLm0tdC01IHttYXJnaW4tdG9wOiA1cHg7fVxyXG4ubS10LTYge21hcmdpbi10b3A6IDZweDt9XHJcbi5tLXQtNyB7bWFyZ2luLXRvcDogN3B4O31cclxuLm0tdC04IHttYXJnaW4tdG9wOiA4cHg7fVxyXG4ubS10LTkge21hcmdpbi10b3A6IDlweDt9XHJcbi5tLXQtMTAge21hcmdpbi10b3A6IDEwcHg7fVxyXG4ubS10LTExIHttYXJnaW4tdG9wOiAxMXB4O31cclxuLm0tdC0xMiB7bWFyZ2luLXRvcDogMTJweDt9XHJcbi5tLXQtMTMge21hcmdpbi10b3A6IDEzcHg7fVxyXG4ubS10LTE0IHttYXJnaW4tdG9wOiAxNHB4O31cclxuLm0tdC0xNSB7bWFyZ2luLXRvcDogMTVweDt9XHJcbi5tLXQtMTYge21hcmdpbi10b3A6IDE2cHg7fVxyXG4ubS10LTE3IHttYXJnaW4tdG9wOiAxN3B4O31cclxuLm0tdC0xOCB7bWFyZ2luLXRvcDogMThweDt9XHJcbi5tLXQtMTkge21hcmdpbi10b3A6IDE5cHg7fVxyXG4ubS10LTIwIHttYXJnaW4tdG9wOiAyMHB4O31cclxuLm0tdC0yMSB7bWFyZ2luLXRvcDogMjFweDt9XHJcbi5tLXQtMjIge21hcmdpbi10b3A6IDIycHg7fVxyXG4ubS10LTIzIHttYXJnaW4tdG9wOiAyM3B4O31cclxuLm0tdC0yNCB7bWFyZ2luLXRvcDogMjRweDt9XHJcbi5tLXQtMjUge21hcmdpbi10b3A6IDI1cHg7fVxyXG4ubS10LTI2IHttYXJnaW4tdG9wOiAyNnB4O31cclxuLm0tdC0yNyB7bWFyZ2luLXRvcDogMjdweDt9XHJcbi5tLXQtMjgge21hcmdpbi10b3A6IDI4cHg7fVxyXG4ubS10LTI5IHttYXJnaW4tdG9wOiAyOXB4O31cclxuLm0tdC0zMCB7bWFyZ2luLXRvcDogMzBweDt9XHJcbi5tLXQtMzEge21hcmdpbi10b3A6IDMxcHg7fVxyXG4ubS10LTMyIHttYXJnaW4tdG9wOiAzMnB4O31cclxuLm0tdC0zMyB7bWFyZ2luLXRvcDogMzNweDt9XHJcbi5tLXQtMzQge21hcmdpbi10b3A6IDM0cHg7fVxyXG4ubS10LTM1IHttYXJnaW4tdG9wOiAzNXB4O31cclxuLm0tdC0zNiB7bWFyZ2luLXRvcDogMzZweDt9XHJcbi5tLXQtMzcge21hcmdpbi10b3A6IDM3cHg7fVxyXG4ubS10LTM4IHttYXJnaW4tdG9wOiAzOHB4O31cclxuLm0tdC0zOSB7bWFyZ2luLXRvcDogMzlweDt9XHJcbi5tLXQtNDAge21hcmdpbi10b3A6IDQwcHg7fVxyXG4ubS10LTQxIHttYXJnaW4tdG9wOiA0MXB4O31cclxuLm0tdC00MiB7bWFyZ2luLXRvcDogNDJweDt9XHJcbi5tLXQtNDMge21hcmdpbi10b3A6IDQzcHg7fVxyXG4ubS10LTQ0IHttYXJnaW4tdG9wOiA0NHB4O31cclxuLm0tdC00NSB7bWFyZ2luLXRvcDogNDVweDt9XHJcbi5tLXQtNDYge21hcmdpbi10b3A6IDQ2cHg7fVxyXG4ubS10LTQ3IHttYXJnaW4tdG9wOiA0N3B4O31cclxuLm0tdC00OCB7bWFyZ2luLXRvcDogNDhweDt9XHJcbi5tLXQtNDkge21hcmdpbi10b3A6IDQ5cHg7fVxyXG4ubS10LTUwIHttYXJnaW4tdG9wOiA1MHB4O31cclxuLm0tdC01MSB7bWFyZ2luLXRvcDogNTFweDt9XHJcbi5tLXQtNTIge21hcmdpbi10b3A6IDUycHg7fVxyXG4ubS10LTUzIHttYXJnaW4tdG9wOiA1M3B4O31cclxuLm0tdC01NCB7bWFyZ2luLXRvcDogNTRweDt9XHJcbi5tLXQtNTUge21hcmdpbi10b3A6IDU1cHg7fVxyXG4ubS10LTU2IHttYXJnaW4tdG9wOiA1NnB4O31cclxuLm0tdC01NyB7bWFyZ2luLXRvcDogNTdweDt9XHJcbi5tLXQtNTgge21hcmdpbi10b3A6IDU4cHg7fVxyXG4ubS10LTU5IHttYXJnaW4tdG9wOiA1OXB4O31cclxuLm0tdC02MCB7bWFyZ2luLXRvcDogNjBweDt9XHJcbi5tLXQtNjEge21hcmdpbi10b3A6IDYxcHg7fVxyXG4ubS10LTYyIHttYXJnaW4tdG9wOiA2MnB4O31cclxuLm0tdC02MyB7bWFyZ2luLXRvcDogNjNweDt9XHJcbi5tLXQtNjQge21hcmdpbi10b3A6IDY0cHg7fVxyXG4ubS10LTY1IHttYXJnaW4tdG9wOiA2NXB4O31cclxuLm0tdC02NiB7bWFyZ2luLXRvcDogNjZweDt9XHJcbi5tLXQtNjcge21hcmdpbi10b3A6IDY3cHg7fVxyXG4ubS10LTY4IHttYXJnaW4tdG9wOiA2OHB4O31cclxuLm0tdC02OSB7bWFyZ2luLXRvcDogNjlweDt9XHJcbi5tLXQtNzAge21hcmdpbi10b3A6IDcwcHg7fVxyXG4ubS10LTcxIHttYXJnaW4tdG9wOiA3MXB4O31cclxuLm0tdC03MiB7bWFyZ2luLXRvcDogNzJweDt9XHJcbi5tLXQtNzMge21hcmdpbi10b3A6IDczcHg7fVxyXG4ubS10LTc0IHttYXJnaW4tdG9wOiA3NHB4O31cclxuLm0tdC03NSB7bWFyZ2luLXRvcDogNzVweDt9XHJcbi5tLXQtNzYge21hcmdpbi10b3A6IDc2cHg7fVxyXG4ubS10LTc3IHttYXJnaW4tdG9wOiA3N3B4O31cclxuLm0tdC03OCB7bWFyZ2luLXRvcDogNzhweDt9XHJcbi5tLXQtNzkge21hcmdpbi10b3A6IDc5cHg7fVxyXG4ubS10LTgwIHttYXJnaW4tdG9wOiA4MHB4O31cclxuLm0tdC04MSB7bWFyZ2luLXRvcDogODFweDt9XHJcbi5tLXQtODIge21hcmdpbi10b3A6IDgycHg7fVxyXG4ubS10LTgzIHttYXJnaW4tdG9wOiA4M3B4O31cclxuLm0tdC04NCB7bWFyZ2luLXRvcDogODRweDt9XHJcbi5tLXQtODUge21hcmdpbi10b3A6IDg1cHg7fVxyXG4ubS10LTg2IHttYXJnaW4tdG9wOiA4NnB4O31cclxuLm0tdC04NyB7bWFyZ2luLXRvcDogODdweDt9XHJcbi5tLXQtODgge21hcmdpbi10b3A6IDg4cHg7fVxyXG4ubS10LTg5IHttYXJnaW4tdG9wOiA4OXB4O31cclxuLm0tdC05MCB7bWFyZ2luLXRvcDogOTBweDt9XHJcbi5tLXQtOTEge21hcmdpbi10b3A6IDkxcHg7fVxyXG4ubS10LTkyIHttYXJnaW4tdG9wOiA5MnB4O31cclxuLm0tdC05MyB7bWFyZ2luLXRvcDogOTNweDt9XHJcbi5tLXQtOTQge21hcmdpbi10b3A6IDk0cHg7fVxyXG4ubS10LTk1IHttYXJnaW4tdG9wOiA5NXB4O31cclxuLm0tdC05NiB7bWFyZ2luLXRvcDogOTZweDt9XHJcbi5tLXQtOTcge21hcmdpbi10b3A6IDk3cHg7fVxyXG4ubS10LTk4IHttYXJnaW4tdG9wOiA5OHB4O31cclxuLm0tdC05OSB7bWFyZ2luLXRvcDogOTlweDt9XHJcbi5tLXQtMTAwIHttYXJnaW4tdG9wOiAxMDBweDt9XHJcbi5tLXQtMTAxIHttYXJnaW4tdG9wOiAxMDFweDt9XHJcbi5tLXQtMTAyIHttYXJnaW4tdG9wOiAxMDJweDt9XHJcbi5tLXQtMTAzIHttYXJnaW4tdG9wOiAxMDNweDt9XHJcbi5tLXQtMTA0IHttYXJnaW4tdG9wOiAxMDRweDt9XHJcbi5tLXQtMTA1IHttYXJnaW4tdG9wOiAxMDVweDt9XHJcbi5tLXQtMTA2IHttYXJnaW4tdG9wOiAxMDZweDt9XHJcbi5tLXQtMTA3IHttYXJnaW4tdG9wOiAxMDdweDt9XHJcbi5tLXQtMTA4IHttYXJnaW4tdG9wOiAxMDhweDt9XHJcbi5tLXQtMTA5IHttYXJnaW4tdG9wOiAxMDlweDt9XHJcbi5tLXQtMTEwIHttYXJnaW4tdG9wOiAxMTBweDt9XHJcbi5tLXQtMTExIHttYXJnaW4tdG9wOiAxMTFweDt9XHJcbi5tLXQtMTEyIHttYXJnaW4tdG9wOiAxMTJweDt9XHJcbi5tLXQtMTEzIHttYXJnaW4tdG9wOiAxMTNweDt9XHJcbi5tLXQtMTE0IHttYXJnaW4tdG9wOiAxMTRweDt9XHJcbi5tLXQtMTE1IHttYXJnaW4tdG9wOiAxMTVweDt9XHJcbi5tLXQtMTE2IHttYXJnaW4tdG9wOiAxMTZweDt9XHJcbi5tLXQtMTE3IHttYXJnaW4tdG9wOiAxMTdweDt9XHJcbi5tLXQtMTE4IHttYXJnaW4tdG9wOiAxMThweDt9XHJcbi5tLXQtMTE5IHttYXJnaW4tdG9wOiAxMTlweDt9XHJcbi5tLXQtMTIwIHttYXJnaW4tdG9wOiAxMjBweDt9XHJcbi5tLXQtMTIxIHttYXJnaW4tdG9wOiAxMjFweDt9XHJcbi5tLXQtMTIyIHttYXJnaW4tdG9wOiAxMjJweDt9XHJcbi5tLXQtMTIzIHttYXJnaW4tdG9wOiAxMjNweDt9XHJcbi5tLXQtMTI0IHttYXJnaW4tdG9wOiAxMjRweDt9XHJcbi5tLXQtMTI1IHttYXJnaW4tdG9wOiAxMjVweDt9XHJcbi5tLXQtMTI2IHttYXJnaW4tdG9wOiAxMjZweDt9XHJcbi5tLXQtMTI3IHttYXJnaW4tdG9wOiAxMjdweDt9XHJcbi5tLXQtMTI4IHttYXJnaW4tdG9wOiAxMjhweDt9XHJcbi5tLXQtMTI5IHttYXJnaW4tdG9wOiAxMjlweDt9XHJcbi5tLXQtMTMwIHttYXJnaW4tdG9wOiAxMzBweDt9XHJcbi5tLXQtMTMxIHttYXJnaW4tdG9wOiAxMzFweDt9XHJcbi5tLXQtMTMyIHttYXJnaW4tdG9wOiAxMzJweDt9XHJcbi5tLXQtMTMzIHttYXJnaW4tdG9wOiAxMzNweDt9XHJcbi5tLXQtMTM0IHttYXJnaW4tdG9wOiAxMzRweDt9XHJcbi5tLXQtMTM1IHttYXJnaW4tdG9wOiAxMzVweDt9XHJcbi5tLXQtMTM2IHttYXJnaW4tdG9wOiAxMzZweDt9XHJcbi5tLXQtMTM3IHttYXJnaW4tdG9wOiAxMzdweDt9XHJcbi5tLXQtMTM4IHttYXJnaW4tdG9wOiAxMzhweDt9XHJcbi5tLXQtMTM5IHttYXJnaW4tdG9wOiAxMzlweDt9XHJcbi5tLXQtMTQwIHttYXJnaW4tdG9wOiAxNDBweDt9XHJcbi5tLXQtMTQxIHttYXJnaW4tdG9wOiAxNDFweDt9XHJcbi5tLXQtMTQyIHttYXJnaW4tdG9wOiAxNDJweDt9XHJcbi5tLXQtMTQzIHttYXJnaW4tdG9wOiAxNDNweDt9XHJcbi5tLXQtMTQ0IHttYXJnaW4tdG9wOiAxNDRweDt9XHJcbi5tLXQtMTQ1IHttYXJnaW4tdG9wOiAxNDVweDt9XHJcbi5tLXQtMTQ2IHttYXJnaW4tdG9wOiAxNDZweDt9XHJcbi5tLXQtMTQ3IHttYXJnaW4tdG9wOiAxNDdweDt9XHJcbi5tLXQtMTQ4IHttYXJnaW4tdG9wOiAxNDhweDt9XHJcbi5tLXQtMTQ5IHttYXJnaW4tdG9wOiAxNDlweDt9XHJcbi5tLXQtMTUwIHttYXJnaW4tdG9wOiAxNTBweDt9XHJcbi5tLXQtMTUxIHttYXJnaW4tdG9wOiAxNTFweDt9XHJcbi5tLXQtMTUyIHttYXJnaW4tdG9wOiAxNTJweDt9XHJcbi5tLXQtMTUzIHttYXJnaW4tdG9wOiAxNTNweDt9XHJcbi5tLXQtMTU0IHttYXJnaW4tdG9wOiAxNTRweDt9XHJcbi5tLXQtMTU1IHttYXJnaW4tdG9wOiAxNTVweDt9XHJcbi5tLXQtMTU2IHttYXJnaW4tdG9wOiAxNTZweDt9XHJcbi5tLXQtMTU3IHttYXJnaW4tdG9wOiAxNTdweDt9XHJcbi5tLXQtMTU4IHttYXJnaW4tdG9wOiAxNThweDt9XHJcbi5tLXQtMTU5IHttYXJnaW4tdG9wOiAxNTlweDt9XHJcbi5tLXQtMTYwIHttYXJnaW4tdG9wOiAxNjBweDt9XHJcbi5tLXQtMTYxIHttYXJnaW4tdG9wOiAxNjFweDt9XHJcbi5tLXQtMTYyIHttYXJnaW4tdG9wOiAxNjJweDt9XHJcbi5tLXQtMTYzIHttYXJnaW4tdG9wOiAxNjNweDt9XHJcbi5tLXQtMTY0IHttYXJnaW4tdG9wOiAxNjRweDt9XHJcbi5tLXQtMTY1IHttYXJnaW4tdG9wOiAxNjVweDt9XHJcbi5tLXQtMTY2IHttYXJnaW4tdG9wOiAxNjZweDt9XHJcbi5tLXQtMTY3IHttYXJnaW4tdG9wOiAxNjdweDt9XHJcbi5tLXQtMTY4IHttYXJnaW4tdG9wOiAxNjhweDt9XHJcbi5tLXQtMTY5IHttYXJnaW4tdG9wOiAxNjlweDt9XHJcbi5tLXQtMTcwIHttYXJnaW4tdG9wOiAxNzBweDt9XHJcbi5tLXQtMTcxIHttYXJnaW4tdG9wOiAxNzFweDt9XHJcbi5tLXQtMTcyIHttYXJnaW4tdG9wOiAxNzJweDt9XHJcbi5tLXQtMTczIHttYXJnaW4tdG9wOiAxNzNweDt9XHJcbi5tLXQtMTc0IHttYXJnaW4tdG9wOiAxNzRweDt9XHJcbi5tLXQtMTc1IHttYXJnaW4tdG9wOiAxNzVweDt9XHJcbi5tLXQtMTc2IHttYXJnaW4tdG9wOiAxNzZweDt9XHJcbi5tLXQtMTc3IHttYXJnaW4tdG9wOiAxNzdweDt9XHJcbi5tLXQtMTc4IHttYXJnaW4tdG9wOiAxNzhweDt9XHJcbi5tLXQtMTc5IHttYXJnaW4tdG9wOiAxNzlweDt9XHJcbi5tLXQtMTgwIHttYXJnaW4tdG9wOiAxODBweDt9XHJcbi5tLXQtMTgxIHttYXJnaW4tdG9wOiAxODFweDt9XHJcbi5tLXQtMTgyIHttYXJnaW4tdG9wOiAxODJweDt9XHJcbi5tLXQtMTgzIHttYXJnaW4tdG9wOiAxODNweDt9XHJcbi5tLXQtMTg0IHttYXJnaW4tdG9wOiAxODRweDt9XHJcbi5tLXQtMTg1IHttYXJnaW4tdG9wOiAxODVweDt9XHJcbi5tLXQtMTg2IHttYXJnaW4tdG9wOiAxODZweDt9XHJcbi5tLXQtMTg3IHttYXJnaW4tdG9wOiAxODdweDt9XHJcbi5tLXQtMTg4IHttYXJnaW4tdG9wOiAxODhweDt9XHJcbi5tLXQtMTg5IHttYXJnaW4tdG9wOiAxODlweDt9XHJcbi5tLXQtMTkwIHttYXJnaW4tdG9wOiAxOTBweDt9XHJcbi5tLXQtMTkxIHttYXJnaW4tdG9wOiAxOTFweDt9XHJcbi5tLXQtMTkyIHttYXJnaW4tdG9wOiAxOTJweDt9XHJcbi5tLXQtMTkzIHttYXJnaW4tdG9wOiAxOTNweDt9XHJcbi5tLXQtMTk0IHttYXJnaW4tdG9wOiAxOTRweDt9XHJcbi5tLXQtMTk1IHttYXJnaW4tdG9wOiAxOTVweDt9XHJcbi5tLXQtMTk2IHttYXJnaW4tdG9wOiAxOTZweDt9XHJcbi5tLXQtMTk3IHttYXJnaW4tdG9wOiAxOTdweDt9XHJcbi5tLXQtMTk4IHttYXJnaW4tdG9wOiAxOThweDt9XHJcbi5tLXQtMTk5IHttYXJnaW4tdG9wOiAxOTlweDt9XHJcbi5tLXQtMjAwIHttYXJnaW4tdG9wOiAyMDBweDt9XHJcbi5tLXQtMjAxIHttYXJnaW4tdG9wOiAyMDFweDt9XHJcbi5tLXQtMjAyIHttYXJnaW4tdG9wOiAyMDJweDt9XHJcbi5tLXQtMjAzIHttYXJnaW4tdG9wOiAyMDNweDt9XHJcbi5tLXQtMjA0IHttYXJnaW4tdG9wOiAyMDRweDt9XHJcbi5tLXQtMjA1IHttYXJnaW4tdG9wOiAyMDVweDt9XHJcbi5tLXQtMjA2IHttYXJnaW4tdG9wOiAyMDZweDt9XHJcbi5tLXQtMjA3IHttYXJnaW4tdG9wOiAyMDdweDt9XHJcbi5tLXQtMjA4IHttYXJnaW4tdG9wOiAyMDhweDt9XHJcbi5tLXQtMjA5IHttYXJnaW4tdG9wOiAyMDlweDt9XHJcbi5tLXQtMjEwIHttYXJnaW4tdG9wOiAyMTBweDt9XHJcbi5tLXQtMjExIHttYXJnaW4tdG9wOiAyMTFweDt9XHJcbi5tLXQtMjEyIHttYXJnaW4tdG9wOiAyMTJweDt9XHJcbi5tLXQtMjEzIHttYXJnaW4tdG9wOiAyMTNweDt9XHJcbi5tLXQtMjE0IHttYXJnaW4tdG9wOiAyMTRweDt9XHJcbi5tLXQtMjE1IHttYXJnaW4tdG9wOiAyMTVweDt9XHJcbi5tLXQtMjE2IHttYXJnaW4tdG9wOiAyMTZweDt9XHJcbi5tLXQtMjE3IHttYXJnaW4tdG9wOiAyMTdweDt9XHJcbi5tLXQtMjE4IHttYXJnaW4tdG9wOiAyMThweDt9XHJcbi5tLXQtMjE5IHttYXJnaW4tdG9wOiAyMTlweDt9XHJcbi5tLXQtMjIwIHttYXJnaW4tdG9wOiAyMjBweDt9XHJcbi5tLXQtMjIxIHttYXJnaW4tdG9wOiAyMjFweDt9XHJcbi5tLXQtMjIyIHttYXJnaW4tdG9wOiAyMjJweDt9XHJcbi5tLXQtMjIzIHttYXJnaW4tdG9wOiAyMjNweDt9XHJcbi5tLXQtMjI0IHttYXJnaW4tdG9wOiAyMjRweDt9XHJcbi5tLXQtMjI1IHttYXJnaW4tdG9wOiAyMjVweDt9XHJcbi5tLXQtMjI2IHttYXJnaW4tdG9wOiAyMjZweDt9XHJcbi5tLXQtMjI3IHttYXJnaW4tdG9wOiAyMjdweDt9XHJcbi5tLXQtMjI4IHttYXJnaW4tdG9wOiAyMjhweDt9XHJcbi5tLXQtMjI5IHttYXJnaW4tdG9wOiAyMjlweDt9XHJcbi5tLXQtMjMwIHttYXJnaW4tdG9wOiAyMzBweDt9XHJcbi5tLXQtMjMxIHttYXJnaW4tdG9wOiAyMzFweDt9XHJcbi5tLXQtMjMyIHttYXJnaW4tdG9wOiAyMzJweDt9XHJcbi5tLXQtMjMzIHttYXJnaW4tdG9wOiAyMzNweDt9XHJcbi5tLXQtMjM0IHttYXJnaW4tdG9wOiAyMzRweDt9XHJcbi5tLXQtMjM1IHttYXJnaW4tdG9wOiAyMzVweDt9XHJcbi5tLXQtMjM2IHttYXJnaW4tdG9wOiAyMzZweDt9XHJcbi5tLXQtMjM3IHttYXJnaW4tdG9wOiAyMzdweDt9XHJcbi5tLXQtMjM4IHttYXJnaW4tdG9wOiAyMzhweDt9XHJcbi5tLXQtMjM5IHttYXJnaW4tdG9wOiAyMzlweDt9XHJcbi5tLXQtMjQwIHttYXJnaW4tdG9wOiAyNDBweDt9XHJcbi5tLXQtMjQxIHttYXJnaW4tdG9wOiAyNDFweDt9XHJcbi5tLXQtMjQyIHttYXJnaW4tdG9wOiAyNDJweDt9XHJcbi5tLXQtMjQzIHttYXJnaW4tdG9wOiAyNDNweDt9XHJcbi5tLXQtMjQ0IHttYXJnaW4tdG9wOiAyNDRweDt9XHJcbi5tLXQtMjQ1IHttYXJnaW4tdG9wOiAyNDVweDt9XHJcbi5tLXQtMjQ2IHttYXJnaW4tdG9wOiAyNDZweDt9XHJcbi5tLXQtMjQ3IHttYXJnaW4tdG9wOiAyNDdweDt9XHJcbi5tLXQtMjQ4IHttYXJnaW4tdG9wOiAyNDhweDt9XHJcbi5tLXQtMjQ5IHttYXJnaW4tdG9wOiAyNDlweDt9XHJcbi5tLXQtMjUwIHttYXJnaW4tdG9wOiAyNTBweDt9XHJcbi5tLWItMCB7bWFyZ2luLWJvdHRvbTogMHB4O31cclxuLm0tYi0xIHttYXJnaW4tYm90dG9tOiAxcHg7fVxyXG4ubS1iLTIge21hcmdpbi1ib3R0b206IDJweDt9XHJcbi5tLWItMyB7bWFyZ2luLWJvdHRvbTogM3B4O31cclxuLm0tYi00IHttYXJnaW4tYm90dG9tOiA0cHg7fVxyXG4ubS1iLTUge21hcmdpbi1ib3R0b206IDVweDt9XHJcbi5tLWItNiB7bWFyZ2luLWJvdHRvbTogNnB4O31cclxuLm0tYi03IHttYXJnaW4tYm90dG9tOiA3cHg7fVxyXG4ubS1iLTgge21hcmdpbi1ib3R0b206IDhweDt9XHJcbi5tLWItOSB7bWFyZ2luLWJvdHRvbTogOXB4O31cclxuLm0tYi0xMCB7bWFyZ2luLWJvdHRvbTogMTBweDt9XHJcbi5tLWItMTEge21hcmdpbi1ib3R0b206IDExcHg7fVxyXG4ubS1iLTEyIHttYXJnaW4tYm90dG9tOiAxMnB4O31cclxuLm0tYi0xMyB7bWFyZ2luLWJvdHRvbTogMTNweDt9XHJcbi5tLWItMTQge21hcmdpbi1ib3R0b206IDE0cHg7fVxyXG4ubS1iLTE1IHttYXJnaW4tYm90dG9tOiAxNXB4O31cclxuLm0tYi0xNiB7bWFyZ2luLWJvdHRvbTogMTZweDt9XHJcbi5tLWItMTcge21hcmdpbi1ib3R0b206IDE3cHg7fVxyXG4ubS1iLTE4IHttYXJnaW4tYm90dG9tOiAxOHB4O31cclxuLm0tYi0xOSB7bWFyZ2luLWJvdHRvbTogMTlweDt9XHJcbi5tLWItMjAge21hcmdpbi1ib3R0b206IDIwcHg7fVxyXG4ubS1iLTIxIHttYXJnaW4tYm90dG9tOiAyMXB4O31cclxuLm0tYi0yMiB7bWFyZ2luLWJvdHRvbTogMjJweDt9XHJcbi5tLWItMjMge21hcmdpbi1ib3R0b206IDIzcHg7fVxyXG4ubS1iLTI0IHttYXJnaW4tYm90dG9tOiAyNHB4O31cclxuLm0tYi0yNSB7bWFyZ2luLWJvdHRvbTogMjVweDt9XHJcbi5tLWItMjYge21hcmdpbi1ib3R0b206IDI2cHg7fVxyXG4ubS1iLTI3IHttYXJnaW4tYm90dG9tOiAyN3B4O31cclxuLm0tYi0yOCB7bWFyZ2luLWJvdHRvbTogMjhweDt9XHJcbi5tLWItMjkge21hcmdpbi1ib3R0b206IDI5cHg7fVxyXG4ubS1iLTMwIHttYXJnaW4tYm90dG9tOiAzMHB4O31cclxuLm0tYi0zMSB7bWFyZ2luLWJvdHRvbTogMzFweDt9XHJcbi5tLWItMzIge21hcmdpbi1ib3R0b206IDMycHg7fVxyXG4ubS1iLTMzIHttYXJnaW4tYm90dG9tOiAzM3B4O31cclxuLm0tYi0zNCB7bWFyZ2luLWJvdHRvbTogMzRweDt9XHJcbi5tLWItMzUge21hcmdpbi1ib3R0b206IDM1cHg7fVxyXG4ubS1iLTM2IHttYXJnaW4tYm90dG9tOiAzNnB4O31cclxuLm0tYi0zNyB7bWFyZ2luLWJvdHRvbTogMzdweDt9XHJcbi5tLWItMzgge21hcmdpbi1ib3R0b206IDM4cHg7fVxyXG4ubS1iLTM5IHttYXJnaW4tYm90dG9tOiAzOXB4O31cclxuLm0tYi00MCB7bWFyZ2luLWJvdHRvbTogNDBweDt9XHJcbi5tLWItNDEge21hcmdpbi1ib3R0b206IDQxcHg7fVxyXG4ubS1iLTQyIHttYXJnaW4tYm90dG9tOiA0MnB4O31cclxuLm0tYi00MyB7bWFyZ2luLWJvdHRvbTogNDNweDt9XHJcbi5tLWItNDQge21hcmdpbi1ib3R0b206IDQ0cHg7fVxyXG4ubS1iLTQ1IHttYXJnaW4tYm90dG9tOiA0NXB4O31cclxuLm0tYi00NiB7bWFyZ2luLWJvdHRvbTogNDZweDt9XHJcbi5tLWItNDcge21hcmdpbi1ib3R0b206IDQ3cHg7fVxyXG4ubS1iLTQ4IHttYXJnaW4tYm90dG9tOiA0OHB4O31cclxuLm0tYi00OSB7bWFyZ2luLWJvdHRvbTogNDlweDt9XHJcbi5tLWItNTAge21hcmdpbi1ib3R0b206IDUwcHg7fVxyXG4ubS1iLTUxIHttYXJnaW4tYm90dG9tOiA1MXB4O31cclxuLm0tYi01MiB7bWFyZ2luLWJvdHRvbTogNTJweDt9XHJcbi5tLWItNTMge21hcmdpbi1ib3R0b206IDUzcHg7fVxyXG4ubS1iLTU0IHttYXJnaW4tYm90dG9tOiA1NHB4O31cclxuLm0tYi01NSB7bWFyZ2luLWJvdHRvbTogNTVweDt9XHJcbi5tLWItNTYge21hcmdpbi1ib3R0b206IDU2cHg7fVxyXG4ubS1iLTU3IHttYXJnaW4tYm90dG9tOiA1N3B4O31cclxuLm0tYi01OCB7bWFyZ2luLWJvdHRvbTogNThweDt9XHJcbi5tLWItNTkge21hcmdpbi1ib3R0b206IDU5cHg7fVxyXG4ubS1iLTYwIHttYXJnaW4tYm90dG9tOiA2MHB4O31cclxuLm0tYi02MSB7bWFyZ2luLWJvdHRvbTogNjFweDt9XHJcbi5tLWItNjIge21hcmdpbi1ib3R0b206IDYycHg7fVxyXG4ubS1iLTYzIHttYXJnaW4tYm90dG9tOiA2M3B4O31cclxuLm0tYi02NCB7bWFyZ2luLWJvdHRvbTogNjRweDt9XHJcbi5tLWItNjUge21hcmdpbi1ib3R0b206IDY1cHg7fVxyXG4ubS1iLTY2IHttYXJnaW4tYm90dG9tOiA2NnB4O31cclxuLm0tYi02NyB7bWFyZ2luLWJvdHRvbTogNjdweDt9XHJcbi5tLWItNjgge21hcmdpbi1ib3R0b206IDY4cHg7fVxyXG4ubS1iLTY5IHttYXJnaW4tYm90dG9tOiA2OXB4O31cclxuLm0tYi03MCB7bWFyZ2luLWJvdHRvbTogNzBweDt9XHJcbi5tLWItNzEge21hcmdpbi1ib3R0b206IDcxcHg7fVxyXG4ubS1iLTcyIHttYXJnaW4tYm90dG9tOiA3MnB4O31cclxuLm0tYi03MyB7bWFyZ2luLWJvdHRvbTogNzNweDt9XHJcbi5tLWItNzQge21hcmdpbi1ib3R0b206IDc0cHg7fVxyXG4ubS1iLTc1IHttYXJnaW4tYm90dG9tOiA3NXB4O31cclxuLm0tYi03NiB7bWFyZ2luLWJvdHRvbTogNzZweDt9XHJcbi5tLWItNzcge21hcmdpbi1ib3R0b206IDc3cHg7fVxyXG4ubS1iLTc4IHttYXJnaW4tYm90dG9tOiA3OHB4O31cclxuLm0tYi03OSB7bWFyZ2luLWJvdHRvbTogNzlweDt9XHJcbi5tLWItODAge21hcmdpbi1ib3R0b206IDgwcHg7fVxyXG4ubS1iLTgxIHttYXJnaW4tYm90dG9tOiA4MXB4O31cclxuLm0tYi04MiB7bWFyZ2luLWJvdHRvbTogODJweDt9XHJcbi5tLWItODMge21hcmdpbi1ib3R0b206IDgzcHg7fVxyXG4ubS1iLTg0IHttYXJnaW4tYm90dG9tOiA4NHB4O31cclxuLm0tYi04NSB7bWFyZ2luLWJvdHRvbTogODVweDt9XHJcbi5tLWItODYge21hcmdpbi1ib3R0b206IDg2cHg7fVxyXG4ubS1iLTg3IHttYXJnaW4tYm90dG9tOiA4N3B4O31cclxuLm0tYi04OCB7bWFyZ2luLWJvdHRvbTogODhweDt9XHJcbi5tLWItODkge21hcmdpbi1ib3R0b206IDg5cHg7fVxyXG4ubS1iLTkwIHttYXJnaW4tYm90dG9tOiA5MHB4O31cclxuLm0tYi05MSB7bWFyZ2luLWJvdHRvbTogOTFweDt9XHJcbi5tLWItOTIge21hcmdpbi1ib3R0b206IDkycHg7fVxyXG4ubS1iLTkzIHttYXJnaW4tYm90dG9tOiA5M3B4O31cclxuLm0tYi05NCB7bWFyZ2luLWJvdHRvbTogOTRweDt9XHJcbi5tLWItOTUge21hcmdpbi1ib3R0b206IDk1cHg7fVxyXG4ubS1iLTk2IHttYXJnaW4tYm90dG9tOiA5NnB4O31cclxuLm0tYi05NyB7bWFyZ2luLWJvdHRvbTogOTdweDt9XHJcbi5tLWItOTgge21hcmdpbi1ib3R0b206IDk4cHg7fVxyXG4ubS1iLTk5IHttYXJnaW4tYm90dG9tOiA5OXB4O31cclxuLm0tYi0xMDAge21hcmdpbi1ib3R0b206IDEwMHB4O31cclxuLm0tYi0xMDEge21hcmdpbi1ib3R0b206IDEwMXB4O31cclxuLm0tYi0xMDIge21hcmdpbi1ib3R0b206IDEwMnB4O31cclxuLm0tYi0xMDMge21hcmdpbi1ib3R0b206IDEwM3B4O31cclxuLm0tYi0xMDQge21hcmdpbi1ib3R0b206IDEwNHB4O31cclxuLm0tYi0xMDUge21hcmdpbi1ib3R0b206IDEwNXB4O31cclxuLm0tYi0xMDYge21hcmdpbi1ib3R0b206IDEwNnB4O31cclxuLm0tYi0xMDcge21hcmdpbi1ib3R0b206IDEwN3B4O31cclxuLm0tYi0xMDgge21hcmdpbi1ib3R0b206IDEwOHB4O31cclxuLm0tYi0xMDkge21hcmdpbi1ib3R0b206IDEwOXB4O31cclxuLm0tYi0xMTAge21hcmdpbi1ib3R0b206IDExMHB4O31cclxuLm0tYi0xMTEge21hcmdpbi1ib3R0b206IDExMXB4O31cclxuLm0tYi0xMTIge21hcmdpbi1ib3R0b206IDExMnB4O31cclxuLm0tYi0xMTMge21hcmdpbi1ib3R0b206IDExM3B4O31cclxuLm0tYi0xMTQge21hcmdpbi1ib3R0b206IDExNHB4O31cclxuLm0tYi0xMTUge21hcmdpbi1ib3R0b206IDExNXB4O31cclxuLm0tYi0xMTYge21hcmdpbi1ib3R0b206IDExNnB4O31cclxuLm0tYi0xMTcge21hcmdpbi1ib3R0b206IDExN3B4O31cclxuLm0tYi0xMTgge21hcmdpbi1ib3R0b206IDExOHB4O31cclxuLm0tYi0xMTkge21hcmdpbi1ib3R0b206IDExOXB4O31cclxuLm0tYi0xMjAge21hcmdpbi1ib3R0b206IDEyMHB4O31cclxuLm0tYi0xMjEge21hcmdpbi1ib3R0b206IDEyMXB4O31cclxuLm0tYi0xMjIge21hcmdpbi1ib3R0b206IDEyMnB4O31cclxuLm0tYi0xMjMge21hcmdpbi1ib3R0b206IDEyM3B4O31cclxuLm0tYi0xMjQge21hcmdpbi1ib3R0b206IDEyNHB4O31cclxuLm0tYi0xMjUge21hcmdpbi1ib3R0b206IDEyNXB4O31cclxuLm0tYi0xMjYge21hcmdpbi1ib3R0b206IDEyNnB4O31cclxuLm0tYi0xMjcge21hcmdpbi1ib3R0b206IDEyN3B4O31cclxuLm0tYi0xMjgge21hcmdpbi1ib3R0b206IDEyOHB4O31cclxuLm0tYi0xMjkge21hcmdpbi1ib3R0b206IDEyOXB4O31cclxuLm0tYi0xMzAge21hcmdpbi1ib3R0b206IDEzMHB4O31cclxuLm0tYi0xMzEge21hcmdpbi1ib3R0b206IDEzMXB4O31cclxuLm0tYi0xMzIge21hcmdpbi1ib3R0b206IDEzMnB4O31cclxuLm0tYi0xMzMge21hcmdpbi1ib3R0b206IDEzM3B4O31cclxuLm0tYi0xMzQge21hcmdpbi1ib3R0b206IDEzNHB4O31cclxuLm0tYi0xMzUge21hcmdpbi1ib3R0b206IDEzNXB4O31cclxuLm0tYi0xMzYge21hcmdpbi1ib3R0b206IDEzNnB4O31cclxuLm0tYi0xMzcge21hcmdpbi1ib3R0b206IDEzN3B4O31cclxuLm0tYi0xMzgge21hcmdpbi1ib3R0b206IDEzOHB4O31cclxuLm0tYi0xMzkge21hcmdpbi1ib3R0b206IDEzOXB4O31cclxuLm0tYi0xNDAge21hcmdpbi1ib3R0b206IDE0MHB4O31cclxuLm0tYi0xNDEge21hcmdpbi1ib3R0b206IDE0MXB4O31cclxuLm0tYi0xNDIge21hcmdpbi1ib3R0b206IDE0MnB4O31cclxuLm0tYi0xNDMge21hcmdpbi1ib3R0b206IDE0M3B4O31cclxuLm0tYi0xNDQge21hcmdpbi1ib3R0b206IDE0NHB4O31cclxuLm0tYi0xNDUge21hcmdpbi1ib3R0b206IDE0NXB4O31cclxuLm0tYi0xNDYge21hcmdpbi1ib3R0b206IDE0NnB4O31cclxuLm0tYi0xNDcge21hcmdpbi1ib3R0b206IDE0N3B4O31cclxuLm0tYi0xNDgge21hcmdpbi1ib3R0b206IDE0OHB4O31cclxuLm0tYi0xNDkge21hcmdpbi1ib3R0b206IDE0OXB4O31cclxuLm0tYi0xNTAge21hcmdpbi1ib3R0b206IDE1MHB4O31cclxuLm0tYi0xNTEge21hcmdpbi1ib3R0b206IDE1MXB4O31cclxuLm0tYi0xNTIge21hcmdpbi1ib3R0b206IDE1MnB4O31cclxuLm0tYi0xNTMge21hcmdpbi1ib3R0b206IDE1M3B4O31cclxuLm0tYi0xNTQge21hcmdpbi1ib3R0b206IDE1NHB4O31cclxuLm0tYi0xNTUge21hcmdpbi1ib3R0b206IDE1NXB4O31cclxuLm0tYi0xNTYge21hcmdpbi1ib3R0b206IDE1NnB4O31cclxuLm0tYi0xNTcge21hcmdpbi1ib3R0b206IDE1N3B4O31cclxuLm0tYi0xNTgge21hcmdpbi1ib3R0b206IDE1OHB4O31cclxuLm0tYi0xNTkge21hcmdpbi1ib3R0b206IDE1OXB4O31cclxuLm0tYi0xNjAge21hcmdpbi1ib3R0b206IDE2MHB4O31cclxuLm0tYi0xNjEge21hcmdpbi1ib3R0b206IDE2MXB4O31cclxuLm0tYi0xNjIge21hcmdpbi1ib3R0b206IDE2MnB4O31cclxuLm0tYi0xNjMge21hcmdpbi1ib3R0b206IDE2M3B4O31cclxuLm0tYi0xNjQge21hcmdpbi1ib3R0b206IDE2NHB4O31cclxuLm0tYi0xNjUge21hcmdpbi1ib3R0b206IDE2NXB4O31cclxuLm0tYi0xNjYge21hcmdpbi1ib3R0b206IDE2NnB4O31cclxuLm0tYi0xNjcge21hcmdpbi1ib3R0b206IDE2N3B4O31cclxuLm0tYi0xNjgge21hcmdpbi1ib3R0b206IDE2OHB4O31cclxuLm0tYi0xNjkge21hcmdpbi1ib3R0b206IDE2OXB4O31cclxuLm0tYi0xNzAge21hcmdpbi1ib3R0b206IDE3MHB4O31cclxuLm0tYi0xNzEge21hcmdpbi1ib3R0b206IDE3MXB4O31cclxuLm0tYi0xNzIge21hcmdpbi1ib3R0b206IDE3MnB4O31cclxuLm0tYi0xNzMge21hcmdpbi1ib3R0b206IDE3M3B4O31cclxuLm0tYi0xNzQge21hcmdpbi1ib3R0b206IDE3NHB4O31cclxuLm0tYi0xNzUge21hcmdpbi1ib3R0b206IDE3NXB4O31cclxuLm0tYi0xNzYge21hcmdpbi1ib3R0b206IDE3NnB4O31cclxuLm0tYi0xNzcge21hcmdpbi1ib3R0b206IDE3N3B4O31cclxuLm0tYi0xNzgge21hcmdpbi1ib3R0b206IDE3OHB4O31cclxuLm0tYi0xNzkge21hcmdpbi1ib3R0b206IDE3OXB4O31cclxuLm0tYi0xODAge21hcmdpbi1ib3R0b206IDE4MHB4O31cclxuLm0tYi0xODEge21hcmdpbi1ib3R0b206IDE4MXB4O31cclxuLm0tYi0xODIge21hcmdpbi1ib3R0b206IDE4MnB4O31cclxuLm0tYi0xODMge21hcmdpbi1ib3R0b206IDE4M3B4O31cclxuLm0tYi0xODQge21hcmdpbi1ib3R0b206IDE4NHB4O31cclxuLm0tYi0xODUge21hcmdpbi1ib3R0b206IDE4NXB4O31cclxuLm0tYi0xODYge21hcmdpbi1ib3R0b206IDE4NnB4O31cclxuLm0tYi0xODcge21hcmdpbi1ib3R0b206IDE4N3B4O31cclxuLm0tYi0xODgge21hcmdpbi1ib3R0b206IDE4OHB4O31cclxuLm0tYi0xODkge21hcmdpbi1ib3R0b206IDE4OXB4O31cclxuLm0tYi0xOTAge21hcmdpbi1ib3R0b206IDE5MHB4O31cclxuLm0tYi0xOTEge21hcmdpbi1ib3R0b206IDE5MXB4O31cclxuLm0tYi0xOTIge21hcmdpbi1ib3R0b206IDE5MnB4O31cclxuLm0tYi0xOTMge21hcmdpbi1ib3R0b206IDE5M3B4O31cclxuLm0tYi0xOTQge21hcmdpbi1ib3R0b206IDE5NHB4O31cclxuLm0tYi0xOTUge21hcmdpbi1ib3R0b206IDE5NXB4O31cclxuLm0tYi0xOTYge21hcmdpbi1ib3R0b206IDE5NnB4O31cclxuLm0tYi0xOTcge21hcmdpbi1ib3R0b206IDE5N3B4O31cclxuLm0tYi0xOTgge21hcmdpbi1ib3R0b206IDE5OHB4O31cclxuLm0tYi0xOTkge21hcmdpbi1ib3R0b206IDE5OXB4O31cclxuLm0tYi0yMDAge21hcmdpbi1ib3R0b206IDIwMHB4O31cclxuLm0tYi0yMDEge21hcmdpbi1ib3R0b206IDIwMXB4O31cclxuLm0tYi0yMDIge21hcmdpbi1ib3R0b206IDIwMnB4O31cclxuLm0tYi0yMDMge21hcmdpbi1ib3R0b206IDIwM3B4O31cclxuLm0tYi0yMDQge21hcmdpbi1ib3R0b206IDIwNHB4O31cclxuLm0tYi0yMDUge21hcmdpbi1ib3R0b206IDIwNXB4O31cclxuLm0tYi0yMDYge21hcmdpbi1ib3R0b206IDIwNnB4O31cclxuLm0tYi0yMDcge21hcmdpbi1ib3R0b206IDIwN3B4O31cclxuLm0tYi0yMDgge21hcmdpbi1ib3R0b206IDIwOHB4O31cclxuLm0tYi0yMDkge21hcmdpbi1ib3R0b206IDIwOXB4O31cclxuLm0tYi0yMTAge21hcmdpbi1ib3R0b206IDIxMHB4O31cclxuLm0tYi0yMTEge21hcmdpbi1ib3R0b206IDIxMXB4O31cclxuLm0tYi0yMTIge21hcmdpbi1ib3R0b206IDIxMnB4O31cclxuLm0tYi0yMTMge21hcmdpbi1ib3R0b206IDIxM3B4O31cclxuLm0tYi0yMTQge21hcmdpbi1ib3R0b206IDIxNHB4O31cclxuLm0tYi0yMTUge21hcmdpbi1ib3R0b206IDIxNXB4O31cclxuLm0tYi0yMTYge21hcmdpbi1ib3R0b206IDIxNnB4O31cclxuLm0tYi0yMTcge21hcmdpbi1ib3R0b206IDIxN3B4O31cclxuLm0tYi0yMTgge21hcmdpbi1ib3R0b206IDIxOHB4O31cclxuLm0tYi0yMTkge21hcmdpbi1ib3R0b206IDIxOXB4O31cclxuLm0tYi0yMjAge21hcmdpbi1ib3R0b206IDIyMHB4O31cclxuLm0tYi0yMjEge21hcmdpbi1ib3R0b206IDIyMXB4O31cclxuLm0tYi0yMjIge21hcmdpbi1ib3R0b206IDIyMnB4O31cclxuLm0tYi0yMjMge21hcmdpbi1ib3R0b206IDIyM3B4O31cclxuLm0tYi0yMjQge21hcmdpbi1ib3R0b206IDIyNHB4O31cclxuLm0tYi0yMjUge21hcmdpbi1ib3R0b206IDIyNXB4O31cclxuLm0tYi0yMjYge21hcmdpbi1ib3R0b206IDIyNnB4O31cclxuLm0tYi0yMjcge21hcmdpbi1ib3R0b206IDIyN3B4O31cclxuLm0tYi0yMjgge21hcmdpbi1ib3R0b206IDIyOHB4O31cclxuLm0tYi0yMjkge21hcmdpbi1ib3R0b206IDIyOXB4O31cclxuLm0tYi0yMzAge21hcmdpbi1ib3R0b206IDIzMHB4O31cclxuLm0tYi0yMzEge21hcmdpbi1ib3R0b206IDIzMXB4O31cclxuLm0tYi0yMzIge21hcmdpbi1ib3R0b206IDIzMnB4O31cclxuLm0tYi0yMzMge21hcmdpbi1ib3R0b206IDIzM3B4O31cclxuLm0tYi0yMzQge21hcmdpbi1ib3R0b206IDIzNHB4O31cclxuLm0tYi0yMzUge21hcmdpbi1ib3R0b206IDIzNXB4O31cclxuLm0tYi0yMzYge21hcmdpbi1ib3R0b206IDIzNnB4O31cclxuLm0tYi0yMzcge21hcmdpbi1ib3R0b206IDIzN3B4O31cclxuLm0tYi0yMzgge21hcmdpbi1ib3R0b206IDIzOHB4O31cclxuLm0tYi0yMzkge21hcmdpbi1ib3R0b206IDIzOXB4O31cclxuLm0tYi0yNDAge21hcmdpbi1ib3R0b206IDI0MHB4O31cclxuLm0tYi0yNDEge21hcmdpbi1ib3R0b206IDI0MXB4O31cclxuLm0tYi0yNDIge21hcmdpbi1ib3R0b206IDI0MnB4O31cclxuLm0tYi0yNDMge21hcmdpbi1ib3R0b206IDI0M3B4O31cclxuLm0tYi0yNDQge21hcmdpbi1ib3R0b206IDI0NHB4O31cclxuLm0tYi0yNDUge21hcmdpbi1ib3R0b206IDI0NXB4O31cclxuLm0tYi0yNDYge21hcmdpbi1ib3R0b206IDI0NnB4O31cclxuLm0tYi0yNDcge21hcmdpbi1ib3R0b206IDI0N3B4O31cclxuLm0tYi0yNDgge21hcmdpbi1ib3R0b206IDI0OHB4O31cclxuLm0tYi0yNDkge21hcmdpbi1ib3R0b206IDI0OXB4O31cclxuLm0tYi0yNTAge21hcmdpbi1ib3R0b206IDI1MHB4O31cclxuLm0tbC0wIHttYXJnaW4tbGVmdDogMHB4O31cclxuLm0tbC0xIHttYXJnaW4tbGVmdDogMXB4O31cclxuLm0tbC0yIHttYXJnaW4tbGVmdDogMnB4O31cclxuLm0tbC0zIHttYXJnaW4tbGVmdDogM3B4O31cclxuLm0tbC00IHttYXJnaW4tbGVmdDogNHB4O31cclxuLm0tbC01IHttYXJnaW4tbGVmdDogNXB4O31cclxuLm0tbC02IHttYXJnaW4tbGVmdDogNnB4O31cclxuLm0tbC03IHttYXJnaW4tbGVmdDogN3B4O31cclxuLm0tbC04IHttYXJnaW4tbGVmdDogOHB4O31cclxuLm0tbC05IHttYXJnaW4tbGVmdDogOXB4O31cclxuLm0tbC0xMCB7bWFyZ2luLWxlZnQ6IDEwcHg7fVxyXG4ubS1sLTExIHttYXJnaW4tbGVmdDogMTFweDt9XHJcbi5tLWwtMTIge21hcmdpbi1sZWZ0OiAxMnB4O31cclxuLm0tbC0xMyB7bWFyZ2luLWxlZnQ6IDEzcHg7fVxyXG4ubS1sLTE0IHttYXJnaW4tbGVmdDogMTRweDt9XHJcbi5tLWwtMTUge21hcmdpbi1sZWZ0OiAxNXB4O31cclxuLm0tbC0xNiB7bWFyZ2luLWxlZnQ6IDE2cHg7fVxyXG4ubS1sLTE3IHttYXJnaW4tbGVmdDogMTdweDt9XHJcbi5tLWwtMTgge21hcmdpbi1sZWZ0OiAxOHB4O31cclxuLm0tbC0xOSB7bWFyZ2luLWxlZnQ6IDE5cHg7fVxyXG4ubS1sLTIwIHttYXJnaW4tbGVmdDogMjBweDt9XHJcbi5tLWwtMjEge21hcmdpbi1sZWZ0OiAyMXB4O31cclxuLm0tbC0yMiB7bWFyZ2luLWxlZnQ6IDIycHg7fVxyXG4ubS1sLTIzIHttYXJnaW4tbGVmdDogMjNweDt9XHJcbi5tLWwtMjQge21hcmdpbi1sZWZ0OiAyNHB4O31cclxuLm0tbC0yNSB7bWFyZ2luLWxlZnQ6IDI1cHg7fVxyXG4ubS1sLTI2IHttYXJnaW4tbGVmdDogMjZweDt9XHJcbi5tLWwtMjcge21hcmdpbi1sZWZ0OiAyN3B4O31cclxuLm0tbC0yOCB7bWFyZ2luLWxlZnQ6IDI4cHg7fVxyXG4ubS1sLTI5IHttYXJnaW4tbGVmdDogMjlweDt9XHJcbi5tLWwtMzAge21hcmdpbi1sZWZ0OiAzMHB4O31cclxuLm0tbC0zMSB7bWFyZ2luLWxlZnQ6IDMxcHg7fVxyXG4ubS1sLTMyIHttYXJnaW4tbGVmdDogMzJweDt9XHJcbi5tLWwtMzMge21hcmdpbi1sZWZ0OiAzM3B4O31cclxuLm0tbC0zNCB7bWFyZ2luLWxlZnQ6IDM0cHg7fVxyXG4ubS1sLTM1IHttYXJnaW4tbGVmdDogMzVweDt9XHJcbi5tLWwtMzYge21hcmdpbi1sZWZ0OiAzNnB4O31cclxuLm0tbC0zNyB7bWFyZ2luLWxlZnQ6IDM3cHg7fVxyXG4ubS1sLTM4IHttYXJnaW4tbGVmdDogMzhweDt9XHJcbi5tLWwtMzkge21hcmdpbi1sZWZ0OiAzOXB4O31cclxuLm0tbC00MCB7bWFyZ2luLWxlZnQ6IDQwcHg7fVxyXG4ubS1sLTQxIHttYXJnaW4tbGVmdDogNDFweDt9XHJcbi5tLWwtNDIge21hcmdpbi1sZWZ0OiA0MnB4O31cclxuLm0tbC00MyB7bWFyZ2luLWxlZnQ6IDQzcHg7fVxyXG4ubS1sLTQ0IHttYXJnaW4tbGVmdDogNDRweDt9XHJcbi5tLWwtNDUge21hcmdpbi1sZWZ0OiA0NXB4O31cclxuLm0tbC00NiB7bWFyZ2luLWxlZnQ6IDQ2cHg7fVxyXG4ubS1sLTQ3IHttYXJnaW4tbGVmdDogNDdweDt9XHJcbi5tLWwtNDgge21hcmdpbi1sZWZ0OiA0OHB4O31cclxuLm0tbC00OSB7bWFyZ2luLWxlZnQ6IDQ5cHg7fVxyXG4ubS1sLTUwIHttYXJnaW4tbGVmdDogNTBweDt9XHJcbi5tLWwtNTEge21hcmdpbi1sZWZ0OiA1MXB4O31cclxuLm0tbC01MiB7bWFyZ2luLWxlZnQ6IDUycHg7fVxyXG4ubS1sLTUzIHttYXJnaW4tbGVmdDogNTNweDt9XHJcbi5tLWwtNTQge21hcmdpbi1sZWZ0OiA1NHB4O31cclxuLm0tbC01NSB7bWFyZ2luLWxlZnQ6IDU1cHg7fVxyXG4ubS1sLTU2IHttYXJnaW4tbGVmdDogNTZweDt9XHJcbi5tLWwtNTcge21hcmdpbi1sZWZ0OiA1N3B4O31cclxuLm0tbC01OCB7bWFyZ2luLWxlZnQ6IDU4cHg7fVxyXG4ubS1sLTU5IHttYXJnaW4tbGVmdDogNTlweDt9XHJcbi5tLWwtNjAge21hcmdpbi1sZWZ0OiA2MHB4O31cclxuLm0tbC02MSB7bWFyZ2luLWxlZnQ6IDYxcHg7fVxyXG4ubS1sLTYyIHttYXJnaW4tbGVmdDogNjJweDt9XHJcbi5tLWwtNjMge21hcmdpbi1sZWZ0OiA2M3B4O31cclxuLm0tbC02NCB7bWFyZ2luLWxlZnQ6IDY0cHg7fVxyXG4ubS1sLTY1IHttYXJnaW4tbGVmdDogNjVweDt9XHJcbi5tLWwtNjYge21hcmdpbi1sZWZ0OiA2NnB4O31cclxuLm0tbC02NyB7bWFyZ2luLWxlZnQ6IDY3cHg7fVxyXG4ubS1sLTY4IHttYXJnaW4tbGVmdDogNjhweDt9XHJcbi5tLWwtNjkge21hcmdpbi1sZWZ0OiA2OXB4O31cclxuLm0tbC03MCB7bWFyZ2luLWxlZnQ6IDcwcHg7fVxyXG4ubS1sLTcxIHttYXJnaW4tbGVmdDogNzFweDt9XHJcbi5tLWwtNzIge21hcmdpbi1sZWZ0OiA3MnB4O31cclxuLm0tbC03MyB7bWFyZ2luLWxlZnQ6IDczcHg7fVxyXG4ubS1sLTc0IHttYXJnaW4tbGVmdDogNzRweDt9XHJcbi5tLWwtNzUge21hcmdpbi1sZWZ0OiA3NXB4O31cclxuLm0tbC03NiB7bWFyZ2luLWxlZnQ6IDc2cHg7fVxyXG4ubS1sLTc3IHttYXJnaW4tbGVmdDogNzdweDt9XHJcbi5tLWwtNzgge21hcmdpbi1sZWZ0OiA3OHB4O31cclxuLm0tbC03OSB7bWFyZ2luLWxlZnQ6IDc5cHg7fVxyXG4ubS1sLTgwIHttYXJnaW4tbGVmdDogODBweDt9XHJcbi5tLWwtODEge21hcmdpbi1sZWZ0OiA4MXB4O31cclxuLm0tbC04MiB7bWFyZ2luLWxlZnQ6IDgycHg7fVxyXG4ubS1sLTgzIHttYXJnaW4tbGVmdDogODNweDt9XHJcbi5tLWwtODQge21hcmdpbi1sZWZ0OiA4NHB4O31cclxuLm0tbC04NSB7bWFyZ2luLWxlZnQ6IDg1cHg7fVxyXG4ubS1sLTg2IHttYXJnaW4tbGVmdDogODZweDt9XHJcbi5tLWwtODcge21hcmdpbi1sZWZ0OiA4N3B4O31cclxuLm0tbC04OCB7bWFyZ2luLWxlZnQ6IDg4cHg7fVxyXG4ubS1sLTg5IHttYXJnaW4tbGVmdDogODlweDt9XHJcbi5tLWwtOTAge21hcmdpbi1sZWZ0OiA5MHB4O31cclxuLm0tbC05MSB7bWFyZ2luLWxlZnQ6IDkxcHg7fVxyXG4ubS1sLTkyIHttYXJnaW4tbGVmdDogOTJweDt9XHJcbi5tLWwtOTMge21hcmdpbi1sZWZ0OiA5M3B4O31cclxuLm0tbC05NCB7bWFyZ2luLWxlZnQ6IDk0cHg7fVxyXG4ubS1sLTk1IHttYXJnaW4tbGVmdDogOTVweDt9XHJcbi5tLWwtOTYge21hcmdpbi1sZWZ0OiA5NnB4O31cclxuLm0tbC05NyB7bWFyZ2luLWxlZnQ6IDk3cHg7fVxyXG4ubS1sLTk4IHttYXJnaW4tbGVmdDogOThweDt9XHJcbi5tLWwtOTkge21hcmdpbi1sZWZ0OiA5OXB4O31cclxuLm0tbC0xMDAge21hcmdpbi1sZWZ0OiAxMDBweDt9XHJcbi5tLWwtMTAxIHttYXJnaW4tbGVmdDogMTAxcHg7fVxyXG4ubS1sLTEwMiB7bWFyZ2luLWxlZnQ6IDEwMnB4O31cclxuLm0tbC0xMDMge21hcmdpbi1sZWZ0OiAxMDNweDt9XHJcbi5tLWwtMTA0IHttYXJnaW4tbGVmdDogMTA0cHg7fVxyXG4ubS1sLTEwNSB7bWFyZ2luLWxlZnQ6IDEwNXB4O31cclxuLm0tbC0xMDYge21hcmdpbi1sZWZ0OiAxMDZweDt9XHJcbi5tLWwtMTA3IHttYXJnaW4tbGVmdDogMTA3cHg7fVxyXG4ubS1sLTEwOCB7bWFyZ2luLWxlZnQ6IDEwOHB4O31cclxuLm0tbC0xMDkge21hcmdpbi1sZWZ0OiAxMDlweDt9XHJcbi5tLWwtMTEwIHttYXJnaW4tbGVmdDogMTEwcHg7fVxyXG4ubS1sLTExMSB7bWFyZ2luLWxlZnQ6IDExMXB4O31cclxuLm0tbC0xMTIge21hcmdpbi1sZWZ0OiAxMTJweDt9XHJcbi5tLWwtMTEzIHttYXJnaW4tbGVmdDogMTEzcHg7fVxyXG4ubS1sLTExNCB7bWFyZ2luLWxlZnQ6IDExNHB4O31cclxuLm0tbC0xMTUge21hcmdpbi1sZWZ0OiAxMTVweDt9XHJcbi5tLWwtMTE2IHttYXJnaW4tbGVmdDogMTE2cHg7fVxyXG4ubS1sLTExNyB7bWFyZ2luLWxlZnQ6IDExN3B4O31cclxuLm0tbC0xMTgge21hcmdpbi1sZWZ0OiAxMThweDt9XHJcbi5tLWwtMTE5IHttYXJnaW4tbGVmdDogMTE5cHg7fVxyXG4ubS1sLTEyMCB7bWFyZ2luLWxlZnQ6IDEyMHB4O31cclxuLm0tbC0xMjEge21hcmdpbi1sZWZ0OiAxMjFweDt9XHJcbi5tLWwtMTIyIHttYXJnaW4tbGVmdDogMTIycHg7fVxyXG4ubS1sLTEyMyB7bWFyZ2luLWxlZnQ6IDEyM3B4O31cclxuLm0tbC0xMjQge21hcmdpbi1sZWZ0OiAxMjRweDt9XHJcbi5tLWwtMTI1IHttYXJnaW4tbGVmdDogMTI1cHg7fVxyXG4ubS1sLTEyNiB7bWFyZ2luLWxlZnQ6IDEyNnB4O31cclxuLm0tbC0xMjcge21hcmdpbi1sZWZ0OiAxMjdweDt9XHJcbi5tLWwtMTI4IHttYXJnaW4tbGVmdDogMTI4cHg7fVxyXG4ubS1sLTEyOSB7bWFyZ2luLWxlZnQ6IDEyOXB4O31cclxuLm0tbC0xMzAge21hcmdpbi1sZWZ0OiAxMzBweDt9XHJcbi5tLWwtMTMxIHttYXJnaW4tbGVmdDogMTMxcHg7fVxyXG4ubS1sLTEzMiB7bWFyZ2luLWxlZnQ6IDEzMnB4O31cclxuLm0tbC0xMzMge21hcmdpbi1sZWZ0OiAxMzNweDt9XHJcbi5tLWwtMTM0IHttYXJnaW4tbGVmdDogMTM0cHg7fVxyXG4ubS1sLTEzNSB7bWFyZ2luLWxlZnQ6IDEzNXB4O31cclxuLm0tbC0xMzYge21hcmdpbi1sZWZ0OiAxMzZweDt9XHJcbi5tLWwtMTM3IHttYXJnaW4tbGVmdDogMTM3cHg7fVxyXG4ubS1sLTEzOCB7bWFyZ2luLWxlZnQ6IDEzOHB4O31cclxuLm0tbC0xMzkge21hcmdpbi1sZWZ0OiAxMzlweDt9XHJcbi5tLWwtMTQwIHttYXJnaW4tbGVmdDogMTQwcHg7fVxyXG4ubS1sLTE0MSB7bWFyZ2luLWxlZnQ6IDE0MXB4O31cclxuLm0tbC0xNDIge21hcmdpbi1sZWZ0OiAxNDJweDt9XHJcbi5tLWwtMTQzIHttYXJnaW4tbGVmdDogMTQzcHg7fVxyXG4ubS1sLTE0NCB7bWFyZ2luLWxlZnQ6IDE0NHB4O31cclxuLm0tbC0xNDUge21hcmdpbi1sZWZ0OiAxNDVweDt9XHJcbi5tLWwtMTQ2IHttYXJnaW4tbGVmdDogMTQ2cHg7fVxyXG4ubS1sLTE0NyB7bWFyZ2luLWxlZnQ6IDE0N3B4O31cclxuLm0tbC0xNDgge21hcmdpbi1sZWZ0OiAxNDhweDt9XHJcbi5tLWwtMTQ5IHttYXJnaW4tbGVmdDogMTQ5cHg7fVxyXG4ubS1sLTE1MCB7bWFyZ2luLWxlZnQ6IDE1MHB4O31cclxuLm0tbC0xNTEge21hcmdpbi1sZWZ0OiAxNTFweDt9XHJcbi5tLWwtMTUyIHttYXJnaW4tbGVmdDogMTUycHg7fVxyXG4ubS1sLTE1MyB7bWFyZ2luLWxlZnQ6IDE1M3B4O31cclxuLm0tbC0xNTQge21hcmdpbi1sZWZ0OiAxNTRweDt9XHJcbi5tLWwtMTU1IHttYXJnaW4tbGVmdDogMTU1cHg7fVxyXG4ubS1sLTE1NiB7bWFyZ2luLWxlZnQ6IDE1NnB4O31cclxuLm0tbC0xNTcge21hcmdpbi1sZWZ0OiAxNTdweDt9XHJcbi5tLWwtMTU4IHttYXJnaW4tbGVmdDogMTU4cHg7fVxyXG4ubS1sLTE1OSB7bWFyZ2luLWxlZnQ6IDE1OXB4O31cclxuLm0tbC0xNjAge21hcmdpbi1sZWZ0OiAxNjBweDt9XHJcbi5tLWwtMTYxIHttYXJnaW4tbGVmdDogMTYxcHg7fVxyXG4ubS1sLTE2MiB7bWFyZ2luLWxlZnQ6IDE2MnB4O31cclxuLm0tbC0xNjMge21hcmdpbi1sZWZ0OiAxNjNweDt9XHJcbi5tLWwtMTY0IHttYXJnaW4tbGVmdDogMTY0cHg7fVxyXG4ubS1sLTE2NSB7bWFyZ2luLWxlZnQ6IDE2NXB4O31cclxuLm0tbC0xNjYge21hcmdpbi1sZWZ0OiAxNjZweDt9XHJcbi5tLWwtMTY3IHttYXJnaW4tbGVmdDogMTY3cHg7fVxyXG4ubS1sLTE2OCB7bWFyZ2luLWxlZnQ6IDE2OHB4O31cclxuLm0tbC0xNjkge21hcmdpbi1sZWZ0OiAxNjlweDt9XHJcbi5tLWwtMTcwIHttYXJnaW4tbGVmdDogMTcwcHg7fVxyXG4ubS1sLTE3MSB7bWFyZ2luLWxlZnQ6IDE3MXB4O31cclxuLm0tbC0xNzIge21hcmdpbi1sZWZ0OiAxNzJweDt9XHJcbi5tLWwtMTczIHttYXJnaW4tbGVmdDogMTczcHg7fVxyXG4ubS1sLTE3NCB7bWFyZ2luLWxlZnQ6IDE3NHB4O31cclxuLm0tbC0xNzUge21hcmdpbi1sZWZ0OiAxNzVweDt9XHJcbi5tLWwtMTc2IHttYXJnaW4tbGVmdDogMTc2cHg7fVxyXG4ubS1sLTE3NyB7bWFyZ2luLWxlZnQ6IDE3N3B4O31cclxuLm0tbC0xNzgge21hcmdpbi1sZWZ0OiAxNzhweDt9XHJcbi5tLWwtMTc5IHttYXJnaW4tbGVmdDogMTc5cHg7fVxyXG4ubS1sLTE4MCB7bWFyZ2luLWxlZnQ6IDE4MHB4O31cclxuLm0tbC0xODEge21hcmdpbi1sZWZ0OiAxODFweDt9XHJcbi5tLWwtMTgyIHttYXJnaW4tbGVmdDogMTgycHg7fVxyXG4ubS1sLTE4MyB7bWFyZ2luLWxlZnQ6IDE4M3B4O31cclxuLm0tbC0xODQge21hcmdpbi1sZWZ0OiAxODRweDt9XHJcbi5tLWwtMTg1IHttYXJnaW4tbGVmdDogMTg1cHg7fVxyXG4ubS1sLTE4NiB7bWFyZ2luLWxlZnQ6IDE4NnB4O31cclxuLm0tbC0xODcge21hcmdpbi1sZWZ0OiAxODdweDt9XHJcbi5tLWwtMTg4IHttYXJnaW4tbGVmdDogMTg4cHg7fVxyXG4ubS1sLTE4OSB7bWFyZ2luLWxlZnQ6IDE4OXB4O31cclxuLm0tbC0xOTAge21hcmdpbi1sZWZ0OiAxOTBweDt9XHJcbi5tLWwtMTkxIHttYXJnaW4tbGVmdDogMTkxcHg7fVxyXG4ubS1sLTE5MiB7bWFyZ2luLWxlZnQ6IDE5MnB4O31cclxuLm0tbC0xOTMge21hcmdpbi1sZWZ0OiAxOTNweDt9XHJcbi5tLWwtMTk0IHttYXJnaW4tbGVmdDogMTk0cHg7fVxyXG4ubS1sLTE5NSB7bWFyZ2luLWxlZnQ6IDE5NXB4O31cclxuLm0tbC0xOTYge21hcmdpbi1sZWZ0OiAxOTZweDt9XHJcbi5tLWwtMTk3IHttYXJnaW4tbGVmdDogMTk3cHg7fVxyXG4ubS1sLTE5OCB7bWFyZ2luLWxlZnQ6IDE5OHB4O31cclxuLm0tbC0xOTkge21hcmdpbi1sZWZ0OiAxOTlweDt9XHJcbi5tLWwtMjAwIHttYXJnaW4tbGVmdDogMjAwcHg7fVxyXG4ubS1sLTIwMSB7bWFyZ2luLWxlZnQ6IDIwMXB4O31cclxuLm0tbC0yMDIge21hcmdpbi1sZWZ0OiAyMDJweDt9XHJcbi5tLWwtMjAzIHttYXJnaW4tbGVmdDogMjAzcHg7fVxyXG4ubS1sLTIwNCB7bWFyZ2luLWxlZnQ6IDIwNHB4O31cclxuLm0tbC0yMDUge21hcmdpbi1sZWZ0OiAyMDVweDt9XHJcbi5tLWwtMjA2IHttYXJnaW4tbGVmdDogMjA2cHg7fVxyXG4ubS1sLTIwNyB7bWFyZ2luLWxlZnQ6IDIwN3B4O31cclxuLm0tbC0yMDgge21hcmdpbi1sZWZ0OiAyMDhweDt9XHJcbi5tLWwtMjA5IHttYXJnaW4tbGVmdDogMjA5cHg7fVxyXG4ubS1sLTIxMCB7bWFyZ2luLWxlZnQ6IDIxMHB4O31cclxuLm0tbC0yMTEge21hcmdpbi1sZWZ0OiAyMTFweDt9XHJcbi5tLWwtMjEyIHttYXJnaW4tbGVmdDogMjEycHg7fVxyXG4ubS1sLTIxMyB7bWFyZ2luLWxlZnQ6IDIxM3B4O31cclxuLm0tbC0yMTQge21hcmdpbi1sZWZ0OiAyMTRweDt9XHJcbi5tLWwtMjE1IHttYXJnaW4tbGVmdDogMjE1cHg7fVxyXG4ubS1sLTIxNiB7bWFyZ2luLWxlZnQ6IDIxNnB4O31cclxuLm0tbC0yMTcge21hcmdpbi1sZWZ0OiAyMTdweDt9XHJcbi5tLWwtMjE4IHttYXJnaW4tbGVmdDogMjE4cHg7fVxyXG4ubS1sLTIxOSB7bWFyZ2luLWxlZnQ6IDIxOXB4O31cclxuLm0tbC0yMjAge21hcmdpbi1sZWZ0OiAyMjBweDt9XHJcbi5tLWwtMjIxIHttYXJnaW4tbGVmdDogMjIxcHg7fVxyXG4ubS1sLTIyMiB7bWFyZ2luLWxlZnQ6IDIyMnB4O31cclxuLm0tbC0yMjMge21hcmdpbi1sZWZ0OiAyMjNweDt9XHJcbi5tLWwtMjI0IHttYXJnaW4tbGVmdDogMjI0cHg7fVxyXG4ubS1sLTIyNSB7bWFyZ2luLWxlZnQ6IDIyNXB4O31cclxuLm0tbC0yMjYge21hcmdpbi1sZWZ0OiAyMjZweDt9XHJcbi5tLWwtMjI3IHttYXJnaW4tbGVmdDogMjI3cHg7fVxyXG4ubS1sLTIyOCB7bWFyZ2luLWxlZnQ6IDIyOHB4O31cclxuLm0tbC0yMjkge21hcmdpbi1sZWZ0OiAyMjlweDt9XHJcbi5tLWwtMjMwIHttYXJnaW4tbGVmdDogMjMwcHg7fVxyXG4ubS1sLTIzMSB7bWFyZ2luLWxlZnQ6IDIzMXB4O31cclxuLm0tbC0yMzIge21hcmdpbi1sZWZ0OiAyMzJweDt9XHJcbi5tLWwtMjMzIHttYXJnaW4tbGVmdDogMjMzcHg7fVxyXG4ubS1sLTIzNCB7bWFyZ2luLWxlZnQ6IDIzNHB4O31cclxuLm0tbC0yMzUge21hcmdpbi1sZWZ0OiAyMzVweDt9XHJcbi5tLWwtMjM2IHttYXJnaW4tbGVmdDogMjM2cHg7fVxyXG4ubS1sLTIzNyB7bWFyZ2luLWxlZnQ6IDIzN3B4O31cclxuLm0tbC0yMzgge21hcmdpbi1sZWZ0OiAyMzhweDt9XHJcbi5tLWwtMjM5IHttYXJnaW4tbGVmdDogMjM5cHg7fVxyXG4ubS1sLTI0MCB7bWFyZ2luLWxlZnQ6IDI0MHB4O31cclxuLm0tbC0yNDEge21hcmdpbi1sZWZ0OiAyNDFweDt9XHJcbi5tLWwtMjQyIHttYXJnaW4tbGVmdDogMjQycHg7fVxyXG4ubS1sLTI0MyB7bWFyZ2luLWxlZnQ6IDI0M3B4O31cclxuLm0tbC0yNDQge21hcmdpbi1sZWZ0OiAyNDRweDt9XHJcbi5tLWwtMjQ1IHttYXJnaW4tbGVmdDogMjQ1cHg7fVxyXG4ubS1sLTI0NiB7bWFyZ2luLWxlZnQ6IDI0NnB4O31cclxuLm0tbC0yNDcge21hcmdpbi1sZWZ0OiAyNDdweDt9XHJcbi5tLWwtMjQ4IHttYXJnaW4tbGVmdDogMjQ4cHg7fVxyXG4ubS1sLTI0OSB7bWFyZ2luLWxlZnQ6IDI0OXB4O31cclxuLm0tbC0yNTAge21hcmdpbi1sZWZ0OiAyNTBweDt9XHJcbi5tLXItMCB7bWFyZ2luLXJpZ2h0OiAwcHg7fVxyXG4ubS1yLTEge21hcmdpbi1yaWdodDogMXB4O31cclxuLm0tci0yIHttYXJnaW4tcmlnaHQ6IDJweDt9XHJcbi5tLXItMyB7bWFyZ2luLXJpZ2h0OiAzcHg7fVxyXG4ubS1yLTQge21hcmdpbi1yaWdodDogNHB4O31cclxuLm0tci01IHttYXJnaW4tcmlnaHQ6IDVweDt9XHJcbi5tLXItNiB7bWFyZ2luLXJpZ2h0OiA2cHg7fVxyXG4ubS1yLTcge21hcmdpbi1yaWdodDogN3B4O31cclxuLm0tci04IHttYXJnaW4tcmlnaHQ6IDhweDt9XHJcbi5tLXItOSB7bWFyZ2luLXJpZ2h0OiA5cHg7fVxyXG4ubS1yLTEwIHttYXJnaW4tcmlnaHQ6IDEwcHg7fVxyXG4ubS1yLTExIHttYXJnaW4tcmlnaHQ6IDExcHg7fVxyXG4ubS1yLTEyIHttYXJnaW4tcmlnaHQ6IDEycHg7fVxyXG4ubS1yLTEzIHttYXJnaW4tcmlnaHQ6IDEzcHg7fVxyXG4ubS1yLTE0IHttYXJnaW4tcmlnaHQ6IDE0cHg7fVxyXG4ubS1yLTE1IHttYXJnaW4tcmlnaHQ6IDE1cHg7fVxyXG4ubS1yLTE2IHttYXJnaW4tcmlnaHQ6IDE2cHg7fVxyXG4ubS1yLTE3IHttYXJnaW4tcmlnaHQ6IDE3cHg7fVxyXG4ubS1yLTE4IHttYXJnaW4tcmlnaHQ6IDE4cHg7fVxyXG4ubS1yLTE5IHttYXJnaW4tcmlnaHQ6IDE5cHg7fVxyXG4ubS1yLTIwIHttYXJnaW4tcmlnaHQ6IDIwcHg7fVxyXG4ubS1yLTIxIHttYXJnaW4tcmlnaHQ6IDIxcHg7fVxyXG4ubS1yLTIyIHttYXJnaW4tcmlnaHQ6IDIycHg7fVxyXG4ubS1yLTIzIHttYXJnaW4tcmlnaHQ6IDIzcHg7fVxyXG4ubS1yLTI0IHttYXJnaW4tcmlnaHQ6IDI0cHg7fVxyXG4ubS1yLTI1IHttYXJnaW4tcmlnaHQ6IDI1cHg7fVxyXG4ubS1yLTI2IHttYXJnaW4tcmlnaHQ6IDI2cHg7fVxyXG4ubS1yLTI3IHttYXJnaW4tcmlnaHQ6IDI3cHg7fVxyXG4ubS1yLTI4IHttYXJnaW4tcmlnaHQ6IDI4cHg7fVxyXG4ubS1yLTI5IHttYXJnaW4tcmlnaHQ6IDI5cHg7fVxyXG4ubS1yLTMwIHttYXJnaW4tcmlnaHQ6IDMwcHg7fVxyXG4ubS1yLTMxIHttYXJnaW4tcmlnaHQ6IDMxcHg7fVxyXG4ubS1yLTMyIHttYXJnaW4tcmlnaHQ6IDMycHg7fVxyXG4ubS1yLTMzIHttYXJnaW4tcmlnaHQ6IDMzcHg7fVxyXG4ubS1yLTM0IHttYXJnaW4tcmlnaHQ6IDM0cHg7fVxyXG4ubS1yLTM1IHttYXJnaW4tcmlnaHQ6IDM1cHg7fVxyXG4ubS1yLTM2IHttYXJnaW4tcmlnaHQ6IDM2cHg7fVxyXG4ubS1yLTM3IHttYXJnaW4tcmlnaHQ6IDM3cHg7fVxyXG4ubS1yLTM4IHttYXJnaW4tcmlnaHQ6IDM4cHg7fVxyXG4ubS1yLTM5IHttYXJnaW4tcmlnaHQ6IDM5cHg7fVxyXG4ubS1yLTQwIHttYXJnaW4tcmlnaHQ6IDQwcHg7fVxyXG4ubS1yLTQxIHttYXJnaW4tcmlnaHQ6IDQxcHg7fVxyXG4ubS1yLTQyIHttYXJnaW4tcmlnaHQ6IDQycHg7fVxyXG4ubS1yLTQzIHttYXJnaW4tcmlnaHQ6IDQzcHg7fVxyXG4ubS1yLTQ0IHttYXJnaW4tcmlnaHQ6IDQ0cHg7fVxyXG4ubS1yLTQ1IHttYXJnaW4tcmlnaHQ6IDQ1cHg7fVxyXG4ubS1yLTQ2IHttYXJnaW4tcmlnaHQ6IDQ2cHg7fVxyXG4ubS1yLTQ3IHttYXJnaW4tcmlnaHQ6IDQ3cHg7fVxyXG4ubS1yLTQ4IHttYXJnaW4tcmlnaHQ6IDQ4cHg7fVxyXG4ubS1yLTQ5IHttYXJnaW4tcmlnaHQ6IDQ5cHg7fVxyXG4ubS1yLTUwIHttYXJnaW4tcmlnaHQ6IDUwcHg7fVxyXG4ubS1yLTUxIHttYXJnaW4tcmlnaHQ6IDUxcHg7fVxyXG4ubS1yLTUyIHttYXJnaW4tcmlnaHQ6IDUycHg7fVxyXG4ubS1yLTUzIHttYXJnaW4tcmlnaHQ6IDUzcHg7fVxyXG4ubS1yLTU0IHttYXJnaW4tcmlnaHQ6IDU0cHg7fVxyXG4ubS1yLTU1IHttYXJnaW4tcmlnaHQ6IDU1cHg7fVxyXG4ubS1yLTU2IHttYXJnaW4tcmlnaHQ6IDU2cHg7fVxyXG4ubS1yLTU3IHttYXJnaW4tcmlnaHQ6IDU3cHg7fVxyXG4ubS1yLTU4IHttYXJnaW4tcmlnaHQ6IDU4cHg7fVxyXG4ubS1yLTU5IHttYXJnaW4tcmlnaHQ6IDU5cHg7fVxyXG4ubS1yLTYwIHttYXJnaW4tcmlnaHQ6IDYwcHg7fVxyXG4ubS1yLTYxIHttYXJnaW4tcmlnaHQ6IDYxcHg7fVxyXG4ubS1yLTYyIHttYXJnaW4tcmlnaHQ6IDYycHg7fVxyXG4ubS1yLTYzIHttYXJnaW4tcmlnaHQ6IDYzcHg7fVxyXG4ubS1yLTY0IHttYXJnaW4tcmlnaHQ6IDY0cHg7fVxyXG4ubS1yLTY1IHttYXJnaW4tcmlnaHQ6IDY1cHg7fVxyXG4ubS1yLTY2IHttYXJnaW4tcmlnaHQ6IDY2cHg7fVxyXG4ubS1yLTY3IHttYXJnaW4tcmlnaHQ6IDY3cHg7fVxyXG4ubS1yLTY4IHttYXJnaW4tcmlnaHQ6IDY4cHg7fVxyXG4ubS1yLTY5IHttYXJnaW4tcmlnaHQ6IDY5cHg7fVxyXG4ubS1yLTcwIHttYXJnaW4tcmlnaHQ6IDcwcHg7fVxyXG4ubS1yLTcxIHttYXJnaW4tcmlnaHQ6IDcxcHg7fVxyXG4ubS1yLTcyIHttYXJnaW4tcmlnaHQ6IDcycHg7fVxyXG4ubS1yLTczIHttYXJnaW4tcmlnaHQ6IDczcHg7fVxyXG4ubS1yLTc0IHttYXJnaW4tcmlnaHQ6IDc0cHg7fVxyXG4ubS1yLTc1IHttYXJnaW4tcmlnaHQ6IDc1cHg7fVxyXG4ubS1yLTc2IHttYXJnaW4tcmlnaHQ6IDc2cHg7fVxyXG4ubS1yLTc3IHttYXJnaW4tcmlnaHQ6IDc3cHg7fVxyXG4ubS1yLTc4IHttYXJnaW4tcmlnaHQ6IDc4cHg7fVxyXG4ubS1yLTc5IHttYXJnaW4tcmlnaHQ6IDc5cHg7fVxyXG4ubS1yLTgwIHttYXJnaW4tcmlnaHQ6IDgwcHg7fVxyXG4ubS1yLTgxIHttYXJnaW4tcmlnaHQ6IDgxcHg7fVxyXG4ubS1yLTgyIHttYXJnaW4tcmlnaHQ6IDgycHg7fVxyXG4ubS1yLTgzIHttYXJnaW4tcmlnaHQ6IDgzcHg7fVxyXG4ubS1yLTg0IHttYXJnaW4tcmlnaHQ6IDg0cHg7fVxyXG4ubS1yLTg1IHttYXJnaW4tcmlnaHQ6IDg1cHg7fVxyXG4ubS1yLTg2IHttYXJnaW4tcmlnaHQ6IDg2cHg7fVxyXG4ubS1yLTg3IHttYXJnaW4tcmlnaHQ6IDg3cHg7fVxyXG4ubS1yLTg4IHttYXJnaW4tcmlnaHQ6IDg4cHg7fVxyXG4ubS1yLTg5IHttYXJnaW4tcmlnaHQ6IDg5cHg7fVxyXG4ubS1yLTkwIHttYXJnaW4tcmlnaHQ6IDkwcHg7fVxyXG4ubS1yLTkxIHttYXJnaW4tcmlnaHQ6IDkxcHg7fVxyXG4ubS1yLTkyIHttYXJnaW4tcmlnaHQ6IDkycHg7fVxyXG4ubS1yLTkzIHttYXJnaW4tcmlnaHQ6IDkzcHg7fVxyXG4ubS1yLTk0IHttYXJnaW4tcmlnaHQ6IDk0cHg7fVxyXG4ubS1yLTk1IHttYXJnaW4tcmlnaHQ6IDk1cHg7fVxyXG4ubS1yLTk2IHttYXJnaW4tcmlnaHQ6IDk2cHg7fVxyXG4ubS1yLTk3IHttYXJnaW4tcmlnaHQ6IDk3cHg7fVxyXG4ubS1yLTk4IHttYXJnaW4tcmlnaHQ6IDk4cHg7fVxyXG4ubS1yLTk5IHttYXJnaW4tcmlnaHQ6IDk5cHg7fVxyXG4ubS1yLTEwMCB7bWFyZ2luLXJpZ2h0OiAxMDBweDt9XHJcbi5tLXItMTAxIHttYXJnaW4tcmlnaHQ6IDEwMXB4O31cclxuLm0tci0xMDIge21hcmdpbi1yaWdodDogMTAycHg7fVxyXG4ubS1yLTEwMyB7bWFyZ2luLXJpZ2h0OiAxMDNweDt9XHJcbi5tLXItMTA0IHttYXJnaW4tcmlnaHQ6IDEwNHB4O31cclxuLm0tci0xMDUge21hcmdpbi1yaWdodDogMTA1cHg7fVxyXG4ubS1yLTEwNiB7bWFyZ2luLXJpZ2h0OiAxMDZweDt9XHJcbi5tLXItMTA3IHttYXJnaW4tcmlnaHQ6IDEwN3B4O31cclxuLm0tci0xMDgge21hcmdpbi1yaWdodDogMTA4cHg7fVxyXG4ubS1yLTEwOSB7bWFyZ2luLXJpZ2h0OiAxMDlweDt9XHJcbi5tLXItMTEwIHttYXJnaW4tcmlnaHQ6IDExMHB4O31cclxuLm0tci0xMTEge21hcmdpbi1yaWdodDogMTExcHg7fVxyXG4ubS1yLTExMiB7bWFyZ2luLXJpZ2h0OiAxMTJweDt9XHJcbi5tLXItMTEzIHttYXJnaW4tcmlnaHQ6IDExM3B4O31cclxuLm0tci0xMTQge21hcmdpbi1yaWdodDogMTE0cHg7fVxyXG4ubS1yLTExNSB7bWFyZ2luLXJpZ2h0OiAxMTVweDt9XHJcbi5tLXItMTE2IHttYXJnaW4tcmlnaHQ6IDExNnB4O31cclxuLm0tci0xMTcge21hcmdpbi1yaWdodDogMTE3cHg7fVxyXG4ubS1yLTExOCB7bWFyZ2luLXJpZ2h0OiAxMThweDt9XHJcbi5tLXItMTE5IHttYXJnaW4tcmlnaHQ6IDExOXB4O31cclxuLm0tci0xMjAge21hcmdpbi1yaWdodDogMTIwcHg7fVxyXG4ubS1yLTEyMSB7bWFyZ2luLXJpZ2h0OiAxMjFweDt9XHJcbi5tLXItMTIyIHttYXJnaW4tcmlnaHQ6IDEyMnB4O31cclxuLm0tci0xMjMge21hcmdpbi1yaWdodDogMTIzcHg7fVxyXG4ubS1yLTEyNCB7bWFyZ2luLXJpZ2h0OiAxMjRweDt9XHJcbi5tLXItMTI1IHttYXJnaW4tcmlnaHQ6IDEyNXB4O31cclxuLm0tci0xMjYge21hcmdpbi1yaWdodDogMTI2cHg7fVxyXG4ubS1yLTEyNyB7bWFyZ2luLXJpZ2h0OiAxMjdweDt9XHJcbi5tLXItMTI4IHttYXJnaW4tcmlnaHQ6IDEyOHB4O31cclxuLm0tci0xMjkge21hcmdpbi1yaWdodDogMTI5cHg7fVxyXG4ubS1yLTEzMCB7bWFyZ2luLXJpZ2h0OiAxMzBweDt9XHJcbi5tLXItMTMxIHttYXJnaW4tcmlnaHQ6IDEzMXB4O31cclxuLm0tci0xMzIge21hcmdpbi1yaWdodDogMTMycHg7fVxyXG4ubS1yLTEzMyB7bWFyZ2luLXJpZ2h0OiAxMzNweDt9XHJcbi5tLXItMTM0IHttYXJnaW4tcmlnaHQ6IDEzNHB4O31cclxuLm0tci0xMzUge21hcmdpbi1yaWdodDogMTM1cHg7fVxyXG4ubS1yLTEzNiB7bWFyZ2luLXJpZ2h0OiAxMzZweDt9XHJcbi5tLXItMTM3IHttYXJnaW4tcmlnaHQ6IDEzN3B4O31cclxuLm0tci0xMzgge21hcmdpbi1yaWdodDogMTM4cHg7fVxyXG4ubS1yLTEzOSB7bWFyZ2luLXJpZ2h0OiAxMzlweDt9XHJcbi5tLXItMTQwIHttYXJnaW4tcmlnaHQ6IDE0MHB4O31cclxuLm0tci0xNDEge21hcmdpbi1yaWdodDogMTQxcHg7fVxyXG4ubS1yLTE0MiB7bWFyZ2luLXJpZ2h0OiAxNDJweDt9XHJcbi5tLXItMTQzIHttYXJnaW4tcmlnaHQ6IDE0M3B4O31cclxuLm0tci0xNDQge21hcmdpbi1yaWdodDogMTQ0cHg7fVxyXG4ubS1yLTE0NSB7bWFyZ2luLXJpZ2h0OiAxNDVweDt9XHJcbi5tLXItMTQ2IHttYXJnaW4tcmlnaHQ6IDE0NnB4O31cclxuLm0tci0xNDcge21hcmdpbi1yaWdodDogMTQ3cHg7fVxyXG4ubS1yLTE0OCB7bWFyZ2luLXJpZ2h0OiAxNDhweDt9XHJcbi5tLXItMTQ5IHttYXJnaW4tcmlnaHQ6IDE0OXB4O31cclxuLm0tci0xNTAge21hcmdpbi1yaWdodDogMTUwcHg7fVxyXG4ubS1yLTE1MSB7bWFyZ2luLXJpZ2h0OiAxNTFweDt9XHJcbi5tLXItMTUyIHttYXJnaW4tcmlnaHQ6IDE1MnB4O31cclxuLm0tci0xNTMge21hcmdpbi1yaWdodDogMTUzcHg7fVxyXG4ubS1yLTE1NCB7bWFyZ2luLXJpZ2h0OiAxNTRweDt9XHJcbi5tLXItMTU1IHttYXJnaW4tcmlnaHQ6IDE1NXB4O31cclxuLm0tci0xNTYge21hcmdpbi1yaWdodDogMTU2cHg7fVxyXG4ubS1yLTE1NyB7bWFyZ2luLXJpZ2h0OiAxNTdweDt9XHJcbi5tLXItMTU4IHttYXJnaW4tcmlnaHQ6IDE1OHB4O31cclxuLm0tci0xNTkge21hcmdpbi1yaWdodDogMTU5cHg7fVxyXG4ubS1yLTE2MCB7bWFyZ2luLXJpZ2h0OiAxNjBweDt9XHJcbi5tLXItMTYxIHttYXJnaW4tcmlnaHQ6IDE2MXB4O31cclxuLm0tci0xNjIge21hcmdpbi1yaWdodDogMTYycHg7fVxyXG4ubS1yLTE2MyB7bWFyZ2luLXJpZ2h0OiAxNjNweDt9XHJcbi5tLXItMTY0IHttYXJnaW4tcmlnaHQ6IDE2NHB4O31cclxuLm0tci0xNjUge21hcmdpbi1yaWdodDogMTY1cHg7fVxyXG4ubS1yLTE2NiB7bWFyZ2luLXJpZ2h0OiAxNjZweDt9XHJcbi5tLXItMTY3IHttYXJnaW4tcmlnaHQ6IDE2N3B4O31cclxuLm0tci0xNjgge21hcmdpbi1yaWdodDogMTY4cHg7fVxyXG4ubS1yLTE2OSB7bWFyZ2luLXJpZ2h0OiAxNjlweDt9XHJcbi5tLXItMTcwIHttYXJnaW4tcmlnaHQ6IDE3MHB4O31cclxuLm0tci0xNzEge21hcmdpbi1yaWdodDogMTcxcHg7fVxyXG4ubS1yLTE3MiB7bWFyZ2luLXJpZ2h0OiAxNzJweDt9XHJcbi5tLXItMTczIHttYXJnaW4tcmlnaHQ6IDE3M3B4O31cclxuLm0tci0xNzQge21hcmdpbi1yaWdodDogMTc0cHg7fVxyXG4ubS1yLTE3NSB7bWFyZ2luLXJpZ2h0OiAxNzVweDt9XHJcbi5tLXItMTc2IHttYXJnaW4tcmlnaHQ6IDE3NnB4O31cclxuLm0tci0xNzcge21hcmdpbi1yaWdodDogMTc3cHg7fVxyXG4ubS1yLTE3OCB7bWFyZ2luLXJpZ2h0OiAxNzhweDt9XHJcbi5tLXItMTc5IHttYXJnaW4tcmlnaHQ6IDE3OXB4O31cclxuLm0tci0xODAge21hcmdpbi1yaWdodDogMTgwcHg7fVxyXG4ubS1yLTE4MSB7bWFyZ2luLXJpZ2h0OiAxODFweDt9XHJcbi5tLXItMTgyIHttYXJnaW4tcmlnaHQ6IDE4MnB4O31cclxuLm0tci0xODMge21hcmdpbi1yaWdodDogMTgzcHg7fVxyXG4ubS1yLTE4NCB7bWFyZ2luLXJpZ2h0OiAxODRweDt9XHJcbi5tLXItMTg1IHttYXJnaW4tcmlnaHQ6IDE4NXB4O31cclxuLm0tci0xODYge21hcmdpbi1yaWdodDogMTg2cHg7fVxyXG4ubS1yLTE4NyB7bWFyZ2luLXJpZ2h0OiAxODdweDt9XHJcbi5tLXItMTg4IHttYXJnaW4tcmlnaHQ6IDE4OHB4O31cclxuLm0tci0xODkge21hcmdpbi1yaWdodDogMTg5cHg7fVxyXG4ubS1yLTE5MCB7bWFyZ2luLXJpZ2h0OiAxOTBweDt9XHJcbi5tLXItMTkxIHttYXJnaW4tcmlnaHQ6IDE5MXB4O31cclxuLm0tci0xOTIge21hcmdpbi1yaWdodDogMTkycHg7fVxyXG4ubS1yLTE5MyB7bWFyZ2luLXJpZ2h0OiAxOTNweDt9XHJcbi5tLXItMTk0IHttYXJnaW4tcmlnaHQ6IDE5NHB4O31cclxuLm0tci0xOTUge21hcmdpbi1yaWdodDogMTk1cHg7fVxyXG4ubS1yLTE5NiB7bWFyZ2luLXJpZ2h0OiAxOTZweDt9XHJcbi5tLXItMTk3IHttYXJnaW4tcmlnaHQ6IDE5N3B4O31cclxuLm0tci0xOTgge21hcmdpbi1yaWdodDogMTk4cHg7fVxyXG4ubS1yLTE5OSB7bWFyZ2luLXJpZ2h0OiAxOTlweDt9XHJcbi5tLXItMjAwIHttYXJnaW4tcmlnaHQ6IDIwMHB4O31cclxuLm0tci0yMDEge21hcmdpbi1yaWdodDogMjAxcHg7fVxyXG4ubS1yLTIwMiB7bWFyZ2luLXJpZ2h0OiAyMDJweDt9XHJcbi5tLXItMjAzIHttYXJnaW4tcmlnaHQ6IDIwM3B4O31cclxuLm0tci0yMDQge21hcmdpbi1yaWdodDogMjA0cHg7fVxyXG4ubS1yLTIwNSB7bWFyZ2luLXJpZ2h0OiAyMDVweDt9XHJcbi5tLXItMjA2IHttYXJnaW4tcmlnaHQ6IDIwNnB4O31cclxuLm0tci0yMDcge21hcmdpbi1yaWdodDogMjA3cHg7fVxyXG4ubS1yLTIwOCB7bWFyZ2luLXJpZ2h0OiAyMDhweDt9XHJcbi5tLXItMjA5IHttYXJnaW4tcmlnaHQ6IDIwOXB4O31cclxuLm0tci0yMTAge21hcmdpbi1yaWdodDogMjEwcHg7fVxyXG4ubS1yLTIxMSB7bWFyZ2luLXJpZ2h0OiAyMTFweDt9XHJcbi5tLXItMjEyIHttYXJnaW4tcmlnaHQ6IDIxMnB4O31cclxuLm0tci0yMTMge21hcmdpbi1yaWdodDogMjEzcHg7fVxyXG4ubS1yLTIxNCB7bWFyZ2luLXJpZ2h0OiAyMTRweDt9XHJcbi5tLXItMjE1IHttYXJnaW4tcmlnaHQ6IDIxNXB4O31cclxuLm0tci0yMTYge21hcmdpbi1yaWdodDogMjE2cHg7fVxyXG4ubS1yLTIxNyB7bWFyZ2luLXJpZ2h0OiAyMTdweDt9XHJcbi5tLXItMjE4IHttYXJnaW4tcmlnaHQ6IDIxOHB4O31cclxuLm0tci0yMTkge21hcmdpbi1yaWdodDogMjE5cHg7fVxyXG4ubS1yLTIyMCB7bWFyZ2luLXJpZ2h0OiAyMjBweDt9XHJcbi5tLXItMjIxIHttYXJnaW4tcmlnaHQ6IDIyMXB4O31cclxuLm0tci0yMjIge21hcmdpbi1yaWdodDogMjIycHg7fVxyXG4ubS1yLTIyMyB7bWFyZ2luLXJpZ2h0OiAyMjNweDt9XHJcbi5tLXItMjI0IHttYXJnaW4tcmlnaHQ6IDIyNHB4O31cclxuLm0tci0yMjUge21hcmdpbi1yaWdodDogMjI1cHg7fVxyXG4ubS1yLTIyNiB7bWFyZ2luLXJpZ2h0OiAyMjZweDt9XHJcbi5tLXItMjI3IHttYXJnaW4tcmlnaHQ6IDIyN3B4O31cclxuLm0tci0yMjgge21hcmdpbi1yaWdodDogMjI4cHg7fVxyXG4ubS1yLTIyOSB7bWFyZ2luLXJpZ2h0OiAyMjlweDt9XHJcbi5tLXItMjMwIHttYXJnaW4tcmlnaHQ6IDIzMHB4O31cclxuLm0tci0yMzEge21hcmdpbi1yaWdodDogMjMxcHg7fVxyXG4ubS1yLTIzMiB7bWFyZ2luLXJpZ2h0OiAyMzJweDt9XHJcbi5tLXItMjMzIHttYXJnaW4tcmlnaHQ6IDIzM3B4O31cclxuLm0tci0yMzQge21hcmdpbi1yaWdodDogMjM0cHg7fVxyXG4ubS1yLTIzNSB7bWFyZ2luLXJpZ2h0OiAyMzVweDt9XHJcbi5tLXItMjM2IHttYXJnaW4tcmlnaHQ6IDIzNnB4O31cclxuLm0tci0yMzcge21hcmdpbi1yaWdodDogMjM3cHg7fVxyXG4ubS1yLTIzOCB7bWFyZ2luLXJpZ2h0OiAyMzhweDt9XHJcbi5tLXItMjM5IHttYXJnaW4tcmlnaHQ6IDIzOXB4O31cclxuLm0tci0yNDAge21hcmdpbi1yaWdodDogMjQwcHg7fVxyXG4ubS1yLTI0MSB7bWFyZ2luLXJpZ2h0OiAyNDFweDt9XHJcbi5tLXItMjQyIHttYXJnaW4tcmlnaHQ6IDI0MnB4O31cclxuLm0tci0yNDMge21hcmdpbi1yaWdodDogMjQzcHg7fVxyXG4ubS1yLTI0NCB7bWFyZ2luLXJpZ2h0OiAyNDRweDt9XHJcbi5tLXItMjQ1IHttYXJnaW4tcmlnaHQ6IDI0NXB4O31cclxuLm0tci0yNDYge21hcmdpbi1yaWdodDogMjQ2cHg7fVxyXG4ubS1yLTI0NyB7bWFyZ2luLXJpZ2h0OiAyNDdweDt9XHJcbi5tLXItMjQ4IHttYXJnaW4tcmlnaHQ6IDI0OHB4O31cclxuLm0tci0yNDkge21hcmdpbi1yaWdodDogMjQ5cHg7fVxyXG4ubS1yLTI1MCB7bWFyZ2luLXJpZ2h0OiAyNTBweDt9XHJcbi5tLWwtci1hdXRvIHttYXJnaW4tbGVmdDogYXV0bztcdG1hcmdpbi1yaWdodDogYXV0bzt9XHJcbi5tLWwtYXV0byB7bWFyZ2luLWxlZnQ6IGF1dG87fVxyXG4ubS1yLWF1dG8ge21hcmdpbi1yaWdodDogYXV0bzt9XHJcblxyXG5cclxuXHJcbi8qWyBURVhUIF1cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuKi9cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi50ZXh0LXdoaXRlIHtjb2xvcjogd2hpdGU7fVxyXG4udGV4dC1ibGFjayB7Y29sb3I6IGJsYWNrO31cclxuXHJcbi50ZXh0LWhvdi13aGl0ZTpob3ZlciB7Y29sb3I6IHdoaXRlO31cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4udGV4dC11cCB7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTt9XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLnRleHQtY2VudGVyIHt0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4udGV4dC1sZWZ0IHt0ZXh0LWFsaWduOiBsZWZ0O31cclxuLnRleHQtcmlnaHQge3RleHQtYWxpZ246IHJpZ2h0O31cclxuLnRleHQtbWlkZGxlIHt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO31cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4ubGgtMS0wIHtsaW5lLWhlaWdodDogMS4wO31cclxuLmxoLTEtMSB7bGluZS1oZWlnaHQ6IDEuMTt9XHJcbi5saC0xLTIge2xpbmUtaGVpZ2h0OiAxLjI7fVxyXG4ubGgtMS0zIHtsaW5lLWhlaWdodDogMS4zO31cclxuLmxoLTEtNCB7bGluZS1oZWlnaHQ6IDEuNDt9XHJcbi5saC0xLTUge2xpbmUtaGVpZ2h0OiAxLjU7fVxyXG4ubGgtMS02IHtsaW5lLWhlaWdodDogMS42O31cclxuLmxoLTEtNyB7bGluZS1oZWlnaHQ6IDEuNzt9XHJcbi5saC0xLTgge2xpbmUtaGVpZ2h0OiAxLjg7fVxyXG4ubGgtMS05IHtsaW5lLWhlaWdodDogMS45O31cclxuLmxoLTItMCB7bGluZS1oZWlnaHQ6IDIuMDt9XHJcbi5saC0yLTEge2xpbmUtaGVpZ2h0OiAyLjE7fVxyXG4ubGgtMi0yIHtsaW5lLWhlaWdodDogMi4yO31cclxuLmxoLTItMyB7bGluZS1oZWlnaHQ6IDIuMzt9XHJcbi5saC0yLTQge2xpbmUtaGVpZ2h0OiAyLjQ7fVxyXG4ubGgtMi01IHtsaW5lLWhlaWdodDogMi41O31cclxuLmxoLTItNiB7bGluZS1oZWlnaHQ6IDIuNjt9XHJcbi5saC0yLTcge2xpbmUtaGVpZ2h0OiAyLjc7fVxyXG4ubGgtMi04IHtsaW5lLWhlaWdodDogMi44O31cclxuLmxoLTItOSB7bGluZS1oZWlnaHQ6IDIuOTt9XHJcblxyXG5cclxuXHJcblxyXG5cclxuLypbIFNIQVBFIF1cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuKi9cclxuXHJcbi8qWyBEaXNwbGF5IF1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuLmRpcy1ub25lIHtkaXNwbGF5OiBub25lO31cclxuLmRpcy1ibG9jayB7ZGlzcGxheTogYmxvY2s7fVxyXG4uZGlzLWlubGluZSB7ZGlzcGxheTogaW5saW5lO31cclxuLmRpcy1pbmxpbmUtYmxvY2sge2Rpc3BsYXk6IGlubGluZS1ibG9jazt9XHJcbi5kaXMtZmxleCB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi8qWyBQb3NpdGlvbiBdXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbi5wb3MtcmVsYXRpdmUge3Bvc2l0aW9uOiByZWxhdGl2ZTt9XHJcbi5wb3MtYWJzb2x1dGUge3Bvc2l0aW9uOiBhYnNvbHV0ZTt9XHJcbi5wb3MtZml4ZWQge3Bvc2l0aW9uOiBmaXhlZDt9XHJcblxyXG4vKlsgZmxvYXQgXVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qL1xyXG4uZmxvYXQtbCB7ZmxvYXQ6IGxlZnQ7fVxyXG4uZmxvYXQtciB7ZmxvYXQ6IHJpZ2h0O31cclxuXHJcblxyXG4vKlsgV2lkdGggJiBIZWlnaHQgXVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qL1xyXG4uc2l6ZWZ1bGwge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG4udy1mdWxsIHt3aWR0aDogMTAwJTt9XHJcbi5oLWZ1bGwge2hlaWdodDogMTAwJTt9XHJcbi5tYXgtdy1mdWxsIHttYXgtd2lkdGg6IDEwMCU7fVxyXG4ubWF4LWgtZnVsbCB7bWF4LWhlaWdodDogMTAwJTt9XHJcbi5taW4tdy1mdWxsIHttaW4td2lkdGg6IDEwMCU7fVxyXG4ubWluLWgtZnVsbCB7bWluLWhlaWdodDogMTAwJTt9XHJcblxyXG4vKlsgVG9wIEJvdHRvbSBMZWZ0IFJpZ2h0IF1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuLnRvcC0wIHt0b3A6IDA7fVxyXG4uYm90dG9tLTAge2JvdHRvbTogMDt9XHJcbi5sZWZ0LTAge2xlZnQ6IDA7fVxyXG4ucmlnaHQtMCB7cmlnaHQ6IDA7fVxyXG5cclxuLnRvcC1hdXRvIHt0b3A6IGF1dG87fVxyXG4uYm90dG9tLWF1dG8ge2JvdHRvbTogYXV0bzt9XHJcbi5sZWZ0LWF1dG8ge2xlZnQ6IGF1dG87fVxyXG4ucmlnaHQtYXV0byB7cmlnaHQ6IGF1dG87fVxyXG5cclxuXHJcbi8qWyBPcGFjaXR5IF1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuLm9wLTAtMCB7b3BhY2l0eTogMDt9XHJcbi5vcC0wLTEge29wYWNpdHk6IDAuMTt9XHJcbi5vcC0wLTIge29wYWNpdHk6IDAuMjt9XHJcbi5vcC0wLTMge29wYWNpdHk6IDAuMzt9XHJcbi5vcC0wLTQge29wYWNpdHk6IDAuNDt9XHJcbi5vcC0wLTUge29wYWNpdHk6IDAuNTt9XHJcbi5vcC0wLTYge29wYWNpdHk6IDAuNjt9XHJcbi5vcC0wLTcge29wYWNpdHk6IDAuNzt9XHJcbi5vcC0wLTgge29wYWNpdHk6IDAuODt9XHJcbi5vcC0wLTkge29wYWNpdHk6IDAuOTt9XHJcbi5vcC0xLTAge29wYWNpdHk6IDE7fVxyXG5cclxuLypbIEJhY2tncm91bmQgXVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qL1xyXG4uYmd3aGl0ZSB7YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7fVxyXG4uYmdibGFjayB7YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7fVxyXG5cclxuXHJcblxyXG4vKlsgV3JhcCBQaWN0dXJlIF1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuLndyYXAtcGljLXcgaW1nIHt3aWR0aDogMTAwJTt9XHJcbi53cmFwLXBpYy1tYXgtdyBpbWcge21heC13aWR0aDogMTAwJTt9XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLndyYXAtcGljLWggaW1nIHtoZWlnaHQ6IDEwMCU7fVxyXG4ud3JhcC1waWMtbWF4LWggaW1nIHttYXgtaGVpZ2h0OiAxMDAlO31cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4ud3JhcC1waWMtY2lyIHtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ud3JhcC1waWMtY2lyIGltZyB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuLypbIEhvdmVyIF1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuLmhvdi1wb2ludGVyOmhvdmVyIHtjdXJzb3I6IHBvaW50ZXI7fVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5ob3YtaW1nLXpvb20ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmhvdi1pbWctem9vbSBpbWd7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC42cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjZzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC42cztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjZzO1xyXG59XHJcbi5ob3YtaW1nLXpvb206aG92ZXIgaW1nIHtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICBcdC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIFx0LW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICBcdC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcblxyXG5cclxuLypbICBdXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbi5iby1jaXIge2JvcmRlci1yYWRpdXM6IDUwJTt9XHJcblxyXG4ub2YtaGlkZGVuIHtvdmVyZmxvdzogaGlkZGVuO31cclxuXHJcbi52aXNpYmxlLWZhbHNlIHt2aXNpYmlsaXR5OiBoaWRkZW47fVxyXG4udmlzaWJsZS10cnVlIHt2aXNpYmlsaXR5OiB2aXNpYmxlO31cclxuXHJcblxyXG5cclxuXHJcbi8qWyBUcmFuc2l0aW9uIF1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuLnRyYW5zLTAtMSB7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xcztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjFzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzO1xyXG59XHJcbi50cmFucy0wLTIge1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG4udHJhbnMtMC0zIHtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuLnRyYW5zLTAtNCB7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG59XHJcbi50cmFucy0wLTUge1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG4udHJhbnMtMC02IHtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjZzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNnM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjZzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XHJcbn1cclxuLnRyYW5zLTAtOSB7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC45cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjlzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC45cztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjlzO1xyXG59XHJcbi50cmFucy0xLTAge1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbn1cclxuXHJcblxyXG5cclxuLypbIExheW91dCBdXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiovXHJcblxyXG4vKlsgRmxleCBdXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uZmxleC13IHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcclxuXHQtbW96LWZsZXgtd3JhcDogd3JhcDtcclxuXHQtbXMtZmxleC13cmFwOiB3cmFwO1xyXG5cdC1vLWZsZXgtd3JhcDogd3JhcDtcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uZmxleC1sIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5mbGV4LXIge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5mbGV4LWMge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleC1zYSB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5mbGV4LXNiIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uZmxleC10IHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtbXMtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5mbGV4LWIge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC1tcy1hbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uZmxleC1tIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleC1zdHIge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC1tcy1hbGlnbi1pdGVtczogc3RyZXRjaDtcclxuXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5mbGV4LXJvdyB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdC1tb3otZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHQtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHQtby1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy1yZXYge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG5cdC1tb3otZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG5cdC1tcy1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcblx0LW8tZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxufVxyXG5cclxuLmZsZXgtY29sIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1vLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZsZXgtY29sLXJldiB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0LW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHQtby1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLmZsZXgtYy1tIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHQtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleC1jLXQge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdC1tcy1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmZsZXgtYy1iIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHQtbXMtYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmZsZXgtYy1zdHIge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdC1tcy1hbGlnbi1pdGVtczogc3RyZXRjaDtcclxuXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG5cclxuLmZsZXgtbC1tIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0LW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXgtci1tIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGV4LXNhLW0ge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGV4LXNiLW0ge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHQtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLmZsZXgtY29sLWwge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tcy1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmZsZXgtY29sLXIge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tcy1hbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uZmxleC1jb2wtYyB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtby1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXgtY29sLWwtbSB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtby1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW1zLWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleC1jb2wtci1tIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1vLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtbXMtYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXgtY29sLWMtbSB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtby1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXgtY29sLXN0ciB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtby1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW1zLWFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG5cdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcblxyXG4uZmxleC1jb2wtc2Ige1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5mbGV4LWNvbC1yZXYtbCB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0LW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHQtby1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdC1tcy1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmZsZXgtY29sLXJldi1yIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHQtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdC1vLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0LW1zLWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5mbGV4LWNvbC1yZXYtYyB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0LW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHQtby1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGV4LWNvbC1yZXYtc3RyIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHQtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdC1vLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0LW1zLWFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG5cdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcblxyXG5cclxuLypbIEFic29sdXRlIF1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuLmFiLWMtbSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNTAlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIFx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBcdC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uYWItYy10IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwcHg7XHJcblx0bGVmdDogNTAlO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIFx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIFx0LW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG5cclxuLmFiLWMtYiB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGJvdHRvbTogMHB4O1xyXG5cdGxlZnQ6IDUwJTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBcdC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIFx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBcdC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuXHJcbi5hYi1sLW0ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiAwcHg7XHJcblx0dG9wOiA1MCU7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgXHQtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgXHQtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4uYWItci1tIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDBweDtcclxuXHR0b3A6IDUwJTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBcdC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIFx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBcdC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5hYi10LWwge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiAwcHg7XHJcblx0dG9wOiAwcHg7XHJcbn1cclxuXHJcbi5hYi10LXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRyaWdodDogMHB4O1xyXG5cdHRvcDogMHB4O1xyXG59XHJcblxyXG4uYWItYi1sIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMHB4O1xyXG5cdGJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uYWItYi1yIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDBweDtcclxuXHRib3R0b206IDBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });
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
//# sourceMappingURL=main.js.map