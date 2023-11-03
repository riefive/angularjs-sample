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
  var CommentController = /*#__PURE__*/_createClass(function CommentController(commentService) {
    var _this = this;
    _classCallCheck(this, CommentController);
    _defineProperty(this, "data", null);
    _defineProperty(this, "count", 0);
    this.commentService = commentService;
    this.columns = ['Name', 'Email'];
    this.commentService.GetAll().then(function (result) {
      _this.count = Array.isArray(result === null || result === void 0 ? void 0 : result.data) ? result.data.length : 0;
    });
    this.commentService.GetByParams({
      page: 1,
      limit: 10
    }).then(function (result) {
      _this.data = Array.isArray(result === null || result === void 0 ? void 0 : result.data) ? result.data : [];
    });
  });
  CommentController.$inject = ['CommentService'];
  ng.controller('commentController', CommentController);
})(App || (App = {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJuZyIsImFuZ3VsYXIiLCJtb2R1bGUiLCJDb21tZW50Q29udHJvbGxlciIsIl9jcmVhdGVDbGFzcyIsImNvbW1lbnRTZXJ2aWNlIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfZGVmaW5lUHJvcGVydHkiLCJjb2x1bW5zIiwiR2V0QWxsIiwidGhlbiIsInJlc3VsdCIsImNvdW50IiwiQXJyYXkiLCJpc0FycmF5IiwiZGF0YSIsImxlbmd0aCIsIkdldEJ5UGFyYW1zIiwicGFnZSIsImxpbWl0IiwiJGluamVjdCIsImNvbnRyb2xsZXIiLCJBcHAiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvY29udGVudHMvY29tbWVudC9jb21tZW50LmNvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIEFwcCBcclxue1xyXG4gICAgbGV0IG5nID0gYW5ndWxhci5tb2R1bGUoJ0FwcCcpO1xyXG5cclxuICAgIGNsYXNzIENvbW1lbnRDb250cm9sbGVyIGltcGxlbWVudHMgYW5ndWxhci5JQ29udHJvbGxlclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBjb2x1bW5zOiBzdHJpbmdbXVxyXG4gICAgICAgIHB1YmxpYyBkYXRhOiBhbnkgPSBudWxsXHJcbiAgICAgICAgcHVibGljIGNvdW50OiBudW1iZXIgPSAwXHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwcml2YXRlIGNvbW1lbnRTZXJ2aWNlOiBDb21tZW50U2VydmljZVxyXG4gICAgICAgICkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMgPSBbJ05hbWUnLCAnRW1haWwnXVxyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRTZXJ2aWNlLkdldEFsbCgpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudCA9IEFycmF5LmlzQXJyYXkocmVzdWx0Py5kYXRhKSA/IHJlc3VsdC5kYXRhLmxlbmd0aCA6IDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5jb21tZW50U2VydmljZS5HZXRCeVBhcmFtcyh7IHBhZ2U6IDEsIGxpbWl0OiAxMCB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IEFycmF5LmlzQXJyYXkocmVzdWx0Py5kYXRhKSA/IHJlc3VsdC5kYXRhIDogW11cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQ29tbWVudENvbnRyb2xsZXIuJGluamVjdCA9IFsnQ29tbWVudFNlcnZpY2UnXVxyXG4gICAgbmcuY29udHJvbGxlcignY29tbWVudENvbnRyb2xsZXInLCBDb21tZW50Q29udHJvbGxlcik7XHJcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0VBRUksSUFBSUEsRUFBRSxHQUFHQyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxLQUFLLENBQUM7RUFBQyxJQUV6QkMsaUJBQWlCLGdCQUFBQyxZQUFBLENBTW5CLFNBQUFELGtCQUNZRSxjQUE4QixFQUUxQztJQUFBLElBQUFDLEtBQUE7SUFBQUMsZUFBQSxPQUFBSixpQkFBQTtJQUFBSyxlQUFBLGVBTm1CLElBQUk7SUFBQUEsZUFBQSxnQkFDQSxDQUFDO0lBQUEsS0FHWkgsY0FBOEIsR0FBOUJBLGNBQThCO0lBR3RDLElBQUksQ0FBQ0ksT0FBTyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQztJQUNoQyxJQUFJLENBQUNKLGNBQWMsQ0FBQ0ssTUFBTSxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNDLE1BQU0sRUFBSztNQUMxQ04sS0FBSSxDQUFDTyxLQUFLLEdBQUdDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDSCxNQUFNLGFBQU5BLE1BQU0sdUJBQU5BLE1BQU0sQ0FBRUksSUFBSSxDQUFDLEdBQUdKLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDQyxNQUFNLEdBQUcsQ0FBQztJQUNyRSxDQUFDLENBQUM7SUFDRixJQUFJLENBQUNaLGNBQWMsQ0FBQ2EsV0FBVyxDQUFDO01BQUVDLElBQUksRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFHLENBQUMsQ0FBQyxDQUFDVCxJQUFJLENBQUMsVUFBQ0MsTUFBTSxFQUFLO01BQ3JFTixLQUFJLENBQUNVLElBQUksR0FBR0YsS0FBSyxDQUFDQyxPQUFPLENBQUNILE1BQU0sYUFBTkEsTUFBTSx1QkFBTkEsTUFBTSxDQUFFSSxJQUFJLENBQUMsR0FBR0osTUFBTSxDQUFDSSxJQUFJLEdBQUcsRUFBRTtJQUM5RCxDQUFDLENBQUM7RUFDTixDQUFDO0VBR0xiLGlCQUFpQixDQUFDa0IsT0FBTyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7RUFDOUNyQixFQUFFLENBQUNzQixVQUFVLENBQUMsbUJBQW1CLEVBQUVuQixpQkFBaUIsQ0FBQztBQUFDLEdBekJoRG9CLEdBQUcsS0FBSEEsR0FBRyJ9