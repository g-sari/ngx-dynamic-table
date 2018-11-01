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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-youtube-list></app-youtube-list>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
        this.title = 'ngx-dynamic-table';
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
/* harmony import */ var ngx_dynamic_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-dynamic-material-table */ "./node_modules/ngx-dynamic-material-table/fesm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_youtube__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/youtube */ "./src/app/services/youtube/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _youtube_list_youtube_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./youtube-list/youtube-list.component */ "./src/app/youtube-list/youtube-list.component.ts");
/* harmony import */ var _youtube_list_youtube_expandable_table_data_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./youtube-list/youtube-expandable-table-data.provider */ "./src/app/youtube-list/youtube-expandable-table-data.provider.ts");
/* harmony import */ var _youtube_player_player_youtube_player_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./youtube-player/player/youtube-player.component */ "./src/app/youtube-player/player/youtube-player.component.ts");
/* harmony import */ var _youtube_player_modal_youtube_player_dialog_youtube_player_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./youtube-player/modal/youtube-player-dialog/youtube-player-dialog.component */ "./src/app/youtube-player/modal/youtube-player-dialog/youtube-player-dialog.component.ts");
/* harmony import */ var _services_youtube_YoutubeSafeUrlPipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/youtube/YoutubeSafeUrlPipe */ "./src/app/services/youtube/YoutubeSafeUrlPipe.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _youtube_list_youtube_list_component__WEBPACK_IMPORTED_MODULE_7__["YoutubeListComponent"],
                _youtube_player_player_youtube_player_component__WEBPACK_IMPORTED_MODULE_9__["YoutubePlayerComponent"],
                _youtube_player_modal_youtube_player_dialog_youtube_player_dialog_component__WEBPACK_IMPORTED_MODULE_10__["YoutubePlayerDialogComponent"],
                _services_youtube_YoutubeSafeUrlPipe__WEBPACK_IMPORTED_MODULE_11__["YoutubeSafeUrlPipe"]
            ],
            entryComponents: [_youtube_player_modal_youtube_player_dialog_youtube_player_dialog_component__WEBPACK_IMPORTED_MODULE_10__["YoutubePlayerDialogComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_dynamic_material_table__WEBPACK_IMPORTED_MODULE_0__["DynamicExpandableTableModule"],
                ngx_dynamic_material_table__WEBPACK_IMPORTED_MODULE_0__["DynamicExpandableTableModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"]
            ],
            providers: [
                _services_youtube__WEBPACK_IMPORTED_MODULE_4__["YoutubeAPIService"],
                _services_youtube_YoutubeSafeUrlPipe__WEBPACK_IMPORTED_MODULE_11__["YoutubeSafeUrlPipe"],
                _youtube_list_youtube_expandable_table_data_provider__WEBPACK_IMPORTED_MODULE_8__["YoutubeExpandableTableDataProvider"],
                { provide: ngx_dynamic_material_table__WEBPACK_IMPORTED_MODULE_0__["DynamicTableDataProvider"], useExisting: _youtube_list_youtube_expandable_table_data_provider__WEBPACK_IMPORTED_MODULE_8__["YoutubeExpandableTableDataProvider"] },
                { provide: ngx_dynamic_material_table__WEBPACK_IMPORTED_MODULE_0__["DynamicExpandableTableDataProvider"], useExisting: _youtube_list_youtube_expandable_table_data_provider__WEBPACK_IMPORTED_MODULE_8__["YoutubeExpandableTableDataProvider"] },
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/youtube/YoutubeSafeUrlPipe.ts":
/*!********************************************************!*\
  !*** ./src/app/services/youtube/YoutubeSafeUrlPipe.ts ***!
  \********************************************************/
/*! exports provided: YoutubeSafeUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeSafeUrlPipe", function() { return YoutubeSafeUrlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var YoutubeSafeUrlPipe = /** @class */ (function () {
    function YoutubeSafeUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    YoutubeSafeUrlPipe.prototype.transform = function (videoId) {
        var videoUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
        return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
    };
    YoutubeSafeUrlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'youtubeSafeUrl'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], YoutubeSafeUrlPipe);
    return YoutubeSafeUrlPipe;
}());



/***/ }),

