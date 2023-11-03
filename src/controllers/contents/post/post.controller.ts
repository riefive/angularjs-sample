namespace App 
{
    let ng = angular.module('App');

    class PostController implements angular.IController
    {
        public columns: string[]
        public data: any = null
        public count: number = 0

        constructor(
            private postService: PostService
        ) 
        {
            this.columns = ['Id', 'UserId', 'Title', 'Actions']
            this.postService.GetAll().then((result) => {
                this.count = Array.isArray(result?.data) ? result.data.length : 0
            })
            this.postService.GetByParams({ page: 1, limit: 10 }).then((result) => {
                this.data = Array.isArray(result?.data) ? result.data : []
            })
        }
    }

    PostController.$inject = ['PostService']
    ng.controller('postController', PostController);
}