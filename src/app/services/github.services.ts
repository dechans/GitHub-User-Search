/**
 * Service : Recherche d'un utilisateur GitHub
 */

import {Injectable} from '@angular/core';
import {Http} from '@angular/http'; // HTTP
import 'rxjs/add/operator/map'; // Map

@Injectable()

// Classe du service, notre service GitHub
export class GithubService {
    private username: string; // Nom à rechercher
    private client_id: string; // API ID
    private client_secret: string; // API SECRET KEY

    constructor(private _http: Http) {
        this.username = '';
        this.client_id = 'votre_id_client_github_ici';
        this.client_secret = 'votre_cle_secrete_ici';
    }

    /**
     * Obtention des informations de l'utilisateur recherché
     * @returns {Observable<R>}
     */
    getUser() {
        return this._http.get('http://api.github.com/users/'
            + this.username
            + '?client_id='
            + this.client_id + '&client_secret='
            + this.client_secret)
            .map(res => res.json());
    }

    /**
     * Obtention des dépôts
     * @returns {Observable<R>}
     */
    getRepos() {
        return this._http.get('http://api.github.com/users/'
            + this.username
            + '/repos?client_id='
            + this.client_id + '&client_secret='
            + this.client_secret)
            .map(res => res.json());
    }

    /**
     * Mise a jour du nom de l'utilisateur recherché
     * @param username
     */
    updateUser(username: string) {
        this.username = username;
    }
}

