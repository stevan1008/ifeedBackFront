import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ConfigComponent } from '../config/config.component';
import { PanelesComponent } from '../paneles/paneles.component';
import { SetUpComponent } from '../set-up/set-up.component';
import { ActualizarComponent } from '../actualizar/actualizar.component';
import { ConfigPanelComponent } from '../config-panel/config-panel.component';
import { PanelDetailComponent } from '../panel-detail/panel-detail.component';
import { SetUpPanelesComponent } from '../set-up-paneles/set-up-paneles.component';


import { AuthenticationGuard } from '../guards/authentication.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'contactus', component: ContactComponent, canActivate: [AuthenticationGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate:[AuthenticationGuard] },
    { path: 'config', component: ConfigComponent },
    { path: 'config/settings', component: PanelesComponent },
    { path: 'config/update/:id', component: ConfigComponent },
    { path: 'config/manager', component: SetUpComponent },
    { path: 'config/another/:id', component: ConfigPanelComponent },
    { path: 'config/:id', component: SetUpPanelesComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
