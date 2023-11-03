"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var App;
(function (_App) {
  var ng = angular.module('App');
  var AlbumController = /*#__PURE__*/function () {
    function AlbumController(albumService) {
      _classCallCheck(this, AlbumController);
      _defineProperty(this, "isReady", false);
      _defineProperty(this, "data", null);
      _defineProperty(this, "count", 0);
      this.albumService = albumService;
    }
    _createClass(AlbumController, [{
      key: "$onInit",
      value: function $onInit() {
        var _this = this;
        this.columns = ['Title'];
        this.albumService.GetAll().then(function (result) {
          _this.count = Array.isArray(result === null || result === void 0 ? void 0 : result.data) ? result.data.length : 0;
        });
        this.albumService.GetByParams({
          page: 1,
          limit: 10
        }).then(function (result) {
          _this.data = Array.isArray(result === null || result === void 0 ? void 0 : result.data) ? result.data : [];
        });
        setTimeout(function () {
          _this.isReady = _this.count > 0 && _this.data.length > 0;
          console.log(_this.isReady);
        }, 1000);
      }
    }]);
    return AlbumController;
  }();
  AlbumController.$inject = ['AlbumService'];
  ng.controller('albumController', AlbumController);
})(App || (App = {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJuZyIsImFuZ3VsYXIiLCJtb2R1bGUiLCJBbGJ1bUNvbnRyb2xsZXIiLCJhbGJ1bVNlcnZpY2UiLCJfY2xhc3NDYWxsQ2hlY2siLCJfZGVmaW5lUHJvcGVydHkiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIiRvbkluaXQiLCJfdGhpcyIsImNvbHVtbnMiLCJHZXRBbGwiLCJ0aGVuIiwicmVzdWx0IiwiY291bnQiLCJBcnJheSIsImlzQXJyYXkiLCJkYXRhIiwibGVuZ3RoIiwiR2V0QnlQYXJhbXMiLCJwYWdlIiwibGltaXQiLCJzZXRUaW1lb3V0IiwiaXNSZWFkeSIsImNvbnNvbGUiLCJsb2ciLCIkaW5qZWN0IiwiY29udHJvbGxlciIsIkFwcCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9jb250ZW50cy9hbGJ1bS9hbGJ1bS5jb250cm9sbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBBcHAgXHJcbntcclxuICAgIGxldCBuZyA9IGFuZ3VsYXIubW9kdWxlKCdBcHAnKTtcclxuXHJcbiAgICBjbGFzcyBBbGJ1bUNvbnRyb2xsZXIgaW1wbGVtZW50cyBhbmd1bGFyLklDb250cm9sbGVyLCBhbmd1bGFyLklPbkluaXRcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgaXNSZWFkeTogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICAgICAgcHVibGljIGNvbHVtbnM6IHN0cmluZ1tdXHJcbiAgICAgICAgcHVibGljIGRhdGE6IGFueSA9IG51bGxcclxuICAgICAgICBwdWJsaWMgY291bnQ6IG51bWJlciA9IDBcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHByaXZhdGUgYWxidW1TZXJ2aWNlOiBBbGJ1bVNlcnZpY2VcclxuICAgICAgICApIFxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRvbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucyA9IFsnVGl0bGUnXVxyXG4gICAgICAgICAgICB0aGlzLmFsYnVtU2VydmljZS5HZXRBbGwoKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnQgPSBBcnJheS5pc0FycmF5KHJlc3VsdD8uZGF0YSkgPyByZXN1bHQuZGF0YS5sZW5ndGggOiAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuYWxidW1TZXJ2aWNlLkdldEJ5UGFyYW1zKHsgcGFnZTogMSwgbGltaXQ6IDEwIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gQXJyYXkuaXNBcnJheShyZXN1bHQ/LmRhdGEpID8gcmVzdWx0LmRhdGEgOiBbXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRoaXMuY291bnQgPiAwICYmIHRoaXMuZGF0YS5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlzUmVhZHkpXHJcbiAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEFsYnVtQ29udHJvbGxlci4kaW5qZWN0ID0gWydBbGJ1bVNlcnZpY2UnXVxyXG4gICAgbmcuY29udHJvbGxlcignYWxidW1Db250cm9sbGVyJywgQWxidW1Db250cm9sbGVyKTtcclxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7RUFFSSxJQUFJQSxFQUFFLEdBQUdDLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLEtBQUssQ0FBQztFQUFDLElBRXpCQyxlQUFlO0lBT2pCLFNBQUFBLGdCQUNZQyxZQUEwQixFQUV0QztNQUFBQyxlQUFBLE9BQUFGLGVBQUE7TUFBQUcsZUFBQSxrQkFSMEIsS0FBSztNQUFBQSxlQUFBLGVBRVosSUFBSTtNQUFBQSxlQUFBLGdCQUNBLENBQUM7TUFBQSxLQUdaRixZQUEwQixHQUExQkEsWUFBMEI7SUFHdEM7SUFBQ0csWUFBQSxDQUFBSixlQUFBO01BQUFLLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFDLFFBQUEsRUFBZ0I7UUFBQSxJQUFBQyxLQUFBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDUixZQUFZLENBQUNTLE1BQU0sQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxVQUFDQyxNQUFNLEVBQUs7VUFDeENKLEtBQUksQ0FBQ0ssS0FBSyxHQUFHQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0gsTUFBTSxhQUFOQSxNQUFNLHVCQUFOQSxNQUFNLENBQUVJLElBQUksQ0FBQyxHQUFHSixNQUFNLENBQUNJLElBQUksQ0FBQ0MsTUFBTSxHQUFHLENBQUM7UUFDckUsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDaEIsWUFBWSxDQUFDaUIsV0FBVyxDQUFDO1VBQUVDLElBQUksRUFBRSxDQUFDO1VBQUVDLEtBQUssRUFBRTtRQUFHLENBQUMsQ0FBQyxDQUFDVCxJQUFJLENBQUMsVUFBQ0MsTUFBTSxFQUFLO1VBQ25FSixLQUFJLENBQUNRLElBQUksR0FBR0YsS0FBSyxDQUFDQyxPQUFPLENBQUNILE1BQU0sYUFBTkEsTUFBTSx1QkFBTkEsTUFBTSxDQUFFSSxJQUFJLENBQUMsR0FBR0osTUFBTSxDQUFDSSxJQUFJLEdBQUcsRUFBRTtRQUM5RCxDQUFDLENBQUM7UUFDRkssVUFBVSxDQUFDLFlBQU07VUFDYmIsS0FBSSxDQUFDYyxPQUFPLEdBQUdkLEtBQUksQ0FBQ0ssS0FBSyxHQUFHLENBQUMsSUFBSUwsS0FBSSxDQUFDUSxJQUFJLENBQUNDLE1BQU0sR0FBRyxDQUFDO1VBQ3JETSxPQUFPLENBQUNDLEdBQUcsQ0FBQ2hCLEtBQUksQ0FBQ2MsT0FBTyxDQUFDO1FBQzdCLENBQUMsRUFBRSxJQUFJLENBQUM7TUFDWjtJQUFDO0lBQUEsT0FBQXRCLGVBQUE7RUFBQTtFQUdMQSxlQUFlLENBQUN5QixPQUFPLEdBQUcsQ0FBQyxjQUFjLENBQUM7RUFDMUM1QixFQUFFLENBQUM2QixVQUFVLENBQUMsaUJBQWlCLEVBQUUxQixlQUFlLENBQUM7QUFBQyxHQWpDNUMyQixHQUFHLEtBQUhBLEdBQUcifQ==