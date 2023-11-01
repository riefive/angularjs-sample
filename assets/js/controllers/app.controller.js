"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var App;
(function (_App) {
  var ngApp = angular.module('App', ['TplMainModule', 'UserServiceModule', 'ngRoute']);
  var AppController = /*#__PURE__*/_createClass(function AppController(scope) {
    _classCallCheck(this, AppController);
    this.scope = scope;
  });
  _App.AppController = AppController;
  AppController.$inject = ['$scope'];
  ngApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
      redirectTo: '/post'
    }).when('/login', {
      templateUrl: "".concat(config.controllerPath, "/login/login.controller.html"),
      controller: 'loginController',
      controllerAs: 'vm'
    }).when('/album', {
      templateUrl: "".concat(config.controllerPath, "/contents/album/album.controller.html"),
      controller: 'albumController',
      controllerAs: 'vm'
    }).when('/comment', {
      templateUrl: "".concat(config.controllerPath, "/contents/comment/comment.controller.html"),
      controller: 'commentController',
      controllerAs: 'vm'
    }).when('/photo', {
      templateUrl: "".concat(config.controllerPath, "/contents/photo/photo.controller.html"),
      controller: 'photoController',
      controllerAs: 'vm'
    }).when('/post', {
      templateUrl: "".concat(config.controllerPath, "/contents/post/post.controller.html"),
      controller: 'postController',
      controllerAs: 'vm'
    }).when('/todo', {
      templateUrl: "".concat(config.controllerPath, "/contents/todo/todo.controller.html"),
      controller: 'todoController',
      controllerAs: 'vm'
    }).when('/user', {
      templateUrl: "".concat(config.controllerPath, "/contents/user/user.controller.html"),
      controller: 'userController',
      controllerAs: 'vm'
    });
  });
  ngApp.controller('appCtrl', AppController);
})(App || (App = {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJuZ0FwcCIsImFuZ3VsYXIiLCJtb2R1bGUiLCJBcHBDb250cm9sbGVyIiwiX2NyZWF0ZUNsYXNzIiwic2NvcGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJfQXBwIiwiJGluamVjdCIsImNvbmZpZyIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInJlZGlyZWN0VG8iLCJ0ZW1wbGF0ZVVybCIsImNvbmNhdCIsImNvbnRyb2xsZXJQYXRoIiwiY29udHJvbGxlciIsImNvbnRyb2xsZXJBcyIsIkFwcCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9hcHAuY29udHJvbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgQXBwIHtcclxuICAgIGNvbnN0IG5nQXBwID0gYW5ndWxhci5tb2R1bGUoJ0FwcCcsIFsnVHBsTWFpbk1vZHVsZScsICdVc2VyU2VydmljZU1vZHVsZScsICduZ1JvdXRlJ10pXHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEFwcENvbnRyb2xsZXIgaW1wbGVtZW50cyBhbmd1bGFyLklDb250cm9sbGVyXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHByaXZhdGUgc2NvcGU6IGFuZ3VsYXIuSVNjb3BlLCBcclxuICAgICAgICApIFxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQXBwQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnXTtcclxuXHJcbiAgICBuZ0FwcC5jb25maWcoZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXI6IGFuZ3VsYXIucm91dGUuSVJvdXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkcm91dGVQcm92aWRlclxyXG4gICAgICAgIC53aGVuKCcvJywge1xyXG4gICAgICAgICAgICByZWRpcmVjdFRvOiAnL3Bvc3QnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAud2hlbignL2xvZ2luJywge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybCA6IGAke2NvbmZpZy5jb250cm9sbGVyUGF0aH0vbG9naW4vbG9naW4uY29udHJvbGxlci5odG1sYCxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ2xvZ2luQ29udHJvbGxlcicsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLndoZW4oJy9hbGJ1bScsIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmwgOiBgJHtjb25maWcuY29udHJvbGxlclBhdGh9L2NvbnRlbnRzL2FsYnVtL2FsYnVtLmNvbnRyb2xsZXIuaHRtbGAsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdhbGJ1bUNvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC53aGVuKCcvY29tbWVudCcsIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmwgOiBgJHtjb25maWcuY29udHJvbGxlclBhdGh9L2NvbnRlbnRzL2NvbW1lbnQvY29tbWVudC5jb250cm9sbGVyLmh0bWxgLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnY29tbWVudENvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC53aGVuKCcvcGhvdG8nLCB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsIDogYCR7Y29uZmlnLmNvbnRyb2xsZXJQYXRofS9jb250ZW50cy9waG90by9waG90by5jb250cm9sbGVyLmh0bWxgLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAncGhvdG9Db250cm9sbGVyJyxcclxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICAgICAgfSlcclxuICAgICAgICAud2hlbignL3Bvc3QnLCB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsIDogYCR7Y29uZmlnLmNvbnRyb2xsZXJQYXRofS9jb250ZW50cy9wb3N0L3Bvc3QuY29udHJvbGxlci5odG1sYCxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ3Bvc3RDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICAgICAgfSlcclxuICAgICAgICAud2hlbignL3RvZG8nLCB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsIDogYCR7Y29uZmlnLmNvbnRyb2xsZXJQYXRofS9jb250ZW50cy90b2RvL3RvZG8uY29udHJvbGxlci5odG1sYCxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ3RvZG9Db250cm9sbGVyJyxcclxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICAgICAgfSlcclxuICAgICAgICAud2hlbignL3VzZXInLCB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsIDogYCR7Y29uZmlnLmNvbnRyb2xsZXJQYXRofS9jb250ZW50cy91c2VyL3VzZXIuY29udHJvbGxlci5odG1sYCxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ3VzZXJDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIG5nQXBwLmNvbnRyb2xsZXIoJ2FwcEN0cmwnLCBBcHBDb250cm9sbGVyKTtcclxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztFQUNJLElBQU1BLEtBQUssR0FBR0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsZUFBZSxFQUFFLG1CQUFtQixFQUFFLFNBQVMsQ0FBQyxDQUFDO0VBQUEsSUFFekVDLGFBQWEsZ0JBQUFDLFlBQUEsQ0FFdEIsU0FBQUQsY0FDWUUsS0FBcUIsRUFFakM7SUFBQUMsZUFBQSxPQUFBSCxhQUFBO0lBQUEsS0FGWUUsS0FBcUIsR0FBckJBLEtBQXFCO0VBR2pDLENBQUM7RUFBQUUsSUFBQSxDQUFBSixhQUFBLEdBQUFBLGFBQUE7RUFHTEEsYUFBYSxDQUFDSyxPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFFbENSLEtBQUssQ0FBQ1MsTUFBTSxDQUFDLFVBQVNDLGNBQTRDLEVBQUU7SUFDaEVBLGNBQWMsQ0FDYkMsSUFBSSxDQUFDLEdBQUcsRUFBRTtNQUNQQyxVQUFVLEVBQUU7SUFDaEIsQ0FBQyxDQUFDLENBQ0RELElBQUksQ0FBQyxRQUFRLEVBQUU7TUFDWkUsV0FBVyxLQUFBQyxNQUFBLENBQU1MLE1BQU0sQ0FBQ00sY0FBYyxpQ0FBOEI7TUFDcEVDLFVBQVUsRUFBRSxpQkFBaUI7TUFDN0JDLFlBQVksRUFBRTtJQUNsQixDQUFDLENBQUMsQ0FDRE4sSUFBSSxDQUFDLFFBQVEsRUFBRTtNQUNaRSxXQUFXLEtBQUFDLE1BQUEsQ0FBTUwsTUFBTSxDQUFDTSxjQUFjLDBDQUF1QztNQUM3RUMsVUFBVSxFQUFFLGlCQUFpQjtNQUM3QkMsWUFBWSxFQUFFO0lBQ2xCLENBQUMsQ0FBQyxDQUNETixJQUFJLENBQUMsVUFBVSxFQUFFO01BQ2RFLFdBQVcsS0FBQUMsTUFBQSxDQUFNTCxNQUFNLENBQUNNLGNBQWMsOENBQTJDO01BQ2pGQyxVQUFVLEVBQUUsbUJBQW1CO01BQy9CQyxZQUFZLEVBQUU7SUFDbEIsQ0FBQyxDQUFDLENBQ0ROLElBQUksQ0FBQyxRQUFRLEVBQUU7TUFDWkUsV0FBVyxLQUFBQyxNQUFBLENBQU1MLE1BQU0sQ0FBQ00sY0FBYywwQ0FBdUM7TUFDN0VDLFVBQVUsRUFBRSxpQkFBaUI7TUFDN0JDLFlBQVksRUFBRTtJQUNsQixDQUFDLENBQUMsQ0FDRE4sSUFBSSxDQUFDLE9BQU8sRUFBRTtNQUNYRSxXQUFXLEtBQUFDLE1BQUEsQ0FBTUwsTUFBTSxDQUFDTSxjQUFjLHdDQUFxQztNQUMzRUMsVUFBVSxFQUFFLGdCQUFnQjtNQUM1QkMsWUFBWSxFQUFFO0lBQ2xCLENBQUMsQ0FBQyxDQUNETixJQUFJLENBQUMsT0FBTyxFQUFFO01BQ1hFLFdBQVcsS0FBQUMsTUFBQSxDQUFNTCxNQUFNLENBQUNNLGNBQWMsd0NBQXFDO01BQzNFQyxVQUFVLEVBQUUsZ0JBQWdCO01BQzVCQyxZQUFZLEVBQUU7SUFDbEIsQ0FBQyxDQUFDLENBQ0ROLElBQUksQ0FBQyxPQUFPLEVBQUU7TUFDWEUsV0FBVyxLQUFBQyxNQUFBLENBQU1MLE1BQU0sQ0FBQ00sY0FBYyx3Q0FBcUM7TUFDM0VDLFVBQVUsRUFBRSxnQkFBZ0I7TUFDNUJDLFlBQVksRUFBRTtJQUNsQixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7RUFFRmpCLEtBQUssQ0FBQ2dCLFVBQVUsQ0FBQyxTQUFTLEVBQUViLGFBQWEsQ0FBQztBQUFDLEdBeERyQ2UsR0FBRyxLQUFIQSxHQUFHIn0=