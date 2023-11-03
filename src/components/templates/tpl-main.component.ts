namespace App 
{
    let ng = angular.module('TplMainModule', []);

    export class TplMainComponent implements angular.IController, angular.IOnInit {
        id: string
        menus: any[] = []
        menuActive: string = 'post'

        constructor(
            private location: any
        ) 
        {
        }
        
        $onInit(): void 
        {
            const currentPath = location.hash?.replace('#!/', '').trim()
            this.menuActive = currentPath
            this.menus = [
                { id: 'post', icon: 'bi-grid', title: 'Post', path: '/post' },
                { id: 'comment', icon: 'bi-chat', title: 'Comment', path: '/comment' },
                { id: 'album', icon: 'bi-images', title: 'Album', path: '/album' },
                { id: 'photo', icon: 'bi-image', title: 'Photo', path: '/photo' },
                { id: 'todo', icon: 'bi-check2-square', title: 'Todo', path: '/todo' },
                { id: 'user', icon: 'bi-person-circle', title: 'User', path: '/user' }
            ]
            console.log(this.id)
        }

        OnSignOut()
        {
            setTimeout(() => {
                location.href = '#!/login'
            }, 10)
        }

        OnMenuClick(keyName: string) 
        {
            this.menuActive = keyName
            const hashedCurrent = this.location.path()
            console.log(hashedCurrent)
            const hashed = `#!/${keyName}`
            setTimeout(() => {
                location.href = hashed
            }, 10)
        }
    }

    TplMainComponent.$inject = ['$location'];

    let component: angular.IComponentOptions = {
        controller: TplMainComponent,
        transclude: {
            'body': 'div'
        },
        templateUrl: `${config.componentPath}/templates/tpl-main.component.html`,
        bindings: { id: '@' },
        controllerAs: 'vm'
    };

    ng.component('templateMain', component);
}
