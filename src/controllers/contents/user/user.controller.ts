namespace App 
{
    let ng = angular.module('App');

    class UserController implements angular.IController
    {
        public columns: string[]
        public data: any = null
        public count: number = 0

        constructor(
            private scope: angular.IScope,
            private userService: UserService
        ) 
        {
            this.columns = ['Name', 'Username', 'Email', 'Address', 'Actions']
            this.userService.GetAll().then((result) => {
                this.count = Array.isArray(result?.data) ? result.data.length : 0
            })
            this.userService.GetByParams({ page: 1, limit: 10 }).then((result) => {
                this.data = Array.isArray(result?.data) ? result.data : []
            })
        }

        GetDisplayStreet(address: any) {
            return address?.street ? `${address?.street}, ${address?.city} - ${address.zipcode}` : '-'
        }
    }

    UserController.$inject = ['$scope', 'UserService']
    ng.controller('userController', UserController);
}