/***/ "./src/app/services/youtube/comment.model.ts":
/*!***************************************************!*\
  !*** ./src/app/services/youtube/comment.model.ts ***!
  \***************************************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
var Comment = /** @class */ (function () {
    function Comment(commentId, videoId, authorDisplayName, authorProfileImageUrl, authorChannelId, textDisplay, textOriginal, publishedAt, likeCount, replies) {
        this.commentId = commentId;
        this.videoId = videoId;
        this.authorDisplayName = authorDisplayName;
        this.authorProfileImageUrl = authorProfileImageUrl;
        this.authorChannelId = authorChannelId;
        this.textDisplay = textDisplay;
        this.textOriginal = textOriginal;
        this.publishedAt = publishedAt;
        this.likeCount = likeCount;
        this.replies = replies;
        this.videoId = videoId;
        this.commentId = commentId;
        this.authorDisplayName = authorDisplayName;
        this.authorProfileImageUrl = authorProfileImageUrl;
        this.authorChannelId = authorChannelId;
        this.textDisplay = textDisplay;
        this.textOriginal = textOriginal;
        this.publishedAt = publishedAt;
        this.likeCount = likeCount;
        this.replies = replies;
    }
    return Comment;
}());



/***/ }),

/***/ "./src/app/services/youtube/index.ts":
/*!*******************************************!*\
  !*** ./src/app/services/youtube/index.ts ***!
  \*******************************************/
/*! exports provided: Video, YoutubeAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _video_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.model */ "./src/app/services/youtube/video.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return _video_model__WEBPACK_IMPORTED_MODULE_0__["Video"]; });

/* harmony import */ var _youtube_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./youtube-api.service */ "./src/app/services/youtube/youtube-api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YoutubeAPIService", function() { return _youtube_api_service__WEBPACK_IMPORTED_MODULE_1__["YoutubeAPIService"]; });

/**
 * Created by gokhansari on 02.09.17.
 */




/***/ }),

/***/ "./src/app/services/youtube/video.model.ts":
/*!*************************************************!*\
  !*** ./src/app/services/youtube/video.model.ts ***!
  \*************************************************/
/*! exports provided: Video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
/**
 * Created by gokhansari on 02.09.17.
 */
var Video = /** @class */ (function () {
    function Video(videoId, title, thumbnailUrlMedium, thumbnailUrlHigh, channelTitle, channelId, publishedAt, description, statisticViewCount, duration) {
        this.videoId = videoId;
        this.title = title;
        this.thumbnailUrlMedium = thumbnailUrlMedium;
        this.thumbnailUrlHigh = thumbnailUrlHigh;
        this.channelTitle = channelTitle;
        this.channelId = channelId;
        this.publishedAt = publishedAt;
        this.description = description;
        this.statisticViewCount = statisticViewCount;
        this.duration = duration;
        this.videoId = videoId;
        this.title = title;
        this.thumbnailUrlMedium = thumbnailUrlMedium;
        this.thumbnailUrlHigh = thumbnailUrlHigh;
        this.channelTitle = channelTitle;
        this.channelId = channelId;
        this.publishedAt = publishedAt;
        this.description = description;
        this.statisticViewCount = statisticViewCount;
        this.duration = duration;
    }
    return Video;
}());



/***/ }),

/***/ "./src/app/services/youtube/youtube-api.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/youtube/youtube-api.service.ts ***!
  \*********************************************************/
/*! exports provided: YoutubeAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeAPIService", function() { return YoutubeAPIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YoutubeAPIService = /** @class */ (function () {
    function YoutubeAPIService(http) {
        this.http = http;
    }
    YoutubeAPIService.prototype.extractData = function (response) {
        return response.json();
    };
    YoutubeAPIService.prototype.handleError = function (error) {
        console.error(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error.json().error || 'Server Error');
    };
    YoutubeAPIService.prototype.searchVideos = function (query) {
        return this.http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + query +
            '&maxResults=50' +
            '&type=video' +
            '&key=AIzaSyAW5x6wXJMsd6dXt_tBrWZHWDI7oK9Qhl8')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resultobject) {
            var results = [];
            for (var _i = 0, _a = resultobject['items']; _i < _a.length; _i++) {
                var item = _a[_i];
                results.push(item);
            }
            return results;
        }));
    };
    YoutubeAPIService.prototype.getCommentsByVideoId = function (videoId) {
        return this.http.get("https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=" + videoId +
            '&maxResults=50' +
            '&order=relevance' +
            '&key=AIzaSyAW5x6wXJMsd6dXt_tBrWZHWDI7oK9Qhl8');
    };
    YoutubeAPIService.prototype.getVideoById = function (videoId) {
        return this.http.get("https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=" + videoId +
            '&key=AIzaSyAW5x6wXJMsd6dXt_tBrWZHWDI7oK9Qhl8');
    };
    YoutubeAPIService.prototype.getVideoCategories = function (regionCode) {
        return this.http.get("https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=" + regionCode +
            '&key=AIzaSyAW5x6wXJMsd6dXt_tBrWZHWDI7oK9Qhl8')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData));
    };
    YoutubeAPIService.prototype.getVideosByCategory = function (regionCode, videoCategoryId) {
        return this.http.get("https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&part=snippet,contentDetails,statistics&regionCode=" + regionCode +
            ("&videoCategoryId=" + videoCategoryId) +
            '&maxResults=6' +
            '&key=AIzaSyAW5x6wXJMsd6dXt_tBrWZHWDI7oK9Qhl8')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData));
    };
    YoutubeAPIService.prototype.searchLiveVideos = function (query) {
        return this.http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + query +
            '&maxResults=25' +
            '&type=video' +
            '&eventType=live' +
            '&key=AIzaSyAW5x6wXJMsd6dXt_tBrWZHWDI7oK9Qhl8');
    };
    YoutubeAPIService.prototype.getI18nLanguages = function (lang) {
        lang = (lang != null) ? lang : 'en_US';
        return this.http.get("https://www.googleapis.com/youtube/v3/i18nLanguages?part=snippet&hl=" + lang);
    };
    YoutubeAPIService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], YoutubeAPIService);
    return YoutubeAPIService;
}());



