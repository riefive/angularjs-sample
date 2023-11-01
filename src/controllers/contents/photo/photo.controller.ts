namespace App 
{
    let ng = angular.module('App');

    class PhotoController implements angular.IController, angular.IOnInit
    {
        constructor(
            private photoService: PhotoService
        ) 
        {
        }

        $onInit(): void {
            this.photoService.GetAll().then((result) => {
                console.log(result)
            })
        }
    }

    PhotoController.$inject = ['PhotoService']
    ng.controller('photoController', PhotoController);
}