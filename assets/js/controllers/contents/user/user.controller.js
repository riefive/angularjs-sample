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
  var UserController = /*#__PURE__*/function () {
    function UserController(scope, userService) {
      var _this = this;
      _classCallCheck(this, UserController);
      _defineProperty(this, "data", null);
      _defineProperty(this, "count", 0);
      this.scope = scope;
      this.userService = userService;
      this.columns = ['Name', 'Username', 'Email', 'Address', 'Actions'];
      this.userService.GetAll().then(function (result) {
        _this.count = Array.isArray(result === null || result === void 0 ? void 0 : result.data) ? result.data.length : 0;
      });
      this.userService.GetByParams({
        page: 1,
        limit: 10
      }).then(function (result) {
        _this.data = Array.isArray(result === null || result === void 0 ? void 0 : result.data) ? result.data : [];
      });
    }
    _createClass(UserController, [{
      key: "GetDisplayStreet",
      value: function GetDisplayStreet(address) {
        return address !== null && address !== void 0 && address.street ? "".concat(address === null || address === void 0 ? void 0 : address.street, ", ").concat(address === null || address === void 0 ? void 0 : address.city, " - ").concat(address.zipcode) : '-';
      }
    }]);
    return UserController;
  }();
  UserController.$inject = ['$scope', 'UserService'];
  ng.controller('userController', UserController);
})(App || (App = {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJuZyIsImFuZ3VsYXIiLCJtb2R1bGUiLCJVc2VyQ29udHJvbGxlciIsInNjb3BlIiwidXNlclNlcnZpY2UiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9kZWZpbmVQcm9wZXJ0eSIsImNvbHVtbnMiLCJHZXRBbGwiLCJ0aGVuIiwicmVzdWx0IiwiY291bnQiLCJBcnJheSIsImlzQXJyYXkiLCJkYXRhIiwibGVuZ3RoIiwiR2V0QnlQYXJhbXMiLCJwYWdlIiwibGltaXQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIkdldERpc3BsYXlTdHJlZXQiLCJhZGRyZXNzIiwic3RyZWV0IiwiY29uY2F0IiwiY2l0eSIsInppcGNvZGUiLCIkaW5qZWN0IiwiY29udHJvbGxlciIsIkFwcCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9jb250ZW50cy91c2VyL3VzZXIuY29udHJvbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgQXBwIFxyXG57XHJcbiAgICBsZXQgbmcgPSBhbmd1bGFyLm1vZHVsZSgnQXBwJyk7XHJcblxyXG4gICAgY2xhc3MgVXNlckNvbnRyb2xsZXIgaW1wbGVtZW50cyBhbmd1bGFyLklDb250cm9sbGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGNvbHVtbnM6IHN0cmluZ1tdXHJcbiAgICAgICAgcHVibGljIGRhdGE6IGFueSA9IG51bGxcclxuICAgICAgICBwdWJsaWMgY291bnQ6IG51bWJlciA9IDBcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHByaXZhdGUgc2NvcGU6IGFuZ3VsYXIuSVNjb3BlLFxyXG4gICAgICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZVxyXG4gICAgICAgICkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMgPSBbJ05hbWUnLCAnVXNlcm5hbWUnLCAnRW1haWwnLCAnQWRkcmVzcycsICdBY3Rpb25zJ11cclxuICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5HZXRBbGwoKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnQgPSBBcnJheS5pc0FycmF5KHJlc3VsdD8uZGF0YSkgPyByZXN1bHQuZGF0YS5sZW5ndGggOiAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UuR2V0QnlQYXJhbXMoeyBwYWdlOiAxLCBsaW1pdDogMTAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBBcnJheS5pc0FycmF5KHJlc3VsdD8uZGF0YSkgPyByZXN1bHQuZGF0YSA6IFtdXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHZXREaXNwbGF5U3RyZWV0KGFkZHJlc3M6IGFueSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWRkcmVzcz8uc3RyZWV0ID8gYCR7YWRkcmVzcz8uc3RyZWV0fSwgJHthZGRyZXNzPy5jaXR5fSAtICR7YWRkcmVzcy56aXBjb2RlfWAgOiAnLSdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgVXNlckNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJ1VzZXJTZXJ2aWNlJ11cclxuICAgIG5nLmNvbnRyb2xsZXIoJ3VzZXJDb250cm9sbGVyJywgVXNlckNvbnRyb2xsZXIpO1xyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztFQUVJLElBQUlBLEVBQUUsR0FBR0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsS0FBSyxDQUFDO0VBQUMsSUFFekJDLGNBQWM7SUFNaEIsU0FBQUEsZUFDWUMsS0FBcUIsRUFDckJDLFdBQXdCLEVBRXBDO01BQUEsSUFBQUMsS0FBQTtNQUFBQyxlQUFBLE9BQUFKLGNBQUE7TUFBQUssZUFBQSxlQVBtQixJQUFJO01BQUFBLGVBQUEsZ0JBQ0EsQ0FBQztNQUFBLEtBR1pKLEtBQXFCLEdBQXJCQSxLQUFxQjtNQUFBLEtBQ3JCQyxXQUF3QixHQUF4QkEsV0FBd0I7TUFHaEMsSUFBSSxDQUFDSSxPQUFPLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO01BQ2xFLElBQUksQ0FBQ0osV0FBVyxDQUFDSyxNQUFNLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsVUFBQ0MsTUFBTSxFQUFLO1FBQ3ZDTixLQUFJLENBQUNPLEtBQUssR0FBR0MsS0FBSyxDQUFDQyxPQUFPLENBQUNILE1BQU0sYUFBTkEsTUFBTSx1QkFBTkEsTUFBTSxDQUFFSSxJQUFJLENBQUMsR0FBR0osTUFBTSxDQUFDSSxJQUFJLENBQUNDLE1BQU0sR0FBRyxDQUFDO01BQ3JFLENBQUMsQ0FBQztNQUNGLElBQUksQ0FBQ1osV0FBVyxDQUFDYSxXQUFXLENBQUM7UUFBRUMsSUFBSSxFQUFFLENBQUM7UUFBRUMsS0FBSyxFQUFFO01BQUcsQ0FBQyxDQUFDLENBQUNULElBQUksQ0FBQyxVQUFDQyxNQUFNLEVBQUs7UUFDbEVOLEtBQUksQ0FBQ1UsSUFBSSxHQUFHRixLQUFLLENBQUNDLE9BQU8sQ0FBQ0gsTUFBTSxhQUFOQSxNQUFNLHVCQUFOQSxNQUFNLENBQUVJLElBQUksQ0FBQyxHQUFHSixNQUFNLENBQUNJLElBQUksR0FBRyxFQUFFO01BQzlELENBQUMsQ0FBQztJQUNOO0lBQUNLLFlBQUEsQ0FBQWxCLGNBQUE7TUFBQW1CLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFDLGlCQUFpQkMsT0FBWSxFQUFFO1FBQzNCLE9BQU9BLE9BQU8sYUFBUEEsT0FBTyxlQUFQQSxPQUFPLENBQUVDLE1BQU0sTUFBQUMsTUFBQSxDQUFNRixPQUFPLGFBQVBBLE9BQU8sdUJBQVBBLE9BQU8sQ0FBRUMsTUFBTSxRQUFBQyxNQUFBLENBQUtGLE9BQU8sYUFBUEEsT0FBTyx1QkFBUEEsT0FBTyxDQUFFRyxJQUFJLFNBQUFELE1BQUEsQ0FBTUYsT0FBTyxDQUFDSSxPQUFPLElBQUssR0FBRztNQUM5RjtJQUFDO0lBQUEsT0FBQTFCLGNBQUE7RUFBQTtFQUdMQSxjQUFjLENBQUMyQixPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDO0VBQ2xEOUIsRUFBRSxDQUFDK0IsVUFBVSxDQUFDLGdCQUFnQixFQUFFNUIsY0FBYyxDQUFDO0FBQUMsR0E5QjFDNkIsR0FBRyxLQUFIQSxHQUFHIn0=