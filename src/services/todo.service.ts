namespace App 
{
    let ng = angular.module('TodoServiceModule', []);

    export class TodoService 
    {
        constructor(private http: angular.IHttpService)
        {

        }

        async GetAll()
        {
            const result = await this.http.get<any[]>(`${config.apiUrl}/todos`);
            return result;
        }

        static Factory(http: angular.IHttpService)
        {
            return new TodoService(http);
        }
    }

    TodoService.Factory.$inject = ['$http'];
    ng.factory('TodoService', TodoService.Factory);
}
