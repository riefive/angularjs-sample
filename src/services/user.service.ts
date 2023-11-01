namespace App 
{
    let ng = angular.module('UserServiceModule', []);

    export class UserService 
    {
        // static $inject = ['$http'];
        constructor(private http: angular.IHttpService)
        {

        }

        async GetAll()
        {
            const result = await this.http.get<any[]>(`${config.apiUrl}/users`);
            return result;
        }

        static Factory(http: angular.IHttpService)
        {
            return new UserService(http);
        }
    }

    // ng.service('UserService', UserService);
    UserService.Factory.$inject = ['$http'];
    ng.factory('UserService', UserService.Factory);
}
