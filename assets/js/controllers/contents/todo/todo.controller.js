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
  var TodoController = /*#__PURE__*/function () {
    function TodoController(todoService) {
      _classCallCheck(this, TodoController);
      this.todoService = todoService;
    }
    _createClass(TodoController, [{
      key: "$onInit",
      value: function $onInit() {
        this.todoService.GetAll().then(function (result) {
          console.log(result);
        });
      }
    }]);
    return TodoController;
  }();
  TodoController.$inject = ['TodoService'];
  ng.controller('todoController', TodoController);
})(App || (App = {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJuZyIsImFuZ3VsYXIiLCJtb2R1bGUiLCJUb2RvQ29udHJvbGxlciIsInRvZG9TZXJ2aWNlIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCIkb25Jbml0IiwiR2V0QWxsIiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCIkaW5qZWN0IiwiY29udHJvbGxlciIsIkFwcCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9jb250ZW50cy90b2RvL3RvZG8uY29udHJvbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgQXBwIFxyXG57XHJcbiAgICBsZXQgbmcgPSBhbmd1bGFyLm1vZHVsZSgnQXBwJyk7XHJcblxyXG4gICAgY2xhc3MgVG9kb0NvbnRyb2xsZXIgaW1wbGVtZW50cyBhbmd1bGFyLklDb250cm9sbGVyLCBhbmd1bGFyLklPbkluaXRcclxuICAgIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHJpdmF0ZSB0b2RvU2VydmljZTogVG9kb1NlcnZpY2VcclxuICAgICAgICApIFxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRvbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMudG9kb1NlcnZpY2UuR2V0QWxsKCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFRvZG9Db250cm9sbGVyLiRpbmplY3QgPSBbJ1RvZG9TZXJ2aWNlJ11cclxuICAgIG5nLmNvbnRyb2xsZXIoJ3RvZG9Db250cm9sbGVyJywgVG9kb0NvbnRyb2xsZXIpO1xyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0VBRUksSUFBSUEsRUFBRSxHQUFHQyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxLQUFLLENBQUM7RUFBQyxJQUV6QkMsY0FBYztJQUVoQixTQUFBQSxlQUNZQyxXQUF3QixFQUVwQztNQUFBQyxlQUFBLE9BQUFGLGNBQUE7TUFBQSxLQUZZQyxXQUF3QixHQUF4QkEsV0FBd0I7SUFHcEM7SUFBQ0UsWUFBQSxDQUFBSCxjQUFBO01BQUFJLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFDLFFBQUEsRUFBZ0I7UUFDWixJQUFJLENBQUNMLFdBQVcsQ0FBQ00sTUFBTSxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNDLE1BQU0sRUFBSztVQUN2Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU0sQ0FBQztRQUN2QixDQUFDLENBQUM7TUFDTjtJQUFDO0lBQUEsT0FBQVQsY0FBQTtFQUFBO0VBR0xBLGNBQWMsQ0FBQ1ksT0FBTyxHQUFHLENBQUMsYUFBYSxDQUFDO0VBQ3hDZixFQUFFLENBQUNnQixVQUFVLENBQUMsZ0JBQWdCLEVBQUViLGNBQWMsQ0FBQztBQUFDLEdBcEIxQ2MsR0FBRyxLQUFIQSxHQUFHIn0=