/***/ }),

/***/ "./src/app/services/youtube/youtube-data-converter.ts":
/*!************************************************************!*\
  !*** ./src/app/services/youtube/youtube-data-converter.ts ***!
  \************************************************************/
/*! exports provided: YoutubeDataConverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeDataConverter", function() { return YoutubeDataConverter; });
/* harmony import */ var _video_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.model */ "./src/app/services/youtube/video.model.ts");
/* harmony import */ var _comment_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment.model */ "./src/app/services/youtube/comment.model.ts");


/**
 * Created by gokhansari on 03.09.17.
 */
var YoutubeDataConverter = /** @class */ (function () {
    function YoutubeDataConverter() {
    }
    YoutubeDataConverter.convertVideo = function (data) {
        return data.items.map(function (item) {
            return new _video_model__WEBPACK_IMPORTED_MODULE_0__["Video"](item.id, item.snippet.title, item.snippet.thumbnails.medium.url, item.snippet.thumbnails.high.url, item.snippet.channelTitle, item.snippet.channelId, item.snippet.publishedAt, item.snippet.description, item.statistics.viewCount, item.contentDetails.duration);
        });
    };
    YoutubeDataConverter.convertReplies = function (item) {
        if (!item.replies) {
            return [];
        }
        return item.replies.comments.map(function (reply) {
            return new _comment_model__WEBPACK_IMPORTED_MODULE_1__["Comment"](reply.id, reply.snippet.videoId, reply.snippet.authorDisplayName, reply.snippet.authorProfileImageUrl, reply.snippet.authorChannelId.value, reply.snippet.textDisplay, reply.snippet.textOriginal, reply.snippet.publishedAt, reply.snippet.likeCount, null);
        });
    };
    YoutubeDataConverter.convertComments = function (data) {
        var _this = this;
        return data.items.map(function (item) {
            return new _comment_model__WEBPACK_IMPORTED_MODULE_1__["Comment"](item.id, item.snippet.videoId, item.snippet.topLevelComment.snippet.authorDisplayName, item.snippet.topLevelComment.snippet.authorProfileImageUrl, item.snippet.topLevelComment.snippet.authorChannelId.value, item.snippet.topLevelComment.snippet.textDisplay, item.snippet.topLevelComment.snippet.textOriginal, item.snippet.topLevelComment.snippet.publishedAt, item.snippet.topLevelComment.snippet.likeCount, _this.convertReplies(item));
        });
    };
    return YoutubeDataConverter;
}());



/***/ }),

/***/ "./src/app/youtube-list/youtube-expandable-table-data.provider.ts":
/*!************************************************************************!*\
  !*** ./src/app/youtube-list/youtube-expandable-table-data.provider.ts ***!
  \************************************************************************/
