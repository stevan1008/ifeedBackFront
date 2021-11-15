import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ConfigComponent } from '../config/config.component';

import { AuthenticationGuard } from '../guards/authentication.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'contactus', component: ContactComponent, canActivate: [AuthenticationGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate:[AuthenticationGuard] },
    { path: 'config', component: ConfigComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
