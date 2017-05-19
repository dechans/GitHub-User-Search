import {Component} from '@angular/core';

// Importation du service github
import {GithubService} from '../services/github.services';

@Component({
    moduleId: module.id,
    selector: 'app-profile',
    templateUrl: './profile.component.html',
})

export class ProfileComponent {
    user: any; // Contient les données utilisateur
    repos: any; // Contient les dépôts de l'utilisateur
    username: string; // Nom de l'utilisateur recherché

    constructor(private _githubService: GithubService) {
        this.user = false;
    }

    /**
     * Fonction de recherche de l'utilisateur
     * Reçoit le nom à la pression (keyup)
     */
    searchUser() {
        this._githubService.updateUser(this.username);

        this._githubService.getUser().subscribe(user => {
            this.user = user;
        });

        this._githubService.getRepos().subscribe(repos => {
            this.repos = repos;
        });
    }
}
