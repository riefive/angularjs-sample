namespace App 
{
    let ng = angular.module('PhotoServiceModule', []);

    export class PhotoService 
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
            return new PhotoService(http);
        }
    }

    PhotoService.Factory.$inject = ['$http'];
    ng.factory('PhotoService', PhotoService.Factory);
}
