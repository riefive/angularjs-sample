namespace App 
{
    let ng = angular.module('CommentServiceModule', []);

    export class CommentService 
    {
        constructor(private http: angular.IHttpService)
        {

        }

        async GetAll()
        {
            const result = await this.http.get<any[]>(`${config.apiUrl}/comments`);
            return result;
        }

        static Factory(http: angular.IHttpService)
        {
            return new CommentService(http);
        }
    }

    CommentService.Factory.$inject = ['$http'];
    ng.factory('CommentService', CommentService.Factory);
}
