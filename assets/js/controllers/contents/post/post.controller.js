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
  var PostController = /*#__PURE__*/_createClass(function PostController(postService) {
    var _this = this;
    _classCallCheck(this, PostController);
    _defineProperty(this, "data", null);
    _defineProperty(this, "count", 0);
    this.postService = postService;
    this.columns = ['Id', 'UserId', 'Title', 'Actions'];
    this.postService.GetAll().then(function (result) {
      _this.count = Array.isArray(result === null || result === void 0 ? void 0 : result.data) ? result.data.length : 0;
    });
    this.postService.GetByParams({
      page: 1,
      limit: 10
    }).then(function (result) {
      _this.data = Array.isArray(result === null || result === void 0 ? void 0 : result.data) ? result.data : [];
    });
  });
  PostController.$inject = ['PostService'];
  ng.controller('postController', PostController);
})(App || (App = {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJuZyIsImFuZ3VsYXIiLCJtb2R1bGUiLCJQb3N0Q29udHJvbGxlciIsIl9jcmVhdGVDbGFzcyIsInBvc3RTZXJ2aWNlIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfZGVmaW5lUHJvcGVydHkiLCJjb2x1bW5zIiwiR2V0QWxsIiwidGhlbiIsInJlc3VsdCIsImNvdW50IiwiQXJyYXkiLCJpc0FycmF5IiwiZGF0YSIsImxlbmd0aCIsIkdldEJ5UGFyYW1zIiwicGFnZSIsImxpbWl0IiwiJGluamVjdCIsImNvbnRyb2xsZXIiLCJBcHAiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvY29udGVudHMvcG9zdC9wb3N0LmNvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIEFwcCBcclxue1xyXG4gICAgbGV0IG5nID0gYW5ndWxhci5tb2R1bGUoJ0FwcCcpO1xyXG5cclxuICAgIGNsYXNzIFBvc3RDb250cm9sbGVyIGltcGxlbWVudHMgYW5ndWxhci5JQ29udHJvbGxlclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBjb2x1bW5zOiBzdHJpbmdbXVxyXG4gICAgICAgIHB1YmxpYyBkYXRhOiBhbnkgPSBudWxsXHJcbiAgICAgICAgcHVibGljIGNvdW50OiBudW1iZXIgPSAwXHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwcml2YXRlIHBvc3RTZXJ2aWNlOiBQb3N0U2VydmljZVxyXG4gICAgICAgICkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMgPSBbJ0lkJywgJ1VzZXJJZCcsICdUaXRsZScsICdBY3Rpb25zJ11cclxuICAgICAgICAgICAgdGhpcy5wb3N0U2VydmljZS5HZXRBbGwoKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnQgPSBBcnJheS5pc0FycmF5KHJlc3VsdD8uZGF0YSkgPyByZXN1bHQuZGF0YS5sZW5ndGggOiAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMucG9zdFNlcnZpY2UuR2V0QnlQYXJhbXMoeyBwYWdlOiAxLCBsaW1pdDogMTAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBBcnJheS5pc0FycmF5KHJlc3VsdD8uZGF0YSkgPyByZXN1bHQuZGF0YSA6IFtdXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFBvc3RDb250cm9sbGVyLiRpbmplY3QgPSBbJ1Bvc3RTZXJ2aWNlJ11cclxuICAgIG5nLmNvbnRyb2xsZXIoJ3Bvc3RDb250cm9sbGVyJywgUG9zdENvbnRyb2xsZXIpO1xyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztFQUVJLElBQUlBLEVBQUUsR0FBR0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsS0FBSyxDQUFDO0VBQUMsSUFFekJDLGNBQWMsZ0JBQUFDLFlBQUEsQ0FNaEIsU0FBQUQsZUFDWUUsV0FBd0IsRUFFcEM7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLGVBQUEsT0FBQUosY0FBQTtJQUFBSyxlQUFBLGVBTm1CLElBQUk7SUFBQUEsZUFBQSxnQkFDQSxDQUFDO0lBQUEsS0FHWkgsV0FBd0IsR0FBeEJBLFdBQXdCO0lBR2hDLElBQUksQ0FBQ0ksT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ25ELElBQUksQ0FBQ0osV0FBVyxDQUFDSyxNQUFNLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsVUFBQ0MsTUFBTSxFQUFLO01BQ3ZDTixLQUFJLENBQUNPLEtBQUssR0FBR0MsS0FBSyxDQUFDQyxPQUFPLENBQUNILE1BQU0sYUFBTkEsTUFBTSx1QkFBTkEsTUFBTSxDQUFFSSxJQUFJLENBQUMsR0FBR0osTUFBTSxDQUFDSSxJQUFJLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ3JFLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQ1osV0FBVyxDQUFDYSxXQUFXLENBQUM7TUFBRUMsSUFBSSxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQUcsQ0FBQyxDQUFDLENBQUNULElBQUksQ0FBQyxVQUFDQyxNQUFNLEVBQUs7TUFDbEVOLEtBQUksQ0FBQ1UsSUFBSSxHQUFHRixLQUFLLENBQUNDLE9BQU8sQ0FBQ0gsTUFBTSxhQUFOQSxNQUFNLHVCQUFOQSxNQUFNLENBQUVJLElBQUksQ0FBQyxHQUFHSixNQUFNLENBQUNJLElBQUksR0FBRyxFQUFFO0lBQzlELENBQUMsQ0FBQztFQUNOLENBQUM7RUFHTGIsY0FBYyxDQUFDa0IsT0FBTyxHQUFHLENBQUMsYUFBYSxDQUFDO0VBQ3hDckIsRUFBRSxDQUFDc0IsVUFBVSxDQUFDLGdCQUFnQixFQUFFbkIsY0FBYyxDQUFDO0FBQUMsR0F6QjFDb0IsR0FBRyxLQUFIQSxHQUFHIn0=