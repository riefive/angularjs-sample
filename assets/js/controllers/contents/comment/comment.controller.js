"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var App;
(function (_App) {
  var ng = angular.module('App');
  var CommentController = /*#__PURE__*/_createClass(function CommentController() {
    _classCallCheck(this, CommentController);
  });
  ng.controller('commentController', CommentController);
})(App || (App = {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJuZyIsImFuZ3VsYXIiLCJtb2R1bGUiLCJDb21tZW50Q29udHJvbGxlciIsIl9jcmVhdGVDbGFzcyIsIl9jbGFzc0NhbGxDaGVjayIsImNvbnRyb2xsZXIiLCJBcHAiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvY29udGVudHMvY29tbWVudC9jb21tZW50LmNvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIEFwcCBcclxue1xyXG4gICAgbGV0IG5nID0gYW5ndWxhci5tb2R1bGUoJ0FwcCcpO1xyXG5cclxuICAgIGNsYXNzIENvbW1lbnRDb250cm9sbGVyIGltcGxlbWVudHMgYW5ndWxhci5JQ29udHJvbGxlclxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nLmNvbnRyb2xsZXIoJ2NvbW1lbnRDb250cm9sbGVyJywgQ29tbWVudENvbnRyb2xsZXIpO1xyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0VBRUksSUFBSUEsRUFBRSxHQUFHQyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxLQUFLLENBQUM7RUFBQyxJQUV6QkMsaUJBQWlCLGdCQUFBQyxZQUFBLFVBQUFELGtCQUFBO0lBQUFFLGVBQUEsT0FBQUYsaUJBQUE7RUFBQTtFQUt2QkgsRUFBRSxDQUFDTSxVQUFVLENBQUMsbUJBQW1CLEVBQUVILGlCQUFpQixDQUFDO0FBQUMsR0FUaERJLEdBQUcsS0FBSEEsR0FBRyJ9