/*! exports provided: YoutubeExpandableTableDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeExpandableTableDataProvider", function() { return YoutubeExpandableTableDataProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_dynamic_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-dynamic-material-table */ "./node_modules/ngx-dynamic-material-table/fesm5/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_youtube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/youtube */ "./src/app/services/youtube/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YoutubeExpandableTableDataProvider = /** @class */ (function (_super) {
    __extends(YoutubeExpandableTableDataProvider, _super);
    function YoutubeExpandableTableDataProvider(youtubeAPIService) {
        var _this = _super.call(this) || this;
        _this.youtubeAPIService = youtubeAPIService;
        _this.expandedItemTableData = _this.createExpandedItemData();
        _this.expandableColumn = {
            columns: [ngx_dynamic_material_table__WEBPACK_IMPORTED_MODULE_1__["DynamicExpandableTableColumnDefinitionConstants"].EXPANDABLE_COLUMN], names: ['Expand/Collapse'], backgroundColor: '#FC0012'
        };
        return _this;
    }
    YoutubeExpandableTableDataProvider.prototype.getColumns = function () {
        return [
            this.expandableColumn,
            {
                columns: [ngx_dynamic_material_table__WEBPACK_IMPORTED_MODULE_1__["DynamicExpandableTableColumnDefinitionConstants"].ADDITIONAL_INFO],
                names: ['Video Pic'],
                backgroundColor: '#f7f7f7'
            },
            {
                columns: [ngx_dynamic_material_table__WEBPACK_IMPORTED_MODULE_1__["DynamicExpandableTableColumnDefinitionConstants"].TITLE],
                names: ['Video Title'],
                backgroundColor: '#f7f7f7'
            },
            {
                columns: [ngx_dynamic_material_table__WEBPACK_IMPORTED_MODULE_1__["DynamicExpandableTableColumnDefinitionConstants"].DESCRIPTION],
                names: ['Channel Title'],
                backgroundColor: '#f7f7f7'
            },
            {
                columns: [ngx_dynamic_material_table__WEBPACK_IMPORTED_MODULE_1__["DynamicExpandableTableColumnDefinitionConstants"].HTML_ACTIONS],
                names: ['Actions'],
                backgroundColor: '#f7f7f7'
            },
        ];
    };
    YoutubeExpandableTableDataProvider.prototype.getData = function (sort, order, page) {
        return this.youtubeAPIService.searchVideos('google');
    };
    YoutubeExpandableTableDataProvider.prototype.getTitle = function (item, rowIndex, groupIndex, groupName) {
        return item['snippet']['title'];
    };
    YoutubeExpandableTableDataProvider.prototype.getAdditionalInfo = function (item, rowIndex, groupIndex, groupName) {
        return '<img src="' + item['snippet']['thumbnails']['default']['url'] + '" />';
    };
    YoutubeExpandableTableDataProvider.prototype.getHTMLAction = function (item, rowIndex, groupIndex, groupName) {
        return '<button mat-raised-button color="warn" '
            + '(click)="' + ngx_dynamic_material_table__WEBPACK_IMPORTED_MODULE_1__["DynamicTableUIUtils"].createHTMLAction('do something', item) + '">'
            + '<mat-icon>play_arrow</mat-icon> Play</button>';
    };
    YoutubeExpandableTableDataProvider.prototype.getDescription = function (item, rowIndex, groupIndex, groupName) {
        return item['snippet']['channelTitle'];
    };
    YoutubeExpandableTableDataProvider.prototype.getOtherTextBased = function (item, rowIndex, groupIndex, groupName) {
        throw new Error('Method not implemented.');
    };
    YoutubeExpandableTableDataProvider.prototype.getExpandedItemTableColumns = function (expandedItem) {
        return [
            this.createExpandedItemColumn('videodesc', 'Video Description', '#8F010A', '#ffffff', ''),
            this.createExpandedItemColumn('published', 'Published Date', '#8F010A', '#ffffff', ''),
        ];
    };
    YoutubeExpandableTableDataProvider.prototype.createExpandedItemData = function () {
        return [
            {
                'videodesc': '',
                'published': '',
            }
        ];
    };
    YoutubeExpandableTableDataProvider.prototype.getExpandedItemTableData = function (expandedItem) {
        var itemDetails = this.expandedItemTableData[0];
        itemDetails['videodesc'] = expandedItem['snippet']['description'];
        itemDetails['published'] = expandedItem['snippet']['publishedAt'];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.expandedItemTableData);
    };
    YoutubeExpandableTableDataProvider.prototype.getOptions = function () {
        var options = [];
        var expandableColumnOption = Object.assign({}, this.expandableColumn);
        expandableColumnOption['hoverBackgroundColor'] = '#494949';
        expandableColumnOption['backgroundColor'] = '#FC0012';
        var table1Options = {
            groupName: 'NGX-DYNAMIC-MATERIAL-TABLE',
            groupExpressions: [],
            groupItemRowColor: '',
            hideColumns: false,
            hideColumnsOfExpandedItems: false,
            hideColumnsOfExpandedItemDetails: true,
            columnOptions: []
        };
        options.push(table1Options);
        return options;
    };
    //////////////////////////////////////////// UNSUED FUNCTIONS ////////////////////////////////////////////
    YoutubeExpandableTableDataProvider.prototype.getExpandedItemDetailsTableColumns = function (expandedItemDetails, expandedItem) {
        return null;
    };
    YoutubeExpandableTableDataProvider.prototype.getExpandedItemDetailsTableData = function (expandedItemDetails, expandedItem) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
    };
    YoutubeExpandableTableDataProvider.prototype.getIndicatorColor = function (item, rowIndex, groupIndex, groupName) {
        throw new Error('Method not implemented.');
    };
    YoutubeExpandableTableDataProvider.prototype.getIndicatorSign = function (item, rowIndex, groupIndex, groupName) {
        throw new Error('Method not implemented.');
    };
    YoutubeExpandableTableDataProvider.prototype.getHTMLIcon = function (item, rowIndex, groupIndex, groupName) {
        throw new Error('Method not implemented.');
    };
    YoutubeExpandableTableDataProvider.prototype.getHTMLContentSummary = function (item, rowIndex, groupIndex, groupName) {
        throw new Error('Method not implemented.');
    };
    YoutubeExpandableTableDataProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_youtube__WEBPACK_IMPORTED_MODULE_3__["YoutubeAPIService"]])
    ], YoutubeExpandableTableDataProvider);
    return YoutubeExpandableTableDataProvider;
}(ngx_dynamic_material_table__WEBPACK_IMPORTED_MODULE_1__["AbstractDynamicExpandableTableDataProvider"]));



