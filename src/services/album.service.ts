namespace App 
{
    let ng = angular.module('AlbumServiceModule', []);

    export class AlbumService 
    {
        constructor(private http: angular.IHttpService)
        {

        }

        async GetAll()
        {
            const result = await this.http.get<any[]>(`${config.apiUrl}/albums`);
            return result;
        }

        static Factory(http: angular.IHttpService)
        {
            return new AlbumService(http);
        }
    }

    AlbumService.Factory.$inject = ['$http'];
    ng.factory('AlbumService', AlbumService.Factory);
}
