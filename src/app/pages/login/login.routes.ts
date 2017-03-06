import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const pageTwoRoutes: Routes = [
	{ path: 'login', component: LoginComponent },
];

export const routes = RouterModule.forChild(pageTwoRoutes);
