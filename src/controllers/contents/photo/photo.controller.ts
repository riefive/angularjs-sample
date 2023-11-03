namespace App 
{
    let ng = angular.module('App');

    class PhotoController implements angular.IController
    {
        public columns: string[]
        public data: any = null
        public count: number = 0

        constructor(
            private photoService: PhotoService
        ) 
        {
            this.columns = ['Title', 'ThumbnailUrl']
            this.photoService.GetAll().then((result) => {
                this.count = Array.isArray(result?.data) ? result.data.length : 0
            })
            this.photoService.GetByParams({ page: 1, limit: 10 }).then((result) => {
                this.data = Array.isArray(result?.data) ? result.data : []
            })
        }
    }

    PhotoController.$inject = ['PhotoService']
    ng.controller('photoController', PhotoController);
}