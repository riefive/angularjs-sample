"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var App;
(function (_App) {
  var ng = angular.module('App');
  var loginController = /*#__PURE__*/function () {
    function loginController() {
      _classCallCheck(this, loginController);
    }
    _createClass(loginController, [{
      key: "OnSignIn",
      value: function OnSignIn() {
        setTimeout(function () {
          location.href = '#!/';
        }, 10);
      }
    }]);
    return loginController;
  }();
  ng.controller('loginController', loginController);
})(App || (App = {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJuZyIsImFuZ3VsYXIiLCJtb2R1bGUiLCJsb2dpbkNvbnRyb2xsZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIk9uU2lnbkluIiwic2V0VGltZW91dCIsImxvY2F0aW9uIiwiaHJlZiIsImNvbnRyb2xsZXIiLCJBcHAiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvbG9naW4vbG9naW4uY29udHJvbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgQXBwIFxyXG57XHJcbiAgICBsZXQgbmcgPSBhbmd1bGFyLm1vZHVsZSgnQXBwJyk7XHJcblxyXG4gICAgY2xhc3MgbG9naW5Db250cm9sbGVyIGltcGxlbWVudHMgYW5ndWxhci5JQ29udHJvbGxlclxyXG4gICAge1xyXG4gICAgICAgIE9uU2lnbkluKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICcjIS8nXHJcbiAgICAgICAgICAgIH0sIDEwKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZy5jb250cm9sbGVyKCdsb2dpbkNvbnRyb2xsZXInLCBsb2dpbkNvbnRyb2xsZXIpO1xyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0VBRUksSUFBSUEsRUFBRSxHQUFHQyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxLQUFLLENBQUM7RUFBQyxJQUV6QkMsZUFBZTtJQUFBLFNBQUFBLGdCQUFBO01BQUFDLGVBQUEsT0FBQUQsZUFBQTtJQUFBO0lBQUFFLFlBQUEsQ0FBQUYsZUFBQTtNQUFBRyxHQUFBO01BQUFDLEtBQUEsRUFFakIsU0FBQUMsU0FBQSxFQUNBO1FBQ0lDLFVBQVUsQ0FBQyxZQUFNO1VBQ2JDLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLEtBQUs7UUFDekIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztNQUNWO0lBQUM7SUFBQSxPQUFBUixlQUFBO0VBQUE7RUFHTEgsRUFBRSxDQUFDWSxVQUFVLENBQUMsaUJBQWlCLEVBQUVULGVBQWUsQ0FBQztBQUFDLEdBZDVDVSxHQUFHLEtBQUhBLEdBQUcifQ==