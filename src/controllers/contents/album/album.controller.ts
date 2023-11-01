namespace App 
{
    let ng = angular.module('App');

    class AlbumController implements angular.IController, angular.IOnInit
    {
        constructor(
            private albumService: AlbumService
        ) 
        {
        }

        $onInit(): void {
            this.albumService.GetAll().then((result) => {
                console.log(result)
            })
        }
    }

    AlbumController.$inject = ['AlbumService']
    ng.controller('albumController', AlbumController);
}