/***/ }),

/***/ "./src/app/youtube-list/youtube-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/youtube-list/youtube-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dynamic-expandable-table [showFilter]=\"false\"></dynamic-expandable-table>\n"

/***/ }),

/***/ "./src/app/youtube-list/youtube-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/youtube-list/youtube-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pal-table-container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n  height: 94vh;\n  padding-bottom: 130px;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n\n.pal-table-header {\n  min-height: 65px;\n  height: 65px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding-left: 24px;\n  padding-right: 24px;\n  padding-top: 12px; }\n\n.pal-table {\n  overflow: auto;\n  height: 100%;\n  font-size: 1.5vw; }\n\n.pal-table-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  right: 0;\n  background: rgba(0, 0, 0, 0.1);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.pal-table-message {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #980000;\n  max-width: 360px;\n  text-align: center; }\n\n.mat-header-cell.mat-sort-header-sorted {\n  color: black; }\n\n.mat-row {\n  min-height: 130px;\n  padding: 0 7px; }\n\n.mat-cell {\n  font-size: 1.57vw;\n  min-height: 130px; }\n\n.flex-column, .color-column, .icon-column, .title-column, .description-column, .html-content-summary-column, .additional-info-column, .actions-column, .other-text-based-column, .selected-row-column, .expanded-item-columns, :host ::ng-deep .expanded-item-column-videodesc, :host ::ng-deep .expanded-item-column-published {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  flex: 1; }\n\n.color-column {\n  font-size: 1.85vw;\n  width: 40px;\n  min-width: 40px;\n  max-width: 40px; }\n\n.icon-column {\n  width: 5%;\n  min-width: 5%;\n  max-width: 5%; }\n\n.no-data-found-icon {\n  height: 128px;\n  width: 128px; }\n\n.no-data-found-text {\n  font-size: 24px;\n  color: gray;\n  font-weight: 700; }\n\n.no-header-columns {\n  display: none; }\n\n.current-selected-row {\n  background-color: #f5fcfd; }\n\n.selected-row-icon {\n  font-size: 12px;\n  color: #1EBAE4; }\n\n.selected-row-column {\n  justify-content: flex-start;\n  width: 12px;\n  min-width: 12px;\n  max-width: 12px; }\n\n.speed-dial-container {\n  position: fixed;\n  bottom: 32px;\n  right: 32px; }\n\n.speed-dial-option-icon {\n  color: #ffffff; }\n\n.toolbar-buttons {\n  width: 50%; }\n\n.toolbar-button {\n  margin: 5px; }\n\n.mat-form-field-label-wrapper {\n  top: -3px;\n  padding-top: -3px; }\n\n.mat-toolbar {\n  background-color: #494949; }\n\n.pal-table-grouped-container {\n  width: 100%; }\n\n.pal-table-grouped {\n  width: 100%; }\n\n.text-color, :host ::ng-deep .mat-cell {\n  color: #494949; }\n\n:host ::ng-deep .mat-toolbar {\n  min-height: 100px;\n  height: 100px;\n  color: #ffffff;\n  font-size: 26px !important;\n  background-color: #8F010A !important; }\n\n:host ::ng-deep .mat-row {\n  overflow: hidden; }\n\n:host ::ng-deep .mat-cell:first-child {\n  padding-left: 0px !important; }\n\n.cell, :host ::ng-deep .expandable-row-column, :host ::ng-deep .title-column, :host ::ng-deep .additional-info-column, :host ::ng-deep .actions-column, :host ::ng-deep .description-column {\n  justify-content: center;\n  font-size: 20px !important; }\n\n:host ::ng-deep .expandable-row-column-header {\n  background-color: #FC0012; }\n\n:host ::ng-deep .expandable-row-column {\n  cursor: pointer;\n  width: 5%;\n  min-width: 5%;\n  max-width: 5%; }\n\n:host ::ng-deep .title-column-header {\n  background-color: #FC0012; }\n\n:host ::ng-deep .title-column {\n  justify-content: flex-start;\n  padding-left: 5px; }\n\n:host ::ng-deep .additional-info-column-header {\n  background-color: #FC0012; }\n\n:host ::ng-deep .additional-info-column {\n  width: 10% !important;\n  min-width: 10% !important;\n  max-width: 10% !important; }\n\n:host ::ng-deep .actions-column-header {\n  background-color: #FC0012; }\n\n:host ::ng-deep .actions-column {\n  justify-content: flex-end;\n  min-width: 15%;\n  max-width: 15%; }\n\n:host ::ng-deep .description-column-header {\n  background-color: #FC0012; }\n\n:host ::ng-deep .description-column {\n  justify-content: flex-start;\n  padding-left: 5px;\n  width: 15%;\n  min-width: 15%;\n  max-width: 15%; }\n\n:host ::ng-deep .pal-expandable-table-grouped-container {\n  padding-bottom: 150px; }\n\n:host ::ng-deep .pal-expandable-table-grouped {\n  margin-top: 1vh; }\n\n.expanded-item-columns, :host ::ng-deep .expanded-item-column-videodesc, :host ::ng-deep .expanded-item-column-published {\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 16px; }\n\n:host ::ng-deep .expanded-item-column-videodesc {\n  justify-content: center;\n  background-color: #e9e9e9;\n  color: #000000; }\n\n:host ::ng-deep .expanded-item-column-published {\n  justify-content: center;\n  background-color: #e9e9e9;\n  color: #000000; }\n"

