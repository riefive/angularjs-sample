namespace App 
{
    let ng = angular.module('PhotoServiceModule', []);

    interface Photo
    {
        albumId: number
        id: number
        title: string
        url: string
        thumbnailUrl: string
    }


    export class PhotoService 
    {
        constructor(private http: angular.IHttpService)
        {
        }

        async GetAll()
        {
            const result = await this.http.get<Photo[]>(`${config.apiUrl}/photos`);
            return result;
        }

        async GetOne(id: number)
        {
            const result = await this.http.get<Photo>(`${config.apiUrl}/photos/${id}`);
            return result;
        }

        async GetByParams(filters: { page: number, limit: number } | any = null) {
            let params: any
            if (filters) 
            {
                params = new URLSearchParams({ _page: filters.page, _limit: filters.limit })
            }  
            const paramsString = params ? `?${params.toString()}` : ''
            const result = await this.http.get<Photo[]>(`${config.apiUrl}/photos`.concat(paramsString));
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
