namespace App 
{
    let ng = angular.module('CommentServiceModule', []);

    interface Comment
    {
        postId: number
        id: number
        name: string
        email: string
        body: string
    }

    export class CommentService 
    {
        constructor(private http: angular.IHttpService)
        {
        }

        async GetAll()
        {
            const result = await this.http.get<Comment[]>(`${config.apiUrl}/comments`);
            return result;
        }

        async GetOne(id: number)
        {
            const result = await this.http.get<Comment>(`${config.apiUrl}/comments/${id}`);
            return result;
        }

        async GetByParams(filters: { page: number, limit: number } | any = null) {
            let params: any
            if (filters) 
            {
                params = new URLSearchParams({ _page: filters.page, _limit: filters.limit })
            }  
            const paramsString = params ? `?${params.toString()}` : ''
            const result = await this.http.get<Comment[]>(`${config.apiUrl}/comments`.concat(paramsString));
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
