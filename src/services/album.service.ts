namespace App 
{
    let ng = angular.module('AlbumServiceModule', []);

    interface Album
    {
        userId: number
        id: number
        title: string
    }

    export class AlbumService 
    {
        constructor(private http: angular.IHttpService)
        {
        }

        async GetAll()
        {
            const result = await this.http.get<Album[]>(`${config.apiUrl}/albums`);
            return result;
        }

        async GetOne(id: number)
        {
            const result = await this.http.get<Album>(`${config.apiUrl}/albums/${id}`);
            return result;
        }

        async GetByParams(filters: { page: number, limit: number } | any = null) {
            let params: any
            if (filters) 
            {
                params = new URLSearchParams({ _page: filters.page, _limit: filters.limit })
            }  
            const paramsString = params ? `?${params.toString()}` : ''
            const result = await this.http.get<Album[]>(`${config.apiUrl}/albums`.concat(paramsString));
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
