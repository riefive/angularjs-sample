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
    function TplMainComponent() {
      _classCallCheck(this, TplMainComponent);
      _defineProperty(this, "menus", []);
      _defineProperty(this, "menuActive", 'post');
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
          path: '/'
        }, {
          id: 'comment',
          icon: 'bi-chat',
          title: 'Comment',
          path: '/'
        }, {
          id: 'album',
          icon: 'bi-images',
          title: 'Album',
          path: '/'
        }, {
          id: 'photo',
          icon: 'bi-image',
          title: 'Photo',
          path: '/'
        }, {
          id: 'todo',
          icon: 'bi-check2-square',
          title: 'Todo',
          path: '/'
        }, {
          id: 'user',
          icon: 'bi-person-circle',
          title: 'User',
          path: '/'
        }];
      }
    }, {
      key: "OnMenuClick",
      value: function OnMenuClick(keyName) {
        this.menuActive = keyName;
        var hashed = "#!/".concat(keyName);
        setTimeout(function () {
          location.href = hashed;
        }, 150);
      }
    }]);
    return TplMainComponent;
  }();
  _App.TplMainComponent = TplMainComponent;
  TplMainComponent.$inject = [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJuZyIsImFuZ3VsYXIiLCJtb2R1bGUiLCJUcGxNYWluQ29tcG9uZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2RlZmluZVByb3BlcnR5IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCIkb25Jbml0IiwiX2xvY2F0aW9uJGhhc2giLCJjdXJyZW50UGF0aCIsImxvY2F0aW9uIiwiaGFzaCIsInJlcGxhY2UiLCJ0cmltIiwibWVudUFjdGl2ZSIsIm1lbnVzIiwiaWQiLCJpY29uIiwidGl0bGUiLCJwYXRoIiwiT25NZW51Q2xpY2siLCJrZXlOYW1lIiwiaGFzaGVkIiwiY29uY2F0Iiwic2V0VGltZW91dCIsImhyZWYiLCJfQXBwIiwiJGluamVjdCIsImNvbXBvbmVudCIsImNvbnRyb2xsZXIiLCJ0cmFuc2NsdWRlIiwidGVtcGxhdGVVcmwiLCJjb25maWciLCJjb21wb25lbnRQYXRoIiwiYmluZGluZ3MiLCJjb250cm9sbGVyQXMiLCJBcHAiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMvdHBsLW1haW4uY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBBcHAgXHJcbntcclxuICAgIGxldCBuZyA9IGFuZ3VsYXIubW9kdWxlKCdUcGxNYWluTW9kdWxlJywgW10pO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUcGxNYWluQ29tcG9uZW50IGltcGxlbWVudHMgYW5ndWxhci5JQ29udHJvbGxlciwgYW5ndWxhci5JT25Jbml0IHtcclxuICAgICAgICBtZW51czogYW55W10gPSBbXVxyXG4gICAgICAgIG1lbnVBY3RpdmU6IHN0cmluZyA9ICdwb3N0J1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICRvbkluaXQoKTogdm9pZCBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gbG9jYXRpb24uaGFzaD8ucmVwbGFjZSgnIyEvJywgJycpLnRyaW0oKVxyXG4gICAgICAgICAgICB0aGlzLm1lbnVBY3RpdmUgPSBjdXJyZW50UGF0aFxyXG4gICAgICAgICAgICB0aGlzLm1lbnVzID0gW1xyXG4gICAgICAgICAgICAgICAgeyBpZDogJ3Bvc3QnLCBpY29uOiAnYmktZ3JpZCcsIHRpdGxlOiAnUG9zdCcsIHBhdGg6ICcvJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBpZDogJ2NvbW1lbnQnLCBpY29uOiAnYmktY2hhdCcsIHRpdGxlOiAnQ29tbWVudCcsIHBhdGg6ICcvJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBpZDogJ2FsYnVtJywgaWNvbjogJ2JpLWltYWdlcycsIHRpdGxlOiAnQWxidW0nLCBwYXRoOiAnLycgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6ICdwaG90bycsIGljb246ICdiaS1pbWFnZScsIHRpdGxlOiAnUGhvdG8nLCBwYXRoOiAnLycgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6ICd0b2RvJywgaWNvbjogJ2JpLWNoZWNrMi1zcXVhcmUnLCB0aXRsZTogJ1RvZG8nLCBwYXRoOiAnLycgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6ICd1c2VyJywgaWNvbjogJ2JpLXBlcnNvbi1jaXJjbGUnLCB0aXRsZTogJ1VzZXInLCBwYXRoOiAnLycgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPbk1lbnVDbGljayhrZXlOYW1lOiBzdHJpbmcpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tZW51QWN0aXZlID0ga2V5TmFtZVxyXG4gICAgICAgICAgICBjb25zdCBoYXNoZWQgPSBgIyEvJHtrZXlOYW1lfWBcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gaGFzaGVkXHJcbiAgICAgICAgICAgIH0sIDE1MClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgVHBsTWFpbkNvbXBvbmVudC4kaW5qZWN0ID0gW107XHJcblxyXG4gICAgbGV0IGNvbXBvbmVudDogYW5ndWxhci5JQ29tcG9uZW50T3B0aW9ucyA9IHtcclxuICAgICAgICBjb250cm9sbGVyOiBUcGxNYWluQ29tcG9uZW50LFxyXG4gICAgICAgIHRyYW5zY2x1ZGU6IHtcclxuICAgICAgICAgICAgJ2JvZHknOiAnZGl2J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6IGAke2NvbmZpZy5jb21wb25lbnRQYXRofS90ZW1wbGF0ZXMvdHBsLW1haW4uY29tcG9uZW50Lmh0bWxgLFxyXG4gICAgICAgIGJpbmRpbmdzOiB7IGlkOiAnQCcgfSxcclxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcclxuICAgIH07XHJcblxyXG4gICAgbmcuY29tcG9uZW50KCd0ZW1wbGF0ZU1haW4nLCBjb21wb25lbnQpO1xyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7RUFFSSxJQUFJQSxFQUFFLEdBQUdDLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUM7RUFBQyxJQUVoQ0MsZ0JBQWdCO0lBSXpCLFNBQUFBLGlCQUFBLEVBQWM7TUFBQUMsZUFBQSxPQUFBRCxnQkFBQTtNQUFBRSxlQUFBLGdCQUhDLEVBQUU7TUFBQUEsZUFBQSxxQkFDSSxNQUFNO0lBRVg7SUFBQ0MsWUFBQSxDQUFBSCxnQkFBQTtNQUFBSSxHQUFBO01BQUFDLEtBQUEsRUFFakIsU0FBQUMsUUFBQSxFQUNBO1FBQUEsSUFBQUMsY0FBQTtRQUNJLElBQU1DLFdBQVcsSUFBQUQsY0FBQSxHQUFHRSxRQUFRLENBQUNDLElBQUksY0FBQUgsY0FBQSx1QkFBYkEsY0FBQSxDQUFlSSxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUNDLFVBQVUsR0FBR0wsV0FBVztRQUM3QixJQUFJLENBQUNNLEtBQUssR0FBRyxDQUNUO1VBQUVDLEVBQUUsRUFBRSxNQUFNO1VBQUVDLElBQUksRUFBRSxTQUFTO1VBQUVDLEtBQUssRUFBRSxNQUFNO1VBQUVDLElBQUksRUFBRTtRQUFJLENBQUMsRUFDekQ7VUFBRUgsRUFBRSxFQUFFLFNBQVM7VUFBRUMsSUFBSSxFQUFFLFNBQVM7VUFBRUMsS0FBSyxFQUFFLFNBQVM7VUFBRUMsSUFBSSxFQUFFO1FBQUksQ0FBQyxFQUMvRDtVQUFFSCxFQUFFLEVBQUUsT0FBTztVQUFFQyxJQUFJLEVBQUUsV0FBVztVQUFFQyxLQUFLLEVBQUUsT0FBTztVQUFFQyxJQUFJLEVBQUU7UUFBSSxDQUFDLEVBQzdEO1VBQUVILEVBQUUsRUFBRSxPQUFPO1VBQUVDLElBQUksRUFBRSxVQUFVO1VBQUVDLEtBQUssRUFBRSxPQUFPO1VBQUVDLElBQUksRUFBRTtRQUFJLENBQUMsRUFDNUQ7VUFBRUgsRUFBRSxFQUFFLE1BQU07VUFBRUMsSUFBSSxFQUFFLGtCQUFrQjtVQUFFQyxLQUFLLEVBQUUsTUFBTTtVQUFFQyxJQUFJLEVBQUU7UUFBSSxDQUFDLEVBQ2xFO1VBQUVILEVBQUUsRUFBRSxNQUFNO1VBQUVDLElBQUksRUFBRSxrQkFBa0I7VUFBRUMsS0FBSyxFQUFFLE1BQU07VUFBRUMsSUFBSSxFQUFFO1FBQUksQ0FBQyxDQUNyRTtNQUNMO0lBQUM7TUFBQWQsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQWMsWUFBWUMsT0FBZSxFQUMzQjtRQUNJLElBQUksQ0FBQ1AsVUFBVSxHQUFHTyxPQUFPO1FBQ3pCLElBQU1DLE1BQU0sU0FBQUMsTUFBQSxDQUFTRixPQUFPLENBQUU7UUFDOUJHLFVBQVUsQ0FBQyxZQUFNO1VBQ2JkLFFBQVEsQ0FBQ2UsSUFBSSxHQUFHSCxNQUFNO1FBQzFCLENBQUMsRUFBRSxHQUFHLENBQUM7TUFDWDtJQUFDO0lBQUEsT0FBQXJCLGdCQUFBO0VBQUE7RUFBQXlCLElBQUEsQ0FBQXpCLGdCQUFBLEdBQUFBLGdCQUFBO0VBR0xBLGdCQUFnQixDQUFDMEIsT0FBTyxHQUFHLEVBQUU7RUFFN0IsSUFBSUMsU0FBb0MsR0FBRztJQUN2Q0MsVUFBVSxFQUFFNUIsZ0JBQWdCO0lBQzVCNkIsVUFBVSxFQUFFO01BQ1IsTUFBTSxFQUFFO0lBQ1osQ0FBQztJQUNEQyxXQUFXLEtBQUFSLE1BQUEsQ0FBS1MsTUFBTSxDQUFDQyxhQUFhLHVDQUFvQztJQUN4RUMsUUFBUSxFQUFFO01BQUVsQixFQUFFLEVBQUU7SUFBSSxDQUFDO0lBQ3JCbUIsWUFBWSxFQUFFO0VBQ2xCLENBQUM7RUFFRHJDLEVBQUUsQ0FBQzhCLFNBQVMsQ0FBQyxjQUFjLEVBQUVBLFNBQVMsQ0FBQztBQUFDLEdBOUNsQ1EsR0FBRyxLQUFIQSxHQUFHIn0=