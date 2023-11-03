namespace App 
{
    let ng = angular.module('PostServiceModule', []);

    interface Post
    {
        id: number
        userId: number
        title: string
        body: string
    }

    export class PostService 
    {
        constructor(private http: angular.IHttpService)
        {
        }

        async GetAll()
        {
            const result = await this.http.get<Post[]>(`${config.apiUrl}/posts`);
            return result;
        }

        async GetOne(id: number)
        {
            const result = await this.http.get<Post>(`${config.apiUrl}/posts/${id}`);
            return result;
        }

        async GetByParams(filters: { page: number, limit: number } | any = null) {
            let params: any
            if (filters) 
            {
                params = new URLSearchParams({ _page: filters.page, _limit: filters.limit })
            }  
            const paramsString = params ? `?${params.toString()}` : ''
            const result = await this.http.get<Post[]>(`${config.apiUrl}/posts`.concat(paramsString));
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
