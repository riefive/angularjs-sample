namespace App 
{
    let ng = angular.module('App');

    class UserController implements angular.IController, angular.IOnInit
    {
        constructor(
            private userService: UserService
        ) 
        {
        }

        $onInit(): void {
            this.userService.GetAll().then((result) => {
                console.log(result)
            })
        }
    }

    UserController.$inject = ['UserService']
    ng.controller('userController', UserController);
}