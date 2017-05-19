import {Component} from '@angular/core';
import {GithubService} from './services/github.services'; // Importation du service github

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [GithubService]
})

export class AppComponent {
    title: string;

    constructor() {
        this.title = 'GitHub Service';
    }
}

