"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var App;
(function (_App) {
  var ngApp = angular.module('App', ['TplMainModule', 'AlbumServiceModule', 'CommentServiceModule', 'PhotoServiceModule', 'PostServiceModule', 'TodoServiceModule', 'UserServiceModule', 'ngRoute']);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJuZ0FwcCIsImFuZ3VsYXIiLCJtb2R1bGUiLCJBcHBDb250cm9sbGVyIiwiX2NyZWF0ZUNsYXNzIiwic2NvcGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJfQXBwIiwiJGluamVjdCIsImNvbmZpZyIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInJlZGlyZWN0VG8iLCJ0ZW1wbGF0ZVVybCIsImNvbmNhdCIsImNvbnRyb2xsZXJQYXRoIiwiY29udHJvbGxlciIsImNvbnRyb2xsZXJBcyIsIkFwcCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9hcHAuY29udHJvbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgQXBwIHtcclxuICAgIGNvbnN0IG5nQXBwID0gYW5ndWxhci5tb2R1bGUoJ0FwcCcsIFtcclxuICAgICAgICAnVHBsTWFpbk1vZHVsZScsXHJcbiAgICAgICAgJ0FsYnVtU2VydmljZU1vZHVsZScsXHJcbiAgICAgICAgJ0NvbW1lbnRTZXJ2aWNlTW9kdWxlJyxcclxuICAgICAgICAnUGhvdG9TZXJ2aWNlTW9kdWxlJyxcclxuICAgICAgICAnUG9zdFNlcnZpY2VNb2R1bGUnLFxyXG4gICAgICAgICdUb2RvU2VydmljZU1vZHVsZScsXHJcbiAgICAgICAgJ1VzZXJTZXJ2aWNlTW9kdWxlJywgXHJcbiAgICAgICAgJ25nUm91dGUnXHJcbiAgICBdKVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBBcHBDb250cm9sbGVyIGltcGxlbWVudHMgYW5ndWxhci5JQ29udHJvbGxlclxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwcml2YXRlIHNjb3BlOiBhbmd1bGFyLklTY29wZSwgXHJcbiAgICAgICAgKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEFwcENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJ107XHJcblxyXG4gICAgbmdBcHAuY29uZmlnKGZ1bmN0aW9uKCRyb3V0ZVByb3ZpZGVyOiBhbmd1bGFyLnJvdXRlLklSb3V0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHJvdXRlUHJvdmlkZXJcclxuICAgICAgICAud2hlbignLycsIHtcclxuICAgICAgICAgICAgcmVkaXJlY3RUbzogJy9wb3N0J1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLndoZW4oJy9sb2dpbicsIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmwgOiBgJHtjb25maWcuY29udHJvbGxlclBhdGh9L2xvZ2luL2xvZ2luLmNvbnRyb2xsZXIuaHRtbGAsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdsb2dpbkNvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC53aGVuKCcvYWxidW0nLCB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsIDogYCR7Y29uZmlnLmNvbnRyb2xsZXJQYXRofS9jb250ZW50cy9hbGJ1bS9hbGJ1bS5jb250cm9sbGVyLmh0bWxgLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnYWxidW1Db250cm9sbGVyJyxcclxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICAgICAgfSlcclxuICAgICAgICAud2hlbignL2NvbW1lbnQnLCB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsIDogYCR7Y29uZmlnLmNvbnRyb2xsZXJQYXRofS9jb250ZW50cy9jb21tZW50L2NvbW1lbnQuY29udHJvbGxlci5odG1sYCxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ2NvbW1lbnRDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICAgICAgfSlcclxuICAgICAgICAud2hlbignL3Bob3RvJywge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybCA6IGAke2NvbmZpZy5jb250cm9sbGVyUGF0aH0vY29udGVudHMvcGhvdG8vcGhvdG8uY29udHJvbGxlci5odG1sYCxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ3Bob3RvQ29udHJvbGxlcicsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLndoZW4oJy9wb3N0Jywge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybCA6IGAke2NvbmZpZy5jb250cm9sbGVyUGF0aH0vY29udGVudHMvcG9zdC9wb3N0LmNvbnRyb2xsZXIuaHRtbGAsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdwb3N0Q29udHJvbGxlcicsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLndoZW4oJy90b2RvJywge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybCA6IGAke2NvbmZpZy5jb250cm9sbGVyUGF0aH0vY29udGVudHMvdG9kby90b2RvLmNvbnRyb2xsZXIuaHRtbGAsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICd0b2RvQ29udHJvbGxlcicsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLndoZW4oJy91c2VyJywge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybCA6IGAke2NvbmZpZy5jb250cm9sbGVyUGF0aH0vY29udGVudHMvdXNlci91c2VyLmNvbnRyb2xsZXIuaHRtbGAsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICd1c2VyQ29udHJvbGxlcicsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBuZ0FwcC5jb250cm9sbGVyKCdhcHBDdHJsJywgQXBwQ29udHJvbGxlcik7XHJcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7RUFDSSxJQUFNQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUNoQyxlQUFlLEVBQ2Ysb0JBQW9CLEVBQ3BCLHNCQUFzQixFQUN0QixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsU0FBUyxDQUNaLENBQUM7RUFBQSxJQUVXQyxhQUFhLGdCQUFBQyxZQUFBLENBRXRCLFNBQUFELGNBQ1lFLEtBQXFCLEVBRWpDO0lBQUFDLGVBQUEsT0FBQUgsYUFBQTtJQUFBLEtBRllFLEtBQXFCLEdBQXJCQSxLQUFxQjtFQUdqQyxDQUFDO0VBQUFFLElBQUEsQ0FBQUosYUFBQSxHQUFBQSxhQUFBO0VBR0xBLGFBQWEsQ0FBQ0ssT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDO0VBRWxDUixLQUFLLENBQUNTLE1BQU0sQ0FBQyxVQUFTQyxjQUE0QyxFQUFFO0lBQ2hFQSxjQUFjLENBQ2JDLElBQUksQ0FBQyxHQUFHLEVBQUU7TUFDUEMsVUFBVSxFQUFFO0lBQ2hCLENBQUMsQ0FBQyxDQUNERCxJQUFJLENBQUMsUUFBUSxFQUFFO01BQ1pFLFdBQVcsS0FBQUMsTUFBQSxDQUFNTCxNQUFNLENBQUNNLGNBQWMsaUNBQThCO01BQ3BFQyxVQUFVLEVBQUUsaUJBQWlCO01BQzdCQyxZQUFZLEVBQUU7SUFDbEIsQ0FBQyxDQUFDLENBQ0ROLElBQUksQ0FBQyxRQUFRLEVBQUU7TUFDWkUsV0FBVyxLQUFBQyxNQUFBLENBQU1MLE1BQU0sQ0FBQ00sY0FBYywwQ0FBdUM7TUFDN0VDLFVBQVUsRUFBRSxpQkFBaUI7TUFDN0JDLFlBQVksRUFBRTtJQUNsQixDQUFDLENBQUMsQ0FDRE4sSUFBSSxDQUFDLFVBQVUsRUFBRTtNQUNkRSxXQUFXLEtBQUFDLE1BQUEsQ0FBTUwsTUFBTSxDQUFDTSxjQUFjLDhDQUEyQztNQUNqRkMsVUFBVSxFQUFFLG1CQUFtQjtNQUMvQkMsWUFBWSxFQUFFO0lBQ2xCLENBQUMsQ0FBQyxDQUNETixJQUFJLENBQUMsUUFBUSxFQUFFO01BQ1pFLFdBQVcsS0FBQUMsTUFBQSxDQUFNTCxNQUFNLENBQUNNLGNBQWMsMENBQXVDO01BQzdFQyxVQUFVLEVBQUUsaUJBQWlCO01BQzdCQyxZQUFZLEVBQUU7SUFDbEIsQ0FBQyxDQUFDLENBQ0ROLElBQUksQ0FBQyxPQUFPLEVBQUU7TUFDWEUsV0FBVyxLQUFBQyxNQUFBLENBQU1MLE1BQU0sQ0FBQ00sY0FBYyx3Q0FBcUM7TUFDM0VDLFVBQVUsRUFBRSxnQkFBZ0I7TUFDNUJDLFlBQVksRUFBRTtJQUNsQixDQUFDLENBQUMsQ0FDRE4sSUFBSSxDQUFDLE9BQU8sRUFBRTtNQUNYRSxXQUFXLEtBQUFDLE1BQUEsQ0FBTUwsTUFBTSxDQUFDTSxjQUFjLHdDQUFxQztNQUMzRUMsVUFBVSxFQUFFLGdCQUFnQjtNQUM1QkMsWUFBWSxFQUFFO0lBQ2xCLENBQUMsQ0FBQyxDQUNETixJQUFJLENBQUMsT0FBTyxFQUFFO01BQ1hFLFdBQVcsS0FBQUMsTUFBQSxDQUFNTCxNQUFNLENBQUNNLGNBQWMsd0NBQXFDO01BQzNFQyxVQUFVLEVBQUUsZ0JBQWdCO01BQzVCQyxZQUFZLEVBQUU7SUFDbEIsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0VBRUZqQixLQUFLLENBQUNnQixVQUFVLENBQUMsU0FBUyxFQUFFYixhQUFhLENBQUM7QUFBQyxHQWpFckNlLEdBQUcsS0FBSEEsR0FBRyJ9