/***/ }),

/***/ "./src/app/youtube-list/youtube-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/youtube-list/youtube-list.component.ts ***!
  \********************************************************/
/*! exports provided: YoutubeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeListComponent", function() { return YoutubeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_dynamic_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-dynamic-material-table */ "./node_modules/ngx-dynamic-material-table/fesm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _youtube_player_modal_youtube_player_dialog_youtube_player_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../youtube-player/modal/youtube-player-dialog/youtube-player-dialog.component */ "./src/app/youtube-player/modal/youtube-player-dialog/youtube-player-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YoutubeListComponent = /** @class */ (function () {
    function YoutubeListComponent(palTableActionMessage, dialog) {
        this.palTableActionMessage = palTableActionMessage;
        this.dialog = dialog;
    }
    YoutubeListComponent.prototype.ngAfterViewInit = function () {
        this.handleDynamicTableActions(this.palTableActionMessage.getPubisher());
    };
    YoutubeListComponent.prototype.playVideoInDialog = function (videoId) {
        var dialogRef = this.dialog.open(_youtube_player_modal_youtube_player_dialog_youtube_player_dialog_component__WEBPACK_IMPORTED_MODULE_3__["YoutubePlayerDialogComponent"], {
            width: '60%',
            height: '60%',
            data: { videoId: videoId }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    YoutubeListComponent.prototype.handleDynamicTableActions = function (publisher) {
        var _this = this;
        if (publisher != null) {
            publisher.subscribe(function (actionMessage) {
                switch (actionMessage.getAction()) {
                    case 'do something':
                        var item = actionMessage.getItem();
                        _this.playVideoInDialog(item['id']['videoId']);
                        break;
                }
            });
        }
    };
    YoutubeListComponent.prototype.handleDynamicTableMouseOverEvents = function (publisher) {
        throw new Error('Method not implemented.');
    };
    YoutubeListComponent.prototype.handleDynamicTableMouseOutEvents = function (publisher) {
        throw new Error('Method not implemented.');
    };
    YoutubeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-youtube-list',
            template: __webpack_require__(/*! ./youtube-list.component.html */ "./src/app/youtube-list/youtube-list.component.html"),
            styles: [__webpack_require__(/*! ./youtube-list.component.scss */ "./src/app/youtube-list/youtube-list.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_dynamic_material_table__WEBPACK_IMPORTED_MODULE_1__["DynamicTableActionMessageService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], YoutubeListComponent);
    return YoutubeListComponent;
}());



/***/ }),

/***/ "./src/app/youtube-player/modal/youtube-player-dialog/youtube-player-dialog.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/youtube-player/modal/youtube-player-dialog/youtube-player-dialog.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/youtube-player/modal/youtube-player-dialog/youtube-player-dialog.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/youtube-player/modal/youtube-player-dialog/youtube-player-dialog.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-youtube-player [videoId]=\"videoId\"></app-youtube-player>"

/***/ }),

