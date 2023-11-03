namespace App 
{
    let ng = angular.module('App');

    class CommentController implements angular.IController
    {
        public columns: string[]
        public data: any = null
        public count: number = 0

        constructor(
            private commentService: CommentService
        ) 
        {
            this.columns = ['Name', 'Email']
            this.commentService.GetAll().then((result) => {
                this.count = Array.isArray(result?.data) ? result.data.length : 0
            })
            this.commentService.GetByParams({ page: 1, limit: 10 }).then((result) => {
                this.data = Array.isArray(result?.data) ? result.data : []
            })
        }
    }

    CommentController.$inject = ['CommentService']
    ng.controller('commentController', CommentController);
}