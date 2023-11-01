namespace App 
{
    let ng = angular.module('App');

    class loginController implements angular.IController
    {
        OnSignIn()
        {
            setTimeout(() => {
                location.href = '#!/'
            }, 10)
        }
    }

    ng.controller('loginController', loginController);
}