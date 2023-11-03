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
  var ng = angular.module('TplMainModule', []);
  var TplMainComponent = /*#__PURE__*/function () {
    function TplMainComponent(location) {
      _classCallCheck(this, TplMainComponent);
      _defineProperty(this, "menus", []);
      _defineProperty(this, "menuActive", 'post');
      this.location = location;
    }
    _createClass(TplMainComponent, [{
      key: "$onInit",
      value: function $onInit() {
        var _location$hash;
        var currentPath = (_location$hash = location.hash) === null || _location$hash === void 0 ? void 0 : _location$hash.replace('#!/', '').trim();
        this.menuActive = currentPath;
        this.menus = [{
          id: 'post',
          icon: 'bi-grid',
          title: 'Post',
          path: '/post'
        }, {
          id: 'comment',
          icon: 'bi-chat',
          title: 'Comment',
          path: '/comment'
        }, {
          id: 'album',
          icon: 'bi-images',
          title: 'Album',
          path: '/album'
        }, {
          id: 'photo',
          icon: 'bi-image',
          title: 'Photo',
          path: '/photo'
        }, {
          id: 'todo',
          icon: 'bi-check2-square',
          title: 'Todo',
          path: '/todo'
        }, {
          id: 'user',
          icon: 'bi-person-circle',
          title: 'User',
          path: '/user'
        }];
        console.log(this.id);
      }
    }, {
      key: "OnSignOut",
      value: function OnSignOut() {
        setTimeout(function () {
          location.href = '#!/login';
        }, 10);
      }
    }, {
      key: "OnMenuClick",
      value: function OnMenuClick(keyName) {
        this.menuActive = keyName;
        var hashedCurrent = this.location.path();
        console.log(hashedCurrent);
        var hashed = "#!/".concat(keyName);
        setTimeout(function () {
          location.href = hashed;
        }, 10);
      }
    }]);
    return TplMainComponent;
  }();
  _App.TplMainComponent = TplMainComponent;
  TplMainComponent.$inject = ['$location'];
  var component = {
    controller: TplMainComponent,
    transclude: {
      'body': 'div'
    },
    templateUrl: "".concat(config.componentPath, "/templates/tpl-main.component.html"),
    bindings: {
      id: '@'
    },
    controllerAs: 'vm'
  };
  ng.component('templateMain', component);
})(App || (App = {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJuZyIsImFuZ3VsYXIiLCJtb2R1bGUiLCJUcGxNYWluQ29tcG9uZW50IiwibG9jYXRpb24iLCJfY2xhc3NDYWxsQ2hlY2siLCJfZGVmaW5lUHJvcGVydHkiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIiRvbkluaXQiLCJfbG9jYXRpb24kaGFzaCIsImN1cnJlbnRQYXRoIiwiaGFzaCIsInJlcGxhY2UiLCJ0cmltIiwibWVudUFjdGl2ZSIsIm1lbnVzIiwiaWQiLCJpY29uIiwidGl0bGUiLCJwYXRoIiwiY29uc29sZSIsImxvZyIsIk9uU2lnbk91dCIsInNldFRpbWVvdXQiLCJocmVmIiwiT25NZW51Q2xpY2siLCJrZXlOYW1lIiwiaGFzaGVkQ3VycmVudCIsImhhc2hlZCIsImNvbmNhdCIsIl9BcHAiLCIkaW5qZWN0IiwiY29tcG9uZW50IiwiY29udHJvbGxlciIsInRyYW5zY2x1ZGUiLCJ0ZW1wbGF0ZVVybCIsImNvbmZpZyIsImNvbXBvbmVudFBhdGgiLCJiaW5kaW5ncyIsImNvbnRyb2xsZXJBcyIsIkFwcCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy90cGwtbWFpbi5jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIEFwcCBcclxue1xyXG4gICAgbGV0IG5nID0gYW5ndWxhci5tb2R1bGUoJ1RwbE1haW5Nb2R1bGUnLCBbXSk7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRwbE1haW5Db21wb25lbnQgaW1wbGVtZW50cyBhbmd1bGFyLklDb250cm9sbGVyLCBhbmd1bGFyLklPbkluaXQge1xyXG4gICAgICAgIGlkOiBzdHJpbmdcclxuICAgICAgICBtZW51czogYW55W10gPSBbXVxyXG4gICAgICAgIG1lbnVBY3RpdmU6IHN0cmluZyA9ICdwb3N0J1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjogYW55XHJcbiAgICAgICAgKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICRvbkluaXQoKTogdm9pZCBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gbG9jYXRpb24uaGFzaD8ucmVwbGFjZSgnIyEvJywgJycpLnRyaW0oKVxyXG4gICAgICAgICAgICB0aGlzLm1lbnVBY3RpdmUgPSBjdXJyZW50UGF0aFxyXG4gICAgICAgICAgICB0aGlzLm1lbnVzID0gW1xyXG4gICAgICAgICAgICAgICAgeyBpZDogJ3Bvc3QnLCBpY29uOiAnYmktZ3JpZCcsIHRpdGxlOiAnUG9zdCcsIHBhdGg6ICcvcG9zdCcgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6ICdjb21tZW50JywgaWNvbjogJ2JpLWNoYXQnLCB0aXRsZTogJ0NvbW1lbnQnLCBwYXRoOiAnL2NvbW1lbnQnIH0sXHJcbiAgICAgICAgICAgICAgICB7IGlkOiAnYWxidW0nLCBpY29uOiAnYmktaW1hZ2VzJywgdGl0bGU6ICdBbGJ1bScsIHBhdGg6ICcvYWxidW0nIH0sXHJcbiAgICAgICAgICAgICAgICB7IGlkOiAncGhvdG8nLCBpY29uOiAnYmktaW1hZ2UnLCB0aXRsZTogJ1Bob3RvJywgcGF0aDogJy9waG90bycgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6ICd0b2RvJywgaWNvbjogJ2JpLWNoZWNrMi1zcXVhcmUnLCB0aXRsZTogJ1RvZG8nLCBwYXRoOiAnL3RvZG8nIH0sXHJcbiAgICAgICAgICAgICAgICB7IGlkOiAndXNlcicsIGljb246ICdiaS1wZXJzb24tY2lyY2xlJywgdGl0bGU6ICdVc2VyJywgcGF0aDogJy91c2VyJyB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5pZClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE9uU2lnbk91dCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSAnIyEvbG9naW4nXHJcbiAgICAgICAgICAgIH0sIDEwKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgT25NZW51Q2xpY2soa2V5TmFtZTogc3RyaW5nKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubWVudUFjdGl2ZSA9IGtleU5hbWVcclxuICAgICAgICAgICAgY29uc3QgaGFzaGVkQ3VycmVudCA9IHRoaXMubG9jYXRpb24ucGF0aCgpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGhhc2hlZEN1cnJlbnQpXHJcbiAgICAgICAgICAgIGNvbnN0IGhhc2hlZCA9IGAjIS8ke2tleU5hbWV9YFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBoYXNoZWRcclxuICAgICAgICAgICAgfSwgMTApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFRwbE1haW5Db21wb25lbnQuJGluamVjdCA9IFsnJGxvY2F0aW9uJ107XHJcblxyXG4gICAgbGV0IGNvbXBvbmVudDogYW5ndWxhci5JQ29tcG9uZW50T3B0aW9ucyA9IHtcclxuICAgICAgICBjb250cm9sbGVyOiBUcGxNYWluQ29tcG9uZW50LFxyXG4gICAgICAgIHRyYW5zY2x1ZGU6IHtcclxuICAgICAgICAgICAgJ2JvZHknOiAnZGl2J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6IGAke2NvbmZpZy5jb21wb25lbnRQYXRofS90ZW1wbGF0ZXMvdHBsLW1haW4uY29tcG9uZW50Lmh0bWxgLFxyXG4gICAgICAgIGJpbmRpbmdzOiB7IGlkOiAnQCcgfSxcclxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcclxuICAgIH07XHJcblxyXG4gICAgbmcuY29tcG9uZW50KCd0ZW1wbGF0ZU1haW4nLCBjb21wb25lbnQpO1xyXG59XHJcbiJdLCJtYXBw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