/***/ "./src/app/youtube-player/modal/youtube-player-dialog/youtube-player-dialog.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/youtube-player/modal/youtube-player-dialog/youtube-player-dialog.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: YoutubePlayerDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePlayerDialogComponent", function() { return YoutubePlayerDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var YoutubePlayerDialogComponent = /** @class */ (function () {
    function YoutubePlayerDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.videoId = data['videoId'];
    }
    YoutubePlayerDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    YoutubePlayerDialogComponent.prototype.ngOnInit = function () { };
    YoutubePlayerDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-youtube-player-dialog',
            template: __webpack_require__(/*! ./youtube-player-dialog.component.html */ "./src/app/youtube-player/modal/youtube-player-dialog/youtube-player-dialog.component.html"),
            styles: [__webpack_require__(/*! ./youtube-player-dialog.component.css */ "./src/app/youtube-player/modal/youtube-player-dialog/youtube-player-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], YoutubePlayerDialogComponent);
    return YoutubePlayerDialogComponent;
}());



/***/ }),

/***/ "./src/app/youtube-player/player/youtube-player.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/youtube-player/player/youtube-player.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<div fxLayout=\"row\" fxLayoutAlign=\"space-around start\">\n  <div fxFlex class=\"embed-container\">\n    <iframe *ngIf=\"video\" width=\"90%\" height=\"80%\" frameborder=\"0\" allowfullscreen [src]=\"video?.videoId | youtubeSafeUrl\"></iframe>\n  </div>\n  <div fxFlex>\n    <mat-card *ngIf=\"video\">\n      <mat-card-header>\n        <img md-card-avatar [src]=\"video.thumbnailUrlMedium\">\n        <mat-card-title>{{video.title}}</mat-card-title>\n        <mat-card-subtitle>{{video.description}}</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>\n          Views: {{video.statisticViewCount}} | Duration: {{video.duration}}\n        </p>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n</div>\n\n-->\n<div fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\" fxLayoutGap=\"10\">\n  <!-- VIDEO PLAYER-->\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-around start\" fxLayoutGap=\"10\">\n    <div fxFlex=\"70\">\n      <div class=\"embed-container\">\n        <iframe *ngIf=\"video\" width=\"90%\" height=\"100%\" frameborder=\"0\" allowfullscreen [src]=\"video?.videoId | youtubeSafeUrl\"></iframe>\n      </div>\n    </div>\n    <div fxFlex=\"30\">\n      <mat-card *ngIf=\"video\" class=\"video-description\">\n        <mat-card-header>\n          <img mat-card-avatar [src]=\"video.thumbnailUrlMedium\">\n          <mat-card-title>{{video.title}}</mat-card-title>\n          <mat-card-subtitle>Views: {{video.statisticViewCount}} | Duration: {{video.duration}}</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n          {{video.description}}\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n  <!-- COMMENTS TABLE -->\n  <div>\n    <mat-toolbar>Comments</mat-toolbar>\n    <div fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\">\n      <div class=\"comments\">\n        <mat-card *ngFor=\"let comment of comments\" class=\"comment\">\n          <mat-card-header>\n            <img mat-card-avatar [src]=\"comment.authorProfileImageUrl\">\n            <mat-card-title class=\"comment-title\">{{comment.authorDisplayName}}</mat-card-title>\n            <mat-card-subtitle>Likes: {{comment.likeCount}}</mat-card-subtitle>\n          </mat-card-header>\n          <mat-card-content>\n            <div [innerHTML]=\"comment.textDisplay\"></div>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n<!--\n<div fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"stretch\" class=\"content\">\n  <div fxLayout=\"column\" fxFlex=\"100\" fxLayoutAlign=\"start stretch\">\n    <div fxLayout=\"column\" fxFlex=\"70\">\n      <div fxLayout=\"row\" fxFlex=\"100\">\n        <div fxLayout=\"row\" fxFlex=\"65\" fxLayoutAlign=\"start start\" class=\"embed-container\">\n          <div fxLayout=\"column\" fxFlex=\"100\" fxLayoutAlign=\"start stretch\">\n            <div *ngIf=\"video\">\n              <iframe *ngIf=\"video\" width=\"90%\" height=\"80%\" frameborder=\"0\" allowfullscreen [src]=\"video?.videoId | youtubeSafeUrl\"></iframe>\n            </div>\n          </div>\n        </div>\n        <div fxLayout=\"row\" fxFlex=\"35\" fxLayoutAlign=\"start start\">\n          <div fxLayout=\"column\" fxFlex=\"100\" fxLayoutAlign=\"space-around stretch\">\n            <mat-card *ngIf=\"video\">\n              <mat-card-header>\n                <img mat-card-avatar [src]=\"video.thumbnailUrlMedium\">\n                <mat-card-title>{{video.title}}</mat-card-title>\n                <mat-card-subtitle>{{video.description}}</mat-card-subtitle>\n              </mat-card-header>\n              <mat-card-content>\n                <p>\n                  Views: {{video.statisticViewCount}} | Duration: {{video.duration}}\n                </p>\n              </mat-card-content>\n            </mat-card>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div fxLayout=\"column\" fxFlex=\"30\" fxLayoutAlign=\"start stretch\">\n      <mat-toolbar>Comments</mat-toolbar>\n      <div class=\"comments\">\n        <mat-card *ngFor=\"let comment of comments\" class=\"comment\">\n          <mat-card-header>\n            <img mat-card-avatar [src]=\"comment.authorProfileImageUrl\">\n            <mat-card-title class=\"comment-title\">{{comment.authorDisplayName}}</mat-card-title>\n            <mat-card-subtitle>Likes: {{comment.likeCount}}</mat-card-subtitle>\n          </mat-card-header>\n          <mat-card-content>\n            <div [innerHTML]=\"comment.textDisplay\"></div>\n          </mat-card-content>\n        </mat-card>\n      </div>\n\n    </div>\n  </div>\n</div>\n-->\n"

