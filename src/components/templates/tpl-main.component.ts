namespace App 
{
    let ng = angular.module('TplMainModule', []);

    export class TplMainComponent implements angular.IController, angular.IOnInit {
        menus: any[] = []
        menuActive: string = 'post'

        constructor() { }
        
        $onInit(): void 
        {
            const currentPath = location.hash?.replace('#!/', '').trim()
            this.menuActive = currentPath
            this.menus = [
                { id: 'post', icon: 'bi-grid', title: 'Post', path: '/' },
                { id: 'comment', icon: 'bi-chat', title: 'Comment', path: '/' },
                { id: 'album', icon: 'bi-images', title: 'Album', path: '/' },
                { id: 'photo', icon: 'bi-image', title: 'Photo', path: '/' },
                { id: 'todo', icon: 'bi-check2-square', title: 'Todo', path: '/' },
                { id: 'user', icon: 'bi-person-circle', title: 'User', path: '/' }
            ]
        }

        OnMenuClick(keyName: string) 
        {
            this.menuActive = keyName
            const hashed = `#!/${keyName}`
            setTimeout(() => {
                location.href = hashed
            }, 150)
        }
    }

    TplMainComponent.$inject = [];

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
