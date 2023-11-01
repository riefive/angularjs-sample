namespace App 
{
    let ng = angular.module('App');

    class TodoController implements angular.IController, angular.IOnInit
    {
        constructor(
            private todoService: TodoService
        ) 
        {
        }

        $onInit(): void {
            this.todoService.GetAll().then((result) => {
                console.log(result)
            })
        }
    }

    TodoController.$inject = ['TodoService']
    ng.controller('todoController', TodoController);
}