namespace App 
{
    let ng = angular.module('PostServiceModule', []);

    export class PostService 
    {
        constructor(private http: angular.IHttpService)
        {

        }

        async GetAll()
        {
            const result = await this.http.get<any[]>(`${config.apiUrl}/posts`);
            return result;
        }

        static Factory(http: angular.IHttpService)
        {
            return new PostService(http);
        }
    }

    PostService.Factory.$inject = ['$http'];
    ng.factory('PostService', PostService.Factory);
}
