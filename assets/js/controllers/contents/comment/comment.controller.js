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
  var CommentController = /*#__PURE__*/function () {
    function CommentController(commentService) {
      _classCallCheck(this, CommentController);
      this.commentService = commentService;
    }
    _createClass(CommentController, [{
      key: "$onInit",
      value: function $onInit() {
        this.commentService.GetAll().then(function (result) {
          console.log(result);
        });
      }
    }]);
    return CommentController;
  }();
  CommentController.$inject = ['CommentService'];
  ng.controller('commentController', CommentController);
})(App || (App = {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJuZyIsImFuZ3VsYXIiLCJtb2R1bGUiLCJDb21tZW50Q29udHJvbGxlciIsImNvbW1lbnRTZXJ2aWNlIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCIkb25Jbml0IiwiR2V0QWxsIiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCIkaW5qZWN0IiwiY29udHJvbGxlciIsIkFwcCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9jb250ZW50cy9jb21tZW50L2NvbW1lbnQuY29udHJvbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgQXBwIFxyXG57XHJcbiAgICBsZXQgbmcgPSBhbmd1bGFyLm1vZHVsZSgnQXBwJyk7XHJcblxyXG4gICAgY2xhc3MgQ29tbWVudENvbnRyb2xsZXIgaW1wbGVtZW50cyBhbmd1bGFyLklDb250cm9sbGVyLCBhbmd1bGFyLklPbkluaXRcclxuICAgIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHJpdmF0ZSBjb21tZW50U2VydmljZTogQ29tbWVudFNlcnZpY2VcclxuICAgICAgICApIFxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRvbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWVudFNlcnZpY2UuR2V0QWxsKCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIENvbW1lbnRDb250cm9sbGVyLiRpbmplY3QgPSBbJ0NvbW1lbnRTZXJ2aWNlJ11cclxuICAgIG5nLmNvbnRyb2xsZXIoJ2NvbW1lbnRDb250cm9sbGVyJywgQ29tbWVudENvbnRyb2xsZXIpO1xyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0VBRUksSUFBSUEsRUFBRSxHQUFHQyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxLQUFLLENBQUM7RUFBQyxJQUV6QkMsaUJBQWlCO0lBRW5CLFNBQUFBLGtCQUNZQyxjQUE4QixFQUUxQztNQUFBQyxlQUFBLE9BQUFGLGlCQUFBO01BQUEsS0FGWUMsY0FBOEIsR0FBOUJBLGNBQThCO0lBRzFDO0lBQUNFLFlBQUEsQ0FBQUgsaUJBQUE7TUFBQUksR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQUMsUUFBQSxFQUFnQjtRQUNaLElBQUksQ0FBQ0wsY0FBYyxDQUFDTSxNQUFNLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsVUFBQ0MsTUFBTSxFQUFLO1VBQzFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztNQUNOO0lBQUM7SUFBQSxPQUFBVCxpQkFBQTtFQUFBO0VBR0xBLGlCQUFpQixDQUFDWSxPQUFPLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztFQUM5Q2YsRUFBRSxDQUFDZ0IsVUFBVSxDQUFDLG1CQUFtQixFQUFFYixpQkFBaUIsQ0FBQztBQUFDLEdBcEJoRGMsR0FBRyxLQUFIQSxHQUFHIn0=