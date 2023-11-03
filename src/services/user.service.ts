namespace App 
{
    let ng = angular.module('UserServiceModule', []);

    interface UserAddress
    {
        street?: string
        suite?: string
        city?: string
        zipcode?: string
        geo: { lat: number | string, lng: number | string}
    }

    interface User
    {
        id: number | string,
        name: string,
        username: string,
        email: string,
        address: UserAddress | any
        phone: string
        website: string
        company: { name: string | null, catchPhrase: string | any, bs: string | null }
    }

    export class UserService 
    {
        // static $inject = ['$http'];
        constructor(private http: angular.IHttpService)
        {
        }

        async GetAll()
        {
            const result = await this.http.get<User[]>(`${config.apiUrl}/users`);
            return result;
        }

        async GetOne(id: number)
        {
            const result = await this.http.get<User>(`${config.apiUrl}/users/${id}`);
            return result;
        }

        async GetByParams(filters: { page: number, limit: number } | any = null) {
            let params: any
            if (filters) 
            {
                params = new URLSearchParams({ _page: filters.page, _limit: filters.limit })
            }  
            const paramsString = params ? `?${params.toString()}` : ''
            const result = await this.http.get<User[]>(`${config.apiUrl}/users`.concat(paramsString));
            return result;
        }

        static Factory(http: angular.IHttpService)
        {
            return new UserService(http);
        }
    }

    // ng.service('UserService', UserService);
    UserService.Factory.$inject = ['$http'];
    ng.factory('UserService', UserService.Factory);
}
