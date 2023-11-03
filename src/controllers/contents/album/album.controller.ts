namespace App 
{
    let ng = angular.module('App');

    class AlbumController implements angular.IController, angular.IOnInit
    {
        public isReady: boolean = false
        public columns: string[]
        public data: any = null
        public count: number = 0

        constructor(
            private albumService: AlbumService
        ) 
        {
        }

        $onInit(): void {
            this.columns = ['Title']
            this.albumService.GetAll().then((result) => {
                this.count = Array.isArray(result?.data) ? result.data.length : 0
            })
            this.albumService.GetByParams({ page: 1, limit: 10 }).then((result) => {
                this.data = Array.isArray(result?.data) ? result.data : []
            })
            setTimeout(() => {
                this.isReady = this.count > 0 && this.data.length > 0
                console.log(this.isReady)
            }, 1000)
        }
    }

    AlbumController.$inject = ['AlbumService']
    ng.controller('albumController', AlbumController);
}