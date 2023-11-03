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
  var TodoController = /*#__PURE__*/_createClass(function TodoController(todoService) {
    var _this = this;
    _classCallCheck(this, TodoController);
    _defineProperty(this, "data", null);
    _defineProperty(this, "count", 0);
    this.todoService = todoService;
    this.columns = ['Id', 'UserId', 'Title', 'Completed', 'Actions'];
    this.todoService.GetAll().then(function (result) {
      _this.count = Array.isArray(result === null || result === void 0 ? void 0 : result.data) ? result.data.length : 0;
    });
    this.todoService.GetByParams({
      page: 1,
      limit: 10
    }).then(function (result) {
      _this.data = Array.isArray(result === null || result === void 0 ? void 0 : result.data) ? result.data : [];
    });
  });
  TodoController.$inject = ['TodoService'];
  ng.controller('todoController', TodoController);
})(App || (App = {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJuZyIsImFuZ3VsYXIiLCJtb2R1bGUiLCJUb2RvQ29udHJvbGxlciIsIl9jcmVhdGVDbGFzcyIsInRvZG9TZXJ2aWNlIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfZGVmaW5lUHJvcGVydHkiLCJjb2x1bW5zIiwiR2V0QWxsIiwidGhlbiIsInJlc3VsdCIsImNvdW50IiwiQXJyYXkiLCJpc0FycmF5IiwiZGF0YSIsImxlbmd0aCIsIkdldEJ5UGFyYW1zIiwicGFnZSIsImxpbWl0IiwiJGluamVjdCIsImNvbnRyb2xsZXIiLCJBcHAiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvY29udGVudHMvdG9kby90b2RvLmNvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIEFwcCBcclxue1xyXG4gICAgbGV0IG5nID0gYW5ndWxhci5tb2R1bGUoJ0FwcCcpO1xyXG5cclxuICAgIGNsYXNzIFRvZG9Db250cm9sbGVyIGltcGxlbWVudHMgYW5ndWxhci5JQ29udHJvbGxlclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBjb2x1bW5zOiBzdHJpbmdbXVxyXG4gICAgICAgIHB1YmxpYyBkYXRhOiBhbnkgPSBudWxsXHJcbiAgICAgICAgcHVibGljIGNvdW50OiBudW1iZXIgPSAwXHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwcml2YXRlIHRvZG9TZXJ2aWNlOiBUb2RvU2VydmljZVxyXG4gICAgICAgICkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMgPSBbJ0lkJywgJ1VzZXJJZCcsICdUaXRsZScsICdDb21wbGV0ZWQnLCAnQWN0aW9ucyddXHJcbiAgICAgICAgICAgIHRoaXMudG9kb1NlcnZpY2UuR2V0QWxsKCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ID0gQXJyYXkuaXNBcnJheShyZXN1bHQ/LmRhdGEpID8gcmVzdWx0LmRhdGEubGVuZ3RoIDogMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnRvZG9TZXJ2aWNlLkdldEJ5UGFyYW1zKHsgcGFnZTogMSwgbGltaXQ6IDEwIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gQXJyYXkuaXNBcnJheShyZXN1bHQ/LmRhdGEpID8gcmVzdWx0LmRhdGEgOiBbXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBUb2RvQ29udHJvbGxlci4kaW5qZWN0ID0gWydUb2RvU2VydmljZSddXHJcbiAgICBuZy5jb250cm9sbGVyKCd0b2RvQ29udHJvbGxlcicsIFRvZG9Db250cm9sbGVyKTtcclxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7RUFFSSxJQUFJQSxFQUFFLEdBQUdDLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLEtBQUssQ0FBQztFQUFDLElBRXpCQyxjQUFjLGdCQUFBQyxZQUFBLENBTWhCLFNBQUFELGVBQ1lFLFdBQXdCLEVBRXBDO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFKLGNBQUE7SUFBQUssZUFBQSxlQU5tQixJQUFJO0lBQUFBLGVBQUEsZ0JBQ0EsQ0FBQztJQUFBLEtBR1pILFdBQXdCLEdBQXhCQSxXQUF3QjtJQUdoQyxJQUFJLENBQUNJLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLENBQUM7SUFDaEUsSUFBSSxDQUFDSixXQUFXLENBQUNLLE1BQU0sQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxVQUFDQyxNQUFNLEVBQUs7TUFDdkNOLEtBQUksQ0FBQ08sS0FBSyxHQUFHQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0gsTUFBTSxhQUFOQSxNQUFNLHVCQUFOQSxNQUFNLENBQUVJLElBQUksQ0FBQyxHQUFHSixNQUFNLENBQUNJLElBQUksQ0FBQ0MsTUFBTSxHQUFHLENBQUM7SUFDckUsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDWixXQUFXLENBQUNhLFdBQVcsQ0FBQztNQUFFQyxJQUFJLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBRyxDQUFDLENBQUMsQ0FBQ1QsSUFBSSxDQUFDLFVBQUNDLE1BQU0sRUFBSztNQUNsRU4sS0FBSSxDQUFDVSxJQUFJLEdBQUdGLEtBQUssQ0FBQ0MsT0FBTyxDQUFDSCxNQUFNLGFBQU5BLE1BQU0sdUJBQU5BLE1BQU0sQ0FBRUksSUFBSSxDQUFDLEdBQUdKLE1BQU0sQ0FBQ0ksSUFBSSxHQUFHLEVBQUU7SUFDOUQsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUdMYixjQUFjLENBQUNrQixPQUFPLEdBQUcsQ0FBQyxhQUFhLENBQUM7RUFDeENyQixFQUFFLENBQUNzQixVQUFVLENBQUMsZ0JBQWdCLEVBQUVuQixjQUFjLENBQUM7QUFBQyxHQXpCMUNvQixHQUFHLEtBQUhBLEdBQUcifQ==