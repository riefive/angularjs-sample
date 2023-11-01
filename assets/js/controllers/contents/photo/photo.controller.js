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
  var PhotoController = /*#__PURE__*/function () {
    function PhotoController(photoService) {
      _classCallCheck(this, PhotoController);
      this.photoService = photoService;
    }
    _createClass(PhotoController, [{
      key: "$onInit",
      value: function $onInit() {
        this.photoService.GetAll().then(function (result) {
          console.log(result);
        });
      }
    }]);
    return PhotoController;
  }();
  PhotoController.$inject = ['PhotoService'];
  ng.controller('photoController', PhotoController);
})(App || (App = {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJuZyIsImFuZ3VsYXIiLCJtb2R1bGUiLCJQaG90b0NvbnRyb2xsZXIiLCJwaG90b1NlcnZpY2UiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIiRvbkluaXQiLCJHZXRBbGwiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsIiRpbmplY3QiLCJjb250cm9sbGVyIiwiQXBwIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2NvbnRlbnRzL3Bob3RvL3Bob3RvLmNvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIEFwcCBcclxue1xyXG4gICAgbGV0IG5nID0gYW5ndWxhci5tb2R1bGUoJ0FwcCcpO1xyXG5cclxuICAgIGNsYXNzIFBob3RvQ29udHJvbGxlciBpbXBsZW1lbnRzIGFuZ3VsYXIuSUNvbnRyb2xsZXIsIGFuZ3VsYXIuSU9uSW5pdFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwcml2YXRlIHBob3RvU2VydmljZTogUGhvdG9TZXJ2aWNlXHJcbiAgICAgICAgKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkb25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLnBob3RvU2VydmljZS5HZXRBbGwoKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgUGhvdG9Db250cm9sbGVyLiRpbmplY3QgPSBbJ1Bob3RvU2VydmljZSddXHJcbiAgICBuZy5jb250cm9sbGVyKCdwaG90b0NvbnRyb2xsZXInLCBQaG90b0NvbnRyb2xsZXIpO1xyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0VBRUksSUFBSUEsRUFBRSxHQUFHQyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxLQUFLLENBQUM7RUFBQyxJQUV6QkMsZUFBZTtJQUVqQixTQUFBQSxnQkFDWUMsWUFBMEIsRUFFdEM7TUFBQUMsZUFBQSxPQUFBRixlQUFBO01BQUEsS0FGWUMsWUFBMEIsR0FBMUJBLFlBQTBCO0lBR3RDO0lBQUNFLFlBQUEsQ0FBQUgsZUFBQTtNQUFBSSxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBQyxRQUFBLEVBQWdCO1FBQ1osSUFBSSxDQUFDTCxZQUFZLENBQUNNLE1BQU0sQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxVQUFDQyxNQUFNLEVBQUs7VUFDeENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNLENBQUM7UUFDdkIsQ0FBQyxDQUFDO01BQ047SUFBQztJQUFBLE9BQUFULGVBQUE7RUFBQTtFQUdMQSxlQUFlLENBQUNZLE9BQU8sR0FBRyxDQUFDLGNBQWMsQ0FBQztFQUMxQ2YsRUFBRSxDQUFDZ0IsVUFBVSxDQUFDLGlCQUFpQixFQUFFYixlQUFlLENBQUM7QUFBQyxHQXBCNUNjLEdBQUcsS0FBSEEsR0FBRyJ9