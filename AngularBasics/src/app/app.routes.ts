import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';

export const routes: Routes = [
    {path: 'header', component: HeaderComponent}, 
    {path: 'top-header', component: TopHeaderComponent},
    {path: 'top-menu', component: TopMenuComponent},
    {path: 'top-menu', component: MainMenuComponent}
];
