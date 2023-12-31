namespace App {
    const ngApp = angular.module('App', [
        'TplMainModule',
        'AlbumServiceModule',
        'CommentServiceModule',
        'PhotoServiceModule',
        'PostServiceModule',
        'TodoServiceModule',
        'UserServiceModule', 
        'ngRoute'
    ])

    export class AppController implements angular.IController
    {
        constructor(
            private scope: angular.IScope, 
        ) 
        {
        }
    }

    AppController.$inject = ['$scope'];

    ngApp.config(function($routeProvider: angular.route.IRouteProvider) {
        $routeProvider
        .when('/', {
            redirectTo: '/post'
        })
        .when('/login', {
            templateUrl : `${config.controllerPath}/login/login.controller.html`,
            controller: 'loginController',
            controllerAs: 'vm'
        })
        .when('/album', {
            templateUrl : `${config.controllerPath}/contents/album/album.controller.html`,
            controller: 'albumController',
            controllerAs: 'vm'
        })
        .when('/comment', {
            templateUrl : `${config.controllerPath}/contents/comment/comment.controller.html`,
            controller: 'commentController',
            controllerAs: 'vm'
        })
        .when('/photo', {
            templateUrl : `${config.controllerPath}/contents/photo/photo.controller.html`,
            controller: 'photoController',
            controllerAs: 'vm'
        })
        .when('/post', {
            templateUrl : `${config.controllerPath}/contents/post/post.controller.html`,
            controller: 'postController',
            controllerAs: 'vm'
        })
        .when('/todo', {
            templateUrl : `${config.controllerPath}/contents/todo/todo.controller.html`,
            controller: 'todoController',
            controllerAs: 'vm'
        })
        .when('/user', {
            templateUrl : `${config.controllerPath}/contents/user/user.controller.html`,
            controller: 'userController',
            controllerAs: 'vm'
        })
    });

    ngApp.controller('appCtrl', AppController);
}