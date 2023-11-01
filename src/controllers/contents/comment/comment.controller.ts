namespace App 
{
    let ng = angular.module('App');

    class CommentController implements angular.IController, angular.IOnInit
    {
        constructor(
            private commentService: CommentService
        ) 
        {
        }

        $onInit(): void {
            this.commentService.GetAll().then((result) => {
                console.log(result)
            })
        }
    }

    CommentController.$inject = ['CommentService']
    ng.controller('commentController', CommentController);
}