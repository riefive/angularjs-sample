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
        var hashed = "#!/".concat(keyName);
        setTimeout(function () {
          location.href = hashed;
        }, 10);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJuZyIsImFuZ3VsYXIiLCJtb2R1bGUiLCJUcGxNYWluQ29tcG9uZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2RlZmluZVByb3BlcnR5IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCIkb25Jbml0IiwiX2xvY2F0aW9uJGhhc2giLCJjdXJyZW50UGF0aCIsImxvY2F0aW9uIiwiaGFzaCIsInJlcGxhY2UiLCJ0cmltIiwibWVudUFjdGl2ZSIsIm1lbnVzIiwiaWQiLCJpY29uIiwidGl0bGUiLCJwYXRoIiwiT25TaWduT3V0Iiwic2V0VGltZW91dCIsImhyZWYiLCJPbk1lbnVDbGljayIsImtleU5hbWUiLCJoYXNoZWQiLCJjb25jYXQiLCJfQXBwIiwiJGluamVjdCIsImNvbXBvbmVudCIsImNvbnRyb2xsZXIiLCJ0cmFuc2NsdWRlIiwidGVtcGxhdGVVcmwiLCJjb25maWciLCJjb21wb25lbnRQYXRoIiwiYmluZGluZ3MiLCJjb250cm9sbGVyQXMiLCJBcHAiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMvdHBsLW1haW4uY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBBcHAgXHJcbntcclxuICAgIGxldCBuZyA9IGFuZ3VsYXIubW9kdWxlKCdUcGxNYWluTW9kdWxlJywgW10pO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUcGxNYWluQ29tcG9uZW50IGltcGxlbWVudHMgYW5ndWxhci5JQ29udHJvbGxlciwgYW5ndWxhci5JT25Jbml0IHtcclxuICAgICAgICBtZW51czogYW55W10gPSBbXVxyXG4gICAgICAgIG1lbnVBY3RpdmU6IHN0cmluZyA9ICdwb3N0J1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICRvbkluaXQoKTogdm9pZCBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gbG9jYXRpb24uaGFzaD8ucmVwbGFjZSgnIyEvJywgJycpLnRyaW0oKVxyXG4gICAgICAgICAgICB0aGlzLm1lbnVBY3RpdmUgPSBjdXJyZW50UGF0aFxyXG4gICAgICAgICAgICB0aGlzLm1lbnVzID0gW1xyXG4gICAgICAgICAgICAgICAgeyBpZDogJ3Bvc3QnLCBpY29uOiAnYmktZ3JpZCcsIHRpdGxlOiAnUG9zdCcsIHBhdGg6ICcvJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBpZDogJ2NvbW1lbnQnLCBpY29uOiAnYmktY2hhdCcsIHRpdGxlOiAnQ29tbWVudCcsIHBhdGg6ICcvJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBpZDogJ2FsYnVtJywgaWNvbjogJ2JpLWltYWdlcycsIHRpdGxlOiAnQWxidW0nLCBwYXRoOiAnLycgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6ICdwaG90bycsIGljb246ICdiaS1pbWFnZScsIHRpdGxlOiAnUGhvdG8nLCBwYXRoOiAnLycgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6ICd0b2RvJywgaWNvbjogJ2JpLWNoZWNrMi1zcXVhcmUnLCB0aXRsZTogJ1RvZG8nLCBwYXRoOiAnLycgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6ICd1c2VyJywgaWNvbjogJ2JpLXBlcnNvbi1jaXJjbGUnLCB0aXRsZTogJ1VzZXInLCBwYXRoOiAnLycgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPblNpZ25PdXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJyMhL2xvZ2luJ1xyXG4gICAgICAgICAgICB9LCAxMClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE9uTWVudUNsaWNrKGtleU5hbWU6IHN0cmluZykgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1lbnVBY3RpdmUgPSBrZXlOYW1lXHJcbiAgICAgICAgICAgIGNvbnN0IGhhc2hlZCA9IGAjIS8ke2tleU5hbWV9YFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBoYXNoZWRcclxuICAgICAgICAgICAgfSwgMTApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFRwbE1haW5Db21wb25lbnQuJGluamVjdCA9IFtdO1xyXG5cclxuICAgIGxldCBjb21wb25lbnQ6IGFuZ3VsYXIuSUNvbXBvbmVudE9wdGlvbnMgPSB7XHJcbiAgICAgICAgY29udHJvbGxlcjogVHBsTWFpbkNvbXBvbmVudCxcclxuICAgICAgICB0cmFuc2NsdWRlOiB7XHJcbiAgICAgICAgICAgICdib2R5JzogJ2RpdidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiBgJHtjb25maWcuY29tcG9uZW50UGF0aH0vdGVtcGxhdGVzL3RwbC1tYWluLmNvbXBvbmVudC5odG1sYCxcclxuICAgICAgICBiaW5kaW5nczogeyBpZDogJ0AnIH0sXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICB9O1xyXG5cclxuICAgIG5nLmNvbXBvbmVudCgndGVtcGxhdGVNYWluJywgY29tcG9uZW50KTtcclxufVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0VBRUksSUFBSUEsRUFBRSxHQUFHQyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDO0VBQUMsSUFFaENDLGdCQUFnQjtJQUl6QixTQUFBQSxpQkFBQSxFQUFjO01BQUFDLGVBQUEsT0FBQUQsZ0JBQUE7TUFBQUUsZUFBQSxnQkFIQyxFQUFFO01BQUFBLGVBQUEscUJBQ0ksTUFBTTtJQUVYO0lBQUNDLFlBQUEsQ0FBQUgsZ0JBQUE7TUFBQUksR0FBQTtNQUFBQyxLQUFBLEVBRWpCLFNBQUFDLFFBQUEsRUFDQTtRQUFBLElBQUFDLGNBQUE7UUFDSSxJQUFNQyxXQUFXLElBQUFELGNBQUEsR0FBR0UsUUFBUSxDQUFDQyxJQUFJLGNBQUFILGNBQUEsdUJBQWJBLGNBQUEsQ0FBZUksT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDQyxVQUFVLEdBQUdMLFdBQVc7UUFDN0IsSUFBSSxDQUFDTSxLQUFLLEdBQUcsQ0FDVDtVQUFFQyxFQUFFLEVBQUUsTUFBTTtVQUFFQyxJQUFJLEVBQUUsU0FBUztVQUFFQyxLQUFLLEVBQUUsTUFBTTtVQUFFQyxJQUFJLEVBQUU7UUFBSSxDQUFDLEVBQ3pEO1VBQUVILEVBQUUsRUFBRSxTQUFTO1VBQUVDLElBQUksRUFBRSxTQUFTO1VBQUVDLEtBQUssRUFBRSxTQUFTO1VBQUVDLElBQUksRUFBRTtRQUFJLENBQUMsRUFDL0Q7VUFBRUgsRUFBRSxFQUFFLE9BQU87VUFBRUMsSUFBSSxFQUFFLFdBQVc7VUFBRUMsS0FBSyxFQUFFLE9BQU87VUFBRUMsSUFBSSxFQUFFO1FBQUksQ0FBQyxFQUM3RDtVQUFFSCxFQUFFLEVBQUUsT0FBTztVQUFFQyxJQUFJLEVBQUUsVUFBVTtVQUFFQyxLQUFLLEVBQUUsT0FBTztVQUFFQyxJQUFJLEVBQUU7UUFBSSxDQUFDLEVBQzVEO1VBQUVILEVBQUUsRUFBRSxNQUFNO1VBQUVDLElBQUksRUFBRSxrQkFBa0I7VUFBRUMsS0FBSyxFQUFFLE1BQU07VUFBRUMsSUFBSSxFQUFFO1FBQUksQ0FBQyxFQUNsRTtVQUFFSCxFQUFFLEVBQUUsTUFBTTtVQUFFQyxJQUFJLEVBQUUsa0JBQWtCO1VBQUVDLEtBQUssRUFBRSxNQUFNO1VBQUVDLElBQUksRUFBRTtRQUFJLENBQUMsQ0FDckU7TUFDTDtJQUFDO01BQUFkLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFjLFVBQUEsRUFDQTtRQUNJQyxVQUFVLENBQUMsWUFBTTtVQUNiWCxRQUFRLENBQUNZLElBQUksR0FBRyxVQUFVO1FBQzlCLENBQUMsRUFBRSxFQUFFLENBQUM7TUFDVjtJQUFDO01BQUFqQixHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBaUIsWUFBWUMsT0FBZSxFQUMzQjtRQUNJLElBQUksQ0FBQ1YsVUFBVSxHQUFHVSxPQUFPO1FBQ3pCLElBQU1DLE1BQU0sU0FBQUMsTUFBQSxDQUFTRixPQUFPLENBQUU7UUFDOUJILFVBQVUsQ0FBQyxZQUFNO1VBQ2JYLFFBQVEsQ0FBQ1ksSUFBSSxHQUFHRyxNQUFNO1FBQzFCLENBQUMsRUFBRSxFQUFFLENBQUM7TUFDVjtJQUFDO0lBQUEsT0FBQXhCLGdCQUFBO0VBQUE7RUFBQTBCLElBQUEsQ0FBQTFCLGdCQUFBLEdBQUFBLGdCQUFBO0VBR0xBLGdCQUFnQixDQUFDMkIsT0FBTyxHQUFHLEVBQUU7RUFFN0IsSUFBSUMsU0FBb0MsR0FBRztJQUN2Q0MsVUFBVSxFQUFFN0IsZ0JBQWdCO0lBQzVCOEIsVUFBVSxFQUFFO01BQ1IsTUFBTSxFQUFFO0lBQ1osQ0FBQztJQUNEQyxXQUFXLEtBQUFOLE1BQUEsQ0FBS08sTUFBTSxDQUFDQyxhQUFhLHVDQUFvQztJQUN4RUMsUUFBUSxFQUFFO01BQUVuQixFQUFFLEVBQUU7SUFBSSxDQUFDO0lBQ3JCb0IsWUFBWSxFQUFFO0VBQ2xCLENBQUM7RUFFRHRDLEVBQUUsQ0FBQytCLFNBQVMsQ0FBQyxjQUFjLEVBQUVBLFNBQVMsQ0FBQztBQUFDLEdBckRsQ1EsR0FBRyxLQUFIQSxHQUFHIn0=