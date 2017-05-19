import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
})

export class NavBarComponent {
    private title: string;

    constructor() {
        this.title = 'GitHub : Search User';
    }
}