/***/ }),

/***/ "./src/app/youtube-player/player/youtube-player.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/youtube-player/player/youtube-player.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".embed-container {\n  position: relative;\n  height: 0; }\n\n.embed-container iframe {\n  width: 100%;\n  height: 45vh; }\n\n.comments {\n  height: calc(80vh - 64px); }\n\n.comment {\n  margin: 5px; }\n\n.comment-title {\n  font-weight: 700; }\n\n.video-description {\n  height: calc(45vh - 5vh);\n  overflow: scroll; }\n"

/***/ }),

/***/ "./src/app/youtube-player/player/youtube-player.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/youtube-player/player/youtube-player.component.ts ***!
  \*******************************************************************/
/*! exports provided: YoutubePlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePlayerComponent", function() { return YoutubePlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_youtube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/youtube */ "./src/app/services/youtube/index.ts");
/* harmony import */ var _services_youtube_youtube_data_converter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/youtube/youtube-data-converter */ "./src/app/services/youtube/youtube-data-converter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YoutubePlayerComponent = /** @class */ (function () {
    function YoutubePlayerComponent(youtubeAPIService) {
        this.youtubeAPIService = youtubeAPIService;
    }
    YoutubePlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.youtubeAPIService.getVideoById(this.videoId)
            .subscribe(function (data) {
            _this.video = _services_youtube_youtube_data_converter__WEBPACK_IMPORTED_MODULE_2__["YoutubeDataConverter"].convertVideo(data)[0];
            _this.youtubeAPIService.getCommentsByVideoId(_this.video.videoId)
                .subscribe(function (results) {
                _this.comments = _services_youtube_youtube_data_converter__WEBPACK_IMPORTED_MODULE_2__["YoutubeDataConverter"].convertComments(results);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], YoutubePlayerComponent.prototype, "videoId", void 0);
    YoutubePlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-youtube-player',
            template: __webpack_require__(/*! ./youtube-player.component.html */ "./src/app/youtube-player/player/youtube-player.component.html"),
            styles: [__webpack_require__(/*! ./youtube-player.component.scss */ "./src/app/youtube-player/player/youtube-player.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_youtube__WEBPACK_IMPORTED_MODULE_1__["YoutubeAPIService"]])
    ], YoutubePlayerComponent);
    return YoutubePlayerComponent;
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

module.exports = __webpack_require__(/*! /Users/goekhansari/projects/open-source/ngx-dynamic-table/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map