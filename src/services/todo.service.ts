namespace App 
{
    let ng = angular.module('TodoServiceModule', []);

    interface Todo
    {
        id: number
        userId: number
        title: string
        completed: boolean
    }

    export class TodoService 
    {
        constructor(private http: angular.IHttpService)
        {
        }

        async GetAll()
        {
            const result = await this.http.get<Todo[]>(`${config.apiUrl}/todos`);
            return result;
        }

        async GetOne(id: number)
        {
            const result = await this.http.get<Todo>(`${config.apiUrl}/todos/${id}`);
            return result;
        }

        async GetByParams(filters: { page: number, limit: number } | any = null) {
            let params: any
            if (filters) 
            {
                params = new URLSearchParams({ _page: filters.page, _limit: filters.limit })
            }  
            const paramsString = params ? `?${params.toString()}` : ''
            const result = await this.http.get<Todo[]>(`${config.apiUrl}/todos`.concat(paramsString));
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
