namespace App 
{
    let ng = angular.module('App');

    class PostController implements angular.IController, angular.IOnInit
    {
        constructor(
            private postService: PostService
        ) 
        {
        }

        $onInit(): void {
            this.postService.GetAll().then((result) => {
                console.log(result)
            })
        }
    }

    PostController.$inject = ['PostService']
    ng.controller('postController', PostController);
}