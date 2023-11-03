namespace App 
{
    let ng = angular.module('App');

    class TodoController implements angular.IController
    {
        public columns: string[]
        public data: any = null
        public count: number = 0

        constructor(
            private todoService: TodoService
        ) 
        {
            this.columns = ['Id', 'UserId', 'Title', 'Completed', 'Actions']
            this.todoService.GetAll().then((result) => {
                this.count = Array.isArray(result?.data) ? result.data.length : 0
            })
            this.todoService.GetByParams({ page: 1, limit: 10 }).then((result) => {
                this.data = Array.isArray(result?.data) ? result.data : []
            })
        }
    }

    TodoController.$inject = ['TodoService']
    ng.controller('todoController', TodoController);
}