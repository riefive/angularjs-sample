"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var App;
(function (_App) {
  var ng = angular.module('App');
  var PhotoController = /*#__PURE__*/_createClass(function PhotoController(photoService) {
    var _this = this;
    _classCallCheck(this, PhotoController);
    _defineProperty(this, "data", null);
    _defineProperty(this, "count", 0);
    this.photoService = photoService;
    this.columns = ['Title', 'ThumbnailUrl'];
    this.photoService.GetAll().then(function (result) {
      _this.count = Array.isArray(result === null || result === void 0 ? void 0 : result.data) ? result.data.length : 0;
    });
    this.photoService.GetByParams({
      page: 1,
      limit: 10
    }).then(function (result) {
      _this.data = Array.isArray(result === null || result === void 0 ? void 0 : result.data) ? result.data : [];
    });
  });
  PhotoController.$inject = ['PhotoService'];
  ng.controller('photoController', PhotoController);
})(App || (App = {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJuZyIsImFuZ3VsYXIiLCJtb2R1bGUiLCJQaG90b0NvbnRyb2xsZXIiLCJfY3JlYXRlQ2xhc3MiLCJwaG90b1NlcnZpY2UiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9kZWZpbmVQcm9wZXJ0eSIsImNvbHVtbnMiLCJHZXRBbGwiLCJ0aGVuIiwicmVzdWx0IiwiY291bnQiLCJBcnJheSIsImlzQXJyYXkiLCJkYXRhIiwibGVuZ3RoIiwiR2V0QnlQYXJhbXMiLCJwYWdlIiwibGltaXQiLCIkaW5qZWN0IiwiY29udHJvbGxlciIsIkFwcCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9jb250ZW50cy9waG90by9waG90by5jb250cm9sbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBBcHAgXHJcbntcclxuICAgIGxldCBuZyA9IGFuZ3VsYXIubW9kdWxlKCdBcHAnKTtcclxuXHJcbiAgICBjbGFzcyBQaG90b0NvbnRyb2xsZXIgaW1wbGVtZW50cyBhbmd1bGFyLklDb250cm9sbGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGNvbHVtbnM6IHN0cmluZ1tdXHJcbiAgICAgICAgcHVibGljIGRhdGE6IGFueSA9IG51bGxcclxuICAgICAgICBwdWJsaWMgY291bnQ6IG51bWJlciA9IDBcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHByaXZhdGUgcGhvdG9TZXJ2aWNlOiBQaG90b1NlcnZpY2VcclxuICAgICAgICApIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zID0gWydUaXRsZScsICdUaHVtYm5haWxVcmwnXVxyXG4gICAgICAgICAgICB0aGlzLnBob3RvU2VydmljZS5HZXRBbGwoKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnQgPSBBcnJheS5pc0FycmF5KHJlc3VsdD8uZGF0YSkgPyByZXN1bHQuZGF0YS5sZW5ndGggOiAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMucGhvdG9TZXJ2aWNlLkdldEJ5UGFyYW1zKHsgcGFnZTogMSwgbGltaXQ6IDEwIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gQXJyYXkuaXNBcnJheShyZXN1bHQ/LmRhdGEpID8gcmVzdWx0LmRhdGEgOiBbXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBQaG90b0NvbnRyb2xsZXIuJGluamVjdCA9IFsnUGhvdG9TZXJ2aWNlJ11cclxuICAgIG5nLmNvbnRyb2xsZXIoJ3Bob3RvQ29udHJvbGxlcicsIFBob3RvQ29udHJvbGxlcik7XHJcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0VBRUksSUFBSUEsRUFBRSxHQUFHQyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxLQUFLLENBQUM7RUFBQyxJQUV6QkMsZUFBZSxnQkFBQUMsWUFBQSxDQU1qQixTQUFBRCxnQkFDWUUsWUFBMEIsRUFFdEM7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLGVBQUEsT0FBQUosZUFBQTtJQUFBSyxlQUFBLGVBTm1CLElBQUk7SUFBQUEsZUFBQSxnQkFDQSxDQUFDO0lBQUEsS0FHWkgsWUFBMEIsR0FBMUJBLFlBQTBCO0lBR2xDLElBQUksQ0FBQ0ksT0FBTyxHQUFHLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQztJQUN4QyxJQUFJLENBQUNKLFlBQVksQ0FBQ0ssTUFBTSxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNDLE1BQU0sRUFBSztNQUN4Q04sS0FBSSxDQUFDTyxLQUFLLEdBQUdDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDSCxNQUFNLGFBQU5BLE1BQU0sdUJBQU5BLE1BQU0sQ0FBRUksSUFBSSxDQUFDLEdBQUdKLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDQyxNQUFNLEdBQUcsQ0FBQztJQUNyRSxDQUFDLENBQUM7SUFDRixJQUFJLENBQUNaLFlBQVksQ0FBQ2EsV0FBVyxDQUFDO01BQUVDLElBQUksRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFHLENBQUMsQ0FBQyxDQUFDVCxJQUFJLENBQUMsVUFBQ0MsTUFBTSxFQUFLO01BQ25FTixLQUFJLENBQUNVLElBQUksR0FBR0YsS0FBSyxDQUFDQyxPQUFPLENBQUNILE1BQU0sYUFBTkEsTUFBTSx1QkFBTkEsTUFBTSxDQUFFSSxJQUFJLENBQUMsR0FBR0osTUFBTSxDQUFDSSxJQUFJLEdBQUcsRUFBRTtJQUM5RCxDQUFDLENBQUM7RUFDTixDQUFDO0VBR0xiLGVBQWUsQ0FBQ2tCLE9BQU8sR0FBRyxDQUFDLGNBQWMsQ0FBQztFQUMxQ3JCLEVBQUUsQ0FBQ3NCLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRW5CLGVBQWUsQ0FBQztBQUFDLEdBekI1Q29CLEdBQUcsS0FBSEEsR0FBRyJ9