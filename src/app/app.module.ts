import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ProfileComponent} from './components/profile.component';
import {NavBarComponent} from './components/navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        ProfileComponent,
        NavBarComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
